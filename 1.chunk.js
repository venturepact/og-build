webpackJsonp([1,11],{

/***/ 1010:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sideNavbar_component__ = __webpack_require__(1011);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sideNavbar_component__["a"]; });



/***/ },

/***/ 1011:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavbarComponent = (function () {
    function SideNavbarComponent(_cookieService, subDomainService, router) {
        this._cookieService = _cookieService;
        this.subDomainService = subDomainService;
        this.router = router;
        this.currentTab = 'team-setting';
        this.sideNaveBarHeader = '';
        this.is_subcripion_cancelled = false;
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
        this.is_subcripion_cancelled = false;
        var curUrlDomain = window.location.pathname.split('/');
        this.currentTab = curUrlDomain[curUrlDomain.length - 1];
        //this.showTab(this.currentTab);
        var sub_domain = this.subDomainService.subDomain.sub_domain;
        var companyAccess = JSON.parse(this._cookieService.readCookie('filepicker_token_json'));
        var subscription_status = '';
        if (!companyAccess)
            console.log('okoooooooo');
        else
            companyAccess.forEach(function (e) {
                if (e.key === sub_domain) {
                    subscription_status = e.value;
                }
            });
        if (subscription_status === 'cancelled') {
            this.is_subcripion_cancelled = true;
            jQuery('.wrapper-content').addClass('cancelled-setting');
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (this.currentTab === 'membership' || this.currentTab === 'my-account') && subscription_status != "cancelled") {
            window.location.pathname = window.location.pathname.split('/')[1];
        }
        jQuery('#lgScrWrapperContent').addClass('hide');
    };
    SideNavbarComponent.prototype.showTab = function (tab) {
        console.log('tab', tab);
        this.currentTab = tab;
        jQuery('.setting-nav').removeClass('active');
        if (tab === 'membership') {
            jQuery('#membDet').addClass('active');
            jQuery('#membDet-m').addClass('active');
            //jQuery('.wrapper-content').removeClass('hide');
            this.sideNaveBarHeader = 'Membership Details';
            jQuery('#smScrWrapperContent').css('display', 'block');
        }
        else if (tab === 'my-account') {
            jQuery('#accSet').addClass('active');
            jQuery('#accSet-m').addClass('active');
            //jQuery('.wrapper-content').removeClass('hide');
            this.sideNaveBarHeader = 'My Account';
            jQuery('#smScrWrapperContent').css('display', 'block');
        }
        else if (tab === 'team-setting') {
            jQuery('#teamSet').addClass('active');
            jQuery('#teamSet-m').addClass('active');
            //jQuery('.wrapper-content').removeClass('hide');
            this.sideNaveBarHeader = 'Team Settings';
            jQuery('#smScrWrapperContent').css('display', 'block');
        }
        else if (tab === 'api-integration') {
            jQuery('#apiKey').addClass('active');
            jQuery('#teamSet-m').addClass('active');
            //jQuery('.wrapper-content').removeClass('hide');
            this.sideNaveBarHeader = 'API Integration';
            jQuery('#smScrWrapperContent').css('display', 'block');
        }
    };
    SideNavbarComponent.prototype.addHide = function () {
        jQuery('#smScrSideNavbar').addClass('hide');
        jQuery('#setting-header').removeClass('hide');
    };
    SideNavbarComponent.prototype.goBack = function () {
        jQuery('#smScrSideNavbar').removeClass('hide');
        jQuery('#setting-header').addClass('hide');
        jQuery('#smScrWrapperContent').css('display', 'none');
    };
    SideNavbarComponent.prototype.ngAfterViewInit = function () {
        if (this.currentTab === 'settings') {
            jQuery('#teamSet').addClass('active');
            jQuery('#teamSet-m').addClass('active');
        }
    };
    SideNavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-sideNavbar',
            template: __webpack_require__(1142),
            styles: [__webpack_require__(1068)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* CookieService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], SideNavbarComponent);
    return SideNavbarComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 1041:
/***/ function(module, exports) {

module.exports = "\r\n/* custom material css start (sahil) */\r\n.sahil-material .form-control {\r\n    height: 38px;\r\n    padding: 7px 0;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    font-family: montserratregular;\r\n    color: #62696d;\r\n}\r\n.sahil-material .form-group label.control-label {\r\n    font-size: 14px;\r\n    line-height: 1.07142857;\r\n    color: #8e989f;\r\n    font-weight: 400;\r\n    margin: 16px 0 0 0;\r\n    font-family: montserratregular;\r\n}\r\n.sahil-material .form-group label.control-label.seo-static-label{\r\n    text-transform: uppercase !important;\r\n    font-size: 11px; \r\n    color: #8e989f !important;\r\n}\r\n.sahil-material .form-group.label-floating label.control-label, \r\n.sahil-material .form-group.label-placeholder label.control-label {\r\n    top: -7px;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    color: #8e989f;\r\n}\r\n.sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\r\n    top: -20px; \r\n    font-family: montserratregular;\r\n    font-size: 11px; \r\n    font-family: montserratregular;\r\n    color: #8e989f !important;\r\n}\r\n.sahil-material .form-group.label-floating.is-focused label.control-label {\r\n    top: -20px; \r\n    font-size: 10px; \r\n    font-family: montserratregular;\r\n    color: #8e989f !important;\r\n}\r\n.sahil-material .form-group.is-focused label,\r\n.sahil-material .form-group.is-focused label.control-label {\r\n    font-size: 11px; \r\n    font-family: montserratregular;\r\n    color: #8e989f !important;\r\n    text-transform: uppercase;\r\n}\r\n.sahil-material .form-control,\r\n.sahil-material .form-group .form-control {\r\n    border: 0 !important;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\r\n    background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#d7dbdd, #d7dbdd);\r\n    background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\r\n    \r\n}\r\n\r\n.sahil-material .form-group.is-focused .form-control {\r\n    outline: none;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n    background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n    background-image: -o-linear-gradient(#fb545b, #fb545b), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n    background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\r\n    -webkit-background-size: 100% 2px, 100% 1px;\r\n            background-size: 100% 2px, 100% 1px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    -webkit-transition-duration: 0.3s;\r\n        -o-transition-duration: 0.3s;\r\n            transition-duration: 0.3s;\r\n}\r\n\r\n/* custom material css end (sahil) */\r\n\r\n/* Start: Responsiveness */\r\n\r\n  .mobile-menu {\r\n      display: none;\r\n  }\r\n\r\n  .white-logo {\r\n      display: none !important;\r\n  }\r\n\r\n  .company-list,\r\n  .name-list {\r\n      width: 100%;\r\n      float: left;\r\n  }\r\n\r\n  @media (max-width: 767px) {\r\n      #userProfile-header .navbar-fixed-top .nav-padding {\r\n          padding-right: 0px;\r\n          padding-left: 0px;\r\n      }\r\n\r\n      .full-menu,\r\n      .dash-circle,\r\n      .dash-prog-outer h2 {\r\n          display: none;\r\n      }\r\n\r\n      .main-logo {\r\n          display: none !important;\r\n      }\r\n\r\n      .mobile-menu {\r\n          display: block;\r\n          float: right;\r\n          margin-top: 7px;\r\n          position: relative;\r\n      }\r\n\r\n      #userProfile-header .navbar-default {\r\n          background: #fb5f66 !important;\r\n          border: none;\r\n          margin-top: 0px;\r\n      }\r\n\r\n      #userProfile-header .navbar-default .mat-icon i.material-icons {\r\n          font-size: 24px;\r\n          color: #fff;\r\n          padding: 13px;\r\n      }\r\n\r\n      #userProfile-header .navbar-header h4.title {\r\n          color: #fff;\r\n          font-size: 16px;\r\n          text-align: center;\r\n          text-transform: uppercase;\r\n          padding-top: 7px;\r\n      }\r\n\r\n      .mobile-menu button {\r\n          border: none;\r\n          box-shadow: none;\r\n          color: #fff;\r\n          background: none;\r\n          float: right;\r\n          margin: 0px 5px;\r\n      }\r\n\r\n      .mobile-menu .btn-default:hover {\r\n          color: #fff;\r\n          background: none;\r\n      }\r\n\r\n      .mobile-dash {\r\n          padding: 0px;\r\n      }\r\n\r\n      .mobile-menu .dropdown-menu {\r\n          background: #62696d;\r\n          top: -11px;\r\n          border-radius: 0px;\r\n          left: -176px;\r\n          width: 235px;\r\n          font-family: montserratlight;\r\n          padding-bottom: 55px;\r\n      }\r\n\r\n      .mobile-menu .name-dropdown-border {\r\n          width: 100%;\r\n          margin: 5px 0px;\r\n      }\r\n\r\n      .mobile-menu .user-outr {\r\n          float: left;\r\n          width: 100%;\r\n          padding: 0;\r\n          margin: 0px;\r\n          display: block;\r\n      }\r\n\r\n      .mobile-menu .user-outr li {\r\n          float: right;\r\n          font-size: 24px;\r\n          font-family: montserratlight;\r\n          color: #fff;\r\n          margin-right: 24px;\r\n          /* margin: 10px 19px; */\r\n          margin-top: 8px;\r\n          margin-bottom: 6px;\r\n      }\r\n\r\n      .mobile-menu .user-outr li a {\r\n          margin-right: 30px;\r\n      }\r\n      \r\n      .user-outr li a {\r\n          float: left;\r\n          width: auto;\r\n          border: 2px solid #dae2e6;\r\n          border-radius: 50%;\r\n          margin-left: 5px;\r\n          margin-bottom: 5px;\r\n      }\r\n\r\n      .user-outr li a:hover {\r\n          border: 2px solid #f56151;\r\n      }\r\n\r\n      .mobile-menu .company-list li,\r\n      .mobile-menu .name-list li {\r\n          margin: 10px 0px;\r\n          text-align: right;\r\n          font-size: 16px;\r\n          width: 100%;\r\n          float: left;\r\n          padding-right: 20px;\r\n      }\r\n\r\n      .mobile-menu .company-list li a,\r\n      .mobile-menu .name-list li a {\r\n          float: right;\r\n          color: #fff;\r\n      }\r\n\r\n      .mobile-menu .company-list li a i {\r\n          margin-right: 20px;\r\n          float: left;\r\n      }\r\n\r\n      .mobile-menu .name-list li a i {\r\n          margin-left: 20px;\r\n          float: right;\r\n      }\r\n\r\n      .mobile-menu .company-list-title {\r\n          float: left;\r\n          color: #fff;\r\n      }\r\n\r\n      .white-logo {\r\n          display: block !important;\r\n      }\r\n\r\n      .dash-prog-outer {\r\n          float: left;\r\n          width: 100%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n      }\r\n\r\n      .dash-prog-outer h5 {\r\n          font-size: 24px;\r\n          text-align: center;\r\n          width: 100%;\r\n          margin-bottom: 1px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper {\r\n          min-height: 35px;\r\n          width: 100%;\r\n          text-align: center;\r\n      }\r\n\r\n      .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n          margin: 0 auto;\r\n          float: none;\r\n          text-align: center;\r\n      }\r\n\r\n      #userProfile-header .navbar-header {\r\n          float: left;\r\n          margin-left: -5px;\r\n          margin-right: 0px !important;\r\n      }\r\n\r\n      #userProfile-header .navbar-logopadding {\r\n          padding-right: 0px;\r\n          padding-top: 0px;\r\n      }\r\n\r\n      #userProfile-header .navbar-default {\r\n          height: 50px;\r\n          margin: 0px;\r\n          padding-bottom: 0px;\r\n      }\r\n\r\n      .white-logo .navbar-brand img {\r\n          height: 53px;\r\n          margin-top: -20px;\r\n          margin: 0 auto;\r\n          margin-top: -20px;\r\n      }\r\n\r\n      .white-logo .navbar-brand {\r\n          float: none;\r\n      }\r\n\r\n      .user-outr li a.add-user {\r\n          width: 45px;\r\n          height: 45px;\r\n          padding-top: 9px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n          top: -30px;\r\n          left: 17px;\r\n          font-size: 34px;\r\n          position: relative;\r\n          color: #f87b80;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n          font-size: 16px;\r\n      }\r\n\r\n      .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n          width: 91%;\r\n          font-size: 14px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n          width: 35px;\r\n          height: 35px;\r\n          padding-top: 8px;\r\n          font-size: 14px;\r\n          top: 13px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n          font-size: 14px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n          font-size: 24px;\r\n      }\r\n\r\n      .company-block-content {\r\n          margin-left: 50px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n          left: 42px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n          right: 34px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n          top: 8px;\r\n          left: -8px;\r\n      }\r\n\r\n  }\r\n\r\n  @media (max-width: 1900px) {\r\n      .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\r\n          font-size: 10px !important;\r\n      }\r\n\r\n      .sahil-material .form-group.label-floating.is-focused label.control-label {\r\n          font-size: 10px !important;\r\n      }\r\n\r\n      .my-profile .form-group.time-zone label.control-label {\r\n          font-size: 10px !important;\r\n      }\r\n  }\r\n\r\n/* End: Responsiveness */"

/***/ },

/***/ 1042:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1043:
/***/ function(module, exports) {

module.exports = ".ng-valid[required] {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.ng-invalid {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n"

/***/ },

/***/ 1044:
/***/ function(module, exports) {

module.exports = ".label {\r\n  border-radius: 1px;\r\n}\r\n.label,\r\n.label.label-default {\r\n  background-color: #9e9e9e;\r\n}\r\n.label.label-inverse {\r\n  background-color: #3f51b5;\r\n}\r\n.label.label-primary {\r\n  background-color: #009688;\r\n}\r\n.label.label-success {\r\n  background-color: #4caf50;\r\n}\r\n.label.label-info {\r\n  background-color: #03a9f4;\r\n}\r\n.label.label-warning {\r\n  background-color: #ff5722;\r\n}\r\n.label.label-danger {\r\n  background-color: #f44336;\r\n}\r\n.form-control,\r\n.form-group .form-control {\r\n  border: 0;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\r\n  -webkit-background-size: 0 2px, 100% 1px;\r\n          background-size: 0 2px, 100% 1px;\r\n  background-repeat: no-repeat;\r\n  background-position: center bottom, center -webkit-calc(100% - 1px);\r\n  background-position: center bottom, center calc(100% - 1px);\r\n  background-color: rgba(0, 0, 0, 0);\r\n  -webkit-transition: background 0s ease-out;\r\n       -o-transition: background 0s ease-out;\r\n          transition: background 0s ease-out;\r\n  float: none;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  border-radius: 0;\r\n}\r\n.form-group .form-control.material-textarea {\r\n  min-height: 5em;\r\n}\r\n.form-control::-moz-placeholder,\r\n.form-group .form-control::-moz-placeholder {\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-control:-ms-input-placeholder,\r\n.form-group .form-control:-ms-input-placeholder {\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-control::-webkit-input-placeholder,\r\n.form-group .form-control::-webkit-input-placeholder {\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-control[readonly],\r\n.form-group .form-control[readonly],\r\n.form-control[disabled],\r\n.form-group .form-control[disabled],\r\nfieldset[disabled] .form-control,\r\nfieldset[disabled] .form-group .form-control {\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n.form-control[disabled],\r\n.form-group .form-control[disabled],\r\nfieldset[disabled] .form-control,\r\nfieldset[disabled] .form-group .form-control {\r\n  background-image: none;\r\n  border-bottom: 1px dotted #D2D2D2;\r\n}\r\n.form-group {\r\n  position: relative;\r\n}\r\n.form-group.label-static label.control-label,\r\n.form-group.label-placeholder label.control-label,\r\n.form-group.label-floating label.control-label {\r\n  position: absolute;\r\n  pointer-events: none;\r\n  -webkit-transition: 0.3s ease all;\r\n       -o-transition: 0.3s ease all;\r\n          transition: 0.3s ease all;\r\n}\r\n.form-group.label-floating label.control-label {\r\n  will-change: left, top, contents;\r\n}\r\n.form-group.label-placeholder:not(.is-empty) label.control-label {\r\n  display: none;\r\n}\r\n.form-group .help-block {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.form-group.is-focused .form-control {\r\n  outline: none;\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\r\n  -webkit-background-size: 100% 2px, 100% 1px;\r\n          background-size: 100% 2px, 100% 1px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  -webkit-transition-duration: 0.3s;\r\n       -o-transition-duration: 0.3s;\r\n          transition-duration: 0.3s;\r\n}\r\n.form-group.is-focused .form-control .material-input:after {\r\n  background-color: #009688;\r\n}\r\n.form-group.is-focused label,\r\n.form-group.is-focused label.control-label {\r\n  color: #009688;\r\n}\r\n.form-group.is-focused.label-placeholder label,\r\n.form-group.is-focused.label-placeholder label.control-label {\r\n  color: #BDBDBD;\r\n}\r\n.form-group.is-focused .help-block {\r\n  display: block;\r\n}\r\n.form-group.has-warning .form-control {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n.form-group.has-warning.is-focused .form-control {\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ff5722), to(#ff5722)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n  background-image: -webkit-linear-gradient(#ff5722, #ff5722), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: -o-linear-gradient(#ff5722, #ff5722), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#ff5722, #ff5722), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-warning label.control-label,\r\n.form-group.has-warning .help-block {\r\n  color: #ff5722;\r\n}\r\n.form-group.has-error .form-control {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n.form-group.has-error.is-focused .form-control {\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f44336), to(#f44336)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n  background-image: -webkit-linear-gradient(#f44336, #f44336), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: -o-linear-gradient(#f44336, #f44336), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-error label.control-label,\r\n.form-group.has-error .help-block {\r\n  color: #f44336;\r\n}\r\n.form-group.has-success .form-control {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n.form-group.has-success.is-focused .form-control {\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4caf50), to(#4caf50)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n  background-image: -webkit-linear-gradient(#4caf50, #4caf50), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: -o-linear-gradient(#4caf50, #4caf50), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-success label.control-label,\r\n.form-group.has-success .help-block {\r\n  color: #4caf50;\r\n}\r\n.form-group.has-info .form-control {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n.form-group.has-info.is-focused .form-control {\r\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#03a9f4), to(#03a9f4)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n  background-image: -webkit-linear-gradient(#03a9f4, #03a9f4), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: -o-linear-gradient(#03a9f4, #03a9f4), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n  background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2);\r\n}\r\n.form-group.has-info label.control-label,\r\n.form-group.has-info .help-block {\r\n  color: #03a9f4;\r\n}\r\n.form-group textarea {\r\n  resize: none;\r\n}\r\n.form-group textarea ~ .form-control-highlight {\r\n  margin-top: -11px;\r\n}\r\n.form-group select {\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n}\r\n.form-group select ~ .material-input:after {\r\n  display: none;\r\n}\r\n.form-control {\r\n  margin-bottom: 7px;\r\n}\r\n.form-control::-moz-placeholder {\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-control:-ms-input-placeholder {\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.checkbox label,\r\n.radio label,\r\nlabel {\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\nlabel.control-label {\r\n  font-size: 12px;\r\n  line-height: 1.07142857;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n.help-block {\r\n  margin-top: 0;\r\n  font-size: 12px;\r\n}\r\n.form-group {\r\n  padding-bottom: 7px;\r\n  margin: 28px 0 0 0;\r\n}\r\n.form-group .form-control {\r\n  margin-bottom: 7px;\r\n}\r\n.form-group .form-control::-moz-placeholder {\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group .form-control:-ms-input-placeholder {\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group .form-control::-webkit-input-placeholder {\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group .checkbox label,\r\n.form-group .radio label,\r\n.form-group label {\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group label.control-label {\r\n  font-size: 12px;\r\n  line-height: 1.07142857;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n.form-group .help-block {\r\n  margin-top: 0;\r\n  font-size: 12px;\r\n}\r\n.form-group.label-floating label.control-label,\r\n.form-group.label-placeholder label.control-label {\r\n  top: -7px;\r\n  font-size: 16px;\r\n  line-height: 1.42857143;\r\n}\r\n.form-group.label-static label.control-label,\r\n.form-group.label-floating.is-focused label.control-label,\r\n.form-group.label-floating:not(.is-empty) label.control-label {\r\n  top: -30px;\r\n  left: 0;\r\n  font-size: 12px;\r\n  line-height: 1.07142857;\r\n}\r\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\r\n  top: -30px;\r\n  left: 0;\r\n  font-size: 12px;\r\n  line-height: 1.07142857;\r\n}\r\n.form-group.form-group-sm {\r\n  padding-bottom: 3px;\r\n  margin: 21px 0 0 0;\r\n}\r\n.form-group.form-group-sm .form-control {\r\n  margin-bottom: 3px;\r\n}\r\n.form-group.form-group-sm .form-control::-moz-placeholder {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-sm .checkbox label,\r\n.form-group.form-group-sm .radio label,\r\n.form-group.form-group-sm label {\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-sm label.control-label {\r\n  font-size: 9px;\r\n  line-height: 1.125;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n.form-group.form-group-sm .help-block {\r\n  margin-top: 0;\r\n  font-size: 9px;\r\n}\r\n.form-group.form-group-sm.label-floating label.control-label,\r\n.form-group.form-group-sm.label-placeholder label.control-label {\r\n  top: -11px;\r\n  font-size: 11px;\r\n  line-height: 1.5;\r\n}\r\n.form-group.form-group-sm.label-static label.control-label,\r\n.form-group.form-group-sm.label-floating.is-focused label.control-label,\r\n.form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\r\n  top: -25px;\r\n  left: 0;\r\n  font-size: 9px;\r\n  line-height: 1.125;\r\n}\r\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\r\n  top: -25px;\r\n  left: 0;\r\n  font-size: 9px;\r\n  line-height: 1.125;\r\n}\r\n.form-group.form-group-lg {\r\n  padding-bottom: 9px;\r\n  margin: 30px 0 0 0;\r\n}\r\n.form-group.form-group-lg .form-control {\r\n  margin-bottom: 9px;\r\n}\r\n.form-group.form-group-lg .form-control::-moz-placeholder {\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-lg .checkbox label,\r\n.form-group.form-group-lg .radio label,\r\n.form-group.form-group-lg label {\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n}\r\n.form-group.form-group-lg label.control-label {\r\n  font-size: 14px;\r\n  line-height: 0.99999998;\r\n  color: #BDBDBD;\r\n  font-weight: 400;\r\n  margin: 16px 0 0 0;\r\n}\r\n.form-group.form-group-lg .help-block {\r\n  margin-top: 0;\r\n  font-size: 14px;\r\n}\r\n.form-group.form-group-lg.label-floating label.control-label,\r\n.form-group.form-group-lg.label-placeholder label.control-label {\r\n  top: -5px;\r\n  font-size: 18px;\r\n  line-height: 1.3333333;\r\n}\r\n.form-group.form-group-lg.label-static label.control-label,\r\n.form-group.form-group-lg.label-floating.is-focused label.control-label,\r\n.form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\r\n  top: -32px;\r\n  left: 0;\r\n  font-size: 14px;\r\n  line-height: 0.99999998;\r\n}\r\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\r\n  top: -32px;\r\n  left: 0;\r\n  font-size: 14px;\r\n  line-height: 0.99999998;\r\n}"

/***/ },

/***/ 1045:
/***/ function(module, exports) {

module.exports = "\r\n/* switch new css (sahil) */\r\n\r\n.companies-card .onoffswitch {\r\n    position: relative;\r\n    width: 80px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.companies-card .onoffswitch-checkbox {\r\n    display: none;\r\n}\r\n\r\n.companies-card .onoffswitch-label {\r\n    display: block;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n}\r\n\r\n.companies-card .onoffswitch-inner {\r\n    display: block;\r\n    width: 200%;\r\n    margin-left: -100%;\r\n    transition: margin 0.3s ease-in 0s;\r\n}\r\n\r\n.companies-card .onoffswitch-inner:before,\r\n.companies-card .onoffswitch-inner:after {\r\n    display: block;\r\n    float: left;\r\n    width: 50%;\r\n    height: 20px;\r\n    padding: 0;\r\n    line-height: 20px;\r\n    font-size: 13px;\r\n    color: white;\r\n    box-sizing: border-box;\r\n    font-weight: normal;\r\n}\r\n\r\n.companies-card .onoffswitch-inner:before {\r\n    content: \"Accept\";\r\n    padding-left: 10px;\r\n    background-color: #00c853;\r\n    color: #FFFFFF;\r\n    font-weight: normal;\r\n    text-align: left;\r\n}\r\n\r\n.companies-card .onoffswitch-inner:after {\r\n    content: \"Accept\";\r\n    padding-right: 10px;\r\n    background-color: #EEEEEE;\r\n    color: #999999;\r\n    text-align: right;\r\n}\r\n\r\n.companies-card .onoffswitch-switch {\r\n    display: block;\r\n    width: 14px;\r\n    height: 14px;\r\n    margin: 3px;\r\n    background: #FFFFFF;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 56px;\r\n    border-radius: 20px;\r\n    transition: all 0.3s ease-in 0s;\r\n}\r\n\r\n.companies-card .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n    margin-left: 0;\r\n}\r\n\r\n.companies-card .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n    right: 0px;\r\n}\r\n\r\n#companyDetails .companyDetail-inner{\r\n    border:1px solid #000;\r\n    padding:10px 10px;\r\n}\r\n#companyDetails .companyDetail-inner .details{\r\n    margin-top:30px;\r\n}\r\n.table-company-detail{\r\n    width: 100%;\r\n}\r\n.table-company-detail tr{\r\n    height:30px;\r\n}\r\n.table-company-detail td{\r\n    width:50%;\r\n}\r\n#input-api{\r\n    border: none;\r\n    background: inherit;\r\n}"

/***/ },

/***/ 1046:
/***/ function(module, exports) {

module.exports = ".api-keyoutr{\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}\r\n.api-keyoutr h3{\r\n    float: left;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    color: #62696d;\r\n    margin-top: 0px;\r\n    font-family: montserratregular;\r\n}\r\n.api-key-table{\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n}\r\n.api-key-table-top{\r\n    float: left;\r\n    width: 100%;\r\n    border-bottom: 1px solid #dae2e6;\r\n}\r\n.api-key-table-top .pl0{\r\n    padding-left: 0px;\r\n}\r\n.api-key-table-top p{\r\n    font-size:14px;\r\n    color:#bec5c9;\r\n    font-family: montserratregular;\r\n}\r\n.api-key-tablelist{\r\n    float: left;\r\n    width: 100%;\r\n    padding-top: 13px;\r\n    padding-bottom: 13px;\r\n    border-bottom: 1px solid #dae2e6;\r\n}\r\n.api-tablelist-left{\r\n    float: left;\r\n    width: 70px;\r\n}\r\n.api-tablelist-left span{\r\n    width: 60px;\r\n    height: 60px;\r\n    background: #269fd8;\r\n    text-align: center;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    color: #fff;\r\n    font-family: montserratlight;\r\n    font-size: 24px;\r\n    border-radius: 50%;\r\n}\r\n.api-tablelist-left span.red{\r\n    background: #f87b80 !important;\r\n}\r\n.api-tablelist-right{\r\n    float: left;\r\n    width: 72%;\r\n    margin-top: 12px;\r\n    padding-left: 10px;\r\n}\r\n.api-tablelist-right p{\r\n    float: left;\r\n    width: 90%;\r\n    font-size: 16px;\r\n    margin-bottom: 0;\r\n    color: #62696d;\r\n    font-family: montserratregular;\r\n}\r\n.api-tablelist-right label{\r\n    float: left;\r\n    width: 90%;\r\n    font-size: 11px;\r\n    color: #62696d;\r\n    font-family: montserratregular;\r\n}\r\n.api-key-generate{\r\n    width: 90%;\r\n    font-size: 12px;\r\n    color: #62696d;\r\n    font-family: montserratregular;\r\n    vertical-align: middle;\r\n    word-wrap: break-word;\r\n    float: left;\r\n    margin-top: 20px;\r\n}\r\n.api-key-actions{\r\n    float: left;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    padding-left: 30px;\r\n}\r\n.api-key-actions a{\r\n    float: left;\r\n    font-size: 13px;\r\n    color: #62696d;\r\n    font-family: montserratregular;\r\n    opacity: 0.6;\r\n}\r\n\r\n.api-key-actions a:hover i{\r\n    opacity: 1;\r\n}\r\n\r\n.api-key-actions a:hover{\r\n    color:#fb545b;\r\n    opacity: 1;\r\n}\r\n.api-key-actions a:nth-child(2){\r\n    /*float: right;*/\r\n    text-align: left;\r\n    margin-left: 25px;\r\n}\r\n.api-key-actions a i{\r\n    font-size: 18px;\r\n    position: relative;\r\n    top: 4px;\r\n    opacity: 0.6;\r\n} \r\n\r\n.action-last {\r\n    padding-left: 30px;\r\n}\r\n\r\n\r\n/* responsive css sahil */\r\n\r\n@media (min-width: 320px) and (max-width:768px) {\r\n\r\n    .api-key-table-top{\r\n        display: none;\r\n    }\r\n    .api-tablelist-left span{\r\n        width: 45px;\r\n        height: 45px;\r\n    }\r\n    .api-tablelist-right{\r\n        margin-top: 0px;\r\n    }\r\n    .api-key-generate{\r\n        margin-left: 80px;\r\n        width: 80%;\r\n        margin-top: 0px;\r\n    }\r\n    .api-key-actions{\r\n        margin-left: 80px;\r\n        width: 80%;\r\n        margin-top: 5px;\r\n    }\r\n    .api-key-actions a{\r\n        margin-right: 15px;\r\n    }\r\n    .api-key-actions a:nth-child(2){\r\n        float: left;\r\n        margin-left: 0px;\r\n    }\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ },

/***/ 1047:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1048:
/***/ function(module, exports) {

module.exports = "/* Start: Responsiveness */\r\n\r\n  .mobile-menu {\r\n      display: none;\r\n  }\r\n\r\n  .white-logo {\r\n      display: none !important;\r\n  }\r\n\r\n  .company-list,\r\n  .name-list {\r\n      width: 100%;\r\n      float: left;\r\n  }\r\n\r\n  @media (max-width: 767px) {\r\n      #userProfile-header .navbar-fixed-top .nav-padding {\r\n          padding-right: 0px;\r\n          padding-left: 0px;\r\n      }\r\n\r\n      .full-menu,\r\n      .dash-circle,\r\n      .dash-prog-outer h2 {\r\n          display: none;\r\n      }\r\n\r\n      .main-logo {\r\n          display: none !important;\r\n      }\r\n\r\n      .mobile-menu {\r\n          display: block;\r\n          float: right;\r\n          margin-top: 7px;\r\n          position: relative;\r\n      }\r\n\r\n      #userProfile-header .navbar-default {\r\n          background: #fb5f66 !important;\r\n          border: none;\r\n          margin-top: 0px;\r\n      }\r\n\r\n      #userProfile-header .navbar-default .mat-icon i.material-icons {\r\n          font-size: 24px;\r\n          color: #fff;\r\n          padding: 13px;\r\n      }\r\n\r\n      #userProfile-header .navbar-header h4.title {\r\n          color: #fff;\r\n          font-size: 16px;\r\n          text-align: center;\r\n          text-transform: uppercase;\r\n          padding-top: 7px;\r\n      }\r\n\r\n      .mobile-menu button {\r\n          border: none;\r\n          box-shadow: none;\r\n          color: #fff;\r\n          background: none;\r\n          float: right;\r\n          margin: 0px 5px;\r\n      }\r\n\r\n      .mobile-menu .btn-default:hover {\r\n          color: #fff;\r\n          background: none;\r\n      }\r\n\r\n      .mobile-dash {\r\n          padding: 0px;\r\n      }\r\n\r\n      .mobile-menu .dropdown-menu {\r\n          background: #62696d;\r\n          top: -11px;\r\n          border-radius: 0px;\r\n          left: -176px;\r\n          width: 235px;\r\n          font-family: montserratlight;\r\n          padding-bottom: 55px;\r\n      }\r\n\r\n      .mobile-menu .name-dropdown-border {\r\n          width: 100%;\r\n          margin: 5px 0px;\r\n      }\r\n\r\n      .mobile-menu .user-outr {\r\n          float: left;\r\n          width: 100%;\r\n          padding: 0;\r\n          margin: 0px;\r\n          display: block;\r\n      }\r\n\r\n      .mobile-menu .user-outr li {\r\n          float: right;\r\n          font-size: 24px;\r\n          font-family: montserratlight;\r\n          color: #fff;\r\n          margin-right: 24px;\r\n          /* margin: 10px 19px; */\r\n          margin-top: 8px;\r\n          margin-bottom: 6px;\r\n      }\r\n\r\n      .mobile-menu .user-outr li a {\r\n          margin-right: 30px;\r\n      }\r\n      \r\n      .user-outr li a {\r\n          float: left;\r\n          width: auto;\r\n          border: 2px solid #dae2e6;\r\n          border-radius: 50%;\r\n          margin-left: 5px;\r\n          margin-bottom: 5px;\r\n      }\r\n\r\n      .user-outr li a:hover {\r\n          border: 2px solid #f56151;\r\n      }\r\n\r\n      .mobile-menu .company-list li,\r\n      .mobile-menu .name-list li {\r\n          margin: 10px 0px;\r\n          text-align: right;\r\n          font-size: 16px;\r\n          width: 100%;\r\n          float: left;\r\n          padding-right: 20px;\r\n      }\r\n\r\n      .mobile-menu .company-list li a,\r\n      .mobile-menu .name-list li a {\r\n          float: right;\r\n          color: #fff;\r\n      }\r\n\r\n      .mobile-menu .company-list li a i {\r\n          margin-right: 20px;\r\n          float: left;\r\n      }\r\n\r\n      .mobile-menu .name-list li a i {\r\n          margin-left: 20px;\r\n          float: right;\r\n      }\r\n\r\n      .mobile-menu .company-list-title {\r\n          float: left;\r\n          color: #fff;\r\n      }\r\n\r\n      .white-logo {\r\n          display: block !important;\r\n      }\r\n\r\n      .dash-prog-outer {\r\n          float: left;\r\n          width: 100%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n      }\r\n\r\n      .dash-prog-outer h5 {\r\n          font-size: 24px;\r\n          text-align: center;\r\n          width: 100%;\r\n          margin-bottom: 1px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper {\r\n          min-height: 35px;\r\n          width: 100%;\r\n          text-align: center;\r\n      }\r\n\r\n      .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n          margin: 0 auto;\r\n          float: none;\r\n          text-align: center;\r\n      }\r\n\r\n      #userProfile-header .navbar-header {\r\n          float: left;\r\n          margin-left: -5px;\r\n          margin-right: 0px !important;\r\n      }\r\n\r\n      #userProfile-header .navbar-logopadding {\r\n          padding-right: 0px;\r\n          padding-top: 0px;\r\n      }\r\n\r\n      #userProfile-header .navbar-default {\r\n          height: 50px;\r\n          margin: 0px;\r\n          padding-bottom: 0px;\r\n      }\r\n\r\n      .white-logo .navbar-brand img {\r\n          height: 53px;\r\n          margin-top: -20px;\r\n          margin: 0 auto;\r\n          margin-top: -20px;\r\n      }\r\n\r\n      .white-logo .navbar-brand {\r\n          float: none;\r\n      }\r\n\r\n      .user-outr li a.add-user {\r\n          width: 45px;\r\n          height: 45px;\r\n          padding-top: 9px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n          top: -30px;\r\n          left: 17px;\r\n          font-size: 34px;\r\n          position: relative;\r\n          color: #f87b80;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n          font-size: 16px;\r\n      }\r\n\r\n      .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n          width: 91%;\r\n          font-size: 14px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n          width: 35px;\r\n          height: 35px;\r\n          padding-top: 8px;\r\n          font-size: 14px;\r\n          top: 13px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n          font-size: 14px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n          font-size: 24px;\r\n      }\r\n\r\n      .company-block-content {\r\n          margin-left: 50px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n          left: 42px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n          right: 34px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n          top: 8px;\r\n          left: -8px;\r\n      }\r\n\r\n  }\r\n\r\n  @media (max-width: 1900px) {\r\n      .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\r\n          font-size: 10px !important;\r\n      }\r\n\r\n      .sahil-material .form-group.label-floating.is-focused label.control-label {\r\n          font-size: 10px !important;\r\n      }\r\n\r\n      .my-profile .form-group.time-zone label.control-label {\r\n          font-size: 10px !important;\r\n      }\r\n  }\r\n\r\n  @media screen and (min-width: 320px) and (max-width: 320px) {\r\n      #membership-details .nav-tabs.nav-justified > li:nth-child(1) > a {\r\n          padding: 18px 3px;\r\n      }\r\n\r\n      #membership-details .nav-tabs.nav-justified > li:nth-child(2) > a {\r\n          padding: 18px 12px;\r\n      }\r\n\r\n      #subscription .membership-details .btn-red-outline{\r\n          white-space: normal !important;\r\n          max-width: 275px;\r\n      }\r\n\r\n  }\r\n\r\n  @media screen and (min-width: 1024px) and (max-width: 1024px){\r\n      #membership-details .tab-content.tab-sub-content {\r\n          width: 74%;\r\n      }\r\n\r\n      .billing-plan-list {\r\n          width: 80%;\r\n          margin-left: 10%;\r\n      }\r\n\r\n      .billing-table {\r\n          margin-top: 30px;\r\n          margin-left: 0px;\r\n      }\r\n\r\n      .billing-grey {\r\n          width: 300px;\r\n          margin-left: 17%;\r\n          box-shadow: 0px 0px 19px rgba(60,60,60,0.29);\r\n      }\r\n\r\n      .billing-white {\r\n          top: 30px;\r\n          width: 300px;\r\n          margin-left: 17%;\r\n          margin-bottom: 90px;\r\n      }\r\n\r\n  }\r\n\r\n  @media screen and (min-width: 1280px) and (max-width: 1280px){\r\n      #membership-details .tab-content.tab-sub-content {\r\n          width: 80.91%;\r\n      }\r\n\r\n      .billing-grey-top h3.plan-title {\r\n          font-size: 25px;\r\n      }\r\n  }\r\n\r\n/* End: Responsiveness */\r\n\r\n"

/***/ },

/***/ 1049:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1050:
/***/ function(module, exports) {

module.exports = "#plans .panel\r\n{\r\n    text-align: center;\r\n}\r\n#plans .panel:hover { box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4), 0 1px 5px rgba(130, 130, 130, 0.35); }\r\n#plans .panel-body\r\n{\r\n    padding: 0px;\r\n    text-align: center;\r\n}\r\n\r\n#plans .the-price\r\n{\r\n    background-color: rgba(220,220,220,.17);\r\n    box-shadow: 0 1px 0 #dcdcdc, inset 0 1px 0 #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n}\r\n\r\n#plans.the-price h1\r\n{\r\n    line-height: 1em;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#plans .subscript\r\n{\r\n    font-size: 25px;\r\n}\r\n\r\n/* CSS-only ribbon styles    */\r\n#plans .cnrflash\r\n{\r\n    /*Position correctly within container*/\r\n    position: absolute;\r\n    top: -9px;\r\n    right: 4px;\r\n    z-index: 1; /*Set overflow to hidden, to mask inner square*/\r\n    overflow: hidden; /*Set size and add subtle rounding        to soften edges*/\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 3px 5px 3px 0;\r\n}\r\n#plans .cnrflash-inner\r\n{\r\n    /*Set position, make larger then            container and rotate 45 degrees*/\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 145px;\r\n    height: 145px;\r\n    -ms-transform: rotate(45deg); /* IE 9 */\r\n    -o-transform: rotate(45deg); /* Opera */\r\n    -moz-transform: rotate(45deg); /* Firefox */\r\n    -webkit-transform: rotate(45deg); /* Safari and Chrome */\r\n    -webkit-transform-origin: 100% 100%; /*Purely decorative effects to add texture and stuff*/ /* Safari and Chrome */\r\n    -ms-transform-origin: 100% 100%;  /* IE 9 */\r\n    -o-transform-origin: 100% 100%; /* Opera */\r\n    -moz-transform-origin: 100% 100%; /* Firefox */\r\n    background-image: linear-gradient(90deg, transparent 50%, rgba(255,255,255,.1) 50%), linear-gradient(0deg, transparent 0%, rgba(1,1,1,.2) 50%);\r\n    background-size: 4px,auto, auto,auto;\r\n    background-color: #aa0101;\r\n    box-shadow: 0 3px 3px 0 rgba(1,1,1,.5), 0 1px 0 0 rgba(1,1,1,.5), inset 0 -1px 8px 0 rgba(255,255,255,.3), inset 0 -1px 0 0 rgba(255,255,255,.2);\r\n}\r\n#plans .cnrflash-inner:before, .cnrflash-inner:after\r\n{\r\n    /*Use the border triangle trick to make                 it look like the ribbon wraps round it's                container*/\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    bottom: -16px;\r\n    width: 0;\r\n    height: 0;\r\n    border: 8px solid #800000;\r\n}\r\n#plans .cnrflash-inner:before\r\n{\r\n    left: 1px;\r\n    border-bottom-color: transparent;\r\n    border-right-color: transparent;\r\n}\r\n#plans .cnrflash-inner:after\r\n{\r\n    right: 0;\r\n    border-bottom-color: transparent;\r\n    border-left-color: transparent;\r\n}\r\n#plans .cnrflash-label\r\n{\r\n    /*Make the label look nice*/\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    padding-bottom: 5px;\r\n    color: #fff;\r\n    text-shadow: 0 1px 1px rgba(1,1,1,.8);\r\n    font-size: 0.95em;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/* Start: Upgrade Plan Modal */\r\n    #upgrade-plan-popup .modal-content {\r\n        border-radius: 8px;\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n\r\n    #upgrade-plan-popup .modal-header {\r\n        padding: 10px 17px;\r\n        border-bottom: none;\r\n        background: #fb6066;\r\n        border-radius: 7px 7px 0px 0px;\r\n    }\r\n\r\n\r\n    #upgrade-plan-popup.modal button.close.btn-close {\r\n        text-shadow: none;\r\n        position: absolute;\r\n        right: 15px;\r\n        top: 12px;\r\n        z-index: 9;\r\n        opacity: 1;\r\n        transition: all 0.3s ease 0s !important;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal button.close.btn-help {\r\n        text-shadow: none;\r\n        position: absolute;\r\n        right: 40px;\r\n        top: 11px;\r\n        z-index: 9;\r\n        opacity: 1;\r\n        transition: all 0.3s ease 0s !important;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal i.material-icons {\r\n        font-size: 16px;\r\n        color: #fff;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal button.close.btn-help i.material-icons {\r\n        font-size: 14px;\r\n        color: #fff;\r\n    }\r\n\r\n    #upgrade-plan-popup .modal-title {\r\n        text-transform: uppercase;\r\n        color: #fff;\r\n        font-size: 14px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .modal-body {\r\n        padding: 20px;\r\n    }\r\n\r\n    #upgrade-plan-popup .btn-red-outline {\r\n        color: #fb545b;\r\n        background-color: #fff;\r\n        border-color: #ffb5b8;\r\n        border-radius: 0;\r\n        font-size: 11px;\r\n        padding: 7px 20px;\r\n        margin: 60px 0px 0px;\r\n        transition: all 0.3s ease 0s;\r\n        font-family: montserratregular;\r\n        text-transform: uppercase;\r\n        float: right;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .btn-red-outline.hvr-sweep-to-right::before {\r\n        background: #ffb5b8 none repeat scroll 0 0;\r\n        color: #fff !important;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .btn-red-outline.hvr-sweep-to-right:hover{\r\n         color: #fff !important;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .btn-red-outline.hvr-sweep-to-right:focus, \r\n    #upgrade-plan-popup.modal .btn-red-outline.hvr-sweep-to-right:active {\r\n        color: #fff !important;\r\n        background: #ffb5b8 none repeat scroll 0 0 !important;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .form-group {\r\n        padding-bottom: 7px;\r\n        margin: 12px 0 0px 0;\r\n        clear: none;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .form-group label.control-label.label-filled {\r\n        font-size: 12px;\r\n        color: #666666;\r\n        font-weight: 400;\r\n        margin: 0;\r\n        font-family: montserratlight;\r\n        float: left;\r\n        /*width: 25%;*/\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .form-group .form-control.input-filled {\r\n        height: 14px;\r\n        padding: 0px;\r\n        font-size: 13px;\r\n        line-height: 12px;\r\n        font-family: montserratregular;\r\n        color: #666666;\r\n        background: none;\r\n        float: left;\r\n        width: 58%;\r\n        padding-right: 15px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal span.coloumn{\r\n        line-height: 10px;\r\n        font-size: 14px;\r\n        color: #666;\r\n        float: left;\r\n        width: 8%;\r\n    }\r\n\r\n    #upgrade-plan-popup .modal-footer {\r\n        padding: 0px 22px 20px;\r\n        text-align: right;\r\n        border-top: none;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .form-group.form-group-radio {\r\n        float: left;\r\n        width: auto;\r\n        margin-top: 18px;\r\n    }\r\n\r\n    #upgrade-plan-popup .footer-text{\r\n        font-size: 10px;\r\n        text-align: left;\r\n        margin-top: 10px;\r\n        line-height: 14px;\r\n        float:left;\r\n        width: 80%;\r\n        font-family: montserratlight;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .alert-info {\r\n        color: #62696d;\r\n        background-color: #eceff0;\r\n        border-color: #eceff0;\r\n        border-radius: 0px;\r\n        font-size: 12px;\r\n        font-family: montserratlight;\r\n        line-height: 20px;\r\n        padding: 15px 20px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .alert-info p {\r\n        margin: 0;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal button#btnCoupon {\r\n        font-size: 11px;\r\n        color: #fb545b;\r\n        border-radius: 0px;\r\n        margin-left: 25px;\r\n        text-transform: uppercase;\r\n        border: 1px solid #fb545b;\r\n        opacity: 1;\r\n        padding: 4px 12px;\r\n        margin-top: 5px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .upgrade-tabs-wrapper {\r\n        padding: 0px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .nav-tabs.nav-justified {\r\n        margin-top: 20px;\r\n    }\r\n    \r\n    #upgrade-plan-popup.modal .tab-content {\r\n        padding: 25px 5px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .tab-content .tab-pane h5.title {\r\n        font-size: 16px;\r\n        color: #62696d;\r\n        font-family: montserratregular;\r\n        text-transform: none;\r\n        font-weight: normal;\r\n        margin-top: 0px;\r\n        margin-bottom: 12px;\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .tab-content .tab-pane h6.title {\r\n        font-size: 13px;\r\n        color: #62696d;\r\n        font-family: montserratregular;\r\n        text-transform: none;\r\n        font-weight: normal;\r\n        margin-top: 0px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .tab-content .tab-pane span p {\r\n        font-size: 12px;\r\n        color: #62696d;\r\n        font-family: montserratlight;\r\n        margin-bottom: 0px;\r\n        line-height: 18px;\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .tab-content .tab-pane span p.tiny-text {\r\n        padding-top: 26px !important;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .tab-content .tab-pane#tab_default_2 span p {\r\n        padding-bottom: 10px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .tab-content .tab-pane span.upgrade-plan-left {\r\n        font-size: 12px;\r\n        color: #62696d;\r\n        font-family: montserratlight;\r\n        line-height: 26px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .tab-content .tab-pane span.upgrade-plan-right {\r\n        font-size: 12px;\r\n        color: #62696d;\r\n        font-family: montserratregular;\r\n        line-height: 26px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal .tab-content .tab-pane p.tiny-text{\r\n        font-size: 10px !important;\r\n        color: #62696d;\r\n        font-family: montserratlight;\r\n        padding-top: 10px;\r\n        float: left;\r\n        width: 100%;\r\n        padding-top: 26px;\r\n    }\r\n\r\n    #couponFormDiv .control-label {\r\n        font-size: 13px;\r\n    }\r\n\r\n    #couponFormDiv input {\r\n        height: 36px;\r\n    }\r\n\r\n    #upgrade-plan-popup.modal span.minus {\r\n        float: left;\r\n        position: relative;\r\n        left: -10px;\r\n        top: 0px;\r\n        width: 1px;\r\n    }\r\n\r\n    /* Start: new changes */\r\n        .subscription-changes-panel {\r\n            float: left;\r\n            width: 100%;\r\n        }\r\n\r\n        .subscription-changes-panel h6.title {\r\n            font-size: 16px;\r\n            color: #62696d;\r\n            font-family: montserratregular;\r\n            margin-top: 0px;\r\n        }\r\n\r\n        .subscription-changes-panel .sub-title{\r\n            font-size: 12px;\r\n            color: #62696d;\r\n            font-family: montserratlight;\r\n        }\r\n\r\n        .subscription-changes-panel .subs-detail {\r\n            float: left;\r\n            width: 100%;\r\n            margin-top: 20px;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .subscription-changes-panel .subs-detail .subs-label {\r\n            font-size: 12px;\r\n            color: #666666;\r\n            font-family: montserratlight;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .subscription-changes-panel .subs-detail .subs-filled {\r\n            font-size: 13px;\r\n            color: #666666;\r\n            font-family: montserratregular;\r\n        }\r\n\r\n        .current-payment-details-panel {\r\n            float: left;\r\n            width: 100%;\r\n        }\r\n\r\n        .current-payment-details-panel h6.title-bg {\r\n            background: rgba(189, 197, 200, 0.4);\r\n            /*min-height: 28px;*/\r\n            font-size: 14px;\r\n            color: #61686e;\r\n            font-family: montserratregular;\r\n            padding: 5px 7px 7px;\r\n        }\r\n\r\n        .current-payment-details-panel .title-bg i.material-icons {\r\n            font-size: 14px !important;\r\n            color: #61686e !important;\r\n            position: relative;\r\n            top: 2px;\r\n        }\r\n\r\n        .current-payment-details-panel .sub-title{\r\n            font-size: 12px;\r\n            color: #62696d;\r\n            font-family: montserratlight;\r\n        }\r\n\r\n        .current-payment-details-panel .current-payment-detail {\r\n            float: left;\r\n            width: 100%;\r\n            margin-top: 10px;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .current-payment-details-panel .current-payment-detail span.upgrade-plan-left {\r\n            font-size: 12px;\r\n            color: #666666;\r\n            font-family: montserratlight;\r\n            margin-bottom: 12px;\r\n        }\r\n\r\n        .current-payment-details-panel .current-payment-detail span.upgrade-plan-right {\r\n            font-size: 13px;\r\n            color: #666666;\r\n            font-family: montserratregular;\r\n            margin-bottom: 12px;\r\n        }\r\n\r\n        .coupon-applied {\r\n            margin-top: 15px;\r\n            margin-bottom: 15px;\r\n        }\r\n\r\n        .coupon-applied span.title {\r\n            font-size: 12px;\r\n            color: #8e989f;\r\n            font-family: montserratregular;\r\n            float: left;\r\n            padding-right: 10px;\r\n            padding-top: 5px;\r\n        }\r\n\r\n        #upgrade-plan-popup .coupon-applied .btn-red-outline {\r\n            color: #fb545b;\r\n            background-color: #fff;\r\n            border-color: #fb545b;\r\n            border-radius: 0;\r\n            font-size: 11px;\r\n            padding: 4px 20px;\r\n            margin: 0;\r\n            transition: all 0.3s ease 0s;\r\n            font-family: montserratregular;\r\n            text-transform: uppercase;\r\n            float: left;\r\n        }\r\n\r\n        #upgrade-plan-popup .coupon-applied .btn-red-outline i.material-icons {\r\n            color: #fb545b !important;\r\n            font-size: 12px !important;\r\n            position: relative;\r\n            top: 2px;\r\n            margin-left: 15px;\r\n        }\r\n\r\n        .btn-margin{\r\n            margin: 0px !important;\r\n        }\r\n\r\n    /* End: new changes */\r\n\r\n\r\n/* End: Upgrade Plan Modal */   \r\n\r\n\r\n    /***\r\nBootstrap Line Tabs by @keenthemes\r\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\r\nLicensed under MIT\r\n***/\r\n\r\n/* Tabs panel */\r\n.tabbable-panel {\r\n  border:1px solid #eee;\r\n  padding: 10px;\r\n}\r\n\r\n/* Default mode */\r\n.tabbable-line > .nav-tabs {\r\n  border: none;\r\n  margin: 0px;\r\n}\r\n.tabbable-line > .nav-tabs > li {\r\n  margin-right: 2px;\r\n}\r\n.tabbable-line > .nav-tabs > li > a {\r\n  border: 0;\r\n  margin-right: 0;\r\n  color: #737373;\r\n}\r\n.tabbable-line > .nav-tabs > li > a > i {\r\n  color: #a6a6a6;\r\n}\r\n.tabbable-line > .nav-tabs > li.open, .tabbable-line > .nav-tabs > li:hover {\r\n  border-bottom: 4px solid #fbcdcf;\r\n}\r\n.tabbable-line > .nav-tabs > li.open > a, .tabbable-line > .nav-tabs > li:hover > a {\r\n  border: 0;\r\n  background: none !important;\r\n  color: #333333;\r\n}\r\n.tabbable-line > .nav-tabs > li.open > a > i, .tabbable-line > .nav-tabs > li:hover > a > i {\r\n  color: #a6a6a6;\r\n}\r\n.tabbable-line > .nav-tabs > li.open .dropdown-menu, .tabbable-line > .nav-tabs > li:hover .dropdown-menu {\r\n  margin-top: 0px;\r\n}\r\n.tabbable-line > .nav-tabs > li.active {\r\n  border-bottom: 4px solid #f3565d;\r\n  position: relative;\r\n}\r\n.tabbable-line > .nav-tabs > li.active > a {\r\n  border: 0;\r\n  color: #333333;\r\n}\r\n.tabbable-line > .nav-tabs > li.active > a > i {\r\n  color: #404040;\r\n}\r\n.tabbable-line > .tab-content {\r\n  margin-top: -3px;\r\n  background-color: #fff;\r\n  border: 0;\r\n  border-top: 1px solid #eee;\r\n  padding: 15px 0;\r\n}\r\n.portlet .tabbable-line > .tab-content {\r\n  padding-bottom: 0;\r\n}\r\n\r\n/* Below tabs mode */\r\n\r\n.tabbable-line.tabs-below > .nav-tabs > li {\r\n  border-top: 4px solid transparent;\r\n}\r\n.tabbable-line.tabs-below > .nav-tabs > li > a {\r\n  margin-top: 0;\r\n}\r\n.tabbable-line.tabs-below > .nav-tabs > li:hover {\r\n  border-bottom: 0;\r\n  border-top: 4px solid #fbcdcf;\r\n}\r\n.tabbable-line.tabs-below > .nav-tabs > li.active {\r\n  margin-bottom: -2px;\r\n  border-bottom: 0;\r\n  border-top: 4px solid #f3565d;\r\n}\r\n.tabbable-line.tabs-below > .tab-content {\r\n  margin-top: -10px;\r\n  border-top: 0;\r\n  border-bottom: 1px solid #eee;\r\n  padding-bottom: 15px;\r\n}\r\n.text-right{\r\n    text-align: right;\r\n}\r\n\r\n@media (min-width: 320px) and (max-width:768px) {\r\n    .toggle-dots-white{\r\n        display: block;\r\n    }\r\n\r\n    .toggle-dots-grey{\r\n        display: block;\r\n    }\r\n\r\n    .toggle-dots-white{\r\n        float: left; \r\n        width: 100%;\r\n        text-align: center; \r\n        padding-top: 5px;\r\n        padding-bottom: 5px; \r\n        background:#62696d; \r\n    }\r\n\r\n    .toggle-dots-white span{ \r\n        width: 8px; \r\n        height: 8px;\r\n        display: inline-block; \r\n        border-radius: 100%; \r\n        background:#fff;\r\n    }\r\n\r\n    .toggle-dots-white2{\r\n        float: left; \r\n        width: 100%;\r\n        text-align: center; \r\n        padding-top: 10px;\r\n        padding-bottom: 10px; \r\n        background:#62696d; \r\n    }\r\n\r\n    .toggle-dots-white2 span{ \r\n        width: 8px; \r\n        height: 8px;\r\n        display: inline-block; \r\n        border-radius: 100%; \r\n        background:#fff;\r\n    } \r\n\r\n    .toggle-dots-grey {\r\n        float: left;\r\n        width: 100%;\r\n        text-align: center;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n        background: #f2f2f2;\r\n    }\r\n\r\n    .toggle-dots-grey span {\r\n        width: 8px;\r\n        height: 8px;\r\n        display: inline-block;\r\n        border-radius: 100%;\r\n        background: rgba(251,108,115,0.8);\r\n    }\r\n\r\n    #membership-details .tab-content.tab-sub-content {\r\n        margin-left: 0px;\r\n        width: 100%;\r\n        padding-left: 0px;\r\n        padding-right: 0px;\r\n    }\r\n\r\n    .rs-hide{\r\n        display: none;\r\n    }\r\n\r\n    .billing-grey-top {\r\n        border-bottom: 1px solid #777;\r\n    }\r\n\r\n    .billing-grey-top.business-box-xshadow {\r\n        box-shadow: none;\r\n    }\r\n\r\n    .toggle-dots-white div{\r\n        font-size: 13px;\r\n        color: #fff;\r\n        height: 30px;\r\n        font-family: montserratregular;\r\n    }\r\n\r\n    .toggle-dots-white div i.material-icons {\r\n        position: relative;\r\n        top: 3px;\r\n    }\r\n\r\n    .toggle-dots-white div p.more-info {\r\n        position: relative;\r\n        top: -5px;\r\n        margin-bottom: 0px;\r\n        color: #fff;\r\n        display: inline-block;\r\n    }\r\n    \r\n    .toggle-dots-grey div{\r\n        font-size: 13px;\r\n        color: #fff;\r\n        height: 30px;\r\n        font-family: montserratregular;\r\n    }\r\n\r\n    .toggle-dots-grey div i.material-icons {\r\n        position: relative;\r\n        top: 3px;\r\n        color: #62696d;\r\n    }\r\n\r\n    .toggle-dots-grey div p.more-info {\r\n        position: relative;\r\n        top: -5px;\r\n        margin-bottom: 0px;\r\n        color: #62696d;\r\n        display: inline-block;\r\n    }\r\n\r\n}\r\n\r\n/* Start: Responsiveness */\r\n\r\n  .mobile-menu {\r\n      display: none;\r\n  }\r\n\r\n  .white-logo {\r\n      display: none !important;\r\n  }\r\n\r\n  .company-list,\r\n  .name-list {\r\n      width: 100%;\r\n      float: left;\r\n  }\r\n\r\n    @media (min-width: 320px) and (max-width: 768px) {\r\n        #userProfile-header .navbar-fixed-top .nav-padding {\r\n            padding-right: 0px;\r\n            padding-left: 0px;\r\n        }\r\n\r\n        .full-menu,\r\n        .dash-circle,\r\n        .dash-prog-outer h2 {\r\n            display: none;\r\n        }\r\n\r\n        .main-logo {\r\n            display: none !important;\r\n        }\r\n\r\n        .mobile-menu {\r\n            display: block;\r\n            float: right;\r\n            margin-top: 7px;\r\n            position: relative;\r\n        }\r\n\r\n        #userProfile-header .navbar-default {\r\n            background: #fb5f66 !important;\r\n            border: none;\r\n            margin-top: 0px;\r\n        }\r\n\r\n        #userProfile-header .navbar-default .mat-icon i.material-icons {\r\n            font-size: 24px;\r\n            color: #fff;\r\n            padding: 13px;\r\n        }\r\n\r\n        #userProfile-header .navbar-header h4.title {\r\n            color: #fff;\r\n            font-size: 16px;\r\n            text-align: center;\r\n            text-transform: uppercase;\r\n            padding-top: 7px;\r\n        }\r\n\r\n        .mobile-menu button {\r\n            border: none;\r\n            box-shadow: none;\r\n            color: #fff;\r\n            background: none;\r\n            float: right;\r\n            margin: 0px 5px;\r\n        }\r\n\r\n        .mobile-menu .btn-default:hover {\r\n            color: #fff;\r\n            background: none;\r\n        }\r\n\r\n        .mobile-dash {\r\n            padding: 0px;\r\n        }\r\n\r\n        .mobile-menu .dropdown-menu {\r\n            background: #62696d;\r\n            top: -11px;\r\n            border-radius: 0px;\r\n            left: -176px;\r\n            width: 235px;\r\n            font-family: montserratlight;\r\n            padding-bottom: 55px;\r\n        }\r\n\r\n        .mobile-menu .name-dropdown-border {\r\n            width: 100%;\r\n            margin: 5px 0px;\r\n        }\r\n\r\n        .mobile-menu .user-outr {\r\n            float: left;\r\n            width: 100%;\r\n            padding: 0;\r\n            margin: 0px;\r\n            display: block;\r\n        }\r\n\r\n        .mobile-menu .user-outr li {\r\n            float: right;\r\n            font-size: 24px;\r\n            font-family: montserratlight;\r\n            color: #fff;\r\n            margin-right: 24px;\r\n            /* margin: 10px 19px; */\r\n            margin-top: 8px;\r\n            margin-bottom: 6px;\r\n        }\r\n\r\n        .mobile-menu .user-outr li a {\r\n            margin-right: 30px;\r\n        }\r\n      \r\n        .user-outr li a {\r\n            float: left;\r\n            width: auto;\r\n            border: 2px solid #dae2e6;\r\n            border-radius: 50%;\r\n            margin-left: 5px;\r\n            margin-bottom: 5px;\r\n        }\r\n\r\n        .user-outr li a:hover {\r\n            border: 2px solid #f56151;\r\n        }\r\n\r\n        .mobile-menu .company-list li,\r\n        .mobile-menu .name-list li {\r\n            margin: 10px 0px;\r\n            text-align: right;\r\n            font-size: 16px;\r\n            width: 100%;\r\n            float: left;\r\n            padding-right: 20px;\r\n        }\r\n\r\n        .mobile-menu .company-list li a,\r\n        .mobile-menu .name-list li a {\r\n            float: right;\r\n            color: #fff;\r\n        }\r\n\r\n        .mobile-menu .company-list li a i {\r\n            margin-right: 20px;\r\n            float: left;\r\n        }\r\n\r\n        .mobile-menu .name-list li a i {\r\n            margin-left: 20px;\r\n            float: right;\r\n        }\r\n\r\n        .mobile-menu .company-list-title {\r\n            float: left;\r\n            color: #fff;\r\n        }\r\n\r\n        .white-logo {\r\n            display: block !important;\r\n        }\r\n\r\n        .dash-prog-outer {\r\n            float: left;\r\n            width: 100%;\r\n            margin-top: 10px;\r\n            margin-bottom: 10px;\r\n        }\r\n\r\n        .dash-prog-outer h5 {\r\n            font-size: 24px;\r\n            text-align: center;\r\n            width: 100%;\r\n            margin-bottom: 1px;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper {\r\n            min-height: 35px;\r\n            width: 100%;\r\n            text-align: center;\r\n        }\r\n\r\n        .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n            margin: 0 auto;\r\n            float: none;\r\n            text-align: center;\r\n        }\r\n\r\n        #userProfile-header .navbar-header {\r\n            float: left;\r\n            margin-left: -5px;\r\n            margin-right: 0px !important;\r\n        }\r\n\r\n        #userProfile-header .navbar-logopadding {\r\n            padding-right: 0px;\r\n            padding-top: 0px;\r\n        }\r\n\r\n        #userProfile-header .navbar-default {\r\n            height: 50px;\r\n            margin: 0px;\r\n            padding-bottom: 0px;\r\n        }\r\n\r\n        .white-logo .navbar-brand img {\r\n            height: 53px;\r\n            margin-top: -20px;\r\n            margin: 0 auto;\r\n            margin-top: -20px;\r\n        }\r\n\r\n        .white-logo .navbar-brand {\r\n            float: none;\r\n        }\r\n\r\n        .user-outr li a.add-user {\r\n            width: 45px;\r\n            height: 45px;\r\n            padding-top: 9px;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n            top: -30px;\r\n            left: 17px;\r\n            font-size: 34px;\r\n            position: relative;\r\n            color: #f87b80;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n            font-size: 16px;\r\n        }\r\n\r\n        .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n            width: 91%;\r\n            font-size: 14px;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n            width: 35px;\r\n            height: 35px;\r\n            padding-top: 8px;\r\n            font-size: 14px;\r\n            top: 13px;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n            font-size: 14px;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n            font-size: 24px;\r\n        }\r\n\r\n        .company-block-content {\r\n            margin-left: 50px;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n            left: 42px;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n            right: 34px;\r\n        }\r\n\r\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n            top: 8px;\r\n            left: -8px;\r\n        }\r\n\r\n    }\r\n\r\n    @media (max-width: 1900px) {\r\n        .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\r\n            font-size: 10px !important;\r\n        }\r\n\r\n        .sahil-material .form-group.label-floating.is-focused label.control-label {\r\n            font-size: 10px !important;\r\n        }\r\n\r\n        .my-profile .form-group.time-zone label.control-label {\r\n            font-size: 10px !important;\r\n        }\r\n  \r\n    }\r\n\r\n    @media screen and (min-width: 320px) and (max-width: 320px){\r\n        #membership-details .nav-tabs.nav-justified > li:nth-child(1) > a {\r\n            padding: 18px 3px;\r\n        }\r\n\r\n        #membership-details .nav-tabs.nav-justified > li:nth-child(2) > a {\r\n            padding: 18px 12px;\r\n        }\r\n\r\n        #subscription .membership-details .btn-red-outline{\r\n            white-space: normal !important;\r\n            max-width: 275px;\r\n        }\r\n\r\n    }\r\n\r\n    @media screen and (min-width: 1024px) and (max-width: 1024px){\r\n        #membership-details .tab-content.tab-sub-content {\r\n            width: 74%;\r\n        }\r\n\r\n        .billing-plan-list {\r\n            width: 80%;\r\n            margin-left: 10%;\r\n        }\r\n\r\n        .billing-table {\r\n            margin-top: 30px;\r\n        }\r\n\r\n        .billing-grey {\r\n            width: 300px;\r\n            margin-left: 17%;\r\n            box-shadow: 0px 0px 19px rgba(60,60,60,0.29);\r\n        }\r\n\r\n        .billing-white {\r\n            top: 30px;\r\n            width: 300px;\r\n            margin-left: 17%;\r\n            margin-bottom: 90px;\r\n        }\r\n\r\n        .toggle-dots-white{\r\n            float: left; \r\n            width: 100%;\r\n            text-align: center; \r\n            padding-top: 5px;\r\n            padding-bottom: 5px; \r\n            background:#62696d; \r\n\r\n        }\r\n\r\n        .toggle-dots-white span{ \r\n            width: 8px; \r\n            height: 8px;\r\n            display: inline-block; \r\n            border-radius: 100%; \r\n            background:#fff;\r\n        }\r\n\r\n        .toggle-dots-white2{\r\n            float: left; \r\n            width: 100%;\r\n            text-align: center; \r\n            padding-top: 5px;\r\n            padding-bottom: 5px; \r\n            background:#62696d; \r\n        }\r\n\r\n        .toggle-dots-white2 span{ \r\n            width: 8px; \r\n            height: 8px;\r\n            display: inline-block; \r\n            border-radius: 100%; \r\n            background:#fff;\r\n        } \r\n\r\n        .toggle-dots-grey {\r\n            float: left;\r\n            width: 100%;\r\n            text-align: center;\r\n            padding-top: 5px;\r\n            padding-bottom: 5px;\r\n            background: #fff;\r\n            /*border-top: 1px solid #e6e7e8;*/\r\n        }\r\n\r\n        .toggle-dots-grey span {\r\n            width: 8px;\r\n            height: 8px;\r\n            display: inline-block;\r\n            border-radius: 100%;\r\n            background: rgba(251,108,115,0.8);\r\n        }\r\n\r\n        .rs-hide{\r\n            display: none;\r\n        }\r\n\r\n        .billing-grey-top {\r\n            border-bottom: 1px solid #777;\r\n        }\r\n\r\n        .billing-grey-top.business-box-xshadow {\r\n            box-shadow: none;\r\n        }\r\n\r\n    }\r\n\r\n    @media screen and (min-width: 1280px) and (max-width: 1280px){\r\n        #membership-details .tab-content.tab-sub-content {\r\n            width: 80.91%;\r\n        }\r\n\r\n        .billing-grey-top h3.plan-title {\r\n            font-size: 25px;\r\n        }\r\n        \r\n    }\r\n\r\n    .strike-off{\r\n        text-decoration:line-through;\r\n    }\r\n\r\n    .btn-disable{\r\n        pointer-events: none;\r\n        cursor: default;\r\n    }\r\n\r\n/* End: Responsiveness */"

/***/ },

/***/ 1051:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1052:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1068:
/***/ function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n      #setting-header .navbar-fixed-top .nav-padding {\r\n          padding-right: 0px;\r\n          padding-left: 0px;\r\n      }\r\n\r\n      .full-menu,\r\n      .dash-circle,\r\n      .dash-prog-outer h2 {\r\n          display: none;\r\n      }\r\n\r\n      .main-logo {\r\n          display: none !important;\r\n      }\r\n\r\n      .mobile-menu {\r\n          display: block;\r\n          float: right;\r\n          margin-top: 7px;\r\n          position: relative;\r\n      }\r\n\r\n      #setting-header .navbar-default {\r\n          background: #BEC5C9 !important;\r\n          border: none;\r\n          margin-top: 0px;\r\n      }\r\n\r\n      #setting-header .navbar-default .mat-icon i.material-icons {\r\n          font-size: 24px;\r\n          color: #fff;\r\n          padding: 13px;\r\n      }\r\n\r\n      #setting-header .navbar-header h4.title {\r\n          color: #fff;\r\n          font-size: 16px;\r\n          text-align: center;\r\n          text-transform: uppercase;\r\n          padding-top: 7px;\r\n      }\r\n\r\n      .mobile-menu button {\r\n          border: none;\r\n          box-shadow: none;\r\n          color: #fff;\r\n          background: none;\r\n          float: right;\r\n          margin: 0px 5px;\r\n      }\r\n\r\n      .mobile-menu .btn-default:hover {\r\n          color: #fff;\r\n          background: none;\r\n      }\r\n\r\n      .mobile-dash {\r\n          padding: 0px;\r\n      }\r\n\r\n      .mobile-menu .dropdown-menu {\r\n          background: #62696d;\r\n          top: -11px;\r\n          border-radius: 0px;\r\n          left: -176px;\r\n          width: 235px;\r\n          font-family: montserratlight;\r\n          padding-bottom: 55px;\r\n      }\r\n\r\n      .mobile-menu .name-dropdown-border {\r\n          width: 100%;\r\n          margin: 5px 0px;\r\n      }\r\n\r\n      .mobile-menu .user-outr {\r\n          float: left;\r\n          width: 100%;\r\n          padding: 0;\r\n          margin: 0px;\r\n          display: block;\r\n      }\r\n\r\n      .mobile-menu .user-outr li {\r\n          float: right;\r\n          font-size: 24px;\r\n          font-family: montserratlight;\r\n          color: #fff;\r\n          margin-right: 24px;\r\n          /* margin: 10px 19px; */\r\n          margin-top: 8px;\r\n          margin-bottom: 6px;\r\n      }\r\n\r\n      .mobile-menu .user-outr li a {\r\n          margin-right: 30px;\r\n      }\r\n      \r\n      .user-outr li a {\r\n          float: left;\r\n          width: auto;\r\n          border: 2px solid #dae2e6;\r\n          border-radius: 50%;\r\n          margin-left: 5px;\r\n          margin-bottom: 5px;\r\n      }\r\n\r\n      .user-outr li a:hover {\r\n          border: 2px solid #f56151;\r\n      }\r\n\r\n      .mobile-menu .company-list li,\r\n      .mobile-menu .name-list li {\r\n          margin: 10px 0px;\r\n          text-align: right;\r\n          font-size: 16px;\r\n          width: 100%;\r\n          float: left;\r\n          padding-right: 20px;\r\n      }\r\n\r\n      .mobile-menu .company-list li a,\r\n      .mobile-menu .name-list li a {\r\n          float: right;\r\n          color: #fff;\r\n      }\r\n\r\n      .mobile-menu .company-list li a i {\r\n          margin-right: 20px;\r\n          float: left;\r\n      }\r\n\r\n      .mobile-menu .name-list li a i {\r\n          margin-left: 20px;\r\n          float: right;\r\n      }\r\n\r\n      .mobile-menu .company-list-title {\r\n          float: left;\r\n          color: #fff;\r\n      }\r\n\r\n      .white-logo {\r\n          display: block !important;\r\n      }\r\n\r\n      .dash-prog-outer {\r\n          float: left;\r\n          width: 100%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n      }\r\n\r\n      .dash-prog-outer h5 {\r\n          font-size: 24px;\r\n          text-align: center;\r\n          width: 100%;\r\n          margin-bottom: 1px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper {\r\n          min-height: 35px;\r\n          width: 100%;\r\n          text-align: center;\r\n      }\r\n\r\n      .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n          margin: 0 auto;\r\n          float: none;\r\n          text-align: center;\r\n      }\r\n\r\n      #setting-header .navbar-header {\r\n          float: left;\r\n          margin-left: -5px;\r\n          margin-right: 0px !important;\r\n      }\r\n\r\n      #setting-header .navbar-logopadding {\r\n          padding-right: 0px;\r\n          padding-top: 0px;\r\n      }\r\n\r\n      #setting-header .navbar-default {\r\n          height: 50px;\r\n          margin: 0px;\r\n          padding-bottom: 0px;\r\n      }\r\n\r\n      .white-logo .navbar-brand img {\r\n          height: 53px;\r\n          margin-top: -20px;\r\n          margin: 0 auto;\r\n          margin-top: -20px;\r\n      }\r\n\r\n      .white-logo .navbar-brand {\r\n          float: none;\r\n      }\r\n\r\n      .user-outr li a.add-user {\r\n          width: 45px;\r\n          height: 45px;\r\n          padding-top: 9px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n          top: -30px;\r\n          left: 17px;\r\n          font-size: 34px;\r\n          position: relative;\r\n          color: #f87b80;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n          font-size: 16px;\r\n      }\r\n\r\n      .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n          width: 91%;\r\n          font-size: 14px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n          width: 35px;\r\n          height: 35px;\r\n          padding-top: 8px;\r\n          font-size: 14px;\r\n          top: 13px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n          font-size: 14px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n          font-size: 24px;\r\n      }\r\n\r\n      .company-block-content {\r\n          margin-left: 50px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n          left: 42px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n          right: 34px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n          top: 8px;\r\n          left: -8px;\r\n      }\r\n\r\n  }"

/***/ },

/***/ 1094:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane\" id=\"my-account\">\r\n    \r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n        <div class=\"col-md-2 col-sm-1 col-xs-2 np\"></div>\r\n        <div class=\"col-md-8 col-sm-10 col-xs-12 np\">\r\n            <!-- Nav tabs -->\r\n            <div class=\"col-md-3 col-sm-3 col-xs-12 np my-account-inner-tabs hide\">\r\n                <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n                    <li role=\"presentation\" class=\"active\">\r\n                        <a href=\"#my-profile\" aria-controls=\"myProfile\" role=\"tab\" data-toggle=\"tab\" class=\"\">My Profile <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n                    </li>\r\n                    <li role=\"presentation\">\r\n                        <a href=\"#change-password\" aria-controls=\"changePassword\" role=\"tab\" data-toggle=\"tab\" class=\"\">Change Password <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n                    </li>\r\n                    <li role=\"presentation\">\r\n                        <a href=\"#companies\" aria-controls=\"companies\" role=\"tab\" data-toggle=\"tab\" class=\"\">Companies <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n                    </li>\r\n\r\n<!--                     <li role=\"presentation\">\r\n                        <a href=\"#integration\" aria-controls=\"integration\" role=\"tab\" data-toggle=\"tab\" class=\"\">Api Integration <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n                    </li> -->\r\n                </ul>\r\n            </div>\r\n            <!-- End: Nav tabs -->\r\n\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n                    <li role=\"presentation\" class=\"active\">\r\n                        <a href=\"#my-profile\" aria-controls=\"myProfile\" role=\"tab\" data-toggle=\"tab\" class=\"\">My Profile</a>\r\n                    </li>\r\n                    <li role=\"presentation\">\r\n                        <a href=\"#change-password\" aria-controls=\"changePassword\" role=\"tab\" data-toggle=\"tab\" class=\"\">Change Password</a>\r\n                    </li>\r\n                    <li role=\"presentation\">\r\n                        <a href=\"#companies\" aria-controls=\"companies\" role=\"tab\" data-toggle=\"tab\" class=\"\">Companies</a>\r\n                    </li>\r\n\r\n                    <!-- <li role=\"presentation\">\r\n                        <a href=\"#integration\" aria-controls=\"integration\" role=\"tab\" data-toggle=\"tab\" class=\"\">Api Integration</a>\r\n                    </li> -->\r\n                </ul>\r\n            </div>\r\n            <!-- End: Nav tabs -->\r\n\r\n            <!-- Start: tabs sub content -->\r\n            <div class=\"tab-content tab-sub-content col-md-9 col-sm-9 col-xs-12 np\">\r\n                <!-- Start: tab my-profile -->\r\n                <div role=\"tabpanel\" class=\"tab-pane sahil-material active my-profile\" id=\"my-profile\">\r\n                    <!-- Start: materialize form -->\r\n                    <og-basic-details></og-basic-details>\r\n                    <!-- End: materialize form -->\r\n                </div>\r\n                <!-- End: tab my-profile -->\r\n                <!-- Start: tab companies -->\r\n                <div role=\"tabpanel\" class=\"tab-pane companies sahil-material\" id=\"companies\">\r\n                    <og-user-companies [myCompaniesList]=\"myCompanies\"></og-user-companies>\r\n                </div>\r\n                <!-- End: tab companies -->\r\n                <!-- Start: tab change-password -->\r\n                <div role=\"tabpanel\" class=\"tab-pane change-password sahil-material\" id=\"change-password\">\r\n                    <!-- Start: materialize form -->\r\n                    <og-change-password></og-change-password>\r\n                    <!-- End: materialize form -->\r\n                </div>\r\n                <!-- End: tab change-password -->\r\n\r\n                <!-- Start: tab Api Integration -->\r\n                <!-- <div role=\"tabpanel\" class=\"tab-pane change-password sahil-material\" id=\"integration\">\r\n                    <og-api-integration></og-api-integration>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2 col-sm-1 col-xs-2 np\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },

/***/ 1095:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <!-- <div class=\"col-md-12 col-sm-12 col-xs-12 np my-profile-header\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n            <h6 class=\"\">My Profile</h6>\r\n        </div>\r\n    </div> -->\r\n    <form *ngIf=\"active\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"basicDetailsForm\">\r\n        <div class=\"form-group label-floating \" [class.is-empty] = \"model.name==''\">\r\n            <label class=\"control-label\" for=\"name\">Name</label>\r\n            <input type=\"text\" class=\"form-control\" [class.is-empty] = \"model.name==''\" id=\"name\" required [(ngModel)]=\"model.name\" ngControl=\"name\" formControlName=\"name\" name=\"name\"/>\r\n        </div>\r\n        <div *ngIf=\"basicDetailsForm.controls.name.touched && !basicDetailsForm.controls.name.valid\" class=\"alert alert-danger\">\r\n                <p *ngIf=\"basicDetailsForm.controls.name.errors.required\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Name is required.\r\n                </p>\r\n                <p *ngIf=\"basicDetailsForm.controls.name.errors.minlength\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Min 4 character is required.\r\n                </p>\r\n                <p *ngIf=\"basicDetailsForm.controls.name.errors.pattern\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Invalid Name\r\n\t\t\t\t</p>\r\n        </div>\r\n        <div class=\"form-group label-floating contact-num\" [class.is-empty] = \"model.phone==null || model.phone==''\">\r\n            <label class=\"control-label\" for=\"phone\">Phone</label>\r\n            <input type=\"text\" class=\"form-control\" [class.is-empty] = \"model.phone==null\" id=\"phone\" [(ngModel)]=\"model.phone\" ngControl=\"phone\" name=\"phone\" formControlName=\"phone\"/>\r\n        </div>\r\n        <div *ngIf=\"basicDetailsForm.controls.phone.touched && !basicDetailsForm.controls.phone.valid\" class='alert alert-danger'>\r\n            <p *ngIf=\"basicDetailsForm.controls.phone.errors.required\">\r\n                <span class=\"mat-icon\">\r\n                    <i class=\"material-icons\">report_problem</i>\r\n                </span>\r\n                Phone is required.\r\n            </p>\r\n            <p *ngIf=\"basicDetailsForm.controls.phone.errors.pattern\">\r\n                <span class=\"mat-icon\">\r\n                    <i class=\"material-icons\">report_problem</i>\r\n                </span>\r\n                Invalid Entry\r\n            </p>\r\n            <p *ngIf=\"basicDetailsForm.controls.phone.errors.minlength && !basicDetailsForm.controls.phone.errors.pattern\" >\r\n                <span class=\"mat-icon\">\r\n                    <i class=\"material-icons\">report_problem</i>\r\n                </span>Min 5 digits are required.\r\n            </p>\r\n        </div>\r\n        <div class=\"form-group label-floating\">\r\n            <label class=\"control-label\" for=\"email\">Email Address</label>\r\n            <input type=\"email\" readonly class=\"form-control disabled-text\" id=\"email\" required value={{user_email}}  disabled=\"disabled\" />\r\n            <!-- <button type=\"button\" class=\"btn btn-red-outline btn-hover btn-updateEmail\" data-toggle=\"modal\" data-target=\"#change-email\">Update Email</button> -->\r\n            <span class=\"btn-changeEmail-outer\">\r\n                <a class=\"btn-changeEmail\" data-toggle=\"modal\" data-target=\"#change-email\">Change Email</a>\r\n            </span>\r\n        </div>\r\n        <div class=\"form-group label-floating\" [class.is-empty] = \"model.location==''\">\r\n            <label class=\"control-label\" for=\"location\">Location</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" [class.is-empty] = \"model.location==''\" id=\"location\" [(ngModel)]=\"model.location\" ngControl=\"location\" formControlName=\"location\" name=\"location\" (blur)=\"chkLocation()\"/>\r\n        </div>\r\n        <div *ngIf=\"basicDetailsForm.controls.location.touched && !basicDetailsForm.controls.location.valid\" class='alert alert-danger'>\r\n            <p *ngIf=\"basicDetailsForm.controls.location.errors.required\">\r\n                <span class=\"mat-icon\">\r\n                    <i class=\"material-icons\">report_problem</i>\r\n                </span>\r\n                location is required.\r\n            </p>\r\n        </div>\r\n        <!-- Start: Time zone -->\r\n        <div class=\"form-group time-zone\" [class.is-empty] = \"model.timezone==''\">\r\n            <label class=\"control-label\" for=\"timezone\">Time zone</label>\r\n            <select class=\"form-control\" [class.is-empty] = \"model.timezone==''\" [(ngModel)]=\"model.timezone\" ngControl=\"timezone\" id=\"timezone\" name=\"timezone\" formControlName=\"timezone\">\r\n                <option selected>Select a Timezone</option>\r\n                <option *ngFor=\"let t of timezones\" [value]=\"t\">{{t}}</option>\r\n            </select>\r\n            <span class=\"select-caret\"></span>\r\n            <div *ngIf=\"basicDetailsForm.controls.timezone.touched && !basicDetailsForm.controls.timezone.valid\" class=\"col-md-12 alert alert-danger\">\r\n                <p *ngIf=\"basicDetailsForm.controls.timezone.errors.required\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Timezone is required.\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <!-- End: Time zone -->\r\n        <div class=\"col-md-12 np\">\r\n            <button type=\"submit\" class=\"btn btn-white btn-update btn-hover\" [disabled]=\"!basicDetailsForm.valid\" id='saveBasicDetails' (click)=\"callGA('UPDATEACCOUNT')\">Update</button>\r\n            <div class=\"val-success-msg success-message hide\">\r\n                <span class=\"icon-success\">\r\n                    <i class=\"material-icons\">check_circle</i>\r\n                </span>\r\n                {{Message}}\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<!-- Start: Change Email Modal -->\r\n<div id=\"change-email\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n                <h5 class=\"modal-title\">Change Email Address</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form *ngIf=\"active\" (ngSubmit)=\"updateEmail()\" [formGroup]=\"emailForm\">\r\n                    <div class=\"form-group label-floating\">\r\n                        <label class=\"control-label\" for=\"email\">New Email Address:</label>\r\n                        <input type=\"email\" class=\"form-control\" required [(ngModel)]=\"model.emails\" ngControl=\"email\" name=\"email\" formControlName=\"email\"/>\r\n                    </div>\r\n                  <div class=\"form-group label-floating\">\r\n                    <label class=\"control-label\" for=\"email\">Password:</label>\r\n                    <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"model.password\" ngControl=\"password\" name=\"password\" formControlName=\"password\"/>\r\n                  </div>\r\n                    <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n                        <!-- <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"setFalse()\">&times;</a> -->\r\n                        <p>\r\n                            <span class=\"mat-icon\">\r\n                                <i class=\"material-icons\">report_problem</i>\r\n                            </span>\r\n                            {{Message}}\r\n                        </p>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-red-outline btn-add-user btn-hover\" id='updateEmail' (click)='updateEmail()'>Change Email</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End: Change Email Modal -->\r\n\r\n<div id=\"basicMessageModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Message</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>{{Message}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Start: changes updated successfully div -->\r\n<div class=\"float-changes-updated hide\">\r\n    <div class=\"col-md-12 np\">\r\n        <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n        <span>{{Message}}</span>\r\n    </div>\r\n</div>\r\n<!-- End: changes updated successfully div -->\r\n"

/***/ },

/***/ 1096:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n            <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\" for=\"old_password\">Current Password</label>\r\n                <input id=\"old_password\" type=\"password\" required class=\"form-control\" formControlName=\"old_password\">\r\n            </div>\r\n            <div *ngIf=\"changePasswordForm.controls.old_password.touched && !changePasswordForm.controls.old_password.valid\" class='alert alert-danger'>\r\n                <p *ngIf=\"changePasswordForm.controls.old_password.errors.required\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Old Password is required.</p>\r\n                <p *ngIf=\"changePasswordForm.controls.old_password.errors.minlength\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Use at least 8 characters\r\n                </p>\r\n            </div>\r\n            <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\" for=\"new_password\">New Password</label>\r\n                <input id=\"new_password\" type=\"password\" required class=\"form-control\" formControlName=\"new_password\">\r\n            </div>\r\n            <div *ngIf=\"changePasswordForm.controls.new_password.touched && !changePasswordForm.controls.new_password.valid\" class='alert alert-danger'>\r\n                <p *ngIf=\"changePasswordForm.controls.new_password.errors.required\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    New Password is required.\r\n                </p>\r\n                <p *ngIf=\"changePasswordForm.controls.new_password.errors.minlength\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Use at least 8 characters\r\n                </p>\r\n            </div>\r\n            <div class=\"form-group label-floating\">\r\n                <label class=\"control-label\" for=\"confirm_password\">Retype New Password</label>\r\n                <input id=\"confirm_password\" type=\"password\" required class=\"form-control\" formControlName=\"confirm_password\">\r\n            </div>\r\n            <div *ngIf=\"changePasswordForm.controls.confirm_password.touched && !changePasswordForm.controls.confirm_password.valid\" class='alert alert-danger'>\r\n                <p *ngIf=\"changePasswordForm.controls.confirm_password.errors.required\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Confirm Password is required.\r\n                </p>\r\n                <p *ngIf=\"changePasswordForm.controls.confirm_password.errors.minlength\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    Use at least 8 characters\r\n                </p>\r\n            </div>\r\n            <div *ngIf=\"error\" class=\"form-group alert alert-danger\">\r\n                <p>{{Message}}</p>\r\n            </div>\r\n            <div *ngIf=\"success\" class=\"val-success-msg form-group success-message hide\">\r\n                <span class=\"icon-success\">\r\n                    <i class=\"material-icons\">check_circle</i>\r\n                </span>\r\n                {{Message}}\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n            <button [disabled]=\"!changePasswordForm.valid\" type=\"submit\" class=\"btn btn-white btn-hover\" id='updatePassword' (click)=\"callGA('UPDATEPASS')\">Update</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<!-- Start: changes updated successfully div -->\r\n<div class=\"float-changes-updated hide\">  \r\n    <div class=\"col-md-12 np\">\r\n        <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n        <span>{{Message}}</span>\r\n    </div>\r\n</div>\r\n<!-- End: changes updated successfully div -->"

/***/ },

/***/ 1097:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 np\" id=\"companyLists\">\r\n\t<span *ngFor=\"let company of myCompaniesList\">\r\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 companies-card\" *ngIf=\"company.user_company.status == 'APPROVED' || (company.user_company.status == 'INVITED' && company.user_company.active)\">\r\n\t\t\t<div class=\"companies-box\">\r\n\t\t\t\t<div class=\"img-block-wrapper\" (click)=\"showDetails(company)\">\r\n\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n\t\t\t\t\t<div class=\"icon-block col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"col-md-6 col-sm-4 col-xs-3\" data-toggle=\"modal\" data-target=\"#change-company-name\" *ngIf=\"company.user_company.role == 'ADMIN'\" (click)=\"popupUpdateCompany(company);callGA('EDITCOMPANY')\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-grey\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mode_edit</i>\r\n\t\t\t\t\t\t\t\t\t<!--<span class=\"edit\">Edit</span>-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"comany-tooltip\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"ellipsis\">Edit Company</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"col-md-6 col-sm-4 col-xs-3\" data-toggle=\"modal\" data-target=\"#leave-company\" (click)=\"leaveCompany(company);callGA('LEAVECOMPANY')\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-grey\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">highlight_off</i>\r\n\t\t\t\t\t\t\t\t\t<!--<span class=\"leave\">Leave Company</span>-->\r\n\t\t\t\t\t\t\t\t\t<div class=\"comany-tooltip\">\r\n\t\t\t\t\t\t\t\t\t\t<p class=\"ellipsis\">Leave Company</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 companies-card\" *ngIf=\"company.user_company.status == 'REQUESTED'\">\r\n\t\t\t<div class=\"companies-box\">\r\n\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n\t\t\t\t\t<span class=\"req-sent ellipsis\">Request Sent</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 companies-card\" *ngIf=\"company.user_company.status == 'INVITED' && !company.user_company.active\">\r\n\t\t\t<div class=\"companies-box\">\r\n\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n\t\t\t\t\t<div class=\"icon-block\">\r\n\t\t\t\t\t\t<span (click)=\"acceptInvite(company)\">\r\n\t\t\t\t\t\t\t<span class=\"icon-green hide\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">check_circle</i>\r\n\t\t\t\t\t\t\t\t<span class=\"leave\">Accept</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<div style=\"display:inline-block;\">\r\n\t\t\t\t\t\t\t\t<div class=\"onoffswitch\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox comp{{company.id}}\" id=\"comp{{company.id}}\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"onoffswitch-label\" attr.for=\"comp{{company.id}}\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-inner\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-switch\"></span>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</span>\r\n\t<div class=\"col-md-4 col-sm-4 col-xs-12 companies-card\" *ngIf=\"!is_admin_created\">\r\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 companies-box\">\r\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-6 np text-center\">\r\n\t\t\t\t<a href=\"\" class=\"companies-box-wrapper add-join-companies-box-wrapper\" data-toggle=\"modal\" data-target=\"#add-new-company\" (click)=\"callGA('ADDCOMPANY')\">\r\n\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t<div class=\"add-company\">\r\n\t\t\t\t\t\t\t<span>+</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t<h5 class=\"name\">Add Company</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-6 col-sm-12 col-xs-6 np text-center hide\">\r\n\t\t\t\t<a href=\"\" class=\"companies-box-wrapper add-join-companies-box-wrapper join-company-mt\" data-toggle=\"modal\" data-target=\"#join-company\" (click)=\"callGA('JOINCOMPANY')\">\r\n\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t<div class=\"join-company\">\r\n\t\t\t\t\t\t\t<span><i class=\"material-icons\">bubble_chart</i></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t<h5 class=\"name\">Join Company</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"col-md-12 col-sm-12 col-xs-12 np hide\" id=\"companyDetails\">\r\n\t<a href=\"javascript:void(0);\" (click)=\"backToList()\"><i class=\"material-icons\">keyboard_arrow_left</i>Back to company Lists</a>\r\n\t<div class=\"companyDetail-inner\">\r\n\t\t<a  href=\"javascript:void(0);\" class=\"col-md-6 col-sm-4 col-xs-3\" data-toggle=\"modal\" data-target=\"#change-company-name\" class=\"pull-right\" *ngIf=\"clickedCompany.user_company.role == 'ADMIN'\" (click)=\"popupUpdateCompany(clickedCompany);callGA('EDITCOMPANY')\"><i class=\"material-icons\">edit</i></a>\r\n\t\t<div class=\"details\">\r\n\t\t\t<table class=\"table-company-detail\">\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Company Name</td>\r\n\t\t\t\t\t\t<td>{{clickedCompany.name}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Company URL</td>\r\n\t\t\t\t\t\t<td>{{clickedCompany.sub_domain}}{{subdomainExtension}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<!-- <tr>\r\n\t\t\t\t\t\t<td>Agency</td>\r\n\t\t\t\t\t\t<td>{{clickedCompany.agency?'true':'false'}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Leads per Month</td>\r\n\t\t\t\t\t\t<td>{{clickedCompany.leads.total?clickedCompany.leads.total:'0'}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Monthly Traffic</td>\r\n\t\t\t\t\t\t<td>{{clickedCompany.traffic.frequency?clickedCompany.traffic.frequency:'0'}}</td>\r\n\t\t\t\t\t</tr> -->\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>Your Api key</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<input type=\"text\" disabled=\"true\" id=\"input-api\" size=\"35\" value=\"{{clickedCompany.api}}\"/>\r\n\t\t\t\t\t\t\t<i *ngIf=\"clickedCompany.api\" class=\"material-icons pull-right\" (click)=\"copyApi()\">content_copy</i>\r\n\t\t\t\t\t\t\t<a *ngIf=\"!clickedCompany.api\" class=\"btn btn-white btn-update btn-hover\" href=\"javascript:void(0)\" (click)=\"generateApiKey(clickedCompany.id)\">generate</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div id=\"change-company-name\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content modal-bg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<h5 class=\"modal-title\">Change Company Name</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"sahil-material\">\r\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert hide\" id=\"success-updateCompany\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t{{Message}}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-12 np filled-sec\">\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12 np\">\r\n\t\t\t\t\t\t\t<label class=\"control-label col-md-2 np label-filled\" for=\"\">Current Name</label>\r\n\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\r\n\t\t\t\t\t\t\t<span class=\"form-control col-md-8 np input-filled\">\r\n\t\t\t\t\t\t\t\t{{updateCompany.name}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group col-md-12 np\" style=\"margin-top: 12px;\">\r\n\t\t\t\t\t\t\t<label class=\"control-label col-md-2 np label-filled\" for=\"\">Current Url</label>\r\n\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\r\n\t\t\t\t\t\t\t<span class=\"form-control col-md-8 np input-filled\">\r\n\t\t\t\t\t\t\t\t{{updateCompany.sub_domain}}{{subdomainExtension}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<form [formGroup] = \"updateCompanyForm\" (ngSubmit)=\"updateThisCompany()\" id=\"updateComp\">\r\n\t\t\t\t\t\t<div class=\"form-group label-floating\" id=\"updCompanynameDiv\" [class.is-empty]=\"!EditCompany.name\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"companyname\"> New Company Name</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"updCompanyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\" [(ngModel)]=\"EditCompany.name\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"updateCompanyForm.controls.companyname.touched  && !updateCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.companyname.errors.required\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t                                <i class=\"material-icons\">report_problem</i>\r\n\t                            </span>\r\n\t\t\t\t\t\t\t\tCompany Name is required.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.companyname.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n                                    <i class=\"material-icons\">report_problem</i>\r\n                                </span>\r\n\t\t\t\t\t\t\t\tPlease input at least 3 characters.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group label-floating\" id=\"updDomainDiv\" [class.is-empty]=\"!EditCompany.sub_domain\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"domain\"> New Url</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"updDomain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\" [(ngModel)]=\"EditCompany.sub_domain\">\r\n\t\t\t\t\t\t\t<label class=\"in-active\">{{subdomainExtension}}</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"updateCompanyForm.controls.domain.touched && !updateCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.domain.errors.required\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t                                <i class=\"material-icons\">report_problem</i>\r\n\t                            </span>\r\n\t\t\t\t\t\t\t\tDomain is required.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.domain.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n                                    <i class=\"material-icons\">report_problem</i>\r\n                                </span>\r\n\t\t\t\t\t\t\t\tPlease input at least 4 characters.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.domain.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t                                <i class=\"material-icons\">report_problem</i>\r\n\t                            </span>\r\n\t\t\t\t\t\t\t\tInvalid Url\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"form-group toggle-switch\">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\tAre you an agency ? &nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"show-check\" formControlName=\"companyType\" id=\"updCompanyType\" name=\"companyType\" [(ngModel)]=\"EditCompany.agency\">\r\n\t\t\t\t\t\t\t\t<span class=\"lever\"></span>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group label-floating monthly-traffic\" id=\"updTrafficDiv\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"traffic\">Monthly traffic</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"updTraffic\" type=\"text\" formControlName=\"traffic\" name=\"traffic\" [(ngModel)]=\"EditCompany.traffic.frequency\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"updateCompanyForm.controls.traffic.touched  && !updateCompanyForm.controls.traffic.valid\" class=\"col-md-12 alert alert-danger\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.traffic.errors.maxlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t                                <i class=\"material-icons\">report_problem</i>\r\n\t                            </span>\r\n\t\t\t\t\t\t\t\tMax 8 digits are allowed.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.traffic.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t                                <i class=\"material-icons\">report_problem</i>\r\n\t                            </span>\r\n\t\t\t\t\t\t\t\tTraffic should be a valid number\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group label-floating contact-num\" id=\"updLeadsDiv\">\r\n\t\t\t\t\t\t\t<label class=\"control-label \" for=\"leads\">Avg Leads generated every month</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"updLeads\" name=\"leads\" type=\"tel\" formControlName=\"leads\" [(ngModel)]=\"EditCompany.leads.total\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"updateCompanyForm.controls.leads.touched  && !updateCompanyForm.controls.leads.valid\" class=\"col-md-12 alert alert-danger\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.leads.errors.maxlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t                                <i class=\"material-icons\">report_problem</i>\r\n\t                            </span>\r\n\t\t\t\t\t\t\t\tMax 8 digits are allowed.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.leads.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t                                <i class=\"material-icons\">report_problem</i>\r\n\t                            </span>\r\n\t\t\t\t\t\t\t\tLeads should be a valid number\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<button type=\"submit\" id=\"btnUpdateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover pull-right\" [disabled]=\"!updateCompanyForm.valid\">Update</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer hide\">\r\n\t\t\t\tYour company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content modal-bg\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n                <h5 class=\"modal-title\">Create a New Company</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"sahil-material\">\r\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert hide\" id=\"success-addCompany\">\r\n                        {{Message}}\r\n                    </div>\r\n                    <form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\r\n                        <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\" for=\"companyname\"> New Company Name</label>\r\n                            <input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\r\n                        </div>\r\n                        <div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\r\n                            <p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">\r\n                            \t<span class=\"mat-icon\">\r\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\r\n\t\t\t                    </span>\r\n                            \tCompany Name is required.\r\n                            </p>\r\n                            <p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">\r\n                            \t<span class=\"mat-icon\">\r\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\r\n\t\t\t                    </span>\r\n                            \tPlease input at least 3 characters.\r\n                            </p>\r\n                        </div>\r\n                        <div class=\"form-group label-floating\">\r\n                            <label class=\"control-label\" for=\"domain\"> Company Url</label>\r\n                            <input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\r\n                            <label class=\"in-active\">{{subdomainExtension}}</label>\r\n                        </div>\r\n                        <div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\r\n                            <p *ngIf=\"createCompanyForm.controls.domain.errors.required\">\r\n                            \t<span class=\"mat-icon\">\r\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\r\n\t\t\t                    </span>\r\n                            \tCompany Url is required.\r\n                        \t</p>\r\n                            <p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">\r\n                            \t<span class=\"mat-icon\">\r\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\r\n\t\t\t                    </span>\r\n                            \tPlease input at least 4 characters.\r\n                        \t</p>\r\n                            <p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\r\n                            \t<span class=\"mat-icon\">\r\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\r\n\t\t\t                    </span>\r\n                                Invalid Url\r\n                            </p>\r\n                        </div>\r\n                        <button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!-- <button type=\"\" class=\"btn btn-red-outline btn-hover\">Join Company</button> -->\r\n                Your company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Start: Modal Join Company -->\r\n<div id=\"join-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content modal-bg\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n                <h5 class=\"modal-title\">Join Company</h5>\r\n            </div>\r\n            <div class=\"modal-body col-md-12 np slimscroll\">\r\n                <div class=\"sahil-material\">\r\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert hide\" id=\"success-joinCompany\" *ngIf=\"joinCompanyForm.controls.searchCompany.valid\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\tNo Companies Found\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n                    <div class=\"col-md-12 np\">\r\n                        <form [formGroup]=\"joinCompanyForm\" (ngSubmit)=\"searchCompany()\">\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\" for=\"searchCompany\"> Search</label>\r\n                                <input class=\"form-control\" id=\"searchCompany\" type=\"text\" name=\"searchCompany\" formControlName=\"searchCompany\" (focus)=\"hideError()\">\r\n                                <span class=\"icon-search\" (click)=\"searchCompany()\"><i class=\"material-icons\">search</i></span>\r\n                            </div>\r\n                            <div *ngIf=\"error\" class=\"alert alert-danger\" id=\"searchError\">\r\n                                <p *ngIf=\"joinCompanyForm.value.searchCompany.length < 3\">\r\n                                \t<span class=\"mat-icon\">\r\n                                \t\t<i class=\"material-icons\">report_problem</i>\r\n                                \t</span>\r\n                                \tPlease enter at least 3 characters to search.\r\n                            \t</p>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np companies-card-wrapper\">\r\n                        <span *ngIf=\"searchedCompanyList.length > 0\">\r\n                            <span *ngFor=\"let company of searchedCompanyList\">\r\n                                <div class=\"col-md-6 col-sm-4 col-xs-6 np companies-card\" (click)=\"joinCompany(company)\">\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                                        <div class=\"companies-box\">\r\n                                            <div class=\"img-block-wrapper\">\r\n                                                <div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n                                            </div>\r\n                                            <div class=\"text-block\">\r\n                                                <h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n                                                <span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n                                            </div>\r\n                                            <div class=\"companies-box-hover\" id='joined{{company.id}}'>\r\n                                                <i class=\"material-icons\">check_circle</i> &nbsp;<span id='join{{company.id}}'>Join</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </span>\r\n                        <span *ngIf=\"joinedCompanyList.length > 0\">\r\n                            <span *ngFor=\"let company of joinedCompanyList\">\r\n                                <div class=\"col-md-6 col-sm-4 col-xs-6 np companies-card\">\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                                        <div class=\"companies-box\">\r\n                                            <div class=\"img-block-wrapper\">\r\n                                                <div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n                                            </div>\r\n                                            <div class=\"text-block\">\r\n                                                <h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n                                                <span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n                                            </div>\r\n                                            <div class=\"companies-box-request\">\r\n                                                Request Sent\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </span>\r\n                        <span *ngIf=\"invitedCompanyList.length > 0\">\r\n                            <span *ngFor=\"let company of invitedCompanyList\">\r\n                                <div class=\"col-md-6 col-sm-4 col-xs-6 np companies-card\">\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                                        <div class=\"companies-box\">\r\n                                            <div class=\"img-block-wrapper\">\r\n                                                <div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n                                            </div>\r\n                                            <div class=\"text-block\">\r\n                                                <h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n                                                <span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n                                            </div>\r\n                                            <div class=\"companies-box-request\">\r\n                                                check email for your approval\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <!-- End: companies cards section -->\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                Once the admin of the company accepts your request, you will be added to the company on Outgrow.\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End: Modal Join Company -->\r\n\r\n<!-- <div class=\"float-changes-updated hide\" id=\"floatUCMessage\">\r\n\t<div class=\"col-md-12 np\">\r\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n\t\t<span id=\"floatMessage\">{{ Message }} </span>\r\n\t</div>\r\n</div> -->\r\n\r\n<!-- <div class=\"float-changes-updated hide\" id=\"ucFloatMessage\">\r\n\t<div class=\"col-md-12 np\">\r\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n\t\t<span id=\"floatMessageUC\">{{ Message }} </span>\r\n\t</div>\r\n</div> -->\r\n\r\n<div class=\"toast\" id=\"ucFloatMessage\"><i class=\"material-icons toast-ic\">check</i>\r\n\t<span id=\"floatMessageUC\">{{ Message }} </span>\r\n\t<button type=\"button\" class=\"btn toast-btn\"><i class=\"material-icons\">clear</i></button>\r\n</div>\r\n\r\n<div id=\"leaveConfirmation\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content modal-bg\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n                <button type=\"button\" class=\"close btn-help\">\r\n                    <i class=\"material-icons\">help_outline</i>\r\n                </button>\r\n                <h5 class=\"modal-title\">Confirmation</h5>\r\n            </div>\r\n            <div class=\"modal-body col-md-12 np og-message\">\r\n                <p>Are you sure you wish to leave this company?</p>\r\n                <p>This is the only company you belong to. If you leave this company, your account will be deleted.</p>\r\n                <button class=\"btn btn-red-outline btn-hover\" id=\"confirmNo\" data-dismiss=\"modal\">\r\n                    No\r\n                </button>\r\n                <button class=\"btn btn-red-outline btn-hover\" id=\"confirmYes\">\r\n                    Yes\r\n                </button>\r\n\r\n            </div>\r\n            <div class=\"modal-footer col-md-12 np hide\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 1098:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-10 col-sm-offset-1 api-keyoutr\">\r\n    <h3>Copy or regenerate your API KEY for the respective companies</h3>\r\n    <div class=\"api-key-table\">\r\n        <div class=\"api-key-table-top\">\r\n            <div class=\"col-xs-12 col-sm-4 pl0\">\r\n                <p>Company and URL</p>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-5 pl0\">\r\n                <p>API Key</p>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-3 pl0\">\r\n                <p class=\"action-last\">Actions</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"api-key-tablelist\" *ngFor=\"let company of companies; let i = index\">\r\n            <div class=\"col-xs-12 col-sm-4 np\">\r\n                <div class=\"api-tablelist-left\">\r\n                    <span [class.red]=\"(i+1)%2 == 0\">{{company?.name[0] | uppercase}}</span>\r\n                </div>\r\n                <div class=\"api-tablelist-right\">\r\n                    <p class=\"ellipsis\">{{company?.name}}</p>\r\n                    <label class=\"ellipsis\">{{company?.name}}.outgrow.co</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-5 np\"> \r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"!company.api\"><i class=\"material-icons loader-plan\">autorenew</i></div>\r\n                <div class=\"api-key-generate\" id=\"input-api-{{i}}\">\r\n                    {{company?.api}}\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-3 np\">\r\n                <div class=\"api-key-actions\">\r\n                    <a href=\"javascript:void(0);\" (click)=\"copyApi(i)\"><i class=\"material-icons\">content_copy</i> Copy</a>\r\n                    <a href=\"javascript:void(0);\" id=\"regenerate-api-{{i}}\" (click)=\"generateApiKey(company?._id,i)\" *ngIf=\"company?.api != NULL\"><i class=\"material-icons\">replay</i> Regenerate</a>\r\n                    <a href=\"javascript:void(0);\" (click)=\"generateApiKey(company?._id,i)\" *ngIf=\"company?.api == NULL\" ><i class=\"material-icons\">replay</i> Generate</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 1099:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 np payment-history\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np payment-history-details-header\">\r\n        <div class=\"col-md-8 col-sm-8 col-xs-6 np\">\r\n            <h6 class=\"\">Invoices</h6>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-xs-6 np membership-top-wrapper-sec1-right\">\r\n            <ul class=\"\">\r\n                <!-- <li>\r\n                    <a href=\"javascript:void(0);\" class=\"\">\r\n                        <span class=\"mat-icon\">\r\n                            <i class=\"material-icons\">help</i>\r\n                        </span>\r\n                        &nbsp;Billing FAQs\r\n                    </a>\r\n                </li> -->\r\n                <li>\r\n                    <a href=\"javascript:void(0);\" class=\"\" (click)=\"contactUs()\">\r\n                        <span class=\"mat-icon\">\r\n                            <i class=\"material-icons\">chat_bubble</i>\r\n                        </span>\r\n                        &nbsp;Contact Us\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"loadingInvDet\"><i class=\"material-icons loader-plan\">autorenew</i></div>\r\n    <div class=\"payment-history-dialog\"  *ngIf = \"!loadingInvDet\">\r\n        <!-- Modal content-->\r\n        <div class=\"payment-history-content\">\r\n            <!-- <div class=\"payment-history-header \">\r\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n                <h5 class=\"payment-history-title\">Payment History</h5>\r\n            </div> -->\r\n            <div class=\"payment-history-body col-md-12 np\">\r\n                <div class=\"sahil-material\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Invoice No.</th>\r\n                                    <th>Date</th>\r\n                                    <th>Amount</th>\r\n                                    <th>Status</th>\r\n                                    <th>&nbsp;</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"isInvoiceExist\">\r\n                                <tr *ngFor=\"let invoice of allInvoices;let i = index\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{invoice.date}}</td>\r\n                                    <td>$ {{invoice.amount_paid}}</td>\r\n                                    <td class=\"text-opacity\">\r\n                                        <span [class.invoice-paid]=\"invoice.status=='paid'\"\r\n                                                [class.invoice-not-paid]=\"invoice.status=='not_paid'\"\r\n                                                [class.invoice-voided]=\"invoice.status=='voided'\"\r\n                                                [class.invoice-due]=\"invoice.status=='payment_due'\"\r\n                                                [class.invoice-pending]=\"invoice.status=='pending'\">\r\n                                            {{invoice.status}}\r\n                                        </span>\r\n                                        <!-- <span *ngIf=\"invoice.status=='paid'\"> via {{invoice.cardDetail}} </span> -->\r\n                                    </td>\r\n                                    <td>\r\n                                        <a href=\"javascript:void(0);\" class=\"invoiceId pdf-download\" (click)=\"getInvoicePdf(invoice.id)\">\r\n                                            Download PDF\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                            <tbody *ngIf=\"!isInvoiceExist\">\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td colspan=\"5\" class=\"no-invoice\">\r\n                                        No Invoice has been raised\r\n                                    </td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"payment-history-footer col-md-12 np\">\r\n                <div class=\"col-md-5 np\"></div>\r\n                <div class=\"col-md-7 np\">\r\n                    <!--<button type=\"\" class=\"btn btn-red-outline btn-hover\">Approve Request</button>-->\r\n                    <ul class=\"pagination hide\">\r\n                        <li><a href=\"javascript:void(0);\">1</a></li>\r\n                        <li><a href=\"javascript:void(0);\">2</a></li>\r\n                        <li><a href=\"javascript:void(0);\">3</a></li>\r\n                        <li><a href=\"javascript:void(0);\">4</a></li>\r\n                        <li><a href=\"javascript:void(0);\">5</a></li>\r\n                        <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">play_arrow</i></a></li>\r\n                        <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">skip_next</i></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 1100:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane\" id=\"membership-details\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t<!-- Start: Nav tabs -->\r\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-12 np membership-details-inner-tabs\">\r\n            <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n\t            <li role=\"presentation\" class=\"active\">\r\n\t\t\t\t    <a href=\"#subscription\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Subscription <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n\t\t\t     </li>\r\n\t\t\t    <li role=\"presentation\">\r\n\t\t\t\t    <a href=\"#invoice\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Invoices <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n\t\t\t    </li>\r\n\t\t\t    <li role=\"presentation\">\r\n\t\t\t\t    <a href=\"#settings\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Billing Details <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n\t\t\t    </li>\r\n            </ul>\r\n\t\t</div>\r\n        <!-- End: Nav tabs -->\r\n\r\n\t\t<div class=\"tab-content tab-sub-content col-md-9 col-sm-9 col-xs-12 np\">\r\n            <!-- Start: Nav tabs (responsive) -->\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 membership-details-tabs-resp\">\r\n                <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n                    <li role=\"presentation\" class=\"active\">\r\n                        <a href=\"#subscription\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Subscription</a>\r\n                     </li>\r\n                    <li role=\"presentation\">\r\n                        <a href=\"#invoice\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Invoices</a>\r\n                    </li>\r\n                    <li role=\"presentation\">\r\n                        <a href=\"#settings\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Billing Details</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!-- End: Nav tabs (responsive) -->\r\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane my-profile active\" id=\"subscription\">\r\n\t\t\t\t<og-subscription [payment_status] = \"card_status\" [userRole] = \"userRole\" (isChangePlan)=\"isChangePlan = $event\" (changeToPlan)=\"changeToPlan = $event\"></og-subscription>\r\n\t\t\t</div>\r\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane my-profile\" id=\"invoice\">\r\n\t\t\t\t<og-invoice></og-invoice>\r\n\t\t\t</div>\r\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane my-profile\" id=\"settings\">\r\n\t\t\t\t<og-payment [cardType] = \"cardType\" [userRole] = \"userRole\" (CardDetailChanged)=\"CardDetail = $event\" [CardDetail]=\"CardDetail\" [card_status]=\"card_status\"></og-payment>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Start: Modal CC -->\r\n<div id=\"cc-modal\" class=\"modal fade cc-modal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n      <!-- Modal content-->\r\n    <form class=\"form-wrapper\" [formGroup]=\"setupPaymentForm\" id=\"setupPaymentForm\" (ngSubmit)=\"setupPayment()\">\r\n      <div class=\"modal-content modal-content-credit\">\r\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            Close <i class=\"material-icons\">close</i>\r\n        </button>\r\n        <div class=\"modal-body\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n            <div class=\"col-md-12 col-sm-12 np\">\r\n              <div class=\"col-md-6 col-sm-6 col-xs-6 np modal-header\">\r\n                Payment Setup\r\n              </div>\r\n              <img id=\"cardType\" src=\"assets/images/payment-icons/icon-{{cardType}}.png\" alt=\"{{cardType}}\" class=\"pull-right\" *ngIf=\"cardType\"/>\r\n            </div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np credit-sec\">\r\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber1\" id=\"cardNumber1\" name = \"cardNumber1\" #num1 (keyup)=\"onChangeCardNumber(num1)\">\r\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber2\" id=\"cardNumber2\" name = \"cardNumber2\" [readonly]=\"!setupPaymentForm.controls.cardNumber1.valid\" #num2 (keyup)=\"onChangeCardNumber(num2)\">\r\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber3\" id=\"cardNumber3\" name = \"cardNumber3\" [readonly]=\"!setupPaymentForm.controls.cardNumber2.valid\" #num3 (keyup)=\"onChangeCardNumber(num3)\">\r\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number cc-number-last\" placeholder=\"XXXX\" formControlName=\"cardNumber4\" id=\"cardNumber4\" name = \"cardNumber4\" [readonly]=\"!setupPaymentForm.controls.cardNumber3.valid\" #num4 (keyup)=\"onChangeCardNumber(num4)\">\r\n              </div>\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np validity-sec\">\r\n                <div class=\"col-md-5 col-sm-5 col-xs-5 np\"></div>\r\n                <div class=\"col-md-7 col-sm-7 col-xs-7 np\">\r\n                  <span class=\"val-text\">Validity</span>\r\n                  <div class=\"pull-right\">\r\n                    <input type=\"text\" pattern=\"[0-9]*\" placeholder=\"MM\" maxlength=\"2\" class=\"cc-exp\" id=\"cardMonth\" name=\"cardMonth\" formControlName=\"cardMonth\" #mm (keyup)=\"onChangeCardNumber(mm)\">\r\n                    <span class=\"separator\">/</span>\r\n                    <input type=\"text\" pattern=\"[0-9]*\" placeholder=\"YYYY\" maxlength=\"4\" class=\"cc-exp cc-exp-last\" id=\"cardYear\" name=\"cardYear\" formControlName=\"cardYear\" #yyyy (keyup)=\"onChangeCardNumber(yyyy)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np name-sec\">\r\n                <input type=\"text\" placeholder=\"YOUR NAME\" class=\"cc-name col-md-9 col-sm-9 col-xs-12 np\" id=\"nameOnCard\" name=\"nameOnCard\" formControlName=\"nameOnCard\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-content modal-content-cvv\">\r\n          <div class=\"modal-body\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                  <div class=\"col-md-12 col-sm-12 np\">\r\n                      <span class=\"grey-bg\"></span>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 np\">\r\n                      <input type=\"password\" size=\"3\" maxlength=\"3\" class=\"cvv-number\" placeholder=\"XXX\" name=\"cvv\" id=\"cvv\" formControlName=\"cvv\" #cvv (keyup)=\"onChangeCardNumber(cvv)\">\r\n                      <span class=\"cvv-text\">CVV</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <button id=\"btnSetupCard\" [disabled]=\"!setupPaymentForm.valid\" type=\"submit\" class=\"btn btn-red-outline btn-hover\">\r\n            <span *ngIf='!isChangePlan'>Submit</span>\r\n            <span *ngIf='isChangePlan'>Make Payment</span>\r\n          </button>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger custom-danger\">\r\n            <p>\r\n              <span class=\"mat-icon\">\r\n                  <i class=\"material-icons\">report_problem</i>\r\n              </span>\r\n              {{errorMessage}}\r\n            </p>\r\n        \t</div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!-- End: Modal CC -->\r\n<div class=\"float-changes-updated hide\" id=\"setupPaymentMessage\">\r\n\t<div class=\"col-md-12 np\">\r\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n\t\t<span id=\"setupMessage\"></span>\r\n\t</div>\r\n</div>\r\n"

/***/ },

/***/ 1101:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-1 col-sm-12 col-xs-12\"></div>\r\n<div class=\"col-md-10 col-sm-12 col-xs-12 np billing-outer\">\r\n    <!--Start: billing details -->\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np billing-details\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np billing-details-header\">\r\n                <div class=\"col-md-8 col-sm-8 col-xs-6 np\">\r\n                    <h6 class=\"\">Billing Details</h6>\r\n                </div>\r\n                <div class=\"col-md-4 col-sm-4 col-xs-6 np membership-top-wrapper-sec1-right\">\r\n                    <ul class=\"\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0);\" class=\"\" (click)=\"contactUs()\">\r\n                                <span class=\"mat-icon\">\r\n                                    <i class=\"material-icons\">chat_bubble</i>\r\n                                </span>\r\n                                &nbsp;Contact Us\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"loadingPayDet\"><i class=\"material-icons loader-plan\">autorenew</i></div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np billing-details-info\" *ngIf=\"!loadingPayDet\">\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np hide\">\r\n                    <h4 class=\"name-info\">{{name}}</h4>\r\n                </div>\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np hide\">\r\n                    <address>\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                            <span class=\"address-title\">\r\n                                <i class=\"material-icons\">language</i>\r\n                                Address\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                            {{address}}, {{city}}<br/>\r\n                            {{state}}, {{country}}<br/>\r\n                            {{zip}}\r\n                        </div>\r\n                    </address>\r\n                </div>\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np email-info hide\">\r\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                        <span class=\"email-title\">\r\n                            <i class=\"material-icons\">email</i>\r\n                            Email\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                        <span>{{email}}</span>\r\n                    </div>\r\n                </div>\r\n                 <form id=\"billingAddressForm\" [formGroup]=\"billingAddressForm\" (ngSubmit)=\"updateBillingAddress()\">\r\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingDetails.first_name\">\r\n                                <label class=\"control-label\" for=\"inputName\">Name</label>\r\n                                <input class=\"form-control\" id=\"inputName\" type=\"text\" name=\"inputName\" formControlName=\"inputName\"\r\n                                [(ngModel)]=\"BillingDetails.first_name\">\r\n                            </div>\r\n                            <div *ngIf=\"billingAddressForm.controls.inputName.touched && !billingAddressForm.controls.inputName.valid\" class=\"alert alert-danger\">\r\n                                <p *ngIf=\"billingAddressForm.controls.inputName.errors.required\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Name is required.\r\n                                </p>\r\n                                <p *ngIf=\"billingAddressForm.controls.inputName.errors.minlength\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Minimum 3 charaters.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\"  [class.is-empty]=\"!BillingAddress.line1\">\r\n                                <label class=\"control-label\" for=\"inputAddress\">Address</label>\r\n                                <input class=\"form-control\" id=\"inputAddress\" type=\"text\" name=\"inputAddress\" formControlName=\"inputAddress\" [(ngModel)]=\"BillingAddress.line1\">\r\n                            </div>\r\n                            <div *ngIf=\"billingAddressForm.controls.inputAddress.touched && !billingAddressForm.controls.inputAddress.valid\" class=\"alert alert-danger\">\r\n                                <p *ngIf=\"billingAddressForm.controls.inputAddress.errors.required\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Address is required.\r\n                                </p>\r\n                                <p *ngIf=\"billingAddressForm.controls.inputAddress.errors.minlength\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Minimum 3 charaters.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingAddress.city\">\r\n                                <label class=\"control-label\" for=\"inputCity\">City</label>\r\n                                <input class=\"form-control\" id=\"inputCity\" type=\"text\" name=\"inputCity\" formControlName=\"inputCity\"\r\n                                [(ngModel)]=\"BillingAddress.city\">\r\n                            </div>\r\n                            <div *ngIf=\"billingAddressForm.controls.inputCity.touched && !billingAddressForm.controls.inputCity.valid\" class=\"alert alert-danger\">\r\n                                <p *ngIf=\"billingAddressForm.controls.inputCity.errors.required\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    City is required.\r\n                                </p>\r\n                                <p *ngIf=\"billingAddressForm.controls.inputCity.errors.minlength\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Minimum 3 charaters.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingAddress.state\">\r\n                                <label class=\"control-label\" for=\"inputState\">State</label>\r\n                                <input class=\"form-control\" id=\"inputState\" type=\"text\" name=\"inputState\" formControlName=\"inputState\"\r\n                                [(ngModel)]=\"BillingAddress.state\">\r\n                            </div>\r\n                            <div *ngIf=\"billingAddressForm.controls.inputState.touched && !billingAddressForm.controls.inputState.valid\" class=\"alert alert-danger\">\r\n                                <p *ngIf=\"billingAddressForm.controls.inputState.errors.required\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    State is required.\r\n                                </p>\r\n                                <p *ngIf=\"billingAddressForm.controls.inputState.errors.minlength\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Minimum 3 charaters.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingAddress.country\">\r\n                                <label class=\"control-label\" for=\"inputCountry \">Country</label>\r\n                                <select class=\"form-control\" id=\"inputCountry\" name=\"inputCountry\" formControlName=\"inputCountry\"\r\n                                [(ngModel)]=\"BillingAddress.country\">\r\n                                    <option value=\"AF\">Afghanistan</option>\r\n                                    <option value=\"AX\">Aland Islands</option>\r\n                                    <option value=\"AL\">Albania</option>\r\n                                    <option value=\"DZ\">Algeria</option>\r\n                                    <option value=\"AS\">American Samoa</option>\r\n                                    <option value=\"AD\">Andorra</option>\r\n                                    <option value=\"AO\">Angola</option>\r\n                                    <option value=\"AI\">Anguilla</option>\r\n                                    <option value=\"AQ\">Antarctica</option>\r\n                                    <option value=\"AG\">Antigua And Barbuda</option>\r\n                                    <option value=\"AR\">Argentina</option>\r\n                                    <option value=\"AM\">Armenia</option>\r\n                                    <option value=\"AW\">Aruba</option>\r\n                                    <option value=\"AU\">Australia</option>\r\n                                    <option value=\"AT\">Austria</option>\r\n                                    <option value=\"AZ\">Azerbaijan</option>\r\n                                    <option value=\"BS\">Bahamas</option>\r\n                                    <option value=\"BH\">Bahrain</option>\r\n                                    <option value=\"BD\">Bangladesh</option>\r\n                                    <option value=\"BB\">Barbados</option>\r\n                                    <option value=\"BY\">Belarus</option>\r\n                                    <option value=\"BE\">Belgium</option>\r\n                                    <option value=\"BZ\">Belize</option>\r\n                                    <option value=\"BJ\">Benin</option>\r\n                                    <option value=\"BM\">Bermuda</option>\r\n                                    <option value=\"BT\">Bhutan</option>\r\n                                    <option value=\"BO\">Bolivia</option>\r\n                                    <option value=\"BA\">Bosnia And Herzegovina</option>\r\n                                    <option value=\"BW\">Botswana</option>\r\n                                    <option value=\"BV\">Bouvet Island</option>\r\n                                    <option value=\"BR\">Brazil</option>\r\n                                    <option value=\"IO\">British Indian Ocean Territory</option>\r\n                                    <option value=\"VG\">British Virgin Islands</option>\r\n                                    <option value=\"BN\">Brunei Darussalam</option>\r\n                                    <option value=\"BG\">Bulgaria</option>\r\n                                    <option value=\"BF\">Burkina Faso</option>\r\n                                    <option value=\"BI\">Burundi</option>\r\n                                    <option value=\"KH\">Cambodia</option>\r\n                                    <option value=\"CM\">Cameroon</option>\r\n                                    <option value=\"CA\">Canada</option>\r\n                                    <option value=\"CV\">Cape Verde</option>\r\n                                    <option value=\"KY\">Cayman Islands</option>\r\n                                    <option value=\"CF\">Central African Republic</option>\r\n                                    <option value=\"TD\">Chad</option>\r\n                                    <option value=\"CL\">Chile</option>\r\n                                    <option value=\"CN\">China</option>\r\n                                    <option value=\"CX\">Christmas Island</option>\r\n                                    <option value=\"CC\">Cocos (Keeling) Islands</option>\r\n                                    <option value=\"CO\">Colombia</option>\r\n                                    <option value=\"KM\">Comoros</option>\r\n                                    <option value=\"CG\">Congo</option>\r\n                                    <option value=\"CD\">Congo (Democratic Republic)</option>\r\n                                    <option value=\"CK\">Cook Islands</option>\r\n                                    <option value=\"CR\">Costa Rica</option>\r\n                                    <option value=\"CI\">Côte D'ivoire</option>\r\n                                    <option value=\"HR\">Croatia</option>\r\n                                    <option value=\"CW\">Curaçao</option>\r\n                                    <option value=\"CU\">Cuba</option>\r\n                                    <option value=\"CY\">Cyprus</option>\r\n                                    <option value=\"CZ\">Czech Republic</option>\r\n                                    <option value=\"DK\">Denmark</option>\r\n                                    <option value=\"DJ\">Djibouti</option>\r\n                                    <option value=\"DM\">Dominica</option>\r\n                                    <option value=\"DO\">Dominican Republic</option>\r\n                                    <option value=\"EC\">Ecuador</option>\r\n                                    <option value=\"EG\">Egypt</option>\r\n                                    <option value=\"SV\">El Salvador</option>\r\n                                    <option value=\"GQ\">Equatorial Guinea</option>\r\n                                    <option value=\"ER\">Eritrea</option>\r\n                                    <option value=\"EE\">Estonia</option>\r\n                                    <option value=\"ET\">Ethiopia</option>\r\n                                    <option value=\"FK\">Falkland Islands (Malvinas)</option>\r\n                                    <option value=\"FO\">Faroe Islands</option>\r\n                                    <option value=\"FJ\">Fiji</option>\r\n                                    <option value=\"FI\">Finland</option>\r\n                                    <option value=\"FR\">France</option>\r\n                                    <option value=\"GF\">French Guiana</option>\r\n                                    <option value=\"PF\">French Polynesia</option>\r\n                                    <option value=\"TF\">French Southern Territories</option>\r\n                                    <option value=\"GA\">Gabon</option>\r\n                                    <option value=\"GM\">Gambia</option>\r\n                                    <option value=\"GE\">Georgia</option>\r\n                                    <option value=\"DE\">Germany</option>\r\n                                    <option value=\"GH\">Ghana</option>\r\n                                    <option value=\"GI\">Gibraltar</option>\r\n                                    <option value=\"GR\">Greece</option>\r\n                                    <option value=\"GL\">Greenland</option>\r\n                                    <option value=\"GD\">Grenada</option>\r\n                                    <option value=\"GP\">Guadeloupe</option>\r\n                                    <option value=\"GU\">Guam</option>\r\n                                    <option value=\"GT\">Guatemala</option>\r\n                                    <option value=\"GG\">Guernsey</option>\r\n                                    <option value=\"GN\">Guinea</option>\r\n                                    <option value=\"GW\">Guinea-bissau</option>\r\n                                    <option value=\"GY\">Guyana</option>\r\n                                    <option value=\"HT\">Haiti</option>\r\n                                    <option value=\"HM\">Heard Island And Mcdonald Islands</option>\r\n                                    <option value=\"HN\">Honduras</option>\r\n                                    <option value=\"HK\">Hong Kong</option>\r\n                                    <option value=\"HU\">Hungary</option>\r\n                                    <option value=\"IS\">Iceland</option>\r\n                                    <option value=\"IN\" selected=\"\">India</option>\r\n                                    <option value=\"ID\">Indonesia</option>\r\n                                    <option value=\"IR\">Iran</option>\r\n                                    <option value=\"IQ\">Iraq</option>\r\n                                    <option value=\"IE\">Ireland</option>\r\n                                    <option value=\"IM\">Isle Of Man</option>\r\n                                    <option value=\"IL\">Israel</option>\r\n                                    <option value=\"IT\">Italy</option>\r\n                                    <option value=\"JM\">Jamaica</option>\r\n                                    <option value=\"JP\">Japan</option>\r\n                                    <option value=\"JE\">Jersey</option>\r\n                                    <option value=\"JO\">Jordan</option>\r\n                                    <option value=\"KZ\">Kazakhstan</option>\r\n                                    <option value=\"KE\">Kenya</option>\r\n                                    <option value=\"KI\">Kiribati</option>\r\n                                    <option value=\"KP\">Korea (Democratic People's Republic)</option>\r\n                                    <option value=\"KR\">Korea (Republic)</option>\r\n                                    <option value=\"KW\">Kuwait</option>\r\n                                    <option value=\"KG\">Kyrgyzstan</option>\r\n                                    <option value=\"LA\">Lao (People's Democratic Republic)</option>\r\n                                    <option value=\"LV\">Latvia</option>\r\n                                    <option value=\"LB\">Lebanon</option>\r\n                                    <option value=\"LS\">Lesotho</option>\r\n                                    <option value=\"LR\">Liberia</option>\r\n                                    <option value=\"LY\">Libya</option>\r\n                                    <option value=\"LI\">Liechtenstein</option>\r\n                                    <option value=\"LT\">Lithuania</option>\r\n                                    <option value=\"LU\">Luxembourg</option>\r\n                                    <option value=\"MO\">Macao</option>\r\n                                    <option value=\"MK\">Macedonia</option>\r\n                                    <option value=\"MG\">Madagascar</option>\r\n                                    <option value=\"MW\">Malawi</option>\r\n                                    <option value=\"MY\">Malaysia</option>\r\n                                    <option value=\"MV\">Maldives</option>\r\n                                    <option value=\"ML\">Mali</option>\r\n                                    <option value=\"MT\">Malta</option>\r\n                                    <option value=\"MH\">Marshall Islands</option>\r\n                                    <option value=\"MQ\">Martinique</option>\r\n                                    <option value=\"MR\">Mauritania</option>\r\n                                    <option value=\"MU\">Mauritius</option>\r\n                                    <option value=\"YT\">Mayotte</option>\r\n                                    <option value=\"MX\">Mexico</option>\r\n                                    <option value=\"FM\">Micronesia</option>\r\n                                    <option value=\"MD\">Moldova</option>\r\n                                    <option value=\"MC\">Monaco</option>\r\n                                    <option value=\"MN\">Mongolia</option>\r\n                                    <option value=\"ME\">Montenegro</option>\r\n                                    <option value=\"MS\">Montserrat</option>\r\n                                    <option value=\"MA\">Morocco</option>\r\n                                    <option value=\"MZ\">Mozambique</option>\r\n                                    <option value=\"MM\">Myanmar</option>\r\n                                    <option value=\"NA\">Namibia</option>\r\n                                    <option value=\"NR\">Nauru</option>\r\n                                    <option value=\"NP\">Nepal</option>\r\n                                    <option value=\"NL\">Netherlands</option>\r\n                                    <option value=\"NC\">New Caledonia</option>\r\n                                    <option value=\"NZ\">New Zealand</option>\r\n                                    <option value=\"NI\">Nicaragua</option>\r\n                                    <option value=\"NE\">Niger</option>\r\n                                    <option value=\"NG\">Nigeria</option>\r\n                                    <option value=\"NU\">Niue</option>\r\n                                    <option value=\"NF\">Norfolk Island</option>\r\n                                    <option value=\"MP\">Northern Mariana Islands</option>\r\n                                    <option value=\"NO\">Norway</option>\r\n                                    <option value=\"OM\">Oman</option>\r\n                                    <option value=\"PK\">Pakistan</option>\r\n                                    <option value=\"PW\">Palau</option>\r\n                                    <option value=\"PS\">Palestinian Territory (Occupied)</option>\r\n                                    <option value=\"PA\">Panama</option>\r\n                                    <option value=\"PG\">Papua New Guinea</option>\r\n                                    <option value=\"PY\">Paraguay</option>\r\n                                    <option value=\"PE\">Peru</option>\r\n                                    <option value=\"PH\">Philippines</option>\r\n                                    <option value=\"PN\">Pitcairn</option>\r\n                                    <option value=\"PL\">Poland</option>\r\n                                    <option value=\"PT\">Portugal</option>\r\n                                    <option value=\"PR\">Puerto Rico</option>\r\n                                    <option value=\"QA\">Qatar</option>\r\n                                    <option value=\"RE\">Reunion</option>\r\n                                    <option value=\"RO\">Romania</option>\r\n                                    <option value=\"RU\">Russian Federation</option>\r\n                                    <option value=\"RW\">Rwanda</option>\r\n                                    <option value=\"BL\">Saint Barthélemy</option>\r\n                                    <option value=\"SH\">Saint Helena</option>\r\n                                    <option value=\"KN\">Saint Kitts And Nevis</option>\r\n                                    <option value=\"LC\">Saint Lucia</option>\r\n                                    <option value=\"MF\">Saint Martin (French Part)</option>\r\n                                    <option value=\"PM\">Saint Pierre And Miquelon</option>\r\n                                    <option value=\"VC\">Saint Vincent And The Grenadines</option>\r\n                                    <option value=\"WS\">Samoa</option>\r\n                                    <option value=\"SM\">San Marino</option>\r\n                                    <option value=\"ST\">Sao Tome And Principe</option>\r\n                                    <option value=\"SA\">Saudi Arabia</option>\r\n                                    <option value=\"SN\">Senegal</option>\r\n                                    <option value=\"RS\">Serbia</option>\r\n                                    <option value=\"SC\">Seychelles</option>\r\n                                    <option value=\"SL\">Sierra Leone</option>\r\n                                    <option value=\"SG\">Singapore</option>\r\n                                    <option value=\"BQ\">Sint Eustatius And Saba Bonaire</option>\r\n                                    <option value=\"SX\">Sint Maarten (Dutch Part)</option>\r\n                                    <option value=\"SK\">Slovakia</option>\r\n                                    <option value=\"SI\">Slovenia</option>\r\n                                    <option value=\"SB\">Solomon Islands</option>\r\n                                    <option value=\"SO\">Somalia</option>\r\n                                    <option value=\"ZA\">South Africa</option>\r\n                                    <option value=\"GS\">South Georgia And The South Sandwich Islands</option>\r\n                                    <option value=\"SS\">South Sudan</option>\r\n                                    <option value=\"ES\">Spain</option>\r\n                                    <option value=\"LK\">Sri Lanka</option>\r\n                                    <option value=\"SD\">Sudan</option>\r\n                                    <option value=\"SR\">Suriname</option>\r\n                                    <option value=\"SJ\">Svalbard And Jan Mayen</option>\r\n                                    <option value=\"SZ\">Swaziland</option>\r\n                                    <option value=\"SE\">Sweden</option>\r\n                                    <option value=\"CH\">Switzerland</option>\r\n                                    <option value=\"SY\">Syrian Arab Republic</option>\r\n                                    <option value=\"TW\">Taiwan</option>\r\n                                    <option value=\"TJ\">Tajikistan</option>\r\n                                    <option value=\"TZ\">Tanzania</option>\r\n                                    <option value=\"TH\">Thailand</option>\r\n                                    <option value=\"TL\">Timor-leste</option>\r\n                                    <option value=\"TG\">Togo</option>\r\n                                    <option value=\"TK\">Tokelau</option>\r\n                                    <option value=\"TO\">Tonga</option>\r\n                                    <option value=\"TT\">Trinidad And Tobago</option>\r\n                                    <option value=\"TN\">Tunisia</option>\r\n                                    <option value=\"TR\">Turkey</option>\r\n                                    <option value=\"TM\">Turkmenistan</option>\r\n                                    <option value=\"TC\">Turks And Caicos Islands</option>\r\n                                    <option value=\"TV\">Tuvalu</option>\r\n                                    <option value=\"UG\">Uganda</option>\r\n                                    <option value=\"UA\">Ukraine</option>\r\n                                    <option value=\"AE\">United Arab Emirates</option>\r\n                                    <option value=\"GB\">United Kingdom</option>\r\n                                    <option value=\"US\">United States</option>\r\n                                    <option value=\"UM\">United States Minor Outlying Islands</option>\r\n                                    <option value=\"UY\">Uruguay</option>\r\n                                    <option value=\"UZ\">Uzbekistan</option>\r\n                                    <option value=\"VU\">Vanuatu</option>\r\n                                    <option value=\"VA\">Vatican City</option>\r\n                                    <option value=\"VE\">Venezuela</option>\r\n                                    <option value=\"VN\">Viet Nam</option>\r\n                                    <option value=\"VI\">U.S. Virgin Islands</option>\r\n                                    <option value=\"WF\">Wallis And Futuna</option>\r\n                                    <option value=\"EH\">Western Sahara</option>\r\n                                    <option value=\"YE\">Yemen</option>\r\n                                    <option value=\"ZM\">Zambia</option>\r\n                                    <option value=\"ZW\">Zimbabwe</option>\r\n                                </select>\r\n                            </div>\r\n                            <div *ngIf=\"billingAddressForm.controls.inputCountry.touched && !billingAddressForm.controls.inputCountry.valid\" class=\"alert alert-danger\">\r\n                                <p *ngIf=\"billingAddressForm.controls.inputCountry.errors.required\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Country is required.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingAddress.zip\">\r\n                                <label class=\"control-label\" for=\"inputZipCode\">Zip Code</label>\r\n                                <input class=\"form-control\" id=\"inputZipCode\" type=\"text\"  name=\"inputZipCode\" formControlName=\"inputZipCode\" [(ngModel)]=\"BillingAddress.zip\">\r\n                            </div>\r\n                            <div *ngIf=\"billingAddressForm.controls.inputZipCode.touched && !billingAddressForm.controls.inputZipCode.valid\" class=\"alert alert-danger\">\r\n                                <p *ngIf=\"billingAddressForm.controls.inputZipCode.errors.required\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Zip code is required.\r\n                                </p>\r\n                                <p *ngIf=\"billingAddressForm.controls.inputZipCode.errors.minlength\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Minimum 6 digits.\r\n                                </p><br>\r\n                                <p *ngIf=\"billingAddressForm.controls.inputZipCode.errors.pattern\">\r\n                                    <span class=\"mat-icon\">\r\n                                        <i class=\"material-icons\">report_problem</i>\r\n                                    </span>\r\n                                    Zip code should valid.\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"col-md-12 np\" *ngIf=\"userRole == 'ADMIN'\">\r\n                                <button type=\"submit\" class=\"btn btn-red-outline btn-add-user btn-hover pull-left\" id=\"btnBilling\" [disabled]=\"!billingAddressForm.valid\">Save</button>\r\n                            </div>\r\n                        </form>\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"userRole == 'ADMIN'\">\r\n                    <!--<button class=\"btn btn-red-outline btn-hover btn-edit-billDetail\" data-toggle=\"modal\" data-target=\"#billing-detail\" type=\"\" (click)=\"callGA('EDITBILLING')\">Edit</button>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- End: billing details -->\r\n\r\n    <!-- Start: payment-method -->\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np payment-method\" *ngIf=\"!loadingPayDet\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np payment-details-header\">\r\n                <div class=\"col-md-8 col-sm-8 col-xs-12 np\" *ngIf=\"userRole == 'ADMIN'\">\r\n                    <h6 class=\"\">Payment Method</h6>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Start: membership-error-msg -->\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"CardDetail.status == 'expiring'\">\r\n                <div class=\"membership-error-msg\">\r\n                    <span class=\"mat-icon\">\r\n                        <i class=\"material-icons\">report_problem</i>\r\n                    </span>\r\n                    <span>Your card will expire by end of this month. For uninterrupted services, please update your card details before your next billing.</span>\r\n                </div>\r\n            </div>\r\n            <!-- End: membership-error-msg -->\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np payment-method-sec\" *ngIf=\"BillingDetails.card_status != 'no_card'\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Card Type</th>\r\n                                <th>Account Linked to</th>\r\n                                <th>Expiry</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>\r\n                                    <span class=\"span-input col-md-10 np ellipsis\">{{CardDetail.card_type}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"span-input col-md-10 col-sm-10 col-xs-12 np ellipsis\">{{CardDetail.masked_number}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class=\"span-input\" *ngIf=\"CardDetail.status != 'expired'\">\r\n                                        {{CardDetail.expiry_month}} - {{CardDetail.expiry_year}}\r\n                                    </span>\r\n                                    <div class=\"col-md-7 col-sm-7 col-xs-7 np\" *ngIf=\"CardDetail.status == 'expired'\">\r\n                                        <span class=\"badge-red\">expired</span>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"userRole == 'ADMIN'\">\r\n            <a href=\"javascript:void(0);\" id=\"set-payment\"  class=\"btn btn-red-outline btn-hover\" data-toggle=\"modal\" data-target=\"#cc-modal\" (click)=\"callGA('PAYMENTCLICK')\">\r\n                <span *ngIf=\"BillingDetails.card_status == 'no_card'\">Setup Payment</span>\r\n                <span *ngIf=\"BillingDetails.card_status != 'no_card'\">Reset Payment</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- End: payment-method -->\r\n</div>\r\n<div class=\"col-md-1 col-sm-12 col-xs-12\"></div>\r\n<div class=\"float-changes-updated hide\" id=\"BillingAddressFloat\">\r\n    <div class=\"col-md-12 np\">\r\n        <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n        <span id=\"BillingAddressMessage\"></span>\r\n    </div>\r\n</div>\r\n<!-- End: Modal setup-payment -->"

/***/ },

/***/ 1102:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-top-wrapper\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-details\">\r\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-details-header\">\r\n\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-6 np\">\r\n\t\t\t\t<h6 class=\"\">Subscription</h6>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-6 np membership-top-wrapper-sec1-right\">\r\n\t\t\t\t<ul class=\"\">\r\n\t\t\t\t\t<!-- <li>\r\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"\">\r\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">help</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t&nbsp;Billing FAQs\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li> -->\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"intercom_trigger\" (click)=\"contactUs()\">\r\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">chat_bubble</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t&nbsp;Contact Us\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"loadingMemDet\"><i class=\"material-icons loader-plan\">autorenew</i></div>\r\n\t\t\t\t<div class=\"membership-success-msg\" *ngIf = \"!loadingMemDet\">\r\n\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t<i class=\"material-icons\">watch_later</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'in_trial' && !futurePlanSubscription\">\r\n\t\t\t\t\tYour Trial ends on {{runningPlanSubscription.trial_end}}\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'active' && !futurePlanSubscription\">\r\n\t\t\t\t\tYour Next billing is on {{runningPlanSubscription.current_term_end}}\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"futurePlanSubscription\">\r\n\t\t\t\t\tYour Next Subscription {{futurePlanDetail.name}} will be activated on <span *ngIf=\"runningPlanSubscription.status == 'in_trial'\">{{runningPlanSubscription.trial_end}}.</span><span *ngIf=\"runningPlanSubscription.status == 'active'\">{{runningPlanSubscription.current_term_end}}.</span>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'future'\">\r\n\t\t\t\t\tYour Plan billing will start on {{runningPlanSubscription.start_date}}\r\n\t\t\t\t</span>\r\n\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'cancelled'\">\r\n\t\t\t\t\tYour Plan has cancelled. \r\n\t\t\t\t<span *ngIf=\"userRole == 'ADMIN'\" > Please choose any plan or\r\n\t\t\t\t&nbsp;\r\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"reactivate\" (click)=\"showEstimateModal(runningPlanDetail)\">\r\n\t\t\t\t\tReactivate\r\n            \t</a>\r\n\t\t\t\t</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-details-sec\" *ngIf = \"!loadingMemDet\">\r\n\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Current Plan</th>\r\n\t\t\t\t\t\t\t<th>Plan Price</th>\r\n\t\t\t\t\t\t\t<th *ngIf=\"runningPlanSubscription.status == 'active' && runningPlanSubscription.plan_id != 'starter'\">Bill Period</th>\r\n\t\t\t\t\t\t\t<th *ngIf=\"runningPlanSubscription.status == 'in_trial' && !futurePlanSubscription\">Starts On</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span class=\"span-input col-md-10 np ellipsis\" style=\"text-transform:capitalize;\" title=\"{{runningPlanDetail.name}}\">\r\n\t\t\t\t\t\t\t\t\t{{runningPlanDetail.name}} <span *ngIf=\"runningPlanSubscription.status == 'in_trial' && !futurePlanSubscription\">(Trial)</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<span class=\"span-input col-md-10 col-sm-10 col-xs-12 np\">\r\n\t\t\t\t\t\t\t\t\t$ {{runningPlanDetail.price}}&nbsp;/&nbsp;<span *ngIf=\"runningPlanDetail.period != 1\">{{runningPlanDetail.period}}</span>&nbsp;{{runningPlanDetail.period_unit}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class=\"bill-period-value\" *ngIf=\"runningPlanSubscription.status == 'active' && runningPlanSubscription.plan_id != 'starter'\">\r\n\t\t\t\t\t\t\t\t<span class=\"span-input col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t\t\t {{runningPlanSubscription.current_term_start}}&nbsp;-&nbsp;{{runningPlanSubscription.current_term_end}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"runningPlanSubscription.status == 'in_trial' && !futurePlanSubscription\">\r\n\t\t\t\t\t\t\t\t<span class=\"span-input col-md-10 np ellipsis\" title=\"{{runningPlanSubscription.trial_end}}\">\r\n\t\t\t\t\t\t\t\t\t{{runningPlanSubscription.trial_end}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<a *ngIf=\"is_admin_created && payment_status == 'no_card'\" href=\"javascript:void(0);\" id=\"set-payment\"  class=\"btn btn-red-outline btn-hover\" data-toggle=\"modal\" data-target=\"#cc-modal\" (click)=\"callGA('PAYMENTCLICK')\">\r\n\t\t\t\tSetup Payment\r\n            </a>\r\n\t\t</div>\r\n\t\t<br/>\r\n\t\t<span *ngIf=\"!is_admin_created\">\r\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"userRole == 'ADMIN'\">\r\n\t\t\t\t<!-- <button type=\"submit\" class=\"btn btn-red-outline btn-hover\" id=\"cancelMembership\" (click)=\"showEstimateModal(viewplansList[0]);callGA('CANCELMEM')\">\r\n\t\t\t\t\tcancel membership\r\n\t\t\t\t</button> -->\r\n\t\t\t\t<a (click)=\"callGA('SELECTPLAN')\" href=\"settings/membership#plans\" class=\"btn btn-red-outline btn-hover\">\r\n\t\t\t\t\tSelect a plan and setup payments to continue using Outgrow.\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-bottom-wrapper\">\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t<h4>Choose a plan that's right for your business</h4>\r\n\t\t\t\t\t<p>All our plans are carefully laid out to suit varied needs and functions. Our pricing is very flexible, so you only pay for the features you need. All plans come with free customer support and hassle free payment options.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 col-md-offset-3 np billing-plan-list\" id=\"plans\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li [class.active]=\"viewPlan == 'm'\" id=\"monthly\" (click)=\"getViewPlans('m')\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\r\n\t\t\t\t\t\t\t\tMonthly\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li id=\"half-yearly\"  (click)=\"getViewPlans('s')\" [class.active]=\"viewPlan == 's'\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\r\n\t\t\t\t\t\t\t\tSemi-annual\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li id=\"annually\" (click)=\"getViewPlans('y')\" [class.active]=\"viewPlan == 'y'\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\r\n\t\t\t\t\t\t\t\tAnnual\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np billing-table\">\r\n\t\t\t\t\t<!-- <center><img src=\"assets/images/logoAnim.gif\" alt=\"loading...\" id=\"imgLoad\" *ngIf = \"loadingPlans\"></center> -->\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"loadingPlans\"><i class=\"material-icons loader-plan\">autorenew</i></div>\r\n\t\t\t\t\t<span *ngFor=\"let plan of viewplansList\">\r\n\t\t\t\t\t\t<span *ngIf=\"plan.id != 'starter'\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 np\" [class.billing-grey] = \"plan.id != runningPlanDetail.id\" [class.starter-box] = \"plan.id == 'essentials_m' || plan.id == 'essentials_s' || plan.id == 'essentials_y'\" [class.billing-white]=\"runningPlanDetail.id == plan.id\" [class.business-box]=\"plan.id == 'business_m' || plan.id == 'business_s' || plan.id == 'business_y'\" [class.enterprise-box]=\"plan.id == 'enterprise_m' || plan.id == 'enterprise_s' || plan.id == 'enterprise_y'\" [class.selected-plan]=\"runningPlanDetail.id == plan.id\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\" [class.billing-white-top]=\"runningPlanDetail.id == plan.id\" [class.business-box-xshadow]=\"plan.id == 'business_m' || plan.id == 'business_s' || plan.id == 'business_y'\" [class.billing-grey-top]=\"runningPlanDetail.id != plan.id\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"ribbon\" *ngIf=\"plan.id == 'business_m' || plan.id == 'business_s' || plan.id == 'business_y'\">Most Popular</span>\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"plan-title\">{{plan.name.split(' ')[0]}}</h3>\r\n\t\t\t\t\t\t\t\t\t<h4 class=\"plan-title-cycle\">{{plan.name.split(' ')[1]}}</h4>\r\n\t\t\t\t\t\t\t\t\t<span class=\"border-center\"></span>\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"plan-price\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id != 'starter'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"contact-pricing\" *ngIf=\"plan.id.split('_')[0] == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t*Contact us for pricing\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id.split('_')[0] != 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let pL of planFeatures\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let cycle of pL.cycles\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.plan == plan.id.split('_')[0] && cycle.coupon_cycle == plan.id.split('_')[1]\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!cycle.coupon_active\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\" *ngIf=\"plan.id.split('_')[1] != 'm'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} <span *ngIf=\"plan.id.split('_')[0] == 'essentials'\">{{essentials_m}}</span><span *ngIf=\"plan.id.split('_')[0] == 'business'\">{{business_m}}</span><span *ngIf=\"plan.id.split('_')[0] == 'enterprise'\">{{enterprise_m}}</span>/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 'm'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{plan.price}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 's'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil(plan.price/6)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 'y'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil(plan.price/12)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_active\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\" *ngIf=\"plan.id.split('_')[1] != 'm'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} <span *ngIf=\"plan.id.split('_')[0] == 'essentials'\">{{essentials_m}}</span><span *ngIf=\"plan.id.split('_')[0] == 'business'\">{{business_m}}</span><span *ngIf=\"plan.id.split('_')[0] == 'enterprise'\">{{enterprise_m}}</span>/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 'm'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{plan.price}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'PERCENTAGE'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{plan.price-(plan.price * cycle.coupon_value/100)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'FLAT'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{plan.price - cycle.coupon_value}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 's'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil(plan.price/6)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'PERCENTAGE'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil((plan.price-(plan.price * cycle.coupon_value/100))/6)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'FLAT'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil((plan.price - cycle.coupon_value)/6)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 'y'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil(plan.price/12)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'PERCENTAGE'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil((plan.price-(plan.price * cycle.coupon_value/100))/12)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'FLAT'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil((plan.price - cycle.coupon_value)/12)}}/Month\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"cycle.coupon_active\" class=\"apply-coupon\">Use Coupon code : {{cycle.coupon_name}}</small>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id == 'starter'\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{plan.price}}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t\t<p>{{plan.description}}</p>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"runningPlanDetail.id != plan.id && userRole == 'ADMIN'\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id.split('_')[0] != 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-white-red-outline btn-upgrade  hvr-sweep-to-right\" *ngIf=\"runningPlan == plan.id.split('_')[0]\" (click)=\"showEstimateModal(plan);callGA('CHANGECYCLE')\">Change Cycle</button>\r\n\r\n\t\t\t                                <button type=\"\" class=\"btn btn-white-red-outline btn-upgrade  btn-hover\" *ngIf=\"(plan.id != 'starter' && plan.id != 'freemium') && runningPlan != plan.id.split('_')[0]\" (click)=\"showEstimateModal(plan);callGA('CHANGEPLAN')\">Change Plan</button>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-white-red-outline btn-upgrade  btn-hover\" *ngIf=\"!futurePlanSubscription && (plan.id == 'starter' || plan.id == 'freemium')\" (click)=\"showEstimateModal(plan);callGA('CHANGEPLAN')\">Change Plan</button>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id.split('_')[0] == 'enterprise'\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-white-red-outline btn-upgrade btn-hover intercom_trigger\" (click)=\"contactUs()\">Contact Us</button>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t                                <span type=\"\" *ngIf=\"futurePlanSubscription && plan.id == 'starter'\" class=\"plan-act\">\r\n\t\t                                    Plan activates on <span *ngIf=\"runningPlanSubscription.status == 'in_trial'\">{{runningPlanSubscription.trial_end}}.</span><span *ngIf=\"runningPlanSubscription.status == 'active'\">{{runningPlanSubscription.current_term_end}}.</span>\r\n\t\t                                </span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"runningPlanDetail.id == plan.id && userRole == 'ADMIN'\">\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-light-grey-outline btn-light-grey-hover\" *ngIf=\"payment_status != 'no_card' && runningPlanSubscription.status != 'cancelled'\">Your Current Plan</button>\r\n\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-light-grey-outline btn-light-grey-hover reactivate\" *ngIf=\"runningPlanSubscription.status == 'cancelled'\" (click)=\"showEstimateModal(plan)\">Reactivate</button>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-light-grey-outline btn-light-grey-hover\" *ngIf=\"payment_status == 'no_card' && runningPlanSubscription.status != 'cancelled'\" data-toggle=\"modal\" data-target=\"#cc-modal\" (click)=\"callGA('PAYMENTCLICK')\">Setup Payments</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-12 col-sm-12 col-xs-12 np float-down-arrow-mobile\" (click)=\"firstDownArrowClick()\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np billing-grey-bottom rs-hide\" [class.billing-white-bottom]=\"runningPlanDetail.id == plan.id\"  [class.billing-grey-bottom]=\"runningPlanDetail.id != plan.id\" id=\"{{plan.id}}\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"billing-list\">\r\n\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let pL of planFeatures\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id.split('_')[0] == pL.planLimit.id\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-name\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span *ngIf=\"pL.planLimit.users == -1\">Unlimited</span><span *ngIf=\"pL.planLimit.users != -1\">{{numberFormat(pL.planLimit.users)}}</span>&nbsp;Users\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-name\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span *ngIf=\"pL.planLimit.leads == -1\">Unlimited</span><span *ngIf=\"pL.planLimit.leads != -1\">{{numberFormat(pL.planLimit.leads)}}</span>&nbsp;Leads\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-name\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span *ngIf=\"pL.planLimit.visits == -1\">Unlimited</span><span *ngIf=\"pL.planLimit.visits != -1\">{{numberFormat(pL.planLimit.visits)}}</span>&nbsp;Visits\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let f of pL.features\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [class.unselected]=\"!f.active\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-name\">&nbsp;{{f.feature.name}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t                        <a href=\"javascript:void(0);\" (click)=\"expand(plan.id)\" [class.toggle-dots-white]=\"runningPlanDetail.id != plan.id\" [class.toggle-dots-grey]=\"runningPlanDetail.id == plan.id\">\r\n\t\t                            <!--<span></span>\r\n\t\t                            <span></span>\r\n\t\t                            <span></span>-->\r\n\t\t\t\t\t\t\t\t\t<div><i class=\"material-icons\">keyboard_arrow_down</i> <p class=\"more-info\">More Info</p></div>\r\n\t\t                        </a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t<span class=\"billing-plans-help\">*All plans come with unlimited calculators and templates</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-xs-12 billingpricing-text hide\">\r\n\t\t\t\t\t<i class=\"material-icons\">not_interested</i>\r\n\t\t\t\t\t<h4>Not ready to start a paid plan? </h4>\r\n\t\t\t\t\t<p>Switch to\r\n\t\t\t\t\t\t<a *ngIf=\"userRole == 'ADMIN'\" (click)=\"showEstimateModal(viewplansList[0])\">{{FreePlanName}}</a>\r\n\t\t\t\t\t\t<a *ngIf=\"userRole != 'ADMIN'\" href=\"javascript:void(0);\">{{FreePlanName}}</a>\r\n\t\t\t\t\t\tplan for free and explore core Outgrow features, no credit card required. Your published pages will include an Outgrow branded footer which can be removed by upgrading to any paid plan.</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\" *ngIf=\"userRole == 'ADMIN' && !futurePlanSubscription\">\r\n\t\t\t\t\t<!--<a id=\"cancelMembership\" (click)=\"showEstimateModal(viewplansList[0],true);callGA('CANCELMEM')\" class=\"cancel-member\">-->\r\n\t\t\t\t\t<a id=\"cancelMembership\" href=\"javascript:void(0);\" (click)=\"cancelMembeship();callGA('CANCELMEM')\" class=\"cancel-member\">\r\n\t\t\t\t\t<span>cancel membership</span></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</span>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Start: Upgrade Plan Modal -->\r\n<div id=\"upgrade-plan-popup\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content modal-bg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<h5 class=\"modal-title\">Plan Change summary</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body col-md-12 np\">\r\n\t\t\t\t<img src=\"assets/images/logoAnim.gif\" alt=\"loading...\" id=\"imgLoad\" *ngIf = \"loading\">\r\n\t\t\t\t<div class=\"sahil-material\" id=\"estimate\" *ngIf = \"!loading\">\r\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert\" id=\"error-UpgradePlan\" *ngIf=\"error\">{{errorMessage}}</div>\r\n\t\t\t\t\t<div class=\"col-md-12 np\">\r\n                        <!-- Start: subscription changes -->\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                            <div class=\"subscription-changes-panel\">\r\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                    <h6 class=\"title\">Subscription changes</h6>\r\n                                    <span class=\"sub-title\" *ngIf=\"upgradeToPlan.id != 'starter'\">\r\n                                    \tSubscription status will be changed from {{runningPlanDetail.name}} to {{upgradeToPlan.name}} immediately.\r\n                                    </span>\r\n                                    <span class=\"sub-title\" *ngIf=\"upgradeToPlan.id == 'starter'\">\r\n                                    \tSubscription status will be changed from {{runningPlanDetail.name}} to {{upgradeToPlan.name}} on <span *ngIf=\"runningPlanSubscription.status == 'in_trial'\">{{runningPlanSubscription.trial_end}}.</span><span *ngIf=\"runningPlanSubscription.status == 'active'\">{{runningPlanSubscription.current_term_end}}.</span>.\r\n                                    </span>\r\n                                </div>\r\n                                <div class=\"subs-detail\">\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                        <div class=\"col-md-4 col-sm-4 col-xs-12 np\">\r\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-label\">New Plan &nbsp;:&nbsp;</span>\r\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-filled\">{{upgradeToPlan.name}}</span>\r\n                                        </div>\r\n                                        <div class=\"col-md-8 col-sm-4 col-xs-12 np\" *ngIf=\"upgradeToPlan.id != 'starter'\">\r\n                                            <span class=\"col-md-3 col-sm-6 col-xs-6 np subs-label\">New Billing Period &nbsp;:&nbsp;</span>\r\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-filled\">\r\n                                            \t<span *ngIf=\"estimation.next_invoice_estimate\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{estimation.next_invoice_estimate.line_items[0].date_from}}  to {{estimation.next_invoice_estimate.line_items[0].date_to}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"estimation.invoice_estimate\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{estimation.invoice_estimate.line_items[0].date_from}} to {{estimation.invoice_estimate.line_items[0].date_to}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                        <div class=\"col-md-4 col-sm-4 col-xs-12 np\">\r\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-label\">New Price &nbsp;:&nbsp;</span>\r\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-filled\">$ {{upgradeToPlan.price}}</span>\r\n                                        </div>\r\n                                        <div class=\"col-md-4 col-sm-4 col-xs-12 np\" *ngIf=\"upgradeToPlan.id != 'starter' || upgradeBillingCycle != ''\">\r\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-label\">Billing Cycle &nbsp;:&nbsp;</span>\r\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-filled\">{{upgradeBillingCycle}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- End: subscription changes-->\r\n\r\n\t\t\t\t\t\t<div id=\"coupon\" class=\"col-md-12 col-sm-12 col-xs-12 np check\" *ngIf=\"upgradeToPlan.id != 'starter'\">\r\n\t\t\t\t\t\t\t<form id=\"couponForm\" [formGroup]=\"couponForm\" (ngSubmit)=\"getUpgradeEstimate(upgradeToPlan)\" *ngIf=\"couponCode == ''\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 np\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group input-group label-floating\" id=\"couponFormDiv\" [class.is-empty]=\"!couponForm.value.couponInput\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"couponInput\"> Enter coupon code here</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"couponCodeModal\" class=\"form-control\" id=\"couponInput\" type=\"text\" name=\"couponInput\" formControlName=\"couponInput\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class = \"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-red-outline btn-hover\" type=\"submit\" id=\"btnCoupon\" [disabled]=\"!couponForm.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tApply\r\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 np\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form><!--\r\n\t\t\t\t\t\t\t<span class=\"alert alert-success\" id=\"couponApplied\" *ngIf=\"couponCode != ''\">\r\n\t\t\t\t\t\t\t\t{{couponCode}} Applied\r\n\t\t\t\t\t\t\t\t<a class=\"icon-red\" (click)=\"getUpgradeEstimate(upgradeToPlan)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons icon-red\">highlight_off</i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t<div id=\"coupon-applied\" class=\"col-md-12 col-sm-12 col-xs-12 np coupon-applied\" *ngIf=\"couponCode != ''\">\r\n\t                            <span class=\"title\">Coupon applied</span>\r\n\t                            <button class=\"btn btn-red-outline\" type=\"submit\" id=\"\">\r\n\t                            \t{{couponCode}}\r\n\t                            \t<i class=\"material-icons\" (click)=\"getUpgradeEstimate(upgradeToPlan)\">cancel</i>\r\n\t                            </button>\r\n\t                        </div>\r\n\t\t\t\t\t\t</div>\r\n                        <!-- Start: current-payment-details -->\r\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"upgradeToPlan.id != 'starter'\">\r\n                            <div class=\"current-payment-details-panel\">\r\n                                <h6 class=\"title-bg\"><i class=\"material-icons\">description</i> &nbsp;Current Payment Details</h6>\r\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 np current-payment-detail\">\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                        <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                            <span *ngIf=\"estimation.next_invoice_estimate\">\r\n                                                <span *ngIf=\"upgradeToPlan.price != estimation.next_invoice_estimate.line_items[0].unit_amount\">Prorated charges</span>\r\n                                                {{upgradeToPlan.name}}\r\n                                                ({{upgradeToPlan.currency_code}}\r\n                                                {{estimation.next_invoice_estimate.line_items[0].unit_amount}}\r\n                                            </span>\r\n                                            <span *ngIf=\"estimation.invoice_estimate\">\r\n                                                <span *ngIf=\"upgradeToPlan.price != estimation.invoice_estimate.line_items[0].unit_amount\">\r\n                                                Prorated charges</span>\r\n                                                {{upgradeToPlan.name}}\r\n                                                ({{upgradeToPlan.currency_code}}\r\n                                                {{estimation.invoice_estimate.line_items[0].unit_amount}}\r\n                                            </span>\r\n                                            / {{upgradeToPlan.period}} {{upgradeToPlan.period_unit}})\r\n                                        </span>\r\n                                        <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\r\n                                        <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                            {{upgradeToPlan.currency_code}}\r\n                                            <span *ngIf=\"estimation.next_invoice_estimate\">\r\n                                                {{estimation.next_invoice_estimate.line_items[0].unit_amount}}\r\n                                            </span>\r\n                                            <span *ngIf=\"estimation.invoice_estimate\">\r\n                                                {{estimation.invoice_estimate.line_items[0].unit_amount}}\r\n                                            </span>\r\n                                        </span>\r\n                                    </div>\r\n                                    <span *ngIf=\"estimation.next_invoice_estimate\">\r\n                                        <span *ngIf=\"estimation.next_invoice_estimate.line_items[0].discount_amount != 0\">\r\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                                <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                                    subtotal\r\n                                                </span>\r\n                                                <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\r\n                                                <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                                    {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.sub_total}}\r\n                                                </span>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n\t                                                {{estimation.next_invoice_estimate.discounts[0].description}}\r\n\t                                            </span>\r\n\t                                            <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np minus\">-</span>\r\n\t                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n\t                                                {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.discounts[0].amount}}\r\n\t                                            </span>\r\n\t                                        </div>\r\n                                        </span>\r\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                                Credit Applied\r\n                                            </span>\r\n                                            <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np minus\">-</span>\r\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                                {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.credits_applied}}\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                                Amount Due\r\n                                                <!-- &nbsp;&nbsp;:&nbsp;&nbsp; -->\r\n                                            </span>\r\n                                            <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\r\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                                {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.amount_due}}\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                                <span class=\"font_semibold\">Total Payment</span>\r\n                                            </span>\r\n                                            <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\r\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                                <span class=\"font_semibold\">                {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.total}}\r\n                                                </span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </span>\r\n                                    <span *ngIf=\"estimation.invoice_estimate\">\r\n                                        <span *ngIf=\"estimation.invoice_estimate.line_items[0].discount_amount != 0\">\r\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                                <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                                    subtotal\r\n                                                </span>\r\n                                                <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\r\n                                                <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                                    {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.sub_total}}\r\n                                                </span>\r\n                                            </div>\r\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n\t                                                {{estimation.invoice_estimate.discounts[0].description}}\r\n\t                                            </span>\r\n\t                                            <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np minus\">-</span>\r\n\t                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n\t                                                {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.discounts[0].amount}}\r\n\t                                            </span>\r\n\t                                        </div>\r\n                                        </span>\r\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                                Credit Applied\r\n                                            </span>\r\n                                            <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np minus\">-</span>\r\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                                {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.credits_applied}}\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                                Amount Due\r\n                                                <!-- &nbsp;&nbsp;:&nbsp;&nbsp; -->\r\n                                            </span>\r\n                                            <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\r\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                                {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.amount_due}}\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\r\n                                                <span class=\"font_semibold\">Total Payment</span>\r\n                                            </span>\r\n                                            <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\r\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\r\n                                                <span class=\"font_semibold\">                {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.total}}\r\n                                                </span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- End: current-payment-details -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer col-md-12 np\" *ngIf = \"!loading\">\r\n\t\t\t\t<div class=\"col-md-9 np\">\r\n\t\t\t\t\t<div class=\"footer-text\">\r\n\t\t\t\t\t\t<p *ngIf=\"upgradeToPlan.id == 'starter'\">\r\n\t\t\t\t\t\t\t* Plan will be automatically activated on\r\n\t\t\t\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'in_trial'\">\r\n\t\t\t\t\t\t\t\t{{runningPlanSubscription.trial_end}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'active'\">\r\n\t\t\t\t\t\t\t\t{{runningPlanSubscription.current_term_end}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<span *ngIf=\"estimation.credit_note_estimates.length && runningPlanSubscription.status != 'in_trial'\">\r\n\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\tA Paid invoice # {{estimation.credit_note_estimates[0].reference_invoice_id}} is present for the current billing cycle ({{estimation.credit_note_estimates[0].line_items[0].date_from}} - {{estimation.credit_note_estimates[0].line_items[0].date_to}}).\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p style=\"margin-bottom: 0px;\">\r\n\t\t\t\t\t\t\t\tProrated Refundable Credits ({{estimation.credit_note_estimates[0].currency_code}} {{estimation.credit_note_estimates[0].line_items[0].amount}}) will be created for the unused period of {{estimation.credit_note_estimates[0].line_items[0].date_from}} - {{estimation.credit_note_estimates[0].line_items[0].date_to}}\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"upgradeToPlan.price > runningPlanDetail.price\">\r\n\t\t\t\t\t\t\t\t\tand applied on the immediate invoice\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"upgradeToPlan.price < runningPlanDetail.price\">\r\n\t\t\t\t\t\t\t\t\t, out of which\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"estimation.invoice_estimate\">\r\n\t\t\t\t\t\t\t\t\t\t{{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.total}}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"estimation.next_invoice_estimate\">\r\n\t\t\t\t\t\t\t\t\t\t{{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.total}}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\twill be applied on the immediate invoice\r\n\t\t\t\t\t\t\t\t</span>.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-3 np\">\r\n\t\t\t\t\t<button type=\"\" (click)=\"makePayment();callGA('MAKEPAYMENT')\" class=\"btn btn-red-outline btn-hover btnMakePayment\" [class.btn-margin]=\"!estimation.credit_note_estimates.length\" *ngIf=\"isDowagrade\">Change Plan</button>\r\n\t\t\t\t\t<button type=\"\" (click)=\"makePayment();callGA('MAKEPAYMENT')\" class=\"btn btn-red-outline btn-hover btnMakePayment\" [class.btn-margin]=\"!estimation.credit_note_estimates.length\" *ngIf=\"!isDowagrade && runningPlanSubscription.status != 'cancelled'\">Make Payment</button>\r\n\t\t\t\t\t<button type=\"\" (click)=\"reActivate();callGA('MAKEPAYMENT')\" class=\"btn btn-red-outline btn-hover btnMakePayment\" [class.btn-margin]=\"!estimation.credit_note_estimates.length\" *ngIf=\"!isDowagrade && runningPlanSubscription.status == 'cancelled'\">Make Payment</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- End:Upgrde Plan Modal -->\r\n\r\n<div class=\"float-changes-updated hide\" id=\"changeSubscriptionFloat\">\r\n\t<div class=\"col-md-12 np\">\r\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n\t\t<span id=\"changeSubscriptionMessage\"></span>\r\n\t</div>\r\n</div>\r\n"

/***/ },

/***/ 1103:
/***/ function(module, exports) {

module.exports = "<!-- Start: noti-settings (3) -->\r\n<div class=\"tab-pane hide\" id=\"noti-settings\">\r\n\t<header id=\"userProfile-header\" class=\"\">\r\n        <nav class=\"navbar navbar-default navbar-fixed-top white-logo\">\r\n          <div class=\"container-fluid nav-padding\">\r\n              <div class=\"col-xs-2 np\">\r\n                  <a href=\"javascript:void(0);\">\r\n                      <span class=\"mat-icon\"><i class=\"material-icons\">arrow_back</i></span>\r\n                  </a>\r\n              </div>\r\n              <div class=\"navbar-header col-xs-8 np\">\r\n                  <!-- <a href=\"#\" class=\"navbar-brand\">\r\n                      <img src=\"assets/images/headerLogo-white.png\" class=\"\" />\r\n                  </a> -->\r\n                  <h4 class=\"col-xs-12 np ellipsis title\">Notification Settings</h4>\r\n              </div>\r\n              <div class=\"mobile-menu col-xs-2 np\">\r\n                  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      <i class=\"material-icons\">menu</i>\r\n                  </button>\r\n                  <ul class=\"dropdown-menu\">\r\n                      <div class=\"user-name user-outr\">\r\n                          <li>\r\n                              <a href=\"javascript:void(0);\"><img src=\"assets/images/user1.png\"> </a>\r\n                              <span>Pratham</span>\r\n                          </li>\r\n                          <hr class=\"name-dropdown-border\">\r\n                      </div>\r\n                      <div class=\"name-list\">\r\n                          <li>\r\n                              <a href=\"#\">\r\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">home</i></span>\r\n                                  <span class=\"name-list-title\">Dashboard</span>\r\n                              </a>\r\n                          </li>\r\n                          <li>\r\n                              <a href=\"#\">\r\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">equalizer</i></span>\r\n                                  <span class=\"name-list-title\">Analytics</span>\r\n                              </a>\r\n                          </li>\r\n                          <li>\r\n                              <a href=\"#\">\r\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">lightbulb_outline</i></span>\r\n                                  <span class=\"name-list-title\">How Do I</span>\r\n                              </a>\r\n                          </li>\r\n                          <hr class=\"name-dropdown-border\">\r\n                      </div>\r\n                      <div class=\"company-list\">\r\n                          <li class=\"active\">\r\n                              <a href=\"#\">\r\n                                  <span class=\"company-selected\"><i class=\"material-icons\">done</i></span>\r\n                                  <span class=\"company-list-title\">Venture Pact</span>\r\n                              </a>\r\n                          </li>\r\n                          <li>\r\n                              <a href=\"#\">\r\n                                  <span class=\"company-list-title\">Teckraft Infosolutions</span>\r\n                                  <!-- <span class=\"company-selected\"><i class=\"material-icons\">done</i></span> -->\r\n                              </a>\r\n                          </li>\r\n                          <li>\r\n                              <a href=\"#\">\r\n                                  <span class=\"company-list-title\">Zycus Infotech</span>\r\n                                  <!-- <span class=\"company-selected\"><i class=\"material-icons\">done</i></span> -->\r\n                              </a>\r\n                          </li>\r\n                      </div>\r\n                      <div class=\"name-list\">\r\n                          <li>\r\n                              <a href=\"#\">\r\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">settings</i></span>\r\n                                  <span class=\"name-list-title\">Settings</span>\r\n                              </a>\r\n                          </li>\r\n                          <li>\r\n                              <a href=\"#\">\r\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">power_settings_new</i></span>\r\n                                  <span class=\"name-list-title\">Logout</span>\r\n                              </a>\r\n                          </li>\r\n                      </div>\r\n                  </ul>\r\n              </div>\r\n          </div>\r\n        </nav>\r\n    </header>\r\n\t<div class=\"col-md-2 col-sm-2 col-xs-12\">\r\n\t</div>\r\n\t<div class=\"col-md-8 col-sm-8 col-xs-12 np\">\r\n\t\t4\r\n\t</div>\t\r\n\t<div class=\"col-md-2 col-sm-2 col-xs-12 np\">\r\n\t</div>\r\n</div>\r\n<!-- End: noti-settings (3) -->\r\n"

/***/ },

/***/ 1104:
/***/ function(module, exports) {

module.exports = "<sd-toolbar [page]=\"'settings'\"></sd-toolbar>\r\n<section class=\"wrapper\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t<og-sideNavbar *ngIf=\"sideNavbar == 'settings' \"></og-sideNavbar>\r\n\t\t<div class=\"wrapper-content\" id=\"lgScrWrapperContent\">\r\n\t\t\t<div class=\"wrapper-content-inner\">\r\n\t\t\t\t<div class=\"tab-content tabs-wrapper\">\r\n\t\t\t\t\t<!--<og-team-setting\r\n\t\t\t\t\t\t(myCompaniesListUpdated) = \"CompaniesList = $event\" [myCompanies] = \"CompaniesList\">\r\n\t\t\t\t\t</og-team-setting>-->\r\n\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t\t<!--<og-membership></og-membership>-->\r\n\t\t\t\t\t<!--<og-noti-setting class=\"hide\"></og-noti-setting>\r\n\t\t\t\t\t<og-account [myCompanies] = \"CompaniesList\" (myCompaniesListUpdated) = \"CompaniesList = $event\"></og-account>-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"wrapper-content\" id=\"smScrWrapperContent\">\r\n\t\t\t<div class=\"wrapper-content-inner\">\r\n\t\t\t\t<div class=\"tab-content tabs-wrapper\">\r\n\t\t\t\t\t<!--<og-team-setting\r\n\t\t\t\t\t\t(myCompaniesListUpdated) = \"CompaniesList = $event\" [myCompanies] = \"CompaniesList\">\r\n\t\t\t\t\t</og-team-setting>-->\r\n\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t\t<!--<og-membership></og-membership>-->\r\n\t\t\t\t\t<!--<og-noti-setting class=\"hide\"></og-noti-setting>\r\n\t\t\t\t\t<og-account [myCompanies] = \"CompaniesList\" (myCompaniesListUpdated) = \"CompaniesList = $event\"></og-account>-->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n"

/***/ },

/***/ 1105:
/***/ function(module, exports) {

module.exports = "<!-- Start: team-settings (1) -->\r\n<div class=\"tab-pane\" id=\"team-settings\">\r\n\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t<div class=\"col-md-2 col-sm-1 col-xs-2 np\"></div>\r\n\t\t<!-- Nav tabs -->\r\n        <div class=\"col-md-3 col-sm-3 col-xs-12 np team-settings-inner-tabs hide\">\r\n          \t<ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n              \t<li role=\"presentation\" class=\"active\">\r\n              \t\t<a href=\"#active-users\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Active Users <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n              \t</li>\r\n              \t<li role=\"presentation\">\r\n              \t\t<a href=\"#invited-users\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Invited Users <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n              \t</li>\r\n              \t<li role=\"presentation\" *ngIf=\"isAdmin\" class=\"hide\">\r\n                  \t<a href=\"#access-requests\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Access Requests <i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n              \t</li>\r\n  \t\t\t</ul>\r\n        </div>\r\n\t\t<!-- Start: tabs sub content -->\r\n\t\t<div class=\"col-md-8 col-sm-10 col-xs-12 np\">\r\n\t        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t<!-- Start: team-settings-wrapper -->\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 team-settings-wrapper hide\">\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t<h5 class=\"\">{{currentCompany.name}}</h5>\r\n\t\t\t\t\t\t<!-- <span class=\"company-dropdown-title-active ellipsis\">{{currentCompany.sub_domain}}{{subdomainExtension}}</span> -->\r\n\t\t\t\t\t\t<div class=\"btn-group company-dropdown-wrapper\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t            \t\t\t<span class=\"company-dropdown-title-active ellipsis\">{{currentCompany.sub_domain}}{{subdomainExtension}}</span>\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right add-new-company\" data-toggle=\"modal\" data-target=\"#add-new-company\" (click)=\"callGA('ADDCOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">playlist_add</i>\r\n\t\t\t\t\t\t\t\t\t\t&nbsp;Add New Company\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right add-new-company\" data-toggle=\"modal\" data-target=\"#join-company\" (click)=\"callGA('JOINCOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">playlist_add</i>\r\n\t\t\t\t\t\t\t\t\t\t&nbsp;Join Company\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<div class=\"company-dropdown-main\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"company-dropdown-list slimscroll\">\r\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let company of myCompaniesList\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"selectCompany(company)\" *ngIf=\"company.user_company.active\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"company-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-block-inner\">{{company.name[0]}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"company-block-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-title ellipsis\">{{company.name}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-site ellipsis\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{company.sub_domain}}{{subdomainExtension}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"waitForApprove()\" *ngIf=\"!company.user_company.active\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"company-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-block-inner\">{{company.name[0]}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"company-block-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-title ellipsis\">{{company.name}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-site ellipsis\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{company.sub_domain}}{{subdomainExtension}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-site ellipsis\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(Awaiting approval)\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a> -->\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\tYou are one of the Primary Owners of this company. You can transfer ownership. You can also manage your team settings.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\tDue to restrictions of your plan, you can only add upto 25 members in your team. <a href=\"javascript:void(0);\" class=\"upgrade-plan\" (click)=\"membDetails();callGA('UPGRADEPLAN')\">Upgrade your plan</a> to remove the restriction.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- End: team-settings-wrapper -->\r\n\t\t\t\t<!-- Start: Nav tabs -->\r\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t<ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n\t\t\t\t\t\t<li role=\"presentation\" class=\"active\" id=\"actuser\">\r\n\t\t\t\t\t\t\t<a href=\"#active-users\" class=\"hvr-sweep-to-right\" aria-controls=\"myProfile\" role=\"tab\" data-toggle=\"tab\">Active Users</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li role=\"presentation\" id=\"invuser\">\r\n\t\t\t\t\t\t\t<a href=\"#invited-users\" class=\"hvr-sweep-to-right\" aria-controls=\"companies\" role=\"tab\" data-toggle=\"tab\">Invited Users</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li role=\"presentation\" id=\"accreq\" *ngIf=\"isAdmin\" class=\"hide\">\r\n\t\t\t\t\t\t\t<a href=\"#access-requests\" class=\"hvr-sweep-to-right\" aria-controls=\"changePassword\" role=\"tab\" data-toggle=\"tab\">Access Requests</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- End: Nav tabs -->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf=\"loading\"><i class=\"material-icons loader-plan\">autorenew</i></div>\r\n\t\t\t<div class=\"tab-content tab-sub-content\" *ngIf=\"!loading\">\r\n\t\t\t\t<!-- Start: tab active-users -->\r\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane active-users active\" id=\"active-users\">\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t<!-- Start: Filter section -->\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"btn-group filter-dropdown-wrapper filter-dd-minh\">\r\n\t\t\t\t\t\t\t\t<span class=\"filter-title\">Filter:</span>\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t&nbsp;{{selectedFilter}}\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">filter_list</i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"selectFilter('All Users')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-icon\"><i class=\"material-icons\">sort</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-title\">All Users</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"selectFilter('Admin')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-title\">Admin</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"selectFilter('Manager')\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-icon\"><i class=\"material-icons\">account_circle</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-title\">Manager</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- End: Filter section -->\r\n\t\t\t\t\t\t<!-- Start: active users cards section -->\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t\t<span *ngFor=\"let user of currentCompanyUsers\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card\" *ngIf=\"user.user_company.active && selectedFilter == 'All Users'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div [class.img-block-blue]=\"user.user_company.role=='ADMIN'\"  [class.img-block-red]=\"user.user_company.role!='ADMIN'\">{{user.name[0]}}</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"user.username == logedInUserName\">(You)</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"designation ellipsis\">{{user.user_company.role}}</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tJoined On: {{user.createdAt.split('T')[0]}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"isAdmin && user.username == logedInUserName && adminCount\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(user);callGA('MAKEMANAGER')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"isAdmin && user.username != logedInUserName\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"deleteUser(user);callGA('DELETEUSER')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelete User\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li *ngIf=\"user.username == logedInUserName && adminCount\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li  *ngIf=\"user.user_company.role == 'ADMIN'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(user);callGA('MAKEMANAGER')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li *ngIf=\"user.username == logedInUserName && user.user_company.role == 'ADMIN' && adminCount\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(user);callGA('MAKEMANAGER')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'MANAGER'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeAdmin(user);callGA('MAKEADMIN')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Admin</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"!isAdmin && user.username == logedInUserName\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card\" *ngIf=\"user.user_company.active && selectedFilter == 'Admin' && user.user_company.role == 'ADMIN'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div  [class.img-block-blue]=\"user.user_company.role=='ADMIN'\"  [class.img-block-red]=\"user.user_company.role!='ADMIN'\">{{user.name[0]}}</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"user.username == logedInUserName\">(You)</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"designation ellipsis\">{{user.user_company.role}}</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tJoined On: {{user.createdAt.split('T')[0]}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"isAdmin\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.username != logedInUserName\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"deleteUser(user);callGA('DELETEUSER')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelete User\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.username == logedInUserName\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'ADMIN'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(currentCompany);callGA('MAKEMANAGER')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'MANAGER'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeAdmin(user);callGA('MAKEADMIN')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Admin</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"!isAdmin && user.username == logedInUserName\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card\" *ngIf=\"user.user_company.active && selectedFilter == 'Manager' && user.user_company.role == 'MANAGER'\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div  [class.img-block-blue]=\"user.user_company.role=='ADMIN'\"  [class.img-block-red]=\"user.user_company.role!='ADMIN'\">{{user.name[0]}}</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"user.username == logedInUserName\">(You)</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"designation ellipsis\">{{user.user_company.role}}</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tJoined On: {{user.createdAt.split('T')[0]}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"isAdmin\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.username != logedInUserName\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"deleteUser(user);callGA('DELETEUSER')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelete User\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.username == logedInUserName\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'ADMIN'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(currentCompany);callGA('MAKEMANAGER')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'MANAGER'\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeAdmin(user);callGA('MAKEADMIN')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Admin</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"!isAdmin && user.username == logedInUserName\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card add-new-user\" *ngIf=\"isAdmin\">\r\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#add-new-user\" (click)=\"callGA('ADDUSERCLICK')\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"add-new-user\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span>+</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"name\">Add New User</h5>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- End: active users cards section -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- End: tab active-users -->\r\n\t\t\t\t<!-- Start: tab invited-users -->\r\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane invited-users\" id=\"invited-users\">\r\n\t\t\t\t\t<!-- Start: invited users cards section -->\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t<span *ngFor=\"let user of currentCompanyUsers\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 invited-users-card\" *ngIf=\"!user.user_company.active && user.user_company.status == 'INVITED'\">\r\n\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<div  [class.img-block-blue]=\"user.user_company.role=='ADMIN'\"  [class.img-block-red]=\"user.user_company.role!='ADMIN'\">{{user.name[0]}}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\r\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"designation ellipsis\">{{user.user_company.role}}</h6>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">Invited On: {{user.user_company.invite.requested_at.split('T')[0]}}</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card add-new-user\" *ngIf=\"isAdmin\" (click)=\"callGA('ADDUSERCLICK')\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#add-new-user\">\r\n\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"add-new-user\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>+</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"name\">Add New User</h5>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- End: invited users cards section -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- End: tab invited-users -->\r\n\t\t\t\t<!-- Start: tab access-requests -->\r\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane access-requests hide\" id=\"access-requests\">\r\n\t\t\t\t\t<!-- Start: access-requests cards section -->\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t<span *ngFor=\"let user of currentCompanyUsers\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 access-requests-card\" *ngIf=\"!user.user_company.active && user.user_company.status == 'REQUESTED' && hasRequest\">\r\n\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-red\">{{user.name[0]}}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"icon-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"display:inline-block;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ar-onoffswitch\" (click)=\"accessRequestPopup(user)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"ar-onoffswitch\" class=\"ar-onoffswitch-checkbox user{{user.id}}\" id=\"user{{user.id}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"ar-onoffswitch-label\" attr.for=\"user{{user.id}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ar-onoffswitch-inner\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ar-onoffswitch-switch\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"icon-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"accessRequestPopup(user)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-green hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check_circle</i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"leave\">Approve</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"display:inline-block;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"onoffswitch\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox user{{user.id}}\" id=\"user{{user.id}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"onoffswitch-label\" attr.for=\"user{{user.id}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-inner\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-switch\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">Requested:\r\n\t\t\t\t\t\t\t\t\t\t\t{{user.user_company.invite.requested_at.split('T')[0]}}\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- Start: if no request -->\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\" *ngIf=\"!hasRequest\">\r\n\t\t\t\t\t\t<span class=\"no-req-icon\"><i class=\"material-icons\">fingerprint</i></span>\r\n\t\t\t\t\t\t<h4 class=\"no-req-text\">No requests</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- End: if no request -->\r\n\t\t\t\t\t<!-- End: access-requests cards section -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- End: tab access-requests -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- End: tabs sub content -->\r\n\t\t<div class=\"col-md-2 col-sm-1 col-xs-2 np\"></div>\r\n\t</div>\r\n</div>\r\n<!-- End: team-settings (1)-->\r\n<div id=\"add-new-user\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content modal-bg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close btn-close\"  (click)=\"closeAddUser()\">\r\n\t\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<h5 class=\"modal-title\">Add New User</h5>\r\n\t\t\t</div>\r\n\t\t\t<form [formGroup]=\"inviteUserForm\" (ngSubmit)=\"inviteUser()\">\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t{{Message}}\r\n\t\t\t\t\t\t\t<span (click)=\"upgradeNavigation()\" id=\"upgradeLink\"></span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"sahil-material\">\r\n\t\t\t\t\t\t<div class=\"form-group label-floating name\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputName\"> Name</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"inputName\" type=\"text\" autocomplete=\"off\" formControlName=\"userName\" name=\"userName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"inviteUserForm.controls.userName.touched && !inviteUserForm.controls.userName.valid\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userName.errors.required\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t                            <i class=\"material-icons\">report_problem</i>\r\n\t\t                        </span>\r\n\t\t\t\t\t\t\t\tName is required.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userName.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tMin 3 character is required.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userName.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tInvalid Name\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group label-floating email\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputEmail\"> Email Address</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"inputEmail\" type=\"email\" formControlName=\"userEmail\" name=\"userEmail\" (focus)=\"hideError()\"  autocomplete=\"off\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"inviteUserForm.controls.userEmail.touched && !inviteUserForm.controls.userEmail.valid\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userEmail.errors.required\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t                            <i class=\"material-icons\">report_problem</i>\r\n\t\t                        </span>\r\n\t\t\t\t\t\t\t\tEmail is required.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userEmail.errors.checkmail\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t                            <i class=\"material-icons\">report_problem</i>\r\n\t\t                        </span>\r\n\t\t\t\t\t\t\t\tInvalid Email.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group form-group-radio\">\r\n\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"ADMIN\" id=\"radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\r\n\t\t\t\t\t\t\t\t<label for=\"radioAdmin\"> </label> Admin {{userRole}}\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"MANAGER\" id=\"radioManager\" formControlName=\"userRole\" name=\"userRole\">\r\n\t\t\t\t\t\t\t\t<label for=\"radioManager\"> </label> Manager\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"submit\" [disabled]=\"!inviteUserForm.valid\" class=\"btn btn-red-outline btn-add-user btn-hover\" id=\"btnInvite\">Add New User</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content modal-bg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<h5 class=\"modal-title\">Create a New Company</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"sahil-material\">\r\n\t\t\t\t\t<form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\r\n\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"companyname\"> New Company Name</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tCompany Name is required.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tMin 3 character is required.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"domain\"> Company Url</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\r\n\t\t\t\t\t\t\t<label class=\"in-active\">{{subdomainExtension}}</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.domain.errors.required\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tCompany Name is required.\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tMin 3 character is required.</p>\r\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\r\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\tInvalid Url\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<div class=\"alert alert-danger hide\" id=\"success-addCompany\">\r\n\t\t\t\t\t\t{{Message}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<!-- <button type=\"\" class=\"btn btn-red-outline btn-hover\">Join Company</button> -->\r\n\t\t\t\tYour company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Start: Modal Join Company -->\r\n<div id=\"join-companyX\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content modal-bg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<h5 class=\"modal-title\">Join Company</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body col-md-12 np slimscroll\">\r\n\t\t\t\t<div class=\"sahil-material\">\r\n\t\t\t\t\t<div class=\"col-md-12 np\">\r\n\t\t\t\t\t\t<div class=\"alert alert-danger hide\" id=\"success-joinCompany\" *ngIf=\"joinCompanyForm.controls.searchCompany.valid\">\r\n\t\t\t\t\t\t\t{{Message}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form [formGroup]=\"joinCompanyForm\" (ngSubmit)=\"searchCompany()\">\r\n\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"searchCompany\"> Search</label>\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"searchCompany\" type=\"text\" name=\"searchCompany\" formControlName=\"searchCompany\" (focus)=\"hideError()\">\r\n\t\t\t\t\t\t\t\t<span class=\"icon-search\" (click)=\"searchCompany()\"><i class=\"material-icons\">search</i></span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"joinCompanyForm.controls.searchCompany.touched && !joinCompanyForm.controls.searchCompany.valid\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"joinCompanyForm.controls.searchCompany.errors.required\">Company Name is required to search.</p>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"joinCompanyForm.controls.searchCompany.errors.minlength\">Min 3 character is required.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np companies-card-wrapper\">\r\n\t\t\t\t\t\t<span *ngIf=\"searchedCompanyList.length > 0\">\r\n\t\t\t\t\t\t\t<span *ngFor=\"let company of searchedCompanyList\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-sm-4 col-xs-12 np companies-card\" (click)=\"joinCompany(company)\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"companies-box\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"companies-box-hover\" id='joined{{company.id}}'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check_circle</i> &nbsp;<span id='join{{company.id}}'>Join</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span *ngIf=\"joinedCompanyList.length > 0\">\r\n\t\t\t\t\t\t\t<span *ngFor=\"let company of joinedCompanyList\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-sm-4 col-xs-12 np companies-card\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"companies-box\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"companies-box-request\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tRequest Sent\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</span>\r\n                        <span *ngIf=\"invitedCompanyList.length > 0\">\r\n                            <span *ngFor=\"let company of invitedCompanyList\">\r\n                                <div class=\"col-md-6 col-sm-4 col-xs-12 np companies-card\">\r\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                                        <div class=\"companies-box\">\r\n                                            <div class=\"img-block-wrapper\">\r\n                                                <div class=\"img-block-blue\">{{company.name[0]}}</div>\r\n                                            </div>\r\n                                            <div class=\"text-block\">\r\n                                                <h4 class=\"name ellipsis\">{{company.name}}</h4>\r\n                                                <span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\r\n                                            </div>\r\n                                            <div class=\"companies-box-request\">\r\n                                                check email for your approval\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- End: companies cards section -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\tOnce the admin of the company accepts your request, you will be added to the company on Outgrow.\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- End: Modal Join Company -->\r\n<div id=\"leaveConfirmation\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content modal-bg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"close btn-help\">\r\n\t\t\t\t\t<i class=\"material-icons\">help_outline</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<h5 class=\"modal-title\">Confirmation</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body col-md-12 np og-message\">\r\n                <p>Are you sure you wish to leave this company?</p>\r\n                <p>This is the only company you belong to. If you leave this company, your account will be deleted.</p>\r\n\t\t\t\t<button class=\"btn btn-red-outline btn-hover\" id=\"confirmNo\" data-dismiss=\"modal\">\r\n\t\t\t\t\tNo\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-red-outline btn-hover\" id=\"confirmYes\" (click)=\"deleteMe()\">\r\n\t\t\t\t\tYes\r\n\t\t\t\t</button>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer col-md-12 np hide\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Start: Modal Accept Access Request -->\r\n<div id=\"accept-access-req\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content modal-bg\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t<i class=\"material-icons\">close</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button type=\"button\" class=\"close btn-help\">\r\n\t\t\t\t\t<i class=\"material-icons\">help_outline</i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<h5 class=\"modal-title\">Accept Access Request</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t<div class=\"sahil-material\">\r\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12 np\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label col-md-3 np label-filled\" for=\"\">Name</label>\r\n\t\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\r\n\t\t\t\t\t\t\t\t<span class=\"form-control col-md-8 np input-filled ellipsis\">{{accessRequestUserName}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12 np\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label col-md-3 np label-filled\" for=\"\">Company</label>\r\n\t\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\r\n\t\t\t\t\t\t\t\t<span class=\"form-control ellipsis col-md-8 np input-filled\">{{currentCompany.name}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np email-access\">\r\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t\t\t\t\t<label class=\"control-label col-md-3 np label-filled\" for=\"\">Email</label>\r\n\t\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\r\n\t\t\t\t\t\t\t\t<span class=\"form-control col-md-8 np input-filled\">{{accessRequestUserEmail}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer col-md-12 col-sm-12 col-xs-12 np\">\r\n\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5 np\"></div>\r\n\t\t\t\t<form [formGroup]=\"acceptRequestForm\" (ngSubmit)=\"acceptRequest()\">\r\n\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-7 np\">\r\n\t\t\t\t\t\t<div class=\"form-group form-group-radio\">\r\n\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"ADMIN\" id=\"aar-radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\r\n\t\t\t\t\t\t\t\t<label for=\"aar-radioAdmin\"> </label> Admin\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label class=\"radio-inline\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"MANAGER\" id=\"aar-radioManager\" formControlName=\"userRole\" name=\"userRole\">\r\n\t\t\t\t\t\t\t\t<label for=\"aar-radioManager\"> </label> Manager\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button type=\"submit\" id=\"btnAccetpRequest\" class=\"btn btn-red-outline btn-hover\" [disabled] = \"!acceptRequestForm.valid\">Approve Request</button>\r\n\t\t\t\t\t\t<div class=\"alert alert-danger hide\" id=\"success-acceptUser\">\r\n\t\t\t\t\t\t\t{{Message}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- End: Modal Accept Access Request -->\r\n<div class=\"float-changes-updated hide\">\r\n\t<div class=\"col-md-12 np\">\r\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\r\n\t\t<span id=\"floatMessage\">{{ Message }} </span>\r\n\t</div>\r\n</div>"

/***/ },

/***/ 1142:
/***/ function(module, exports) {

module.exports = "<header id=\"setting-header\" class=\"hide\">\r\n    <nav class=\"navbar navbar-default navbar-fixed-top white-logo\">\r\n      <div class=\"container-fluid nav-padding\">\r\n          <div class=\"col-xs-2 np\">\r\n              <a href=\"javascript:void(0);\" (click)=\"goBack()\">\r\n                  <span class=\"mat-icon\"><i class=\"material-icons\">arrow_back</i></span>\r\n              </a>\r\n          </div>\r\n          <div class=\"navbar-header col-xs-8 np\">\r\n              <!-- <a href=\"#\" class=\"navbar-brand\">\r\n                  <img src=\"assets/images/headerLogo-white.png\" class=\"\" />\r\n              </a> -->\r\n              <h4 class=\"col-xs-12 np ellipsis title\">{{sideNaveBarHeader}}</h4>\r\n          </div>\r\n      </div>\r\n    </nav>\r\n</header>\r\n<div *ngIf=\"!is_subcripion_cancelled\" class=\"left-sidebar col-md-3 col-sm-3 col-xs-3 np\" id=\"lgScrSideNavbar\">\r\n    <div id=\"\" class=\"tabbable tabs-left\">\r\n        <ul>\r\n            <li class=\"setting-nav\" id=\"teamSet\" (click)=\"showTab('team-setting')\">\r\n                <a [routerLink]=\"['/settings']\" data-toggle=\"tab\">\r\n                    <span class=\"left-sidebar-icon\">\r\n                    <i class=\"material-icons\">bubble_chart</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">Team Settings</h6>\r\n                        <span class=\"\">Invite new team members and manage user permissions</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li class=\"setting-nav\" id=\"membDet\" (click)=\"showTab('membership')\" [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/settings/membership']\" data-toggle=\"tab\">\r\n                    <span class=\"left-sidebar-icon\">\r\n                    <i class=\"material-icons\">view_carousel</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">Membership Details</h6>\r\n                        <span class=\"\">View your plan details and invoices</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li class=\"setting-nav\" id=\"apiKey\" (click)=\"showTab('api-integration')\" [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/settings/api-integration']\" data-toggle=\"tab\">\r\n                    <span class=\"left-sidebar-icon\">\r\n                    <i class=\"material-icons\">developer_board</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">API Key</h6>\r\n                        <span class=\"\">Copy or Regenerate your API Key used for Integration</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li class=\"setting-nav\" id=\"accSet\" (click)=\"showTab('my-account')\">\r\n                <a [routerLink]=\"['/settings/my-account']\" data-toggle=\"tab\" [routerLinkActive]=\"['active']\">\r\n                    <span class=\"left-sidebar-icon\">\r\n                    <i class=\"material-icons\">face</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">My Account</h6>\r\n                        <span class=\"\">View and edit your account details</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!is_subcripion_cancelled\" class=\"left-sidebar col-md-3 col-sm-3 col-xs-3 np mobile-left-sidebar\" id=\"smScrSideNavbar\">\r\n    <div id=\"\" class=\"tabbable tabs-left\">\r\n        <ul>\r\n            <li class=\"setting-nav\" id=\"teamSet-m\" (click)=\"showTab('team-setting');addHide()\">\r\n                <a [routerLink]=\"['/settings']\" data-toggle=\"tab\">\r\n                    <span class=\"left-sidebar-icon\">\r\n                    <i class=\"material-icons\">bubble_chart</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">Team Settings</h6>\r\n                        <span class=\"\">Invite new team members and manage user permissions</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li class=\"setting-nav\" id=\"membDet-m\" (click)=\"showTab('membership');addHide()\" [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/settings/membership']\" data-toggle=\"tab\">\r\n                    <span class=\"left-sidebar-icon\">\r\n                    <i class=\"material-icons\">view_carousel</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">Membership Details</h6>\r\n                        <span class=\"\">View your plan details and invoices</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <li class=\"setting-nav\" id=\"apiKey-m\" (click)=\"showTab('api-integration');addHide()\" [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/settings/api-integration']\" data-toggle=\"tab\">\r\n                    <span class=\"left-sidebar-icon\">\r\n                    <i class=\"material-icons\">developer_board</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">API Key</h6>\r\n                        <span class=\"\">Copy or Regenerate your API Key used for Integration</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <!--<li class=\"hide\" id=\"notif\">\r\n                <a href=\"#noti-settings\" data-toggle=\"tab\" (click)=\"showTab(3)\">\r\n                    <span class=\"left-sidebar-icon noti-icon\">\r\n                    <i class=\"material-icons\">notifications_active</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">Notification Settings</h6>\r\n                        <span class=\"\">Select which notifications you wish to receive and how you want to receive them.</span>\r\n                    </div>\r\n                </a>\r\n            </li>-->\r\n            <li class=\"setting-nav\" id=\"accSet-m\" (click)=\"showTab('my-account');addHide()\" [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"['/settings/my-account']\" data-toggle=\"tab\">\r\n                    <span class=\"left-sidebar-icon\">\r\n                    <i class=\"material-icons\">face</i>\r\n                  </span>\r\n                    <div class=\"left-sidebar-title\">\r\n                        <h6 class=\"\">My Account</h6>\r\n                        <span class=\"\">View and edit your account details</span>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sideNavbar_index__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_index__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__membership_index__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teamSetting_index__ = __webpack_require__(968);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apiIntegration_index__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_index__ = __webpack_require__(965);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_component__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__templates_controls_controls_module__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__membership_payment_payment_component__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__membership_subscription_subscription_component__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__membership_invoice_invoice_component__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_userCompanies_usercompanies_component__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_changePassword_changepassword_component__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_basicDetails_basicdetails_component__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_company_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_user_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_logged_in_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_cookie_service__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_script_service__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_membership_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_subdomain_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_plan_service__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(exports, "SettingsModule", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var SETTINGS_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__settings_component__["a" /* SettingsComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__teamSetting_index__["a" /* TeamSettingComponent */]
            },
            {
                path: 'membership',
                component: __WEBPACK_IMPORTED_MODULE_4__membership_index__["a" /* MembershipComponent */]
            },
            {
                path: 'api-integration',
                component: __WEBPACK_IMPORTED_MODULE_6__apiIntegration_index__["a" /* APIIntegrationComponent */]
            },
            {
                path: 'my-account',
                component: __WEBPACK_IMPORTED_MODULE_3__account_index__["a" /* AccountComponent */]
            }]
    }
];
var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forChild(SETTINGS_ROUTES), __WEBPACK_IMPORTED_MODULE_11__templates_controls_controls_module__["a" /* ControlsModule */], __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_module__["a" /* ToolbarModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_sideNavbar_index__["a" /* SideNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__account_index__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_4__membership_index__["a" /* MembershipComponent */],
                __WEBPACK_IMPORTED_MODULE_5__teamSetting_index__["a" /* TeamSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__notification_index__["a" /* NotificationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__apiIntegration_index__["a" /* APIIntegrationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__membership_payment_payment_component__["a" /* PaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__membership_subscription_subscription_component__["a" /* SubscriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_15__membership_invoice_invoice_component__["a" /* InvoiceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__account_userCompanies_usercompanies_component__["a" /* UserCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__account_changePassword_changepassword_component__["a" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_18__account_basicDetails_basicdetails_component__["a" /* BasicDetailsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__shared_services_index__["j" /* SettingsCommunicationService */],
                __WEBPACK_IMPORTED_MODULE_19__shared_services_company_service__["a" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_services_logged_in_service__["a" /* LoggedInService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_script_service__["a" /* Script */],
                __WEBPACK_IMPORTED_MODULE_25__shared_services_subdomain_service__["a" /* SubDomainService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_membership_service__["a" /* MembershipService */],
                __WEBPACK_IMPORTED_MODULE_26__shared_services_plan_service__["a" /* PlanService */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_8__settings_component__["a" /* SettingsComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsModule);
    return SettingsModule;
}());


/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_model__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_service__ = __webpack_require__(795);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JSONBuilder; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JSONBuilder = (function () {
    function JSONBuilder(_BuilderService) {
        this._BuilderService = _BuilderService;
        this.selectedModel = 'Page';
        this.templateQuestionare = [];
        this.templateQuestionareWithEmittedLeadFormQuestion = [];
    }
    JSONBuilder.prototype.setTemplate = function (template) {
        this.JSONTemplate = template;
        for (var _i = 0, _a = template.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (!this.selectedPage)
                this.selectedPage = page;
            if (page.type === 'Questionnaire') {
                // if (!this.selectedPage)
                //   this.selectedPage = page;
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    /*if (localStorage.getItem('hash-link') == 'Questionnaire') {
                      this.selectedSection = section;
                      this.selectedModel = 'Section';
                      localStorage.removeItem('hash-link');
                    }*/
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        this.templateQuestionare.push(item);
                        if (item.type != 'leadform_question')
                            this.templateQuestionareWithEmittedLeadFormQuestion.push(item);
                    }
                }
            } /* else if (page.type === localStorage.getItem('hash-link') && (page.visible == true)) {
              this.selectedPage = page;
              localStorage.removeItem('hash-link');
            }*/
        }
    };
    JSONBuilder.prototype.getQuestionsList = function () {
        var questions = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    if (section.type === 'LeadFormQ' && section.visible === false) {
                    }
                    else {
                        for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                            var item = _e[_d];
                            questions.push(item);
                        }
                    }
                }
            }
        }
        return questions;
    };
    JSONBuilder.prototype.reorder = function (order) {
        var sectionItems = this.selectedSection.items;
        for (var control in sectionItems) {
            if (sectionItems[control].type != 'leadform_question') {
                for (var index in order) {
                    if (sectionItems[control].order == order[index]) {
                        sectionItems[control].order = Number(index) + 1;
                        break;
                    }
                }
            }
        }
    };
    // get question No.
    JSONBuilder.prototype.getQuestionNo = function () {
        var items = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    if (section.type !== 'LeadFormQ') {
                        for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                            var item = _e[_d];
                            items.push(item);
                        }
                    }
                }
            }
        }
        for (var _f = 0, items_1 = items; _f < items_1.length; _f++) {
            var item1 = items_1[_f];
            if (item1 === this.selectedControl) {
                var index = jQuery.inArray(item1, items);
                return index + 1;
            }
        }
    };
    // hide other LeadForm
    JSONBuilder.prototype.hideOtherLeadForm = function (lead_on_page, index) {
        var sections = [];
        var leadsection;
        var items = [];
        var editorControl = {
            click_button: {},
            leadform: {}
        };
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === lead_on_page) {
                this.setSelectedPage(page);
                this.setSelectedModel('Page');
                if (page.type === 'Questionnaire') {
                    for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                        var section1 = _c[_b];
                        if (section1.type === 'LeadFormQ') {
                            section1.visible = true;
                            section1.items[0].visible = true;
                            sections.push(section1);
                            items.push(section1.items[0]);
                            editorControl['leadform_question'] = section1.items[0];
                            // this.setSelectedSection(section1);
                            leadsection = section1;
                            //before/after question
                            var index1 = jQuery.inArray(section1, page.sections);
                            if (index1 === 0) {
                                page.sections.push(section1);
                                page.sections.splice(index1, 1);
                            }
                        }
                    }
                }
                else {
                    for (var _d = 0, _e = page.sections; _d < _e.length; _d++) {
                        var section1 = _e[_d];
                        for (var _f = 0, _g = section1.items; _f < _g.length; _f++) {
                            var item = _g[_f];
                            if (item.type === 'leadform') {
                                item.visible = true;
                                items.push(item);
                                editorControl['leadform'] = item;
                                leadsection = section1;
                                this.setSelectedSection(section1);
                            }
                            if (item.type === 'click_button') {
                                item.visible = false;
                                items.push(item);
                                editorControl['click_button'] = item;
                            }
                        }
                    }
                }
            }
            else {
                if (page.type === 'Questionnaire') {
                    for (var _h = 0, _j = page.sections; _h < _j.length; _h++) {
                        var section1 = _j[_h];
                        if (section1.type === 'LeadFormQ') {
                            section1.visible = false;
                            section1.items[0].visible = false;
                            sections.push(section1);
                            items.push(section1.items[0]);
                        }
                    }
                }
                else {
                    for (var _k = 0, _l = page.sections; _k < _l.length; _k++) {
                        var section1 = _l[_k];
                        for (var _m = 0, _o = section1.items; _m < _o.length; _m++) {
                            var item = _o[_m];
                            if (item.type === 'leadform') {
                                item.visible = false;
                                items.push(item);
                            }
                            if (item.type === 'click_button') {
                                item.visible = true;
                                items.push(item);
                            }
                        }
                    }
                }
            }
        }
        var unsaveddata = {
            app: '',
            sections: sections,
            items: items,
            page: ''
        };
        this._BuilderService.updateChanges(unsaveddata).subscribe(function (response) {
            //if(response.success)
            //this._ItemTrackService.resetUnsavedData();
        }, function (error) {
            console.log(error);
        });
        var data = [];
        data.push(leadsection);
        data.push(editorControl);
        return data;
    };
    JSONBuilder.prototype.hideOtherLeadForm1 = function (lead_on_page, index) {
        var sections = [];
        var items = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page !== this.selectedPage) {
                if (page.type === 'Questionnaire') {
                    for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                        var section1 = _c[_b];
                        if (section1.type === 'LeadFormQ') {
                            section1.visible = false;
                            section1.items[0].visible = false;
                            sections.push(section1);
                            items.push(section1.items[0]);
                        }
                    }
                }
                else {
                    for (var _d = 0, _e = page.sections; _d < _e.length; _d++) {
                        var section1 = _e[_d];
                        for (var _f = 0, _g = section1.items; _f < _g.length; _f++) {
                            var item = _g[_f];
                            if (item.type === 'leadform') {
                                item.visible = false;
                                items.push(item);
                            }
                            if (item.type === 'click_button') {
                                item.visible = true;
                                items.push(item);
                            }
                        }
                    }
                }
            }
        }
        var unsaveddata = {
            app: '',
            sections: sections,
            items: items,
            page: ''
        };
        this._BuilderService.updateChanges(unsaveddata).subscribe(function (response) {
            //if(response.success)
            //this._ItemTrackService.resetUnsavedData();
        }, function (error) {
            console.log(error);
        });
    };
    //get visible leadform
    JSONBuilder.prototype.getOtherVisibleLeadForm = function () {
        var pageType = '';
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                var section = _c[_b];
                for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                    var item = _e[_d];
                    if ((item.type === 'leadform' || (section.visible === true && item.type === 'leadform_question')) && item.visible === true) {
                        pageType = page.type;
                    }
                }
            }
        }
        return pageType;
    };
    JSONBuilder.prototype.setChanged = function (value) {
        this.changed = value;
    };
    JSONBuilder.prototype.getChanged = function () {
        return this.changed;
    };
    JSONBuilder.prototype.addNewChild = function (childTemplate) {
        this.selectedSection.items.push(childTemplate);
    };
    JSONBuilder.prototype.sort = function (order) {
        this.reorder(order);
        this.selectedSection.items.sort(function (a, b) { return ((a.order < b.order) ? -1 : ((a.order > b.order) ? 1 : 0)); });
    };
    JSONBuilder.prototype.getJSONBuilt = function () {
        return this.JSONTemplate;
    };
    JSONBuilder.prototype.setSelectedControl = function (control) {
        this.selectedControl = control;
    };
    JSONBuilder.prototype.setSelectedSection = function (section) {
        this.selectedSection = section;
    };
    JSONBuilder.prototype.setSelectedPage = function (page) {
        this.selectedPage = page;
        //window.location.hash = '#' + page.type;
    };
    JSONBuilder.prototype.getSelectedControl = function () {
        return this.selectedControl;
    };
    JSONBuilder.prototype.getSelectedSection = function () {
        return this.selectedSection;
    };
    JSONBuilder.prototype.getSelectedPage = function () {
        return this.selectedPage;
    };
    JSONBuilder.prototype.changeControl = function (newControl) {
        //index of old control in array
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        //replace oldControl with newControl at index
        this.selectedSection.items[index].type = newControl;
        if (newControl == 'slider')
            this.selectedSection.items[index].config.validations.required.status = false;
        this.tvs.updateFormGroup(this.selectedSection);
    };
    JSONBuilder.prototype.deleteControl = function () {
        //index of old control in arra
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        //replace oldControl with newControl at index
        this.selectedSection.items.splice(index, 1);
        //choose the next selected element from template section
        if (this.selectedSection.items.length > 0) {
            this.selectedControl = this.selectedSection.items[0];
        }
        else {
            // this.selectedControl = undefined;
            //index of old section
            var index1 = jQuery.inArray(this.selectedSection, this.selectedPage.sections);
            //replace oldsection with new section at index
            this.selectedPage.sections.splice(index1, 1);
            if (this.selectedPage.sections.length > 0) {
                //set control to first section
                this.selectedSection = this.selectedPage.sections[0];
            }
            else {
            }
        }
    };
    JSONBuilder.prototype.deleteSection = function () {
        //Remove all Items
        this.selectedSection.items.splice(0, this.selectedSection.items.length);
        //Remove Section
        var index = jQuery.inArray(this.selectedSection, this.selectedPage.sections);
        //replace oldsection with new section at index
        this.selectedPage.sections.splice(index, 1);
        if (this.selectedPage.sections.length > 0) {
            //set control to first section
            this.selectedSection = this.selectedPage.sections[0];
        }
    };
    JSONBuilder.prototype.multiSectionSort = function (sectionIndex, itemIndex, order) {
        var secindex = sectionIndex - 1;
        for (var section in this.selectedPage.sections) {
            if (this.selectedPage.sections[section].type == 'LeadFormQ' && !this.selectedPage.sections[section].visible && Number(section) == 0) {
                secindex = sectionIndex;
            }
        }
        var sectionItems = this.selectedPage.sections[secindex].items;
        sectionItems.splice(itemIndex, 0, this.selectedControl);
        // delete control from out section
        var index = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        //replace oldControl with newControl at index
        this.selectedSection.items.splice(index, 1);
        // sort the result section
        jQuery.each(sectionItems, function (key, item) {
            if (item.type != 'leadform_question')
                item.order = key + 1;
        });
        //sort the parent array
        this.sort;
        this.tvs.updateFormGroup(this.selectedSection);
        this.tvs.updateFormGroup(this.selectedPage.sections[secindex]);
    };
    JSONBuilder.prototype.addControl = function (item, index) {
        //index of current item
        //let indexs = jQuery.inArray(this.selectedControl, this.selectedSection.items);
        //put it next to current item
        this.selectedSection.items.splice(index + 1, 0, item);
        //update form groups
        this.tvs.updateFormGroup(this.selectedSection);
        //sort the parent array
        this.sort;
        // sort the result section
        jQuery.each(this.selectedSection.items, function (key, item) {
            item.order = key + 1;
        });
        //return item;
    };
    JSONBuilder.prototype.addNewSection = function (section, item) {
        var section1 = new __WEBPACK_IMPORTED_MODULE_1__models_model__["a" /* Section */](section.title);
        section1._id = section._id;
        section1.addItems(item);
        this.JSONTemplate.pages[1].addSections(section1);
        //update form groups
        this.tvs.updateFormGroup(section1);
    };
    JSONBuilder.prototype.addNewQuestion = function (item, index) {
        this.JSONTemplate.pages[1].sections[index - 1].addItems(item);
        //update form groups
        this.tvs.updateFormGroup(this.JSONTemplate.pages[1].sections[index - 1]);
        //sort the parent array
        this.sort;
        // sort the result section
        jQuery.each(this.JSONTemplate.pages[1].sections[index - 1].items, function (key, item) {
            item.order = key + 1;
        });
    };
    JSONBuilder.prototype.setSelectedModel = function (type) {
        this.selectedModel = type;
    };
    JSONBuilder.prototype.getSelectedModel = function () {
        return this.selectedModel;
    };
    JSONBuilder.prototype.setSelectedFormula = function (formula) {
        if (!formula)
            formula = this.JSONTemplate.formula[0];
        this.setResultButtonCTA(formula);
        this.selectedFormula = formula;
    };
    JSONBuilder.prototype.setResultButtonCTA = function (formula) {
        if (this.JSONTemplate.templateType == 'Recommendation') {
            this.JSONTemplate.navigate_Url = formula.units.postValue;
            /** set text */
            for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
                var page = _a[_i];
                if (page.type === 'Result') {
                    for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                        var section = _c[_b];
                        for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                            var item = _e[_d];
                            if (item.type == 'leadform' || item.type == 'click_button')
                                item.props.title = formula.units.preValue;
                        }
                    }
                }
            }
        }
    };
    JSONBuilder.prototype.getSelectedFormula = function () {
        var self = this;
        var leftHeight = jQuery('.recom-section .left-sec').height();
        var rightHeight = jQuery('.recom-section .outer-main').height();
        if (leftHeight > rightHeight)
            jQuery('.outer-main').css('height', leftHeight);
        else
            jQuery('.left-outer').css('height', rightHeight);
        self.textareaSize();
        return this.selectedFormula;
    };
    JSONBuilder.prototype.textareaSize = function () {
        if (jQuery('.big-text').prop('scrollHeight') > 50)
            jQuery('.big-text').css('height', jQuery('.big-text').prop('scrollHeight'));
        else
            jQuery('.big-text').css('height', 50);
    };
    JSONBuilder.prototype.addResultSection = function (section) {
        var itemNew = new __WEBPACK_IMPORTED_MODULE_1__models_model__["b" /* Item */]('result_output', "\n\t\t \t<p>{R" + (this.getJSONBuilt().formula.length) + "}</p>\n            <p>By the age of 65</p>\n            <p>Things get serious now. Ensure you're living healthy.</p>", '', '', '');
        //itemNew.setFormulaIndex(formulaIndex.toString());
        itemNew.setVisibility(true);
        section.addItems(itemNew);
        return { item: section.items[section.items.length - 1], index: section.items.length - 1 };
    };
    JSONBuilder.prototype.deleteResultSection = function (section, formulaIndex) {
        section.items.forEach(function (item, index) {
            item.setFormulaIndex(index.toString());
        });
        section.items.splice(formulaIndex, 1);
    };
    JSONBuilder.prototype.getTemplateQuestionare = function () {
        return this.templateQuestionare;
    };
    JSONBuilder.prototype.updateTemplateQuestionare = function () {
        this.templateQuestionare = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        this.templateQuestionare.push(item);
                    }
                }
            }
        }
    };
    JSONBuilder.prototype.getTemplateQuestionareWithEmittedLeadFormQuestion = function () {
        //First Updates the questionare list and then returns
        this.templateQuestionareWithEmittedLeadFormQuestion = [];
        for (var _i = 0, _a = this.JSONTemplate.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Questionnaire') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        if (item.type != 'leadform_question')
                            this.templateQuestionareWithEmittedLeadFormQuestion.push(item);
                    }
                }
            }
        }
        return this.templateQuestionareWithEmittedLeadFormQuestion;
    };
    JSONBuilder.prototype.addFormula = function () {
        return this.JSONTemplate.addformula();
    };
    JSONBuilder.prototype.setValidatorService = function (instance) {
        this.tvs = instance;
    };
    JSONBuilder.prototype.updateFormGroup = function () {
        this.tvs.updateFormGroup(this.selectedSection);
    };
    /*Animation funtions*/
    JSONBuilder.prototype.animInit = function () {
        if (jQuery('.elem').parent().hasClass('green-bg')) {
            jQuery('.elem').parent().removeClass('green-bg');
        }
        jQuery('.elem').addClass('elem-rotate').html('<i class="material-icons">donut_large</i>').fadeIn('slow');
    };
    JSONBuilder.prototype.animLoad = function () {
        jQuery('.elem').removeClass('elem-rotate').html('<i class="material-icons green-color">check</i>').fadeIn('slow');
        jQuery('.elem').parent().addClass('green-bg');
        setTimeout(function () {
            jQuery('.elem').parent().removeClass('green-bg');
            jQuery('.elem').html('<i class="material-icons">donut_large</i>').fadeIn('slow');
        }, 700);
    };
    JSONBuilder.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var context = this;
            var later = function () {
                timeout = null;
                func.apply(context);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    JSONBuilder = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__builder_service__["a" /* BuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_service__["a" /* BuilderService */]) === 'function' && _a) || Object])
    ], JSONBuilder);
    return JSONBuilder;
    var _a;
}());


/***/ },

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AnalyticService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyticService = (function (_super) {
    __extends(AnalyticService, _super);
    function AnalyticService(_http) {
        _super.call(this);
        this._http = _http;
        this.visitorAnswers = [];
    }
    AnalyticService.prototype.reInitVisitorAnswers = function () {
        this.visitorAnswers = [];
    };
    AnalyticService.prototype.setVisitorAnswers = function (item) {
        this.visitorAnswers.push(item);
    };
    AnalyticService.prototype.getVisitorAnswers = function () {
        return this.visitorAnswers;
    };
    AnalyticService.prototype.setVisitorKey = function (key) {
        if (!this.visitorKey)
            ga('devteam.send', 'pageview', '/' + key);
        this.visitorKey = key;
    };
    AnalyticService.prototype.getVisitorKey = function () {
        return (this.visitorKey == undefined || this.visitorKey == '') ? '' : this.visitorKey;
    };
    AnalyticService.prototype.saveStats = function (appId, item) {
        return this._http.post(this._url + '/analytic/save_stats', {
            appId: appId,
            item: item,
            key: this.getVisitorKey(),
            unsavedArray: this.getVisitorAnswers()
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveLead = function (appId, lead) {
        return this._http.post(this._url + '/analytic/save_lead', {
            appId: appId,
            lead: lead,
            key: this.getVisitorKey()
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveResult = function (appId, formula) {
        return this._http.post(this._url + '/analytic/save_result', {
            appId: appId,
            formula: formula,
            key: this.getVisitorKey(),
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveOutCome = function (appId, formula) {
        return this._http.post(this._url + '/analytic/save_outcome', {
            appId: appId,
            formula: formula,
            key: this.getVisitorKey(),
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.saveSectionResult = function (sectionId) {
        return this._http.post(this._url + '/analytic/save_section_result', {
            sectionId: sectionId,
            key: this.getVisitorKey(),
            unsavedArray: this.getVisitorAnswers()
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService.prototype.generateVisitorKey = function (appId, questions, utmObj) {
        return this._http.post(this._url + '/analytic/visitor_key', {
            appId: appId,
            key: this.getVisitorKey(),
            questions: questions,
            utm_param: utmObj
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AnalyticService);
    return AnalyticService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_models_model__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analytic_service__ = __webpack_require__(792);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RecommendationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecommendationService = (function () {
    function RecommendationService(_jsonBuilderHelper, _analyticService) {
        this._jsonBuilderHelper = _jsonBuilderHelper;
        this._analyticService = _analyticService;
        this.recommendedResult = { resultItem: __WEBPACK_IMPORTED_MODULE_2__builder_models_model__["b" /* Item */], count: 0, resultObj: {} };
        this.formulaResults = {};
        //console.log('max: ' + max);
        // console.log('key/s with max count: ' + JSON.stringify(result));
        // console.log(reccomendedObj);
    }
    RecommendationService.prototype.getRecomendedResult = function () {
        var recommendedObj = {};
        var max = 0;
        var result = [];
        var self = this;
        this._jsonBuilderHelper.getJSONBuilt().formula.forEach(function (formula) {
            if (!self.formulaResults.hasOwnProperty(formula.value)) {
                self.formulaResults[formula.value] = formula;
            }
        });
        this._jsonBuilderHelper.getTemplateQuestionare().forEach(function (item) {
            if (item.type == 'selectbox' || item.type == 'radio_button' || item.type == 'checkbox') {
                item.options.forEach(function (option) {
                    var type = option.value;
                    if (type && type != '' && isNaN(type)) {
                        var typeArray = type.split(',');
                        typeArray.forEach(function (obj) {
                            type = obj.trim();
                            if (option.selected) {
                                recommendedObj[type] = (recommendedObj[type] || 0) + (1);
                                if (recommendedObj[type] > max) {
                                    max = recommendedObj[type];
                                    result = [type];
                                    return;
                                }
                                if (recommendedObj[type] == max) {
                                    var arrayIndex = result.indexOf(type);
                                    if (arrayIndex != (-1)) {
                                        result.splice(arrayIndex, 1);
                                    }
                                    result.push(type);
                                }
                            }
                            else {
                                recommendedObj[type] = (recommendedObj[type] || 0);
                            }
                        });
                    }
                });
            }
        });
        this.recommendedResult.resultItem = this.formulaResults[result[result.length - 1]];
        this.recommendedResult.count = max;
        this.recommendedResult.resultObj = result;
        console.log('max: ' + max);
        console.log('key/s with max count: ' + JSON.stringify(result));
        console.log('result', this.recommendedResult.resultItem);
        console.log('this.formulaResults', this.formulaResults);
        /* fro live calcs */
        if (result.length > 0) {
            if (this._jsonBuilderHelper.getSelectedFormula() != this.recommendedResult.resultItem) {
                this._jsonBuilderHelper.setSelectedFormula(this.recommendedResult.resultItem);
                /** save outcome */
                if (this._jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && this._analyticService.getVisitorKey()) {
                    if (this.sub)
                        this.sub.unsubscribe();
                    this.sub = this._analyticService.saveOutCome(this._jsonBuilderHelper.getJSONBuilt()._id, this._jsonBuilderHelper.getSelectedFormula())
                        .subscribe(function (response) {
                        //
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }
        else {
            this._jsonBuilderHelper.setSelectedFormula(this._jsonBuilderHelper.getJSONBuilt().formula[0]);
            /** save outcome */
            if (this._jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && this._analyticService.getVisitorKey()) {
                if (this.sub)
                    this.sub.unsubscribe();
                this.sub = this._analyticService.saveOutCome(this._jsonBuilderHelper.getJSONBuilt()._id, this._jsonBuilderHelper.getSelectedFormula())
                    .subscribe(function (response) {
                    //
                }, function (error) {
                    console.log(error);
                });
            }
        }
        console.log('this.formulaResults', recommendedObj);
        return this.recommendedResult;
    };
    RecommendationService.prototype.getAvailableOptions = function () {
        var optionArray = [];
        this._jsonBuilderHelper.getJSONBuilt().formula.map(function (formula) { optionArray.push({ name: formula.name, value: formula.value }); });
        return optionArray;
    };
    RecommendationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object])
    ], RecommendationService);
    return RecommendationService;
    var _a, _b;
}());


/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_model__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_model__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_model__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calc_email_model__ = __webpack_require__(808);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__page_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__section_model__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__item_model__["a"]; });
/* unused harmony reexport CalcEmail */







/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BuilderService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuilderService = (function (_super) {
    __extends(BuilderService, _super);
    function BuilderService(_http) {
        _super.call(this);
        this._http = _http;
    }
    BuilderService.prototype.createApp = function (app) {
        return this._http.post(this._url + '/builder/create_app', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.publishApp = function (app) {
        return this._http.post(this._url + '/builder/publish_app', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.getProject = function (data) {
        return this._http.post(this._url + '/builder/get_project', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.changeTemplate = function (projectId, templateName) {
        return this._http.post(this._url + '/builder/change_template', { projectId: projectId, templateName: templateName }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.remove = function (itemId, sectionId) {
        return this._http.post(this._url + '/builder/remove', { itemId: itemId, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.deleteItem = function (itemId, sectionId) {
        return this._http.post(this._url + '/builder/delete_item', { itemId: itemId, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.checkUniqueUrl = function (id, url) {
        return this._http.post(this._url + '/builder/check_unique_url', {
            id: id,
            url: this.sanitizeUrl(url)
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateName = function (id, name) {
        return this._http.post(this._url + '/builder/update_name', {
            id: id,
            name: name,
            url: this.sanitizeUrl(name)
        }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.addItem = function (sectionId, item, index) {
        return this._http.post(this._url + '/builder/add_item', { item: item, sectionId: sectionId, index: index }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.addSection = function (section, item, pageId) {
        return this._http.post(this._url + '/builder/add_section', { item: item, section: section, pageId: pageId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.removeSection = function (sectionId) {
        return this._http.post(this._url + '/builder/remove_section', { sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateInterSectionOrder = function (items, sectionId) {
        return this._http.post(this._url + '/builder/update_intersection', { items: items, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.updateIntraSectionOrder = function (items, sectionId) {
        return this._http.post(this._url + '/builder/update_intrasection', { items: items, sectionId: sectionId }, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    /** update unsaved changes **/
    BuilderService.prototype.updateChanges = function (unSavedData) {
        return this._http.post(this._url + '/builder/update_changes', unSavedData, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    //utility functions
    BuilderService.prototype.sanitizeUrl = function (url) {
        url = url.toString().trim().replace(/[^a-zA-Z0-9_]/g, ' ').replace(/\s\s+/g, ' ').toString().split(' ').join('-');
        if (url.charAt(0) === '-')
            url = url.substring(1);
        if (url.charAt(url.length - 1) === '-')
            url = url.substring(0, url.length - 1);
        return url;
    };
    BuilderService.prototype.debounce = function (func, wait) {
        var timeout;
        return function () {
            var context = this;
            var later = function () {
                timeout = null;
                func.apply(context);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    BuilderService.prototype.saveAppSetting = function (app) {
        return this._http.post(this._url + '/builder/save_app_setting', app, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.saveCalcEmail = function (data) {
        return this._http.post(this._url + '/builder/save_calc_email', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService.prototype.calcEmail = function (data) {
        return this._http.post(this._url + '/builder/calc_email', data, this.post_options())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BuilderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BuilderService);
    return BuilderService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CustomValidator; });
//TODO  calcNameTaken function deleted for purpose
var CustomValidator = (function () {
    function CustomValidator() {
    }
    CustomValidator.emailFormat = function (Control) {
        var EMAIL_REGEX = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        if (!EMAIL_REGEX.test(Control.value)) {
            return { 'EmailError': true };
        }
        return null;
    };
    //start phone validation
    CustomValidator.phoneNumer = function (Control) {
        // var PhoneFormat =  /^(?:\+?1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var PhoneFormat = /^(?:\(?\+?([0-9]{1,3})\)?[-. ]?)?\(?([0-9]{1,3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2,6})$/;
        if (!PhoneFormat.test(Control.value)) {
            return { 'PhoneNumberError': true };
        }
        return null;
    };
    CustomValidator.checkboxRequired = function (question) {
        return function (group) {
            var valid = false;
            for (var name in group.controls) {
                var val = group.controls[name].value;
                if (val) {
                    valid = true;
                    break;
                }
            }
            for (var _i = 0, _a = question.options; _i < _a.length; _i++) {
                var option = _a[_i];
                if (option.selected) {
                    valid = true;
                    break;
                }
            }
            if (valid) {
                return null;
            }
            return { checkboxRequired: true };
        };
    };
    CustomValidator.minimum = function (min) {
        return function (Control) {
            if (Number(Control.value) < Number(min)) {
                return { 'minval': true };
            }
            return null;
        };
    };
    CustomValidator.maximum = function (max) {
        return function (Control) {
            if (Number(Control.value) > Number(max)) {
                return { 'maxval': true };
            }
            return null;
        };
    };
    return CustomValidator;
}());


/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__ = __webpack_require__(792);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FormulaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormulaService = (function () {
    function FormulaService(jsonBuilderHelper, _analysisService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._analysisService = _analysisService;
    }
    FormulaService.prototype.addCommas = function (nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    };
    FormulaService.prototype.textParser = function (normalText) {
        var finder = normalText.match(/\{(.*?)\}/g);
        var finalText = normalText;
        for (var a in finder) {
            if (finalText != undefined) {
                var val = finalText.indexOf(finder[a]);
                if (finder[a][1] == 'Q') {
                    var quesNumber = finder[a].substring(2, finder[a].length - 1);
                    if (!isNaN(quesNumber)) {
                        var currentQues = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1];
                        var questionLabel = undefined;
                        if (currentQues != undefined) {
                            questionLabel = "Question " + quesNumber;
                            if (currentQues.props.currentLabel != '' && currentQues.props.currentLabel != undefined)
                                questionLabel = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1].props.currentLabel;
                        }
                        if (questionLabel != undefined)
                            finalText = finalText.substring(0, val) + questionLabel + finalText.substring(val + finder[a].length);
                        else
                            finalText = undefined;
                    }
                }
                else if (finder[a][1] == 'R') {
                    var resultNumber = finder[a].substring(2, finder[a].length - 1);
                    if (!isNaN(resultNumber)) {
                        var finalResultValue = this.formulaFunction(resultNumber - 1);
                        if (finalResultValue != undefined)
                            finalText = finalText.substring(0, val) + finalResultValue + finalText.substring(val + finder[a].length);
                        else
                            finalText = undefined;
                    }
                }
            }
        }
        var leadformItem = this.getFirstLeadForm();
        if (finalText && leadformItem) {
            finalText = finalText.replace(/({name}|{email}|{tel}|{others})/g, function (match) {
                var fieldMatched = match.split(/[{}]/)[1];
                for (var field in leadformItem.fields) {
                    var type = (leadformItem.fields[field].type == "lastName") ?
                        "others" : (leadformItem.fields[field].type == 'firstName') ? "name" : leadformItem.fields[field].type;
                    if (type == fieldMatched)
                        return leadformItem.fields[field].value || match;
                }
            });
        }
        if (finalText == undefined)
            return normalText;
        return finalText;
    };
    //	wysiwig List --Start
    FormulaService.prototype.getFirstLeadForm = function () {
        var leadformItem = undefined;
        for (var _i = 0, _a = this.jsonBuilderHelper.getJSONBuilt().pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.type === 'Landing' || page.type === 'Result') {
                for (var _b = 0, _c = page.sections; _b < _c.length; _b++) {
                    var section = _c[_b];
                    for (var _d = 0, _e = section.items; _d < _e.length; _d++) {
                        var item = _e[_d];
                        if (item.type == 'leadform' && item.visible == true) {
                            leadformItem = item;
                        }
                    }
                }
            }
        }
        if (!leadformItem) {
            this.jsonBuilderHelper.updateTemplateQuestionare();
            for (var i = 0; i < this.jsonBuilderHelper.getTemplateQuestionare().length; i++) {
                if (this.jsonBuilderHelper.getTemplateQuestionare()[i].type == 'leadform_question' &&
                    this.jsonBuilderHelper.getTemplateQuestionare()[i].visible == true) {
                    leadformItem = this.jsonBuilderHelper.getTemplateQuestionare()[i];
                    break;
                }
            }
        }
        return leadformItem;
    };
    FormulaService.prototype.allValidVariables = function () {
        var allVariables = [];
        var i;
        var leadformItem = this.getFirstLeadForm();
        if (leadformItem) {
            allVariables.push('');
            for (var field in leadformItem.fields) {
                var type = (leadformItem.fields[field].type == "lastName") ?
                    "others" : (leadformItem.fields[field].type == 'firstName') ? "name" : leadformItem.fields[field].type;
                allVariables.push('{' + type + '}');
            }
        }
        allVariables.push(' ');
        for (i = 0; i < this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion().length; i++)
            allVariables.push('{Q' + (i + 1) + '}');
        allVariables.push('   ');
        for (i = 0; i < this.jsonBuilderHelper.getJSONBuilt().formula.length; i++)
            allVariables.push('{R' + (i + 1) + '}');
        return allVariables;
    };
    FormulaService.prototype.allValidVariablesWysiywigList = function () {
        var allVariables = [];
        var i;
        var leadformItem = this.getFirstLeadForm();
        if (leadformItem) {
            allVariables.push('Lead Details:');
            for (var field in leadformItem.fields) {
                var title = leadformItem.fields[field].placeholder;
                if (title.length > 35)
                    title = title.substr(0, 35) + "...";
                allVariables.push(title + ' : ' + leadformItem.fields[field].value);
            }
        }
        allVariables.push('Answer to:');
        for (i = 0; i < this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion().length; i++) {
            var title = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[i].props.title;
            if (title.length > 35)
                title = title.substr(0, 35) + "...";
            allVariables.push('  Q' + (i + 1) + ': ' + title);
        }
        allVariables.push('Result:');
        for (i = 0; i < this.jsonBuilderHelper.getJSONBuilt().formula.length; i++)
            allVariables.push('  Result ' + (i + 1));
        return allVariables;
    };
    //	wysiwig List --End
    // Checking Questionare Validity After Changes To builder
    FormulaService.prototype.correctAllInvalidQuestions = function (rawFormula, formulaIndex) {
        var currentQuesNumber;
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseFloat(rawFormula[i])))
                    currentQuesNumber += rawFormula[i++];
                var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                //for marking as mandatory
                if (currentQuesObject && (currentQuesObject.type == 'switchbox' || currentQuesObject.type == 'radio_button' ||
                    currentQuesObject.type == 'selectbox' || currentQuesObject.type == 'checkbox' || (currentQuesObject.type == 'textfield' && currentQuesObject.config.type == 'number'))) {
                    if (!currentQuesObject.config.validations.required.status)
                        currentQuesObject.config.validations.required.status = true;
                    var isAnyDefaultSelected = false;
                    for (var option in currentQuesObject.options) {
                        if (currentQuesObject.options[option].defualtselected == true)
                            isAnyDefaultSelected = true;
                    }
                    if (!isAnyDefaultSelected) {
                        currentQuesObject.options[0].defualtselected = true;
                        currentQuesObject.options[0].selected = true;
                    }
                }
            }
        }
        // return errorQuestionString;
    };
    FormulaService.prototype.updateFormulaValidity = function (rawFormula, formulaIndex) {
        var currentQuesNumber;
        var isValid = true;
        for (var i = 0; i < rawFormula.length; i++) {
            if (rawFormula[i] == 'Q') {
                i++;
                currentQuesNumber = '';
                while (!isNaN(parseFloat(rawFormula[i])))
                    currentQuesNumber += rawFormula[i++];
                var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                if (currentQuesObject) {
                    if ((currentQuesObject.type == 'switchbox' || currentQuesObject.type == 'radio_button' ||
                        currentQuesObject.type == 'selectbox' || currentQuesObject.type == 'checkbox' || (currentQuesObject.type == 'textfield' && currentQuesObject.config.type == 'number'))) {
                        var isAnyDefaultSelected = false;
                        for (var option in currentQuesObject.options) {
                            if (currentQuesObject.options[option].defualtselected == true)
                                isAnyDefaultSelected = true;
                        }
                        if (currentQuesObject.config.validations.required.status || isAnyDefaultSelected) { }
                        else
                            isValid = false;
                    }
                }
                else
                    isValid = false;
            }
        }
        this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].isValid = isValid;
    };
    FormulaService.prototype.getAllInvalidFormulas = function () {
        var areAllFormulasValid = true;
        var allInvalidFormulas = '';
        for (var formula in this.jsonBuilderHelper.getJSONBuilt().formula) {
            this.updateFormulaValidity(this.jsonBuilderHelper.getJSONBuilt().formula[formula].result, formula);
            if (!this.jsonBuilderHelper.getJSONBuilt().formula[formula].isValid) {
                areAllFormulasValid = false;
                allInvalidFormulas += 'Result ' + (parseFloat(formula) + 1) + ',';
            }
        }
        if (areAllFormulasValid)
            return undefined;
        else {
            allInvalidFormulas = allInvalidFormulas.slice(0, -1);
            return allInvalidFormulas;
        }
    };
    FormulaService.prototype.checkIfFormulaWouldGiveSyntaxError = function () {
        var allFormulas = this.jsonBuilderHelper.getJSONBuilt().formula;
        var errorResultList = '';
        for (var formula in allFormulas) {
            var rawFormula = allFormulas[formula].result;
            for (var i = 0; i < rawFormula.length; i++) {
                if (rawFormula[i] == 'Q') {
                    i++;
                    var currentQuesNumber = '';
                    while (!isNaN(parseFloat(rawFormula[i])))
                        currentQuesNumber += rawFormula[i++];
                    var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                    if (!currentQuesObject || ((currentQuesObject.type == 'textfield' && (currentQuesObject.config.type == 'text' || currentQuesObject.config.type == 'email'))
                        || currentQuesObject.type == 'text-area')) {
                        errorResultList += 'Result ' + (parseFloat(formula) + 1) + ',';
                        break;
                    }
                }
            }
        }
        errorResultList = errorResultList.slice(0, -1);
        return errorResultList;
    };
    FormulaService.prototype.checkIfResultsAreRight = function () {
        var allFormulas = this.jsonBuilderHelper.getJSONBuilt().formula;
        var errorResultList = '';
        for (var formula in allFormulas) {
            var rawFormula = allFormulas[formula].result;
            for (var i = 0; i < rawFormula.length; i++) {
                if (rawFormula[i] == 'Q') {
                    i++;
                    var currentQuesNumber = '';
                    while (!isNaN(parseFloat(rawFormula[i])))
                        currentQuesNumber += rawFormula[i++];
                    var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[currentQuesNumber - 1];
                    if ((currentQuesObject.type == 'textfield' && (currentQuesObject.config.type == 'text' || currentQuesObject.config.type == 'email'))
                        || currentQuesObject.type == 'text-area') {
                        errorResultList += 'Result ' + (parseFloat(formula) + 1) + ',';
                        break;
                    }
                }
            }
        }
        errorResultList = errorResultList.slice(0, -1);
        return errorResultList;
    };
    FormulaService.prototype.formulaFunction = function (formulaIndex) {
        var finalAnswer;
        if (!this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex]) {
            return undefined;
        }
        var formula = this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].result;
        var value = this.createFinalQuestionString(formula.replace(/\s/g, '')
            .replace(/,/g, '').replace(/x/g, '*'));
        try {
            finalAnswer = math.eval(value);
        }
        catch (e) {
            finalAnswer = 0;
        }
        if (finalAnswer == undefined)
            finalAnswer = '{R' + (parseFloat(formulaIndex) + 1) + '}';
        var quesNowObject = this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex];
        var lower, upper;
        if (quesNowObject.range.status) {
            var lowerVal = parseFloat(quesNowObject.range.lower.value);
            var upperVal = parseFloat(quesNowObject.range.higher.value);
            if (isNaN(lowerVal))
                lowerVal = 0;
            if (isNaN(upperVal))
                upperVal = 0;
            if (isNaN(parseFloat(finalAnswer))) {
                finalAnswer = 0;
            }
            else {
                if (quesNowObject.range.higher.type == 'Number' && quesNowObject.range.lower.type == 'Number') {
                    lower = (parseFloat(finalAnswer) - lowerVal);
                    upper = (parseFloat(finalAnswer) + upperVal);
                    lower = this.addCommas(lower.toFixed(Number(quesNowObject.decimal)));
                    upper = this.addCommas(upper.toFixed(Number(quesNowObject.decimal)));
                    finalAnswer = lower + ' to ' + upper;
                }
                else if (quesNowObject.range.higher.type == 'Percentage' && quesNowObject.range.lower.type == 'Percentage') {
                    lower = (parseFloat(finalAnswer) - (lowerVal / 100) * (parseFloat(finalAnswer)));
                    upper = (parseFloat(finalAnswer) + (upperVal / 100) * (parseFloat(finalAnswer)));
                    if (isNaN(upperVal))
                        upper = parseFloat(finalAnswer);
                    if (isNaN(lowerVal))
                        lower = parseFloat(finalAnswer);
                    lower = this.addCommas(lower.toFixed(Number(quesNowObject.decimal)));
                    upper = this.addCommas(upper.toFixed(Number(quesNowObject.decimal)));
                    finalAnswer = lower + ' to ' + upper;
                }
            }
        }
        else {
            if (isNaN(parseFloat(finalAnswer))) {
                if (finalAnswer == undefined)
                    finalAnswer = 0;
            }
            else {
                finalAnswer = Number(finalAnswer);
                finalAnswer = this.addCommas(finalAnswer.toFixed(Number(quesNowObject.decimal)));
                if (quesNowObject.units.postfix) {
                    finalAnswer = finalAnswer + quesNowObject.units.postValue;
                }
                if (quesNowObject.units.prefix) {
                    finalAnswer = quesNowObject.units.preValue + finalAnswer;
                }
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value != finalAnswer) {
            this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value = finalAnswer;
            if (this._analysisService.getVisitorKey() && this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
                if (this.sub)
                    this.sub.unsubscribe();
                this.sub = this._analysisService.saveResult(this.jsonBuilderHelper.getJSONBuilt()._id, this.jsonBuilderHelper.getJSONBuilt().formula)
                    .subscribe(function (response) {
                }, function (error) {
                    console.log(error);
                });
            }
        }
        this.jsonBuilderHelper.getJSONBuilt().formula[formulaIndex].value = finalAnswer;
        if (isNaN(parseFloat(lower)) && isNaN(parseFloat(upper))) { }
        else {
            if (quesNowObject.units.postfix) {
                lower = lower + quesNowObject.units.postValue;
                upper = upper + quesNowObject.units.postValue;
            }
            if (quesNowObject.units.prefix) {
                lower = quesNowObject.units.preValue + lower;
                upper = quesNowObject.units.preValue + upper;
            }
            finalAnswer = lower + ' to ' + upper;
        }
        return finalAnswer;
    };
    FormulaService.prototype.createFinalQuestionString = function (genericQuestion) {
        var currentQuesNumber, j;
        for (var i = 0; i < genericQuestion.length; i++) {
            if (genericQuestion[i] == 'Q') {
                j = ++i;
                currentQuesNumber = '';
                while (!isNaN(parseFloat(genericQuestion[i])))
                    currentQuesNumber += genericQuestion[i++];
                genericQuestion = genericQuestion.substring(0, j - 1) +
                    this.getValueOfQuestionNumber(currentQuesNumber) +
                    genericQuestion.substring(i);
                i = j - 1 + this.getValueOfQuestionNumber(currentQuesNumber).toString().length;
            }
        }
        return genericQuestion;
    };
    FormulaService.prototype.getValueOfQuestionNumber = function (quesNumber) {
        this.jsonBuilderHelper.updateTemplateQuestionare();
        var currentQuesObject = this.jsonBuilderHelper.getTemplateQuestionareWithEmittedLeadFormQuestion()[quesNumber - 1];
        if (currentQuesObject) {
            var currentValue = parseFloat(currentQuesObject.props.currentValue);
            if (isNaN(currentValue) || currentValue == null || currentValue == undefined)
                currentValue = 0;
            return currentValue;
        }
        else {
            return 0;
        }
    };
    FormulaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__templates_services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object])
    ], FormulaService);
    return FormulaService;
    var _a, _b;
}());


/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UrlShortner; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UrlShortner = (function (_super) {
    __extends(UrlShortner, _super);
    function UrlShortner(_http) {
        _super.call(this);
        this._http = _http;
        this.shortUrl = '';
    }
    UrlShortner.prototype.googleShortner = function (longUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var body = { longUrl: longUrl };
        return this._http.post('https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS&key=AIzaSyAyEiPl1ZWGqIjhCb4hPz34HgwLS_G9zZk', body, headers)
            .map(function (res) { return res.json(); });
    };
    UrlShortner = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UrlShortner);
    return UrlShortner;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__shared_services_base_service__["a" /* BaseService */]));


/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__itemNames_store__ = __webpack_require__(809);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Item; });

var Item = (function () {
    function Item(type, title, helpText, placeholder, defaultClass, minVal, maxVal) {
        this._id = '';
        this.order = 0;
        this.type = '';
        this.name = '';
        this.visible = true;
        this.isIconPresent = false;
        this.defaultClass = '';
        this.formulaIndex = '';
        this.imageVisible = false;
        this.optionImageVisible = false;
        this.imageURL = 'https://cdn.filestackcontent.com/ueNrjSMReChnz2Ohiqwg';
        this.props = {
            title: '',
            postTitle: '',
            currentValue: '',
            currentLabel: '',
            defaultValue: '',
            helpText: '',
            minVal: 10,
            maxVal: 500,
            steps: 1,
            scale: false,
            unit: '',
            postfix: false
        };
        this.config = {
            type: 'text',
            showHelp: false,
            showControl: '',
            attr: {
                class: '',
                style: '',
                width: '',
                height: '',
            },
            validations: {
                required: {
                    status: false,
                    message: 'This question is mandatory'
                },
                minLength: {
                    status: false
                },
                maxLength: {
                    status: false
                }
            },
            maxSelections: '',
            direction: '',
            placeholder: 'Default Placeholder'
        };
        this.options = [
            {
                type: '',
                label: 'Option',
                value: 0,
                selected: false,
                defualtselected: false,
                icon: '',
                previousIcons: [],
                imageURL: 'https://cdn.filestackcontent.com/ueNrjSMReChnz2Ohiqwg',
                attr: {
                    class: '',
                    style: '',
                }
            }
        ];
        this.fields = [
            {
                type: 'firstName',
                name: 'Name',
                placeholder: 'Name',
                value: '',
                validations: {
                    required: {
                        status: true,
                        message: 'Field is Required'
                    },
                    minLength: {
                        status: false
                    },
                    maxLength: {
                        status: false
                    }
                },
                icon: '',
                attr: {
                    class: '',
                    style: '',
                }
            },
            {
                type: 'email',
                name: 'Email',
                placeholder: 'Email Address',
                value: '',
                validations: {
                    required: {
                        status: true,
                        message: 'Field is Required'
                    },
                    minLength: {
                        status: false
                    },
                    maxLength: {
                        status: false
                    }
                },
                icon: '',
                attr: {
                    class: '',
                    style: '',
                }
            }
        ];
        //generate unique id on creation
        this._id = 'q_' + Math.floor(Math.random() * (100000 - 2 + 1)) + 2;
        //do rest stuff
        this.type = type;
        this.props.title = title || '';
        this.props.helpText = helpText || '';
        this.config.placeholder = placeholder || this.config.placeholder;
        this.defaultClass = defaultClass || this.defaultClass;
        this.order = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
        this.props.minVal = minVal || 10;
        this.props.maxVal = maxVal || 500;
        //auto assign names on item creation based oon type
        this.name = __WEBPACK_IMPORTED_MODULE_0__itemNames_store__["a" /* ITEMS */][type];
    }
    Item.prototype.setItemType = function (type) {
        this.type = type;
    };
    Item.prototype.setFormulaIndex = function (index) {
        this.formulaIndex = index;
    };
    Item.prototype.setVisibility = function (visible) {
        this.visible = visible;
    };
    Item.prototype.setTitle = function (title) {
        this.props.title = title;
    };
    Item.prototype.setPostTitle = function (postTitle) {
        this.props.postTitle = postTitle;
    };
    Item.prototype.setHelptext = function (helpText) {
        this.props.helpText = helpText;
    };
    Item.prototype.setPlaceHolder = function (placeholder) {
        this.config.placeholder = placeholder;
    };
    Item.prototype.setOptions = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i - 0] = arguments[_i];
        }
        for (var option in options)
            this.options.push(options[option]);
    };
    Item.prototype.getField = function () {
        return JSON.parse(JSON.stringify(this.fields[0]));
    };
    Item.prototype.getOption = function () {
        return this.options[0];
    };
    Item.prototype.addFieldToCheckbox = function (addOptions) {
        var defaultOption = this.options[0];
        this.options = [];
        for (var option in addOptions) {
            defaultOption.label = addOptions[option].label;
            defaultOption.icon = addOptions[option].icon;
            defaultOption.value = addOptions[option]['value'] ? addOptions[option].value : Number(option) + 1;
            this.options.push(Object.assign({}, defaultOption));
        }
    };
    Item.prototype.addLinksToFooter = function (addLinks) {
        var defaultOption = this.options[0];
        // let defaultOption = this.options[0];
        this.options = [];
        for (var option in addLinks) {
            defaultOption.label = addLinks[option].label;
            defaultOption.value = addLinks[option].value;
            this.options.push(Object.assign({}, defaultOption));
        }
    };
    Item.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                if (prop === 'options' && input[prop].length < 1) {
                    self[prop].splice(0, 1);
                }
                if (prop === 'fields' && input[prop].length < 2) {
                    self[prop].splice(0, 2);
                }
                jQuery.extend(true, self[prop], input[prop]);
            }
            else {
                self[prop] = input[prop];
            }
        }
        return self;
    };
    return Item;
}());


/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_model__ = __webpack_require__(805);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Page; });

var Page = (function () {
    function Page(type, bgImage, bgColor) {
        this._id = '';
        this.description = '';
        this.defaultClass = '';
        this.bgImage = '';
        this.bgImageVisible = true;
        this.bgColor = '';
        this.type = '';
        this.visible = true;
        this.sections = [];
        this.type = type;
        this.bgImage = bgImage;
        this.bgColor = bgColor;
    }
    //add sections to page
    Page.prototype.addSections = function () {
        var sections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sections[_i - 0] = arguments[_i];
        }
        for (var section in sections) {
            sections[section].order = Number(section) + 1;
            if (this.sections.length != 0 && this.sections[this.sections.length - 1].type === 'LeadFormQ') {
                this.sections.splice(this.sections.length - 1, 0, sections[section]);
            }
            else {
                this.sections.push(sections[section]);
            }
        }
    };
    Page.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                for (var section in input[prop]) {
                    self.sections.push(new __WEBPACK_IMPORTED_MODULE_0__section_model__["a" /* Section */]().deserialize(input[prop][section]));
                }
            }
            else
                self[prop] = input[prop];
        }
        return self;
    };
    return Page;
}());


/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_model__ = __webpack_require__(803);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Section; });

var Section = (function () {
    function Section(title, defaultClass, description) {
        this._id = '';
        this.title = 'Title';
        this.description = '';
        this.showDesc = true;
        this.buttonTitle = 'Next';
        this.previousIcons = [];
        this.icon = '';
        this.showIcon = true;
        this.defaultClass = '';
        this.fullWidth = false;
        this.order = '';
        this.visible = true;
        this.type = '';
        this.items = [];
        //generate unique id on creation
        this._id = 's_' + Math.floor(Math.random() * (100000 - 2 + 1)) + 2;
        //do rest of the stuff
        this.type = title;
        if (title === 'LeadForm' || title === 'LeadFormQ') {
            this.title = 'How can we get in touch?';
        }
        else {
            this.title = title;
        }
        this.defaultClass = defaultClass;
        this.description = description;
    }
    //add items to page
    Section.prototype.addItems = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i - 0] = arguments[_i];
        }
        for (var item in items) {
            items[item].order = this.items.length + 1;
            this.items.push(items[item]);
        }
    };
    Section.prototype.setVisibility = function (visible) {
        this.visible = visible;
    };
    Section.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (typeof input[prop] === 'object') {
                for (var item in input[prop]) {
                    self.items.push(new __WEBPACK_IMPORTED_MODULE_0__item_model__["a" /* Item */]().deserialize(input[prop][item]));
                }
            }
            else {
                self[prop] = input[prop];
            }
        }
        return self;
    };
    return Section;
}());


/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_themeColor_directive__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_result_directive__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_htmlprocessor_directive__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__builder_services_UrlShortner_service__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_customValidation__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__control_component__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_modules_shared_module__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_fetchResult_directive__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_recommendation_service__ = __webpack_require__(793);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ControlsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ControlsModule = (function () {
    function ControlsModule() {
    }
    ControlsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__control_component__["a" /* Control */], __WEBPACK_IMPORTED_MODULE_1__controls__["a" /* CONTROLS */],
                __WEBPACK_IMPORTED_MODULE_10__components_fetchResult_directive__["a" /* FetchResult */],
                __WEBPACK_IMPORTED_MODULE_2__components_themeColor_directive__["a" /* ThemeColor */], __WEBPACK_IMPORTED_MODULE_4__components_htmlprocessor_directive__["a" /* HtmlProcessor */], __WEBPACK_IMPORTED_MODULE_3__components_result_directive__["a" /* Result */]],
            imports: [__WEBPACK_IMPORTED_MODULE_9__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__controls__["a" /* CONTROLS */], __WEBPACK_IMPORTED_MODULE_8__control_component__["a" /* Control */], __WEBPACK_IMPORTED_MODULE_10__components_fetchResult_directive__["a" /* FetchResult */], __WEBPACK_IMPORTED_MODULE_11__pipes_pipes_module__["a" /* PipesModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__builder_services_JSONBuilder_service__["a" /* JSONBuilder */], __WEBPACK_IMPORTED_MODULE_6__builder_services_UrlShortner_service__["a" /* UrlShortner */], __WEBPACK_IMPORTED_MODULE_7__services_customValidation__["a" /* CustomValidator */], __WEBPACK_IMPORTED_MODULE_12__services_recommendation_service__["a" /* RecommendationService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ControlsModule);
    return ControlsModule;
}());


/***/ },

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CalcEmail; });
var CalcEmail = (function () {
    function CalcEmail(data) {
        this._id = '';
        this.app = '';
        this.type = 'Finish';
        this.email = 'team@videoagency.com';
        this.subject = 'Your Video Production Estimate';
        this.message = "\n      <p>Hello!</p>\n      <p> Thank you for using our video production cost calculator. Just so you know, your estimate came to approximately $40,000 (and $30,000 if you go with a slightly lower production quality). </p>\n      <p> If you have any further questions, feel free email us :) </p>\n      <p> Thank You</p>";
        this.sendEmail = false;
        var self = this;
        for (var prop in data) {
            self[prop] = data[prop] || self[prop];
        }
    }
    return CalcEmail;
}());


/***/ },

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RECOMMENDED_ITEMS; });
var ITEMS = {
    textfield: 'Text Input',
    //selectbox: 'Drop Down',
    checkbox: 'Multi Select',
    radio_button: 'Single Select',
    slider: 'Numeric Slider'
};
var RECOMMENDED_ITEMS = {
    radio_button: 'Single Select',
    checkbox: 'Multi Select',
    //selectbox: 'Drop Down',
    textfield: 'Text Input',
};


/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_model__ = __webpack_require__(804);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return App; });

var App = (function () {
    function App() {
        this._id = '';
        this.company = '';
        this.name = '';
        this.templateType = 'Numerical';
        this.title = 'Outgrow';
        this.ga = '';
        this.favicon = '';
        this.description = 'Default Meta Description';
        this.public = true;
        this.visible = true;
        this.poweredby = true;
        this.realTime = false;
        this.realTimeHeading = 'Result Heading goes here';
        this.themeColor = 'cp1';
        this.template = '';
        this.formula = [];
        this.url = '';
        this.navigate_Url = 'https://outgrow.co';
        this.mode = 'PRIVATE';
        this.status = 'DEV';
        this.changed = true;
        this.liveApp = '';
        this.embedTitle = 'Get Started';
        this.embedBgColor = '#fb545b';
        this.embedTextColor = '#ffffff';
        this.embedLinkColor = '#fb545b';
        this.pages = [];
        // code
    }
    //add a page
    App.prototype.addPages = function () {
        var pages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pages[_i - 0] = arguments[_i];
        }
        for (var page in pages)
            this.pages.push(pages[page]);
    };
    App.prototype.setThemeColor = function (color) {
        this.themeColor = color;
    };
    App.prototype.setUrl = function (url) {
        this.url = url;
    };
    App.prototype.setName = function (appName) {
        this.name = appName;
    };
    App.prototype.setTemplateName = function (tempName) {
        this.template = tempName;
    };
    App.prototype.setTemplateType = function (temp_type) {
        this.templateType = temp_type;
    };
    App.prototype.setNavigateUrl = function (nav_url) {
        this.navigate_Url = nav_url;
    };
    App.prototype.setCompany = function (id) {
        this.company = id;
    };
    App.prototype.addformula = function (name, value, result, html, heading, textCTA, href, range) {
        /*  -- In recomended calc ---
            name -> subheading
            value -> value
            result -> imagepath
            html -> description
            decimal -> Heading
            unit-prevalue -> CTA html
            unit-postvalue -> CTA href
            range-status -> img show or hide
        */
        var formula_name = (name) ? name : '';
        var formula_value = (value) ? value : '';
        var formula_result = (result) ? result : '';
        var formula_html = (html) ? html : '';
        var formula_decimal = (heading) ? heading : '0';
        var formula_pre = (textCTA) ? textCTA : '';
        var formula_post = (href) ? href : '';
        var rangeStatus = (range) ? true : false;
        this.formula.push({
            name: formula_name,
            html: formula_html,
            result: formula_result,
            decimal: formula_decimal,
            isValid: true,
            value: formula_value,
            units: {
                prefix: true,
                preValue: formula_pre,
                postfix: true,
                postValue: formula_post
            },
            range: {
                status: rangeStatus,
                lower: {
                    type: 'Number',
                    value: 0.0
                },
                higher: {
                    type: 'Number',
                    value: 0.0
                }
            }
        });
        // let html: string = this.formula[this.formula.length - 1].html;
        // this.formula[this.formula.length - 1].html = html.replace('/{R[0-9]}/gi', '{R' + (this.formula.length - 1) + '}');
        return this.formula.length - 1;
    };
    App.prototype.deserialize = function (input) {
        var self = this;
        for (var prop in input) {
            if (prop === 'pages') {
                for (var page in input[prop]) {
                    self.pages.push(new __WEBPACK_IMPORTED_MODULE_0__page_model__["a" /* Page */]().deserialize(input[prop][page]));
                }
            }
            else
                self[prop] = input[prop];
        }
        return self;
    };
    return App;
}());


/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(797);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FetchResult; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchResult = (function () {
    function FetchResult(el, jsonBuilderHelper, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        this.ele = el.nativeElement;
    }
    FetchResult.prototype.ngDoCheck = function () {
        this.ele.innerHTML = this.formulaService.formulaFunction(this.formulaIndex);
    };
    FetchResult.prototype.ngOnInit = function () {
        this.formulaService.formulaFunction(this.formulaIndex);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('fetch-result'), 
        __metadata('design:type', Object)
    ], FetchResult.prototype, "formulaIndex", void 0);
    FetchResult = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[fetch-result]',
            providers: [__WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */]) === 'function' && _c) || Object])
    ], FetchResult);
    return FetchResult;
    var _a, _b, _c;
}());


/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__ = __webpack_require__(797);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HtmlProcessor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HtmlProcessor = (function () {
    function HtmlProcessor(el, jsonBuilderHelper, formulaService) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.formulaService = formulaService;
        this.ele = el.nativeElement;
    }
    HtmlProcessor.prototype.ngDoCheck = function () {
        var tempHtml = this.formulaService.textParser(this.html);
        if (this.ele.innerHTML != tempHtml) {
            this.ele.innerHTML = this.formulaService.textParser(this.html);
        }
    };
    HtmlProcessor.prototype.ngOnInit = function () {
        this.ele.innerHTML = this.formulaService.textParser(this.html);
        //console.log("check",this.ele.innerHTML);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('htmlProcess'), 
        __metadata('design:type', Object)
    ], HtmlProcessor.prototype, "html", void 0);
    HtmlProcessor = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[htmlProcess]',
            providers: [__WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_formula_service__["a" /* FormulaService */]) === 'function' && _c) || Object])
    ], HtmlProcessor);
    return HtmlProcessor;
    var _a, _b, _c;
}());


/***/ },

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Result; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Result = (function () {
    function Result(el, jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.ele = el.nativeElement;
    }
    Result.prototype.ngOnInit = function () {
        var _this = this;
        var dataText = this.result.props.title;
        /* parse Q values /*/
        dataText = this.result.props.title.replace(/({Q[\d]+})/g, function (match) {
            var qIndex = Number(match.split(/[{Q}]/)[2]);
            return _this.result.stats[qIndex - 1].value || match;
        });
        /* parse R values */
        dataText = this.result.props.title.replace(/({R[\d]+})/g, function (match) {
            var qIndex = Number(match.split(/[{R}]/)[2]);
            var resultObj = _this.result.result[qIndex - 1];
            var resultValue = (resultObj.postfix == 'false') ? (resultObj.unit + '' + resultObj.value) : (resultObj.value + '' + resultObj.unit);
            return resultValue || match;
        });
        this.ele.innerHTML = dataText;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('result'), 
        __metadata('design:type', Object)
    ], Result.prototype, "result", void 0);
    Result = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[result]',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], Result);
    return Result;
    var _a, _b;
}());


/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ThemeColor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeColor = (function () {
    function ThemeColor(el, jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.colors = ['#61bd6d', '#1abc9c', '#54acd2', '#2c82c9', '#9365b8', '#475577', '#cccccc',
            '#41a85f', '#00a885', '#3d8eb9', '#2969b0', '#553982', '#28324e', '#000000', '#f7da64', '#fba026',
            '#eb6b56', '#e25041', '#a38f84', '#efefef', '#ffffff', '#fac51c', '#f37934', '#d14841', '#b8312f',
            '#7c706b', '#d1d5d8', '#00aea5'];
        this.ele = el.nativeElement;
    }
    ThemeColor.prototype.ngOnInit = function () {
        this.ngDoCheck();
    };
    ThemeColor.prototype.ngDoCheck = function () {
        var color = this.jsonBuilderHelper.getJSONBuilt().themeColor;
        for (var _i = 0, _a = this.themeColor; _i < _a.length; _i++) {
            var atrribute = _a[_i];
            switch (atrribute) {
                case 'background':
                    this.ele.style.backgroundColor = color;
                    break;
                case 'border':
                    this.ele.style.borderColor = color;
                    break;
                case 'colorClass':
                    this.addColorClass(color);
                    break;
                default:
                    this.ele.style.color = color;
                    break;
            }
        }
    };
    ThemeColor.prototype.addColorClass = function (color) {
        var colorIndex = (this.colors.indexOf(color) + 1);
        var element = jQuery(this.ele);
        var colorClass = 'tc' + colorIndex;
        if ((colorIndex !== 0 && this.colorClass != colorClass) || element.hasClass('w100')) {
            element
                .removeClass(function (index, css) {
                return (css.match(/(^|\s)tc\S+/g) || []).join(' ');
            })
                .addClass(colorClass);
            this.colorClass = colorClass;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])('themeColor'), 
        __metadata('design:type', Object)
    ], ThemeColor.prototype, "themeColor", void 0);
    ThemeColor = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
            selector: '[themeColor]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], ThemeColor);
    return ThemeColor;
    var _a, _b;
}());


/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Button; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Button = (function () {
    function Button() {
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    Button.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Button.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], Button.prototype, "controlOutput", void 0);
    Button = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'click-button',
            template: "\n\t\t\t <div class=\"text-center\" *ngIf=\"data.visible\">\n\t\t\t\t<div>\n\t\t\t\t\t<button class=\"btn prime-action  next-step sliding-next \"\n\t\t\t\t\t\t(click)=\"controlOutput.emit($event)\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{data.props.title}}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Button);
    return Button;
}());


/***/ },

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(793);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checkbox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Checkbox = (function () {
    function Checkbox(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.isIconPresent = false;
        this.touched = false;
    }
    Checkbox.prototype.ngOnInit = function () {
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var iconCheck in this.data.options) {
            this.data.options[iconCheck].selected = this.data.options[iconCheck].defualtselected;
            /* check for default to set current value */
            if (this.data.options[iconCheck].selected == true) {
                this.form.controls[this.data._id].markAsDirty();
                this.data.props.currentValue = parseFloat(this.data.options[iconCheck].value) + parseFloat(this.data.props.currentValue);
                this.data.props.currentLabel = this.data.options[iconCheck].currentLabel + ',' + this.data.props.currentLabel;
            }
            if (this.data.options[iconCheck].icon !== '') {
                this.data.isIconPresent = true;
            }
        }
    };
    Checkbox.prototype.onChange = function (event, index) {
        var _this = this;
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var option in this.data.options) {
            if (option == index)
                this.data.options[option].selected = !this.data.options[option].selected;
            if (this.data.options[option].selected == true) {
                this.data.props.currentValue += parseFloat(this.data.options[option].value);
                this.data.props.currentLabel += this.data.options[option].label + ',';
            }
        }
        if (this.data.props.currentLabel != '')
            this.data.props.currentLabel = this.data.props.currentLabel.slice(0, -1);
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.recommendationService.getRecomendedResult();
        }
        this.touched = true;
    };
    Object.defineProperty(Checkbox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Checkbox.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Checkbox.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], Checkbox.prototype, "form", void 0);
    Checkbox = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'checkbox',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(839)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], Checkbox);
    return Checkbox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Control; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Control = (function () {
    function Control() {
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    Control.prototype.ngOnInit = function () { };
    Control.prototype.onControlOutput = function (value) {
        this.controlOutput.emit(value);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Control.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Control.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], Control.prototype, "form", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Control.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], Control.prototype, "controlOutput", void 0);
    Control = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'control',
            template: "\n          <textfield *ngIf=\"data.type=='textfield'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></textfield>\n          <text_area *ngIf=\"data.type=='text-area'\" [data]=\"data\"  ></text_area>\n          <selectbox *ngIf=\"data.type=='selectbox'\" [data]=\"data\" [form]=\"form\" ></selectbox>\n          <radio-button *ngIf=\"data.type=='radio_button'\" [data]=\"data\" [form]=\"form\" (controlOutput)=\"onControlOutput($event)\"></radio-button>\n          <og-header *ngIf=\"data.type=='header'\" [data]=\"data\" ></og-header>\n          <sub_header *ngIf=\"data.type=='sub_header'\" [data]=\"data\" ></sub_header>\n          <click-button *ngIf=\"data.type=='click_button'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" ></click-button>\n      \t\t<logo *ngIf=\"data.type=='logo'\" [data]=\"data\" ></logo>\n          <slider *ngIf=\"data.type=='slider'\" [data]=\"data\" ></slider>\n          <leadform_question *ngIf=\"data.type=='leadform_question'\" [data]=\"data\"\n            (controlOutput)=\"onControlOutput($event)\" ></leadform_question>\n          <leadform *ngIf=\"data.type=='leadform'\" [data]=\"data\" [page]=\"page\"\n           (controlOutput)=\"onControlOutput($event)\" ></leadform>\n          <poweredby *ngIf=\"data.type=='poweredby'\"  [data]=\"data\" ></poweredby>\n          <footer-links *ngIf=\"data.type=='footer_links'\"  [data]=\"data\" ></footer-links>\n          <checkbox *ngIf=\"data.type=='checkbox'\" [data]=\"data\" [form]=\"form\"></checkbox>\n          <switchbox *ngIf=\"data.type=='switchbox'\" [data]=\"data\" [form]=\"form\" ></switchbox>\n          <result_output *ngIf=\"data.type=='result_output'\" [data]=\"data\" ></result_output>\n          <result_header *ngIf=\"data.type=='result_header'\" [data]=\"data\" ></result_header>\n          <share_links *ngIf=\"data.type=='share_links'\"  [data]=\"data\" ></share_links>\n          <result_disclaimer *ngIf=\"data.type=='result_disclaimer'\" [data]=\"data\" ></result_disclaimer>\n          <result_redo *ngIf=\"data.type=='result_redo'\" [data]=\"data\" ></result_redo>\n      ",
        }), 
        __metadata('design:paramtypes', [])
    ], Control);
    return Control;
    var _a;
}());


/***/ },

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textfield_textfield_component__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textarea_textarea_component__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectbox_selectbox_component__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__radiobutton_radiobutton_component__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sub_header_sub_header_component__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_button_component__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_logo_component__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider_component__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leadform_leadform_component__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leadform_question_leadform_question_component__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_poweredby_component__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_links_component__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__switch_switchbox_component__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resultoutput_resultoutput_component__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resultheader_resultheader_component__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sharelinks_sharelinks_component__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resultredo_redo_component__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__resultdisclaimer_resultdisclaimer_component__ = __webpack_require__(826);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CONTROLS; });




















var CONTROLS = [
    __WEBPACK_IMPORTED_MODULE_7__logo_logo_component__["a" /* Logo */],
    __WEBPACK_IMPORTED_MODULE_0__textfield_textfield_component__["a" /* TextField */],
    __WEBPACK_IMPORTED_MODULE_1__textarea_textarea_component__["a" /* TextArea */],
    __WEBPACK_IMPORTED_MODULE_2__selectbox_selectbox_component__["a" /* SelectBox */],
    __WEBPACK_IMPORTED_MODULE_3__radiobutton_radiobutton_component__["a" /* RadioButton */],
    __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* Header */],
    __WEBPACK_IMPORTED_MODULE_5__sub_header_sub_header_component__["a" /* SubHeader */],
    __WEBPACK_IMPORTED_MODULE_6__button_button_component__["a" /* Button */],
    __WEBPACK_IMPORTED_MODULE_8__slider_slider_component__["a" /* Slider */],
    __WEBPACK_IMPORTED_MODULE_9__leadform_leadform_component__["a" /* LeadForm */],
    __WEBPACK_IMPORTED_MODULE_10__leadform_question_leadform_question_component__["a" /* LeadFormQuestion */],
    __WEBPACK_IMPORTED_MODULE_11__footer_poweredby_component__["a" /* PoweredByComponent */],
    __WEBPACK_IMPORTED_MODULE_12__footer_footer_links_component__["a" /* FooterLinksComponent */],
    __WEBPACK_IMPORTED_MODULE_13__checkbox_checkbox_component__["a" /* Checkbox */],
    __WEBPACK_IMPORTED_MODULE_14__switch_switchbox_component__["a" /* SwitchBox */],
    __WEBPACK_IMPORTED_MODULE_15__resultoutput_resultoutput_component__["a" /* ResultOutput */],
    __WEBPACK_IMPORTED_MODULE_16__resultheader_resultheader_component__["a" /* ResultHeader */],
    __WEBPACK_IMPORTED_MODULE_17__sharelinks_sharelinks_component__["a" /* ShareLinks */],
    __WEBPACK_IMPORTED_MODULE_18__resultredo_redo_component__["a" /* RedoComponent */],
    __WEBPACK_IMPORTED_MODULE_19__resultdisclaimer_resultdisclaimer_component__["a" /* ResultDisclaimer */]
];


/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterLinksComponent = (function () {
    function FooterLinksComponent() {
    }
    FooterLinksComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], FooterLinksComponent.prototype, "data", void 0);
    FooterLinksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'footer-links',
            template: "\n    <div class=\" text-left\" *ngIf=\"data.visible == true\" >\n      <ul class=\"footer-nav\">\n        <li  *ngFor=\"let item of data.options;let i=index\">\n          <a href=\"{{item.value}}\">{{ item.label }}</a>\n          <span *ngIf=\"i < data.options.length-1\">-</span>\n        </li>\n      </ul>\n    </div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], FooterLinksComponent);
    return FooterLinksComponent;
}());


/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PoweredByComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoweredByComponent = (function () {
    function PoweredByComponent() {
    }
    PoweredByComponent.prototype.ngOnInit = function () {
        this.url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].PROTOCOL + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].APP_EXTENSION;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], PoweredByComponent.prototype, "data", void 0);
    PoweredByComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'poweredby',
            template: "\n\t\t<div class=\" text-right\" *ngIf=\"data.visible == true\" >\n\t\t\t<div class=\" powered-by\">\n\t\t\t\t<span>Powered by </span>\n\t\t\t\t<a href=\"{{url}}\" target=\"_blank\">\n\t\t\t\t\t\t<img src=\"https://cdn.filestackcontent.com/tqowVp1lQYSVmPLRr8Hu\" alt=\"Powered By\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], PoweredByComponent);
    return PoweredByComponent;
}());


/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Header; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header = (function () {
    function Header() {
    }
    Header.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Header.prototype, "data", void 0);
    Header = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-header',
            template: "\n    <div [innerHtml]=\"data.props.title | safeHtml\" [class]=\"data.defaultClass\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());


/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeadForm; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadForm = (function () {
    function LeadForm(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.obj = {};
    }
    LeadForm.prototype.ngOnInit = function () {
        // console.log("jsonBuilderHelper.getJSONBuilt()",this.page);
    };
    LeadForm.prototype.onTouched = function (i) {
        jQuery('#touched' + this.data._id + i).show();
    };
    LeadForm.prototype.onSubmit = function (form) {
        var _this = this;
        for (var i in this.form.controls) {
            jQuery('#touched' + this.data._id + i).show();
            this.form.controls[i].markAsTouched();
        }
        if (form.valid) {
            this.controlOutput.emit(true);
        }
        for (var _i = 0, _a = this.data.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            this.obj[field.type] = field.value;
        }
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && form['_status'] == 'VALID') {
            //SEND Analytic
            //Ours
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            //Users
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            this._analyticService.saveLead(this.jsonBuilderHelper.getJSONBuilt()._id, this.obj)
                .subscribe(function (response) {
                _this._analyticService.setVisitorKey(response.key);
            }, function (error) {
                console.log(error);
            });
        }
    };
    LeadForm.prototype.formGroup = function () {
        if (!this.form || this.data.fields.length > Object.keys(this.form.controls).length) {
            var group_1 = {};
            this.data.fields.forEach(function (field, index) {
                var validators = [];
                if (field.validations.required.status === true) {
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
                    if (field.type === 'email')
                        validators.push(__WEBPACK_IMPORTED_MODULE_2__services_customValidation__["a" /* CustomValidator */].emailFormat);
                    if (field.type === 'tel')
                        validators.push(__WEBPACK_IMPORTED_MODULE_2__services_customValidation__["a" /* CustomValidator */].phoneNumer);
                }
                // if(field.validations.maxLength.status===true)
                //   validators.push(Validators.maxLength);
                group_1[index] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](field.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose(validators));
            });
            this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group_1);
            return this.form;
        }
        return this.form;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], LeadForm.prototype, "controlOutput", void 0);
    LeadForm = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'leadform',
            template: __webpack_require__(840),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadForm);
    return LeadForm;
    var _a, _b;
}());


/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customValidation__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeadFormQuestion; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadFormQuestion = (function () {
    function LeadFormQuestion(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.obj = {};
    }
    LeadFormQuestion.prototype.ngOnInit = function () { };
    LeadFormQuestion.prototype.onTouched = function (i) {
        jQuery('#touched' + this.data._id + i).show();
    };
    LeadFormQuestion.prototype.onSubmit = function (form) {
        var _this = this;
        for (var i in this.form.controls) {
            jQuery('#touched' + this.data._id + i).show();
            this.form.controls[i].markAsTouched();
        }
        if (form.valid) {
            this.controlOutput.emit(true);
        }
        for (var _i = 0, _a = this.data.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            this.obj[field.type] = field.value;
        }
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE' && form['_status'] == 'VALID') {
            //SEND Analytic
            //Ours
            ga('devteam.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            //Users
            if (this.jsonBuilderHelper.getJSONBuilt().ga)
                ga('userCustom.send', 'event', this.jsonBuilderHelper.getJSONBuilt().name + ' ' + this.jsonBuilderHelper.getOtherVisibleLeadForm() + ' Leadform', 'Submitted', this.jsonBuilderHelper.getJSONBuilt().url);
            this._analyticService.saveLead(this.jsonBuilderHelper.getJSONBuilt()._id, this.obj)
                .subscribe(function (response) {
                _this._analyticService.setVisitorKey(response.key);
                ga('devteam.send', 'pageview', '/' + response.lead);
            }, function (error) {
                console.log(error);
            });
        }
    };
    LeadFormQuestion.prototype.formGroup = function () {
        if (!this.form || this.data.fields.length > Object.keys(this.form.controls).length) {
            var group_1 = {};
            this.data.fields.forEach(function (field, index) {
                var validators = [];
                if (field.validations.required.status === true) {
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
                    if (field.type === 'email')
                        validators.push(__WEBPACK_IMPORTED_MODULE_2__services_customValidation__["a" /* CustomValidator */].emailFormat);
                    if (field.type === 'tel')
                        validators.push(__WEBPACK_IMPORTED_MODULE_2__services_customValidation__["a" /* CustomValidator */].phoneNumer);
                }
                // if(field.validations.maxLength.status===true)
                //   validators.push(Validators.maxLength);
                group_1[index] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](field.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose(validators));
            });
            this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group_1);
            return this.form;
        }
        return this.form;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadFormQuestion.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeadFormQuestion.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], LeadFormQuestion.prototype, "controlOutput", void 0);
    LeadFormQuestion = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'leadform_question',
            template: __webpack_require__(841),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], LeadFormQuestion);
    return LeadFormQuestion;
    var _a, _b;
}());


/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Logo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Logo = (function () {
    function Logo() {
    }
    Logo.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Logo.prototype, "data", void 0);
    Logo = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'logo',
            template: "\n      <header class=\"landing-page-header\" *ngIf=\"data.visible\" >\n        <div class=\" logo\">\n          <a href=\"javascript:void(0);\">\n            <img src=\"{{data.props.title}}\" alt=\"{{data.config.placeholder}}\">\n          </a>\n        </div>\n      </header>\n  ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], Logo);
    return Logo;
}());


/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(793);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RadioButton; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RadioButton = (function () {
    function RadioButton(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.isIconPresent = false;
        this.touched = false;
    }
    RadioButton.prototype.ngOnInit = function () {
        this.data.props.currentLabel = '';
        this.data.props.currentValue = 0;
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var radio_item = _a[_i];
            /* check for default to set current value */
            radio_item.selected = radio_item.defualtselected;
            if (radio_item.selected == true) {
                this.data.props.currentValue = parseFloat(radio_item.value);
                this.data.props.currentLabel = radio_item.label;
            }
            if (radio_item.icon !== '') {
                this.data.isIconPresent = true;
            }
        }
    };
    RadioButton.prototype.onClick = function (radioItem) {
        var _this = this;
        this.data.options = this.data.options.map(function (option) { option.selected = false; return option; });
        radioItem.selected = true;
        this.data.props.currentLabel = radioItem.label;
        this.data.props.currentValue = radioItem.value;
        var self = this;
        setTimeout(function () {
            self.controlOutput.emit(true);
        }, 1000);
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.recommendationService.getRecomendedResult();
        }
    };
    Object.defineProperty(RadioButton.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], RadioButton.prototype, "controlOutput", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], RadioButton.prototype, "form", void 0);
    RadioButton = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'radio-button',
            template: __webpack_require__(842)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], RadioButton);
    return RadioButton;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResultDisclaimer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultDisclaimer = (function () {
    function ResultDisclaimer() {
    }
    ResultDisclaimer.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultDisclaimer.prototype, "data", void 0);
    ResultDisclaimer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'result_disclaimer',
            template: "\t\n\t\t<div [innerHtml]=\"data.props.title | safeHtml\" class=\"disc-set\">\n\t\t</div>\n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], ResultDisclaimer);
    return ResultDisclaimer;
}());


/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResultHeader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultHeader = (function () {
    function ResultHeader() {
    }
    ResultHeader.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultHeader.prototype, "data", void 0);
    ResultHeader = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'result_header',
            template: "\n    <div class=\"mid-width\" [innerHtml]=\"data.props.title | safeHtml\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], ResultHeader);
    return ResultHeader;
}());


/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResultOutput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultOutput = (function () {
    function ResultOutput(jsonBuilderHelper) {
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    ResultOutput.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ResultOutput.prototype, "data", void 0);
    ResultOutput = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'result_output',
            template: __webpack_require__(843),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _a) || Object])
    ], ResultOutput);
    return ResultOutput;
    var _a;
}());


/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RedoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedoComponent = (function () {
    function RedoComponent() {
    }
    RedoComponent.prototype.redoFun = function () {
        window.location.reload(true);
    };
    RedoComponent.prototype.ngAfterViewInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], RedoComponent.prototype, "data", void 0);
    RedoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'result_redo',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: "\n    <div class=\"redo-link\">\n\t\t<ul>\n\t\t    <li><span>|</span></li>\n\t\t\t<li><a  id=\"refresh-button\" (click)=\"redoFun()\"><i class=\"material-icons\">replay</i></a></li>\t\n        </ul>\n\t</div>\n\t\t\t\n"
        }), 
        __metadata('design:paramtypes', [])
    ], RedoComponent);
    return RedoComponent;
}());


/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__ = __webpack_require__(793);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SelectBox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectBox = (function () {
    function SelectBox(_analyticService, jsonBuilderHelper, recommendationService) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.recommendationService = recommendationService;
        this.optionStatus = 0;
        //code
    }
    SelectBox.prototype.ngOnInit = function () {
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.data.props.currentValue = this.data.options[0].value;
        }
        else {
            this.data.props.currentValue = parseFloat(this.data.options[0].value);
        }
        this.data.props.currentLabel = this.data.options[0].label;
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.selected = option.defualtselected;
            /* check for default to set current value */
            if (option.selected == true) {
                if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
                    this.data.props.currentValue = 0;
                if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
                    this.data.props.currentValue = option.value;
                }
                else {
                    this.data.props.currentValue = parseFloat(option.value);
                }
                this.data.props.currentLabel = option.label;
                this.optionStatus = 1;
            }
        }
        if (this.optionStatus == 0 && this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.data.options[0].selected = true;
        }
    };
    SelectBox.prototype.ngAfterViewInit = function () {
        var self = this;
        jQuery('#' + self.data._id).selectize({
            allowEmptyOption: true
        });
        jQuery('#' + self.data._id)[0].selectize.setValue(self.data.props.currentValue);
        jQuery('#' + self.data._id)[0].selectize.on('change', function () {
            var value = jQuery('#' + self.data._id)[0].selectize.getValue();
            for (var option in self.data.options) {
                if (self.data.options[option].value === value) {
                    self.onChange(option);
                    break;
                }
            }
        });
    };
    Object.defineProperty(SelectBox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    SelectBox.prototype.onChange = function (index) {
        var _this = this;
        /* select index in item option */
        for (var radio_itemIndex in this.data.options) {
            if (Number(radio_itemIndex) == index) {
                this.data.options[radio_itemIndex].selected = true;
                this.data.props.currentLabel = this.data.options[radio_itemIndex].label;
            }
            else {
                this.data.options[radio_itemIndex].selected = false;
            }
        }
        if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
            this.data.props.currentValue = 0;
        if (index > -1) {
            this.data.props.currentValue = parseFloat(this.data.options[index].value);
        }
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Recommendation') {
            this.recommendationService.getRecomendedResult();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SelectBox.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SelectBox.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], SelectBox.prototype, "form", void 0);
    SelectBox = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'selectbox',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(844),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_recommendation_service__["a" /* RecommendationService */]) === 'function' && _d) || Object])
    ], SelectBox);
    return SelectBox;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShareLinks; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShareLinks = (function () {
    function ShareLinks(_analyticService, subDomainService, jsonBuilderHelper, _urlShortner) {
        this._analyticService = _analyticService;
        this.subDomainService = subDomainService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this._urlShortner = _urlShortner;
    }
    ShareLinks.prototype.redirectto = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    ShareLinks.prototype.ngOnInit = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical')
            this.title = 'I Got ' + this.jsonBuilderHelper.getJSONBuilt().formula[0].value + '.';
        else
            this.title = 'I Got ' + this.jsonBuilderHelper.getSelectedFormula().name + '.';
        this.resultLink = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        var fbImgUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/seo/' + this.jsonBuilderHelper.getJSONBuilt().url;
        this._urlShortner.googleShortner(fbImgUrl).subscribe(function (body) {
            _this.shortURL = body.id;
        });
        this.mailSrcUrl = 'mailto:?Subject=Calculator Result&Body=' + this.resultLink;
        this.twitterSrcUrl = "https://twitter.com/intent/tweet?status=" + encodeURI(this.title) + "+" + this.resultLink;
        this.linkedInSrcUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + this.resultLink + "&title=" + encodeURI(this.title) + "\n                &summary=" + encodeURI(this.jsonBuilderHelper.getJSONBuilt().description) + "&source=LinkedIn";
        //Initialize FB
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = function () {
            FB.init({
                appId: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].FB_API,
                xfbml: true,
                version: 'v2.7'
            });
        };
    };
    ShareLinks.prototype.updateResultLink = function () {
        // if (!this.devMode) {
        // 	if (this._analyticService.getVisitorKey()) {
        // 		this.resultLink = 'http://' + this.subDomainService.subDomain.sub_domain +
        // 			'.' + Config.APP_EXTENSION + '/result/' +
        // 			this._analyticService.getVisitorKey();
        // 	}
        // }
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().templateType == 'Numerical') {
            this.title = 'I Got ' + this.jsonBuilderHelper.getJSONBuilt().formula[0].value + '.';
        }
        else
            this.title = 'I Got ' + this.jsonBuilderHelper.getSelectedFormula().name + '.';
        this.resultLink = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/' + this.jsonBuilderHelper.getJSONBuilt().url;
        var fbImgUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].PROTOCOL + this.subDomainService.subDomain.sub_domain + '.' + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].APP_EXTENSION + '/seo/' + this.jsonBuilderHelper.getJSONBuilt().url;
        this._urlShortner.googleShortner(fbImgUrl).subscribe(function (body) {
            _this.shortURL = body.id;
        });
        this.mailSrcUrl = 'mailto:?Subject=Calculator Result&Body=' + this.resultLink;
        this.twitterSrcUrl = "https://twitter.com/intent/tweet?status=" + encodeURI(this.title) + "+" + this.resultLink;
        this.linkedInSrcUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + this.resultLink + "&title=" + encodeURI(this.title) + "\n                &summary=" + encodeURI(this.title) + "&source=LinkedIn";
    };
    ShareLinks.prototype.facebookShare = function () {
        this.updateResultLink();
        var image = 'http://process.filestackapi.com/A3ygIw4hISSCdApqW4SAwz/urlscreenshot=delay:3000/' + this.shortURL;
        FB.ui({
            method: 'feed',
            display: 'popup',
            name: this.title,
            //caption: this.title,
            description: this.jsonBuilderHelper.getJSONBuilt().description,
            link: this.resultLink,
            picture: image
        }, function (response) { });
    };
    ShareLinks.prototype.isVisible = function (socialMedia) {
        for (var option in this.data.options) {
            if (this.data.options[option].type == socialMedia) {
                return this.data.options[option].selected;
            }
        }
        return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ShareLinks.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], ShareLinks.prototype, "devMode", void 0);
    ShareLinks = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'share_links',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: "\n\t<div class=\"share-link\">\n\t\t<ul>\n\t\t\t<li *ngIf=\"isVisible('facebook')\"><a (click)=\"facebookShare()\"><i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('twitter')\"><a target=\"_blank\" [href]=\"twitterSrcUrl\" ><i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('linkedin')\"><a target=\"_blank\" [href]=\"linkedInSrcUrl\" ><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></a></li>\n\t\t\t<li *ngIf=\"isVisible('email')\"><a target=\"_blank\" [href]=\"mailSrcUrl\" ><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>\n\t\t</ul>\n\t</div>\n",
            providers: [__WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* SubDomainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__builder_services_UrlShortner_service__["a" /* UrlShortner */]) === 'function' && _d) || Object])
    ], ShareLinks);
    return ShareLinks;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Slider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Slider = (function () {
    function Slider(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.tipShow = false;
        this.tipLeftPos = '';
    }
    Slider.prototype.ngOnInit = function () {
        if (this.data.props.defaultValue) {
            this.data.props.currentValue = this.data.props.defaultValue;
            this.value = this.data.props.currentValue;
            if (this.data.props.postfix)
                this.data.props.currentLabel = this.data.props.currentValue + ' ' + this.data.props.unit;
            else
                this.data.props.currentLabel = this.data.props.unit + ' ' + this.data.props.currentValue;
        }
        else {
            this.data.props.currentValue = this.data.props.minVal;
            this.value = this.data.props.currentValue;
            if (this.data.props.postfix)
                this.data.props.currentLabel = this.data.props.currentValue + ' ' + this.data.props.unit;
            else
                this.data.props.currentLabel = this.data.props.unit + ' ' + this.data.props.currentValue;
        }
    };
    Slider.prototype.ngAfterViewInit = function () {
        var that = this;
        var sliderJson = {
            min: this.data.props.minVal,
            max: this.data.props.maxVal,
            step: this.data.props.steps,
            grid: this.data.props.scale,
            from: this.data.props.defaultValue,
            prettify_enabled: true,
            prettify_separator: ',',
            onFinish: function (data) {
                that.data.props.currentValue = data.from;
                if (that.data.props.postfix)
                    that.data.props.currentLabel = data.from + ' ' + that.data.props.unit;
                else
                    that.data.props.currentLabel = that.data.props.unit + ' ' + data.from;
                that.change();
            },
            onUpdate: function (data) {
                that.data.props.currentValue = data.from;
                if (that.data.props.postfix)
                    that.data.props.currentLabel = data.from + ' ' + that.data.props.unit;
                else
                    that.data.props.currentLabel = that.data.props.unit + ' ' + data.from;
            }
        };
        if (this.data.props.postfix) {
            sliderJson["postfix"] = this.data.props.unit;
            sliderJson["prefix"] = '';
        }
        else {
            sliderJson["prefix"] = this.data.props.unit;
            sliderJson["postfix"] = '';
        }
        jQuery('#' + this.data._id).ionRangeSlider(sliderJson);
    };
    Slider.prototype.change = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], Slider.prototype, "devMode", void 0);
    Slider = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'slider',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(845),
            // template:'Hello',
            styles: [
                __webpack_require__(837),
                __webpack_require__(838),
            ],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], Slider);
    return Slider;
    var _a, _b;
}());


/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubHeader; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubHeader = (function () {
    function SubHeader() {
    }
    SubHeader.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SubHeader.prototype, "data", void 0);
    SubHeader = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'sub_header',
            template: "\n    <div [innerHtml]=\"data.props.title | safeHtml\" [class]=\"data.defaultClass\">\n    </div>  \n\t",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None
        }), 
        __metadata('design:paramtypes', [])
    ], SubHeader);
    return SubHeader;
}());


/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SwitchBox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwitchBox = (function () {
    function SwitchBox(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.touched = false;
    }
    SwitchBox.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.data.options; _i < _a.length; _i++) {
            var option = _a[_i];
            option.selected = option.defualtselected;
            /* check for default to set current value */
            if (option.selected == true) {
                if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
                    this.data.props.currentValue = 0;
                if (this.data.props.currentLabel == undefined || this.data.props.currentLabel == '' || this.data.props.currentLabel == null)
                    this.data.props.currentLabel = 0;
                this.data.props.currentLabel = option.label + ',' + this.data.props.currentLabel;
            }
        }
    };
    SwitchBox.prototype.onChange = function (Itemvalue, index) {
        var _this = this;
        if (this.data.props.currentValue == undefined || this.data.props.currentValue == '' || this.data.props.currentValue == null)
            this.data.props.currentValue = 0;
        if (this.data.props.currentLabel == undefined || this.data.props.currentLabel == '' || this.data.props.currentLabel == null)
            this.data.props.currentLabel = '';
        if (this.data.options[index].selected == false) {
            this.data.props.currentValue = parseInt(Itemvalue.value) + parseInt(this.data.props.currentValue);
        }
        else {
            this.data.props.currentValue = parseInt(this.data.props.currentValue) - parseInt(Itemvalue.value);
        }
        for (var switch_itemIndex in this.data.options) {
            if (switch_itemIndex == index) {
                this.data.options[switch_itemIndex].selected = !this.data.options[switch_itemIndex].selected;
            }
        }
        // console.log(Itemvalue);
        this.data.props.currentLabel = '';
        // console.log(this.data.options);
        for (var option in this.data.options) {
            if (this.data.options[option].selected == true) {
                this.data.props.currentLabel += this.data.options[option].label + ',';
            }
        }
        this.data.props.currentLabel = this.data.props.currentLabel.slice(0, -1);
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                .subscribe(function (response) {
                _this._analyticService.setVisitorKey(response);
            }, function (error) {
                console.log(error);
            });
        }
        this.touched = true;
    };
    Object.defineProperty(SwitchBox.prototype, "isValid", {
        get: function () {
            return this.form.controls[this.data._id].valid;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SwitchBox.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], SwitchBox.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], SwitchBox.prototype, "form", void 0);
    SwitchBox = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'switchbox',
            viewProviders: [],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(846),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], SwitchBox);
    return SwitchBox;
    var _a, _b, _c;
}());


/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TextArea; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextArea = (function () {
    function TextArea(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
    }
    TextArea.prototype.ngOnInit = function () {
        this.data.props.currentValue = this.data.props.defaultValue;
        this.data.props.currentLabel = this.data.props.defaultValue;
    };
    TextArea.prototype.onBlur = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.key == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TextArea.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TextArea.prototype, "devMode", void 0);
    TextArea = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'text_area',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: "<div class=\"input-field\"> \n                <textarea  class=\"validate\" (blur)=\"onBlur()\"  [required]=\"data.required\" placeholder=\"{{data.config.placeholder}}\" (change)=\"data.props.currentLabel=data.props.currentValue\" [(ngModel)]=\"data.props.currentValue\" ></textarea>\n                <label for=\"first_name\">{{data.props.title}}</label>\n             </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _b) || Object])
    ], TextArea);
    return TextArea;
    var _a, _b;
}());


/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TextField; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextField = (function () {
    function TextField(_analyticService, jsonBuilderHelper) {
        this._analyticService = _analyticService;
        this.jsonBuilderHelper = jsonBuilderHelper;
        this.controlOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
    }
    TextField.prototype.ngOnInit = function () {
        this.data.props.currentValue = this.data.props.defaultValue;
        this.data.props.currentlabel = this.data.props.defaultValue;
    };
    Object.defineProperty(TextField.prototype, "isValid", {
        get: function () {
            if (this.form.controls[this.data._id].errors) {
                if (this.form.controls[this.data._id].errors['required']) {
                    this.ValidationMessage = this.data.config.validations.required.message + '!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['minval']) {
                    this.ValidationMessage = 'Minimum Required Value is ' + this.data.props.minVal;
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['maxval']) {
                    this.ValidationMessage = "Can't Go beyond " + this.data.props.maxVal + '!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['minlength']) {
                    this.ValidationMessage = 'Minimum ' + this.form.controls[this.data._id].errors['minlength'].requiredLength + ' character required!';
                    return false;
                }
                else if (this.form.controls[this.data._id].errors['EmailError']) {
                    this.ValidationMessage = 'Not A Valid Email!';
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype.keyPressed = function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            this.controlOutput.emit(true);
            e.preventDefault();
            return false;
        }
    };
    TextField.prototype.onBlur = function () {
        var _this = this;
        if (this.jsonBuilderHelper.getJSONBuilt().status == 'LIVE') {
            /* if key is undefined then push in array */
            if (this._analyticService.getVisitorKey() == '')
                this._analyticService.setVisitorAnswers(this.data);
            /*  */
            if (this._analyticService.getVisitorKey()) {
                this._analyticService.saveStats(this.jsonBuilderHelper.getJSONBuilt()._id, this.data)
                    .subscribe(function (response) {
                    _this._analyticService.setVisitorKey(response.key);
                    if (response.status == 'Array Updated')
                        _this._analyticService.reInitVisitorAnswers();
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TextField.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Object)
    ], TextField.prototype, "devMode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]) === 'function' && _a) || Object)
    ], TextField.prototype, "form", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Output */])(), 
        __metadata('design:type', Object)
    ], TextField.prototype, "controlOutput", void 0);
    TextField = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'textfield',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            template: __webpack_require__(847)
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_analytic_service__["a" /* AnalyticService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__builder_services_JSONBuilder_service__["a" /* JSONBuilder */]) === 'function' && _c) || Object])
    ], TextField);
    return TextField;
    var _a, _b, _c;
}());


/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider\r\n// css version 2.0.3\r\n// © 2013-2014 Denis Ineshin | IonDen.com\r\n// ===================================================================================================================*/\r\n\r\n/* =====================================================================================================================\r\n// RangeSlider */\r\n\r\n.irs {\r\n    position: relative; display: block;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n     -khtml-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n    .irs-line {\r\n        position: relative; display: block;\r\n        overflow: hidden;\r\n        outline: none !important;\r\n    }\r\n        .irs-line-left, .irs-line-mid, .irs-line-right {\r\n            position: absolute; display: block;\r\n            top: 0;\r\n        }\r\n        .irs-line-left {\r\n            left: 0; width: 11%;\r\n        }\r\n        .irs-line-mid {\r\n            left: 9%; width: 82%;\r\n        }\r\n        .irs-line-right {\r\n            right: 0; width: 11%;\r\n        }\r\n\r\n    .irs-bar {\r\n        position: absolute; display: block;\r\n        left: 0; width: 0;\r\n    }\r\n        .irs-bar-edge {\r\n            position: absolute; display: block;\r\n            top: 0; left: 0;\r\n        }\r\n\r\n    .irs-shadow {\r\n        position: absolute; display: none;\r\n        left: 0; width: 0;\r\n    }\r\n\r\n    .irs-slider {\r\n        position: absolute; display: block;\r\n        cursor: default;\r\n        z-index: 1;\r\n    }\r\n        .irs-slider.single {\r\n\r\n        }\r\n        .irs-slider.from {\r\n\r\n        }\r\n        .irs-slider.to {\r\n\r\n        }\r\n        .irs-slider.type_last {\r\n            z-index: 2;\r\n        }\r\n\r\n    .irs-min {\r\n        position: absolute; display: block;\r\n        left: 0;\r\n        cursor: default;\r\n    }\r\n    .irs-max {\r\n        position: absolute; display: block;\r\n        right: 0;\r\n        cursor: default;\r\n    }\r\n\r\n    .irs-from, .irs-to, .irs-single {\r\n        position: absolute; display: block;\r\n        top: 0; left: 0;\r\n        cursor: default;\r\n        white-space: nowrap;\r\n    }\r\n\r\n.irs-grid {\r\n    position: absolute; display: none;\r\n    bottom: 0; left: 0;\r\n    width: 100%; height: 20px;\r\n}\r\n.irs-with-grid .irs-grid {\r\n    display: block;\r\n}\r\n    .irs-grid-pol {\r\n        position: absolute;\r\n        top: 0; left: 0;\r\n        width: 1px; height: 8px;\r\n        background: #000;\r\n    }\r\n    .irs-grid-pol.small {\r\n        height: 4px;\r\n    }\r\n    .irs-grid-text {\r\n        position: absolute;\r\n        bottom: 0; left: 0;\r\n        white-space: nowrap;\r\n        text-align: center;\r\n        font-size: 9px; line-height: 9px;\r\n        padding: 0 3px;\r\n        color: #000;\r\n    }\r\n\r\n.irs-disable-mask {\r\n    position: absolute; display: block;\r\n    top: 0; left: -1%;\r\n    width: 102%; height: 100%;\r\n    cursor: default;\r\n    background: rgba(0,0,0,0.0);\r\n    z-index: 2;\r\n}\r\n.irs-disabled {\r\n    opacity: 0.4;\r\n}\r\n.lt-ie9 .irs-disabled {\r\n    filter: alpha(opacity=40);\r\n}\r\n\r\n\r\n.irs-hidden-input {\r\n    position: absolute !important;\r\n    display: block !important;\r\n    top: 0 !important;\r\n    left: 0 !important;\r\n    width: 0 !important;\r\n    height: 0 !important;\r\n    font-size: 0 !important;\r\n    line-height: 0 !important;\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    outline: none !important;\r\n    z-index: -9999 !important;\r\n    background: none !important;\r\n    border-style: solid !important;\r\n    border-color: transparent !important;\r\n}\r\n"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "/* Ion.RangeSlider, Simple Skin\r\n// css version 2.0.3\r\n// © Denis Ineshin, 2014    https://github.com/IonDen\r\n// © guybowden, 2014        https://github.com/guybowden\r\n// ===================================================================================================================*/\r\n\r\n/* =====================================================================================================================\r\n// Skin details */\r\n\r\n.irs {\r\n    height: 55px;\r\n}\r\n.irs-with-grid {\r\n    height: 75px;\r\n}\r\n.irs-line {\r\n    height: 10px; top: 33px;\r\n    background: #EEE;\r\n    background: linear-gradient(to bottom, #DDD -50%, #FFF 150%); /* W3C */\r\n    border: 1px solid #CCC;\r\n    border-radius: 16px;\r\n    -moz-border-radius: 16px;\r\n}\r\n    .irs-line-left {\r\n        height: 8px;\r\n    }\r\n    .irs-line-mid {\r\n        height: 8px;\r\n    }\r\n    .irs-line-right {\r\n        height: 8px;\r\n    }\r\n\r\n.irs-bar {\r\n    height: 10px; top: 33px;\r\n    border-top: 1px solid #428bca;\r\n    border-bottom: 1px solid #428bca;\r\n    background: #428bca;\r\n    background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\r\n}\r\n    .irs-bar-edge {\r\n        height: 10px; top: 33px;\r\n        width: 14px;\r\n        border: 1px solid #428bca;\r\n        border-right: 0;\r\n        background: #428bca;\r\n        background: linear-gradient(to top, rgba(66,139,202,1) 0%,rgba(127,195,232,1) 100%); /* W3C */\r\n        border-radius: 16px 0 0 16px;\r\n        -moz-border-radius: 16px 0 0 16px;\r\n    }\r\n\r\n.irs-shadow {\r\n    height: 2px; top: 38px;\r\n    background: #000;\r\n    opacity: 0.3;\r\n    border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n}\r\n.lt-ie9 .irs-shadow {\r\n    filter: alpha(opacity=30);\r\n}\r\n\r\n.irs-slider {\r\n    top: 25px;\r\n    width: 27px; height: 27px;\r\n    border: 1px solid #AAA;\r\n    background: #DDD;\r\n    background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(220,220,220,1) 20%,rgba(255,255,255,1) 100%); /* W3C */\r\n    border-radius: 27px;\r\n    -moz-border-radius: 27px;\r\n    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);\r\n    cursor: pointer;\r\n}\r\n\r\n.irs-slider.state_hover, .irs-slider:hover {\r\n    background: #FFF;\r\n}\r\n\r\n.irs-min, .irs-max {\r\n    color: #333;\r\n    font-size: 12px; line-height: 1.333;\r\n    text-shadow: none;\r\n    top: 0;\r\n    padding: 1px 14px;\r\n    background: rgba(0,0,0,0.1);\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.lt-ie9 .irs-min, .lt-ie9 .irs-max {\r\n    background: #ccc;\r\n}\r\n\r\n.irs-from {\r\n    color: #fff;\r\n    font-size: 14px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius:8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.irs-to {\r\n    color: #fff;\r\n    font-size: 14px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius:8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n\r\n.irs-single {\r\n    color: #fff;\r\n    font-size: 12px; line-height: 1.333;\r\n    text-shadow: none;\r\n    padding: 1px 14px;\r\n    background: #428bca;\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n}\r\n.lt-ie9 .irs-from, .lt-ie9 .irs-to, .lt-ie9 .irs-single {\r\n    background: #999;\r\n}\r\n\r\n.irs-grid {\r\n    height: 27px;\r\n}\r\n.irs-grid-pol {\r\n    opacity: 0.5;\r\n    background: #428bca;\r\n}\r\n.irs-grid-pol.small {\r\n    background: #999;\r\n}\r\n\r\n.irs-grid-text {\r\n    bottom: 5px;\r\n    color: #99a4ac;\r\n}\r\n\r\n.irs-disabled {\r\n}\r\n"

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div [class.checkbox-outer-base]=\"!data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n       [class.checkbox-outer]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n       [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\r\n       [class.active]=\"checkbox_item.selected\"\r\n       *ngFor=\"let checkbox_item of data.options, let i = index\" tabindex=\"0\"\r\n  >\r\n    <label onclick=\"\" class=\"control control--checkbox\"  [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?checkbox_item.imageURL:'')+')'}\" >\r\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{checkbox_item.label}}</span>\r\n      <input type=\"checkbox\"\r\n             [id]=\"data._id\"\r\n             (change)=\"onChange($event,i)\"\r\n             id=\"{{data._id}}{{i}}\"\r\n             [checked]=\"checkbox_item.selected\"\r\n             [formControlName]=\"i\"\r\n             value=\"{{checkbox_item.value}}\"\r\n      >\r\n      <div class=\"control__indicator check-set\">\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"checkbox_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          {{checkbox_item.icon}}\r\n        </i>\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"checkbox_item.icon == '' && data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          landscape\r\n        </i>\r\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\r\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n          <span class=\"text-overlay\">\r\n            <span>{{checkbox_item.label}}</span>\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched || touched) && !isValid\">\r\n    {{data.config.validations.required.message}}\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\"  *ngIf=\"data.visible\" novalidate>\r\n  <div class=\"container-temp text-center\">\r\n    <div class=\"lead-heading-temp1\" *ngIf=\"page && page.type ==='Result'\">\r\n      {{page.sections[2].title}}\r\n    </div>\r\n    <div>\r\n      <div class=\"input-section\">\r\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\r\n          <input tabindex=\"0\"\r\n                 placeholder=\"{{field.placeholder}}\"\r\n                 type=\"{{field.type}}\"\r\n                 (blur) = \"onTouched(i)\"\r\n                 [formControlName]=\"i\"\r\n                 [(ngModel)]=\"field.value\"\r\n          >\r\n          <div *ngIf=\"formGroup().controls[i].touched\">\r\n                    <span\r\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\r\n                     {{field.placeholder}} is required.\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\r\n                      Not a valid Email!\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\r\n                      Not a valid Phone Number!\r\n                    </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-temp text-center\">\r\n    <button class=\"btn prime-action\"\r\n    >\r\n      <!--[themeColor]=\"['background']\"-->\r\n      {{data.props.title}}\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formGroup())\" [formGroup]=\"formGroup()\" novalidate>\r\n  <div class=\"container-temp text-center\">\r\n    <div class=\" text-center question-section\">\r\n      <div class=\"input-section\">\r\n        <div *ngFor=\"let field of data.fields, let i=index\" class=\"input-outer\" [class.w100]=\"data.fields.length==1\">\r\n          <div class=\"section-head\"> <div class=\"pull-left\">{{field.name}} </div> </div>\r\n          <input tabindex=\"0\"\r\n                 placeholder=\"{{field.placeholder}}\"\r\n                 type=\"{{field.type}}\"\r\n                 (blur) = \"onTouched(i)\"\r\n                 [formControlName]=\"i\"\r\n                 [(ngModel)]=\"field.value\"\r\n          >\r\n          <div *ngIf=\"formGroup().controls[i].touched\">\r\n                    <span\r\n                      *ngIf=\"formGroup().controls[i].errors && formGroup().controls[i].errors['required']\">\r\n                      {{field.placeholder}} is required.\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['EmailError']\">\r\n                      Not a valid Email!\r\n                    </span>\r\n            <span\r\n              *ngIf=\"formGroup().controls[i].errors && !formGroup().controls[i].errors['required'] && formGroup().controls[i].errors['PhoneNumberError']\">\r\n                      Not a valid Phone Number!\r\n                    </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"w100 text-center\">\r\n    <button class=\"btn prime-action sliding-next og-lead-ques\"\r\n    >\r\n      <!--[themeColor]=\"['background']\"-->\r\n      {{data.props.title}}\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<div class=\"check-comp\" [formGroup]=\"form.controls[data._id]\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"radio-outer\" \r\n    [class.active]=\"radio_item.selected\" \r\n    *ngFor=\"let radio_item of data.options, let i = index\" \r\n    tabindex=\"0\"\r\n    [class.pic-selector]=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"\r\n  >\r\n    <label onclick=\"\" class=\"control control--radio lable-style\" [ngStyle]=\"{'background-image': 'url('+((data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card')?radio_item.imageURL:'')+')'}\">\r\n      <span *ngIf=\"!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'\">{{radio_item.label}}</span>\r\n      <input type=\"radio\"\r\n             id=\"{{data._id}}{{i}}\"\r\n             [formControlName]=\"i\"\r\n             [checked]=\"radio_item.selected\"\r\n             (change)=\"onClick(radio_item)\"\r\n      />\r\n      <div class=\"control__indicator icon-set\" [class.icon-set]=\"data.isIconPresent && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\">\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"(radio_item.icon != '' && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card'))\"\r\n        >\r\n          {{radio_item.icon}}\r\n        </i>\r\n        <i\r\n          class=\"material-icons\"\r\n          *ngIf=\"radio_item.icon == '' && data.isIconPresent  && (!data.optionImageVisible || jsonBuilderHelper.getJSONBuilt().template != 'one-page-card')\"\r\n        >\r\n          landscape\r\n        </i>\r\n        <div class=\"label-image\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\"></div>\r\n        <span class=\"img-overlay\" *ngIf=\"data.optionImageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n          <span class=\"text-overlay\">\r\n            <span>{{radio_item.label}}</span>\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </label>\r\n  </div>\r\n  <!-- <span *ngIf=\"form.controls[data._id].touched\">\r\n      <div class=\"errorMessage\" *ngIf=\"!isValid\">{{data.config.validations.required.message}}</div>\r\n  </span> -->\r\n  <div class=\"errorMessage\" *ngIf=\"(form.controls[data._id].touched) && !isValid\">\r\n    {{data.config.validations.required.message}}\r\n  </div>\r\n</div>"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"data.visible == true\">\r\n  <div\r\n\r\n  >\r\n    <div\r\n      class=\"small-top-sec\"\r\n      *ngIf=\"!data.hasOwnProperty('result')\"\r\n      [htmlProcess]=\"data.props.title\"\r\n    >\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-set\">\r\n  <div class=\"control-group select\" [formGroup]=\"form\" tabindex=\"0\">\r\n    <select class=\"demo-default {{data._id}} \" [(ngModel)]=\"data.props.currentValue\" [id]=\"data._id\" (change)=\"onChange($event)\" [formControlName]=\"data._id\">\r\n      <option tabindex=\"0\"\r\n              *ngFor=\"let option of data.options; let i = index\"\r\n              id=\"{{data._id}}{{i}}\"\r\n              [value]=\"option.value\"\r\n              [selected]=\"option.selected\"\r\n      >\r\n        {{option.label}}\r\n      </option>\r\n    </select>\r\n    <div class=\"select__arrow\"></div>\r\n    <div class=\"errorMessage\" *ngIf=\"!form.controls[data._id].pristine && !isValid\">\r\n      {{data.config.validations.required.message}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "<div class=\"slider-set\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"range-slider\">\r\n    <div class=\"well1\" tabindex=\"0\">\r\n      <input id=\"{{data._id}}\" type=\"text\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form.controls[data._id]\">\r\n\t<div class=\"switch-outer text-right\" *ngFor=\"let switch_item of data.options, let i = index\">\r\n\t\t<div class=\"switch-que\">{{switch_item.label}}</div>\r\n\t\t<div class=\"pull-right\">\r\n\t\t\t<div class=\"switch \">\r\n\t\t\t\t<input \r\n\t\t\t\t\ttype=\"checkbox\"\r\n\t\t\t\t\t[id]=\"data._id\"\r\n\t\t\t\t\t[formControlName]=\"i\"\r\n\t\t\t\t\tclass=\"cmn-toggle cmn-toggle-round-flat\"  \r\n\t\t\t\t\tid=\"{{data._id}}{{i}}\"\r\n\t\t\t\t\t[checked]=\"switch_item.selected\"\r\n\t\t\t\t\t(change)=\"onChange(switch_item,i)\"\r\n\t\t\t\t\tplaceholder=\"{{data.config.placeholder}}\" \r\n\t\t\t\t\tvalue=\"{{switch_item.value}}\"\r\n\t\t\t\t>\r\n\t\t\t\t<label attr.for=\"{{data._id}}{{i}}\"></label>\r\n\t\t\t\t\t<!--[themeColor]=\"['background']\"-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">\r\n\t\t{{data.config.validations.required.message}}\r\n\t</div>\r\n</div>"

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <div class=\"question-pic\" *ngIf=\"data.imageVisible && jsonBuilderHelper.getJSONBuilt().template == 'one-page-card'\">\r\n    <img [src]=\"data.imageURL\" />\r\n  </div>\r\n  <div class=\"input-field\">\r\n    <input tabindex=\"0\"\r\n           type=\"{{data.config.type}}\"\r\n           placeholder=\"{{data.config.placeholder}}\"\r\n           [id]=\"data._id\"\r\n           [(ngModel)]=\"data.props.currentValue\"\r\n           (change)=\"data.props.currentLabel=data.props.currentValue\"\r\n           [formControlName]=\"data._id\"\r\n           (blur)=\"onBlur()\"\r\n           (keypress)=\"keyPressed($event)\"\r\n    >\r\n  </div>\r\n  <div class=\"errorMessage\" *ngIf=\"form.controls[data._id].touched && !isValid\">{{ValidationMessage}}</div>\r\n</div>\r\n"

/***/ },

/***/ 879:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_emails__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userCompany__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });


var User = (function () {
    function User(user) {
        var _this = this;
        if (user) {
            this.id = user._id;
            this.updatedAt = user.updatedAt;
            this.createdAt = user.createdAt;
            this.username = user.username;
            this.timezone = user.timezone;
            this.location = user.location;
            this.phone = user.phone;
            this.role = user.role;
            this.name = user.name;
            this.isLoggedIn = user.isLoggedIn;
            this.password = user.password;
            this.active = user.active;
            this.emails = [];
            var i_1 = 0;
            if (user.emails) {
                user.emails.forEach(function (email) {
                    _this.emails[i_1] = new __WEBPACK_IMPORTED_MODULE_0__models_emails__["a" /* Emails */](email);
                    i_1++;
                });
            }
            this.user_company = new __WEBPACK_IMPORTED_MODULE_1__userCompany__["a" /* UsersCompany */](user.user_company);
        }
    }
    return User;
}());


/***/ },

/***/ 886:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Emails; });
/* unused harmony export Verification */
/* unused harmony export Hash */
var Emails = (function () {
    function Emails(email) {
        if (email) {
            this.updatedAt = email.updatedAt;
            this.createdAt = email.createdAt;
            this.email = email.email;
            this.is_primary = email.is_primary;
            this.verification = new Verification(email.verification);
        }
    }
    return Emails;
}());
var Verification = (function () {
    function Verification(verification) {
        if (verification) {
            this.completed_at = verification.completed_at;
            this.complete = verification.complete;
            this.hash = new Hash(verification.hash);
        }
    }
    return Verification;
}());
var Hash = (function () {
    function Hash(hash) {
        if (hash) {
            this.expire_at = hash.expire_at;
            this.value = hash.value;
        }
    }
    return Hash;
}());


/***/ },

/***/ 917:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_invoice__ = __webpack_require__(947);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InvoiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        //this.getPaymentDetails();
    };
    InvoiceComponent.prototype.getInvoices = function () {
        var self = this;
        self.loadingInvDet = true;
        this._membershipService.getInvoices()
            .subscribe(function (invoices) {
            self.isInvoiceExist = false;
            self.allInvoices = [];
            invoices.list.forEach(function (invoice) {
                self.allInvoices.push(new __WEBPACK_IMPORTED_MODULE_3__shared_models_invoice__["a" /* Invoice */](invoice.invoice));
            });
            if (self.allInvoices.length > 0)
                self.isInvoiceExist = true;
            self.loadingInvDet = false;
        }, function (error) {
            //console.log('get invoice getErrro',error);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-invoice',
            template: __webpack_require__(1099),
            styles: [__webpack_require__(1047)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["h" /* MembershipService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* CompanyService */]) === 'function' && _c) || Object])
    ], InvoiceComponent);
    return InvoiceComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_plans__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_planFeatures__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_estimate__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_helper_service_number_format__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubscriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// declare var LeadDyno: any;
var SubscriptionComponent = (function () {
    function SubscriptionComponent(_membershipService, _planService, fb, _cookieService, _subDomainService) {
        this._membershipService = _membershipService;
        this._planService = _planService;
        this.fb = fb;
        this._cookieService = _cookieService;
        this._subDomainService = _subDomainService;
        this.runningPlanSubscription = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["b" /* Subscriptions */](null);
        this.runningPlanDetail = new __WEBPACK_IMPORTED_MODULE_3__shared_models_plans__["a" /* Plans */](null);
        this.runningPlan = '';
        this.runningPlanCycle = '';
        this.futurePlanSubscription = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["b" /* Subscriptions */](null);
        this.futurePlanDetail = new __WEBPACK_IMPORTED_MODULE_3__shared_models_plans__["a" /* Plans */](null);
        this.allPlansList = [];
        this.viewplansList = [];
        this.viewPlan = 'm';
        this.starterPlanFeatures = [];
        this.businessPlanFeatures = [];
        this.enterprisePlanFeatures = [];
        this.upgradeToPlan = new __WEBPACK_IMPORTED_MODULE_3__shared_models_plans__["a" /* Plans */](null);
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
        this.isChangePlan = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.changeToPlan = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
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
            couponInput: [this.couponCodeModal, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* Validators */].minLength(5)])]
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
        //this.getPlansFeatures();
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
        /*if(subscription_status==='cancelled'){
            this.is_subcripion_cancelled = true;
        }*/
        //console.log('%%%%%%%%%%%%',this.is_subcripion_cancelled,this.is_admin_created,this.userRole);
    };
    SubscriptionComponent.prototype.getPlanSubscription = function () {
        var self = this;
        self.loadingMemDet = true;
        return self._membershipService.getplanSubscription()
            .subscribe(function (success) {
            // console.log('getPlanSubscription',success);
            self.payment_status = success.currentplan.customer.card_status;
            self.runningPlanSubscription = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["b" /* Subscriptions */](success.currentplan.subscription);
            self.runningPlanDetail = new __WEBPACK_IMPORTED_MODULE_3__shared_models_plans__["a" /* Plans */](success.cpDetail.plan);
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
                self.futurePlanSubscription = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["b" /* Subscriptions */](success.futureplan.subscription);
                self.futurePlanDetail = new __WEBPACK_IMPORTED_MODULE_3__shared_models_plans__["a" /* Plans */](success.fpDetail.plan);
            }
            else {
                self.futurePlanSubscription = null;
            }
            self.getViewPlans(self.viewPlan);
            self.loadingMemDet = false;
        }, function (error) {
            //getPlanSubscription.unsubscribe();
            self.loadingMemDet = true;
        });
    };
    SubscriptionComponent.prototype.numberFormat = function (num) {
        return __WEBPACK_IMPORTED_MODULE_6__shared_services_helper_service_number_format__["a" /* NumberFormater */].insertCommas(num);
    };
    SubscriptionComponent.prototype.reActivate = function () {
        var _this = this;
        console.log('#################################');
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
            jQuery('#upgrade-plan-popup').modal('hide');
            setTimeout(function () {
                jQuery('#cc-modal').modal('show');
            }, 1000);
        }
        else {
            jQuery('.btnMakePayment').html('please Wait...').attr('disabled', true);
            var reactivateMembership_1 = this._membershipService.activateNow()
                .subscribe(function (success) {
                window.toastNotification('You have Successfully Reactivated ');
                //this._cookieService.createCookie('filepicker_token_json', JSON.stringify(response.companyAccess), 3);
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
                self.allPlansList.push(new __WEBPACK_IMPORTED_MODULE_3__shared_models_plans__["a" /* Plans */](list.plan));
                if (list.plan.id === 'essentials_m')
                    self.essentials_m = list.plan.price / 100;
                else if (list.plan.id === 'business_m')
                    self.business_m = list.plan.price / 100;
                else if (list.plan.id === 'enterprise_m')
                    self.enterprise_m = list.plan.price / 100;
            });
            self.planFeatures = [];
            success.plans.forEach(function (plan) {
                self.planFeatures.push(new __WEBPACK_IMPORTED_MODULE_4__shared_models_planFeatures__["a" /* PlanFeatures */](plan));
            });
            self.getViewPlans(self.viewPlan);
        }, function (error) {
            //console.log('getAllPlans error',error);
            //getAllPlans.unsubscribe();
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
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');
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
            jQuery('#upgrade-plan-popup').modal('hide');
            setTimeout(function () {
                jQuery('#cc-modal').modal('show');
            }, 1000);
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
            /*==== Tracking code and Lead Dyno Purchase code goes here ====*/
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
            /*let url = window.location.href;
            if(url.toLowerCase().indexOf("outgrow.co") >= 0) {
                let leadDynoData = {
                    purchase_code: 'Tinker',
                    purchase_amount: 0
                };
                if(success.invoice) {
                    leadDynoData.purchase_code = success.invoice.id;
                    leadDynoData.purchase_amount = Math.round(success.invoice.sub_total/100);
                }
                if(this.membershipCancel) {
                    LeadDyno.recordCancellation(success.customer.email);
                }
                else {
                    LeadDyno.recordPurchase(success.customer.email, leadDynoData);
                }
            }*/
            /*==================*/
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
        jQuery('#cancelMembership span').text('Please wait...').attr('disabled', true);
        var cancelMembership = this._membershipService.cancelMembership()
            .subscribe(function (success) {
            jQuery('#cancelMembership span').text('Request Sent');
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
            self.estimation = new __WEBPACK_IMPORTED_MODULE_5__shared_models_estimate__["a" /* Estimate */](success.estimate);
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
        // console.log('clicked');
    };
    SubscriptionComponent.prototype.ngOnChanges = function () {
        this.subs.push(this.getPlanSubscription());
        this.subs.push(this.getAllPlans());
    };
    SubscriptionComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    SubscriptionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-subscription',
            template: __webpack_require__(1102),
            styles: [__webpack_require__(1050)],
            inputs: ['payment_status', 'userRole'],
            outputs: ['isChangePlan', 'changeToPlan']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["h" /* MembershipService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["k" /* PlanService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["k" /* PlanService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* CookieService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["a" /* SubDomainService */]) === 'function' && _e) || Object])
    ], SubscriptionComponent);
    return SubscriptionComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 922:
/***/ function(module, exports) {

module.exports = "/*!\r\n * Hover.css (http://ianlunn.github.io/Hover/)\r\n * Version: 2.0.2\r\n * Author: Ian Lunn @IanLunn\r\n * Author URL: http://ianlunn.co.uk/\r\n * Github: https://github.com/IanLunn/Hover\r\n\r\n * Made available under a MIT License:\r\n * http://www.opensource.org/licenses/mit-license.php\r\n\r\n * Hover.css Copyright Ian Lunn 2014. Generated with Sass.\r\n */\r\n/* 2D TRANSITIONS */\r\n/* Grow */\r\n\r\n\r\n/* switch new css (sahil) */\r\n\r\n/* Switch */\r\n.access-requests-card .onoffswitch {\r\n    position: relative;\r\n    width: 85px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n}\r\n\r\n.access-requests-card .onoffswitch-checkbox {\r\n    display: none;\r\n}\r\n\r\n.access-requests-card .onoffswitch-label {\r\n    display: block;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n}\r\n\r\n.access-requests-card .onoffswitch-inner {\r\n    display: block;\r\n    width: 200%;\r\n    margin-left: -100%;\r\n    transition: margin 0.3s ease-in 0s;\r\n}\r\n\r\n.access-requests-card .onoffswitch-inner:before,\r\n.access-requests-card .onoffswitch-inner:after {\r\n    display: block;\r\n    float: left;\r\n    width: 50%;\r\n    height: 20px;\r\n    padding: 0;\r\n    line-height: 20px;\r\n    font-size: 13px;\r\n    color: white;\r\n    box-sizing: border-box;\r\n    font-weight: normal;\r\n}\r\n\r\n.access-requests-card .onoffswitch-inner:before {\r\n    content: \"Approve\";\r\n    padding-left: 9px;\r\n    background-color: #00c853;\r\n    color: #FFFFFF;\r\n    font-weight: normal;\r\n    text-align: left;\r\n    font-size: 12px;\r\n}\r\n\r\n.access-requests-card .onoffswitch-inner:after {\r\n    content: \"Approve\";\r\n    padding-right: 9px;\r\n    background-color: #EEEEEE;\r\n    color: #999999;\r\n    text-align: right;\r\n    font-size: 12px;\r\n}\r\n\r\n.access-requests-card .onoffswitch-switch {\r\n    display: block;\r\n    width: 14px;\r\n    height: 14px;\r\n    margin: 3px;\r\n    background: #FFFFFF;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 62px;\r\n    border-radius: 20px;\r\n    transition: all 0.3s ease-in 0s;\r\n}\r\n\r\n.access-requests-card .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\r\n    margin-left: 0;\r\n}\r\n\r\n.access-requests-card .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\r\n    right: 0px;\r\n}\r\n/* switch end */\r\n\r\n\r\n.hvr-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* Shrink */\r\n.hvr-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-shrink:hover, .hvr-shrink:focus, .hvr-shrink:active {\r\n  -webkit-transform: scale(0.9);\r\n  transform: scale(0.9);\r\n}\r\n\r\n/* Pulse */\r\n@-webkit-keyframes hvr-pulse {\r\n  25% {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n@keyframes hvr-pulse {\r\n  25% {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n.hvr-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {\r\n  -webkit-animation-name: hvr-pulse;\r\n  animation-name: hvr-pulse;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n/* Pulse Grow */\r\n@-webkit-keyframes hvr-pulse-grow {\r\n  to {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n@keyframes hvr-pulse-grow {\r\n  to {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n.hvr-pulse-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {\r\n  -webkit-animation-name: hvr-pulse-grow;\r\n  animation-name: hvr-pulse-grow;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  animation-direction: alternate;\r\n}\r\n\r\n/* Pulse Shrink */\r\n@-webkit-keyframes hvr-pulse-shrink {\r\n  to {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n@keyframes hvr-pulse-shrink {\r\n  to {\r\n    -webkit-transform: scale(0.9);\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n.hvr-pulse-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-pulse-shrink:hover, .hvr-pulse-shrink:focus, .hvr-pulse-shrink:active {\r\n  -webkit-animation-name: hvr-pulse-shrink;\r\n  animation-name: hvr-pulse-shrink;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  animation-direction: alternate;\r\n}\r\n\r\n/* Push */\r\n@-webkit-keyframes hvr-push {\r\n  50% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes hvr-push {\r\n  50% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.hvr-push {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-push:hover, .hvr-push:focus, .hvr-push:active {\r\n  -webkit-animation-name: hvr-push;\r\n  animation-name: hvr-push;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Pop */\r\n@-webkit-keyframes hvr-pop {\r\n  50% {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n  }\r\n}\r\n\r\n@keyframes hvr-pop {\r\n  50% {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n  }\r\n}\r\n\r\n.hvr-pop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-pop:hover, .hvr-pop:focus, .hvr-pop:active {\r\n  -webkit-animation-name: hvr-pop;\r\n  animation-name: hvr-pop;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Bounce In */\r\n.hvr-bounce-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n}\r\n\r\n/* Bounce Out */\r\n.hvr-bounce-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-out:hover, .hvr-bounce-out:focus, .hvr-bounce-out:active {\r\n  -webkit-transform: scale(0.8);\r\n  transform: scale(0.8);\r\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n}\r\n\r\n/* Rotate */\r\n.hvr-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-rotate:hover, .hvr-rotate:focus, .hvr-rotate:active {\r\n  -webkit-transform: rotate(4deg);\r\n  transform: rotate(4deg);\r\n}\r\n\r\n/* Grow Rotate */\r\n.hvr-grow-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-grow-rotate:hover, .hvr-grow-rotate:focus, .hvr-grow-rotate:active {\r\n  -webkit-transform: scale(1.1) rotate(4deg);\r\n  transform: scale(1.1) rotate(4deg);\r\n}\r\n\r\n/* Float */\r\n.hvr-float {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-float:hover, .hvr-float:focus, .hvr-float:active {\r\n  -webkit-transform: translateY(-8px);\r\n  transform: translateY(-8px);\r\n}\r\n\r\n/* Sink */\r\n.hvr-sink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-sink:hover, .hvr-sink:focus, .hvr-sink:active {\r\n  -webkit-transform: translateY(8px);\r\n  transform: translateY(8px);\r\n}\r\n\r\n/* Bob */\r\n@-webkit-keyframes hvr-bob {\r\n  0% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateY(-4px);\r\n    transform: translateY(-4px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-bob {\r\n  0% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateY(-4px);\r\n    transform: translateY(-4px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes hvr-bob-float {\r\n  100% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-bob-float {\r\n  100% {\r\n    -webkit-transform: translateY(-8px);\r\n    transform: translateY(-8px);\r\n  }\r\n}\r\n\r\n.hvr-bob {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {\r\n  -webkit-animation-name: hvr-bob-float, hvr-bob;\r\n  animation-name: hvr-bob-float, hvr-bob;\r\n  -webkit-animation-duration: .3s, 1.5s;\r\n  animation-duration: .3s, 1.5s;\r\n  -webkit-animation-delay: 0s, .3s;\r\n  animation-delay: 0s, .3s;\r\n  -webkit-animation-timing-function: ease-out, ease-in-out;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  -webkit-animation-iteration-count: 1, infinite;\r\n  animation-iteration-count: 1, infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-direction: normal, alternate;\r\n  animation-direction: normal, alternate;\r\n}\r\n\r\n/* Hang */\r\n@-webkit-keyframes hvr-hang {\r\n  0% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-hang {\r\n  0% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes hvr-hang-sink {\r\n  100% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-hang-sink {\r\n  100% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\r\n  }\r\n}\r\n\r\n.hvr-hang {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-hang:hover, .hvr-hang:focus, .hvr-hang:active {\r\n  -webkit-animation-name: hvr-hang-sink, hvr-hang;\r\n  animation-name: hvr-hang-sink, hvr-hang;\r\n  -webkit-animation-duration: .3s, 1.5s;\r\n  animation-duration: .3s, 1.5s;\r\n  -webkit-animation-delay: 0s, .3s;\r\n  animation-delay: 0s, .3s;\r\n  -webkit-animation-timing-function: ease-out, ease-in-out;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  -webkit-animation-iteration-count: 1, infinite;\r\n  animation-iteration-count: 1, infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-direction: normal, alternate;\r\n  animation-direction: normal, alternate;\r\n}\r\n\r\n/* Skew */\r\n.hvr-skew {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-skew:hover, .hvr-skew:focus, .hvr-skew:active {\r\n  -webkit-transform: skew(-10deg);\r\n  transform: skew(-10deg);\r\n}\r\n\r\n/* Skew Forward */\r\n.hvr-skew-forward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\r\n}\r\n.hvr-skew-forward:hover, .hvr-skew-forward:focus, .hvr-skew-forward:active {\r\n  -webkit-transform: skew(-10deg);\r\n  transform: skew(-10deg);\r\n}\r\n\r\n/* Skew Backward */\r\n.hvr-skew-backward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\r\n}\r\n.hvr-skew-backward:hover, .hvr-skew-backward:focus, .hvr-skew-backward:active {\r\n  -webkit-transform: skew(10deg);\r\n  transform: skew(10deg);\r\n}\r\n\r\n/* Wobble Vertical */\r\n@-webkit-keyframes hvr-wobble-vertical {\r\n  16.65% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translateY(1px);\r\n    transform: translateY(1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-wobble-vertical {\r\n  16.65% {\r\n    -webkit-transform: translateY(8px);\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translateY(1px);\r\n    transform: translateY(1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.hvr-wobble-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {\r\n  -webkit-animation-name: hvr-wobble-vertical;\r\n  animation-name: hvr-wobble-vertical;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Wobble Horizontal */\r\n@-webkit-keyframes hvr-wobble-horizontal {\r\n  16.65% {\r\n    -webkit-transform: translateX(8px);\r\n    transform: translateX(8px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translateX(-6px);\r\n    transform: translateX(-6px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translateX(4px);\r\n    transform: translateX(4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translateX(-2px);\r\n    transform: translateX(-2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translateX(1px);\r\n    transform: translateX(1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-wobble-horizontal {\r\n  16.65% {\r\n    -webkit-transform: translateX(8px);\r\n    transform: translateX(8px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translateX(-6px);\r\n    transform: translateX(-6px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translateX(4px);\r\n    transform: translateX(4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translateX(-2px);\r\n    transform: translateX(-2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translateX(1px);\r\n    transform: translateX(1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.hvr-wobble-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active {\r\n  -webkit-animation-name: hvr-wobble-horizontal;\r\n  animation-name: hvr-wobble-horizontal;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Wobble To Bottom Right */\r\n@-webkit-keyframes hvr-wobble-to-bottom-right {\r\n  16.65% {\r\n    -webkit-transform: translate(8px, 8px);\r\n    transform: translate(8px, 8px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translate(-6px, -6px);\r\n    transform: translate(-6px, -6px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translate(4px, 4px);\r\n    transform: translate(4px, 4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translate(-2px, -2px);\r\n    transform: translate(-2px, -2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translate(1px, 1px);\r\n    transform: translate(1px, 1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-wobble-to-bottom-right {\r\n  16.65% {\r\n    -webkit-transform: translate(8px, 8px);\r\n    transform: translate(8px, 8px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translate(-6px, -6px);\r\n    transform: translate(-6px, -6px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translate(4px, 4px);\r\n    transform: translate(4px, 4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translate(-2px, -2px);\r\n    transform: translate(-2px, -2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translate(1px, 1px);\r\n    transform: translate(1px, 1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n}\r\n\r\n.hvr-wobble-to-bottom-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-wobble-to-bottom-right:hover, .hvr-wobble-to-bottom-right:focus, .hvr-wobble-to-bottom-right:active {\r\n  -webkit-animation-name: hvr-wobble-to-bottom-right;\r\n  animation-name: hvr-wobble-to-bottom-right;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Wobble To Top Right */\r\n@-webkit-keyframes hvr-wobble-to-top-right {\r\n  16.65% {\r\n    -webkit-transform: translate(8px, -8px);\r\n    transform: translate(8px, -8px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translate(-6px, 6px);\r\n    transform: translate(-6px, 6px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translate(4px, -4px);\r\n    transform: translate(4px, -4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translate(-2px, 2px);\r\n    transform: translate(-2px, 2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translate(1px, -1px);\r\n    transform: translate(1px, -1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-wobble-to-top-right {\r\n  16.65% {\r\n    -webkit-transform: translate(8px, -8px);\r\n    transform: translate(8px, -8px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translate(-6px, 6px);\r\n    transform: translate(-6px, 6px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translate(4px, -4px);\r\n    transform: translate(4px, -4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translate(-2px, 2px);\r\n    transform: translate(-2px, 2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translate(1px, -1px);\r\n    transform: translate(1px, -1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n}\r\n\r\n.hvr-wobble-to-top-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-wobble-to-top-right:hover, .hvr-wobble-to-top-right:focus, .hvr-wobble-to-top-right:active {\r\n  -webkit-animation-name: hvr-wobble-to-top-right;\r\n  animation-name: hvr-wobble-to-top-right;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Wobble Top */\r\n@-webkit-keyframes hvr-wobble-top {\r\n  16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-wobble-top {\r\n  16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\r\n  }\r\n}\r\n\r\n.hvr-wobble-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transform-origin: 0 100%;\r\n  transform-origin: 0 100%;\r\n}\r\n.hvr-wobble-top:hover, .hvr-wobble-top:focus, .hvr-wobble-top:active {\r\n  -webkit-animation-name: hvr-wobble-top;\r\n  animation-name: hvr-wobble-top;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Wobble Bottom */\r\n@-webkit-keyframes hvr-wobble-bottom {\r\n  16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-wobble-bottom {\r\n  16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\r\n  }\r\n}\r\n\r\n.hvr-wobble-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transform-origin: 100% 0;\r\n  transform-origin: 100% 0;\r\n}\r\n.hvr-wobble-bottom:hover, .hvr-wobble-bottom:focus, .hvr-wobble-bottom:active {\r\n  -webkit-animation-name: hvr-wobble-bottom;\r\n  animation-name: hvr-wobble-bottom;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Wobble Skew */\r\n@-webkit-keyframes hvr-wobble-skew {\r\n  16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-wobble-skew {\r\n  16.65% {\r\n    -webkit-transform: skew(-12deg);\r\n    transform: skew(-12deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skew(10deg);\r\n    transform: skew(10deg);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: skew(-6deg);\r\n    transform: skew(-6deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skew(4deg);\r\n    transform: skew(4deg);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: skew(-2deg);\r\n    transform: skew(-2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: skew(0);\r\n    transform: skew(0);\r\n  }\r\n}\r\n\r\n.hvr-wobble-skew {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-wobble-skew:hover, .hvr-wobble-skew:focus, .hvr-wobble-skew:active {\r\n  -webkit-animation-name: hvr-wobble-skew;\r\n  animation-name: hvr-wobble-skew;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Buzz */\r\n@-webkit-keyframes hvr-buzz {\r\n  50% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n}\r\n\r\n@keyframes hvr-buzz {\r\n  50% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n}\r\n\r\n.hvr-buzz {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-buzz:hover, .hvr-buzz:focus, .hvr-buzz:active {\r\n  -webkit-animation-name: hvr-buzz;\r\n  animation-name: hvr-buzz;\r\n  -webkit-animation-duration: 0.15s;\r\n  animation-duration: 0.15s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n/* Buzz Out */\r\n@-webkit-keyframes hvr-buzz-out {\r\n  10% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  20% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translateX(1px) rotate(0);\r\n    transform: translateX(1px) rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(-1px) rotate(0);\r\n    transform: translateX(-1px) rotate(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-buzz-out {\r\n  10% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  20% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translateX(1px) rotate(0);\r\n    transform: translateX(1px) rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(-1px) rotate(0);\r\n    transform: translateX(-1px) rotate(0);\r\n  }\r\n}\r\n\r\n.hvr-buzz-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {\r\n  -webkit-animation-name: hvr-buzz-out;\r\n  animation-name: hvr-buzz-out;\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* BACKGROUND TRANSITIONS */\r\n/* Fade */\r\n.hvr-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  overflow: hidden;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: color, background-color;\r\n  transition-property: color, background-color;\r\n}\r\n.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {\r\n  background-color: #2098d1;\r\n  color: white;\r\n}\r\n\r\n/* Back Pulse */\r\n@-webkit-keyframes hvr-back-pulse {\r\n  50% {\r\n    background-color: rgba(32, 152, 209, 0.75);\r\n  }\r\n}\r\n\r\n@keyframes hvr-back-pulse {\r\n  50% {\r\n    background-color: rgba(32, 152, 209, 0.75);\r\n  }\r\n}\r\n\r\n.hvr-back-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  overflow: hidden;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-property: color, background-color;\r\n  transition-property: color, background-color;\r\n}\r\n.hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active {\r\n  -webkit-animation-name: hvr-back-pulse;\r\n  animation-name: hvr-back-pulse;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-delay: 0.5s;\r\n  animation-delay: 0.5s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  background-color: #2098d1;\r\n  background-color: #2098d1;\r\n  color: white;\r\n}\r\n\r\n/* Sweep To Right */\r\n.hvr-sweep-to-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-sweep-to-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 0 50%;\r\n  transform-origin: 0 50%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {\r\n  color: white;\r\n}\r\n.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n}\r\n\r\n/* Sweep To Left */\r\n.hvr-sweep-to-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-sweep-to-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 100% 50%;\r\n  transform-origin: 100% 50%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-sweep-to-left:hover, .hvr-sweep-to-left:focus, .hvr-sweep-to-left:active {\r\n  color: white;\r\n}\r\n.hvr-sweep-to-left:hover:before, .hvr-sweep-to-left:focus:before, .hvr-sweep-to-left:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n}\r\n\r\n/* Sweep To Bottom */\r\n.hvr-sweep-to-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-sweep-to-bottom:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50% 0;\r\n  transform-origin: 50% 0;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-sweep-to-bottom:hover, .hvr-sweep-to-bottom:focus, .hvr-sweep-to-bottom:active {\r\n  color: white;\r\n}\r\n.hvr-sweep-to-bottom:hover:before, .hvr-sweep-to-bottom:focus:before, .hvr-sweep-to-bottom:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n}\r\n\r\n/* Sweep To Top */\r\n.hvr-sweep-to-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-sweep-to-top:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-sweep-to-top:hover, .hvr-sweep-to-top:focus, .hvr-sweep-to-top:active {\r\n  color: white;\r\n}\r\n.hvr-sweep-to-top:hover:before, .hvr-sweep-to-top:focus:before, .hvr-sweep-to-top:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n}\r\n\r\n/* Bounce To Right */\r\n.hvr-bounce-to-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-to-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 0 50%;\r\n  transform-origin: 0 50%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active {\r\n  color: white;\r\n}\r\n.hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n}\r\n\r\n/* Bounce To Left */\r\n.hvr-bounce-to-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-to-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 100% 50%;\r\n  transform-origin: 100% 50%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-bounce-to-left:hover, .hvr-bounce-to-left:focus, .hvr-bounce-to-left:active {\r\n  color: white;\r\n}\r\n.hvr-bounce-to-left:hover:before, .hvr-bounce-to-left:focus:before, .hvr-bounce-to-left:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n}\r\n\r\n/* Bounce To Bottom */\r\n.hvr-bounce-to-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-to-bottom:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50% 0;\r\n  transform-origin: 50% 0;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-bounce-to-bottom:hover, .hvr-bounce-to-bottom:focus, .hvr-bounce-to-bottom:active {\r\n  color: white;\r\n}\r\n.hvr-bounce-to-bottom:hover:before, .hvr-bounce-to-bottom:focus:before, .hvr-bounce-to-bottom:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n}\r\n\r\n/* Bounce To Top */\r\n.hvr-bounce-to-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-to-top:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active {\r\n  color: white;\r\n}\r\n.hvr-bounce-to-top:hover:before, .hvr-bounce-to-top:focus:before, .hvr-bounce-to-top:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n}\r\n\r\n/* Radial Out */\r\n.hvr-radial-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n  background: #e1e1e1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-radial-out:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  border-radius: 100%;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {\r\n  color: white;\r\n}\r\n.hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {\r\n  -webkit-transform: scale(2);\r\n  transform: scale(2);\r\n}\r\n\r\n/* Radial In */\r\n.hvr-radial-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n  background: #2098d1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-radial-in:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #e1e1e1;\r\n  border-radius: 100%;\r\n  -webkit-transform: scale(2);\r\n  transform: scale(2);\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-radial-in:hover, .hvr-radial-in:focus, .hvr-radial-in:active {\r\n  color: white;\r\n}\r\n.hvr-radial-in:hover:before, .hvr-radial-in:focus:before, .hvr-radial-in:active:before {\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n}\r\n\r\n/* Rectangle In */\r\n.hvr-rectangle-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  background: #2098d1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-rectangle-in:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #e1e1e1;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active {\r\n  color: white;\r\n}\r\n.hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before {\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n}\r\n\r\n/* Rectangle Out */\r\n.hvr-rectangle-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-rectangle-out:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scale(0);\r\n  transform: scale(0);\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-rectangle-out:hover, .hvr-rectangle-out:focus, .hvr-rectangle-out:active {\r\n  color: white;\r\n}\r\n.hvr-rectangle-out:hover:before, .hvr-rectangle-out:focus:before, .hvr-rectangle-out:active:before {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n}\r\n\r\n/* Shutter In Horizontal */\r\n.hvr-shutter-in-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  background: #2098d1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-shutter-in-horizontal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #e1e1e1;\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-shutter-in-horizontal:hover, .hvr-shutter-in-horizontal:focus, .hvr-shutter-in-horizontal:active {\r\n  color: white;\r\n}\r\n.hvr-shutter-in-horizontal:hover:before, .hvr-shutter-in-horizontal:focus:before, .hvr-shutter-in-horizontal:active:before {\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n}\r\n\r\n/* Shutter Out Horizontal */\r\n.hvr-shutter-out-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-shutter-out-horizontal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {\r\n  color: white;\r\n}\r\n.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n}\r\n\r\n/* Shutter In Vertical */\r\n.hvr-shutter-in-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  background: #2098d1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-shutter-in-vertical:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #e1e1e1;\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-shutter-in-vertical:hover, .hvr-shutter-in-vertical:focus, .hvr-shutter-in-vertical:active {\r\n  color: white;\r\n}\r\n.hvr-shutter-in-vertical:hover:before, .hvr-shutter-in-vertical:focus:before, .hvr-shutter-in-vertical:active:before {\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n}\r\n\r\n/* Shutter Out Vertical */\r\n.hvr-shutter-out-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-shutter-out-vertical:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #2098d1;\r\n  -webkit-transform: scaleY(0);\r\n  transform: scaleY(0);\r\n  -webkit-transform-origin: 50%;\r\n  transform-origin: 50%;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-shutter-out-vertical:hover, .hvr-shutter-out-vertical:focus, .hvr-shutter-out-vertical:active {\r\n  color: white;\r\n}\r\n.hvr-shutter-out-vertical:hover:before, .hvr-shutter-out-vertical:focus:before, .hvr-shutter-out-vertical:active:before {\r\n  -webkit-transform: scaleY(1);\r\n  transform: scaleY(1);\r\n}\r\n\r\n/* BORDER TRANSITIONS */\r\n/* Border Fade */\r\n.hvr-border-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  transition-property: box-shadow;\r\n  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\r\n}\r\n.hvr-border-fade:hover, .hvr-border-fade:focus, .hvr-border-fade:active {\r\n  box-shadow: inset 0 0 0 4px #2098d1, 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\r\n}\r\n\r\n/* Hollow */\r\n.hvr-hollow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: background;\r\n  transition-property: background;\r\n  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\r\n}\r\n.hvr-hollow:hover, .hvr-hollow:focus, .hvr-hollow:active {\r\n  background: none;\r\n}\r\n\r\n/* Trim */\r\n.hvr-trim {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-trim:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: white solid 4px;\r\n  top: 4px;\r\n  left: 4px;\r\n  right: 4px;\r\n  bottom: 4px;\r\n  opacity: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: opacity;\r\n  transition-property: opacity;\r\n}\r\n.hvr-trim:hover:before, .hvr-trim:focus:before, .hvr-trim:active:before {\r\n  opacity: 1;\r\n}\r\n\r\n/* Ripple Out */\r\n@-webkit-keyframes hvr-ripple-out {\r\n  100% {\r\n    top: -12px;\r\n    right: -12px;\r\n    bottom: -12px;\r\n    left: -12px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes hvr-ripple-out {\r\n  100% {\r\n    top: -12px;\r\n    right: -12px;\r\n    bottom: -12px;\r\n    left: -12px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.hvr-ripple-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-ripple-out:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 6px;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n}\r\n.hvr-ripple-out:hover:before, .hvr-ripple-out:focus:before, .hvr-ripple-out:active:before {\r\n  -webkit-animation-name: hvr-ripple-out;\r\n  animation-name: hvr-ripple-out;\r\n}\r\n\r\n/* Ripple In */\r\n@-webkit-keyframes hvr-ripple-in {\r\n  100% {\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes hvr-ripple-in {\r\n  100% {\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.hvr-ripple-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-ripple-in:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: -12px;\r\n  right: -12px;\r\n  bottom: -12px;\r\n  left: -12px;\r\n  opacity: 0;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n}\r\n.hvr-ripple-in:hover:before, .hvr-ripple-in:focus:before, .hvr-ripple-in:active:before {\r\n  -webkit-animation-name: hvr-ripple-in;\r\n  animation-name: hvr-ripple-in;\r\n}\r\n\r\n/* Outline Out */\r\n.hvr-outline-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-outline-out:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: top, right, bottom, left;\r\n  transition-property: top, right, bottom, left;\r\n}\r\n.hvr-outline-out:hover:before, .hvr-outline-out:focus:before, .hvr-outline-out:active:before {\r\n  top: -8px;\r\n  right: -8px;\r\n  bottom: -8px;\r\n  left: -8px;\r\n}\r\n\r\n/* Outline In */\r\n.hvr-outline-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-outline-in:before {\r\n  pointer-events: none;\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: -16px;\r\n  right: -16px;\r\n  bottom: -16px;\r\n  left: -16px;\r\n  opacity: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: top, right, bottom, left;\r\n  transition-property: top, right, bottom, left;\r\n}\r\n.hvr-outline-in:hover:before, .hvr-outline-in:focus:before, .hvr-outline-in:active:before {\r\n  top: -8px;\r\n  right: -8px;\r\n  bottom: -8px;\r\n  left: -8px;\r\n  opacity: 1;\r\n}\r\n\r\n/* Round Corners */\r\n.hvr-round-corners {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: border-radius;\r\n  transition-property: border-radius;\r\n}\r\n.hvr-round-corners:hover, .hvr-round-corners:focus, .hvr-round-corners:active {\r\n  border-radius: 1em;\r\n}\r\n\r\n/* Underline From Left */\r\n.hvr-underline-from-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-underline-from-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 100%;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  height: 4px;\r\n  -webkit-transition-property: right;\r\n  transition-property: right;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {\r\n  right: 0;\r\n}\r\n\r\n/* Underline From Center */\r\n.hvr-underline-from-center {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-underline-from-center:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 50%;\r\n  right: 50%;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  height: 4px;\r\n  -webkit-transition-property: left, right;\r\n  transition-property: left, right;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n/* Underline From Right */\r\n.hvr-underline-from-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-underline-from-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 100%;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  height: 4px;\r\n  -webkit-transition-property: left;\r\n  transition-property: left;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-underline-from-right:hover:before, .hvr-underline-from-right:focus:before, .hvr-underline-from-right:active:before {\r\n  left: 0;\r\n}\r\n\r\n/* Overline From Left */\r\n.hvr-overline-from-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-overline-from-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 100%;\r\n  top: 0;\r\n  background: #2098d1;\r\n  height: 4px;\r\n  -webkit-transition-property: right;\r\n  transition-property: right;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-overline-from-left:hover:before, .hvr-overline-from-left:focus:before, .hvr-overline-from-left:active:before {\r\n  right: 0;\r\n}\r\n\r\n/* Overline From Center */\r\n.hvr-overline-from-center {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-overline-from-center:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 50%;\r\n  right: 50%;\r\n  top: 0;\r\n  background: #2098d1;\r\n  height: 4px;\r\n  -webkit-transition-property: left, right;\r\n  transition-property: left, right;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n/* Overline From Right */\r\n.hvr-overline-from-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-overline-from-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 100%;\r\n  right: 0;\r\n  top: 0;\r\n  background: #2098d1;\r\n  height: 4px;\r\n  -webkit-transition-property: left;\r\n  transition-property: left;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-overline-from-right:hover:before, .hvr-overline-from-right:focus:before, .hvr-overline-from-right:active:before {\r\n  left: 0;\r\n}\r\n\r\n/* Reveal */\r\n.hvr-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-color: #2098d1;\r\n  border-style: solid;\r\n  border-width: 0;\r\n  -webkit-transition-property: border-width;\r\n  transition-property: border-width;\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-reveal:hover:before, .hvr-reveal:focus:before, .hvr-reveal:active:before {\r\n  -webkit-transform: translateY(0);\r\n  transform: translateY(0);\r\n  border-width: 4px;\r\n}\r\n\r\n/* Underline Reveal */\r\n.hvr-underline-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-underline-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098d1;\r\n  height: 4px;\r\n  -webkit-transform: translateY(4px);\r\n  transform: translateY(4px);\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-underline-reveal:hover:before, .hvr-underline-reveal:focus:before, .hvr-underline-reveal:active:before {\r\n  -webkit-transform: translateY(0);\r\n  transform: translateY(0);\r\n}\r\n\r\n/* Overline Reveal */\r\n.hvr-overline-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.hvr-overline-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  background: #2098d1;\r\n  height: 4px;\r\n  -webkit-transform: translateY(-4px);\r\n  transform: translateY(-4px);\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-overline-reveal:hover:before, .hvr-overline-reveal:focus:before, .hvr-overline-reveal:active:before {\r\n  -webkit-transform: translateY(0);\r\n  transform: translateY(0);\r\n}\r\n\r\n/* SHADOW/GLOW TRANSITIONS */\r\n/* Glow */\r\n.hvr-glow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  transition-property: box-shadow;\r\n}\r\n.hvr-glow:hover, .hvr-glow:focus, .hvr-glow:active {\r\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n/* Shadow */\r\n.hvr-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  transition-property: box-shadow;\r\n}\r\n.hvr-shadow:hover, .hvr-shadow:focus, .hvr-shadow:active {\r\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n/* Grow Shadow */\r\n.hvr-grow-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow, transform;\r\n  transition-property: box-shadow, transform;\r\n}\r\n.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {\r\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* Box Shadow Outset */\r\n.hvr-box-shadow-outset {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  transition-property: box-shadow;\r\n}\r\n.hvr-box-shadow-outset:hover, .hvr-box-shadow-outset:focus, .hvr-box-shadow-outset:active {\r\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n/* Box Shadow Inset */\r\n.hvr-box-shadow-inset {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: box-shadow;\r\n  transition-property: box-shadow;\r\n  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\r\n}\r\n.hvr-box-shadow-inset:hover, .hvr-box-shadow-inset:focus, .hvr-box-shadow-inset:active {\r\n  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\r\n}\r\n\r\n/* Float Shadow */\r\n.hvr-float-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-float-shadow:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  top: 100%;\r\n  left: 5%;\r\n  height: 10px;\r\n  width: 90%;\r\n  opacity: 0;\r\n  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\r\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\r\n  /* W3C */\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform, opacity;\r\n  transition-property: transform, opacity;\r\n}\r\n.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {\r\n  -webkit-transform: translateY(-5px);\r\n  transform: translateY(-5px);\r\n  /* move the element up by 5px */\r\n}\r\n.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {\r\n  opacity: 1;\r\n  -webkit-transform: translateY(5px);\r\n  transform: translateY(5px);\r\n  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */\r\n}\r\n\r\n/* Shadow Radial */\r\n.hvr-shadow-radial {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-shadow-radial:before, .hvr-shadow-radial:after {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  left: 0;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  background-repeat: no-repeat;\r\n  height: 5px;\r\n  opacity: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: opacity;\r\n  transition-property: opacity;\r\n}\r\n.hvr-shadow-radial:before {\r\n  bottom: 100%;\r\n  background: -webkit-radial-gradient(50% 150%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\r\n  background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\r\n}\r\n.hvr-shadow-radial:after {\r\n  top: 100%;\r\n  background: -webkit-radial-gradient(50% -50%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\r\n  background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\r\n}\r\n.hvr-shadow-radial:hover:before, .hvr-shadow-radial:focus:before, .hvr-shadow-radial:active:before, .hvr-shadow-radial:hover:after, .hvr-shadow-radial:focus:after, .hvr-shadow-radial:active:after {\r\n  opacity: 1;\r\n}\r\n\r\n/* SPEECH BUBBLES */\r\n/* Bubble Top */\r\n.hvr-bubble-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-bubble-top:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  left: calc(50% - 10px);\r\n  top: 0;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #e1e1e1 transparent;\r\n}\r\n.hvr-bubble-top:hover:before, .hvr-bubble-top:focus:before, .hvr-bubble-top:active:before {\r\n  -webkit-transform: translateY(-10px);\r\n  transform: translateY(-10px);\r\n}\r\n\r\n/* Bubble Right */\r\n.hvr-bubble-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-bubble-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  top: calc(50% - 10px);\r\n  right: 0;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #e1e1e1;\r\n}\r\n.hvr-bubble-right:hover:before, .hvr-bubble-right:focus:before, .hvr-bubble-right:active:before {\r\n  -webkit-transform: translateX(10px);\r\n  transform: translateX(10px);\r\n}\r\n\r\n/* Bubble Bottom */\r\n.hvr-bubble-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-bubble-bottom:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  left: calc(50% - 10px);\r\n  bottom: 0;\r\n  border-width: 10px 10px 0 10px;\r\n  border-color: #e1e1e1 transparent transparent transparent;\r\n}\r\n.hvr-bubble-bottom:hover:before, .hvr-bubble-bottom:focus:before, .hvr-bubble-bottom:active:before {\r\n  -webkit-transform: translateY(10px);\r\n  transform: translateY(10px);\r\n}\r\n\r\n/* Bubble Left */\r\n.hvr-bubble-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-bubble-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  top: calc(50% - 10px);\r\n  left: 0;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #e1e1e1 transparent transparent;\r\n}\r\n.hvr-bubble-left:hover:before, .hvr-bubble-left:focus:before, .hvr-bubble-left:active:before {\r\n  -webkit-transform: translateX(-10px);\r\n  transform: translateX(-10px);\r\n}\r\n\r\n/* Bubble Float Top */\r\n.hvr-bubble-float-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-bubble-float-top:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  left: calc(50% - 10px);\r\n  top: 0;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #e1e1e1 transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-bubble-float-top:hover, .hvr-bubble-float-top:focus, .hvr-bubble-float-top:active {\r\n  -webkit-transform: translateY(10px);\r\n  transform: translateY(10px);\r\n}\r\n.hvr-bubble-float-top:hover:before, .hvr-bubble-float-top:focus:before, .hvr-bubble-float-top:active:before {\r\n  -webkit-transform: translateY(-10px);\r\n  transform: translateY(-10px);\r\n}\r\n\r\n/* Bubble Float Right */\r\n.hvr-bubble-float-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-bubble-float-right:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: calc(50% - 10px);\r\n  right: 0;\r\n  content: '';\r\n  border-style: solid;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #e1e1e1;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-bubble-float-right:hover, .hvr-bubble-float-right:focus, .hvr-bubble-float-right:active {\r\n  -webkit-transform: translateX(-10px);\r\n  transform: translateX(-10px);\r\n}\r\n.hvr-bubble-float-right:hover:before, .hvr-bubble-float-right:focus:before, .hvr-bubble-float-right:active:before {\r\n  -webkit-transform: translateX(10px);\r\n  transform: translateX(10px);\r\n}\r\n\r\n/* Bubble Float Bottom */\r\n.hvr-bubble-float-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-bubble-float-bottom:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  left: calc(50% - 10px);\r\n  bottom: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 0 10px;\r\n  border-color: #e1e1e1 transparent transparent transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-bubble-float-bottom:hover, .hvr-bubble-float-bottom:focus, .hvr-bubble-float-bottom:active {\r\n  -webkit-transform: translateY(-10px);\r\n  transform: translateY(-10px);\r\n}\r\n.hvr-bubble-float-bottom:hover:before, .hvr-bubble-float-bottom:focus:before, .hvr-bubble-float-bottom:active:before {\r\n  -webkit-transform: translateY(10px);\r\n  transform: translateY(10px);\r\n}\r\n\r\n/* Bubble Float Left */\r\n.hvr-bubble-float-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-bubble-float-left:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  top: calc(50% - 10px);\r\n  left: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #e1e1e1 transparent transparent;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n}\r\n.hvr-bubble-float-left:hover, .hvr-bubble-float-left:focus, .hvr-bubble-float-left:active {\r\n  -webkit-transform: translateX(10px);\r\n  transform: translateX(10px);\r\n}\r\n.hvr-bubble-float-left:hover:before, .hvr-bubble-float-left:focus:before, .hvr-bubble-float-left:active:before {\r\n  -webkit-transform: translateX(-10px);\r\n  transform: translateX(-10px);\r\n}\r\n\r\n/* ICONS */\r\n/* Icon Back */\r\n.hvr-icon-back {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-left: 2.2em;\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\r\n}\r\n.hvr-icon-back:before {\r\n  content: \"\\f137\";\r\n  position: absolute;\r\n  left: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-back:hover:before, .hvr-icon-back:focus:before, .hvr-icon-back:active:before {\r\n  -webkit-transform: translateX(-4px);\r\n  transform: translateX(-4px);\r\n}\r\n\r\n/* Icon Forward */\r\n.hvr-icon-forward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\r\n}\r\n.hvr-icon-forward:before {\r\n  content: \"\\f138\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.1s;\r\n  transition-duration: 0.1s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-forward:hover:before, .hvr-icon-forward:focus:before, .hvr-icon-forward:active:before {\r\n  -webkit-transform: translateX(4px);\r\n  transform: translateX(4px);\r\n}\r\n\r\n/* Icon Down */\r\n@-webkit-keyframes hvr-icon-down {\r\n  0%,\r\n  50%,\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  25%,\r\n  75% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-down {\r\n  0%,\r\n  50%,\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  25%,\r\n  75% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n}\r\n\r\n/* Icon Down */\r\n.hvr-icon-down {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-down:before {\r\n  content: \"\\f01a\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-down:hover:before, .hvr-icon-down:focus:before, .hvr-icon-down:active:before {\r\n  -webkit-animation-name: hvr-icon-down;\r\n  animation-name: hvr-icon-down;\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\r\n}\r\n\r\n/* Icon Up */\r\n@-webkit-keyframes hvr-icon-up {\r\n  0%,\r\n  50%,\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  25%,\r\n  75% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-up {\r\n  0%,\r\n  50%,\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  25%,\r\n  75% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n}\r\n\r\n/* Icon Up */\r\n.hvr-icon-up {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-up:before {\r\n  content: \"\\f01b\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-up:hover:before, .hvr-icon-up:focus:before, .hvr-icon-up:active:before {\r\n  -webkit-animation-name: hvr-icon-up;\r\n  animation-name: hvr-icon-up;\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\r\n}\r\n\r\n/* Icon Spin */\r\n.hvr-icon-spin {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-spin:before {\r\n  content: \"\\f021\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transition-duration: 1s;\r\n  transition-duration: 1s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-in-out;\r\n  transition-timing-function: ease-in-out;\r\n}\r\n.hvr-icon-spin:hover:before, .hvr-icon-spin:focus:before, .hvr-icon-spin:active:before {\r\n  -webkit-transform: rotate(360deg);\r\n  transform: rotate(360deg);\r\n}\r\n\r\n/* Icon Drop */\r\n@-webkit-keyframes hvr-icon-drop {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-100%);\r\n    transform: translateY(-100%);\r\n  }\r\n\r\n  51%,\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-drop {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-100%);\r\n    transform: translateY(-100%);\r\n  }\r\n\r\n  51%,\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Icon Drop */\r\n.hvr-icon-drop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-drop:before {\r\n  content: \"\\f041\";\r\n  position: absolute;\r\n  right: 1em;\r\n  opacity: 1;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-drop:hover:before, .hvr-icon-drop:focus:before, .hvr-icon-drop:active:before {\r\n  opacity: 0;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-animation-name: hvr-icon-drop;\r\n  animation-name: hvr-icon-drop;\r\n  -webkit-animation-duration: 0.5s;\r\n  animation-duration: 0.5s;\r\n  -webkit-animation-delay: 0.3s;\r\n  animation-delay: 0.3s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n  animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\r\n}\r\n\r\n/* Icon Fade */\r\n.hvr-icon-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-fade:before {\r\n  content: \"\\f00c\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n  -webkit-transition-property: color;\r\n  transition-property: color;\r\n}\r\n.hvr-icon-fade:hover:before, .hvr-icon-fade:focus:before, .hvr-icon-fade:active:before {\r\n  color: #0F9E5E;\r\n}\r\n\r\n/* Icon Float Away */\r\n@-webkit-keyframes hvr-icon-float-away {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-1em);\r\n    transform: translateY(-1em);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-float-away {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-1em);\r\n    transform: translateY(-1em);\r\n  }\r\n}\r\n\r\n/* Icon Float Away */\r\n.hvr-icon-float-away {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-float-away:before, .hvr-icon-float-away:after {\r\n  content: \"\\f055\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n}\r\n.hvr-icon-float-away:after {\r\n  opacity: 0;\r\n  -webkit-animation-duration: 0.5s;\r\n  animation-duration: 0.5s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n}\r\n.hvr-icon-float-away:hover:after, .hvr-icon-float-away:focus:after, .hvr-icon-float-away:active:after {\r\n  -webkit-animation-name: hvr-icon-float-away;\r\n  animation-name: hvr-icon-float-away;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\r\n}\r\n\r\n/* Icon Sink Away */\r\n@-webkit-keyframes hvr-icon-sink-away {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(1em);\r\n    transform: translateY(1em);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-sink-away {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(1em);\r\n    transform: translateY(1em);\r\n  }\r\n}\r\n\r\n/* Icon Sink Away */\r\n.hvr-icon-sink-away {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-sink-away:before, .hvr-icon-sink-away:after {\r\n  content: \"\\f056\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-sink-away:after {\r\n  opacity: 0;\r\n  -webkit-animation-duration: 0.5s;\r\n  animation-duration: 0.5s;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n}\r\n.hvr-icon-sink-away:hover:after, .hvr-icon-sink-away:focus:after, .hvr-icon-sink-away:active:after {\r\n  -webkit-animation-name: hvr-icon-sink-away;\r\n  animation-name: hvr-icon-sink-away;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\r\n}\r\n\r\n/* Icon Grow */\r\n.hvr-icon-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-grow:before {\r\n  content: \"\\f118\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-grow:hover:before, .hvr-icon-grow:focus:before, .hvr-icon-grow:active:before {\r\n  -webkit-transform: scale(1.3) translateZ(0);\r\n  transform: scale(1.3) translateZ(0);\r\n}\r\n\r\n/* Icon Shrink */\r\n.hvr-icon-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-shrink:before {\r\n  content: \"\\f119\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-shrink:hover:before, .hvr-icon-shrink:focus:before, .hvr-icon-shrink:active:before {\r\n  -webkit-transform: scale(0.8);\r\n  transform: scale(0.8);\r\n}\r\n\r\n/* Icon Pulse */\r\n@-webkit-keyframes hvr-icon-pulse {\r\n  25% {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-pulse {\r\n  25% {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n  }\r\n}\r\n\r\n.hvr-icon-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-pulse:before {\r\n  content: \"\\f015\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-pulse:hover:before, .hvr-icon-pulse:focus:before, .hvr-icon-pulse:active:before {\r\n  -webkit-animation-name: hvr-icon-pulse;\r\n  animation-name: hvr-icon-pulse;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n/* Icon Pulse Grow */\r\n@-webkit-keyframes hvr-icon-pulse-grow {\r\n  to {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-pulse-grow {\r\n  to {\r\n    -webkit-transform: scale(1.3);\r\n    transform: scale(1.3);\r\n  }\r\n}\r\n\r\n.hvr-icon-pulse-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-pulse-grow:before {\r\n  content: \"\\f015\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-pulse-grow:hover:before, .hvr-icon-pulse-grow:focus:before, .hvr-icon-pulse-grow:active:before {\r\n  -webkit-animation-name: hvr-icon-pulse-grow;\r\n  animation-name: hvr-icon-pulse-grow;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  animation-direction: alternate;\r\n}\r\n\r\n/* Icon Pulse Shrink */\r\n@-webkit-keyframes hvr-icon-pulse-shrink {\r\n  to {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-pulse-shrink {\r\n  to {\r\n    -webkit-transform: scale(0.8);\r\n    transform: scale(0.8);\r\n  }\r\n}\r\n\r\n.hvr-icon-pulse-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n}\r\n.hvr-icon-pulse-shrink:before {\r\n  content: \"\\f015\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-pulse-shrink:hover:before, .hvr-icon-pulse-shrink:focus:before, .hvr-icon-pulse-shrink:active:before {\r\n  -webkit-animation-name: hvr-icon-pulse-shrink;\r\n  animation-name: hvr-icon-pulse-shrink;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-direction: alternate;\r\n  animation-direction: alternate;\r\n}\r\n\r\n/* Icon Push */\r\n@-webkit-keyframes hvr-icon-push {\r\n  50% {\r\n    -webkit-transform: scale(0.5);\r\n    transform: scale(0.5);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-push {\r\n  50% {\r\n    -webkit-transform: scale(0.5);\r\n    transform: scale(0.5);\r\n  }\r\n}\r\n\r\n.hvr-icon-push {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-push:before {\r\n  content: \"\\f006\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-push:hover:before, .hvr-icon-push:focus:before, .hvr-icon-push:active:before {\r\n  -webkit-animation-name: hvr-icon-push;\r\n  animation-name: hvr-icon-push;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Icon Pop */\r\n@-webkit-keyframes hvr-icon-pop {\r\n  50% {\r\n    -webkit-transform: scale(1.5);\r\n    transform: scale(1.5);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-pop {\r\n  50% {\r\n    -webkit-transform: scale(1.5);\r\n    transform: scale(1.5);\r\n  }\r\n}\r\n\r\n.hvr-icon-pop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-pop:before {\r\n  content: \"\\f005\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-pop:hover:before, .hvr-icon-pop:focus:before, .hvr-icon-pop:active:before {\r\n  -webkit-animation-name: hvr-icon-pop;\r\n  animation-name: hvr-icon-pop;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Icon Bounce */\r\n.hvr-icon-bounce {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-bounce:before {\r\n  content: \"\\f087\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-bounce:hover:before, .hvr-icon-bounce:focus:before, .hvr-icon-bounce:active:before {\r\n  -webkit-transform: scale(1.5);\r\n  transform: scale(1.5);\r\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n}\r\n\r\n/* Icon Rotate */\r\n.hvr-icon-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-rotate:before {\r\n  content: \"\\f0c6\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-rotate:hover:before, .hvr-icon-rotate:focus:before, .hvr-icon-rotate:active:before {\r\n  -webkit-transform: rotate(20deg);\r\n  transform: rotate(20deg);\r\n}\r\n\r\n/* Icon Grow Rotate */\r\n.hvr-icon-grow-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-grow-rotate:before {\r\n  content: \"\\f095\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-grow-rotate:hover:before, .hvr-icon-grow-rotate:focus:before, .hvr-icon-grow-rotate:active:before {\r\n  -webkit-transform: scale(1.5) rotate(12deg);\r\n  transform: scale(1.5) rotate(12deg);\r\n}\r\n\r\n/* Icon Float */\r\n.hvr-icon-float {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-float:before {\r\n  content: \"\\f01b\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-float:hover:before, .hvr-icon-float:focus:before, .hvr-icon-float:active:before {\r\n  -webkit-transform: translateY(-4px);\r\n  transform: translateY(-4px);\r\n}\r\n\r\n/* Icon Sink */\r\n.hvr-icon-sink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-sink:before {\r\n  content: \"\\f01a\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: transform;\r\n  transition-property: transform;\r\n  -webkit-transition-timing-function: ease-out;\r\n  transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-sink:hover:before, .hvr-icon-sink:focus:before, .hvr-icon-sink:active:before {\r\n  -webkit-transform: translateY(4px);\r\n  transform: translateY(4px);\r\n}\r\n\r\n/* Icon Bob */\r\n@-webkit-keyframes hvr-icon-bob {\r\n  0% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-bob {\r\n  0% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes hvr-icon-bob-float {\r\n  100% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-bob-float {\r\n  100% {\r\n    -webkit-transform: translateY(-6px);\r\n    transform: translateY(-6px);\r\n  }\r\n}\r\n\r\n.hvr-icon-bob {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-bob:before {\r\n  content: \"\\f077\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-bob:hover:before, .hvr-icon-bob:focus:before, .hvr-icon-bob:active:before {\r\n  -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;\r\n  animation-name: hvr-icon-bob-float, hvr-icon-bob;\r\n  -webkit-animation-duration: .3s, 1.5s;\r\n  animation-duration: .3s, 1.5s;\r\n  -webkit-animation-delay: 0s, .3s;\r\n  animation-delay: 0s, .3s;\r\n  -webkit-animation-timing-function: ease-out, ease-in-out;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  -webkit-animation-iteration-count: 1, infinite;\r\n  animation-iteration-count: 1, infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-direction: normal, alternate;\r\n  animation-direction: normal, alternate;\r\n}\r\n\r\n/* Icon Hang */\r\n@-webkit-keyframes hvr-icon-hang {\r\n  0% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateY(2px);\r\n    transform: translateY(2px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-hang {\r\n  0% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateY(2px);\r\n    transform: translateY(2px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes hvr-icon-hang-sink {\r\n  100% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-hang-sink {\r\n  100% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n}\r\n\r\n.hvr-icon-hang {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-hang:before {\r\n  content: \"\\f078\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-hang:hover:before, .hvr-icon-hang:focus:before, .hvr-icon-hang:active:before {\r\n  -webkit-animation-name: hvr-icon-hang-sink, hvr-icon-hang;\r\n  animation-name: hvr-icon-hang-sink, hvr-icon-hang;\r\n  -webkit-animation-duration: .3s, 1.5s;\r\n  animation-duration: .3s, 1.5s;\r\n  -webkit-animation-delay: 0s, .3s;\r\n  animation-delay: 0s, .3s;\r\n  -webkit-animation-timing-function: ease-out, ease-in-out;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  -webkit-animation-iteration-count: 1, infinite;\r\n  animation-iteration-count: 1, infinite;\r\n  -webkit-animation-fill-mode: forwards;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-direction: normal, alternate;\r\n  animation-direction: normal, alternate;\r\n}\r\n\r\n/* Icon Wobble Horizontal */\r\n@-webkit-keyframes hvr-icon-wobble-horizontal {\r\n  16.65% {\r\n    -webkit-transform: translateX(6px);\r\n    transform: translateX(6px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translateX(-5px);\r\n    transform: translateX(-5px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translateX(4px);\r\n    transform: translateX(4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translateX(-2px);\r\n    transform: translateX(-2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translateX(1px);\r\n    transform: translateX(1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-wobble-horizontal {\r\n  16.65% {\r\n    -webkit-transform: translateX(6px);\r\n    transform: translateX(6px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translateX(-5px);\r\n    transform: translateX(-5px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translateX(4px);\r\n    transform: translateX(4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translateX(-2px);\r\n    transform: translateX(-2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translateX(1px);\r\n    transform: translateX(1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.hvr-icon-wobble-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-wobble-horizontal:before {\r\n  content: \"\\f061\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-wobble-horizontal:hover:before, .hvr-icon-wobble-horizontal:focus:before, .hvr-icon-wobble-horizontal:active:before {\r\n  -webkit-animation-name: hvr-icon-wobble-horizontal;\r\n  animation-name: hvr-icon-wobble-horizontal;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Icon Wobble Vertical */\r\n@-webkit-keyframes hvr-icon-wobble-vertical {\r\n  16.65% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translateY(-5px);\r\n    transform: translateY(-5px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translateY(1px);\r\n    transform: translateY(1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-wobble-vertical {\r\n  16.65% {\r\n    -webkit-transform: translateY(6px);\r\n    transform: translateY(6px);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: translateY(-5px);\r\n    transform: translateY(-5px);\r\n  }\r\n\r\n  49.95% {\r\n    -webkit-transform: translateY(4px);\r\n    transform: translateY(4px);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: translateY(-2px);\r\n    transform: translateY(-2px);\r\n  }\r\n\r\n  83.25% {\r\n    -webkit-transform: translateY(1px);\r\n    transform: translateY(1px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.hvr-icon-wobble-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-wobble-vertical:before {\r\n  content: \"\\f062\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-wobble-vertical:hover:before, .hvr-icon-wobble-vertical:focus:before, .hvr-icon-wobble-vertical:active:before {\r\n  -webkit-animation-name: hvr-icon-wobble-vertical;\r\n  animation-name: hvr-icon-wobble-vertical;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* Icon Buzz */\r\n@-webkit-keyframes hvr-icon-buzz {\r\n  50% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-buzz {\r\n  50% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n}\r\n\r\n.hvr-icon-buzz {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-buzz:before {\r\n  content: \"\\f017\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-buzz:hover:before, .hvr-icon-buzz:focus:before, .hvr-icon-buzz:active:before {\r\n  -webkit-animation-name: hvr-icon-buzz;\r\n  animation-name: hvr-icon-buzz;\r\n  -webkit-animation-duration: 0.15s;\r\n  animation-duration: 0.15s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n/* Icon Buzz Out */\r\n@-webkit-keyframes hvr-icon-buzz-out {\r\n  10% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  20% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translateX(1px) rotate(0);\r\n    transform: translateX(1px) rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(-1px) rotate(0);\r\n    transform: translateX(-1px) rotate(0);\r\n  }\r\n}\r\n\r\n@keyframes hvr-icon-buzz-out {\r\n  10% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  20% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: translateX(3px) rotate(2deg);\r\n    transform: translateX(3px) rotate(2deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: translateX(-3px) rotate(-2deg);\r\n    transform: translateX(-3px) rotate(-2deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: translateX(2px) rotate(1deg);\r\n    transform: translateX(2px) rotate(1deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: translateX(-2px) rotate(-1deg);\r\n    transform: translateX(-2px) rotate(-1deg);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translateX(1px) rotate(0);\r\n    transform: translateX(1px) rotate(0);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(-1px) rotate(0);\r\n    transform: translateX(-1px) rotate(0);\r\n  }\r\n}\r\n\r\n.hvr-icon-buzz-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n  padding-right: 2.2em;\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n}\r\n.hvr-icon-buzz-out:before {\r\n  content: \"\\f023\";\r\n  position: absolute;\r\n  right: 1em;\r\n  padding: 0 1px;\r\n  font-family: FontAwesome;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n}\r\n.hvr-icon-buzz-out:hover:before, .hvr-icon-buzz-out:focus:before, .hvr-icon-buzz-out:active:before {\r\n  -webkit-animation-name: hvr-icon-buzz-out;\r\n  animation-name: hvr-icon-buzz-out;\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-timing-function: linear;\r\n  animation-timing-function: linear;\r\n  -webkit-animation-iteration-count: 1;\r\n  animation-iteration-count: 1;\r\n}\r\n\r\n/* CURLS */\r\n/* Curl Top Left */\r\n.hvr-curl-top-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-curl-top-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  top: 0;\r\n  left: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(135deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');\r\n  /*For IE7-8-9*/\r\n  z-index: 1000;\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: width, height;\r\n  transition-property: width, height;\r\n}\r\n.hvr-curl-top-left:hover:before, .hvr-curl-top-left:focus:before, .hvr-curl-top-left:active:before {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n/* Curl Top Right */\r\n.hvr-curl-top-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-curl-top-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  top: 0;\r\n  right: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(225deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\r\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: width, height;\r\n  transition-property: width, height;\r\n}\r\n.hvr-curl-top-right:hover:before, .hvr-curl-top-right:focus:before, .hvr-curl-top-right:active:before {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n/* Curl Bottom Right */\r\n.hvr-curl-bottom-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-curl-bottom-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(315deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\r\n  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: width, height;\r\n  transition-property: width, height;\r\n}\r\n.hvr-curl-bottom-right:hover:before, .hvr-curl-bottom-right:focus:before, .hvr-curl-bottom-right:active:before {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n/* Curl Bottom Left */\r\n.hvr-curl-bottom-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  position: relative;\r\n}\r\n.hvr-curl-bottom-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(45deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\r\n  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition-duration: 0.3s;\r\n  transition-duration: 0.3s;\r\n  -webkit-transition-property: width, height;\r\n  transition-property: width, height;\r\n}\r\n.hvr-curl-bottom-left:hover:before, .hvr-curl-bottom-left:focus:before, .hvr-curl-bottom-left:active:before {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\n\r\n.company_name{\r\n  text-transform: capitalize;\r\n}\r\n\r\n/* custom material css start (sahil) */\r\n.sahil-material .form-control {\r\n    height: 38px;\r\n    padding: 7px 0;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    font-family: montserratregular;\r\n    color: #62696d;\r\n}\r\n.sahil-material .form-group label.control-label {\r\n    font-size: 14px;\r\n    line-height: 1.07142857;\r\n    color: #8e989f;\r\n    font-weight: 400;\r\n    margin: 16px 0 0 0;\r\n    font-family: montserratregular;\r\n}\r\n.sahil-material .form-group label.control-label.seo-static-label{\r\n    text-transform: uppercase !important;\r\n    font-size: 11px;\r\n    color: #8e989f !important;\r\n}\r\n.sahil-material .form-group.label-floating label.control-label,\r\n.sahil-material .form-group.label-placeholder label.control-label {\r\n    top: -7px;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    color: #8e989f;\r\n}\r\n.sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\r\n    top: -20px;\r\n    font-family: montserratregular;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    color: #8e989f  !important;\r\n}\r\n.sahil-material .form-group.label-floating.is-focused label.control-label {\r\n    top: -20px;\r\n    font-size: 11px;\r\n    font-family: montserratregular;\r\n    color: #8e989f  !important;\r\n}\r\n.sahil-material .form-group.is-focused label,\r\n.sahil-material .form-group.is-focused label.control-label {\r\n    font-size: 11px;\r\n    font-family: montserratregular;\r\n    color: #8e989f !important;\r\n    text-transform: uppercase;\r\n}\r\n.sahil-material .form-control,\r\n.sahil-material .form-group .form-control {\r\n    border: 0 !important;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\r\n    background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#d7dbdd, #d7dbdd);\r\n    background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\r\n    \r\n}\r\n\r\n.sahil-material .form-group.is-focused .form-control {\r\n    outline: none;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\r\n    background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\r\n    background-image: -o-linear-gradient(#fb545b, #fb545b), -o-linear-gradient(#D2D2D2, #D2D2D2);\r\n    background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\r\n    -webkit-background-size: 100% 2px, 100% 1px;\r\n            background-size: 100% 2px, 100% 1px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    -webkit-transition-duration: 0.3s;\r\n        -o-transition-duration: 0.3s;\r\n            transition-duration: 0.3s;\r\n}\r\n\r\n/* custom material css end (sahil) */\r\n\r\n/* Start: Responsiveness */\r\n\r\n  .mobile-menu {\r\n      display: none;\r\n  }\r\n\r\n  .white-logo {\r\n      display: none !important;\r\n  }\r\n\r\n  .company-list,\r\n  .name-list {\r\n      width: 100%;\r\n      float: left;\r\n  }\r\n\r\n  @media (max-width: 767px) {\r\n      #userProfile-header .navbar-fixed-top .nav-padding {\r\n          padding-right: 0px;\r\n          padding-left: 0px;\r\n      }\r\n\r\n      .full-menu,\r\n      .dash-circle,\r\n      .dash-prog-outer h2 {\r\n          display: none;\r\n      }\r\n\r\n      .main-logo {\r\n          display: none !important;\r\n      }\r\n\r\n      .mobile-menu {\r\n          display: block;\r\n          float: right;\r\n          margin-top: 7px;\r\n          position: relative;\r\n      }\r\n\r\n      #userProfile-header .navbar-default {\r\n          background: #fb5f66 !important;\r\n          border: none;\r\n          margin-top: 0px;\r\n      }\r\n\r\n      #userProfile-header .navbar-default .mat-icon i.material-icons {\r\n          font-size: 24px;\r\n          color: #fff;\r\n          padding: 13px;\r\n      }\r\n\r\n      #userProfile-header .navbar-header h4.title {\r\n          color: #fff;\r\n          font-size: 16px;\r\n          text-align: center;\r\n          text-transform: uppercase;\r\n          padding-top: 7px;\r\n      }\r\n\r\n      .mobile-menu button {\r\n          border: none;\r\n          box-shadow: none;\r\n          color: #fff;\r\n          background: none;\r\n          float: right;\r\n          margin: 0px 5px;\r\n      }\r\n\r\n      .mobile-menu .btn-default:hover {\r\n          color: #fff;\r\n          background: none;\r\n      }\r\n\r\n      .mobile-dash {\r\n          padding: 0px;\r\n      }\r\n\r\n      .mobile-menu .dropdown-menu {\r\n          background: #62696d;\r\n          top: -11px;\r\n          border-radius: 0px;\r\n          left: -176px;\r\n          width: 235px;\r\n          font-family: montserratlight;\r\n          padding-bottom: 55px;\r\n      }\r\n\r\n      .mobile-menu .name-dropdown-border {\r\n          width: 100%;\r\n          margin: 5px 0px;\r\n      }\r\n\r\n      .mobile-menu .user-outr {\r\n          float: left;\r\n          width: 100%;\r\n          padding: 0;\r\n          margin: 0px;\r\n          display: block;\r\n      }\r\n\r\n      .mobile-menu .user-outr li {\r\n          float: right;\r\n          font-size: 24px;\r\n          font-family: montserratlight;\r\n          color: #fff;\r\n          margin-right: 24px;\r\n          /* margin: 10px 19px; */\r\n          margin-top: 8px;\r\n          margin-bottom: 6px;\r\n      }\r\n\r\n      .mobile-menu .user-outr li a {\r\n          margin-right: 30px;\r\n      }\r\n      \r\n      .user-outr li a {\r\n          float: left;\r\n          width: auto;\r\n          border: 2px solid #dae2e6;\r\n          border-radius: 50%;\r\n          margin-left: 5px;\r\n          margin-bottom: 5px;\r\n      }\r\n\r\n      .user-outr li a:hover {\r\n          border: 2px solid #f56151;\r\n      }\r\n\r\n      .mobile-menu .company-list li,\r\n      .mobile-menu .name-list li {\r\n          margin: 10px 0px;\r\n          text-align: right;\r\n          font-size: 16px;\r\n          width: 100%;\r\n          float: left;\r\n          padding-right: 20px;\r\n      }\r\n\r\n      .mobile-menu .company-list li a,\r\n      .mobile-menu .name-list li a {\r\n          float: right;\r\n          color: #fff;\r\n      }\r\n\r\n      .mobile-menu .company-list li a i {\r\n          margin-right: 20px;\r\n          float: left;\r\n      }\r\n\r\n      .mobile-menu .name-list li a i {\r\n          margin-left: 20px;\r\n          float: right;\r\n      }\r\n\r\n      .mobile-menu .company-list-title {\r\n          float: left;\r\n          color: #fff;\r\n      }\r\n\r\n      .white-logo {\r\n          display: block !important;\r\n      }\r\n\r\n      .dash-prog-outer {\r\n          float: left;\r\n          width: 100%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n      }\r\n\r\n      .dash-prog-outer h5 {\r\n          font-size: 24px;\r\n          text-align: center;\r\n          width: 100%;\r\n          margin-bottom: 1px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper {\r\n          min-height: 35px;\r\n          width: 100%;\r\n          text-align: center;\r\n      }\r\n\r\n      .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\r\n          margin: 0 auto;\r\n          float: none;\r\n          text-align: center;\r\n      }\r\n\r\n      #userProfile-header .navbar-header {\r\n          float: left;\r\n          margin-left: -5px;\r\n          margin-right: 0px !important;\r\n      }\r\n\r\n      #userProfile-header .navbar-logopadding {\r\n          padding-right: 0px;\r\n          padding-top: 0px;\r\n      }\r\n\r\n      #userProfile-header .navbar-default {\r\n          height: 50px;\r\n          margin: 0px;\r\n          padding-bottom: 0px;\r\n      }\r\n\r\n      .white-logo .navbar-brand img {\r\n          height: 53px;\r\n          margin-top: -20px;\r\n          margin: 0 auto;\r\n          margin-top: -20px;\r\n      }\r\n\r\n      .white-logo .navbar-brand {\r\n          float: none;\r\n      }\r\n\r\n      .user-outr li a.add-user {\r\n          width: 45px;\r\n          height: 45px;\r\n          padding-top: 9px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\r\n          top: -30px;\r\n          left: 17px;\r\n          font-size: 34px;\r\n          position: relative;\r\n          color: #f87b80;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\r\n          font-size: 16px;\r\n      }\r\n\r\n      .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\r\n          width: 91%;\r\n          font-size: 14px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\r\n          width: 35px;\r\n          height: 35px;\r\n          padding-top: 8px;\r\n          font-size: 14px;\r\n          top: 13px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\r\n          font-size: 14px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\r\n          font-size: 24px;\r\n      }\r\n\r\n      .company-block-content {\r\n          margin-left: 50px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n          left: 42px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\r\n          right: 34px;\r\n      }\r\n\r\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\r\n          top: 8px;\r\n          left: -8px;\r\n      }\r\n\r\n  }\r\n\r\n/* End: Responsiveness */"

/***/ },

/***/ 946:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Estimate; });
/* unused harmony export SubscriptionEstimate */
/* unused harmony export InvoiceEstimate */
/* unused harmony export LineItems */
/* unused harmony export Discount */
/* unused harmony export CreditNoteEstimate */
var Estimate = (function () {
    function Estimate(estimate) {
        if (estimate) {
            this.created_at = moment.unix(estimate.create_at).format('DD-MM-YYYY');
            this.object = estimate.object;
            this.subscription_estimate = new SubscriptionEstimate(estimate.subscription_estimate);
            if (estimate.invoice_estimate) {
                this.invoice_estimate = new InvoiceEstimate(estimate.invoice_estimate);
                estimate.next_invoice_estimate = null;
            }
            else if (estimate.next_invoice_estimate) {
                this.next_invoice_estimate = new InvoiceEstimate(estimate.next_invoice_estimate);
                estimate.invoice_estimate = null;
            }
            this.credit_note_estimates = [];
            for (var i = 0; i < estimate.credit_note_estimates.length; i++) {
                this.credit_note_estimates[i] = new CreditNoteEstimate(estimate.credit_note_estimates[i]);
            }
        }
    }
    return Estimate;
}());
var SubscriptionEstimate = (function () {
    function SubscriptionEstimate(subscriptionEstimate) {
        if (subscriptionEstimate) {
            this.id = subscriptionEstimate.id;
            this.status = subscriptionEstimate.status;
            this.next_billing_at = moment.unix(subscriptionEstimate.next_billing_at).format('DD-MM-YYYY');
            this.object = subscriptionEstimate.object;
            this.currency_code = subscriptionEstimate.currency_code;
        }
    }
    return SubscriptionEstimate;
}());
var InvoiceEstimate = (function () {
    function InvoiceEstimate(invoiceEstimate) {
        if (invoiceEstimate) {
            this.recurring = invoiceEstimate.recurring;
            this.price_type = invoiceEstimate.price_type;
            this.sub_total = invoiceEstimate.sub_total / 100;
            this.total = invoiceEstimate.total / 100;
            this.credits_applied = invoiceEstimate.credits_applied / 100;
            this.amount_paid = invoiceEstimate.amount_paid / 100;
            this.amount_due = invoiceEstimate.amount_due / 100;
            this.object = invoiceEstimate.object;
            this.line_items = [];
            for (var i = 0; i < invoiceEstimate.line_items.length; i++) {
                this.line_items[i] = new LineItems(invoiceEstimate.line_items[i]);
            }
            this.discounts = [];
            if (this.line_items[0].discount_amount != 0) {
                for (var i = 0; i < invoiceEstimate.discounts.length; i++) {
                    this.discounts[i] = new Discount(invoiceEstimate.discounts[i]);
                }
            }
            this.taxes = null;
            this.line_item_taxes = null;
            this.currency_code = invoiceEstimate.currency_code;
        }
    }
    return InvoiceEstimate;
}());
var LineItems = (function () {
    function LineItems(lineItems) {
        if (lineItems) {
            this.id = lineItems.id;
            this.date_from = moment.unix(lineItems.date_from).format('DD-MM-YYYY');
            this.date_to = moment.unix(lineItems.date_to).format('DD-MM-YYYY');
            this.unit_amount = lineItems.unit_amount / 100;
            this.quantity = lineItems.quantity;
            this.is_taxed = lineItems.is_taxed;
            this.tax_amount = lineItems.tax_amount / 100;
            this.object = lineItems.object;
            this.amount = lineItems.amount / 100;
            this.description = lineItems.description;
            this.entity_type = lineItems.entity_type;
            this.entity_id = lineItems.entity_id;
            this.discount_amount = lineItems.discount_amount / 100;
            this.item_level_discount_amount = lineItems.item_level_discount_amount;
        }
    }
    return LineItems;
}());
var Discount = (function () {
    function Discount(discount) {
        if (discount) {
            this.object = discount.object;
            this.entity_type = discount.entity_type;
            this.description = discount.description;
            this.amount = discount.amount / 100;
            this.entity_id = discount.entry_id;
        }
    }
    return Discount;
}());
var CreditNoteEstimate = (function () {
    function CreditNoteEstimate(creditNoteEstimate) {
        if (creditNoteEstimate) {
            this.reference_invoice_id = creditNoteEstimate.reference_invoice_id;
            this.type = creditNoteEstimate.type;
            this.price_type = creditNoteEstimate.price_type;
            this.sub_total = creditNoteEstimate.sub_total / 100;
            this.total = creditNoteEstimate.total / 100;
            this.amount_allocated = creditNoteEstimate.amount_allocated / 100;
            this.amount_available = creditNoteEstimate.amount_available / 100;
            this.object = creditNoteEstimate.object;
            this.line_items = [];
            for (var i = 0; i < creditNoteEstimate.line_items.length; i++) {
                this.line_items[i] = new LineItems(creditNoteEstimate.line_items[i]);
            }
            this.taxes = null;
            this.line_item_taxes = null;
            this.currency_code = creditNoteEstimate.currency_code;
        }
    }
    return CreditNoteEstimate;
}());


/***/ },

/***/ 947:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Invoice; });
/* unused harmony export Line_items */
/* unused harmony export Linked_payments */
/* unused harmony export Applied_credits */
/* unused harmony export Adjustment_credit_notes */
/* unused harmony export Issued_credit_notes */
/* unused harmony export Linked_orders */
var Invoice = (function () {
    function Invoice(invoice) {
        var _this = this;
        if (invoice) {
            this.id = invoice.id;
            this.customer_id = invoice.customer_id;
            this.subscription_id = invoice.subscription_id;
            this.recurring = invoice.recurring;
            this.status = invoice.status;
            this.price_type = invoice.status;
            this.date = moment.unix(invoice.date).format('MMM Do YYYY');
            this.total = invoice.total / 100;
            this.amount_paid = invoice.amount_paid / 100;
            this.amount_adjusted = invoice.amount_adjusted;
            this.write_off_amount = invoice.write_off_amount;
            this.credits_applied = invoice.credits_applied;
            this.amount_due = invoice.amount_due / 100;
            this.paid_at = moment.unix(invoice.paid_at).format('MMM Do YYYY');
            ;
            this.object = invoice.object;
            this.first_invoice = invoice.first_invoice;
            this.currency_code = invoice.currency_code;
            this.tax = invoice.tax / 100;
            this.line_items = [];
            invoice.line_items.forEach(function (lineItem) {
                _this.line_items.push(new Line_items(lineItem));
            });
            this.sub_total = invoice.sub_total / 100;
            this.linked_payments = [];
            invoice.linked_payments.forEach(function (linkedPayments) {
                _this.linked_payments.push(new Linked_payments(linkedPayments));
            });
            this.applied_credits = [];
            invoice.applied_credits.forEach(function (appliedCredits) {
                _this.applied_credits.push(new Applied_credits(appliedCredits));
            });
            this.adjustment_credit_notes = [];
            invoice.adjustment_credit_notes.forEach(function (adjustmentCreditNotes) {
                _this.adjustment_credit_notes.push(new Adjustment_credit_notes(adjustmentCreditNotes));
            });
            this.issued_credit_notes = [];
            invoice.issued_credit_notes.forEach(function (issuedCreditNotes) {
                _this.issued_credit_notes.push(new Issued_credit_notes(issuedCreditNotes));
            });
            this.linked_orders = [];
            invoice.linked_orders.forEach(function (linkedOrders) {
                _this.linked_orders.push(new Linked_orders(linkedOrders));
            });
        }
    }
    return Invoice;
}());
var Line_items = (function () {
    function Line_items(lineItems) {
        if (lineItems) {
            this.id = lineItems.id;
            this.date_from = moment.unix(lineItems.date_from).format('MMM Do YYYY');
            this.date_to = moment.unix(lineItems.date_to).format('MMM Do YYYY');
            this.unit_amount = lineItems.unit_amount / 100;
            this.quantity = lineItems.quantity;
            this.is_taxed = lineItems.is_taxed;
            this.tax_amount = lineItems.tax_amount / 100;
            this.object = lineItems.object;
            this.amount = lineItems.amount / 100;
            this.description = lineItems.description;
            this.entity_type = lineItems.entity_type;
            this.entity_id = lineItems.entity_id;
            this.discount_amount = lineItems.discount_amount / 100;
            this.item_level_discount_amount = lineItems.item_level_discount_amount / 100;
        }
    }
    return Line_items;
}());
var Linked_payments = (function () {
    function Linked_payments(linkedpayment) {
        if (linkedpayment) {
            this.txn_id = linkedpayment.txn_id;
            this.applied_amount = linkedpayment.applied_amount / 100;
            this.applied_at = moment.unix(linkedpayment.applied_at).format('MM Do YYYY');
            this.txn_status = linkedpayment.txn_status;
            this.txn_date = moment.unix(linkedpayment.txn_date).format('MM Do YYYY');
            ;
            this.txn_amount = linkedpayment.txn_amount / 100;
        }
    }
    return Linked_payments;
}());
var Applied_credits = (function () {
    function Applied_credits(appliedCredits) {
        this.applied_credit = '';
    }
    return Applied_credits;
}());
var Adjustment_credit_notes = (function () {
    function Adjustment_credit_notes(appliedCredits) {
        this.adjustment_credit_notes = '';
    }
    return Adjustment_credit_notes;
}());
var Issued_credit_notes = (function () {
    function Issued_credit_notes(appliedCredits) {
        this.issued_credit_notes = '';
    }
    return Issued_credit_notes;
}());
var Linked_orders = (function () {
    function Linked_orders(appliedCredits) {
        this.linked_orders = '';
    }
    return Linked_orders;
}());


/***/ },

/***/ 948:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PlanFeatures; });
/* unused harmony export PlanLimit */
/* unused harmony export Features */
/* unused harmony export Feature */
/* unused harmony export Cycle */
var PlanFeatures = (function () {
    function PlanFeatures(planFeature) {
        if (planFeature) {
            this.planLimit = new PlanLimit(planFeature.plan);
            this.features = [];
            for (var i = 0; i < planFeature.features.length; i++) {
                this.features.push(new Features(planFeature.features[i]));
            }
            this.cycles = [];
            for (var i = 0; i < planFeature.cycles.length; i++) {
                this.cycles.push(new Cycle(planFeature.cycles[i]));
            }
        }
    }
    return PlanFeatures;
}());
var PlanLimit = (function () {
    function PlanLimit(planLimit) {
        if (planLimit) {
            this.id = planLimit._id;
            this.updatedAt = planLimit.updatedAt;
            this.createdAt = planLimit.createdAt;
            this.name = planLimit.name;
            this.__v = planLimit.__v;
            this.leads = planLimit.leads;
            this.visits = planLimit.visits;
            this.templates = planLimit.templates;
            this.calculators = planLimit.calculators;
            this.users = planLimit.users;
            this.active = planLimit.active;
            this.description = planLimit.description;
        }
    }
    return PlanLimit;
}());
var Features = (function () {
    function Features(features) {
        if (features) {
            this.id = features._id;
            this.updatedAt = features.updatedAt;
            this.createdAt = features.createdAt;
            this.feature = new Feature(features.feature);
            this.plan = features.plan;
            this.active = features.active;
            this.type = features.type;
        }
    }
    return Features;
}());
var Feature = (function () {
    function Feature(feature) {
        this.id = feature.id;
        this.updatedAt = feature.updatedAt;
        this.createdAt = feature.createdAt;
        this.name = feature.name;
        this.__v = feature.__v;
        this.active = feature.active;
        this.description = feature.description;
    }
    return Feature;
}());
var Cycle = (function () {
    function Cycle(cycle) {
        if (cycle) {
            this.id = cycle.id;
            this.plan = cycle.plan;
            this.__v = cycle.__v;
            this.coupon_type = cycle.coupon_type;
            this.coupon_active = cycle.coupon_active;
            this.coupon_value = cycle.coupon_value;
            this.coupon_name = cycle.coupon_name;
            this.active = cycle.active;
            this.name = cycle.name;
            this.coupon_cycle = cycle.coupon_cycle;
        }
    }
    return Cycle;
}());


/***/ },

/***/ 949:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Plans; });
var Plans = (function () {
    function Plans(plans) {
        if (plans) {
            this.id = plans.id;
            this.name = plans.name;
            this.invoice_name = plans.invoice_name;
            this.description = plans.description;
            this.price = plans.price / 100;
            this.period = plans.period;
            this.period_unit = plans.period_unit;
            this.trial_period = plans.trial_period;
            this.trial_period_unit = plans.trial_period_unit;
            this.charge_model = plans.charge_model;
            this.free_quantity = plans.free_quantity;
            this.status = plans.status;
            this.enabled_in_hodted_pages = plans.enabled_in_hodted_pages;
            this.enabled_in_portal = plans.enabled_in_portal;
            this.object = plans.object;
            this.taxable = plans.taxable;
            this.currency_code = plans.currency_code;
        }
    }
    return Plans;
}());


/***/ },

/***/ 950:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NumberFormater; });
var NumberFormater = (function () {
    function NumberFormater() {
    }
    NumberFormater.insertCommas = function (value) {
        var number = value.toString();
        if (value < 1000)
            return number;
        var decimalPart = "";
        var decimal = number.indexOf(".");
        if (decimal != -1) {
            decimalPart = number.substring(decimal, number.length);
            number = number.substring(0, decimal);
        }
        var withCommas = "";
        var len = number.length;
        var i = 1;
        withCommas += number.charAt(0);
        while (i < len) {
            if ((len - i) % 3 == 0)
                withCommas += ",";
            withCommas += number.charAt(i);
            i++;
        }
        withCommas = decimal == -1 ? withCommas : withCommas + decimalPart;
        return withCommas;
    };
    return NumberFormater;
}());


/***/ },

/***/ 953:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(router, settingsCommunicationService) {
        this.router = router;
        this.settingsCommunicationService = settingsCommunicationService;
        this.myCompanies = this.settingsCommunicationService.companyList;
        jQuery.material.init();
    }
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-account',
            template: __webpack_require__(1094),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(1041), __webpack_require__(1044)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _b) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b;
}());


/***/ },

/***/ 954:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_currentPlan__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_validators_email_validator__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BasicDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BasicDetailsComponent = (function () {
    // @HostBinding('class.someClass') someField: bool = false;
    function BasicDetailsComponent(_userService, fb, _cookieService, _script, _membershipService) {
        this._userService = _userService;
        this.fb = fb;
        this._cookieService = _cookieService;
        this._script = _script;
        this._membershipService = _membershipService;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */]({});
        this.BillingDetails = new __WEBPACK_IMPORTED_MODULE_4__shared_models_currentPlan__["c" /* Customer */](null);
        this.submitted = false;
        this.active = true;
        this.error = false;
        this.success = false;
        this.Message = '';
        this.isPlaceExist = false;
        this.hostnameRegexp = new RegExp('^https?://.+?/');
    }
    BasicDetailsComponent.prototype.ngOnInit = function () {
        jQuery.material.init();
        this.basicDetailsForm = this.fb.group({
            name: [this.model.name, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z ]*$')
                ])],
            phone: [this.model.phone, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].pattern('[-+0 -9]+$'), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(5)
                ])],
            location: [this.model.location],
            timezone: [this.model.timezone]
        });
        this.emailForm = this.fb.group({
            email: [this.model.emails, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_5__shared_validators_email_validator__["a" /* EmailValidator */].format
                ])],
            password: [this.model.password]
        });
    };
    BasicDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._script.load('googleLocation', 'timeZoneMin')
            .then(function (data) {
            _this.initialize();
            _this.getBasicDetails();
        })
            .catch(function (error) {
            //console.log('Script not loaded', error);
        });
    };
    BasicDetailsComponent.prototype.initialize = function () {
        localStorage.removeItem('pid');
        var locationElement = document.getElementById('location');
        this.autocomplete = new google.maps.places.Autocomplete((locationElement), { types: ['(cities)'] });
        var self = this;
        google.maps.event.addListener(self.autocomplete, 'place_changed', function () {
            var place = this.getPlace();
            if (place.place_id) {
                self.isPlaceExist = true;
                self.model.location = place.formatted_address;
                locationElement.value = place.formatted_address;
                localStorage.setItem('pid', self.model.location);
                jQuery('#saveBasicDetails').attr('disabled', false);
            }
        });
    };
    BasicDetailsComponent.prototype.chkLocation = function () {
        var pid = localStorage.getItem('pid');
        var locationElement = document.getElementById('location');
        var self = this;
        if (self.isPlaceExist === false && pid === null) {
            locationElement.value = '';
            localStorage.removeItem('pid');
            jQuery('#saveBasicDetails').attr('disabled', true);
        }
        else {
            jQuery('#saveBasicDetails').attr('disabled', false);
            locationElement.value = pid;
            self.model.location = locationElement.value;
        }
    };
    BasicDetailsComponent.prototype.getBasicDetails = function () {
        var _this = this;
        // let timeZones = moment.tz.names();
        this.timezones = moment.tz.names();
        for (var timezone in this.timezones) {
            // this.timezones[timezone] = timeZones[timezone] +' '+ moment.tz(timeZones[timezone]).format('Z z');
            this.timezones[timezone] = this.timezones[timezone] + ' ' + moment.tz(this.timezones[timezone]).format('Z z');
        }
        var self = this;
        self._userService.getBasicDetails()
            .subscribe(function (data) {
            self.model = data;
            if (self.model.timezone.length === 0)
                self.model.timezone = 'Select a Timezone';
            self.model.emails = self.model.emails[0].email;
            _this.user_email = self.model.emails;
            if (self.model.location.length === 0) {
                // jQuery.getJSON('//freegeoip.net/json/?callback=?', function(data:any) {
                //   ip = data.ip;
                //   self.model.location = data.city+', '+data.region_name+' '+data.zip_code+', '+data.country_name;
                // });
                // jQuery.getJSON('//geoplugin.net/json.gp?jsoncallback=?ip='+ip,function(data:any){
                //   console.log('location data',data);
                // });
                var pos_1;
                navigator.geolocation.getCurrentPosition(function (position) {
                    pos_1 = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    var latlng = new google.maps.LatLng(pos_1.lat, pos_1.lng);
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                self.model.location = results[1].formatted_address;
                            }
                        }
                    });
                });
            }
        }, function (response) {
            self.Message = response.error.err_message;
            jQuery('#basicMessageModal').modal('show');
        });
    };
    BasicDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        jQuery('#saveBasicDetails').html('Please Wait...');
        this._userService.updateBasicDetails(this.model)
            .subscribe(function (data) {
            _this.getBasicDetails();
            _this.updateBiiling();
            jQuery('#saveBasicDetails').html('Update');
            var storage = JSON.parse(_this._cookieService.readCookie('storage'));
            storage.user.name = data.name;
            _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
            jQuery('.name-title').html('&nbsp;' + data.name);
            window.toastNotification('Basic Details Updated!');
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'EditInfo');
            _kmq.push(['record', 'Settings Updated account basic info']);
            /*---------------------------------*/
        }, function (response) {
            _this.Message = response.error.err_message;
            jQuery('#saveBasicDetails').html('Update');
        });
    };
    BasicDetailsComponent.prototype.updateBiiling = function () {
        var _this = this;
        var self = this;
        var getPaymentDeatils = self._membershipService.updateCustomer(self.model.name)
            .subscribe(function (success) {
            _this.BillingDetails = new __WEBPACK_IMPORTED_MODULE_4__shared_models_currentPlan__["c" /* Customer */](success.customer);
        }, function (error) {
            //console.log('error',error);
            getPaymentDeatils.unsubscribe();
        });
    };
    BasicDetailsComponent.prototype.setFalse = function () {
        this.error = false;
        this.success = false;
    };
    BasicDetailsComponent.prototype.updateEmail = function () {
        var _this = this;
        jQuery('#updateEmail').html('Please Wait...');
        jQuery('#updateEmail').attr('disabled', true);
        var storage = JSON.parse(this._cookieService.readCookie('storage'));
        if (storage.user.emails[0].email !== this.model.emails) {
            this._userService.updateEmail(storage.user.emails[0].email, this.model.emails, this.model.password)
                .subscribe(function (data) {
                console.log('UPDATE EMAIL one', storage.user.emails);
                console.log('UPDATE EMAIL two', data.emails);
                storage.user.emails = data.emails;
                _this._cookieService.createCookie('storage', JSON.stringify(storage), 3);
                _this.getBasicDetails();
                jQuery('#updateEmail').html('Change Email');
                jQuery('#updateEmail').attr('disabled', false);
                jQuery('#change-email').modal('hide');
                _this.Message = 'Email Updated!';
                _this.success = true;
            }, function (response) {
                var error_code = response.error.code;
                if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                    error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                    error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION') {
                    _this.Message = ' Email is already registered with us!';
                }
                else if (error_code === 'E_USER_NOT_FOUND') {
                    _this.Message = response.error.message;
                }
                else {
                    _this.Message = (response.error.err_errors['emails.0.email']) ?
                        response.error.err_errors['emails.0.email'].message :
                        response.error.err_message;
                }
                _this.error = true;
                jQuery('#updateEmail').html('Change Email');
                jQuery('#updateEmail').attr('disabled', false);
            });
        }
        else {
            this.error = true;
            jQuery('#updateEmail').html('Change Email');
            jQuery('#updateEmail').attr('disabled', false);
            this.Message = "Com'on atleast change something.";
        }
    };
    BasicDetailsComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "UPDATEACCOUNT":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'EditInfo');
                _kmq.push(['record', 'Settings Update account basic info click']);
                break;
        }
    };
    BasicDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Component */])({
            selector: 'og-basic-details',
            template: __webpack_require__(1095),
            styles: [__webpack_require__(1042)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["c" /* CookieService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["d" /* Script */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["h" /* MembershipService */]) === 'function' && _e) || Object])
    ], BasicDetailsComponent);
    return BasicDetailsComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 955:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(_userService, router, fb, loggedInService) {
        this._userService = _userService;
        this.router = router;
        this.fb = fb;
        this.loggedInService = loggedInService;
        this.success = false;
        this.error = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.fb.group({
            old_password: [this.old_password, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(8)
                ])],
            new_password: [this.new_password, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(8)
                ])],
            confirm_password: [this.confirm_password, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* Validators */].minLength(8)
                ])]
        });
    };
    ChangePasswordComponent.prototype.matchPasswords = function (passwordKey, confirmPasswordKey) {
        var _this = this;
        return function (group) {
            var passwordInput = group.controls[passwordKey];
            var passwordConfirmationInput = group.controls[confirmPasswordKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                _this.error = true;
                _this.Message = 'Passwords Do not match';
                return passwordConfirmationInput.setErrors({ notEquivalent: true });
            }
            else {
                _this.error = false;
            }
        };
    };
    ChangePasswordComponent.prototype.setFalse = function () {
        this.success = false;
        this.error = false;
    };
    ChangePasswordComponent.prototype.onSubmit = function (value) {
        var _this = this;
        jQuery('#updatePassword').text('Please Wait...');
        jQuery('#updatePassword').attr('disabled', true);
        value = this.changePasswordForm.value;
        var new_password = value.new_password;
        var old_password = value.old_password;
        var confirm_password = value.confirm_password;
        if (new_password !== confirm_password) {
            this.error = true;
            this.success = false;
            this.Message = "Your passwords don't match. Please retype your password to confirm";
            jQuery('#updatePassword').text('Update');
        }
        else {
            if (new_password === confirm_password) {
                this._userService.updatePassword(old_password, new_password)
                    .subscribe(function (response) {
                    /*---- Tracking code goes here ----*/
                    ga('markettingteam.send', 'event', 'Settings', 'Submit', 'UpdatePassword');
                    _kmq.push(['record', 'Settings Password Updated']);
                    /*---------------------------------*/
                    _this.Message = 'Password Updated Successfully';
                    window.toastNotification('Password Updated Successfully');
                    _this.resetFields();
                    _this.success = true;
                    _this.error = false;
                    jQuery('#updatePassword').text('Update');
                    jQuery('#updatePassword').attr('disabled', false);
                    // jQuery('#updatePassword').mouseOut();
                }, function (response) {
                    _this.Message = response.error.err_message;
                    _this.error = true;
                    _this.success = false;
                    jQuery('#updatePassword').text('Update');
                    jQuery('#updatePassword').attr('disabled', false);
                    // jQuery('#updatePassword').mouseOut();
                });
            }
            else {
                this.error = true;
                this.Message = 'Old Password and New Password Do not match';
                jQuery('#updatePassword').text('Update');
                jQuery('#updatePassword').attr('disabled', false);
            }
        }
        setTimeout(function () {
            this.setFalse();
        }.bind(this), 9000);
    };
    ChangePasswordComponent.prototype.resetFields = function () {
        jQuery('input').val('');
    };
    ChangePasswordComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "UPDATEPASS":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'UpdatePassword');
                _kmq.push(['record', 'Settings Password Clicked']);
                break;
        }
    };
    ChangePasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Component */])({
            selector: 'og-change-password',
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_index__["g" /* UserService */]],
            template: __webpack_require__(1096),
            styles: [__webpack_require__(1043)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["g" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["b" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["b" /* LoggedInService */]) === 'function' && _d) || Object])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 956:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_component__ = __webpack_require__(953);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__account_component__["a"]; });



/***/ },

/***/ 957:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_company__ = __webpack_require__(403);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserCompaniesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserCompaniesComponent = (function () {
    function UserCompaniesComponent(_companyService, fb, router, _userService, loggedInService, settingsCommunicationService, _cookieService) {
        this._companyService = _companyService;
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this.loggedInService = loggedInService;
        this.settingsCommunicationService = settingsCommunicationService;
        this._cookieService = _cookieService;
        this.subdomainExtension = '';
        this.protocol = '';
        this.Message = '';
        this.currentCompanyUsers = [];
        this.adminCount = 0;
        this.logedInUserName = '';
        // myCompaniesListUpdated = new EventEmitter<any>();
        this.updCompName = '';
        this.updDomain = '';
        this.updAgency = false;
        this.updTraffic = 0;
        this.updLeads = 0;
        this.EditCompany = new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */]({});
        this.searchedCompanyList = [];
        this.joinedCompanyList = [];
        this.invitedCompanyList = [];
        this.error = false;
        this.leaveComp = '';
        this.is_admin_created = false;
        this.clickedCompany = new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */]({});
        this.apiKey = '';
    }
    UserCompaniesComponent.prototype.ngOnInit = function () {
        this.subdomainExtension = '.' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].APP_EXTENSION;
        this.protocol = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PROTOCOL;
        this.updateCompany = new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */]({});
        if (this._cookieService.readCookie('storage') !== null) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            this.logedInUserName = storage.user.username;
        }
        this.updateCompanyForm = this.fb.group({
            companyname: [this.EditCompany.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])],
            domain: [this.EditCompany.sub_domain, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        jQuery('.modal').on('hidden.bs.modal', function () {
            jQuery('.success-message').addClass('hide');
            this.error = false;
            this.leaveComp = '';
        });
        this.createCompanyForm = this.fb.group({
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.joinCompanyForm = this.fb.group({
            searchCompany: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])]
        });
        this.getMyCompanies();
        jQuery('.slimscroll').slimscroll({
            railVisible: true,
            alwaysVisible: true
        });
        this.is_admin_created = JSON.parse(localStorage.getItem('lodashAuthToken')).is_admin_created;
        if (this.is_admin_created === undefined)
            this.is_admin_created = false;
    };
    UserCompaniesComponent.prototype.popupUpdateCompany = function (company) {
        this.updateCompany = company;
        this.EditCompany = new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */](company);
        //this.EditCompany = company;
        console.log('this.EditCompany', this.EditCompany);
        var cname = document.getElementById('updCompanyname');
        cname.value = this.EditCompany.name;
        var cdomain = document.getElementById('updDomain');
        cdomain.value = this.EditCompany.sub_domain;
        var ctraffic = document.getElementById('updTraffic');
        ctraffic.value = this.EditCompany.traffic.frequency;
        var cleads = document.getElementById('updLeads');
        cleads.value = this.EditCompany.leads.total;
        if (this.EditCompany.name == '' || this.EditCompany.name == null)
            jQuery('#updCompanynameDiv').addClass('is-empty');
        else
            jQuery('#updCompanynameDiv').removeClass('is-empty');
        if (!this.EditCompany.sub_domain)
            jQuery('#updDomainDiv').addClass('is-empty');
        else
            jQuery('#updDomainDiv').removeClass('is-empty');
        if (!this.EditCompany.traffic.frequency)
            jQuery('#updTrafficDiv').addClass('is-empty');
        else
            jQuery('#updTrafficDiv').removeClass('is-empty');
        if (!this.EditCompany.leads.total)
            jQuery('#updLeadsDiv').addClass('is-empty');
        else
            jQuery('#updLeadsDiv').removeClass('is-empty');
        //jQuery('change-company-name').modal('show');
    };
    UserCompaniesComponent.prototype.updateThisCompany = function () {
        var self = this;
        jQuery('#btnUpdateCompany').text('Please wait...');
        jQuery('#btnUpdateCompany').attr('disabled', true);
        var updateCompany = self._companyService.updateCompany(this.updateCompany.id, this.updateCompanyForm.value)
            .subscribe(function (success) {
            jQuery('#btnUpdateCompany').text('Update');
            jQuery('#btnUpdateCompany').attr('disabled', false);
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'EditCompany');
            _kmq.push(['record', 'Settings Company Editted']);
            /*---------------------------------*/
            jQuery('#change-company-name').modal('hide');
            jQuery('#change-company-name input').val('');
            jQuery('#change-company-name div.label-floating').addClass('is-empty');
            self.Message = 'Company Updated Successfully!';
            window.toastNotification(self.Message);
            /*jQuery('#floatMessageUC').html(self.Message);
            jQuery('#ucFloatMessage').removeClass('hide');
            jQuery('#ucFloatMessage').fadeIn()
                .animate({bottom:40}, 1000, function() {
                        //call back
                });*/
            // jQuery('.toast').removeClass('hide');
            // self.closeLayover();
            jQuery('#btnUpdateCompany').text('Update');
            self.getMyCompanies();
            var curUrlDomain = window.location.hostname.split('.')[0];
            var redirectDomain = '';
            if (curUrlDomain !== success.sub_domain && curUrlDomain === self.updateCompany.sub_domain) {
                redirectDomain = success.sub_domain + self.subdomainExtension;
                jQuery(location).attr('href', self.protocol + redirectDomain + '/settings/my-account');
            }
            // if(curUrlDomain == self.updateCompany.sub_domain && curUrlDomain != this.updateCompanyForm.value.domain){
            //   console.log("CULPRIT 1");
            // 	redirectDomain = this.updateCompanyForm.value.domain + self.subdomainExtension;
            // 	jQuery(location).attr('href',self.protocol+redirectDomain+'/settings');
            // }
        }, function (error) {
            jQuery('#btnUpdateCompany').text('Update');
            jQuery('#btnUpdateCompany').attr('disabled', false);
            if (error.error.code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION') {
                self.Message = "sub-domain already taken";
            }
            else if (error.error.err_errors != '')
                self.Message = error.error.err_errors.sub_domain.message;
            else {
                self.Message = error.error.err_message;
            }
            jQuery('#success-updateCompany').removeClass('hide');
            updateCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.hideError = function () {
        jQuery('.success-message').addClass('hide');
    };
    UserCompaniesComponent.prototype.getMyCompanies = function () {
        var self = this;
        var getCompany = self._companyService.getCompanies()
            .subscribe(function (success) {
            self.myCompaniesList = [];
            self.activeInCompanies = [];
            success.forEach(function (company) {
                if (company.user_company.status != 'LEFT' && company.user_company.status != 'DELETED') {
                    self.myCompaniesList.push(new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */](company));
                    if (company.user_company.active)
                        self.activeInCompanies.push(new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */](company));
                }
            });
            self.settingsCommunicationService.updateCompanyList(self.myCompaniesList);
            // self.myCompaniesListUpdated.emit(self.myCompaniesList);
        }, function (error) {
            getCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.leaveCompany = function (company) {
        var _this = this;
        var self = this;
        var companyUsers = this._companyService.getCompanyUsers(company.id)
            .subscribe(function (success) {
            self.currentCompanyUsers = [];
            self.adminCount = 0;
            success.forEach(function (user) {
                if (self.adminCount < 1 && user.user_company.role === 'ADMIN' && user.user_company.active && user.username !== self.logedInUserName) {
                    self.adminCount++;
                }
            });
            if (self.adminCount >= 1) {
                if (self.activeInCompanies.length > 1) {
                    self._companyService.leaveCompany(company.id)
                        .subscribe(function (success) {
                        /*---- Tracking code goes here ----*/
                        ga('markettingteam.send', 'event', 'Settings', 'Submit', 'LeaveCompany');
                        _kmq.push(['record', 'Settings Company Left']);
                        /*---------------------------------*/
                        self.Message = 'Successfully left ' + company.name;
                        //jQuery('#floatMessageUC').html(self.Message);
                        window.toastNotification(self.Message);
                        //self.closeLayover();
                        self.getMyCompanies();
                        var curUrlDomain = window.location.hostname.split('.')[0];
                        var redirectDomain = 'app.outgrow' + _this.subdomainExtension;
                        if (curUrlDomain == company.sub_domain) {
                            for (var i = 0; i < self.myCompaniesList.length; i++) {
                                if (curUrlDomain !== self.myCompaniesList[i].sub_domain && self.myCompaniesList[i].user_company.active) {
                                    redirectDomain = self.myCompaniesList[i].sub_domain + self.subdomainExtension + '/settings/my-account';
                                    break;
                                }
                            }
                            jQuery(location).attr('href', self.protocol + redirectDomain);
                        }
                    }, function (error) {
                        self.Message = error.error.err_message;
                        jQuery('#floatMessage').html(self.Message);
                        window.toastNotification(self.Message);
                        //jQuery('#ucFloatMessage').removeClass('hide');
                        /*jQuery('#ucFloatMessage').fadeOut()
                        .animate({bottom:40}, 1000, function() {
                                //call back
                        });*/
                        companyUsers.unsubscribe();
                    });
                }
                else {
                    _this.leaveComp = company.id;
                    jQuery('#leaveConfirmation').modal('show');
                }
            }
            else {
                self.Message = 'The company must have another admin!';
                //jQuery('#floatMessageUC').html(self.Message);
                window.toastNotification(self.Message);
            }
        }, function (error) {
            companyUsers.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.acceptInvite = function (company) {
        var self = this;
        var userApproval = self._userService.userApproval(company.sub_domain)
            .subscribe(function (success) {
            jQuery('.comp' + company.id).attr('checked', true);
            self.Message = "Successfully accepted Company request";
            window.toastNotification(self.Message);
            window.location.assign(self.protocol + company.sub_domain + self.subdomainExtension + '/dashboard');
            //self.getMyCompanies();
        }, function (error) {
            self.Message = error.error.err_message;
            window.toastNotification(self.Message);
            userApproval.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.createCompany = function () {
        var _this = this;
        var self = this;
        self.Message = '';
        jQuery('#btnCreateCompany').text('Please Wait...').attr('disabled', true);
        var createCompany = self._companyService.createCompany(self.createCompanyForm.value)
            .subscribe(function (success) {
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'AddCompany');
            _kmq.push(['record', 'Settings Company Added']);
            /*---------------------------------*/
            var storage = JSON.parse(self._cookieService.readCookie('storage'));
            storage.companyList.push(success.sub_domain);
            self._cookieService.createCookie('storage', JSON.stringify(storage), 3);
            jQuery('#add-new-company input').val('');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#add-new-company div.label-floating').addClass('is-empty');
            self.Message = 'Company Created Successfully!';
            window.toastNotification(self.Message);
            jQuery('#add-new-company').modal('hide');
            var cp = JSON.parse(_this._cookieService.readCookie('filepicker_token_json'));
            cp.push({ "key": success.sub_domain, "value": "in_trial" });
            _this._cookieService.createCookie('filepicker_token_json', JSON.stringify(cp), 3);
            window.location.assign(self.protocol + success.sub_domain + self.subdomainExtension + '/dashboard');
            //self.getMyCompanies();
        }, function (error) {
            if (error.code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION')
                self.Message = "sub-domain already taken";
            else if (error.error.err_errors != '')
                self.Message = error.error.err_errors.sub_domain.message;
            else
                self.Message = error.error.err_message;
            jQuery('#success-addCompany').removeClass('hide');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#btnCreateCompany').attr('disabled', false);
            createCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.searchCompany = function () {
        var _this = this;
        var self = this;
        var joined = false;
        self.Message = '';
        self.searchedCompanyList = [];
        self.joinedCompanyList = [];
        this.error = false;
        jQuery('#searchError').removeClass('hide');
        if (self.joinCompanyForm.value.searchCompany.length > 2) {
            var searchCompany_1 = self._companyService.searchCompany(self.joinCompanyForm.value.searchCompany)
                .subscribe(function (success) {
                _this.error = false;
                jQuery('#success-joinCompany').addClass('hide');
                self.searchedCompanyList = [];
                self.joinedCompanyList = [];
                self.invitedCompanyList = [];
                success.companies.forEach(function (company) {
                    joined = false;
                    for (var i = 0; i < self.myCompaniesList.length; i++) {
                        if (self.myCompaniesList[i].sub_domain === company.sub_domain) {
                            if (self.myCompaniesList[i].user_company.status === 'REQUESTED' && self.myCompaniesList[i].user_company.active === false)
                                self.joinedCompanyList.push(new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */](company));
                            else if (self.myCompaniesList[i].user_company.status === 'INVITED' && self.myCompaniesList[i].user_company.active === false)
                                self.invitedCompanyList.push(new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */](company));
                            joined = true;
                            break;
                        }
                    }
                    if (!joined) {
                        self.searchedCompanyList.push(new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */](company));
                    }
                });
                if (self.searchedCompanyList.length === 0 && self.joinedCompanyList.length === 0 && self.invitedCompanyList.length === 0) {
                    self.Message = 'No Companies Found';
                    jQuery('#searchError').addClass('hide');
                    jQuery('#success-joinCompany').removeClass('hide');
                }
            }, function (error) {
                _this.error = true;
                self.Message = error.error.err_message;
                jQuery('#success-joinCompany').removeClass('hide');
                searchCompany_1.unsubscribe();
            });
        }
        else {
            this.error = true;
        }
    };
    UserCompaniesComponent.prototype.joinCompany = function (company) {
        var self = this;
        jQuery('#join' + company.id).html('Please Wait...');
        var joinCompany = self._companyService.joinCompany(company.id)
            .subscribe(function (success) {
            jQuery('#join' + company.id).html('Request sent');
            jQuery('#joined' + company.id).removeClass('companies-box-hover');
            jQuery('#joined' + company.id).addClass('companies-box-request');
            self.getMyCompanies();
        }, function (error) {
            self.Message = error.error.err_message;
            jQuery('#success-joinCompany').removeClass('hide');
            joinCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.deleteMe = function () {
        jQuery('#leaveConfirmation').modal('hide');
        var self = this;
        var deleteCompany = self._companyService.leaveCompany(self.leaveComp)
            .subscribe(function (success) {
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'LeaveCompany');
            _kmq.push(['record', 'Settings Company Left']);
            /*---------------------------------*/
            window.toastNotification('Company Left Successfully');
            self._userService.logout()
                .subscribe(function () {
                self.loggedInService.logout();
                window.location.assign(self.protocol + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].PARENT_APP_DOMAIN);
            });
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            deleteCompany.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case 'EDITCOMPANY':
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'EditCompany');
                _kmq.push(['record', 'Settings Edit Company Click']);
                break;
            case 'LEAVECOMPANY':
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'LeaveCompany');
                _kmq.push(['record', 'Settings Leave Company Click']);
                break;
            case 'ADDCOMPANY':
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'AddCompany');
                _kmq.push(['record', 'Settings Add Company Click']);
                break;
            case 'JOINCOMPANY':
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'JoinCompany');
                _kmq.push(['record', 'Settings Join Company Click']);
                break;
        }
    };
    UserCompaniesComponent.prototype.showDetails = function (company) {
        this.clickedCompany = company;
        jQuery('#companyLists').addClass('hide');
        jQuery('#companyDetails').removeClass('hide');
    };
    UserCompaniesComponent.prototype.backToList = function () {
        jQuery('#companyDetails').addClass('hide');
        jQuery('#companyLists').removeClass('hide');
    };
    UserCompaniesComponent.prototype.generateApiKey = function (compId) {
        var _this = this;
        var self = this;
        var generateApiKey = self._companyService.generateApiKey(compId)
            .subscribe(function (success) {
            _this.clickedCompany = new __WEBPACK_IMPORTED_MODULE_5__shared_models_company__["a" /* Company */](success);
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            generateApiKey.unsubscribe();
        });
    };
    UserCompaniesComponent.prototype.copyApi = function () {
        clipboard.copy(jQuery('#input-api')[0].value);
        window.toastNotification('API Copied');
    };
    UserCompaniesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-user-companies',
            template: __webpack_require__(1097),
            styles: [__webpack_require__(1045), __webpack_require__(922)],
            inputs: ['myCompaniesList']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["e" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["e" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["g" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["b" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["b" /* LoggedInService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["c" /* CookieService */]) === 'function' && _g) || Object])
    ], UserCompaniesComponent);
    return UserCompaniesComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());


/***/ },

/***/ 958:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_company__ = __webpack_require__(403);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return APIIntegrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var APIIntegrationComponent = (function () {
    function APIIntegrationComponent(_companyService, router, settingsCommunicationService) {
        this._companyService = _companyService;
        this.router = router;
        this.settingsCommunicationService = settingsCommunicationService;
        this.Message = '';
        this.companies = [];
        this.clickedCompany = new __WEBPACK_IMPORTED_MODULE_3__shared_models_company__["a" /* Company */]({});
        this.apiKey = '';
    }
    APIIntegrationComponent.prototype.ngOnInit = function () {
        this.getMyCompanies();
    };
    APIIntegrationComponent.prototype.getMyCompanies = function () {
        var self = this;
        var getCompany = self._companyService.getCompanies()
            .subscribe(function (success) {
            self.myCompaniesList = [];
            self.activeInCompanies = [];
            success.forEach(function (company, index) {
                if (company.user_company.status != 'LEFT' && company.user_company.status != 'DELETED') {
                    self.myCompaniesList.push(new __WEBPACK_IMPORTED_MODULE_3__shared_models_company__["a" /* Company */](company));
                    if (company.user_company.active)
                        self.activeInCompanies.push(new __WEBPACK_IMPORTED_MODULE_3__shared_models_company__["a" /* Company */](company));
                    self.companies.push(company);
                    if (company.api == null)
                        self.generateApiKey(company._id, index, 'Generated');
                }
            });
            self.settingsCommunicationService.updateCompanyList(self.myCompaniesList);
            // self.myCompaniesListUpdated.emit(self.myCompaniesList);
        }, function (error) {
            getCompany.unsubscribe();
        });
    };
    APIIntegrationComponent.prototype.generateApiKey = function (compId, index, scope) {
        if (scope === void 0) { scope = 'Regenerated'; }
        var self = this;
        jQuery('#regenerate-api-' + index).html('Please Wait...');
        var generateApiKey = self._companyService.generateApiKey(compId)
            .subscribe(function (success) {
            if (scope !== 'Generated')
                window.toastNotification('API Key ' + scope);
            jQuery('#regenerate-api-' + index).addClass('hide');
            self.companies[index].api = success.api;
            jQuery('#regenerate-api-' + index).html('Regenerate');
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            generateApiKey.unsubscribe();
            jQuery('#regenerate-api-' + index).html('Regenerate');
        });
    };
    APIIntegrationComponent.prototype.copyApi = function (index) {
        clipboard.copy(jQuery('#input-api-' + index)[0].innerText);
        window.toastNotification('API Copied');
    };
    APIIntegrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-api-setting',
            template: __webpack_require__(1098),
            styles: [__webpack_require__(1046)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _c) || Object])
    ], APIIntegrationComponent);
    return APIIntegrationComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 959:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiIntegration_component__ = __webpack_require__(958);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__apiIntegration_component__["a"]; });



/***/ },

/***/ 960:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__membership_component__ = __webpack_require__(962);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__membership_component__["a"]; });



/***/ },

/***/ 961:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoice_component__ = __webpack_require__(917);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__invoice_component__["a"]; });



/***/ },

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscription_index__ = __webpack_require__(964);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_index__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_currentPlan__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MembershipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MembershipComponent = (function () {
    function MembershipComponent(fb, _membershipService, _script, _cookieService) {
        this.fb = fb;
        this._membershipService = _membershipService;
        this._script = _script;
        this._cookieService = _cookieService;
        this.monthsArray = [];
        this.yearsArray = [];
        this.currentYear = '';
        this.error = false;
        this.errorMessage = '';
        this.CardDetail = new __WEBPACK_IMPORTED_MODULE_5__shared_models_currentPlan__["a" /* Card */](null);
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
        //this.currentMonth =  (new Date).getMonth()+1;
        this.currentYear = (new Date).getFullYear();
        //this.getPaymentDetails();
        this.setupPaymentForm = this.fb.group({
            cardNumber1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber3: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber4: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]*$')])],
            nameOnCard: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(3)])],
            cvv: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]*$')])],
            cardMonth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]*$')])],
            cardYear: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[0-9]*$')])]
        });
        jQuery('.modal').on('hidden.bs.modal', function () {
            this.errorMessage = '';
            this.error = 'false';
        });
        jQuery.material.init();
        this.userRole = localStorage.getItem('role');
    };
    MembershipComponent.prototype.ngAfterViewInit = function () {
        this._script.load('cardValidator')
            .then(function (data) {
            //console.log('Scripts Loadedaaaaaaaaaaaaaaaa', data);
        })
            .catch(function (error) {
            //console.log('Script failed to load',error);
        });
    };
    MembershipComponent.prototype.onChangeCardNumber = function (cardNum) {
        var self = this;
        jQuery(cardNum).validateCreditCard(function (result) {
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
            _this.CardDetail = new __WEBPACK_IMPORTED_MODULE_5__shared_models_currentPlan__["a" /* Card */](success.card);
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
                    /*==== Analytics Tracking and Payment Tracking code here ====*/
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
                    var url = window.location.href;
                    if (url.toLowerCase().indexOf("outgrow.co") >= 0) {
                        var leadDynoData = {
                            purchase_code: 'Tinker',
                            purchase_amount: 0
                        };
                        if (success.invoice) {
                        }
                        LeadDyno.recordPurchase(success.customer.email, leadDynoData);
                    }
                    /*=====================*/
                    window.toastNotification('Payment successfully done and plan is changed.');
                    _this.isChangePlan = false;
                    _this.changeToPlan = '';
                }, function (error) {
                    _this.error = true;
                    _this.errorMessage = 'Your card was declined.';
                    jQuery('#btnSetupCard span').text('Make Payment').attr('disabled', false);
                    //jQuery('#btnSetupCard').html('Make Payment').attr('disabled',false);
                    changeSubscription_1.unsubscribe();
                });
            }
            if (_this.isChangePlan && _this.changeToPlan != '' && !_this.changeToPlan.billing.status) {
                jQuery('#btnSetupCard span').text('Please Wait...').attr('disabled', true);
                //jQuery('#btnSetupCard span').text('Please Wait...').attr('disabled',true);
                _this.reactivate();
            }
            else {
                jQuery('#cc-modal').modal('hide');
                jQuery('#btnSetupCard span').text('Submit').attr('disabled', false);
                //jQuery('#btnSetupCard').html('Submit').attr('disabled',false);
                jQuery('#cc-modal input').val('');
                window.toastNotification('Payment successfully added');
            }
            _this.errorMessage = '';
            /*---- Tracking code goes here ----*/
            if (window.location.href.indexOf('outgrow.co') >= 0) {
                fbq('track', 'AddPaymentInfo');
            }
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'Settings Add Payment Method');
            _kmq.push(['record', 'Settings Payment Method Added']);
            /*---------------------------------*/
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.error.err_message;
            console.log('>>>>>>>>>>>>>>>', _this.isChangePlan);
            if (_this.isChangePlan)
                jQuery('#btnSetupCard span').text('Make Payment').attr('disabled', false);
            else
                jQuery('#btnSetupCard span').text('Submit').attr('disabled', false);
            //jQuery('#btnSetupCard').html('Submit').attr('disabled',false);
            setupPayment.unsubscribe();
        });
    };
    MembershipComponent.prototype.reactivate = function () {
        var _this = this;
        var reactivateMembership = this._membershipService.activateNow()
            .subscribe(function (success) {
            window.toastNotification('You have Successfully Reactivated ');
            //this._cookieService.createCookie('filepicker_token_json', JSON.stringify(response.companyAccess), 3);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__subscription_index__["a" /* SubscriptionComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__subscription_index__["a" /* SubscriptionComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__subscription_index__["a" /* SubscriptionComponent */]) === 'function' && _a) || Object)
    ], MembershipComponent.prototype, "subsComp", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__invoice_index__["a" /* InvoiceComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__invoice_index__["a" /* InvoiceComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__invoice_index__["a" /* InvoiceComponent */]) === 'function' && _b) || Object)
    ], MembershipComponent.prototype, "invoice", void 0);
    MembershipComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-membership',
            template: __webpack_require__(1100),
            styles: [__webpack_require__(1048)],
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["h" /* MembershipService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["d" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["d" /* Script */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["c" /* CookieService */]) === 'function' && _f) || Object])
    ], MembershipComponent);
    return MembershipComponent;
    var _a, _b, _c, _d, _e, _f;
}());


/***/ },

/***/ 963:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentComponent = (function () {
    function PaymentComponent(_membershipService, fb, _cookieService, _script) {
        this._membershipService = _membershipService;
        this.fb = fb;
        this._cookieService = _cookieService;
        this._script = _script;
        this.BillingDetails = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["c" /* Customer */](null);
        this.BillingAddress = '';
        this.CardDetail = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["a" /* Card */](null);
        this.error = false;
        this.errorMessage = '';
        this.CardDetailChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
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
            inputName: [this.BillingDetails.first_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(3)])],
            inputAddress: [this.BillingAddress.line1, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(3)])],
            inputCity: [this.BillingAddress.city, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(3)])],
            inputState: [this.BillingAddress.state, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(3)])],
            inputCountry: [this.BillingAddress.country, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required])],
            inputZipCode: [this.BillingAddress.zip, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.userRole = this._cookieService.readCookie('role');
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
        this._script.load('cardValidator', 'timeZoneMin')
            .then(function (data) {
            //console.log('Scripts Loaded', data);
        })
            .catch(function (error) {
            //console.log('Script failed to load',error);
        });
    };
    PaymentComponent.prototype.getPaymentDeatils = function () {
        var _this = this;
        var self = this;
        self.loadingPayDet = true;
        var getPaymentDeatils = self._membershipService.getBillingAddress()
            .subscribe(function (success) {
            console.log('getpaydet', success);
            _this.BillingDetails = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["c" /* Customer */](success.customer);
            _this.BillingAddress = _this.BillingDetails.billing_address;
            _this.CardDetail = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["a" /* Card */](success.card);
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
            _this.BillingDetails = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["c" /* Customer */](success.customer);
            _this.BillingAddress = _this.BillingDetails.billing_address;
            _this.CardDetail = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["a" /* Card */](success.card);
            _this.CardDetailChanged.emit(_this.CardDetail);
            _this.viewBillingAddress();
            jQuery('#btnBilling').html('Save').attr('disables', false);
            _this.error = false;
            _this.errorMessage = '';
            jQuery('#BillingAddressMessage').html('Billing address updated successfully');
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'Settings Billing Info Edited');
            _kmq.push(['record', 'Settings Billing Info Edited']);
            /*---------------------------------*/
            window.toastNotification('Billing address updated successfully');
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
        // if(this.CardDetail.expiry_year < this.currentYear)
        // 	this.cardExpired = true;
        // else if(this.CardDetail.expiry_year === this.currentYear && this.CardDetail.expiry_month < this.currentMonth)
        // 	this.cardExpired = true;
        // if(this.CardDetail.expiry_year === this.currentYear && this.CardDetail.expiry_month === this.currentMonth)
        // 	this.CardWillExpire = true;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-payment',
            template: __webpack_require__(1101),
            styles: [__webpack_require__(1049)],
            outputs: ['CardDetailChanged'],
            inputs: ['CardDetail', 'card_status', 'userRole', 'cardType']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["h" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["h" /* MembershipService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["c" /* CookieService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* Script */]) === 'function' && _d) || Object])
    ], PaymentComponent);
    return PaymentComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 964:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscription_component__ = __webpack_require__(918);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__subscription_component__["a"]; });



/***/ },

/***/ 965:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_component__ = __webpack_require__(966);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__notification_component__["a"]; });



/***/ },

/***/ 966:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-noti-setting',
            template: __webpack_require__(1103),
            styles: [__webpack_require__(1051)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationComponent);
    return NotificationComponent;
}());


/***/ },

/***/ 967:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(settingsCommunicationService) {
        this.settingsCommunicationService = settingsCommunicationService;
        this.CompaniesList = this.settingsCommunicationService.companyList;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.Message = 'message';
        this.sideNavbar = 'settings';
        this.sidenav = 1;
    };
    SettingsComponent.prototype.ngAfterViewInit = function () {
        /*hide help icon on dashboard for mobile screen */
        setTimeout(function () { return jQuery('.builder-help-icon').addClass('hide'); }, 2000);
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-settings',
            template: __webpack_require__(1104),
            styles: [__webpack_require__(1052)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _a) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a;
}());


/***/ },

/***/ 968:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__teamSetting_component__ = __webpack_require__(969);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__teamSetting_component__["a"]; });



/***/ },

/***/ 969:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_company__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_user__ = __webpack_require__(879);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TeamSettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeamSettingComponent = (function () {
    function TeamSettingComponent(_companyService, fb, router, _userService, loggedInService, settingsCommunicationService, _cookieService, _script, _subDomainService) {
        this._companyService = _companyService;
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this.loggedInService = loggedInService;
        this.settingsCommunicationService = settingsCommunicationService;
        this._cookieService = _cookieService;
        this._script = _script;
        this._subDomainService = _subDomainService;
        this.logedInUserName = '';
        this.subdomainExtension = '';
        this.protocol = '';
        // myCompaniesListUpdated = new EventEmitter<any>();
        this.myCompaniesList = [];
        this.currentCompany = '';
        // company_id : any ;
        this.currentCompanyUsers = [];
        this.searchedCompanyList = [];
        this.joinedCompanyList = [];
        this.invitedCompanyList = [];
        this.accessRequestUserName = '';
        this.accessRequestUserEmail = '';
        this.accessRequestUserId = '';
        this.hasRequest = false;
        this.isAdmin = false;
        this.isUserExist = false;
        this.adminCount = 0;
        this.selectedFilter = 'All Users';
        this.Message = '';
        this.leaveComp = '';
        this.selectedCompany = '';
        this.loading = false;
    }
    TeamSettingComponent.prototype.ngOnInit = function () {
        if (this._cookieService.readCookie('storage') !== null) {
            var storage = JSON.parse(this._cookieService.readCookie('storage'));
            this.logedInUserName = storage.user.username;
        }
        this.subdomainExtension = '.' + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].APP_EXTENSION;
        this.protocol = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PROTOCOL;
        this.inviteUserForm = this.fb.group({
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z ]*$')])],
            userEmail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__["a" /* EmailValidator */].format])],
            userRole: ['MANAGER', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])]
        });
        this.createCompanyForm = this.fb.group({
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.joinCompanyForm = this.fb.group({
            searchCompany: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(3)])]
        });
        this.acceptRequestForm = this.fb.group({
            userRole: ['MANAGER', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])]
        });
        //this.getMyCompanies();
        jQuery.material.init();
        this.getCompany();
    };
    TeamSettingComponent.prototype.ngAfterViewInit = function () {
        this._script.load('slimScroll')
            .then(function (data) {
            jQuery('.slimscroll').slimscroll();
            jQuery('.modal').on('hidden.bs.modal', function () {
                jQuery('.success-message').addClass('hide');
                jQuery('.onoffswitch-checkbox').attr('checked', false);
            });
        })
            .catch(function (error) {
            //console.log('Script not loaded', error);
        });
    };
    /*	getMyCompanies() {
            let self = this;
            self._companyService.getCompanies()
                .subscribe(
                    (success:any)=> {
                        self.myCompaniesList = [];
                        success.forEach((company:any)=> {
                            if(company.user_company.status !== 'DELETED' && company.user_company.status !== 'LEFT')
                                self.myCompaniesList.push(new Company(company));
                            if(company.user_company.status == 'APPROVED' || (company.user_company.status == 'INVITED' && company.user_company.active)){
                                self.selectCompany(new Company(company));
                            }
                        });
                        self.settingsCommunicationService.updateCompanyList(self.myCompaniesList);
                        // self.myCompaniesListUpdated.emit(self.myCompaniesList);
                        console.log('comp list',self.myCompaniesList);
                    },
                    (error:any)=> {
                        console.log('getMyCompanies TS', error.error.err_message);
                    }
                );
        }*/
    TeamSettingComponent.prototype.getCompany = function () {
        this.isAdmin = false;
        // this.currentCompany = new Company(null);
        var self = this;
        jQuery('#actuser').addClass('active');
        jQuery('#invuser').removeClass('active');
        jQuery('#accreq').removeClass('active');
        jQuery('#active-users').addClass('active');
        jQuery('#invited-users').removeClass('active');
        jQuery('#access-requests').removeClass('active');
        this.selectedCompany = window.location.href.split('//')[1].split('.')[0];
        if (this.selectedCompany !== 'app') {
            var subDomainExist_1 = this._companyService.isSubDomainExist(this.selectedCompany)
                .subscribe(function (success) {
                self.currentCompany = new __WEBPACK_IMPORTED_MODULE_6__shared_models_company__["a" /* Company */](success);
                self.getSelectedCompanyUsers();
            }, function (error) {
                subDomainExist_1.unsubscribe();
            });
        }
    };
    TeamSettingComponent.prototype.getSelectedCompanyUsers = function () {
        var _this = this;
        var self = this;
        self.isAdmin = false;
        this.loading = true;
        var getCompanyUsers = this._companyService.getCompanyUsers(self.currentCompany.id)
            .subscribe(function (success) {
            self.hasRequest = false;
            self.currentCompanyUsers = [];
            self.adminCount = 0;
            success.forEach(function (user) {
                if (user.username !== self.logedInUserName)
                    self.currentCompanyUsers.push(new __WEBPACK_IMPORTED_MODULE_7__shared_models_user__["a" /* User */](user));
                else {
                    self.currentCompanyUsers.unshift(new __WEBPACK_IMPORTED_MODULE_7__shared_models_user__["a" /* User */](user));
                    if (user.user_company.role === 'ADMIN')
                        self.isAdmin = true;
                }
                if (self.adminCount < 1 && user.user_company.role === 'ADMIN' && user.username !== self.logedInUserName && user.user_company.active) {
                    self.adminCount++;
                }
                if (user.user_company.status === 'REQUESTED')
                    self.hasRequest = true;
                jQuery('#actuser').addClass('active');
                jQuery('#invuser').removeClass('active');
                jQuery('#accreq').removeClass('active');
            });
            _this.loading = false;
        }, function (error) {
            getCompanyUsers.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.selectFilter = function (filter) {
        this.selectedFilter = filter;
    };
    TeamSettingComponent.prototype.waitForApprove = function () {
        window.toastNotification('Wait for Approval by Admin');
    };
    TeamSettingComponent.prototype.inviteUser = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnInvite').text('Please Wait...').attr('disabled', true);
        jQuery('#success-addUser').addClass('hide');
        //self.isUserExist = false;
        //console.log('sel',self.currentCompany);
        /*for(var i=0; i<self.currentCompanyUsers.length; i++){
            if(user.emails[0].email === self.inviteUserForm.value.userEmail){
                self.isUsersExist = true;
                break;
            }
        }
        if(self.isUserExist){
            self.Message = 'User with '
                                        + self.inviteUserForm.value.userEmail
                                        + 'email is already in '
                                        + self.currentCompany.name
                                        + ' company';
            jQuery('#success-addUser').removeClass('hide');
            jQuery('#btnInvite').text('Add New User');
        }
        else{*/
        if (!self.exist(self.inviteUserForm.value.userEmail)) {
            var addUser_1 = self._companyService.addUser(self.inviteUserForm.value, this.currentCompany.id)
                .subscribe(function (success) {
                /*---- Tracking event code here ----*/
                ga('markettingteam.send', 'event', 'Settings', 'Submit', 'AddUser');
                _kmq.push(['record', 'Builder Settings User Invited']);
                /*----------------------------------*/
                jQuery('#add-new-user input').val('');
                jQuery('.name').addClass('is-empty');
                jQuery('.email').addClass('is-empty');
                jQuery('#radioAdmin').prop('checked', false);
                jQuery('#radioManager').prop('checked', true);
                jQuery('#btnInvite').text('Add New User');
                jQuery('#add-new-user div.label-floating').addClass('is-empty');
                self.Message = 'User Invited Successfully!';
                window.toastNotification(self.Message);
                jQuery('#btnInvite').attr('disabled', false);
                jQuery('#add-new-user').modal('hide');
                self.getSelectedCompanyUsers();
            }, function (error) {
                var error_code = error.error.code;
                jQuery('#success-addUser').removeClass('hide');
                if (error_code === 'E_UNIQUE_USERNAME_VALIDATION' ||
                    error_code === 'E_UNIQUE_EMAIL_VALIDATION' ||
                    error_code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION' ||
                    error_code === 'E_USER_COMPANY_ALREADY_EXISTS') {
                    self.Message = ' This user is already a part of this company on Outgrow';
                }
                else if (error_code === 'E_USER_LIMIT_EXCEEDED') {
                    self.Message = error.error.err_message;
                    jQuery('#upgradeLink').html('<button type="button">UPGRADE</button>');
                }
                else {
                    if (error.error.err_errors['emails.0.email'].message === 'Please use a valid company email address to sign up for Outgrow :)') {
                        self.Message = 'You can only invite users with a valid company email address';
                    }
                    if (error.error.err_errors['emails.0.email'].message === 'Please try signing up with a real email address.') {
                        self.Message = 'The email address you have entered is invalid or does not exist.';
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
                jQuery('#add-new-user input').val('');
                jQuery('#radioAdmin').prop('checked', false);
                jQuery('#radioManager').prop('checked', true);
                addUser_1.unsubscribe();
            });
        }
        else {
            self.Message = ' This user is already a part of this company on Outgrow';
            jQuery('#success-addUser').removeClass('hide');
            jQuery('#btnInvite').text('Add New User');
            jQuery('#btnInvite').attr('disabled', false);
        }
        //}
    };
    TeamSettingComponent.prototype.closeAddUser = function () {
        jQuery('#add-new-user').modal('hide');
        jQuery('#success-addUser').addClass('hide');
    };
    TeamSettingComponent.prototype.upgradeNavigation = function () {
        jQuery('#add-new-user').modal('hide');
        jQuery('#success-addUser').addClass('hide');
        this.router.navigate(['/settings/membership']);
    };
    TeamSettingComponent.prototype.exist = function (email) {
        for (var i = 0; i < this.currentCompanyUsers.length; i++) {
            if (this.currentCompanyUsers[i].emails[0].email === email) {
                return true;
            }
        }
        return false;
    };
    TeamSettingComponent.prototype.createCompany = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnCreateCompany').text('Please Wait...').attr('disabled', true);
        var createCompany = self._companyService.createCompany(self.createCompanyForm.value)
            .subscribe(function (success) {
            /*---- Tracking event code here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'AddCompany');
            _kmq.push(['record', 'Builder Settings Company Added']);
            /*----------------------------------*/
            jQuery('#add-new-company input').val('');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#add-new-company div.label-floating').addClass('is-empty');
            self.Message = 'Company Created Successfully!';
            jQuery('#add-new-company').modal('hide');
            window.toastNotification(self.Message);
            //self.getMyCompanies();
            console.log("CULPRIT 2");
            jQuery(location).attr('href', self.protocol + self.createCompanyForm.value.companyname + self.subdomainExtension + '/settings');
        }, function (error) {
            self.Message = error.error.err_message;
            jQuery('#success-addCompany').removeClass('hide');
            jQuery('#btnCreateCompany').text('Add New Company');
            jQuery('#btnCreateCompany').attr('disabled', false);
            createCompany.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.searchCompany = function () {
        var self = this;
        var joined = false;
        self.Message = '';
        self.searchedCompanyList = [];
        self.joinedCompanyList = [];
        if (self.joinCompanyForm.value.searchCompany.length > 2) {
            var searchCompany_1 = self._companyService.searchCompany(self.joinCompanyForm.value.searchCompany)
                .subscribe(function (success) {
                jQuery('#success-joinCompany').addClass('hide');
                self.searchedCompanyList = [];
                self.joinedCompanyList = [];
                self.invitedCompanyList = [];
                success.companies.forEach(function (company) {
                    joined = false;
                    for (var i = 0; i < self.myCompaniesList.length; i++) {
                        if (self.myCompaniesList[i].sub_domain === company.sub_domain) {
                            if (self.myCompaniesList[i].user_company.status === 'REQUESTED' && self.myCompaniesList[i].user_company.active === false) {
                                self.joinedCompanyList.push(new __WEBPACK_IMPORTED_MODULE_6__shared_models_company__["a" /* Company */](company));
                                joined = true;
                            }
                            else if (self.myCompaniesList[i].user_company.status === 'INVITED' && self.myCompaniesList[i].user_company.active === false) {
                                self.invitedCompanyList.push(new __WEBPACK_IMPORTED_MODULE_6__shared_models_company__["a" /* Company */](company));
                                joined = true;
                            }
                            break;
                        }
                    }
                    if (!joined) {
                        self.searchedCompanyList.push(new __WEBPACK_IMPORTED_MODULE_6__shared_models_company__["a" /* Company */](company));
                    }
                });
                if (self.searchedCompanyList.length === 0 && self.joinedCompanyList.length === 0 && self.invitedCompanyList.length === 0) {
                    self.Message = 'No Companies Found';
                    jQuery('#success-joinCompany').removeClass('hide');
                }
            }, function (error) {
                self.Message = error.error.err_message;
                jQuery('#success-joinCompany').removeClass('hide');
                searchCompany_1.unsubscribe();
            });
        }
    };
    TeamSettingComponent.prototype.joinCompany = function (company) {
        var self = this;
        jQuery('#join' + company.id).html('Please Wait...');
        var joinCompany = self._companyService.joinCompany(company.id)
            .subscribe(function (success) {
            jQuery('#join' + company.id).html('Request sent');
            jQuery('#joined' + company.id).removeClass('companies-box-hover');
            jQuery('#joined' + company.id).addClass('companies-box-request');
            //self.getMyCompanies();
        }, function (error) {
            joinCompany.unsubscribe();
            // self.Message = error.error.err_message;
            // jQuery('#success-joinCompany').removeClass('hide');
        });
    };
    TeamSettingComponent.prototype.leaveCompany = function (company) {
        this.leaveComp = company.id;
        var self = this;
        if (self.adminCount >= 1) {
            //if(self.myCompaniesList.length > 1)
            if (self.myApprovedCompanies() > 1) {
                var leaveCompany_1 = self._companyService.leaveCompany(company.id)
                    .subscribe(function (success) {
                    self.Message = 'Successfully left ' + company.name;
                    window.toastNotification(self.Message);
                    //self.getMyCompanies();
                    self.getSelectedCompanyUsers();
                    var curUrlDomain = window.location.hostname.split('.')[0];
                    var redirectDomain = '';
                    if (curUrlDomain === company.sub_domain) {
                        for (var i = 0; i < self.myCompaniesList.length; i++) {
                            if (curUrlDomain !== self.myCompaniesList[i].sub_domain && self.myCompaniesList[i].user_company.active) {
                                redirectDomain = self.myCompaniesList[i].sub_domain + self.subdomainExtension;
                                break;
                            }
                        }
                        jQuery(location).attr('href', self.protocol + redirectDomain);
                    }
                }, function (error) {
                    self.Message = error.error.message;
                    window.toastNotification(self.Message);
                    leaveCompany_1.unsubscribe();
                });
            }
            else {
                jQuery('#leaveConfirmation').modal('show');
            }
        }
        else {
            self.Message = 'The company must have another admin!';
            window.toastNotification(self.Message);
        }
    };
    TeamSettingComponent.prototype.myApprovedCompanies = function () {
        var self = this;
        var approveCount = 0;
        var getCompany = self._companyService.getCompanies()
            .subscribe(function (success) {
            success.forEach(function (company) {
                if (company.user_company.status == 'APPROVED' || (company.user_company.status == 'INVITED' && company.user_company.active)) {
                    approveCount++;
                }
            });
        }, function (error) {
            getCompany.unsubscribe();
        });
        return approveCount;
    };
    TeamSettingComponent.prototype.deleteUser = function (user) {
        var self = this;
        self.Message = '';
        var delteUser = self._companyService.removeUser(self.currentCompany.id, user.id)
            .subscribe(function (success) {
            self.Message = user.name + ' Successfully removed';
            window.toastNotification(self.Message);
            self.getSelectedCompanyUsers();
        }, function (error) {
            self.Message = error.error.err_message;
            window.toastNotification(self.Message);
            delteUser.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.makeManager = function (user) {
        var self = this;
        if (self.adminCount >= 1) {
            var makeManager_1 = self._companyService.makeManager(self.currentCompany.id, user.id)
                .subscribe(function (success) {
                if (user.username == self.logedInUserName) {
                    localStorage.setItem('role', 'MANAGER');
                }
                self.Message = 'User access has been changed successfully';
                window.toastNotification(self.Message);
                self.getSelectedCompanyUsers();
            }, function (error) {
                self.Message = error.error.err_message;
                window.toastNotification(self.Message);
                makeManager_1.unsubscribe();
            });
        }
        else {
            self.Message = 'Company must have at least one Admin';
            window.toastNotification(self.Message);
        }
    };
    TeamSettingComponent.prototype.makeAdmin = function (user) {
        var self = this;
        var makeAdmin = self._companyService.makeAdmin(self.currentCompany.id, user.id)
            .subscribe(function (success) {
            if (user.username == self.logedInUserName) {
                localStorage.setItem('role', 'ADMIN');
            }
            //self.Message = 'Successfully changed ' + user.name + '\'s role to Admin';
            self.Message = 'User access has been changed successfully';
            window.toastNotification(self.Message);
            self.getSelectedCompanyUsers();
        }, function (error) {
            self.Message = error.error.err_message;
            window.toastNotification(self.Message);
            makeAdmin.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.accessRequestPopup = function (user) {
        jQuery('.user' + user.id).attr('checked', true);
        this.accessRequestUserId = user.id;
        this.accessRequestUserName = user.name;
        this.accessRequestUserEmail = user.emails[0].email;
        jQuery('#accept-access-req').modal('show');
    };
    TeamSettingComponent.prototype.deleteMe = function () {
        jQuery('#leaveConfirmation').modal('hide');
        var self = this;
        var leaveCompany = self._companyService.leaveCompany(self.leaveComp)
            .subscribe(function (success) {
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'LeaveCompany');
            _kmq.push(['record', 'Builder Settings Left Company']);
            /*---------------------------------*/
            self.Message = 'Company Left Successfully';
            window.toastNotification(self.Message);
            self._userService.logout()
                .subscribe(function () {
                self.loggedInService.logout();
                window.location.assign(self.protocol + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].PARENT_APP_DOMAIN);
            });
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            leaveCompany.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.acceptRequest = function () {
        var self = this;
        self.Message = '';
        jQuery('#btnAccetpRequest').text('Please Wait...').attr('disabled', true);
        var acceptRequest = self._companyService.approveUser(self.accessRequestUserId, self.currentCompany.id, self.acceptRequestForm.value.userRole)
            .subscribe(function (success) {
            jQuery('#btnAccetpRequest').text('Approve Request');
            self.Message = 'User request accepted Successfully!';
            jQuery('#btnAccetpRequest').attr('disabled', false);
            jQuery('#accept-access-req').modal('hide');
            window.toastNotification(self.Message);
            self.getSelectedCompanyUsers();
        }, function (error) {
            self.Message = error.error.err_message;
            jQuery('#success-acceptUser').removeClass('hide');
            jQuery('#btnAccetpRequest').text('Approve Request');
            jQuery('#btnAccetpRequest').attr('disabled', false);
            acceptRequest.unsubscribe();
        });
    };
    TeamSettingComponent.prototype.closeModal = function () {
        jQuery('#add-new-user').modal('hide');
        jQuery('#add-new-user input').val('');
    };
    TeamSettingComponent.prototype.closeLayover = function () {
        setTimeout(function () {
            jQuery('.float-changes-updated').fadeIn()
                .animate({ bottom: -50 }, 800, function () { });
        }, 4000);
    };
    TeamSettingComponent.prototype.hideError = function () {
        this.Message = '';
        jQuery('#success-addUser').addClass('hide');
        //jQuery('.alert').addClass('hide');
    };
    TeamSettingComponent.prototype.membDetails = function () {
        jQuery('#membDet').addClass('active');
        jQuery('#membDet-m').addClass('active');
        jQuery('#teamSet').removeClass('active');
        jQuery('#teamSet-m').removeClass('active');
        jQuery('#notif').removeClass('active');
        jQuery('#accSet').removeClass('active');
        jQuery('#accSet-m').removeClass('active');
        jQuery('#team-settings').addClass('hide');
        jQuery('#membership-details').removeClass('hide');
        jQuery('#noti-settings').addClass('hide');
        jQuery('#my-account').addClass('hide');
        jQuery('#membDet a').attr('aria-expanded', true);
        jQuery('#membDet-m a').attr('aria-expanded', true);
        jQuery('#teamSet a').attr('aria-expanded', false);
        jQuery('#teamSet-m a').attr('aria-expanded', false);
        jQuery('#notif a').attr('aria-expanded', false);
        jQuery('#accSet a').attr('aria-expanded', false);
        jQuery('#accSet-m a').attr('aria-expanded', false);
    };
    TeamSettingComponent.prototype.callGA = function (opt) {
        switch (opt) {
            case "ADDUSERCLICK":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'AddUser');
                _kmq.push(['record', 'Builder Settings Add User Click']);
                break;
            case "ADDCOMPANY":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'AddCompany');
                _kmq.push(['record', 'Builder Settings Add Company Click']);
                break;
            case "JOINCOMPANY":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'JoinCompany');
                _kmq.push(['record', 'Builder Settings Join Company Click']);
                break;
            case "LEAVECOMPANY":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'LeaveCompany');
                _kmq.push(['record', 'Builder Settings Leave Company Click']);
                break;
            case "UPGRADEPLAN":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'UpgradeMembership');
                _kmq.push(['record', 'Builder Settings Upgrade Plan Click']);
                break;
            case "DELETEUSER":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'DeleteUser');
                _kmq.push(['record', 'Builder Settings Delete User Click']);
                break;
            case "MAKEMANAGER":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'MakeManager');
                _kmq.push(['record', 'Builder Settings Make Manager Click']);
                break;
            case "MAKEADMIN":
                ga('markettingteam.send', 'event', 'Settings', 'Click', 'MakeAdmin');
                _kmq.push(['record', 'Builder Settings Make Admin Click']);
                break;
        }
    };
    TeamSettingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-team-setting',
            template: __webpack_require__(1105),
            styles: [__webpack_require__(922)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["e" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["e" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["g" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["g" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["b" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["b" /* LoggedInService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["c" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["c" /* CookieService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["d" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["d" /* Script */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["a" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["a" /* SubDomainService */]) === 'function' && _j) || Object])
    ], TeamSettingComponent);
    return TeamSettingComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());


/***/ }

});
//# sourceMappingURL=1.map