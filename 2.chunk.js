webpackJsonp([2,10],{

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sideNavbar_component__ = __webpack_require__(1002);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sideNavbar_component__["a"]; });



/***/ },

/***/ 1002:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function SideNavbarComponent() {
        this.currentTab = 'team-setting';
        this.sideNaveBarHeader = '';
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
        var curUrlDomain = window.location.pathname.split('/');
        this.currentTab = curUrlDomain[curUrlDomain.length - 1];
        //this.showTab(this.currentTab);
        if (this.currentTab === 'membership' || this.currentTab === 'my-account')
            window.location.pathname = window.location.pathname.split('/')[1];
        jQuery('#lgScrWrapperContent').addClass('hide');
    };
    SideNavbarComponent.prototype.showTab = function (tab) {
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
        else if (tab === 'api-key') {
            jQuery('#apikey').addClass('active');
            jQuery('#apikey-m').addClass('active');
            //jQuery('.wrapper-content').removeClass('hide');
            this.sideNaveBarHeader = 'API Key';
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
    SideNavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-sideNavbar',
            template: __webpack_require__(1124),
            styles: [__webpack_require__(1055)],
        }), 
        __metadata('design:paramtypes', [])
    ], SideNavbarComponent);
    return SideNavbarComponent;
}());


/***/ },

/***/ 1028:
/***/ function(module, exports) {

module.exports = "\n/* custom material css start (sahil) */\n.sahil-material .form-control {\n    height: 38px;\n    padding: 7px 0;\n    font-size: 14px;\n    line-height: 1.42857143;\n    font-family: montserratregular;\n    color: #62696d;\n}\n.sahil-material .form-group label.control-label {\n    font-size: 14px;\n    line-height: 1.07142857;\n    color: #8e989f;\n    font-weight: 400;\n    margin: 16px 0 0 0;\n    font-family: montserratregular;\n}\n.sahil-material .form-group label.control-label.seo-static-label{\n    text-transform: uppercase !important;\n    font-size: 11px; \n    color: #8e989f !important;\n}\n.sahil-material .form-group.label-floating label.control-label, \n.sahil-material .form-group.label-placeholder label.control-label {\n    top: -7px;\n    font-size: 14px;\n    line-height: 18px;\n    color: #8e989f;\n}\n.sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n    top: -20px; \n    font-family: montserratregular;\n    font-size: 11px; \n    font-family: montserratregular;\n    color: #8e989f !important;\n}\n.sahil-material .form-group.label-floating.is-focused label.control-label {\n    top: -20px; \n    font-size: 10px; \n    font-family: montserratregular;\n    color: #8e989f !important;\n}\n.sahil-material .form-group.is-focused label,\n.sahil-material .form-group.is-focused label.control-label {\n    font-size: 11px; \n    font-family: montserratregular;\n    color: #8e989f !important;\n    text-transform: uppercase;\n}\n.sahil-material .form-control,\n.sahil-material .form-group .form-control {\n    border: 0 !important;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n    background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#d7dbdd, #d7dbdd);\n    background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n}\n.sahil-material .form-group.is-focused .form-control {\n    outline: none;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n    background-image: -o-linear-gradient(#fb545b, #fb545b), -o-linear-gradient(#D2D2D2, #D2D2D2);\n    background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n    -webkit-background-size: 100% 2px, 100% 1px;\n            background-size: 100% 2px, 100% 1px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    -webkit-transition-duration: 0.3s;\n        -o-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n}\n\n/* custom material css end (sahil) */\n\n/* Start: Responsiveness */\n\n  .mobile-menu {\n      display: none;\n  }\n\n  .white-logo {\n      display: none !important;\n  }\n\n  .company-list,\n  .name-list {\n      width: 100%;\n      float: left;\n  }\n\n  @media (max-width: 767px) {\n      #userProfile-header .navbar-fixed-top .nav-padding {\n          padding-right: 0px;\n          padding-left: 0px;\n      }\n\n      .full-menu,\n      .dash-circle,\n      .dash-prog-outer h2 {\n          display: none;\n      }\n\n      .main-logo {\n          display: none !important;\n      }\n\n      .mobile-menu {\n          display: block;\n          float: right;\n          margin-top: 7px;\n          position: relative;\n      }\n\n      #userProfile-header .navbar-default {\n          background: #fb5f66 !important;\n          border: none;\n          margin-top: 0px;\n      }\n\n      #userProfile-header .navbar-default .mat-icon i.material-icons {\n          font-size: 24px;\n          color: #fff;\n          padding: 13px;\n      }\n\n      #userProfile-header .navbar-header h4.title {\n          color: #fff;\n          font-size: 16px;\n          text-align: center;\n          text-transform: uppercase;\n          padding-top: 7px;\n      }\n\n      .mobile-menu button {\n          border: none;\n          box-shadow: none;\n          color: #fff;\n          background: none;\n          float: right;\n          margin: 0px 5px;\n      }\n\n      .mobile-menu .btn-default:hover {\n          color: #fff;\n          background: none;\n      }\n\n      .mobile-dash {\n          padding: 0px;\n      }\n\n      .mobile-menu .dropdown-menu {\n          background: #62696d;\n          top: -11px;\n          border-radius: 0px;\n          left: -176px;\n          width: 235px;\n          font-family: montserratlight;\n          padding-bottom: 55px;\n      }\n\n      .mobile-menu .name-dropdown-border {\n          width: 100%;\n          margin: 5px 0px;\n      }\n\n      .mobile-menu .user-outr {\n          float: left;\n          width: 100%;\n          padding: 0;\n          margin: 0px;\n          display: block;\n      }\n\n      .mobile-menu .user-outr li {\n          float: right;\n          font-size: 24px;\n          font-family: montserratlight;\n          color: #fff;\n          margin-right: 24px;\n          /* margin: 10px 19px; */\n          margin-top: 8px;\n          margin-bottom: 6px;\n      }\n\n      .mobile-menu .user-outr li a {\n          margin-right: 30px;\n      }\n      \n      .user-outr li a {\n          float: left;\n          width: auto;\n          border: 2px solid #dae2e6;\n          border-radius: 50%;\n          margin-left: 5px;\n          margin-bottom: 5px;\n      }\n\n      .user-outr li a:hover {\n          border: 2px solid #f56151;\n      }\n\n      .mobile-menu .company-list li,\n      .mobile-menu .name-list li {\n          margin: 10px 0px;\n          text-align: right;\n          font-size: 16px;\n          width: 100%;\n          float: left;\n          padding-right: 20px;\n      }\n\n      .mobile-menu .company-list li a,\n      .mobile-menu .name-list li a {\n          float: right;\n          color: #fff;\n      }\n\n      .mobile-menu .company-list li a i {\n          margin-right: 20px;\n          float: left;\n      }\n\n      .mobile-menu .name-list li a i {\n          margin-left: 20px;\n          float: right;\n      }\n\n      .mobile-menu .company-list-title {\n          float: left;\n          color: #fff;\n      }\n\n      .white-logo {\n          display: block !important;\n      }\n\n      .dash-prog-outer {\n          float: left;\n          width: 100%;\n          margin-top: 10px;\n          margin-bottom: 10px;\n      }\n\n      .dash-prog-outer h5 {\n          font-size: 24px;\n          text-align: center;\n          width: 100%;\n          margin-bottom: 1px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper {\n          min-height: 35px;\n          width: 100%;\n          text-align: center;\n      }\n\n      .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n          margin: 0 auto;\n          float: none;\n          text-align: center;\n      }\n\n      #userProfile-header .navbar-header {\n          float: left;\n          margin-left: -5px;\n          margin-right: 0px !important;\n      }\n\n      #userProfile-header .navbar-logopadding {\n          padding-right: 0px;\n          padding-top: 0px;\n      }\n\n      #userProfile-header .navbar-default {\n          height: 50px;\n          margin: 0px;\n          padding-bottom: 0px;\n      }\n\n      .white-logo .navbar-brand img {\n          height: 53px;\n          margin-top: -20px;\n          margin: 0 auto;\n          margin-top: -20px;\n      }\n\n      .white-logo .navbar-brand {\n          float: none;\n      }\n\n      .user-outr li a.add-user {\n          width: 45px;\n          height: 45px;\n          padding-top: 9px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n          top: -30px;\n          left: 17px;\n          font-size: 34px;\n          position: relative;\n          color: #f87b80;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n          font-size: 16px;\n      }\n\n      .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n          width: 91%;\n          font-size: 14px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n          width: 35px;\n          height: 35px;\n          padding-top: 8px;\n          font-size: 14px;\n          top: 13px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n          font-size: 14px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n          font-size: 24px;\n      }\n\n      .company-block-content {\n          margin-left: 50px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n          left: 42px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n          right: 34px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n          top: 8px;\n          left: -8px;\n      }\n\n  }\n\n  @media (max-width: 1900px) {\n      .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n          font-size: 10px !important;\n      }\n\n      .sahil-material .form-group.label-floating.is-focused label.control-label {\n          font-size: 10px !important;\n      }\n\n      .my-profile .form-group.time-zone label.control-label {\n          font-size: 10px !important;\n      }\n  }\n\n/* End: Responsiveness */"

/***/ },

/***/ 1029:
/***/ function(module, exports) {

module.exports = ".ng-valid[required] {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid {\n  border-left: 5px solid #a94442; /* red */\n}\n"

/***/ },

/***/ 1030:
/***/ function(module, exports) {

module.exports = ".ng-valid[required] {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid {\n  border-left: 5px solid #a94442; /* red */\n}\n"

/***/ },

/***/ 1031:
/***/ function(module, exports) {

module.exports = ".label {\n  border-radius: 1px;\n}\n.label,\n.label.label-default {\n  background-color: #9e9e9e;\n}\n.label.label-inverse {\n  background-color: #3f51b5;\n}\n.label.label-primary {\n  background-color: #009688;\n}\n.label.label-success {\n  background-color: #4caf50;\n}\n.label.label-info {\n  background-color: #03a9f4;\n}\n.label.label-warning {\n  background-color: #ff5722;\n}\n.label.label-danger {\n  background-color: #f44336;\n}\n.form-control,\n.form-group .form-control {\n  border: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  -webkit-background-size: 0 2px, 100% 1px;\n          background-size: 0 2px, 100% 1px;\n  background-repeat: no-repeat;\n  background-position: center bottom, center -webkit-calc(100% - 1px);\n  background-position: center bottom, center calc(100% - 1px);\n  background-color: rgba(0, 0, 0, 0);\n  -webkit-transition: background 0s ease-out;\n       -o-transition: background 0s ease-out;\n          transition: background 0s ease-out;\n  float: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 0;\n}\n.form-group .form-control.material-textarea {\n  min-height: 5em;\n}\n.form-control::-moz-placeholder,\n.form-group .form-control::-moz-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder,\n.form-group .form-control:-ms-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder,\n.form-group .form-control::-webkit-input-placeholder {\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control[readonly],\n.form-group .form-control[readonly],\n.form-control[disabled],\n.form-group .form-control[disabled],\nfieldset[disabled] .form-control,\nfieldset[disabled] .form-group .form-control {\n  background-color: rgba(0, 0, 0, 0);\n}\n.form-control[disabled],\n.form-group .form-control[disabled],\nfieldset[disabled] .form-control,\nfieldset[disabled] .form-group .form-control {\n  background-image: none;\n  border-bottom: 1px dotted #D2D2D2;\n}\n.form-group {\n  position: relative;\n}\n.form-group.label-static label.control-label,\n.form-group.label-placeholder label.control-label,\n.form-group.label-floating label.control-label {\n  position: absolute;\n  pointer-events: none;\n  -webkit-transition: 0.3s ease all;\n       -o-transition: 0.3s ease all;\n          transition: 0.3s ease all;\n}\n.form-group.label-floating label.control-label {\n  will-change: left, top, contents;\n}\n.form-group.label-placeholder:not(.is-empty) label.control-label {\n  display: none;\n}\n.form-group .help-block {\n  position: absolute;\n  display: none;\n}\n.form-group.is-focused .form-control {\n  outline: none;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#009688, #009688), linear-gradient(#D2D2D2, #D2D2D2);\n  -webkit-background-size: 100% 2px, 100% 1px;\n          background-size: 100% 2px, 100% 1px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition-duration: 0.3s;\n       -o-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n}\n.form-group.is-focused .form-control .material-input:after {\n  background-color: #009688;\n}\n.form-group.is-focused label,\n.form-group.is-focused label.control-label {\n  color: #009688;\n}\n.form-group.is-focused.label-placeholder label,\n.form-group.is-focused.label-placeholder label.control-label {\n  color: #BDBDBD;\n}\n.form-group.is-focused .help-block {\n  display: block;\n}\n.form-group.has-warning .form-control {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.form-group.has-warning.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#ff5722), to(#ff5722)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#ff5722, #ff5722), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: -o-linear-gradient(#ff5722, #ff5722), -o-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#ff5722, #ff5722), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-warning label.control-label,\n.form-group.has-warning .help-block {\n  color: #ff5722;\n}\n.form-group.has-error .form-control {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.form-group.has-error.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f44336), to(#f44336)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#f44336, #f44336), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: -o-linear-gradient(#f44336, #f44336), -o-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#f44336, #f44336), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-error label.control-label,\n.form-group.has-error .help-block {\n  color: #f44336;\n}\n.form-group.has-success .form-control {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.form-group.has-success.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#4caf50), to(#4caf50)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#4caf50, #4caf50), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: -o-linear-gradient(#4caf50, #4caf50), -o-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#4caf50, #4caf50), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-success label.control-label,\n.form-group.has-success .help-block {\n  color: #4caf50;\n}\n.form-group.has-info .form-control {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.form-group.has-info.is-focused .form-control {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#03a9f4), to(#03a9f4)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n  background-image: -webkit-linear-gradient(#03a9f4, #03a9f4), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: -o-linear-gradient(#03a9f4, #03a9f4), -o-linear-gradient(#D2D2D2, #D2D2D2);\n  background-image: linear-gradient(#03a9f4, #03a9f4), linear-gradient(#D2D2D2, #D2D2D2);\n}\n.form-group.has-info label.control-label,\n.form-group.has-info .help-block {\n  color: #03a9f4;\n}\n.form-group textarea {\n  resize: none;\n}\n.form-group textarea ~ .form-control-highlight {\n  margin-top: -11px;\n}\n.form-group select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.form-group select ~ .material-input:after {\n  display: none;\n}\n.form-control {\n  margin-bottom: 7px;\n}\n.form-control::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.checkbox label,\n.radio label,\nlabel {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\nlabel.control-label {\n  font-size: 12px;\n  line-height: 1.07142857;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.help-block {\n  margin-top: 0;\n  font-size: 12px;\n}\n.form-group {\n  padding-bottom: 7px;\n  margin: 28px 0 0 0;\n}\n.form-group .form-control {\n  margin-bottom: 7px;\n}\n.form-group .form-control::-moz-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .form-control:-ms-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .form-control::-webkit-input-placeholder {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group .checkbox label,\n.form-group .radio label,\n.form-group label {\n  font-size: 16px;\n  line-height: 1.42857143;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group label.control-label {\n  font-size: 12px;\n  line-height: 1.07142857;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group .help-block {\n  margin-top: 0;\n  font-size: 12px;\n}\n.form-group.label-floating label.control-label,\n.form-group.label-placeholder label.control-label {\n  top: -7px;\n  font-size: 16px;\n  line-height: 1.42857143;\n}\n.form-group.label-static label.control-label,\n.form-group.label-floating.is-focused label.control-label,\n.form-group.label-floating:not(.is-empty) label.control-label {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857;\n}\n.form-group.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -30px;\n  left: 0;\n  font-size: 12px;\n  line-height: 1.07142857;\n}\n.form-group.form-group-sm {\n  padding-bottom: 3px;\n  margin: 21px 0 0 0;\n}\n.form-group.form-group-sm .form-control {\n  margin-bottom: 3px;\n}\n.form-group.form-group-sm .form-control::-moz-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control:-ms-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .form-control::-webkit-input-placeholder {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm .checkbox label,\n.form-group.form-group-sm .radio label,\n.form-group.form-group-sm label {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-sm label.control-label {\n  font-size: 9px;\n  line-height: 1.125;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-sm .help-block {\n  margin-top: 0;\n  font-size: 9px;\n}\n.form-group.form-group-sm.label-floating label.control-label,\n.form-group.form-group-sm.label-placeholder label.control-label {\n  top: -11px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.form-group.form-group-sm.label-static label.control-label,\n.form-group.form-group-sm.label-floating.is-focused label.control-label,\n.form-group.form-group-sm.label-floating:not(.is-empty) label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-sm.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -25px;\n  left: 0;\n  font-size: 9px;\n  line-height: 1.125;\n}\n.form-group.form-group-lg {\n  padding-bottom: 9px;\n  margin: 30px 0 0 0;\n}\n.form-group.form-group-lg .form-control {\n  margin-bottom: 9px;\n}\n.form-group.form-group-lg .form-control::-moz-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control:-ms-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .form-control::-webkit-input-placeholder {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg .checkbox label,\n.form-group.form-group-lg .radio label,\n.form-group.form-group-lg label {\n  font-size: 18px;\n  line-height: 1.3333333;\n  color: #BDBDBD;\n  font-weight: 400;\n}\n.form-group.form-group-lg label.control-label {\n  font-size: 14px;\n  line-height: 0.99999998;\n  color: #BDBDBD;\n  font-weight: 400;\n  margin: 16px 0 0 0;\n}\n.form-group.form-group-lg .help-block {\n  margin-top: 0;\n  font-size: 14px;\n}\n.form-group.form-group-lg.label-floating label.control-label,\n.form-group.form-group-lg.label-placeholder label.control-label {\n  top: -5px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.form-group.form-group-lg.label-static label.control-label,\n.form-group.form-group-lg.label-floating.is-focused label.control-label,\n.form-group.form-group-lg.label-floating:not(.is-empty) label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 0.99999998;\n}\n.form-group.form-group-lg.label-floating input.form-control:-webkit-autofill ~ label.control-label label.control-label {\n  top: -32px;\n  left: 0;\n  font-size: 14px;\n  line-height: 0.99999998;\n}"

/***/ },

/***/ 1032:
/***/ function(module, exports) {

module.exports = "\n/* switch new css (sahil) */\n\n.companies-card .onoffswitch {\n    position: relative;\n    width: 80px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.companies-card .onoffswitch-checkbox {\n    display: none;\n}\n\n.companies-card .onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.companies-card .onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n\n.companies-card .onoffswitch-inner:before,\n.companies-card .onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 13px;\n    color: white;\n    box-sizing: border-box;\n    font-weight: normal;\n}\n\n.companies-card .onoffswitch-inner:before {\n    content: \"Accept\";\n    padding-left: 10px;\n    background-color: #00c853;\n    color: #FFFFFF;\n    font-weight: normal;\n    text-align: left;\n}\n\n.companies-card .onoffswitch-inner:after {\n    content: \"Accept\";\n    padding-right: 10px;\n    background-color: #EEEEEE;\n    color: #999999;\n    text-align: right;\n}\n\n.companies-card .onoffswitch-switch {\n    display: block;\n    width: 14px;\n    height: 14px;\n    margin: 3px;\n    background: #FFFFFF;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 56px;\n    border-radius: 20px;\n    transition: all 0.3s ease-in 0s;\n}\n\n.companies-card .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n\n.companies-card .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n}\n\n#companyDetails .companyDetail-inner{\n    border:1px solid #000;\n    padding:10px 10px;\n}\n#companyDetails .companyDetail-inner .details{\n    margin-top:30px;\n}\n.table-company-detail{\n    width: 100%;\n}\n.table-company-detail tr{\n    height:30px;\n}\n.table-company-detail td{\n    width:50%;\n}\n#input-api{\n    border: none;\n    background: inherit;\n}"

/***/ },

/***/ 1033:
/***/ function(module, exports) {

module.exports = ".api-keyoutr{\n    padding-left: 30px;\n    padding-right: 30px;\n}\n.api-keyoutr h3{\n    float: left;\n    width: 100%;\n    font-size: 16px;\n    color: #62696d;\n    margin-top: 0px;\n    font-family: montserratregular;\n}\n.api-key-table{\n    float: left;\n    width: 100%;\n    margin-top: 15px;\n}\n.api-key-table-top{\n    float: left;\n    width: 100%;\n    border-bottom: 1px solid #dae2e6;\n}\n.api-key-table-top .pl0{\n    padding-left: 0px;\n}\n.api-key-table-top p{\n    font-size:14px;\n    color:#bec5c9;\n    font-family: montserratregular;\n}\n.api-key-tablelist{\n    float: left;\n    width: 100%;\n    padding-top: 13px;\n    padding-bottom: 13px;\n    border-bottom: 1px solid #dae2e6;\n}\n.api-tablelist-left{\n    float: left;\n    width: 70px;\n}\n.api-tablelist-left span{\n    width: 60px;\n    height: 60px;\n    background: #269fd8;\n    text-align: center;\n    display: table-cell;\n    vertical-align: middle;\n    color: #fff;\n    font-family: montserratlight;\n    font-size: 24px;\n    border-radius: 50%;\n}\n.api-tablelist-left span.red{\n    background: #f87b80 !important;\n}\n.api-tablelist-right{\n    float: left;\n    width: 72%;\n    margin-top: 12px;\n    padding-left: 10px;\n}\n.api-tablelist-right p{\n    float: left;\n    width: 90%;\n    font-size: 16px;\n    margin-bottom: 0;\n    color: #62696d;\n    font-family: montserratregular;\n}\n.api-tablelist-right label{\n    float: left;\n    width: 90%;\n    font-size: 11px;\n    color: #62696d;\n    font-family: montserratregular;\n}\n.api-key-generate{\n    width: 90%;\n    font-size: 12px;\n    color: #62696d;\n    font-family: montserratregular;\n    vertical-align: middle;\n    word-wrap: break-word;\n    float: left;\n    margin-top: 20px;\n}\n.api-key-actions{\n    float: left;\n    width: 100%;\n    margin-top: 15px;\n    padding-left: 30px;\n}\n.api-key-actions a{\n    float: left;\n    font-size: 13px;\n    color: #62696d;\n    font-family: montserratregular;\n    opacity: 0.6;\n}\n.api-key-actions a:hover{\n    color:#fb545b;\n}\n.api-key-actions a:nth-child(2){\n    /*float: right;*/\n    text-align: left;\n    margin-left: 25px;\n}\n.api-key-actions a i{\n    font-size: 18px;\n    position: relative;\n    top: 4px;\n    opacity: 0.6;\n} \n\n.action-last {\n    padding-left: 30px;\n}\n\n\n/* responsive css sahil */\n\n@media (min-width: 320px) and (max-width:768px) {\n\n    .api-key-table-top{\n        display: none;\n    }\n    .api-tablelist-left span{\n        width: 45px;\n        height: 45px;\n    }\n    .api-tablelist-right{\n        margin-top: 0px;\n    }\n    .api-key-generate{\n        margin-left: 80px;\n        width: 80%;\n        margin-top: 0px;\n    }\n    .api-key-actions{\n        margin-left: 80px;\n        width: 80%;\n        margin-top: 5px;\n    }\n    .api-key-actions a{\n        margin-right: 15px;\n    }\n    .api-key-actions a:nth-child(2){\n        float: left;\n        margin-left: 0px;\n    }\n    \n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 1034:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1035:
/***/ function(module, exports) {

module.exports = "/* Start: Responsiveness */\n\n  .mobile-menu {\n      display: none;\n  }\n\n  .white-logo {\n      display: none !important;\n  }\n\n  .company-list,\n  .name-list {\n      width: 100%;\n      float: left;\n  }\n\n  @media (max-width: 767px) {\n      #userProfile-header .navbar-fixed-top .nav-padding {\n          padding-right: 0px;\n          padding-left: 0px;\n      }\n\n      .full-menu,\n      .dash-circle,\n      .dash-prog-outer h2 {\n          display: none;\n      }\n\n      .main-logo {\n          display: none !important;\n      }\n\n      .mobile-menu {\n          display: block;\n          float: right;\n          margin-top: 7px;\n          position: relative;\n      }\n\n      #userProfile-header .navbar-default {\n          background: #fb5f66 !important;\n          border: none;\n          margin-top: 0px;\n      }\n\n      #userProfile-header .navbar-default .mat-icon i.material-icons {\n          font-size: 24px;\n          color: #fff;\n          padding: 13px;\n      }\n\n      #userProfile-header .navbar-header h4.title {\n          color: #fff;\n          font-size: 16px;\n          text-align: center;\n          text-transform: uppercase;\n          padding-top: 7px;\n      }\n\n      .mobile-menu button {\n          border: none;\n          box-shadow: none;\n          color: #fff;\n          background: none;\n          float: right;\n          margin: 0px 5px;\n      }\n\n      .mobile-menu .btn-default:hover {\n          color: #fff;\n          background: none;\n      }\n\n      .mobile-dash {\n          padding: 0px;\n      }\n\n      .mobile-menu .dropdown-menu {\n          background: #62696d;\n          top: -11px;\n          border-radius: 0px;\n          left: -176px;\n          width: 235px;\n          font-family: montserratlight;\n          padding-bottom: 55px;\n      }\n\n      .mobile-menu .name-dropdown-border {\n          width: 100%;\n          margin: 5px 0px;\n      }\n\n      .mobile-menu .user-outr {\n          float: left;\n          width: 100%;\n          padding: 0;\n          margin: 0px;\n          display: block;\n      }\n\n      .mobile-menu .user-outr li {\n          float: right;\n          font-size: 24px;\n          font-family: montserratlight;\n          color: #fff;\n          margin-right: 24px;\n          /* margin: 10px 19px; */\n          margin-top: 8px;\n          margin-bottom: 6px;\n      }\n\n      .mobile-menu .user-outr li a {\n          margin-right: 30px;\n      }\n      \n      .user-outr li a {\n          float: left;\n          width: auto;\n          border: 2px solid #dae2e6;\n          border-radius: 50%;\n          margin-left: 5px;\n          margin-bottom: 5px;\n      }\n\n      .user-outr li a:hover {\n          border: 2px solid #f56151;\n      }\n\n      .mobile-menu .company-list li,\n      .mobile-menu .name-list li {\n          margin: 10px 0px;\n          text-align: right;\n          font-size: 16px;\n          width: 100%;\n          float: left;\n          padding-right: 20px;\n      }\n\n      .mobile-menu .company-list li a,\n      .mobile-menu .name-list li a {\n          float: right;\n          color: #fff;\n      }\n\n      .mobile-menu .company-list li a i {\n          margin-right: 20px;\n          float: left;\n      }\n\n      .mobile-menu .name-list li a i {\n          margin-left: 20px;\n          float: right;\n      }\n\n      .mobile-menu .company-list-title {\n          float: left;\n          color: #fff;\n      }\n\n      .white-logo {\n          display: block !important;\n      }\n\n      .dash-prog-outer {\n          float: left;\n          width: 100%;\n          margin-top: 10px;\n          margin-bottom: 10px;\n      }\n\n      .dash-prog-outer h5 {\n          font-size: 24px;\n          text-align: center;\n          width: 100%;\n          margin-bottom: 1px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper {\n          min-height: 35px;\n          width: 100%;\n          text-align: center;\n      }\n\n      .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n          margin: 0 auto;\n          float: none;\n          text-align: center;\n      }\n\n      #userProfile-header .navbar-header {\n          float: left;\n          margin-left: -5px;\n          margin-right: 0px !important;\n      }\n\n      #userProfile-header .navbar-logopadding {\n          padding-right: 0px;\n          padding-top: 0px;\n      }\n\n      #userProfile-header .navbar-default {\n          height: 50px;\n          margin: 0px;\n          padding-bottom: 0px;\n      }\n\n      .white-logo .navbar-brand img {\n          height: 53px;\n          margin-top: -20px;\n          margin: 0 auto;\n          margin-top: -20px;\n      }\n\n      .white-logo .navbar-brand {\n          float: none;\n      }\n\n      .user-outr li a.add-user {\n          width: 45px;\n          height: 45px;\n          padding-top: 9px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n          top: -30px;\n          left: 17px;\n          font-size: 34px;\n          position: relative;\n          color: #f87b80;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n          font-size: 16px;\n      }\n\n      .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n          width: 91%;\n          font-size: 14px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n          width: 35px;\n          height: 35px;\n          padding-top: 8px;\n          font-size: 14px;\n          top: 13px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n          font-size: 14px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n          font-size: 24px;\n      }\n\n      .company-block-content {\n          margin-left: 50px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n          left: 42px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n          right: 34px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n          top: 8px;\n          left: -8px;\n      }\n\n  }\n\n  @media (max-width: 1900px) {\n      .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n          font-size: 10px !important;\n      }\n\n      .sahil-material .form-group.label-floating.is-focused label.control-label {\n          font-size: 10px !important;\n      }\n\n      .my-profile .form-group.time-zone label.control-label {\n          font-size: 10px !important;\n      }\n  }\n\n  @media screen and (min-width: 320px) and (max-width: 320px) {\n      #membership-details .nav-tabs.nav-justified > li:nth-child(1) > a {\n          padding: 18px 3px;\n      }\n\n      #membership-details .nav-tabs.nav-justified > li:nth-child(2) > a {\n          padding: 18px 12px;\n      }\n\n      #subscription .membership-details .btn-red-outline{\n          white-space: normal !important;\n          max-width: 275px;\n      }\n\n  }\n\n  @media screen and (min-width: 1024px) and (max-width: 1024px){\n      #membership-details .tab-content.tab-sub-content {\n          width: 74%;\n      }\n\n      .billing-plan-list {\n          width: 80%;\n          margin-left: 10%;\n      }\n\n      .billing-table {\n          margin-top: 30px;\n          margin-left: 0px;\n      }\n\n      .billing-grey {\n          width: 300px;\n          margin-left: 17%;\n          box-shadow: 0px 0px 19px rgba(60,60,60,0.29);\n      }\n\n      .billing-white {\n          top: 30px;\n          width: 300px;\n          margin-left: 17%;\n          margin-bottom: 90px;\n      }\n\n  }\n\n  @media screen and (min-width: 1280px) and (max-width: 1280px){\n      #membership-details .tab-content.tab-sub-content {\n          width: 80.91%;\n      }\n\n      .billing-grey-top h3.plan-title {\n          font-size: 25px;\n      }\n  }\n\n/* End: Responsiveness */\n\n"

/***/ },

/***/ 1036:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1037:
/***/ function(module, exports) {

module.exports = "#plans .panel\n{\n    text-align: center;\n}\n#plans .panel:hover { box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4), 0 1px 5px rgba(130, 130, 130, 0.35); }\n#plans .panel-body\n{\n    padding: 0px;\n    text-align: center;\n}\n\n#plans .the-price\n{\n    background-color: rgba(220,220,220,.17);\n    box-shadow: 0 1px 0 #dcdcdc, inset 0 1px 0 #fff;\n    padding: 20px;\n    margin: 0;\n}\n\n#plans.the-price h1\n{\n    line-height: 1em;\n    padding: 0;\n    margin: 0;\n}\n\n#plans .subscript\n{\n    font-size: 25px;\n}\n\n/* CSS-only ribbon styles    */\n#plans .cnrflash\n{\n    /*Position correctly within container*/\n    position: absolute;\n    top: -9px;\n    right: 4px;\n    z-index: 1; /*Set overflow to hidden, to mask inner square*/\n    overflow: hidden; /*Set size and add subtle rounding        to soften edges*/\n    width: 100px;\n    height: 100px;\n    border-radius: 3px 5px 3px 0;\n}\n#plans .cnrflash-inner\n{\n    /*Set position, make larger then            container and rotate 45 degrees*/\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 145px;\n    height: 145px;\n    -ms-transform: rotate(45deg); /* IE 9 */\n    -o-transform: rotate(45deg); /* Opera */\n    -moz-transform: rotate(45deg); /* Firefox */\n    -webkit-transform: rotate(45deg); /* Safari and Chrome */\n    -webkit-transform-origin: 100% 100%; /*Purely decorative effects to add texture and stuff*/ /* Safari and Chrome */\n    -ms-transform-origin: 100% 100%;  /* IE 9 */\n    -o-transform-origin: 100% 100%; /* Opera */\n    -moz-transform-origin: 100% 100%; /* Firefox */\n    background-image: linear-gradient(90deg, transparent 50%, rgba(255,255,255,.1) 50%), linear-gradient(0deg, transparent 0%, rgba(1,1,1,.2) 50%);\n    background-size: 4px,auto, auto,auto;\n    background-color: #aa0101;\n    box-shadow: 0 3px 3px 0 rgba(1,1,1,.5), 0 1px 0 0 rgba(1,1,1,.5), inset 0 -1px 8px 0 rgba(255,255,255,.3), inset 0 -1px 0 0 rgba(255,255,255,.2);\n}\n#plans .cnrflash-inner:before, .cnrflash-inner:after\n{\n    /*Use the border triangle trick to make                 it look like the ribbon wraps round it's                container*/\n    content: \" \";\n    display: block;\n    position: absolute;\n    bottom: -16px;\n    width: 0;\n    height: 0;\n    border: 8px solid #800000;\n}\n#plans .cnrflash-inner:before\n{\n    left: 1px;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n}\n#plans .cnrflash-inner:after\n{\n    right: 0;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n}\n#plans .cnrflash-label\n{\n    /*Make the label look nice*/\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    padding-bottom: 5px;\n    color: #fff;\n    text-shadow: 0 1px 1px rgba(1,1,1,.8);\n    font-size: 0.95em;\n    font-weight: bold;\n    text-align: center;\n}\n\n\n\n/* Start: Upgrade Plan Modal */\n    #upgrade-plan-popup .modal-content {\n        border-radius: 8px;\n        float: left;\n        width: 100%;\n    }\n\n    #upgrade-plan-popup .modal-header {\n        padding: 10px 17px;\n        border-bottom: none;\n        background: #fb6066;\n        border-radius: 7px 7px 0px 0px;\n    }\n\n\n    #upgrade-plan-popup.modal button.close.btn-close {\n        text-shadow: none;\n        position: absolute;\n        right: 15px;\n        top: 12px;\n        z-index: 9;\n        opacity: 1;\n        transition: all 0.3s ease 0s !important;\n    }\n\n    #upgrade-plan-popup.modal button.close.btn-help {\n        text-shadow: none;\n        position: absolute;\n        right: 40px;\n        top: 11px;\n        z-index: 9;\n        opacity: 1;\n        transition: all 0.3s ease 0s !important;\n    }\n\n    #upgrade-plan-popup.modal i.material-icons {\n        font-size: 16px;\n        color: #fff;\n    }\n\n    #upgrade-plan-popup.modal button.close.btn-help i.material-icons {\n        font-size: 14px;\n        color: #fff;\n    }\n\n    #upgrade-plan-popup .modal-title {\n        text-transform: uppercase;\n        color: #fff;\n        font-size: 14px;\n    }\n\n    #upgrade-plan-popup.modal .modal-body {\n        padding: 20px;\n    }\n\n    #upgrade-plan-popup .btn-red-outline {\n        color: #fb545b;\n        background-color: #fff;\n        border-color: #ffb5b8;\n        border-radius: 0;\n        font-size: 11px;\n        padding: 7px 20px;\n        margin: 60px 0px 0px;\n        transition: all 0.3s ease 0s;\n        font-family: montserratregular;\n        text-transform: uppercase;\n        float: right;\n    }\n\n    #upgrade-plan-popup.modal .btn-red-outline.hvr-sweep-to-right::before {\n        background: #ffb5b8 none repeat scroll 0 0;\n        color: #fff !important;\n    }\n\n    #upgrade-plan-popup.modal .btn-red-outline.hvr-sweep-to-right:hover{\n         color: #fff !important;\n    }\n\n    #upgrade-plan-popup.modal .btn-red-outline.hvr-sweep-to-right:focus, \n    #upgrade-plan-popup.modal .btn-red-outline.hvr-sweep-to-right:active {\n        color: #fff !important;\n        background: #ffb5b8 none repeat scroll 0 0 !important;\n    }\n\n    #upgrade-plan-popup.modal .form-group {\n        padding-bottom: 7px;\n        margin: 12px 0 0px 0;\n        clear: none;\n    }\n\n    #upgrade-plan-popup.modal .form-group label.control-label.label-filled {\n        font-size: 12px;\n        color: #666666;\n        font-weight: 400;\n        margin: 0;\n        font-family: montserratlight;\n        float: left;\n        /*width: 25%;*/\n    }\n\n    #upgrade-plan-popup.modal .form-group .form-control.input-filled {\n        height: 14px;\n        padding: 0px;\n        font-size: 13px;\n        line-height: 12px;\n        font-family: montserratregular;\n        color: #666666;\n        background: none;\n        float: left;\n        width: 58%;\n        padding-right: 15px;\n    }\n\n    #upgrade-plan-popup.modal span.coloumn{\n        line-height: 10px;\n        font-size: 14px;\n        color: #666;\n        float: left;\n        width: 8%;\n    }\n\n    #upgrade-plan-popup .modal-footer {\n        padding: 0px 22px 20px;\n        text-align: right;\n        border-top: none;\n    }\n\n    #upgrade-plan-popup.modal .form-group.form-group-radio {\n        float: left;\n        width: auto;\n        margin-top: 18px;\n    }\n\n    #upgrade-plan-popup .footer-text{\n        font-size: 10px;\n        text-align: left;\n        margin-top: 10px;\n        line-height: 14px;\n        float:left;\n        width: 80%;\n        font-family: montserratlight;\n    }\n\n    #upgrade-plan-popup.modal .alert-info {\n        color: #62696d;\n        background-color: #eceff0;\n        border-color: #eceff0;\n        border-radius: 0px;\n        font-size: 12px;\n        font-family: montserratlight;\n        line-height: 20px;\n        padding: 15px 20px;\n    }\n\n    #upgrade-plan-popup.modal .alert-info p {\n        margin: 0;\n    }\n\n    #upgrade-plan-popup.modal button#btnCoupon {\n        font-size: 11px;\n        color: #fb545b;\n        border-radius: 0px;\n        margin-left: 25px;\n        text-transform: uppercase;\n        border: 1px solid #fb545b;\n        opacity: 1;\n        padding: 4px 12px;\n        margin-top: 5px;\n    }\n\n    #upgrade-plan-popup.modal .upgrade-tabs-wrapper {\n        padding: 0px;\n    }\n\n    #upgrade-plan-popup.modal .nav-tabs.nav-justified {\n        margin-top: 20px;\n    }\n    \n    #upgrade-plan-popup.modal .tab-content {\n        padding: 25px 5px;\n    }\n\n    #upgrade-plan-popup.modal .tab-content .tab-pane h5.title {\n        font-size: 16px;\n        color: #62696d;\n        font-family: montserratregular;\n        text-transform: none;\n        font-weight: normal;\n        margin-top: 0px;\n        margin-bottom: 12px;\n        float: left;\n        width: 100%;\n    }\n\n    #upgrade-plan-popup.modal .tab-content .tab-pane h6.title {\n        font-size: 13px;\n        color: #62696d;\n        font-family: montserratregular;\n        text-transform: none;\n        font-weight: normal;\n        margin-top: 0px;\n    }\n\n    #upgrade-plan-popup.modal .tab-content .tab-pane span p {\n        font-size: 12px;\n        color: #62696d;\n        font-family: montserratlight;\n        margin-bottom: 0px;\n        line-height: 18px;\n        float: left;\n        width: 100%;\n    }\n\n    #upgrade-plan-popup.modal .tab-content .tab-pane span p.tiny-text {\n        padding-top: 26px !important;\n    }\n\n    #upgrade-plan-popup.modal .tab-content .tab-pane#tab_default_2 span p {\n        padding-bottom: 10px;\n    }\n\n    #upgrade-plan-popup.modal .tab-content .tab-pane span.upgrade-plan-left {\n        font-size: 12px;\n        color: #62696d;\n        font-family: montserratlight;\n        line-height: 26px;\n    }\n\n    #upgrade-plan-popup.modal .tab-content .tab-pane span.upgrade-plan-right {\n        font-size: 12px;\n        color: #62696d;\n        font-family: montserratregular;\n        line-height: 26px;\n    }\n\n    #upgrade-plan-popup.modal .tab-content .tab-pane p.tiny-text{\n        font-size: 10px !important;\n        color: #62696d;\n        font-family: montserratlight;\n        padding-top: 10px;\n        float: left;\n        width: 100%;\n        padding-top: 26px;\n    }\n\n    #couponFormDiv .control-label {\n        font-size: 13px;\n    }\n\n    #couponFormDiv input {\n        height: 36px;\n    }\n\n    #upgrade-plan-popup.modal span.minus {\n        float: left;\n        position: relative;\n        left: -10px;\n        top: 0px;\n        width: 1px;\n    }\n\n    /* Start: new changes */\n        .subscription-changes-panel {\n            float: left;\n            width: 100%;\n        }\n\n        .subscription-changes-panel h6.title {\n            font-size: 16px;\n            color: #62696d;\n            font-family: montserratregular;\n            margin-top: 0px;\n        }\n\n        .subscription-changes-panel .sub-title{\n            font-size: 12px;\n            color: #62696d;\n            font-family: montserratlight;\n        }\n\n        .subscription-changes-panel .subs-detail {\n            float: left;\n            width: 100%;\n            margin-top: 20px;\n            margin-bottom: 10px;\n        }\n\n        .subscription-changes-panel .subs-detail .subs-label {\n            font-size: 12px;\n            color: #666666;\n            font-family: montserratlight;\n            margin-bottom: 10px;\n        }\n\n        .subscription-changes-panel .subs-detail .subs-filled {\n            font-size: 13px;\n            color: #666666;\n            font-family: montserratregular;\n        }\n\n        .current-payment-details-panel {\n            float: left;\n            width: 100%;\n        }\n\n        .current-payment-details-panel h6.title-bg {\n            background: rgba(189, 197, 200, 0.4);\n            /*min-height: 28px;*/\n            font-size: 14px;\n            color: #61686e;\n            font-family: montserratregular;\n            padding: 5px 7px 7px;\n        }\n\n        .current-payment-details-panel .title-bg i.material-icons {\n            font-size: 14px !important;\n            color: #61686e !important;\n            position: relative;\n            top: 2px;\n        }\n\n        .current-payment-details-panel .sub-title{\n            font-size: 12px;\n            color: #62696d;\n            font-family: montserratlight;\n        }\n\n        .current-payment-details-panel .current-payment-detail {\n            float: left;\n            width: 100%;\n            margin-top: 10px;\n            margin-bottom: 10px;\n        }\n\n        .current-payment-details-panel .current-payment-detail span.upgrade-plan-left {\n            font-size: 12px;\n            color: #666666;\n            font-family: montserratlight;\n            margin-bottom: 12px;\n        }\n\n        .current-payment-details-panel .current-payment-detail span.upgrade-plan-right {\n            font-size: 13px;\n            color: #666666;\n            font-family: montserratregular;\n            margin-bottom: 12px;\n        }\n\n        .coupon-applied {\n            margin-top: 15px;\n            margin-bottom: 15px;\n        }\n\n        .coupon-applied span.title {\n            font-size: 12px;\n            color: #8e989f;\n            font-family: montserratregular;\n            float: left;\n            padding-right: 10px;\n            padding-top: 5px;\n        }\n\n        #upgrade-plan-popup .coupon-applied .btn-red-outline {\n            color: #fb545b;\n            background-color: #fff;\n            border-color: #fb545b;\n            border-radius: 0;\n            font-size: 11px;\n            padding: 4px 20px;\n            margin: 0;\n            transition: all 0.3s ease 0s;\n            font-family: montserratregular;\n            text-transform: uppercase;\n            float: left;\n        }\n\n        #upgrade-plan-popup .coupon-applied .btn-red-outline i.material-icons {\n            color: #fb545b !important;\n            font-size: 12px !important;\n            position: relative;\n            top: 2px;\n            margin-left: 15px;\n        }\n\n        .btn-margin{\n            margin: 0px !important;\n        }\n\n    /* End: new changes */\n\n\n/* End: Upgrade Plan Modal */   \n\n\n    /***\nBootstrap Line Tabs by @keenthemes\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\nLicensed under MIT\n***/\n\n/* Tabs panel */\n.tabbable-panel {\n  border:1px solid #eee;\n  padding: 10px;\n}\n\n/* Default mode */\n.tabbable-line > .nav-tabs {\n  border: none;\n  margin: 0px;\n}\n.tabbable-line > .nav-tabs > li {\n  margin-right: 2px;\n}\n.tabbable-line > .nav-tabs > li > a {\n  border: 0;\n  margin-right: 0;\n  color: #737373;\n}\n.tabbable-line > .nav-tabs > li > a > i {\n  color: #a6a6a6;\n}\n.tabbable-line > .nav-tabs > li.open, .tabbable-line > .nav-tabs > li:hover {\n  border-bottom: 4px solid #fbcdcf;\n}\n.tabbable-line > .nav-tabs > li.open > a, .tabbable-line > .nav-tabs > li:hover > a {\n  border: 0;\n  background: none !important;\n  color: #333333;\n}\n.tabbable-line > .nav-tabs > li.open > a > i, .tabbable-line > .nav-tabs > li:hover > a > i {\n  color: #a6a6a6;\n}\n.tabbable-line > .nav-tabs > li.open .dropdown-menu, .tabbable-line > .nav-tabs > li:hover .dropdown-menu {\n  margin-top: 0px;\n}\n.tabbable-line > .nav-tabs > li.active {\n  border-bottom: 4px solid #f3565d;\n  position: relative;\n}\n.tabbable-line > .nav-tabs > li.active > a {\n  border: 0;\n  color: #333333;\n}\n.tabbable-line > .nav-tabs > li.active > a > i {\n  color: #404040;\n}\n.tabbable-line > .tab-content {\n  margin-top: -3px;\n  background-color: #fff;\n  border: 0;\n  border-top: 1px solid #eee;\n  padding: 15px 0;\n}\n.portlet .tabbable-line > .tab-content {\n  padding-bottom: 0;\n}\n\n/* Below tabs mode */\n\n.tabbable-line.tabs-below > .nav-tabs > li {\n  border-top: 4px solid transparent;\n}\n.tabbable-line.tabs-below > .nav-tabs > li > a {\n  margin-top: 0;\n}\n.tabbable-line.tabs-below > .nav-tabs > li:hover {\n  border-bottom: 0;\n  border-top: 4px solid #fbcdcf;\n}\n.tabbable-line.tabs-below > .nav-tabs > li.active {\n  margin-bottom: -2px;\n  border-bottom: 0;\n  border-top: 4px solid #f3565d;\n}\n.tabbable-line.tabs-below > .tab-content {\n  margin-top: -10px;\n  border-top: 0;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 15px;\n}\n.text-right{\n    text-align: right;\n}\n\n@media (min-width: 320px) and (max-width:768px) {\n    .toggle-dots-white{\n        float: left; \n        width: 100%;\n        text-align: center; \n        padding-top: 10px;\n        padding-bottom: 10px; \n        background:#62696d; \n    }\n\n    .toggle-dots-white span{ \n        width: 8px; \n        height: 8px;\n        display: inline-block; \n        border-radius: 100%; \n        background:#fff;\n    }\n\n    .toggle-dots-white2{\n        float: left; \n        width: 100%;\n        text-align: center; \n        padding-top: 10px;\n        padding-bottom: 10px; \n        background:#62696d; \n    }\n\n    .toggle-dots-white2 span{ \n        width: 8px; \n        height: 8px;\n        display: inline-block; \n        border-radius: 100%; \n        background:#fff;\n    } \n\n    .toggle-dots-grey {\n        float: left;\n        width: 100%;\n        text-align: center;\n        padding-top: 10px;\n        padding-bottom: 10px;\n        background: #fff;\n    }\n\n    .toggle-dots-grey span {\n        width: 8px;\n        height: 8px;\n        display: inline-block;\n        border-radius: 100%;\n        background: rgba(251,108,115,0.8);\n    }\n\n    #membership-details .tab-content.tab-sub-content {\n        margin-left: 0px;\n        width: 100%;\n        padding-left: 0px;\n        padding-right: 0px;\n    }\n\n    .rs-hide{\n        display: none;\n    }\n\n    .billing-grey-top {\n        border-bottom: 1px solid #777;\n    }\n\n    .billing-grey-top.business-box-xshadow {\n        box-shadow: none;\n    }\n\n}\n\n/* Start: Responsiveness */\n\n  .mobile-menu {\n      display: none;\n  }\n\n  .white-logo {\n      display: none !important;\n  }\n\n  .company-list,\n  .name-list {\n      width: 100%;\n      float: left;\n  }\n\n    @media (min-width: 320px) and (max-width: 768px) {\n        #userProfile-header .navbar-fixed-top .nav-padding {\n            padding-right: 0px;\n            padding-left: 0px;\n        }\n\n        .full-menu,\n        .dash-circle,\n        .dash-prog-outer h2 {\n            display: none;\n        }\n\n        .main-logo {\n            display: none !important;\n        }\n\n        .mobile-menu {\n            display: block;\n            float: right;\n            margin-top: 7px;\n            position: relative;\n        }\n\n        #userProfile-header .navbar-default {\n            background: #fb5f66 !important;\n            border: none;\n            margin-top: 0px;\n        }\n\n        #userProfile-header .navbar-default .mat-icon i.material-icons {\n            font-size: 24px;\n            color: #fff;\n            padding: 13px;\n        }\n\n        #userProfile-header .navbar-header h4.title {\n            color: #fff;\n            font-size: 16px;\n            text-align: center;\n            text-transform: uppercase;\n            padding-top: 7px;\n        }\n\n        .mobile-menu button {\n            border: none;\n            box-shadow: none;\n            color: #fff;\n            background: none;\n            float: right;\n            margin: 0px 5px;\n        }\n\n        .mobile-menu .btn-default:hover {\n            color: #fff;\n            background: none;\n        }\n\n        .mobile-dash {\n            padding: 0px;\n        }\n\n        .mobile-menu .dropdown-menu {\n            background: #62696d;\n            top: -11px;\n            border-radius: 0px;\n            left: -176px;\n            width: 235px;\n            font-family: montserratlight;\n            padding-bottom: 55px;\n        }\n\n        .mobile-menu .name-dropdown-border {\n            width: 100%;\n            margin: 5px 0px;\n        }\n\n        .mobile-menu .user-outr {\n            float: left;\n            width: 100%;\n            padding: 0;\n            margin: 0px;\n            display: block;\n        }\n\n        .mobile-menu .user-outr li {\n            float: right;\n            font-size: 24px;\n            font-family: montserratlight;\n            color: #fff;\n            margin-right: 24px;\n            /* margin: 10px 19px; */\n            margin-top: 8px;\n            margin-bottom: 6px;\n        }\n\n        .mobile-menu .user-outr li a {\n            margin-right: 30px;\n        }\n      \n        .user-outr li a {\n            float: left;\n            width: auto;\n            border: 2px solid #dae2e6;\n            border-radius: 50%;\n            margin-left: 5px;\n            margin-bottom: 5px;\n        }\n\n        .user-outr li a:hover {\n            border: 2px solid #f56151;\n        }\n\n        .mobile-menu .company-list li,\n        .mobile-menu .name-list li {\n            margin: 10px 0px;\n            text-align: right;\n            font-size: 16px;\n            width: 100%;\n            float: left;\n            padding-right: 20px;\n        }\n\n        .mobile-menu .company-list li a,\n        .mobile-menu .name-list li a {\n            float: right;\n            color: #fff;\n        }\n\n        .mobile-menu .company-list li a i {\n            margin-right: 20px;\n            float: left;\n        }\n\n        .mobile-menu .name-list li a i {\n            margin-left: 20px;\n            float: right;\n        }\n\n        .mobile-menu .company-list-title {\n            float: left;\n            color: #fff;\n        }\n\n        .white-logo {\n            display: block !important;\n        }\n\n        .dash-prog-outer {\n            float: left;\n            width: 100%;\n            margin-top: 10px;\n            margin-bottom: 10px;\n        }\n\n        .dash-prog-outer h5 {\n            font-size: 24px;\n            text-align: center;\n            width: 100%;\n            margin-bottom: 1px;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper {\n            min-height: 35px;\n            width: 100%;\n            text-align: center;\n        }\n\n        .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n            margin: 0 auto;\n            float: none;\n            text-align: center;\n        }\n\n        #userProfile-header .navbar-header {\n            float: left;\n            margin-left: -5px;\n            margin-right: 0px !important;\n        }\n\n        #userProfile-header .navbar-logopadding {\n            padding-right: 0px;\n            padding-top: 0px;\n        }\n\n        #userProfile-header .navbar-default {\n            height: 50px;\n            margin: 0px;\n            padding-bottom: 0px;\n        }\n\n        .white-logo .navbar-brand img {\n            height: 53px;\n            margin-top: -20px;\n            margin: 0 auto;\n            margin-top: -20px;\n        }\n\n        .white-logo .navbar-brand {\n            float: none;\n        }\n\n        .user-outr li a.add-user {\n            width: 45px;\n            height: 45px;\n            padding-top: 9px;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n            top: -30px;\n            left: 17px;\n            font-size: 34px;\n            position: relative;\n            color: #f87b80;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n            font-size: 16px;\n        }\n\n        .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n            width: 91%;\n            font-size: 14px;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n            width: 35px;\n            height: 35px;\n            padding-top: 8px;\n            font-size: 14px;\n            top: 13px;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n            font-size: 14px;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n            font-size: 24px;\n        }\n\n        .company-block-content {\n            margin-left: 50px;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n            left: 42px;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n            right: 34px;\n        }\n\n        .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n            top: 8px;\n            left: -8px;\n        }\n\n    }\n\n    @media (max-width: 1900px) {\n        .sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n            font-size: 10px !important;\n        }\n\n        .sahil-material .form-group.label-floating.is-focused label.control-label {\n            font-size: 10px !important;\n        }\n\n        .my-profile .form-group.time-zone label.control-label {\n            font-size: 10px !important;\n        }\n  \n    }\n\n    @media screen and (min-width: 320px) and (max-width: 320px){\n        #membership-details .nav-tabs.nav-justified > li:nth-child(1) > a {\n            padding: 18px 3px;\n        }\n\n        #membership-details .nav-tabs.nav-justified > li:nth-child(2) > a {\n            padding: 18px 12px;\n        }\n\n        #subscription .membership-details .btn-red-outline{\n            white-space: normal !important;\n            max-width: 275px;\n        }\n\n    }\n\n    @media screen and (min-width: 1024px) and (max-width: 1024px){\n        #membership-details .tab-content.tab-sub-content {\n            width: 74%;\n        }\n\n        .billing-plan-list {\n            width: 80%;\n            margin-left: 10%;\n        }\n\n        .billing-table {\n            margin-top: 30px;\n        }\n\n        .billing-grey {\n            width: 300px;\n            margin-left: 17%;\n            box-shadow: 0px 0px 19px rgba(60,60,60,0.29);\n        }\n\n        .billing-white {\n            top: 30px;\n            width: 300px;\n            margin-left: 17%;\n            margin-bottom: 90px;\n        }\n\n        .toggle-dots-white{\n            float: left; \n            width: 100%;\n            text-align: center; \n            padding-top: 10px;\n            padding-bottom: 10px; \n            background:#62696d; \n\n        }\n\n        .toggle-dots-white span{ \n            width: 8px; \n            height: 8px;\n            display: inline-block; \n            border-radius: 100%; \n            background:#fff;\n        }\n\n        .toggle-dots-white2{\n            float: left; \n            width: 100%;\n            text-align: center; \n            padding-top: 10px;\n            padding-bottom: 10px; \n            background:#62696d; \n        }\n\n        .toggle-dots-white2 span{ \n            width: 8px; \n            height: 8px;\n            display: inline-block; \n            border-radius: 100%; \n            background:#fff;\n        } \n\n        .toggle-dots-grey {\n            float: left;\n            width: 100%;\n            text-align: center;\n            padding-top: 10px;\n            padding-bottom: 10px;\n            background: #fff;\n            /*border-top: 1px solid #e6e7e8;*/\n        }\n\n        .toggle-dots-grey span {\n            width: 8px;\n            height: 8px;\n            display: inline-block;\n            border-radius: 100%;\n            background: rgba(251,108,115,0.8);\n        }\n\n        .rs-hide{\n            display: none;\n        }\n\n        .billing-grey-top {\n            border-bottom: 1px solid #777;\n        }\n\n        .billing-grey-top.business-box-xshadow {\n            box-shadow: none;\n        }\n\n    }\n\n    @media screen and (min-width: 1280px) and (max-width: 1280px){\n        #membership-details .tab-content.tab-sub-content {\n            width: 80.91%;\n        }\n\n        .billing-grey-top h3.plan-title {\n            font-size: 25px;\n        }\n        \n    }\n\n    .strike-off{\n        text-decoration:line-through;\n    }\n\n    .btn-disable{\n        pointer-events: none;\n        cursor: default;\n    }\n\n/* End: Responsiveness */"

/***/ },

/***/ 1038:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1039:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1055:
/***/ function(module, exports) {

module.exports = "@media (max-width: 767px) {\n      #setting-header .navbar-fixed-top .nav-padding {\n          padding-right: 0px;\n          padding-left: 0px;\n      }\n\n      .full-menu,\n      .dash-circle,\n      .dash-prog-outer h2 {\n          display: none;\n      }\n\n      .main-logo {\n          display: none !important;\n      }\n\n      .mobile-menu {\n          display: block;\n          float: right;\n          margin-top: 7px;\n          position: relative;\n      }\n\n      #setting-header .navbar-default {\n          background: #BEC5C9 !important;\n          border: none;\n          margin-top: 0px;\n      }\n\n      #setting-header .navbar-default .mat-icon i.material-icons {\n          font-size: 24px;\n          color: #fff;\n          padding: 13px;\n      }\n\n      #setting-header .navbar-header h4.title {\n          color: #fff;\n          font-size: 16px;\n          text-align: center;\n          text-transform: uppercase;\n          padding-top: 7px;\n      }\n\n      .mobile-menu button {\n          border: none;\n          box-shadow: none;\n          color: #fff;\n          background: none;\n          float: right;\n          margin: 0px 5px;\n      }\n\n      .mobile-menu .btn-default:hover {\n          color: #fff;\n          background: none;\n      }\n\n      .mobile-dash {\n          padding: 0px;\n      }\n\n      .mobile-menu .dropdown-menu {\n          background: #62696d;\n          top: -11px;\n          border-radius: 0px;\n          left: -176px;\n          width: 235px;\n          font-family: montserratlight;\n          padding-bottom: 55px;\n      }\n\n      .mobile-menu .name-dropdown-border {\n          width: 100%;\n          margin: 5px 0px;\n      }\n\n      .mobile-menu .user-outr {\n          float: left;\n          width: 100%;\n          padding: 0;\n          margin: 0px;\n          display: block;\n      }\n\n      .mobile-menu .user-outr li {\n          float: right;\n          font-size: 24px;\n          font-family: montserratlight;\n          color: #fff;\n          margin-right: 24px;\n          /* margin: 10px 19px; */\n          margin-top: 8px;\n          margin-bottom: 6px;\n      }\n\n      .mobile-menu .user-outr li a {\n          margin-right: 30px;\n      }\n      \n      .user-outr li a {\n          float: left;\n          width: auto;\n          border: 2px solid #dae2e6;\n          border-radius: 50%;\n          margin-left: 5px;\n          margin-bottom: 5px;\n      }\n\n      .user-outr li a:hover {\n          border: 2px solid #f56151;\n      }\n\n      .mobile-menu .company-list li,\n      .mobile-menu .name-list li {\n          margin: 10px 0px;\n          text-align: right;\n          font-size: 16px;\n          width: 100%;\n          float: left;\n          padding-right: 20px;\n      }\n\n      .mobile-menu .company-list li a,\n      .mobile-menu .name-list li a {\n          float: right;\n          color: #fff;\n      }\n\n      .mobile-menu .company-list li a i {\n          margin-right: 20px;\n          float: left;\n      }\n\n      .mobile-menu .name-list li a i {\n          margin-left: 20px;\n          float: right;\n      }\n\n      .mobile-menu .company-list-title {\n          float: left;\n          color: #fff;\n      }\n\n      .white-logo {\n          display: block !important;\n      }\n\n      .dash-prog-outer {\n          float: left;\n          width: 100%;\n          margin-top: 10px;\n          margin-bottom: 10px;\n      }\n\n      .dash-prog-outer h5 {\n          font-size: 24px;\n          text-align: center;\n          width: 100%;\n          margin-bottom: 1px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper {\n          min-height: 35px;\n          width: 100%;\n          text-align: center;\n      }\n\n      .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n          margin: 0 auto;\n          float: none;\n          text-align: center;\n      }\n\n      #setting-header .navbar-header {\n          float: left;\n          margin-left: -5px;\n          margin-right: 0px !important;\n      }\n\n      #setting-header .navbar-logopadding {\n          padding-right: 0px;\n          padding-top: 0px;\n      }\n\n      #setting-header .navbar-default {\n          height: 50px;\n          margin: 0px;\n          padding-bottom: 0px;\n      }\n\n      .white-logo .navbar-brand img {\n          height: 53px;\n          margin-top: -20px;\n          margin: 0 auto;\n          margin-top: -20px;\n      }\n\n      .white-logo .navbar-brand {\n          float: none;\n      }\n\n      .user-outr li a.add-user {\n          width: 45px;\n          height: 45px;\n          padding-top: 9px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n          top: -30px;\n          left: 17px;\n          font-size: 34px;\n          position: relative;\n          color: #f87b80;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n          font-size: 16px;\n      }\n\n      .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n          width: 91%;\n          font-size: 14px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n          width: 35px;\n          height: 35px;\n          padding-top: 8px;\n          font-size: 14px;\n          top: 13px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n          font-size: 14px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n          font-size: 24px;\n      }\n\n      .company-block-content {\n          margin-left: 50px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n          left: 42px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n          right: 34px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n          top: 8px;\n          left: -8px;\n      }\n\n  }"

/***/ },

/***/ 1079:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane\" id=\"my-account\">\n    \n    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n        <div class=\"col-md-2 col-sm-1 col-xs-2 np\"></div>\n        <div class=\"col-md-8 col-sm-10 col-xs-12 np\">\n            <!-- Nav tabs -->\n            <div class=\"col-md-3 col-sm-3 col-xs-12 np my-account-inner-tabs hide\">\n                <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n                    <li role=\"presentation\" class=\"active\">\n                        <a href=\"#my-profile\" aria-controls=\"myProfile\" role=\"tab\" data-toggle=\"tab\" class=\"\">My Profile <i class=\"material-icons\">keyboard_arrow_right</i></a>\n                    </li>\n                    <li role=\"presentation\">\n                        <a href=\"#change-password\" aria-controls=\"changePassword\" role=\"tab\" data-toggle=\"tab\" class=\"\">Change Password <i class=\"material-icons\">keyboard_arrow_right</i></a>\n                    </li>\n                    <li role=\"presentation\">\n                        <a href=\"#companies\" aria-controls=\"companies\" role=\"tab\" data-toggle=\"tab\" class=\"\">Companies <i class=\"material-icons\">keyboard_arrow_right</i></a>\n                    </li>\n\n<!--                     <li role=\"presentation\">\n                        <a href=\"#integration\" aria-controls=\"integration\" role=\"tab\" data-toggle=\"tab\" class=\"\">Api Integration <i class=\"material-icons\">keyboard_arrow_right</i></a>\n                    </li> -->\n                </ul>\n            </div>\n            <!-- End: Nav tabs -->\n\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n                    <li role=\"presentation\" class=\"active\">\n                        <a href=\"#my-profile\" aria-controls=\"myProfile\" role=\"tab\" data-toggle=\"tab\" class=\"\">My Profile</a>\n                    </li>\n                    <li role=\"presentation\">\n                        <a href=\"#change-password\" aria-controls=\"changePassword\" role=\"tab\" data-toggle=\"tab\" class=\"\">Change Password</a>\n                    </li>\n                    <li role=\"presentation\">\n                        <a href=\"#companies\" aria-controls=\"companies\" role=\"tab\" data-toggle=\"tab\" class=\"\">Companies</a>\n                    </li>\n\n                    <!-- <li role=\"presentation\">\n                        <a href=\"#integration\" aria-controls=\"integration\" role=\"tab\" data-toggle=\"tab\" class=\"\">Api Integration</a>\n                    </li> -->\n                </ul>\n            </div>\n            <!-- End: Nav tabs -->\n\n            <!-- Start: tabs sub content -->\n            <div class=\"tab-content tab-sub-content col-md-9 col-sm-9 col-xs-12 np\">\n                <!-- Start: tab my-profile -->\n                <div role=\"tabpanel\" class=\"tab-pane sahil-material active my-profile\" id=\"my-profile\">\n                    <!-- Start: materialize form -->\n                    <og-basic-details></og-basic-details>\n                    <!-- End: materialize form -->\n                </div>\n                <!-- End: tab my-profile -->\n                <!-- Start: tab companies -->\n                <div role=\"tabpanel\" class=\"tab-pane companies sahil-material\" id=\"companies\">\n                    <og-user-companies [myCompaniesList]=\"myCompanies\"></og-user-companies>\n                </div>\n                <!-- End: tab companies -->\n                <!-- Start: tab change-password -->\n                <div role=\"tabpanel\" class=\"tab-pane change-password sahil-material\" id=\"change-password\">\n                    <!-- Start: materialize form -->\n                    <og-change-password></og-change-password>\n                    <!-- End: materialize form -->\n                </div>\n                <!-- End: tab change-password -->\n\n                <!-- Start: tab Api Integration -->\n                <!-- <div role=\"tabpanel\" class=\"tab-pane change-password sahil-material\" id=\"integration\">\n                    <og-api-integration></og-api-integration>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"col-md-2 col-sm-1 col-xs-2 np\"></div>\n    </div>\n</div>\n"

/***/ },

/***/ 1080:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <!-- <div class=\"col-md-12 col-sm-12 col-xs-12 np my-profile-header\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <h6 class=\"\">My Profile</h6>\n        </div>\n    </div> -->\n    <form *ngIf=\"active\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"basicDetailsForm\">\n        <div class=\"form-group label-floating \" [class.is-empty] = \"model.name==''\">\n            <label class=\"control-label\" for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" [class.is-empty] = \"model.name==''\" id=\"name\" required [(ngModel)]=\"model.name\" ngControl=\"name\" formControlName=\"name\" name=\"name\"/>\n        </div>\n        <div *ngIf=\"basicDetailsForm.controls.name.touched && !basicDetailsForm.controls.name.valid\" class=\"alert alert-danger\">\n                <p *ngIf=\"basicDetailsForm.controls.name.errors.required\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Name is required.\n                </p>\n                <p *ngIf=\"basicDetailsForm.controls.name.errors.minlength\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Min 4 character is required.\n                </p>\n                <p *ngIf=\"basicDetailsForm.controls.name.errors.pattern\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Invalid Name\n\t\t\t\t</p>\n        </div>\n        <div class=\"form-group label-floating contact-num\" [class.is-empty] = \"model.phone==null || model.phone==''\">\n            <label class=\"control-label\" for=\"phone\">Phone</label>\n            <input type=\"text\" class=\"form-control\" [class.is-empty] = \"model.phone==null\" id=\"phone\" [(ngModel)]=\"model.phone\" ngControl=\"phone\" name=\"phone\" formControlName=\"phone\"/>\n        </div>\n        <div *ngIf=\"basicDetailsForm.controls.phone.touched && !basicDetailsForm.controls.phone.valid\" class='alert alert-danger'>\n            <p *ngIf=\"basicDetailsForm.controls.phone.errors.required\">\n                <span class=\"mat-icon\">\n                    <i class=\"material-icons\">report_problem</i>\n                </span>\n                Phone is required.\n            </p>\n            <p *ngIf=\"basicDetailsForm.controls.phone.errors.pattern\">\n                <span class=\"mat-icon\">\n                    <i class=\"material-icons\">report_problem</i>\n                </span>\n                Invalid Entry\n            </p>\n            <p *ngIf=\"basicDetailsForm.controls.phone.errors.minlength && !basicDetailsForm.controls.phone.errors.pattern\" >\n                <span class=\"mat-icon\">\n                    <i class=\"material-icons\">report_problem</i>\n                </span>Min 5 digits are required.\n            </p>\n        </div>\n        <div class=\"form-group label-floating\">\n            <label class=\"control-label\" for=\"email\">Email Address</label>\n            <input type=\"email\" readonly class=\"form-control disabled-text\" id=\"email\" required value={{user_email}}  disabled=\"disabled\" />\n            <!-- <button type=\"button\" class=\"btn btn-red-outline btn-hover btn-updateEmail\" data-toggle=\"modal\" data-target=\"#change-email\">Update Email</button> -->\n            <span class=\"btn-changeEmail-outer\">\n                <a class=\"btn-changeEmail\" data-toggle=\"modal\" data-target=\"#change-email\">Change Email</a>\n            </span>\n        </div>\n        <div class=\"form-group label-floating\" [class.is-empty] = \"model.location==''\">\n            <label class=\"control-label\" for=\"location\">Location</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" [class.is-empty] = \"model.location==''\" id=\"location\" [(ngModel)]=\"model.location\" ngControl=\"location\" formControlName=\"location\" name=\"location\" (blur)=\"chkLocation()\"/>\n        </div>\n        <div *ngIf=\"basicDetailsForm.controls.location.touched && !basicDetailsForm.controls.location.valid\" class='alert alert-danger'>\n            <p *ngIf=\"basicDetailsForm.controls.location.errors.required\">\n                <span class=\"mat-icon\">\n                    <i class=\"material-icons\">report_problem</i>\n                </span>\n                location is required.\n            </p>\n        </div>\n        <!-- Start: Time zone -->\n        <div class=\"form-group time-zone\" [class.is-empty] = \"model.timezone==''\">\n            <label class=\"control-label\" for=\"timezone\">Time zone</label>\n            <select class=\"form-control\" [class.is-empty] = \"model.timezone==''\" [(ngModel)]=\"model.timezone\" ngControl=\"timezone\" id=\"timezone\" name=\"timezone\" formControlName=\"timezone\">\n                <option selected>Select a Timezone</option>\n                <option *ngFor=\"let t of timezones\" [value]=\"t\">{{t}}</option>\n            </select>\n            <div *ngIf=\"basicDetailsForm.controls.timezone.touched && !basicDetailsForm.controls.timezone.valid\" class=\"col-md-12 alert alert-danger\">\n                <p *ngIf=\"basicDetailsForm.controls.timezone.errors.required\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Timezone is required.\n                </p>\n            </div>\n        </div>\n        <!-- End: Time zone -->\n        <div class=\"col-md-12 np\">\n            <button type=\"submit\" class=\"btn btn-white btn-update btn-hover\" [disabled]=\"!basicDetailsForm.valid\" id='saveBasicDetails' (click)=\"callGA('UPDATEACCOUNT')\">Update</button>\n            <div class=\"val-success-msg success-message hide\">\n                <span class=\"icon-success\">\n                    <i class=\"material-icons\">check_circle</i>\n                </span>\n                {{Message}}\n            </div>\n        </div>\n    </form>\n</div>\n\n<!-- Start: Change Email Modal -->\n<div id=\"change-email\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n                <h5 class=\"modal-title\">Change Email Address</h5>\n            </div>\n            <div class=\"modal-body\">\n                <form *ngIf=\"active\" (ngSubmit)=\"updateEmail()\" [formGroup]=\"emailForm\">\n                    <div class=\"form-group label-floating\">\n                        <label class=\"control-label\" for=\"email\">New Email Address:</label>\n                        <input type=\"email\" class=\"form-control\" required [(ngModel)]=\"model.emails\" ngControl=\"email\" name=\"email\" formControlName=\"email\"/>\n                    </div>\n                  <div class=\"form-group label-floating\">\n                    <label class=\"control-label\" for=\"email\">Password:</label>\n                    <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"model.password\" ngControl=\"password\" name=\"password\" formControlName=\"password\"/>\n                  </div>\n                    <div *ngIf=\"error\" class=\"alert alert-danger\">\n                        <!-- <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"setFalse()\">&times;</a> -->\n                        <p>\n                            <span class=\"mat-icon\">\n                                <i class=\"material-icons\">report_problem</i>\n                            </span>\n                            {{Message}}\n                        </p>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-red-outline btn-add-user btn-hover\" id='updateEmail' (click)='updateEmail()'>Change Email</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End: Change Email Modal -->\n\n<div id=\"basicMessageModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Message</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>{{Message}}</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Start: changes updated successfully div -->\n<div class=\"float-changes-updated hide\">\n    <div class=\"col-md-12 np\">\n        <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n        <span>{{Message}}</span>\n    </div>\n</div>\n<!-- End: changes updated successfully div -->\n"

/***/ },

/***/ 1081:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <div class=\"form-group label-floating\">\n                <label class=\"control-label\" for=\"old_password\">Current Password</label>\n                <input id=\"old_password\" type=\"password\" required class=\"form-control\" formControlName=\"old_password\">\n            </div>\n            <div *ngIf=\"changePasswordForm.controls.old_password.touched && !changePasswordForm.controls.old_password.valid\" class='alert alert-danger'>\n                <p *ngIf=\"changePasswordForm.controls.old_password.errors.required\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Old Password is required.</p>\n                <p *ngIf=\"changePasswordForm.controls.old_password.errors.minlength\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Use at least 8 characters\n                </p>\n            </div>\n            <div class=\"form-group label-floating\">\n                <label class=\"control-label\" for=\"new_password\">New Password</label>\n                <input id=\"new_password\" type=\"password\" required class=\"form-control\" formControlName=\"new_password\">\n            </div>\n            <div *ngIf=\"changePasswordForm.controls.new_password.touched && !changePasswordForm.controls.new_password.valid\" class='alert alert-danger'>\n                <p *ngIf=\"changePasswordForm.controls.new_password.errors.required\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    New Password is required.\n                </p>\n                <p *ngIf=\"changePasswordForm.controls.new_password.errors.minlength\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Use at least 8 characters\n                </p>\n            </div>\n            <div class=\"form-group label-floating\">\n                <label class=\"control-label\" for=\"confirm_password\">Retype New Password</label>\n                <input id=\"confirm_password\" type=\"password\" required class=\"form-control\" formControlName=\"confirm_password\">\n            </div>\n            <div *ngIf=\"changePasswordForm.controls.confirm_password.touched && !changePasswordForm.controls.confirm_password.valid\" class='alert alert-danger'>\n                <p *ngIf=\"changePasswordForm.controls.confirm_password.errors.required\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Confirm Password is required.\n                </p>\n                <p *ngIf=\"changePasswordForm.controls.confirm_password.errors.minlength\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    Use at least 8 characters\n                </p>\n            </div>\n            <div *ngIf=\"error\" class=\"form-group alert alert-danger\">\n                <p>{{Message}}</p>\n            </div>\n            <div *ngIf=\"success\" class=\"val-success-msg form-group success-message hide\">\n                <span class=\"icon-success\">\n                    <i class=\"material-icons\">check_circle</i>\n                </span>\n                {{Message}}\n            </div>\n        </div>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <button [disabled]=\"!changePasswordForm.valid\" type=\"submit\" class=\"btn btn-white btn-hover\" id='updatePassword' (click)=\"callGA('UPDATEPASS')\">Update</button>\n        </div>\n    </form>\n</div>\n<!-- Start: changes updated successfully div -->\n<div class=\"float-changes-updated hide\">  \n    <div class=\"col-md-12 np\">\n        <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n        <span>{{Message}}</span>\n    </div>\n</div>\n<!-- End: changes updated successfully div -->"

/***/ },

/***/ 1082:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 np\" id=\"companyLists\">\n\t<span *ngFor=\"let company of myCompaniesList\">\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 companies-card\" *ngIf=\"company.user_company.status == 'APPROVED' || (company.user_company.status == 'INVITED' && company.user_company.active)\">\n\t\t\t<div class=\"companies-box\">\n\t\t\t\t<div class=\"img-block-wrapper\" (click)=\"showDetails(company)\">\n\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\n\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n\t\t\t\t\t<div class=\"icon-block col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"col-md-6 col-sm-4 col-xs-3\" data-toggle=\"modal\" data-target=\"#change-company-name\" *ngIf=\"company.user_company.role == 'ADMIN'\" (click)=\"popupUpdateCompany(company);callGA('EDITCOMPANY')\">\n\t\t\t\t\t\t\t\t<span class=\"icon-grey\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">mode_edit</i>\n\t\t\t\t\t\t\t\t\t<!--<span class=\"edit\">Edit</span>-->\n\t\t\t\t\t\t\t\t\t<div class=\"comany-tooltip\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"ellipsis\">Edit Company</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"col-md-6 col-sm-4 col-xs-3\" data-toggle=\"modal\" data-target=\"#leave-company\" (click)=\"leaveCompany(company);callGA('LEAVECOMPANY')\">\n\t\t\t\t\t\t\t\t<span class=\"icon-grey\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">highlight_off</i>\n\t\t\t\t\t\t\t\t\t<!--<span class=\"leave\">Leave Company</span>-->\n\t\t\t\t\t\t\t\t\t<div class=\"comany-tooltip\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"ellipsis\">Leave Company</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 companies-card\" *ngIf=\"company.user_company.status == 'REQUESTED'\">\n\t\t\t<div class=\"companies-box\">\n\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\n\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n\t\t\t\t\t<span class=\"req-sent ellipsis\">Request Sent</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 companies-card\" *ngIf=\"company.user_company.status == 'INVITED' && !company.user_company.active\">\n\t\t\t<div class=\"companies-box\">\n\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\n\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n\t\t\t\t\t<div class=\"icon-block\">\n\t\t\t\t\t\t<span (click)=\"acceptInvite(company)\">\n\t\t\t\t\t\t\t<span class=\"icon-green hide\">\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">check_circle</i>\n\t\t\t\t\t\t\t\t<span class=\"leave\">Accept</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<div style=\"display:inline-block;\">\n\t\t\t\t\t\t\t\t<div class=\"onoffswitch\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox comp{{company.id}}\" id=\"comp{{company.id}}\">\n\t\t\t\t\t\t\t\t\t<label class=\"onoffswitch-label\" attr.for=\"comp{{company.id}}\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-inner\"></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-switch\"></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</span>\n\t<div class=\"col-md-4 col-sm-4 col-xs-12 companies-card\" *ngIf=\"!is_admin_created\">\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 companies-box\">\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-6 np text-center\">\n\t\t\t\t<a href=\"\" class=\"companies-box-wrapper add-join-companies-box-wrapper\" data-toggle=\"modal\" data-target=\"#add-new-company\" (click)=\"callGA('ADDCOMPANY')\">\n\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t<div class=\"add-company\">\n\t\t\t\t\t\t\t<span>+</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t<h5 class=\"name\">Add Company</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 col-sm-12 col-xs-6 np text-center hide\">\n\t\t\t\t<a href=\"\" class=\"companies-box-wrapper add-join-companies-box-wrapper join-company-mt\" data-toggle=\"modal\" data-target=\"#join-company\" (click)=\"callGA('JOINCOMPANY')\">\n\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t<div class=\"join-company\">\n\t\t\t\t\t\t\t<span><i class=\"material-icons\">bubble_chart</i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t<h5 class=\"name\">Join Company</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"col-md-12 col-sm-12 col-xs-12 np hide\" id=\"companyDetails\">\n\t<a href=\"javascript:void(0);\" (click)=\"backToList()\"><i class=\"material-icons\">keyboard_arrow_left</i>Back to company Lists</a>\n\t<div class=\"companyDetail-inner\">\n\t\t<a  href=\"javascript:void(0);\" class=\"col-md-6 col-sm-4 col-xs-3\" data-toggle=\"modal\" data-target=\"#change-company-name\" class=\"pull-right\" *ngIf=\"clickedCompany.user_company.role == 'ADMIN'\" (click)=\"popupUpdateCompany(clickedCompany);callGA('EDITCOMPANY')\"><i class=\"material-icons\">edit</i></a>\n\t\t<div class=\"details\">\n\t\t\t<table class=\"table-company-detail\">\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Company Name</td>\n\t\t\t\t\t\t<td>{{clickedCompany.name}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Company URL</td>\n\t\t\t\t\t\t<td>{{clickedCompany.sub_domain}}{{subdomainExtension}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<!-- <tr>\n\t\t\t\t\t\t<td>Agency</td>\n\t\t\t\t\t\t<td>{{clickedCompany.agency?'true':'false'}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Leads per Month</td>\n\t\t\t\t\t\t<td>{{clickedCompany.leads.total?clickedCompany.leads.total:'0'}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Monthly Traffic</td>\n\t\t\t\t\t\t<td>{{clickedCompany.traffic.frequency?clickedCompany.traffic.frequency:'0'}}</td>\n\t\t\t\t\t</tr> -->\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Your Api key</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<input type=\"text\" disabled=\"true\" id=\"input-api\" size=\"35\" value=\"{{clickedCompany.api}}\"/>\n\t\t\t\t\t\t\t<i *ngIf=\"clickedCompany.api\" class=\"material-icons pull-right\" (click)=\"copyApi()\">content_copy</i>\n\t\t\t\t\t\t\t<a *ngIf=\"!clickedCompany.api\" class=\"btn btn-white btn-update btn-hover\" href=\"javascript:void(0)\" (click)=\"generateApiKey(clickedCompany.id)\">generate</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n</div>\n<div id=\"change-company-name\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content modal-bg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</button>\n\t\t\t\t<h5 class=\"modal-title\">Change Company Name</h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"sahil-material\">\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert hide\" id=\"success-updateCompany\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t{{Message}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 np filled-sec\">\n\t\t\t\t\t\t<div class=\"form-group col-md-12 np\">\n\t\t\t\t\t\t\t<label class=\"control-label col-md-2 np label-filled\" for=\"\">Current Name</label>\n\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\n\t\t\t\t\t\t\t<span class=\"form-control col-md-8 np input-filled\">\n\t\t\t\t\t\t\t\t{{updateCompany.name}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-12 np\" style=\"margin-top: 12px;\">\n\t\t\t\t\t\t\t<label class=\"control-label col-md-2 np label-filled\" for=\"\">Current Url</label>\n\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\n\t\t\t\t\t\t\t<span class=\"form-control col-md-8 np input-filled\">\n\t\t\t\t\t\t\t\t{{updateCompany.sub_domain}}{{subdomainExtension}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<form [formGroup] = \"updateCompanyForm\" (ngSubmit)=\"updateThisCompany()\" id=\"updateComp\">\n\t\t\t\t\t\t<div class=\"form-group label-floating\" id=\"updCompanynameDiv\" [class.is-empty]=\"!EditCompany.name\">\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"companyname\"> New Company Name</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"updCompanyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\" [(ngModel)]=\"EditCompany.name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"updateCompanyForm.controls.companyname.touched  && !updateCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.companyname.errors.required\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                <i class=\"material-icons\">report_problem</i>\n\t                            </span>\n\t\t\t\t\t\t\t\tCompany Name is required.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.companyname.errors.minlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n                                    <i class=\"material-icons\">report_problem</i>\n                                </span>\n\t\t\t\t\t\t\t\tPlease input at least 3 characters.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group label-floating\" id=\"updDomainDiv\" [class.is-empty]=\"!EditCompany.sub_domain\">\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"domain\"> New Url</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"updDomain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\" [(ngModel)]=\"EditCompany.sub_domain\">\n\t\t\t\t\t\t\t<label class=\"in-active\">{{subdomainExtension}}</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"updateCompanyForm.controls.domain.touched && !updateCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.domain.errors.required\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                <i class=\"material-icons\">report_problem</i>\n\t                            </span>\n\t\t\t\t\t\t\t\tDomain is required.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.domain.errors.minlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n                                    <i class=\"material-icons\">report_problem</i>\n                                </span>\n\t\t\t\t\t\t\t\tPlease input at least 4 characters.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.domain.errors.pattern\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                <i class=\"material-icons\">report_problem</i>\n\t                            </span>\n\t\t\t\t\t\t\t\tInvalid Url\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"form-group toggle-switch\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tAre you an agency ? &nbsp;&nbsp;\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"show-check\" formControlName=\"companyType\" id=\"updCompanyType\" name=\"companyType\" [(ngModel)]=\"EditCompany.agency\">\n\t\t\t\t\t\t\t\t<span class=\"lever\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group label-floating monthly-traffic\" id=\"updTrafficDiv\">\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"traffic\">Monthly traffic</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"updTraffic\" type=\"text\" formControlName=\"traffic\" name=\"traffic\" [(ngModel)]=\"EditCompany.traffic.frequency\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"updateCompanyForm.controls.traffic.touched  && !updateCompanyForm.controls.traffic.valid\" class=\"col-md-12 alert alert-danger\">\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.traffic.errors.maxlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                <i class=\"material-icons\">report_problem</i>\n\t                            </span>\n\t\t\t\t\t\t\t\tMax 8 digits are allowed.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.traffic.errors.pattern\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                <i class=\"material-icons\">report_problem</i>\n\t                            </span>\n\t\t\t\t\t\t\t\tTraffic should be a valid number\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group label-floating contact-num\" id=\"updLeadsDiv\">\n\t\t\t\t\t\t\t<label class=\"control-label \" for=\"leads\">Avg Leads generated every month</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"updLeads\" name=\"leads\" type=\"tel\" formControlName=\"leads\" [(ngModel)]=\"EditCompany.leads.total\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"updateCompanyForm.controls.leads.touched  && !updateCompanyForm.controls.leads.valid\" class=\"col-md-12 alert alert-danger\">\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.leads.errors.maxlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                <i class=\"material-icons\">report_problem</i>\n\t                            </span>\n\t\t\t\t\t\t\t\tMax 8 digits are allowed.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"updateCompanyForm.controls.leads.errors.pattern\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t                                <i class=\"material-icons\">report_problem</i>\n\t                            </span>\n\t\t\t\t\t\t\t\tLeads should be a valid number\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<button type=\"submit\" id=\"btnUpdateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover pull-right\" [disabled]=\"!updateCompanyForm.valid\">Update</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer hide\">\n\t\t\t\tYour company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content modal-bg\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n                <h5 class=\"modal-title\">Create a New Company</h5>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"sahil-material\">\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert hide\" id=\"success-addCompany\">\n                        {{Message}}\n                    </div>\n                    <form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\" for=\"companyname\"> New Company Name</label>\n                            <input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\n                        </div>\n                        <div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\n                            <p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">\n                            \t<span class=\"mat-icon\">\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\n\t\t\t                    </span>\n                            \tCompany Name is required.\n                            </p>\n                            <p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">\n                            \t<span class=\"mat-icon\">\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\n\t\t\t                    </span>\n                            \tPlease input at least 3 characters.\n                            </p>\n                        </div>\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\" for=\"domain\"> Company Url</label>\n                            <input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\n                            <label class=\"in-active\">{{subdomainExtension}}</label>\n                        </div>\n                        <div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\n                            <p *ngIf=\"createCompanyForm.controls.domain.errors.required\">\n                            \t<span class=\"mat-icon\">\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\n\t\t\t                    </span>\n                            \tCompany Name is required.\n                        \t</p>\n                            <p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">\n                            \t<span class=\"mat-icon\">\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\n\t\t\t                    </span>\n                            \tPlease input at least 4 characters.\n                        \t</p>\n                            <p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\n                            \t<span class=\"mat-icon\">\n\t\t\t                        <i class=\"material-icons\">report_problem</i>\n\t\t\t                    </span>\n                                Invalid Url\n                            </p>\n                        </div>\n                        <button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company</button>\n                    </form>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <!-- <button type=\"\" class=\"btn btn-red-outline btn-hover\">Join Company</button> -->\n                Your company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Start: Modal Join Company -->\n<div id=\"join-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content modal-bg\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n                <h5 class=\"modal-title\">Join Company</h5>\n            </div>\n            <div class=\"modal-body col-md-12 np slimscroll\">\n                <div class=\"sahil-material\">\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert hide\" id=\"success-joinCompany\" *ngIf=\"joinCompanyForm.controls.searchCompany.valid\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\tNo Companies Found\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n                    <div class=\"col-md-12 np\">\n                        <form [formGroup]=\"joinCompanyForm\" (ngSubmit)=\"searchCompany()\">\n                            <div class=\"form-group label-floating\">\n                                <label class=\"control-label\" for=\"searchCompany\"> Search</label>\n                                <input class=\"form-control\" id=\"searchCompany\" type=\"text\" name=\"searchCompany\" formControlName=\"searchCompany\" (focus)=\"hideError()\">\n                                <span class=\"icon-search\" (click)=\"searchCompany()\"><i class=\"material-icons\">search</i></span>\n                            </div>\n                            <div *ngIf=\"error\" class=\"alert alert-danger\" id=\"searchError\">\n                                <p *ngIf=\"joinCompanyForm.value.searchCompany.length < 3\">\n                                \t<span class=\"mat-icon\">\n                                \t\t<i class=\"material-icons\">report_problem</i>\n                                \t</span>\n                                \tPlease enter at least 3 characters to search.\n                            \t</p>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np companies-card-wrapper\">\n                        <span *ngIf=\"searchedCompanyList.length > 0\">\n                            <span *ngFor=\"let company of searchedCompanyList\">\n                                <div class=\"col-md-6 col-sm-4 col-xs-6 np companies-card\" (click)=\"joinCompany(company)\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <div class=\"companies-box\">\n                                            <div class=\"img-block-wrapper\">\n                                                <div class=\"img-block-blue\">{{company.name[0]}}</div>\n                                            </div>\n                                            <div class=\"text-block\">\n                                                <h4 class=\"name ellipsis\">{{company.name}}</h4>\n                                                <span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n                                            </div>\n                                            <div class=\"companies-box-hover\" id='joined{{company.id}}'>\n                                                <i class=\"material-icons\">check_circle</i> &nbsp;<span id='join{{company.id}}'>Join</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </span>\n                        </span>\n                        <span *ngIf=\"joinedCompanyList.length > 0\">\n                            <span *ngFor=\"let company of joinedCompanyList\">\n                                <div class=\"col-md-6 col-sm-4 col-xs-6 np companies-card\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <div class=\"companies-box\">\n                                            <div class=\"img-block-wrapper\">\n                                                <div class=\"img-block-blue\">{{company.name[0]}}</div>\n                                            </div>\n                                            <div class=\"text-block\">\n                                                <h4 class=\"name ellipsis\">{{company.name}}</h4>\n                                                <span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n                                            </div>\n                                            <div class=\"companies-box-request\">\n                                                Request Sent\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </span>\n                        </span>\n                        <span *ngIf=\"invitedCompanyList.length > 0\">\n                            <span *ngFor=\"let company of invitedCompanyList\">\n                                <div class=\"col-md-6 col-sm-4 col-xs-6 np companies-card\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <div class=\"companies-box\">\n                                            <div class=\"img-block-wrapper\">\n                                                <div class=\"img-block-blue\">{{company.name[0]}}</div>\n                                            </div>\n                                            <div class=\"text-block\">\n                                                <h4 class=\"name ellipsis\">{{company.name}}</h4>\n                                                <span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n                                            </div>\n                                            <div class=\"companies-box-request\">\n                                                check email for your approval\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </span>\n                        </span>\n                    </div>\n                    <!-- End: companies cards section -->\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                Once the admin of the company accepts your request, you will be added to the company on Outgrow.\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End: Modal Join Company -->\n\n<!-- <div class=\"float-changes-updated hide\" id=\"floatUCMessage\">\n\t<div class=\"col-md-12 np\">\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n\t\t<span id=\"floatMessage\">{{ Message }} </span>\n\t</div>\n</div> -->\n\n<!-- <div class=\"float-changes-updated hide\" id=\"ucFloatMessage\">\n\t<div class=\"col-md-12 np\">\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n\t\t<span id=\"floatMessageUC\">{{ Message }} </span>\n\t</div>\n</div> -->\n\n<div class=\"toast\" id=\"ucFloatMessage\"><i class=\"material-icons toast-ic\">check</i>\n\t<span id=\"floatMessageUC\">{{ Message }} </span>\n\t<button type=\"button\" class=\"btn toast-btn\"><i class=\"material-icons\">clear</i></button>\n</div>\n\n<div id=\"leaveConfirmation\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content modal-bg\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n                <button type=\"button\" class=\"close btn-help\">\n                    <i class=\"material-icons\">help_outline</i>\n                </button>\n                <h5 class=\"modal-title\">Confirmation</h5>\n            </div>\n            <div class=\"modal-body col-md-12 np og-message\">\n                <p>Are you sure you wish to leave this company?</p>\n                <p>This is the only company you belong to. If you leave this company, your account will be deleted.</p>\n                <button class=\"btn btn-red-outline btn-hover\" id=\"confirmNo\" data-dismiss=\"modal\">\n                    No\n                </button>\n                <button class=\"btn btn-red-outline btn-hover\" id=\"confirmYes\">\n                    Yes\n                </button>\n\n            </div>\n            <div class=\"modal-footer col-md-12 np hide\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 1083:
/***/ function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-10 col-sm-offset-1 api-keyoutr\">\n    <h3>Copy or regenerate your API KEY for the respective companies</h3>\n    <div class=\"api-key-table\">\n        <div class=\"api-key-table-top\">\n            <div class=\"col-xs-12 col-sm-4 pl0\">\n                <p>Company and URL</p>\n            </div>\n            <div class=\"col-xs-12 col-sm-5 pl0\">\n                <p>API Key</p>\n            </div>\n            <div class=\"col-xs-12 col-sm-3 pl0\">\n                <p class=\"action-last\">Actions</p>\n            </div>\n        </div>\n        <div class=\"api-key-tablelist\" *ngFor=\"let company of companies; let i = index\">\n            <div class=\"col-xs-12 col-sm-4 np\">\n                <div class=\"api-tablelist-left\">\n                    <span [class.red]=\"(i+1)%2 == 0\">{{company?.name[0] | uppercase}}</span>\n                </div>\n                <div class=\"api-tablelist-right\">\n                    <p class=\"ellipsis\">{{company?.name}}</p>\n                    <label class=\"ellipsis\">{{company?.name}}.outgrow.co</label>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-5 np\"> \n                <div class=\"api-key-generate\" id=\"input-api-{{i}}\">\n                    {{company?.api}}\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-3 np\">\n                <div class=\"api-key-actions\">\n                    <a href=\"javascript:void(0);\" (click)=\"copyApi(i)\"><i class=\"material-icons\">content_copy</i> Copy</a>\n                    <a href=\"javascript:void(0);\" id=\"regenerate-api-{{i}}\" (click)=\"generateApiKey(company?._id,i)\" *ngIf=\"company?.api != NULL\"><i class=\"material-icons\">replay</i> Regenerate</a>\n                    <a href=\"javascript:void(0);\" (click)=\"generateApiKey(company?._id,i)\" *ngIf=\"company?.api == NULL\" ><i class=\"material-icons\">replay</i> Generate</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 1084:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 np payment-history\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np payment-history-details-header\">\n        <div class=\"col-md-8 col-sm-8 col-xs-6 np\">\n            <h6 class=\"\">Invoices</h6>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-6 np membership-top-wrapper-sec1-right\">\n            <ul class=\"\">\n                <!-- <li>\n                    <a href=\"javascript:void(0);\" class=\"\">\n                        <span class=\"mat-icon\">\n                            <i class=\"material-icons\">help</i>\n                        </span>\n                        &nbsp;Billing FAQs\n                    </a>\n                </li> -->\n                <li>\n                    <a href=\"javascript:void(0);\" class=\"\" (click)=\"contactUs()\">\n                        <span class=\"mat-icon\">\n                            <i class=\"material-icons\">chat_bubble</i>\n                        </span>\n                        &nbsp;Contact Us\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"loadingInvDet\"><i class=\"material-icons loader-plan\">autorenew</i></div>\n    <div class=\"payment-history-dialog\"  *ngIf = \"!loadingInvDet\">\n        <!-- Modal content-->\n        <div class=\"payment-history-content\">\n            <!-- <div class=\"payment-history-header \">\n                <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n                <h5 class=\"payment-history-title\">Payment History</h5>\n            </div> -->\n            <div class=\"payment-history-body col-md-12 np\">\n                <div class=\"sahil-material\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Invoice No.</th>\n                                    <th>Date</th>\n                                    <th>Amount</th>\n                                    <th>Status</th>\n                                    <th>&nbsp;</th>\n                                </tr>\n                            </thead>\n                            <tbody *ngIf=\"isInvoiceExist\">\n                                <tr *ngFor=\"let invoice of allInvoices;let i = index\">\n                                    <td>{{i+1}}</td>\n                                    <td>{{invoice.date}}</td>\n                                    <td>$ {{invoice.amount_paid}}</td>\n                                    <td class=\"text-opacity\">\n                                        <span [class.invoice-paid]=\"invoice.status=='paid'\"\n                                                [class.invoice-not-paid]=\"invoice.status=='not_paid'\"\n                                                [class.invoice-voided]=\"invoice.status=='voided'\"\n                                                [class.invoice-due]=\"invoice.status=='payment_due'\"\n                                                [class.invoice-pending]=\"invoice.status=='pending'\">\n                                            {{invoice.status}}\n                                        </span>\n                                        <!-- <span *ngIf=\"invoice.status=='paid'\"> via {{invoice.cardDetail}} </span> -->\n                                    </td>\n                                    <td>\n                                        <a href=\"javascript:void(0);\" class=\"invoiceId pdf-download\" (click)=\"getInvoicePdf(invoice.id)\">\n                                            Download PDF\n                                        </a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                            <tbody *ngIf=\"!isInvoiceExist\">\n                                <tr>\n                                    <td></td>\n                                    <td></td>\n                                    <td colspan=\"5\" class=\"no-invoice\">\n                                        No Invoice has been raised\n                                    </td>\n                                    <td></td>\n                                    <td></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"payment-history-footer col-md-12 np\">\n                <div class=\"col-md-5 np\"></div>\n                <div class=\"col-md-7 np\">\n                    <!--<button type=\"\" class=\"btn btn-red-outline btn-hover\">Approve Request</button>-->\n                    <ul class=\"pagination hide\">\n                        <li><a href=\"javascript:void(0);\">1</a></li>\n                        <li><a href=\"javascript:void(0);\">2</a></li>\n                        <li><a href=\"javascript:void(0);\">3</a></li>\n                        <li><a href=\"javascript:void(0);\">4</a></li>\n                        <li><a href=\"javascript:void(0);\">5</a></li>\n                        <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">play_arrow</i></a></li>\n                        <li><a href=\"javascript:void(0);\"><i class=\"material-icons\">skip_next</i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 1085:
/***/ function(module, exports) {

module.exports = "<div class=\"tab-pane\" id=\"membership-details\">\n\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t<!-- Start: Nav tabs -->\n\t\t<div class=\"col-md-3 col-sm-3 col-xs-12 np membership-details-inner-tabs\">\n            <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n\t            <li role=\"presentation\" class=\"active\">\n\t\t\t\t    <a href=\"#subscription\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Subscription <i class=\"material-icons\">keyboard_arrow_right</i></a>\n\t\t\t     </li>\n\t\t\t    <li role=\"presentation\">\n\t\t\t\t    <a href=\"#invoice\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Invoices <i class=\"material-icons\">keyboard_arrow_right</i></a>\n\t\t\t    </li>\n\t\t\t    <li role=\"presentation\">\n\t\t\t\t    <a href=\"#settings\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Billing Details <i class=\"material-icons\">keyboard_arrow_right</i></a>\n\t\t\t    </li>\n            </ul>\n\t\t</div>\n        <!-- End: Nav tabs -->\n\n\t\t<div class=\"tab-content tab-sub-content col-md-9 col-sm-9 col-xs-12 np\">\n            <!-- Start: Nav tabs (responsive) -->\n            <div class=\"col-md-12 col-sm-12 col-xs-12 membership-details-tabs-resp\">\n                <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n                    <li role=\"presentation\" class=\"active\">\n                        <a href=\"#subscription\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Subscription</a>\n                     </li>\n                    <li role=\"presentation\">\n                        <a href=\"#invoice\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Invoices</a>\n                    </li>\n                    <li role=\"presentation\">\n                        <a href=\"#settings\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Billing Details</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- End: Nav tabs (responsive) -->\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane my-profile active\" id=\"subscription\">\n\t\t\t\t<og-subscription [payment_status] = \"card_status\" [userRole] = \"userRole\" (isChangePlan)=\"isChangePlan = $event\" (changeToPlan)=\"changeToPlan = $event\"></og-subscription>\n\t\t\t</div>\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane my-profile\" id=\"invoice\">\n\t\t\t\t<og-invoice></og-invoice>\n\t\t\t</div>\n\t\t\t<div role=\"tabpanel\" class=\"tab-pane my-profile\" id=\"settings\">\n\t\t\t\t<og-payment [cardType] = \"cardType\" [userRole] = \"userRole\" (CardDetailChanged)=\"CardDetail = $event\" [CardDetail]=\"CardDetail\" [card_status]=\"card_status\"></og-payment>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Start: Modal CC -->\n<div id=\"cc-modal\" class=\"modal fade cc-modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n      <!-- Modal content-->\n    <form class=\"form-wrapper\" [formGroup]=\"setupPaymentForm\" id=\"setupPaymentForm\" (ngSubmit)=\"setupPayment()\">\n      <div class=\"modal-content modal-content-credit\">\n        <button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            Close <i class=\"material-icons\">close</i>\n        </button>\n        <div class=\"modal-body\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <div class=\"col-md-12 col-sm-12 np\">\n              <div class=\"col-md-6 col-sm-6 col-xs-6 np modal-header\">\n                Payment Setup\n              </div>\n              <img id=\"cardType\" src=\"assets/images/payment-icons/icon-{{cardType}}.png\" alt=\"{{cardType}}\" class=\"pull-right\" *ngIf=\"cardType\"/>\n            </div>\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np credit-sec\">\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber1\" id=\"cardNumber1\" name = \"cardNumber1\" #num1 (keyup)=\"onChangeCardNumber(num1)\">\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber2\" id=\"cardNumber2\" name = \"cardNumber2\" [readonly]=\"!setupPaymentForm.controls.cardNumber1.valid\" #num2 (keyup)=\"onChangeCardNumber(num2)\">\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number\" placeholder=\"XXXX\" formControlName=\"cardNumber3\" id=\"cardNumber3\" name = \"cardNumber3\" [readonly]=\"!setupPaymentForm.controls.cardNumber2.valid\" #num3 (keyup)=\"onChangeCardNumber(num3)\">\n                <input type=\"text\" pattern=\"[0-9]*\" size=\"4\" maxlength=\"4\" class=\"cc-number cc-number-last\" placeholder=\"XXXX\" formControlName=\"cardNumber4\" id=\"cardNumber4\" name = \"cardNumber4\" [readonly]=\"!setupPaymentForm.controls.cardNumber3.valid\" #num4 (keyup)=\"onChangeCardNumber(num4)\">\n              </div>\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np validity-sec\">\n                <div class=\"col-md-5 col-sm-5 col-xs-5 np\"></div>\n                <div class=\"col-md-7 col-sm-7 col-xs-7 np\">\n                  <span class=\"val-text\">Validity</span>\n                  <div class=\"pull-right\">\n                    <input type=\"text\" pattern=\"[0-9]*\" placeholder=\"MM\" maxlength=\"2\" class=\"cc-exp\" id=\"cardMonth\" name=\"cardMonth\" formControlName=\"cardMonth\" #mm (keyup)=\"onChangeCardNumber(mm)\">\n                    <span class=\"separator\">/</span>\n                    <input type=\"text\" pattern=\"[0-9]*\" placeholder=\"YYYY\" maxlength=\"4\" class=\"cc-exp cc-exp-last\" id=\"cardYear\" name=\"cardYear\" formControlName=\"cardYear\" #yyyy (keyup)=\"onChangeCardNumber(yyyy)\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np name-sec\">\n                <input type=\"text\" placeholder=\"YOUR NAME\" class=\"cc-name col-md-9 col-sm-9 col-xs-12 np\" id=\"nameOnCard\" name=\"nameOnCard\" formControlName=\"nameOnCard\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-content modal-content-cvv\">\n          <div class=\"modal-body\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                  <div class=\"col-md-12 col-sm-12 np\">\n                      <span class=\"grey-bg\"></span>\n                  </div>\n                  <div class=\"col-md-12 col-sm-12 np\">\n                      <input type=\"password\" size=\"3\" maxlength=\"3\" class=\"cvv-number\" placeholder=\"XXX\" name=\"cvv\" id=\"cvv\" formControlName=\"cvv\" #cvv (keyup)=\"onChangeCardNumber(cvv)\">\n                      <span class=\"cvv-text\">CVV</span>\n                  </div>\n              </div>\n          </div>\n          <button id=\"btnSetupCard\" [disabled]=\"!setupPaymentForm.valid\" type=\"submit\" class=\"btn btn-red-outline btn-hover\">\n            <span *ngIf='!isChangePlan'>Submit</span>\n            <span *ngIf='isChangePlan'>Make Payment</span>\n          </button>\n          <div *ngIf=\"error\" class=\"alert alert-danger custom-danger\">\n            <p>\n              <span class=\"mat-icon\">\n                  <i class=\"material-icons\">report_problem</i>\n              </span>\n              {{errorMessage}}\n            </p>\n        \t</div>\n      </div>\n    </form>\n  </div>\n</div>\n<!-- End: Modal CC -->\n<div class=\"float-changes-updated hide\" id=\"setupPaymentMessage\">\n\t<div class=\"col-md-12 np\">\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n\t\t<span id=\"setupMessage\"></span>\n\t</div>\n</div>\n"

/***/ },

/***/ 1086:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-1 col-sm-12 col-xs-12\"></div>\n<div class=\"col-md-10 col-sm-12 col-xs-12 np billing-outer\">\n    <!--Start: billing details -->\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np billing-details\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np billing-details-header\">\n                <div class=\"col-md-8 col-sm-8 col-xs-6 np\">\n                    <h6 class=\"\">Billing Details</h6>\n                </div>\n                <div class=\"col-md-4 col-sm-4 col-xs-6 np membership-top-wrapper-sec1-right\">\n                    <ul class=\"\">\n                        <li>\n                            <a href=\"javascript:void(0);\" class=\"\" (click)=\"contactUs()\">\n                                <span class=\"mat-icon\">\n                                    <i class=\"material-icons\">chat_bubble</i>\n                                </span>\n                                &nbsp;Contact Us\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"loadingPayDet\"><i class=\"material-icons loader-plan\">autorenew</i></div>\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np billing-details-info\" *ngIf=\"!loadingPayDet\">\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np hide\">\n                    <h4 class=\"name-info\">{{name}}</h4>\n                </div>\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np hide\">\n                    <address>\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                            <span class=\"address-title\">\n                                <i class=\"material-icons\">language</i>\n                                Address\n                            </span>\n                        </div>\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                            {{address}}, {{city}}<br/>\n                            {{state}}, {{country}}<br/>\n                            {{zip}}\n                        </div>\n                    </address>\n                </div>\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np email-info hide\">\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                        <span class=\"email-title\">\n                            <i class=\"material-icons\">email</i>\n                            Email\n                        </span>\n                    </div>\n                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                        <span>{{email}}</span>\n                    </div>\n                </div>\n                 <form id=\"billingAddressForm\" [formGroup]=\"billingAddressForm\" (ngSubmit)=\"updateBillingAddress()\">\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingDetails.first_name\">\n                                <label class=\"control-label\" for=\"inputName\">Name</label>\n                                <input class=\"form-control\" id=\"inputName\" type=\"text\" name=\"inputName\" formControlName=\"inputName\"\n                                [(ngModel)]=\"BillingDetails.first_name\">\n                            </div>\n                            <div *ngIf=\"billingAddressForm.controls.inputName.touched && !billingAddressForm.controls.inputName.valid\" class=\"alert alert-danger\">\n                                <p *ngIf=\"billingAddressForm.controls.inputName.errors.required\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Name is required.\n                                </p>\n                                <p *ngIf=\"billingAddressForm.controls.inputName.errors.minlength\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Minimum 3 charaters.\n                                </p>\n                            </div>\n                            <div class=\"form-group label-floating\"  [class.is-empty]=\"!BillingAddress.line1\">\n                                <label class=\"control-label\" for=\"inputAddress\">Address</label>\n                                <input class=\"form-control\" id=\"inputAddress\" type=\"text\" name=\"inputAddress\" formControlName=\"inputAddress\" [(ngModel)]=\"BillingAddress.line1\">\n                            </div>\n                            <div *ngIf=\"billingAddressForm.controls.inputAddress.touched && !billingAddressForm.controls.inputAddress.valid\" class=\"alert alert-danger\">\n                                <p *ngIf=\"billingAddressForm.controls.inputAddress.errors.required\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Address is required.\n                                </p>\n                                <p *ngIf=\"billingAddressForm.controls.inputAddress.errors.minlength\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Minimum 3 charaters.\n                                </p>\n                            </div>\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingAddress.city\">\n                                <label class=\"control-label\" for=\"inputCity\">City</label>\n                                <input class=\"form-control\" id=\"inputCity\" type=\"text\" name=\"inputCity\" formControlName=\"inputCity\"\n                                [(ngModel)]=\"BillingAddress.city\">\n                            </div>\n                            <div *ngIf=\"billingAddressForm.controls.inputCity.touched && !billingAddressForm.controls.inputCity.valid\" class=\"alert alert-danger\">\n                                <p *ngIf=\"billingAddressForm.controls.inputCity.errors.required\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    City is required.\n                                </p>\n                                <p *ngIf=\"billingAddressForm.controls.inputCity.errors.minlength\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Minimum 3 charaters.\n                                </p>\n                            </div>\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingAddress.state\">\n                                <label class=\"control-label\" for=\"inputState\">State</label>\n                                <input class=\"form-control\" id=\"inputState\" type=\"text\" name=\"inputState\" formControlName=\"inputState\"\n                                [(ngModel)]=\"BillingAddress.state\">\n                            </div>\n                            <div *ngIf=\"billingAddressForm.controls.inputState.touched && !billingAddressForm.controls.inputState.valid\" class=\"alert alert-danger\">\n                                <p *ngIf=\"billingAddressForm.controls.inputState.errors.required\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    State is required.\n                                </p>\n                                <p *ngIf=\"billingAddressForm.controls.inputState.errors.minlength\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Minimum 3 charaters.\n                                </p>\n                            </div>\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingAddress.country\">\n                                <label class=\"control-label\" for=\"inputCountry \">Country</label>\n                                <select class=\"form-control\" id=\"inputCountry\" name=\"inputCountry\" formControlName=\"inputCountry\"\n                                [(ngModel)]=\"BillingAddress.country\">\n                                    <option value=\"AF\">Afghanistan</option>\n                                    <option value=\"AX\">Aland Islands</option>\n                                    <option value=\"AL\">Albania</option>\n                                    <option value=\"DZ\">Algeria</option>\n                                    <option value=\"AS\">American Samoa</option>\n                                    <option value=\"AD\">Andorra</option>\n                                    <option value=\"AO\">Angola</option>\n                                    <option value=\"AI\">Anguilla</option>\n                                    <option value=\"AQ\">Antarctica</option>\n                                    <option value=\"AG\">Antigua And Barbuda</option>\n                                    <option value=\"AR\">Argentina</option>\n                                    <option value=\"AM\">Armenia</option>\n                                    <option value=\"AW\">Aruba</option>\n                                    <option value=\"AU\">Australia</option>\n                                    <option value=\"AT\">Austria</option>\n                                    <option value=\"AZ\">Azerbaijan</option>\n                                    <option value=\"BS\">Bahamas</option>\n                                    <option value=\"BH\">Bahrain</option>\n                                    <option value=\"BD\">Bangladesh</option>\n                                    <option value=\"BB\">Barbados</option>\n                                    <option value=\"BY\">Belarus</option>\n                                    <option value=\"BE\">Belgium</option>\n                                    <option value=\"BZ\">Belize</option>\n                                    <option value=\"BJ\">Benin</option>\n                                    <option value=\"BM\">Bermuda</option>\n                                    <option value=\"BT\">Bhutan</option>\n                                    <option value=\"BO\">Bolivia</option>\n                                    <option value=\"BA\">Bosnia And Herzegovina</option>\n                                    <option value=\"BW\">Botswana</option>\n                                    <option value=\"BV\">Bouvet Island</option>\n                                    <option value=\"BR\">Brazil</option>\n                                    <option value=\"IO\">British Indian Ocean Territory</option>\n                                    <option value=\"VG\">British Virgin Islands</option>\n                                    <option value=\"BN\">Brunei Darussalam</option>\n                                    <option value=\"BG\">Bulgaria</option>\n                                    <option value=\"BF\">Burkina Faso</option>\n                                    <option value=\"BI\">Burundi</option>\n                                    <option value=\"KH\">Cambodia</option>\n                                    <option value=\"CM\">Cameroon</option>\n                                    <option value=\"CA\">Canada</option>\n                                    <option value=\"CV\">Cape Verde</option>\n                                    <option value=\"KY\">Cayman Islands</option>\n                                    <option value=\"CF\">Central African Republic</option>\n                                    <option value=\"TD\">Chad</option>\n                                    <option value=\"CL\">Chile</option>\n                                    <option value=\"CN\">China</option>\n                                    <option value=\"CX\">Christmas Island</option>\n                                    <option value=\"CC\">Cocos (Keeling) Islands</option>\n                                    <option value=\"CO\">Colombia</option>\n                                    <option value=\"KM\">Comoros</option>\n                                    <option value=\"CG\">Congo</option>\n                                    <option value=\"CD\">Congo (Democratic Republic)</option>\n                                    <option value=\"CK\">Cook Islands</option>\n                                    <option value=\"CR\">Costa Rica</option>\n                                    <option value=\"CI\">Côte D'ivoire</option>\n                                    <option value=\"HR\">Croatia</option>\n                                    <option value=\"CW\">Curaçao</option>\n                                    <option value=\"CU\">Cuba</option>\n                                    <option value=\"CY\">Cyprus</option>\n                                    <option value=\"CZ\">Czech Republic</option>\n                                    <option value=\"DK\">Denmark</option>\n                                    <option value=\"DJ\">Djibouti</option>\n                                    <option value=\"DM\">Dominica</option>\n                                    <option value=\"DO\">Dominican Republic</option>\n                                    <option value=\"EC\">Ecuador</option>\n                                    <option value=\"EG\">Egypt</option>\n                                    <option value=\"SV\">El Salvador</option>\n                                    <option value=\"GQ\">Equatorial Guinea</option>\n                                    <option value=\"ER\">Eritrea</option>\n                                    <option value=\"EE\">Estonia</option>\n                                    <option value=\"ET\">Ethiopia</option>\n                                    <option value=\"FK\">Falkland Islands (Malvinas)</option>\n                                    <option value=\"FO\">Faroe Islands</option>\n                                    <option value=\"FJ\">Fiji</option>\n                                    <option value=\"FI\">Finland</option>\n                                    <option value=\"FR\">France</option>\n                                    <option value=\"GF\">French Guiana</option>\n                                    <option value=\"PF\">French Polynesia</option>\n                                    <option value=\"TF\">French Southern Territories</option>\n                                    <option value=\"GA\">Gabon</option>\n                                    <option value=\"GM\">Gambia</option>\n                                    <option value=\"GE\">Georgia</option>\n                                    <option value=\"DE\">Germany</option>\n                                    <option value=\"GH\">Ghana</option>\n                                    <option value=\"GI\">Gibraltar</option>\n                                    <option value=\"GR\">Greece</option>\n                                    <option value=\"GL\">Greenland</option>\n                                    <option value=\"GD\">Grenada</option>\n                                    <option value=\"GP\">Guadeloupe</option>\n                                    <option value=\"GU\">Guam</option>\n                                    <option value=\"GT\">Guatemala</option>\n                                    <option value=\"GG\">Guernsey</option>\n                                    <option value=\"GN\">Guinea</option>\n                                    <option value=\"GW\">Guinea-bissau</option>\n                                    <option value=\"GY\">Guyana</option>\n                                    <option value=\"HT\">Haiti</option>\n                                    <option value=\"HM\">Heard Island And Mcdonald Islands</option>\n                                    <option value=\"HN\">Honduras</option>\n                                    <option value=\"HK\">Hong Kong</option>\n                                    <option value=\"HU\">Hungary</option>\n                                    <option value=\"IS\">Iceland</option>\n                                    <option value=\"IN\" selected=\"\">India</option>\n                                    <option value=\"ID\">Indonesia</option>\n                                    <option value=\"IR\">Iran</option>\n                                    <option value=\"IQ\">Iraq</option>\n                                    <option value=\"IE\">Ireland</option>\n                                    <option value=\"IM\">Isle Of Man</option>\n                                    <option value=\"IL\">Israel</option>\n                                    <option value=\"IT\">Italy</option>\n                                    <option value=\"JM\">Jamaica</option>\n                                    <option value=\"JP\">Japan</option>\n                                    <option value=\"JE\">Jersey</option>\n                                    <option value=\"JO\">Jordan</option>\n                                    <option value=\"KZ\">Kazakhstan</option>\n                                    <option value=\"KE\">Kenya</option>\n                                    <option value=\"KI\">Kiribati</option>\n                                    <option value=\"KP\">Korea (Democratic People's Republic)</option>\n                                    <option value=\"KR\">Korea (Republic)</option>\n                                    <option value=\"KW\">Kuwait</option>\n                                    <option value=\"KG\">Kyrgyzstan</option>\n                                    <option value=\"LA\">Lao (People's Democratic Republic)</option>\n                                    <option value=\"LV\">Latvia</option>\n                                    <option value=\"LB\">Lebanon</option>\n                                    <option value=\"LS\">Lesotho</option>\n                                    <option value=\"LR\">Liberia</option>\n                                    <option value=\"LY\">Libya</option>\n                                    <option value=\"LI\">Liechtenstein</option>\n                                    <option value=\"LT\">Lithuania</option>\n                                    <option value=\"LU\">Luxembourg</option>\n                                    <option value=\"MO\">Macao</option>\n                                    <option value=\"MK\">Macedonia</option>\n                                    <option value=\"MG\">Madagascar</option>\n                                    <option value=\"MW\">Malawi</option>\n                                    <option value=\"MY\">Malaysia</option>\n                                    <option value=\"MV\">Maldives</option>\n                                    <option value=\"ML\">Mali</option>\n                                    <option value=\"MT\">Malta</option>\n                                    <option value=\"MH\">Marshall Islands</option>\n                                    <option value=\"MQ\">Martinique</option>\n                                    <option value=\"MR\">Mauritania</option>\n                                    <option value=\"MU\">Mauritius</option>\n                                    <option value=\"YT\">Mayotte</option>\n                                    <option value=\"MX\">Mexico</option>\n                                    <option value=\"FM\">Micronesia</option>\n                                    <option value=\"MD\">Moldova</option>\n                                    <option value=\"MC\">Monaco</option>\n                                    <option value=\"MN\">Mongolia</option>\n                                    <option value=\"ME\">Montenegro</option>\n                                    <option value=\"MS\">Montserrat</option>\n                                    <option value=\"MA\">Morocco</option>\n                                    <option value=\"MZ\">Mozambique</option>\n                                    <option value=\"MM\">Myanmar</option>\n                                    <option value=\"NA\">Namibia</option>\n                                    <option value=\"NR\">Nauru</option>\n                                    <option value=\"NP\">Nepal</option>\n                                    <option value=\"NL\">Netherlands</option>\n                                    <option value=\"NC\">New Caledonia</option>\n                                    <option value=\"NZ\">New Zealand</option>\n                                    <option value=\"NI\">Nicaragua</option>\n                                    <option value=\"NE\">Niger</option>\n                                    <option value=\"NG\">Nigeria</option>\n                                    <option value=\"NU\">Niue</option>\n                                    <option value=\"NF\">Norfolk Island</option>\n                                    <option value=\"MP\">Northern Mariana Islands</option>\n                                    <option value=\"NO\">Norway</option>\n                                    <option value=\"OM\">Oman</option>\n                                    <option value=\"PK\">Pakistan</option>\n                                    <option value=\"PW\">Palau</option>\n                                    <option value=\"PS\">Palestinian Territory (Occupied)</option>\n                                    <option value=\"PA\">Panama</option>\n                                    <option value=\"PG\">Papua New Guinea</option>\n                                    <option value=\"PY\">Paraguay</option>\n                                    <option value=\"PE\">Peru</option>\n                                    <option value=\"PH\">Philippines</option>\n                                    <option value=\"PN\">Pitcairn</option>\n                                    <option value=\"PL\">Poland</option>\n                                    <option value=\"PT\">Portugal</option>\n                                    <option value=\"PR\">Puerto Rico</option>\n                                    <option value=\"QA\">Qatar</option>\n                                    <option value=\"RE\">Reunion</option>\n                                    <option value=\"RO\">Romania</option>\n                                    <option value=\"RU\">Russian Federation</option>\n                                    <option value=\"RW\">Rwanda</option>\n                                    <option value=\"BL\">Saint Barthélemy</option>\n                                    <option value=\"SH\">Saint Helena</option>\n                                    <option value=\"KN\">Saint Kitts And Nevis</option>\n                                    <option value=\"LC\">Saint Lucia</option>\n                                    <option value=\"MF\">Saint Martin (French Part)</option>\n                                    <option value=\"PM\">Saint Pierre And Miquelon</option>\n                                    <option value=\"VC\">Saint Vincent And The Grenadines</option>\n                                    <option value=\"WS\">Samoa</option>\n                                    <option value=\"SM\">San Marino</option>\n                                    <option value=\"ST\">Sao Tome And Principe</option>\n                                    <option value=\"SA\">Saudi Arabia</option>\n                                    <option value=\"SN\">Senegal</option>\n                                    <option value=\"RS\">Serbia</option>\n                                    <option value=\"SC\">Seychelles</option>\n                                    <option value=\"SL\">Sierra Leone</option>\n                                    <option value=\"SG\">Singapore</option>\n                                    <option value=\"BQ\">Sint Eustatius And Saba Bonaire</option>\n                                    <option value=\"SX\">Sint Maarten (Dutch Part)</option>\n                                    <option value=\"SK\">Slovakia</option>\n                                    <option value=\"SI\">Slovenia</option>\n                                    <option value=\"SB\">Solomon Islands</option>\n                                    <option value=\"SO\">Somalia</option>\n                                    <option value=\"ZA\">South Africa</option>\n                                    <option value=\"GS\">South Georgia And The South Sandwich Islands</option>\n                                    <option value=\"SS\">South Sudan</option>\n                                    <option value=\"ES\">Spain</option>\n                                    <option value=\"LK\">Sri Lanka</option>\n                                    <option value=\"SD\">Sudan</option>\n                                    <option value=\"SR\">Suriname</option>\n                                    <option value=\"SJ\">Svalbard And Jan Mayen</option>\n                                    <option value=\"SZ\">Swaziland</option>\n                                    <option value=\"SE\">Sweden</option>\n                                    <option value=\"CH\">Switzerland</option>\n                                    <option value=\"SY\">Syrian Arab Republic</option>\n                                    <option value=\"TW\">Taiwan</option>\n                                    <option value=\"TJ\">Tajikistan</option>\n                                    <option value=\"TZ\">Tanzania</option>\n                                    <option value=\"TH\">Thailand</option>\n                                    <option value=\"TL\">Timor-leste</option>\n                                    <option value=\"TG\">Togo</option>\n                                    <option value=\"TK\">Tokelau</option>\n                                    <option value=\"TO\">Tonga</option>\n                                    <option value=\"TT\">Trinidad And Tobago</option>\n                                    <option value=\"TN\">Tunisia</option>\n                                    <option value=\"TR\">Turkey</option>\n                                    <option value=\"TM\">Turkmenistan</option>\n                                    <option value=\"TC\">Turks And Caicos Islands</option>\n                                    <option value=\"TV\">Tuvalu</option>\n                                    <option value=\"UG\">Uganda</option>\n                                    <option value=\"UA\">Ukraine</option>\n                                    <option value=\"AE\">United Arab Emirates</option>\n                                    <option value=\"GB\">United Kingdom</option>\n                                    <option value=\"US\">United States</option>\n                                    <option value=\"UM\">United States Minor Outlying Islands</option>\n                                    <option value=\"UY\">Uruguay</option>\n                                    <option value=\"UZ\">Uzbekistan</option>\n                                    <option value=\"VU\">Vanuatu</option>\n                                    <option value=\"VA\">Vatican City</option>\n                                    <option value=\"VE\">Venezuela</option>\n                                    <option value=\"VN\">Viet Nam</option>\n                                    <option value=\"VI\">U.S. Virgin Islands</option>\n                                    <option value=\"WF\">Wallis And Futuna</option>\n                                    <option value=\"EH\">Western Sahara</option>\n                                    <option value=\"YE\">Yemen</option>\n                                    <option value=\"ZM\">Zambia</option>\n                                    <option value=\"ZW\">Zimbabwe</option>\n                                </select>\n                            </div>\n                            <div *ngIf=\"billingAddressForm.controls.inputCountry.touched && !billingAddressForm.controls.inputCountry.valid\" class=\"alert alert-danger\">\n                                <p *ngIf=\"billingAddressForm.controls.inputCountry.errors.required\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Country is required.\n                                </p>\n                            </div>\n                            <div class=\"form-group label-floating\" [class.is-empty]=\"!BillingAddress.zip\">\n                                <label class=\"control-label\" for=\"inputZipCode\">Zip Code</label>\n                                <input class=\"form-control\" id=\"inputZipCode\" type=\"text\"  name=\"inputZipCode\" formControlName=\"inputZipCode\" [(ngModel)]=\"BillingAddress.zip\">\n                            </div>\n                            <div *ngIf=\"billingAddressForm.controls.inputZipCode.touched && !billingAddressForm.controls.inputZipCode.valid\" class=\"alert alert-danger\">\n                                <p *ngIf=\"billingAddressForm.controls.inputZipCode.errors.required\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Zip code is required.\n                                </p>\n                                <p *ngIf=\"billingAddressForm.controls.inputZipCode.errors.minlength\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Minimum 6 digits.\n                                </p><br>\n                                <p *ngIf=\"billingAddressForm.controls.inputZipCode.errors.pattern\">\n                                    <span class=\"mat-icon\">\n                                        <i class=\"material-icons\">report_problem</i>\n                                    </span>\n                                    Zip code should valid.\n                                </p>\n                            </div>\n                            <div class=\"col-md-12 np\" *ngIf=\"userRole == 'ADMIN'\">\n                                <button type=\"submit\" class=\"btn btn-red-outline btn-add-user btn-hover pull-left\" id=\"btnBilling\" [disabled]=\"!billingAddressForm.valid\">Save</button>\n                            </div>\n                        </form>\n                <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"userRole == 'ADMIN'\">\n                    <!--<button class=\"btn btn-red-outline btn-hover btn-edit-billDetail\" data-toggle=\"modal\" data-target=\"#billing-detail\" type=\"\" (click)=\"callGA('EDITBILLING')\">Edit</button>-->\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- End: billing details -->\n\n    <!-- Start: payment-method -->\n    <div class=\"col-md-12 col-sm-12 col-xs-12 np payment-method\" *ngIf=\"!loadingPayDet\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np payment-details-header\">\n                <div class=\"col-md-8 col-sm-8 col-xs-12 np\" *ngIf=\"userRole == 'ADMIN'\">\n                    <h6 class=\"\">Payment Method</h6>\n                </div>\n            </div>\n\n            <!-- Start: membership-error-msg -->\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"CardDetail.status == 'expiring'\">\n                <div class=\"membership-error-msg\">\n                    <span class=\"mat-icon\">\n                        <i class=\"material-icons\">report_problem</i>\n                    </span>\n                    <span>Your card will expire by end of this month. For uninterrupted services, please update your card details before your next billing.</span>\n                </div>\n            </div>\n            <!-- End: membership-error-msg -->\n            <div class=\"col-md-12 col-sm-12 col-xs-12 np payment-method-sec\" *ngIf=\"BillingDetails.card_status != 'no_card'\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Card Type</th>\n                                <th>Account Linked to</th>\n                                <th>Expiry</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <span class=\"span-input col-md-10 np ellipsis\">{{CardDetail.card_type}}</span>\n                                </td>\n                                <td>\n                                    <span class=\"span-input col-md-10 col-sm-10 col-xs-12 np ellipsis\">{{CardDetail.masked_number}}</span>\n                                </td>\n                                <td>\n                                    <span class=\"span-input\" *ngIf=\"CardDetail.status != 'expired'\">\n                                        {{CardDetail.expiry_month}} - {{CardDetail.expiry_year}}\n                                    </span>\n                                    <div class=\"col-md-7 col-sm-7 col-xs-7 np\" *ngIf=\"CardDetail.status == 'expired'\">\n                                        <span class=\"badge-red\">expired</span>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"userRole == 'ADMIN'\">\n            <a href=\"javascript:void(0);\" id=\"set-payment\"  class=\"btn btn-red-outline btn-hover\" data-toggle=\"modal\" data-target=\"#cc-modal\" (click)=\"callGA('PAYMENTCLICK')\">\n                <span *ngIf=\"BillingDetails.card_status == 'no_card'\">Setup Payment</span>\n                <span *ngIf=\"BillingDetails.card_status != 'no_card'\">Reset Payment</span>\n            </a>\n        </div>\n    </div>\n    <!-- End: payment-method -->\n</div>\n<div class=\"col-md-1 col-sm-12 col-xs-12\"></div>\n<div class=\"float-changes-updated hide\" id=\"BillingAddressFloat\">\n    <div class=\"col-md-12 np\">\n        <span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n        <span id=\"BillingAddressMessage\"></span>\n    </div>\n</div>\n<!-- End: Modal setup-payment -->"

/***/ },

/***/ 1087:
/***/ function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-top-wrapper\">\n\t<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-details\">\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-details-header\">\n\t\t\t<div class=\"col-md-8 col-sm-8 col-xs-6 np\">\n\t\t\t\t<h6 class=\"\">Subscription</h6>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-6 np membership-top-wrapper-sec1-right\">\n\t\t\t\t<ul class=\"\">\n\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"\">\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">help</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t&nbsp;Billing FAQs\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li> -->\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"intercom_trigger\" (click)=\"contactUs()\">\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">chat_bubble</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t&nbsp;Contact Us\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"loadingMemDet\"><i class=\"material-icons loader-plan\">autorenew</i></div>\n\t\t\t<div class=\"membership-success-msg\" *ngIf = \"!loadingMemDet\">\n\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t<i class=\"material-icons\">watch_later</i>\n\t\t\t\t</span>\n\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'in_trial' && !futurePlanSubscription\">\n\t\t\t\t\tYour Trial ends on {{runningPlanSubscription.trial_end}}\n\t\t\t\t</span>\n\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'active' && !futurePlanSubscription\">\n\t\t\t\t\tYour Next billing is on {{runningPlanSubscription.current_term_end}}\n\t\t\t\t</span>\n\t\t\t\t<span *ngIf=\"futurePlanSubscription\">\n\t\t\t\t\tYour Next Subscription {{futurePlanDetail.name}} will be activated on <span *ngIf=\"runningPlanSubscription.status == 'in_trial'\">{{runningPlanSubscription.trial_end}}.</span><span *ngIf=\"runningPlanSubscription.status == 'active'\">{{runningPlanSubscription.current_term_end}}.</span>\n\t\t\t\t</span>\n\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'future'\">\n\t\t\t\t\tYour Plan billing will start on {{runningPlanSubscription.start_date}}\n\t\t\t\t</span>\n\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'cancelled'\">\n\t\t\t\t\tYour Plan has cancelled. Please choose any plan <span *ngIf=\"is_subcripion_cancelled\">or\n\t\t\t\t&nbsp;\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"reactivate\" (click)=\"showEstimateModal(runningPlanDetail)\">\n\t\t\t\t\tReactivate\n            \t</a>\n\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-details-sec\" *ngIf = \"!loadingMemDet\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Current Plan</th>\n\t\t\t\t\t\t\t<th>Plan Price</th>\n\t\t\t\t\t\t\t<th *ngIf=\"runningPlanSubscription.status == 'active' && runningPlanSubscription.plan_id != 'starter'\">Bill Period</th>\n\t\t\t\t\t\t\t<th *ngIf=\"runningPlanSubscription.status == 'in_trial' && !futurePlanSubscription\">Starts On</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<span class=\"span-input col-md-10 np ellipsis\" style=\"text-transform:capitalize;\" title=\"{{runningPlanDetail.name}}\">\n\t\t\t\t\t\t\t\t\t{{runningPlanDetail.name}} <span *ngIf=\"runningPlanSubscription.status == 'in_trial' && !futurePlanSubscription\">(Trial)</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<span class=\"span-input col-md-10 col-sm-10 col-xs-12 np\">\n\t\t\t\t\t\t\t\t\t$ {{runningPlanDetail.price}}&nbsp;/&nbsp;<span *ngIf=\"runningPlanDetail.period != 1\">{{runningPlanDetail.period}}</span>&nbsp;{{runningPlanDetail.period_unit}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"bill-period-value\" *ngIf=\"runningPlanSubscription.status == 'active' && runningPlanSubscription.plan_id != 'starter'\">\n\t\t\t\t\t\t\t\t<span class=\"span-input col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t\t\t {{runningPlanSubscription.current_term_start}}&nbsp;-&nbsp;{{runningPlanSubscription.current_term_end}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td *ngIf=\"runningPlanSubscription.status == 'in_trial' && !futurePlanSubscription\">\n\t\t\t\t\t\t\t\t<span class=\"span-input col-md-10 np ellipsis\" title=\"{{runningPlanSubscription.trial_end}}\">\n\t\t\t\t\t\t\t\t\t{{runningPlanSubscription.trial_end}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<a *ngIf=\"is_admin_created && payment_status == 'no_card'\" href=\"javascript:void(0);\" id=\"set-payment\"  class=\"btn btn-red-outline btn-hover\" data-toggle=\"modal\" data-target=\"#cc-modal\" (click)=\"callGA('PAYMENTCLICK')\">\n\t\t\t\tSetup Payment\n            </a>\n\t\t</div>\n\t\t<br/>\n\t\t<span *ngIf=\"!is_admin_created\">\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"userRole == 'ADMIN'\">\n\t\t\t\t<!-- <button type=\"submit\" class=\"btn btn-red-outline btn-hover\" id=\"cancelMembership\" (click)=\"showEstimateModal(viewplansList[0]);callGA('CANCELMEM')\">\n\t\t\t\t\tcancel membership\n\t\t\t\t</button> -->\n\t\t\t\t<a (click)=\"callGA('SELECTPLAN')\" href=\"settings/membership#plans\" class=\"btn btn-red-outline btn-hover\">\n\t\t\t\t\tSelect a plan and setup payments to continue using Outgrow.\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np membership-bottom-wrapper\">\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t<h4>Choose a plan that's right for your business</h4>\n\t\t\t\t\t<p>All our plans are carefully laid out to suit varied needs and functions. Our pricing is very flexible, so you only pay for the features you need. All plans come with free customer support and hassle free payment options.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 col-md-offset-3 np billing-plan-list\" id=\"plans\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li [class.active]=\"viewPlan == 'm'\" id=\"monthly\" (click)=\"getViewPlans('m')\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\n\t\t\t\t\t\t\t\tMonthly\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li id=\"half-yearly\"  (click)=\"getViewPlans('s')\" [class.active]=\"viewPlan == 's'\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\n\t\t\t\t\t\t\t\tSemi-annual\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li id=\"annually\" (click)=\"getViewPlans('y')\" [class.active]=\"viewPlan == 'y'\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\">\n\t\t\t\t\t\t\t\tAnnual\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np billing-table\">\n\t\t\t\t\t<!-- <center><img src=\"assets/images/logoAnim.gif\" alt=\"loading...\" id=\"imgLoad\" *ngIf = \"loadingPlans\"></center> -->\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf = \"loadingPlans\"><i class=\"material-icons loader-plan\">autorenew</i></div>\n\t\t\t\t\t<span *ngFor=\"let plan of viewplansList\">\n\t\t\t\t\t\t<span *ngIf=\"plan.id != 'starter'\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 np\" [class.billing-grey] = \"plan.id != runningPlanDetail.id\" [class.starter-box] = \"plan.id == 'essentials_m' || plan.id == 'essentials_s' || plan.id == 'essentials_y'\" [class.billing-white]=\"runningPlanDetail.id == plan.id\" [class.business-box]=\"plan.id == 'business_m' || plan.id == 'business_s' || plan.id == 'business_y'\" [class.enterprise-box]=\"plan.id == 'enterprise_m' || plan.id == 'enterprise_s' || plan.id == 'enterprise_y'\" [class.selected-plan]=\"runningPlanDetail.id == plan.id\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\" [class.billing-white-top]=\"runningPlanDetail.id == plan.id\" [class.business-box-xshadow]=\"plan.id == 'business_m' || plan.id == 'business_s' || plan.id == 'business_y'\" [class.billing-grey-top]=\"runningPlanDetail.id != plan.id\">\n\t\t\t\t\t\t\t\t\t<span class=\"ribbon\" *ngIf=\"plan.id == 'business_m' || plan.id == 'business_s' || plan.id == 'business_y'\">Most Popular</span>\n\t\t\t\t\t\t\t\t\t<h3 class=\"plan-title\">{{plan.name.split(' ')[0]}}</h3>\n\t\t\t\t\t\t\t\t\t<h4 class=\"plan-title-cycle\">{{plan.name.split(' ')[1]}}</h4>\n\t\t\t\t\t\t\t\t\t<span class=\"border-center\"></span>\n\t\t\t\t\t\t\t\t\t<h3 class=\"plan-price\">\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id != 'starter'\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"contact-pricing\" *ngIf=\"plan.id.split('_')[0] == 'enterprise'\">\n\t\t\t\t\t\t\t\t\t\t\t\t*Contact us for pricing\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id.split('_')[0] != 'enterprise'\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let pL of planFeatures\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let cycle of pL.cycles\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.plan == plan.id.split('_')[0] && cycle.coupon_cycle == plan.id.split('_')[1]\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!cycle.coupon_active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\" *ngIf=\"plan.id.split('_')[1] != 'm'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} <span *ngIf=\"plan.id.split('_')[0] == 'essentials'\">{{essentials_m}}</span><span *ngIf=\"plan.id.split('_')[0] == 'business'\">{{business_m}}</span><span *ngIf=\"plan.id.split('_')[0] == 'enterprise'\">{{enterprise_m}}</span>/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 'm'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{plan.price}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 's'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil(plan.price/6)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 'y'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil(plan.price/12)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\" *ngIf=\"plan.id.split('_')[1] != 'm'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} <span *ngIf=\"plan.id.split('_')[0] == 'essentials'\">{{essentials_m}}</span><span *ngIf=\"plan.id.split('_')[0] == 'business'\">{{business_m}}</span><span *ngIf=\"plan.id.split('_')[0] == 'enterprise'\">{{enterprise_m}}</span>/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 'm'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{plan.price}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'PERCENTAGE'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{plan.price-(plan.price * cycle.coupon_value/100)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'FLAT'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{plan.price - cycle.coupon_value}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 's'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil(plan.price/6)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'PERCENTAGE'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil((plan.price-(plan.price * cycle.coupon_value/100))/6)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'FLAT'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil((plan.price - cycle.coupon_value)/6)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"actual-price\" *ngIf=\"plan.id.split('_')[1] == 'y'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"strike-off strike-price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil(plan.price/12)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'PERCENTAGE'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil((plan.price-(plan.price * cycle.coupon_value/100))/12)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"cycle.coupon_type == 'FLAT'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{plan.currency_code}} {{toCeil((plan.price - cycle.coupon_value)/12)}}/Month\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small *ngIf=\"cycle.coupon_active\" class=\"apply-coupon\">Use Coupon code : {{cycle.coupon_name}}</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id == 'starter'\">\n\t\t\t\t\t\t\t\t\t\t\t{{plan.price}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t<p>{{plan.description}}</p>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"runningPlanDetail.id != plan.id && userRole == 'ADMIN'\">\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id.split('_')[0] != 'enterprise'\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-white-red-outline btn-upgrade  hvr-sweep-to-right\" *ngIf=\"runningPlan == plan.id.split('_')[0]\" (click)=\"showEstimateModal(plan);callGA('CHANGECYCLE')\">Change Cycle</button>\n\n\t\t\t                                <button type=\"\" class=\"btn btn-white-red-outline btn-upgrade  btn-hover\" *ngIf=\"(plan.id != 'starter' && plan.id != 'freemium') && runningPlan != plan.id.split('_')[0]\" (click)=\"showEstimateModal(plan);callGA('CHANGEPLAN')\">Change Plan</button>\n\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-white-red-outline btn-upgrade  btn-hover\" *ngIf=\"!futurePlanSubscription && (plan.id == 'starter' || plan.id == 'freemium')\" (click)=\"showEstimateModal(plan);callGA('CHANGEPLAN')\">Change Plan</button>\n\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id.split('_')[0] == 'enterprise'\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-white-red-outline btn-upgrade btn-hover intercom_trigger\" (click)=\"contactUs()\">Contact Us</button>\n\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t                                <span type=\"\" *ngIf=\"futurePlanSubscription && plan.id == 'starter'\" class=\"plan-act\">\n\t\t                                    Plan activates on <span *ngIf=\"runningPlanSubscription.status == 'in_trial'\">{{runningPlanSubscription.trial_end}}.</span><span *ngIf=\"runningPlanSubscription.status == 'active'\">{{runningPlanSubscription.current_term_end}}.</span>\n\t\t                                </span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"runningPlanDetail.id == plan.id && userRole == 'ADMIN'\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-light-grey-outline btn-light-grey-hover\" *ngIf=\"payment_status != 'no_card' && !is_subcripion_cancelled\">Your Current Plan</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"\" class=\"btn btn-light-grey-outline btn-light-grey-hover reactivate\" *ngIf=\"is_subcripion_cancelled\" (click)=\"showEstimateModal(plan)\">Reactivate</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-light-grey-outline btn-light-grey-hover\" *ngIf=\"payment_status == 'no_card' && !is_subcripion_cancelled\" data-toggle=\"modal\" data-target=\"#cc-modal\" (click)=\"callGA('PAYMENTCLICK')\">Setup Payments</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-12 col-sm-12 col-xs-12 np float-down-arrow-mobile\" (click)=\"firstDownArrowClick()\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np billing-grey-bottom rs-hide\" [class.billing-white-bottom]=\"runningPlanDetail.id == plan.id\"  [class.billing-grey-bottom]=\"runningPlanDetail.id != plan.id\" id=\"{{plan.id}}\">\n\t\t\t\t\t\t\t\t\t<ul class=\"billing-list\">\n\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let pL of planFeatures\">\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"plan.id.split('_')[0] == pL.planLimit.id\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span *ngIf=\"pL.planLimit.users == -1\">Unlimited</span><span *ngIf=\"pL.planLimit.users != -1\">{{numberFormat(pL.planLimit.users)}}</span>&nbsp;Users\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span *ngIf=\"pL.planLimit.leads == -1\">Unlimited</span><span *ngIf=\"pL.planLimit.leads != -1\">{{numberFormat(pL.planLimit.leads)}}</span>&nbsp;Leads\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t&nbsp;<span *ngIf=\"pL.planLimit.visits == -1\">Unlimited</span><span *ngIf=\"pL.planLimit.visits != -1\">{{numberFormat(pL.planLimit.visits)}}</span>&nbsp;Visits\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngFor=\"let f of pL.features\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [class.unselected]=\"!f.active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"mat-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"list-name\">&nbsp;{{f.feature.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t                        <a href=\"javascript:void(0);\" (click)=\"expand(plan.id)\" [class.toggle-dots-white]=\"runningPlanDetail.id != plan.id\" [class.toggle-dots-grey]=\"runningPlanDetail.id == plan.id\">\n\t\t                            <span></span>\n\t\t                            <span></span>\n\t\t                            <span></span>\n\t\t                        </a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t<span class=\"billing-plans-help\">*All plans come with unlimited calculators and templates</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-xs-12 billingpricing-text hide\">\n\t\t\t\t\t<i class=\"material-icons\">not_interested</i>\n\t\t\t\t\t<h4>Not ready to start a paid plan? </h4>\n\t\t\t\t\t<p>Switch to\n\t\t\t\t\t\t<a *ngIf=\"userRole == 'ADMIN'\" (click)=\"showEstimateModal(viewplansList[0])\">{{FreePlanName}}</a>\n\t\t\t\t\t\t<a *ngIf=\"userRole != 'ADMIN'\" href=\"javascript:void(0);\">{{FreePlanName}}</a>\n\t\t\t\t\t\tplan for free and explore core Outgrow features, no credit card required. Your published pages will include an Outgrow branded footer which can be removed by upgrading to any paid plan.</p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\" *ngIf=\"userRole == 'ADMIN' && !futurePlanSubscription\">\n\t\t\t\t\t<!--<a id=\"cancelMembership\" (click)=\"showEstimateModal(viewplansList[0],true);callGA('CANCELMEM')\" class=\"cancel-member\">-->\n\t\t\t\t\t<a id=\"cancelMembership\" href=\"javascript:void(0);\" (click)=\"cancelMembeship();callGA('CANCELMEM')\" class=\"cancel-member\">\n\t\t\t\t\tcancel membership</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</div>\n\n<!-- Start: Upgrade Plan Modal -->\n<div id=\"upgrade-plan-popup\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content modal-bg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</button>\n\t\t\t\t<h5 class=\"modal-title\">Plan Change summary</h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body col-md-12 np\">\n\t\t\t\t<img src=\"assets/images/logoAnim.gif\" alt=\"loading...\" id=\"imgLoad\" *ngIf = \"loading\">\n\t\t\t\t<div class=\"sahil-material\" id=\"estimate\" *ngIf = \"!loading\">\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert\" id=\"error-UpgradePlan\" *ngIf=\"error\">{{errorMessage}}</div>\n\t\t\t\t\t<div class=\"col-md-12 np\">\n                        <!-- Start: subscription changes -->\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                            <div class=\"subscription-changes-panel\">\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                    <h6 class=\"title\">Subscription changes</h6>\n                                    <span class=\"sub-title\" *ngIf=\"upgradeToPlan.id != 'starter'\">\n                                    \tSubscription status will be changed from {{runningPlanDetail.name}} to {{upgradeToPlan.name}} immediately.\n                                    </span>\n                                    <span class=\"sub-title\" *ngIf=\"upgradeToPlan.id == 'starter'\">\n                                    \tSubscription status will be changed from {{runningPlanDetail.name}} to {{upgradeToPlan.name}} on <span *ngIf=\"runningPlanSubscription.status == 'in_trial'\">{{runningPlanSubscription.trial_end}}.</span><span *ngIf=\"runningPlanSubscription.status == 'active'\">{{runningPlanSubscription.current_term_end}}.</span>.\n                                    </span>\n                                </div>\n                                <div class=\"subs-detail\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                        <div class=\"col-md-4 col-sm-4 col-xs-12 np\">\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-label\">New Plan &nbsp;:&nbsp;</span>\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-filled\">{{upgradeToPlan.name}}</span>\n                                        </div>\n                                        <div class=\"col-md-8 col-sm-4 col-xs-12 np\" *ngIf=\"upgradeToPlan.id != 'starter'\">\n                                            <span class=\"col-md-3 col-sm-6 col-xs-6 np subs-label\">New Billing Period &nbsp;:&nbsp;</span>\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-filled\">\n                                            \t<span *ngIf=\"estimation.next_invoice_estimate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{estimation.next_invoice_estimate.line_items[0].date_from}}  to {{estimation.next_invoice_estimate.line_items[0].date_to}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"estimation.invoice_estimate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{estimation.invoice_estimate.line_items[0].date_from}} to {{estimation.invoice_estimate.line_items[0].date_to}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                        <div class=\"col-md-4 col-sm-4 col-xs-12 np\">\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-label\">New Price &nbsp;:&nbsp;</span>\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-filled\">$ {{upgradeToPlan.price}}</span>\n                                        </div>\n                                        <div class=\"col-md-4 col-sm-4 col-xs-12 np\" *ngIf=\"upgradeToPlan.id != 'starter' || upgradeBillingCycle != ''\">\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-label\">Billing Cycle &nbsp;:&nbsp;</span>\n                                            <span class=\"col-md-6 col-sm-6 col-xs-6 np subs-filled\">{{upgradeBillingCycle}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- End: subscription changes-->\n\n\t\t\t\t\t\t<div id=\"coupon\" class=\"col-md-12 col-sm-12 col-xs-12 np check\" *ngIf=\"upgradeToPlan.id != 'starter'\">\n\t\t\t\t\t\t\t<form id=\"couponForm\" [formGroup]=\"couponForm\" (ngSubmit)=\"getUpgradeEstimate(upgradeToPlan)\" *ngIf=\"couponCode == ''\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12 np\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group input-group label-floating\" id=\"couponFormDiv\" [class.is-empty]=\"!couponForm.value.couponInput\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"couponInput\"> Enter coupon code here</label>\n\t\t\t\t\t\t\t\t\t\t\t<input [(ngModel)]=\"couponCodeModal\" class=\"form-control\" id=\"couponInput\" type=\"text\" name=\"couponInput\" formControlName=\"couponInput\">\n\t\t\t\t\t\t\t\t\t\t\t<span class = \"input-group-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-red-outline btn-hover\" type=\"submit\" id=\"btnCoupon\" [disabled]=\"!couponForm.valid\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tApply\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 np\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form><!--\n\t\t\t\t\t\t\t<span class=\"alert alert-success\" id=\"couponApplied\" *ngIf=\"couponCode != ''\">\n\t\t\t\t\t\t\t\t{{couponCode}} Applied\n\t\t\t\t\t\t\t\t<a class=\"icon-red\" (click)=\"getUpgradeEstimate(upgradeToPlan)\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons icon-red\">highlight_off</i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t<div id=\"coupon-applied\" class=\"col-md-12 col-sm-12 col-xs-12 np coupon-applied\" *ngIf=\"couponCode != ''\">\n\t                            <span class=\"title\">Coupon applied</span>\n\t                            <button class=\"btn btn-red-outline\" type=\"submit\" id=\"\">\n\t                            \t{{couponCode}}\n\t                            \t<i class=\"material-icons\" (click)=\"getUpgradeEstimate(upgradeToPlan)\">cancel</i>\n\t                            </button>\n\t                        </div>\n\t\t\t\t\t\t</div>\n                        <!-- Start: current-payment-details -->\n                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\" *ngIf=\"upgradeToPlan.id != 'starter'\">\n                            <div class=\"current-payment-details-panel\">\n                                <h6 class=\"title-bg\"><i class=\"material-icons\">description</i> &nbsp;Current Payment Details</h6>\n                                <div class=\"col-md-12 col-sm-12 col-xs-12 np current-payment-detail\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                        <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                            <span *ngIf=\"estimation.next_invoice_estimate\">\n                                                <span *ngIf=\"upgradeToPlan.price != estimation.next_invoice_estimate.line_items[0].unit_amount\">Prorated charges</span>\n                                                {{upgradeToPlan.name}}\n                                                ({{upgradeToPlan.currency_code}}\n                                                {{estimation.next_invoice_estimate.line_items[0].unit_amount}}\n                                            </span>\n                                            <span *ngIf=\"estimation.invoice_estimate\">\n                                                <span *ngIf=\"upgradeToPlan.price != estimation.invoice_estimate.line_items[0].unit_amount\">\n                                                Prorated charges</span>\n                                                {{upgradeToPlan.name}}\n                                                ({{upgradeToPlan.currency_code}}\n                                                {{estimation.invoice_estimate.line_items[0].unit_amount}}\n                                            </span>\n                                            / {{upgradeToPlan.period}} {{upgradeToPlan.period_unit}})\n                                        </span>\n                                        <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\n                                        <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                            {{upgradeToPlan.currency_code}}\n                                            <span *ngIf=\"estimation.next_invoice_estimate\">\n                                                {{estimation.next_invoice_estimate.line_items[0].unit_amount}}\n                                            </span>\n                                            <span *ngIf=\"estimation.invoice_estimate\">\n                                                {{estimation.invoice_estimate.line_items[0].unit_amount}}\n                                            </span>\n                                        </span>\n                                    </div>\n                                    <span *ngIf=\"estimation.next_invoice_estimate\">\n                                        <span *ngIf=\"estimation.next_invoice_estimate.line_items[0].discount_amount != 0\">\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                                <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                                    subtotal\n                                                </span>\n                                                <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\n                                                <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                                    {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.sub_total}}\n                                                </span>\n                                            </div>\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n\t                                                {{estimation.next_invoice_estimate.discounts[0].description}}\n\t                                            </span>\n\t                                            <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np minus\">-</span>\n\t                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n\t                                                {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.discounts[0].amount}}\n\t                                            </span>\n\t                                        </div>\n                                        </span>\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                                Credit Applied\n                                            </span>\n                                            <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np minus\">-</span>\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                                {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.credits_applied}}\n                                            </span>\n                                        </div>\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                                Amount Due\n                                                <!-- &nbsp;&nbsp;:&nbsp;&nbsp; -->\n                                            </span>\n                                            <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                                {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.amount_due}}\n                                            </span>\n                                        </div>\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                                <span class=\"font_semibold\">Total Payment</span>\n                                            </span>\n                                            <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                                <span class=\"font_semibold\">                {{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.total}}\n                                                </span>\n                                            </span>\n                                        </div>\n                                    </span>\n                                    <span *ngIf=\"estimation.invoice_estimate\">\n                                        <span *ngIf=\"estimation.invoice_estimate.line_items[0].discount_amount != 0\">\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                                <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                                    subtotal\n                                                </span>\n                                                <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\n                                                <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                                    {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.sub_total}}\n                                                </span>\n                                            </div>\n                                            <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n\t                                                {{estimation.invoice_estimate.discounts[0].description}}\n\t                                            </span>\n\t                                            <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np minus\">-</span>\n\t                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n\t                                                {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.discounts[0].amount}}\n\t                                            </span>\n\t                                        </div>\n                                        </span>\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                                Credit Applied\n                                            </span>\n                                            <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np minus\">-</span>\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                                {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.credits_applied}}\n                                            </span>\n                                        </div>\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                                Amount Due\n                                                <!-- &nbsp;&nbsp;:&nbsp;&nbsp; -->\n                                            </span>\n                                            <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                                {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.amount_due}}\n                                            </span>\n                                        </div>\n                                        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n                                            <span class=\"upgrade-plan-left col-md-8 col-sm-8 col-xs-8 np\">\n                                                <span class=\"font_semibold\">Total Payment</span>\n                                            </span>\n                                            <!-- <span class=\"upgrade-plan-right col-md-1 col-sm-1 col-xs-1 np\">&nbsp;</span> -->\n                                            <span class=\"upgrade-plan-right col-md-3 col-sm-3 col-xs-3 np\">\n                                                <span class=\"font_semibold\">                {{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.total}}\n                                                </span>\n                                            </span>\n                                        </div>\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- End: current-payment-details -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer col-md-12 np\" *ngIf = \"!loading\">\n\t\t\t\t<div class=\"col-md-9 np\">\n\t\t\t\t\t<div class=\"footer-text\">\n\t\t\t\t\t\t<p *ngIf=\"upgradeToPlan.id == 'starter'\">\n\t\t\t\t\t\t\t* Plan will be automatically activated on\n\t\t\t\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'in_trial'\">\n\t\t\t\t\t\t\t\t{{runningPlanSubscription.trial_end}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span *ngIf=\"runningPlanSubscription.status == 'active'\">\n\t\t\t\t\t\t\t\t{{runningPlanSubscription.current_term_end}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<span *ngIf=\"estimation.credit_note_estimates.length && runningPlanSubscription.status != 'in_trial'\">\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tA Paid invoice # {{estimation.credit_note_estimates[0].reference_invoice_id}} is present for the current billing cycle ({{estimation.credit_note_estimates[0].line_items[0].date_from}} - {{estimation.credit_note_estimates[0].line_items[0].date_to}}).\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p style=\"margin-bottom: 0px;\">\n\t\t\t\t\t\t\t\tProrated Refundable Credits ({{estimation.credit_note_estimates[0].currency_code}} {{estimation.credit_note_estimates[0].line_items[0].amount}}) will be created for the unused period of {{estimation.credit_note_estimates[0].line_items[0].date_from}} - {{estimation.credit_note_estimates[0].line_items[0].date_to}}\n\t\t\t\t\t\t\t\t<span *ngIf=\"upgradeToPlan.price > runningPlanDetail.price\">\n\t\t\t\t\t\t\t\t\tand applied on the immediate invoice\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"upgradeToPlan.price < runningPlanDetail.price\">\n\t\t\t\t\t\t\t\t\t, out of which\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"estimation.invoice_estimate\">\n\t\t\t\t\t\t\t\t\t\t{{estimation.invoice_estimate.currency_code}} {{estimation.invoice_estimate.total}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"estimation.next_invoice_estimate\">\n\t\t\t\t\t\t\t\t\t\t{{estimation.next_invoice_estimate.currency_code}} {{estimation.next_invoice_estimate.total}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\twill be applied on the immediate invoice\n\t\t\t\t\t\t\t\t</span>.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 np\">\n\t\t\t\t\t<button type=\"\" (click)=\"makePayment();callGA('MAKEPAYMENT')\" class=\"btn btn-red-outline btn-hover btnMakePayment\" [class.btn-margin]=\"!estimation.credit_note_estimates.length\" *ngIf=\"isDowagrade\">Change Plan</button>\n\t\t\t\t\t<button type=\"\" (click)=\"makePayment();callGA('MAKEPAYMENT')\" class=\"btn btn-red-outline btn-hover btnMakePayment\" [class.btn-margin]=\"!estimation.credit_note_estimates.length\" *ngIf=\"!isDowagrade && !is_subcripion_cancelled\">Make Payment</button>\n\t\t\t\t\t<button type=\"\" (click)=\"reActivate();callGA('MAKEPAYMENT')\" class=\"btn btn-red-outline btn-hover btnMakePayment\" [class.btn-margin]=\"!estimation.credit_note_estimates.length\" *ngIf=\"!isDowagrade && is_subcripion_cancelled\">Make Payment</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- End:Upgrde Plan Modal -->\n\n<div class=\"float-changes-updated hide\" id=\"changeSubscriptionFloat\">\n\t<div class=\"col-md-12 np\">\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n\t\t<span id=\"changeSubscriptionMessage\"></span>\n\t</div>\n</div>\n"

/***/ },

/***/ 1088:
/***/ function(module, exports) {

module.exports = "<!-- Start: noti-settings (3) -->\n<div class=\"tab-pane hide\" id=\"noti-settings\">\n\t<header id=\"userProfile-header\" class=\"\">\n        <nav class=\"navbar navbar-default navbar-fixed-top white-logo\">\n          <div class=\"container-fluid nav-padding\">\n              <div class=\"col-xs-2 np\">\n                  <a href=\"javascript:void(0);\">\n                      <span class=\"mat-icon\"><i class=\"material-icons\">arrow_back</i></span>\n                  </a>\n              </div>\n              <div class=\"navbar-header col-xs-8 np\">\n                  <!-- <a href=\"#\" class=\"navbar-brand\">\n                      <img src=\"assets/images/headerLogo-white.png\" class=\"\" />\n                  </a> -->\n                  <h4 class=\"col-xs-12 np ellipsis title\">Notification Settings</h4>\n              </div>\n              <div class=\"mobile-menu col-xs-2 np\">\n                  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <i class=\"material-icons\">menu</i>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                      <div class=\"user-name user-outr\">\n                          <li>\n                              <a href=\"javascript:void(0);\"><img src=\"assets/images/user1.png\"> </a>\n                              <span>Pratham</span>\n                          </li>\n                          <hr class=\"name-dropdown-border\">\n                      </div>\n                      <div class=\"name-list\">\n                          <li>\n                              <a href=\"#\">\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">home</i></span>\n                                  <span class=\"name-list-title\">Dashboard</span>\n                              </a>\n                          </li>\n                          <li>\n                              <a href=\"#\">\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">equalizer</i></span>\n                                  <span class=\"name-list-title\">Analytics</span>\n                              </a>\n                          </li>\n                          <li>\n                              <a href=\"#\">\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">lightbulb_outline</i></span>\n                                  <span class=\"name-list-title\">How Do I</span>\n                              </a>\n                          </li>\n                          <hr class=\"name-dropdown-border\">\n                      </div>\n                      <div class=\"company-list\">\n                          <li class=\"active\">\n                              <a href=\"#\">\n                                  <span class=\"company-selected\"><i class=\"material-icons\">done</i></span>\n                                  <span class=\"company-list-title\">Venture Pact</span>\n                              </a>\n                          </li>\n                          <li>\n                              <a href=\"#\">\n                                  <span class=\"company-list-title\">Teckraft Infosolutions</span>\n                                  <!-- <span class=\"company-selected\"><i class=\"material-icons\">done</i></span> -->\n                              </a>\n                          </li>\n                          <li>\n                              <a href=\"#\">\n                                  <span class=\"company-list-title\">Zycus Infotech</span>\n                                  <!-- <span class=\"company-selected\"><i class=\"material-icons\">done</i></span> -->\n                              </a>\n                          </li>\n                      </div>\n                      <div class=\"name-list\">\n                          <li>\n                              <a href=\"#\">\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">settings</i></span>\n                                  <span class=\"name-list-title\">Settings</span>\n                              </a>\n                          </li>\n                          <li>\n                              <a href=\"#\">\n                                  <span class=\"name-list-icon\"><i class=\"material-icons\">power_settings_new</i></span>\n                                  <span class=\"name-list-title\">Logout</span>\n                              </a>\n                          </li>\n                      </div>\n                  </ul>\n              </div>\n          </div>\n        </nav>\n    </header>\n\t<div class=\"col-md-2 col-sm-2 col-xs-12\">\n\t</div>\n\t<div class=\"col-md-8 col-sm-8 col-xs-12 np\">\n\t\t4\n\t</div>\t\n\t<div class=\"col-md-2 col-sm-2 col-xs-12 np\">\n\t</div>\n</div>\n<!-- End: noti-settings (3) -->\n"

/***/ },

/***/ 1089:
/***/ function(module, exports) {

module.exports = "<sd-toolbar></sd-toolbar>\n<section class=\"wrapper\">\n\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t<og-sideNavbar *ngIf=\"sideNavbar == 'settings' \"></og-sideNavbar>\n\t\t<div class=\"wrapper-content\" id=\"lgScrWrapperContent\">\n\t\t\t<div class=\"wrapper-content-inner\">\n\t\t\t\t<div class=\"tab-content tabs-wrapper\">\n\t\t\t\t\t<!--<og-team-setting\n\t\t\t\t\t\t(myCompaniesListUpdated) = \"CompaniesList = $event\" [myCompanies] = \"CompaniesList\">\n\t\t\t\t\t</og-team-setting>-->\n\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t<!--<og-membership></og-membership>-->\n\t\t\t\t\t<!--<og-noti-setting class=\"hide\"></og-noti-setting>\n\t\t\t\t\t<og-account [myCompanies] = \"CompaniesList\" (myCompaniesListUpdated) = \"CompaniesList = $event\"></og-account>-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"wrapper-content\" id=\"smScrWrapperContent\">\n\t\t\t<div class=\"wrapper-content-inner\">\n\t\t\t\t<div class=\"tab-content tabs-wrapper\">\n\t\t\t\t\t<!--<og-team-setting\n\t\t\t\t\t\t(myCompaniesListUpdated) = \"CompaniesList = $event\" [myCompanies] = \"CompaniesList\">\n\t\t\t\t\t</og-team-setting>-->\n\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t<!--<og-membership></og-membership>-->\n\t\t\t\t\t<!--<og-noti-setting class=\"hide\"></og-noti-setting>\n\t\t\t\t\t<og-account [myCompanies] = \"CompaniesList\" (myCompaniesListUpdated) = \"CompaniesList = $event\"></og-account>-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ },

/***/ 1090:
/***/ function(module, exports) {

module.exports = "<!-- Start: team-settings (1) -->\n<div class=\"tab-pane\" id=\"team-settings\">\n\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t<div class=\"col-md-2 col-sm-1 col-xs-2 np\"></div>\n\t\t<!-- Nav tabs -->\n        <div class=\"col-md-3 col-sm-3 col-xs-12 np team-settings-inner-tabs hide\">\n          \t<ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n              \t<li role=\"presentation\" class=\"active\">\n              \t\t<a href=\"#active-users\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Active Users <i class=\"material-icons\">keyboard_arrow_right</i></a>\n              \t</li>\n              \t<li role=\"presentation\">\n              \t\t<a href=\"#invited-users\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Invited Users <i class=\"material-icons\">keyboard_arrow_right</i></a>\n              \t</li>\n              \t<li role=\"presentation\" *ngIf=\"isAdmin\" class=\"hide\">\n                  \t<a href=\"#access-requests\" aria-controls=\"\" role=\"tab\" data-toggle=\"tab\">Access Requests <i class=\"material-icons\">keyboard_arrow_right</i></a>\n              \t</li>\n  \t\t\t</ul>\n        </div>\n\t\t<!-- Start: tabs sub content -->\n\t\t<div class=\"col-md-8 col-sm-10 col-xs-12 np\">\n\t        <div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t<!-- Start: team-settings-wrapper -->\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 team-settings-wrapper hide\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t<h5 class=\"\">{{currentCompany.name}}</h5>\n\t\t\t\t\t\t<!-- <span class=\"company-dropdown-title-active ellipsis\">{{currentCompany.sub_domain}}{{subdomainExtension}}</span> -->\n\t\t\t\t\t\t<div class=\"btn-group company-dropdown-wrapper\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t            \t\t\t<span class=\"company-dropdown-title-active ellipsis\">{{currentCompany.sub_domain}}{{subdomainExtension}}</span>\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right add-new-company\" data-toggle=\"modal\" data-target=\"#add-new-company\" (click)=\"callGA('ADDCOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">playlist_add</i>\n\t\t\t\t\t\t\t\t\t\t&nbsp;Add New Company\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right add-new-company\" data-toggle=\"modal\" data-target=\"#join-company\" (click)=\"callGA('JOINCOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">playlist_add</i>\n\t\t\t\t\t\t\t\t\t\t&nbsp;Join Company\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<div class=\"company-dropdown-main\">\n\t\t\t\t\t\t\t\t\t<div class=\"company-dropdown-list slimscroll\">\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let company of myCompaniesList\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"selectCompany(company)\" *ngIf=\"company.user_company.active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"company-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-block-inner\">{{company.name[0]}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"company-block-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-title ellipsis\">{{company.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-site ellipsis\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{company.sub_domain}}{{subdomainExtension}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"waitForApprove()\" *ngIf=\"!company.user_company.active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"company-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-block-inner\">{{company.name[0]}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"company-block-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-title ellipsis\">{{company.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-site ellipsis\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{company.sub_domain}}{{subdomainExtension}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"company-site ellipsis\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(Awaiting approval)\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tYou are one of the Primary Owners of this company. You can transfer ownership. You can also manage your team settings.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tDue to restrictions of your plan, you can only add upto 25 members in your team. <a href=\"javascript:void(0);\" class=\"upgrade-plan\" (click)=\"membDetails();callGA('UPGRADEPLAN')\">Upgrade your plan</a> to remove the restriction.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End: team-settings-wrapper -->\n\t\t\t\t<!-- Start: Nav tabs -->\n\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t<ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n\t\t\t\t\t\t<li role=\"presentation\" class=\"active\" id=\"actuser\">\n\t\t\t\t\t\t\t<a href=\"#active-users\" class=\"hvr-sweep-to-right\" aria-controls=\"myProfile\" role=\"tab\" data-toggle=\"tab\">Active Users</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li role=\"presentation\" id=\"invuser\">\n\t\t\t\t\t\t\t<a href=\"#invited-users\" class=\"hvr-sweep-to-right\" aria-controls=\"companies\" role=\"tab\" data-toggle=\"tab\">Invited Users</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li role=\"presentation\" id=\"accreq\" *ngIf=\"isAdmin\" class=\"hide\">\n\t\t\t\t\t\t\t<a href=\"#access-requests\" class=\"hvr-sweep-to-right\" aria-controls=\"changePassword\" role=\"tab\" data-toggle=\"tab\">Access Requests</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- End: Nav tabs -->\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" *ngIf=\"loading\"><i class=\"material-icons loader-plan\">autorenew</i></div>\n\t\t\t<div class=\"tab-content tab-sub-content\" *ngIf=\"!loading\">\n\t\t\t\t<!-- Start: tab active-users -->\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane active-users active\" id=\"active-users\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t<!-- Start: Filter section -->\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"btn-group filter-dropdown-wrapper filter-dd-minh\">\n\t\t\t\t\t\t\t\t<span class=\"filter-title\">Filter:</span>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t&nbsp;{{selectedFilter}}\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">filter_list</i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"selectFilter('All Users')\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-icon\"><i class=\"material-icons\">sort</i></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-title\">All Users</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"selectFilter('Admin')\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-title\">Admin</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"selectFilter('Manager')\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-icon\"><i class=\"material-icons\">account_circle</i></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"filter-list-title\">Manager</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End: Filter section -->\n\t\t\t\t\t\t<!-- Start: active users cards section -->\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t\t<span *ngFor=\"let user of currentCompanyUsers\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card\" *ngIf=\"user.user_company.active && selectedFilter == 'All Users'\">\n\t\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{user.name[0]}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"user.username == logedInUserName\">(You)</span>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"designation ellipsis\">{{user.user_company.role}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">\n\t\t\t\t\t\t\t\t\t\t\t\tJoined On: {{user.createdAt.split('T')[0]}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"isAdmin && user.username == logedInUserName && adminCount\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(user);callGA('MAKEMANAGER')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"isAdmin && user.username != logedInUserName\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"deleteUser(user);callGA('DELETEUSER')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelete User\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li *ngIf=\"user.username == logedInUserName && adminCount\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<li  *ngIf=\"user.user_company.role == 'ADMIN'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(user);callGA('MAKEMANAGER')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <li *ngIf=\"user.username == logedInUserName && user.user_company.role == 'ADMIN' && adminCount\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(user);callGA('MAKEMANAGER')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'MANAGER'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeAdmin(user);callGA('MAKEADMIN')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Admin</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"!isAdmin && user.username == logedInUserName\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card\" *ngIf=\"user.user_company.active && selectedFilter == 'Admin' && user.user_company.role == 'ADMIN'\">\n\t\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{user.name[0]}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"user.username == logedInUserName\">(You)</span>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"designation ellipsis\">{{user.user_company.role}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">\n\t\t\t\t\t\t\t\t\t\t\t\tJoined On: {{user.createdAt.split('T')[0]}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"isAdmin\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.username != logedInUserName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"deleteUser(user);callGA('DELETEUSER')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelete User\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.username == logedInUserName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'ADMIN'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(currentCompany);callGA('MAKEMANAGER')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'MANAGER'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeAdmin(user);callGA('MAKEADMIN')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Admin</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"!isAdmin && user.username == logedInUserName\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card\" *ngIf=\"user.user_company.active && selectedFilter == 'Manager' && user.user_company.role == 'MANAGER'\">\n\t\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{user.name[0]}}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"user.username == logedInUserName\">(You)</span>\n\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\n\t\t\t\t\t\t\t\t\t\t\t<h6 class=\"designation ellipsis\">{{user.user_company.role}}</h6>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">\n\t\t\t\t\t\t\t\t\t\t\t\tJoined On: {{user.createdAt.split('T')[0]}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"isAdmin\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.username != logedInUserName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"deleteUser(user);callGA('DELETEUSER')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelete User\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.username == logedInUserName\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'ADMIN'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeManager(currentCompany);callGA('MAKEMANAGER')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Manager</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngIf=\"user.user_company.role == 'MANAGER'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"makeAdmin(user);callGA('MAKEADMIN')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">star</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">Make Admin</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group active-users-dropdown-wrapper\" *ngIf=\"!isAdmin && user.username == logedInUserName\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">keyboard_arrow_down</i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"hvr-sweep-to-right\" (click)=\"leaveCompany(currentCompany);callGA('LEAVECOMPANY')\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-icon\"><i class=\"material-icons\">delete</i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"active-users-dd-list-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeave Company\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card add-new-user\" *ngIf=\"isAdmin\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#add-new-user\" (click)=\"callGA('ADDUSERCLICK')\">\n\t\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"add-new-user\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>+</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"name\">Add New User</h5>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- End: active users cards section -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- End: tab active-users -->\n\t\t\t\t<!-- Start: tab invited-users -->\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane invited-users\" id=\"invited-users\">\n\t\t\t\t\t<!-- Start: invited users cards section -->\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t<span *ngFor=\"let user of currentCompanyUsers\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-4 col-xs-12 invited-users-card\" *ngIf=\"!user.user_company.active && user.user_company.status == 'INVITED'\">\n\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\n\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{user.name[0]}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}</h4>\n\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"designation ellipsis\">{{user.user_company.role}}</h6>\n\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">Invited On: {{user.user_company.invite.requested_at.split('T')[0]}}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 active-users-card add-new-user\" *ngIf=\"isAdmin\" (click)=\"callGA('ADDUSERCLICK')\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" data-toggle=\"modal\" data-target=\"#add-new-user\">\n\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\n\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"add-new-user\">\n\t\t\t\t\t\t\t\t\t\t\t<span>+</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"name\">Add New User</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- End: invited users cards section -->\n\t\t\t\t</div>\n\t\t\t\t<!-- End: tab invited-users -->\n\t\t\t\t<!-- Start: tab access-requests -->\n\t\t\t\t<div role=\"tabpanel\" class=\"tab-pane access-requests hide\" id=\"access-requests\">\n\t\t\t\t\t<!-- Start: access-requests cards section -->\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t<span *ngFor=\"let user of currentCompanyUsers\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6 col-xs-12 access-requests-card\" *ngIf=\"!user.user_company.active && user.user_company.status == 'REQUESTED' && hasRequest\">\n\t\t\t\t\t\t\t\t<div class=\"active-users-box\">\n\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{user.name[0]}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{user.name}}</h4>\n\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{user.emails[0].email}}</span>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"icon-block\">\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"display:inline-block;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ar-onoffswitch\" (click)=\"accessRequestPopup(user)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"ar-onoffswitch\" class=\"ar-onoffswitch-checkbox user{{user.id}}\" id=\"user{{user.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"ar-onoffswitch-label\" attr.for=\"user{{user.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ar-onoffswitch-inner\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"ar-onoffswitch-switch\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"icon-block\">\n\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"accessRequestPopup(user)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon-green hide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check_circle</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"leave\">Approve</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"display:inline-block;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"onoffswitch\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"onoffswitch\" class=\"onoffswitch-checkbox user{{user.id}}\" id=\"user{{user.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"onoffswitch-label\" attr.for=\"user{{user.id}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-inner\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"onoffswitch-switch\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<span class=\"joined-date ellipsis\">Requested:\n\t\t\t\t\t\t\t\t\t\t\t{{user.user_company.invite.requested_at.split('T')[0]}}\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- Start: if no request -->\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np text-center\" *ngIf=\"!hasRequest\">\n\t\t\t\t\t\t<span class=\"no-req-icon\"><i class=\"material-icons\">fingerprint</i></span>\n\t\t\t\t\t\t<h4 class=\"no-req-text\">No requests</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- End: if no request -->\n\t\t\t\t\t<!-- End: access-requests cards section -->\n\t\t\t\t</div>\n\t\t\t\t<!-- End: tab access-requests -->\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- End: tabs sub content -->\n\t\t<div class=\"col-md-2 col-sm-1 col-xs-2 np\"></div>\n\t</div>\n</div>\n<!-- End: team-settings (1)-->\n<div id=\"add-new-user\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content modal-bg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close btn-close\"  (click)=\"closeAddUser()\">\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</button>\n\t\t\t\t<h5 class=\"modal-title\">Add New User</h5>\n\t\t\t</div>\n\t\t\t<form [formGroup]=\"inviteUserForm\" (ngSubmit)=\"inviteUser()\">\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<div class=\"alert alert-danger custom-alert hide\" id=\"success-addUser\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t{{Message}}\n\t\t\t\t\t\t\t<span (click)=\"upgradeNavigation()\" id=\"upgradeLink\"></span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"sahil-material\">\n\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputName\"> Name</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"inputName\" type=\"text\"  formControlName=\"userName\" name=\"userName\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"inviteUserForm.controls.userName.touched && !inviteUserForm.controls.userName.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userName.errors.required\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t                            <i class=\"material-icons\">report_problem</i>\n\t\t                        </span>\n\t\t\t\t\t\t\t\tName is required.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userName.errors.minlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tMin 3 character is required.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userName.errors.pattern\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tInvalid Name\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputEmail\"> Email Address</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"inputEmail\" type=\"email\" formControlName=\"userEmail\" name=\"userEmail\" (focus)=\"hideError()\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"inviteUserForm.controls.userEmail.touched && !inviteUserForm.controls.userEmail.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userEmail.errors.required\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t                            <i class=\"material-icons\">report_problem</i>\n\t\t                        </span>\n\t\t\t\t\t\t\t\tEmail is required.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"inviteUserForm.controls.userEmail.errors.checkmail\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t                            <i class=\"material-icons\">report_problem</i>\n\t\t                        </span>\n\t\t\t\t\t\t\t\tInvalid Email.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group form-group-radio\">\n\t\t\t\t\t\t\t<label class=\"radio-inline\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"ADMIN\" id=\"radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\n\t\t\t\t\t\t\t\t<label for=\"radioAdmin\"> </label> Admin {{userRole}}\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"radio-inline\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"MANAGER\" id=\"radioManager\" formControlName=\"userRole\" name=\"userRole\">\n\t\t\t\t\t\t\t\t<label for=\"radioManager\"> </label> Manager\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"submit\" [disabled]=\"!inviteUserForm.valid\" class=\"btn btn-red-outline btn-add-user btn-hover\" id=\"btnInvite\">Add New User</button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\"add-new-company\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<!-- Modal content-->\n\t\t<div class=\"modal-content modal-bg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</button>\n\t\t\t\t<h5 class=\"modal-title\">Create a New Company</h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"sahil-material\">\n\t\t\t\t\t<form [formGroup]=\"createCompanyForm\" (ngSubmit)=\"createCompany()\">\n\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"companyname\"> New Company Name</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"companyname\" type=\"text\" name=\"companyname\" formControlName=\"companyname\" (focus)=\"hideError()\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"createCompanyForm.controls.companyname.touched && !createCompanyForm.controls.companyname.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.companyname.errors.required\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tCompany Name is required.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.companyname.errors.minlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tMin 3 character is required.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"domain\"> Company Url</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" id=\"domain\" type=\"text\" name=\"domain\" formControlName=\"domain\" (focus)=\"hideError()\">\n\t\t\t\t\t\t\t<label class=\"in-active\">{{subdomainExtension}}</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"createCompanyForm.controls.domain.touched && !createCompanyForm.controls.domain.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.domain.errors.required\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tCompany Name is required.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.domain.errors.minlength\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tMin 3 character is required.</p>\n\t\t\t\t\t\t\t<p *ngIf=\"createCompanyForm.controls.domain.errors.pattern\">\n\t\t\t\t\t\t\t\t<span class=\"mat-icon\">\n\t\t\t\t\t\t\t\t  \t<i class=\"material-icons\">report_problem</i>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\tInvalid Url\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"submit\" id=\"btnCreateCompany\" class=\"btn btn-red-outline btn-add-user btn-hover\" [disabled]=\"!createCompanyForm.valid\">Add New Company</button>\n\t\t\t\t\t</form>\n\t\t\t\t\t<div class=\"alert alert-danger hide\" id=\"success-addCompany\">\n\t\t\t\t\t\t{{Message}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<!-- <button type=\"\" class=\"btn btn-red-outline btn-hover\">Join Company</button> -->\n\t\t\t\tYour company will be created immediately. As soon as the company is created, you can start adding users to collaborate.\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Start: Modal Join Company -->\n<div id=\"join-companyX\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content modal-bg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</button>\n\t\t\t\t<h5 class=\"modal-title\">Join Company</h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body col-md-12 np slimscroll\">\n\t\t\t\t<div class=\"sahil-material\">\n\t\t\t\t\t<div class=\"col-md-12 np\">\n\t\t\t\t\t\t<div class=\"alert alert-danger hide\" id=\"success-joinCompany\" *ngIf=\"joinCompanyForm.controls.searchCompany.valid\">\n\t\t\t\t\t\t\t{{Message}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<form [formGroup]=\"joinCompanyForm\" (ngSubmit)=\"searchCompany()\">\n\t\t\t\t\t\t\t<div class=\"form-group label-floating\">\n\t\t\t\t\t\t\t\t<label class=\"control-label\" for=\"searchCompany\"> Search</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"searchCompany\" type=\"text\" name=\"searchCompany\" formControlName=\"searchCompany\" (focus)=\"hideError()\">\n\t\t\t\t\t\t\t\t<span class=\"icon-search\" (click)=\"searchCompany()\"><i class=\"material-icons\">search</i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"joinCompanyForm.controls.searchCompany.touched && !joinCompanyForm.controls.searchCompany.valid\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t\t<p *ngIf=\"joinCompanyForm.controls.searchCompany.errors.required\">Company Name is required to search.</p>\n\t\t\t\t\t\t\t\t<p *ngIf=\"joinCompanyForm.controls.searchCompany.errors.minlength\">Min 3 character is required.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np companies-card-wrapper\">\n\t\t\t\t\t\t<span *ngIf=\"searchedCompanyList.length > 0\">\n\t\t\t\t\t\t\t<span *ngFor=\"let company of searchedCompanyList\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-sm-4 col-xs-12 np companies-card\" (click)=\"joinCompany(company)\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"companies-box\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"companies-box-hover\" id='joined{{company.id}}'>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">check_circle</i> &nbsp;<span id='join{{company.id}}'>Join</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span *ngIf=\"joinedCompanyList.length > 0\">\n\t\t\t\t\t\t\t<span *ngFor=\"let company of joinedCompanyList\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 col-sm-4 col-xs-12 np companies-card\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"companies-box\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-block-blue\">{{company.name[0]}}</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"name ellipsis\">{{company.name}}</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"companies-box-request\">\n\t\t\t\t\t\t\t\t\t\t\t\tRequest Sent\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</span>\n                        <span *ngIf=\"invitedCompanyList.length > 0\">\n                            <span *ngFor=\"let company of invitedCompanyList\">\n                                <div class=\"col-md-6 col-sm-4 col-xs-12 np companies-card\">\n                                    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                        <div class=\"companies-box\">\n                                            <div class=\"img-block-wrapper\">\n                                                <div class=\"img-block-blue\">{{company.name[0]}}</div>\n                                            </div>\n                                            <div class=\"text-block\">\n                                                <h4 class=\"name ellipsis\">{{company.name}}</h4>\n                                                <span class=\"site ellipsis\">{{company.sub_domain}}{{subdomainExtension}}</span>\n                                            </div>\n                                            <div class=\"companies-box-request\">\n                                                check email for your approval\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </span>\n                        </span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- End: companies cards section -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\tOnce the admin of the company accepts your request, you will be added to the company on Outgrow.\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- End: Modal Join Company -->\n<div id=\"leaveConfirmation\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content modal-bg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"close btn-help\">\n\t\t\t\t\t<i class=\"material-icons\">help_outline</i>\n\t\t\t\t</button>\n\t\t\t\t<h5 class=\"modal-title\">Confirmation</h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body col-md-12 np og-message\">\n                <p>Are you sure you wish to leave this company?</p>\n                <p>This is the only company you belong to. If you leave this company, your account will be deleted.</p>\n\t\t\t\t<button class=\"btn btn-red-outline btn-hover\" id=\"confirmNo\" data-dismiss=\"modal\">\n\t\t\t\t\tNo\n\t\t\t\t</button>\n\t\t\t\t<button class=\"btn btn-red-outline btn-hover\" id=\"confirmYes\" (click)=\"deleteMe()\">\n\t\t\t\t\tYes\n\t\t\t\t</button>\n\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer col-md-12 np hide\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Start: Modal Accept Access Request -->\n<div id=\"accept-access-req\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<!-- Modal content-->\n\t\t<div class=\"modal-content modal-bg\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close btn-close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"close btn-help\">\n\t\t\t\t\t<i class=\"material-icons\">help_outline</i>\n\t\t\t\t</button>\n\t\t\t\t<h5 class=\"modal-title\">Accept Access Request</h5>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t<div class=\"sahil-material\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12 np\">\n\t\t\t\t\t\t\t\t<label class=\"control-label col-md-3 np label-filled\" for=\"\">Name</label>\n\t\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\n\t\t\t\t\t\t\t\t<span class=\"form-control col-md-8 np input-filled ellipsis\">{{accessRequestUserName}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 col-sm-6 col-xs-12 np\">\n\t\t\t\t\t\t\t\t<label class=\"control-label col-md-3 np label-filled\" for=\"\">Company</label>\n\t\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\n\t\t\t\t\t\t\t\t<span class=\"form-control ellipsis col-md-8 np input-filled\">{{currentCompany.name}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12 np email-access\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t\t\t\t\t<label class=\"control-label col-md-3 np label-filled\" for=\"\">Email</label>\n\t\t\t\t\t\t\t\t<span class=\"coloumn col-md-1 np\">:</span>\n\t\t\t\t\t\t\t\t<span class=\"form-control col-md-8 np input-filled\">{{accessRequestUserEmail}}</span>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer col-md-12 col-sm-12 col-xs-12 np\">\n\t\t\t\t<div class=\"col-md-5 col-sm-5 col-xs-5 np\"></div>\n\t\t\t\t<form [formGroup]=\"acceptRequestForm\" (ngSubmit)=\"acceptRequest()\">\n\t\t\t\t\t<div class=\"col-md-7 col-sm-7 col-xs-7 np\">\n\t\t\t\t\t\t<div class=\"form-group form-group-radio\">\n\t\t\t\t\t\t\t<label class=\"radio-inline\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"ADMIN\" id=\"aar-radioAdmin\" formControlName=\"userRole\" name=\"userRole\">\n\t\t\t\t\t\t\t\t<label for=\"aar-radioAdmin\"> </label> Admin\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<label class=\"radio-inline\">\n\t\t\t\t\t\t\t\t<input type=\"radio\" value=\"MANAGER\" id=\"aar-radioManager\" formControlName=\"userRole\" name=\"userRole\">\n\t\t\t\t\t\t\t\t<label for=\"aar-radioManager\"> </label> Manager\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<button type=\"submit\" id=\"btnAccetpRequest\" class=\"btn btn-red-outline btn-hover\" [disabled] = \"!acceptRequestForm.valid\">Approve Request</button>\n\t\t\t\t\t\t<div class=\"alert alert-danger hide\" id=\"success-acceptUser\">\n\t\t\t\t\t\t\t{{Message}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- End: Modal Accept Access Request -->\n<div class=\"float-changes-updated hide\">\n\t<div class=\"col-md-12 np\">\n\t\t<span class=\"icon-done\"><i class=\"material-icons\">done</i></span>\n\t\t<span id=\"floatMessage\">{{ Message }} </span>\n\t</div>\n</div>"

/***/ },

/***/ 1124:
/***/ function(module, exports) {

module.exports = "<header id=\"setting-header\" class=\"hide\">\n    <nav class=\"navbar navbar-default navbar-fixed-top white-logo\">\n      <div class=\"container-fluid nav-padding\">\n          <div class=\"col-xs-2 np\">\n              <a href=\"javascript:void(0);\" (click)=\"goBack()\">\n                  <span class=\"mat-icon\"><i class=\"material-icons\">arrow_back</i></span>\n              </a>\n          </div>\n          <div class=\"navbar-header col-xs-8 np\">\n              <!-- <a href=\"#\" class=\"navbar-brand\">\n                  <img src=\"assets/images/headerLogo-white.png\" class=\"\" />\n              </a> -->\n              <h4 class=\"col-xs-12 np ellipsis title\">{{sideNaveBarHeader}}</h4>\n          </div>\n      </div>\n    </nav>\n</header>\n<div class=\"left-sidebar col-md-3 col-sm-3 col-xs-3 np\" id=\"lgScrSideNavbar\">\n    <div id=\"\" class=\"tabbable tabs-left\">\n        <ul>\n            <li class=\"setting-nav active\" id=\"teamSet\" (click)=\"showTab('team-setting')\">\n                <a [routerLink]=\"['/settings']\" data-toggle=\"tab\">\n                    <span class=\"left-sidebar-icon\">\n                    <i class=\"material-icons\">bubble_chart</i>\n                  </span>\n                    <div class=\"left-sidebar-title\">\n                        <h6 class=\"\">Team Settings</h6>\n                        <span class=\"\">Invite new team members and manage user permissions</span>\n                    </div>\n                </a>\n            </li>\n            <li class=\"setting-nav\" id=\"membDet\" (click)=\"showTab('membership')\">\n                <a [routerLink]=\"['/settings/membership']\" data-toggle=\"tab\">\n                    <span class=\"left-sidebar-icon\">\n                    <i class=\"material-icons\">view_carousel</i>\n                  </span>\n                    <div class=\"left-sidebar-title\">\n                        <h6 class=\"\">Membership Details</h6>\n                        <span class=\"\">View your plan details and invoices</span>\n                    </div>\n                </a>\n            </li>\n            <li class=\"setting-nav\" id=\"apiKey\" (click)=\"showTab('api-key')\">\n                <a [routerLink]=\"['/settings/api-integration']\" data-toggle=\"tab\" >\n                    <span class=\"left-sidebar-icon\">\n                    <i class=\"material-icons\">developer_board</i>\n                  </span>\n                    <div class=\"left-sidebar-title\">\n                        <h6 class=\"\">API Key</h6>\n                        <span class=\"\">Copy or Regenerate your API Key used for Integration.</span>\n                    </div>\n                </a>\n            </li>\n            <li class=\"setting-nav\" id=\"accSet\" (click)=\"showTab('my-account')\">\n                <a [routerLink]=\"['/settings/my-account']\" data-toggle=\"tab\">\n                    <span class=\"left-sidebar-icon\">\n                    <i class=\"material-icons\">face</i>\n                  </span>\n                    <div class=\"left-sidebar-title\">\n                        <h6 class=\"\">My Account</h6>\n                        <span class=\"\">View and edit your account details</span>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n<div class=\"left-sidebar col-md-3 col-sm-3 col-xs-3 np mobile-left-sidebar\" id=\"smScrSideNavbar\">\n    <div id=\"\" class=\"tabbable tabs-left\">\n        <ul>\n            <li class=\"setting-nav active\" id=\"teamSet-m\" (click)=\"showTab('team-setting');addHide()\">\n                <a [routerLink]=\"['/settings']\" data-toggle=\"tab\">\n                    <span class=\"left-sidebar-icon\">\n                    <i class=\"material-icons\">bubble_chart</i>\n                  </span>\n                    <div class=\"left-sidebar-title\">\n                        <h6 class=\"\">Team Settings</h6>\n                        <span class=\"\">Invite new team members and manage user permissions</span>\n                    </div>\n                </a>\n            </li>\n            <li class=\"setting-nav\" id=\"membDet-m\" (click)=\"showTab('membership');addHide()\">\n                <a [routerLink]=\"['/settings/membership']\" data-toggle=\"tab\">\n                    <span class=\"left-sidebar-icon\">\n                    <i class=\"material-icons\">view_carousel</i>\n                  </span>\n                    <div class=\"left-sidebar-title\">\n                        <h6 class=\"\">Membership Details</h6>\n                        <span class=\"\">View your plan details and invoices</span>\n                    </div>\n                </a>\n            </li>\n            <li class=\"setting-nav\" id=\"apiKey-m\" (click)=\"showTab('api-key');addHide()\">\n                <a [routerLink]=\"['/settings/api-integration']\" data-toggle=\"tab\">\n                    <span class=\"left-sidebar-icon\">\n                    <i class=\"material-icons\">view_carousel</i>\n                  </span>\n                    <div class=\"left-sidebar-title\">\n                        <h6 class=\"\">API Key</h6>\n                        <span class=\"\">Copy or Regenerate your API Key used for Integration.</span>\n                    </div>\n                </a>\n            </li>\n            <li class=\"setting-nav\" id=\"accSet-m\" (click)=\"showTab('my-account');addHide()\">\n                <a [routerLink]=\"['/settings/my-account']\" data-toggle=\"tab\">\n                    <span class=\"left-sidebar-icon\">\n                    <i class=\"material-icons\">face</i>\n                  </span>\n                    <div class=\"left-sidebar-title\">\n                        <h6 class=\"\">My Account</h6>\n                        <span class=\"\">View and edit your account details</span>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n\n"

/***/ },

/***/ 867:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sideNavbar_index__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_index__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__membership_index__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teamSetting_index__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apiIntegration_index__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notification_index__ = __webpack_require__(959);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_component__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__templates_controls_controls_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__membership_payment_payment_component__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__membership_subscription_subscription_component__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__membership_invoice_invoice_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_userCompanies_usercompanies_component__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__account_changePassword_changepassword_component__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_basicDetails_basicdetails_component__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_company_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_user_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_logged_in_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_cookie_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_script_service__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_membership_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_subdomain_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_plan_service__ = __webpack_require__(422);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* RouterModule */].forChild(SETTINGS_ROUTES), __WEBPACK_IMPORTED_MODULE_11__templates_controls_controls_module__["a" /* ControlsModule */], __WEBPACK_IMPORTED_MODULE_12__components_toolbar_toolbar_module__["a" /* ToolbarModule */]],
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

/***/ 877:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_emails__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userCompany__ = __webpack_require__(423);
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

/***/ 883:
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

/***/ 915:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_invoice__ = __webpack_require__(943);
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
            template: __webpack_require__(1084),
            styles: [__webpack_require__(1034)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* MembershipService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */]) === 'function' && _c) || Object])
    ], InvoiceComponent);
    return InvoiceComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 916:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_plans__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_planFeatures__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_estimate__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_helper_service_number_format__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(12);
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
        this.isChangePlan = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.changeToPlan = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
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
            couponInput: [this.couponCodeModal, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* Validators */].minLength(5)])]
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
        //this.userRole = this._cookieService.readCookie('role');
        this.userRole = localStorage.getItem('role');
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
        if (subscription_status === 'cancelled') {
            this.is_subcripion_cancelled = true;
        }
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
            fbq('track', 'Purchase', { value: _this.kmqTotalAmount.toString(), currency: 'USD' });
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
            template: __webpack_require__(1087),
            styles: [__webpack_require__(1037)],
            inputs: ['payment_status', 'userRole'],
            outputs: ['isChangePlan', 'changeToPlan']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["e" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["e" /* MembershipService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["k" /* PlanService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["k" /* PlanService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["g" /* CookieService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["d" /* SubDomainService */]) === 'function' && _e) || Object])
    ], SubscriptionComponent);
    return SubscriptionComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 920:
/***/ function(module, exports) {

module.exports = "/*!\n * Hover.css (http://ianlunn.github.io/Hover/)\n * Version: 2.0.2\n * Author: Ian Lunn @IanLunn\n * Author URL: http://ianlunn.co.uk/\n * Github: https://github.com/IanLunn/Hover\n\n * Made available under a MIT License:\n * http://www.opensource.org/licenses/mit-license.php\n\n * Hover.css Copyright Ian Lunn 2014. Generated with Sass.\n */\n/* 2D TRANSITIONS */\n/* Grow */\n\n\n/* switch new css (sahil) */\n\n/* Switch */\n.access-requests-card .onoffswitch {\n    position: relative;\n    width: 85px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n\n.access-requests-card .onoffswitch-checkbox {\n    display: none;\n}\n\n.access-requests-card .onoffswitch-label {\n    display: block;\n    overflow: hidden;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.access-requests-card .onoffswitch-inner {\n    display: block;\n    width: 200%;\n    margin-left: -100%;\n    transition: margin 0.3s ease-in 0s;\n}\n\n.access-requests-card .onoffswitch-inner:before,\n.access-requests-card .onoffswitch-inner:after {\n    display: block;\n    float: left;\n    width: 50%;\n    height: 20px;\n    padding: 0;\n    line-height: 20px;\n    font-size: 13px;\n    color: white;\n    box-sizing: border-box;\n    font-weight: normal;\n}\n\n.access-requests-card .onoffswitch-inner:before {\n    content: \"Approve\";\n    padding-left: 9px;\n    background-color: #00c853;\n    color: #FFFFFF;\n    font-weight: normal;\n    text-align: left;\n    font-size: 12px;\n}\n\n.access-requests-card .onoffswitch-inner:after {\n    content: \"Approve\";\n    padding-right: 9px;\n    background-color: #EEEEEE;\n    color: #999999;\n    text-align: right;\n    font-size: 12px;\n}\n\n.access-requests-card .onoffswitch-switch {\n    display: block;\n    width: 14px;\n    height: 14px;\n    margin: 3px;\n    background: #FFFFFF;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 62px;\n    border-radius: 20px;\n    transition: all 0.3s ease-in 0s;\n}\n\n.access-requests-card .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n\n.access-requests-card .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n    right: 0px;\n}\n/* switch end */\n\n\n.hvr-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n/* Shrink */\n.hvr-shrink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-shrink:hover, .hvr-shrink:focus, .hvr-shrink:active {\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n}\n\n/* Pulse */\n@-webkit-keyframes hvr-pulse {\n  25% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  75% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n@keyframes hvr-pulse {\n  25% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n\n  75% {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n.hvr-pulse {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {\n  -webkit-animation-name: hvr-pulse;\n  animation-name: hvr-pulse;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n/* Pulse Grow */\n@-webkit-keyframes hvr-pulse-grow {\n  to {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n}\n\n@keyframes hvr-pulse-grow {\n  to {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n}\n\n.hvr-pulse-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {\n  -webkit-animation-name: hvr-pulse-grow;\n  animation-name: hvr-pulse-grow;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n/* Pulse Shrink */\n@-webkit-keyframes hvr-pulse-shrink {\n  to {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n@keyframes hvr-pulse-shrink {\n  to {\n    -webkit-transform: scale(0.9);\n    transform: scale(0.9);\n  }\n}\n\n.hvr-pulse-shrink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-pulse-shrink:hover, .hvr-pulse-shrink:focus, .hvr-pulse-shrink:active {\n  -webkit-animation-name: hvr-pulse-shrink;\n  animation-name: hvr-pulse-shrink;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n/* Push */\n@-webkit-keyframes hvr-push {\n  50% {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n@keyframes hvr-push {\n  50% {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n\n.hvr-push {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-push:hover, .hvr-push:focus, .hvr-push:active {\n  -webkit-animation-name: hvr-push;\n  animation-name: hvr-push;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Pop */\n@-webkit-keyframes hvr-pop {\n  50% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2);\n  }\n}\n\n@keyframes hvr-pop {\n  50% {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2);\n  }\n}\n\n.hvr-pop {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-pop:hover, .hvr-pop:focus, .hvr-pop:active {\n  -webkit-animation-name: hvr-pop;\n  animation-name: hvr-pop;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Bounce In */\n.hvr-bounce-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\n\n/* Bounce Out */\n.hvr-bounce-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-out:hover, .hvr-bounce-out:focus, .hvr-bounce-out:active {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\n\n/* Rotate */\n.hvr-rotate {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-rotate:hover, .hvr-rotate:focus, .hvr-rotate:active {\n  -webkit-transform: rotate(4deg);\n  transform: rotate(4deg);\n}\n\n/* Grow Rotate */\n.hvr-grow-rotate {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-grow-rotate:hover, .hvr-grow-rotate:focus, .hvr-grow-rotate:active {\n  -webkit-transform: scale(1.1) rotate(4deg);\n  transform: scale(1.1) rotate(4deg);\n}\n\n/* Float */\n.hvr-float {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-float:hover, .hvr-float:focus, .hvr-float:active {\n  -webkit-transform: translateY(-8px);\n  transform: translateY(-8px);\n}\n\n/* Sink */\n.hvr-sink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sink:hover, .hvr-sink:focus, .hvr-sink:active {\n  -webkit-transform: translateY(8px);\n  transform: translateY(8px);\n}\n\n/* Bob */\n@-webkit-keyframes hvr-bob {\n  0% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-4px);\n    transform: translateY(-4px);\n  }\n\n  100% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n}\n\n@keyframes hvr-bob {\n  0% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-4px);\n    transform: translateY(-4px);\n  }\n\n  100% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n}\n\n@-webkit-keyframes hvr-bob-float {\n  100% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n}\n\n@keyframes hvr-bob-float {\n  100% {\n    -webkit-transform: translateY(-8px);\n    transform: translateY(-8px);\n  }\n}\n\n.hvr-bob {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {\n  -webkit-animation-name: hvr-bob-float, hvr-bob;\n  animation-name: hvr-bob-float, hvr-bob;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n/* Hang */\n@-webkit-keyframes hvr-hang {\n  0% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n\n  50% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  100% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n}\n\n@keyframes hvr-hang {\n  0% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n\n  50% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  100% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n}\n\n@-webkit-keyframes hvr-hang-sink {\n  100% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n}\n\n@keyframes hvr-hang-sink {\n  100% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n}\n\n.hvr-hang {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-hang:hover, .hvr-hang:focus, .hvr-hang:active {\n  -webkit-animation-name: hvr-hang-sink, hvr-hang;\n  animation-name: hvr-hang-sink, hvr-hang;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n/* Skew */\n.hvr-skew {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-skew:hover, .hvr-skew:focus, .hvr-skew:active {\n  -webkit-transform: skew(-10deg);\n  transform: skew(-10deg);\n}\n\n/* Skew Forward */\n.hvr-skew-forward {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.hvr-skew-forward:hover, .hvr-skew-forward:focus, .hvr-skew-forward:active {\n  -webkit-transform: skew(-10deg);\n  transform: skew(-10deg);\n}\n\n/* Skew Backward */\n.hvr-skew-backward {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.hvr-skew-backward:hover, .hvr-skew-backward:focus, .hvr-skew-backward:active {\n  -webkit-transform: skew(10deg);\n  transform: skew(10deg);\n}\n\n/* Wobble Vertical */\n@-webkit-keyframes hvr-wobble-vertical {\n  16.65% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n\n  33.3% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes hvr-wobble-vertical {\n  16.65% {\n    -webkit-transform: translateY(8px);\n    transform: translateY(8px);\n  }\n\n  33.3% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.hvr-wobble-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {\n  -webkit-animation-name: hvr-wobble-vertical;\n  animation-name: hvr-wobble-vertical;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble Horizontal */\n@-webkit-keyframes hvr-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px);\n  }\n\n  33.3% {\n    -webkit-transform: translateX(-6px);\n    transform: translateX(-6px);\n  }\n\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes hvr-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(8px);\n    transform: translateX(8px);\n  }\n\n  33.3% {\n    -webkit-transform: translateX(-6px);\n    transform: translateX(-6px);\n  }\n\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.hvr-wobble-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active {\n  -webkit-animation-name: hvr-wobble-horizontal;\n  animation-name: hvr-wobble-horizontal;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble To Bottom Right */\n@-webkit-keyframes hvr-wobble-to-bottom-right {\n  16.65% {\n    -webkit-transform: translate(8px, 8px);\n    transform: translate(8px, 8px);\n  }\n\n  33.3% {\n    -webkit-transform: translate(-6px, -6px);\n    transform: translate(-6px, -6px);\n  }\n\n  49.95% {\n    -webkit-transform: translate(4px, 4px);\n    transform: translate(4px, 4px);\n  }\n\n  66.6% {\n    -webkit-transform: translate(-2px, -2px);\n    transform: translate(-2px, -2px);\n  }\n\n  83.25% {\n    -webkit-transform: translate(1px, 1px);\n    transform: translate(1px, 1px);\n  }\n\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes hvr-wobble-to-bottom-right {\n  16.65% {\n    -webkit-transform: translate(8px, 8px);\n    transform: translate(8px, 8px);\n  }\n\n  33.3% {\n    -webkit-transform: translate(-6px, -6px);\n    transform: translate(-6px, -6px);\n  }\n\n  49.95% {\n    -webkit-transform: translate(4px, 4px);\n    transform: translate(4px, 4px);\n  }\n\n  66.6% {\n    -webkit-transform: translate(-2px, -2px);\n    transform: translate(-2px, -2px);\n  }\n\n  83.25% {\n    -webkit-transform: translate(1px, 1px);\n    transform: translate(1px, 1px);\n  }\n\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n\n.hvr-wobble-to-bottom-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-to-bottom-right:hover, .hvr-wobble-to-bottom-right:focus, .hvr-wobble-to-bottom-right:active {\n  -webkit-animation-name: hvr-wobble-to-bottom-right;\n  animation-name: hvr-wobble-to-bottom-right;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble To Top Right */\n@-webkit-keyframes hvr-wobble-to-top-right {\n  16.65% {\n    -webkit-transform: translate(8px, -8px);\n    transform: translate(8px, -8px);\n  }\n\n  33.3% {\n    -webkit-transform: translate(-6px, 6px);\n    transform: translate(-6px, 6px);\n  }\n\n  49.95% {\n    -webkit-transform: translate(4px, -4px);\n    transform: translate(4px, -4px);\n  }\n\n  66.6% {\n    -webkit-transform: translate(-2px, 2px);\n    transform: translate(-2px, 2px);\n  }\n\n  83.25% {\n    -webkit-transform: translate(1px, -1px);\n    transform: translate(1px, -1px);\n  }\n\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n\n@keyframes hvr-wobble-to-top-right {\n  16.65% {\n    -webkit-transform: translate(8px, -8px);\n    transform: translate(8px, -8px);\n  }\n\n  33.3% {\n    -webkit-transform: translate(-6px, 6px);\n    transform: translate(-6px, 6px);\n  }\n\n  49.95% {\n    -webkit-transform: translate(4px, -4px);\n    transform: translate(4px, -4px);\n  }\n\n  66.6% {\n    -webkit-transform: translate(-2px, 2px);\n    transform: translate(-2px, 2px);\n  }\n\n  83.25% {\n    -webkit-transform: translate(1px, -1px);\n    transform: translate(1px, -1px);\n  }\n\n  100% {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0);\n  }\n}\n\n.hvr-wobble-to-top-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-to-top-right:hover, .hvr-wobble-to-top-right:focus, .hvr-wobble-to-top-right:active {\n  -webkit-animation-name: hvr-wobble-to-top-right;\n  animation-name: hvr-wobble-to-top-right;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble Top */\n@-webkit-keyframes hvr-wobble-top {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n@keyframes hvr-wobble-top {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n.hvr-wobble-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n.hvr-wobble-top:hover, .hvr-wobble-top:focus, .hvr-wobble-top:active {\n  -webkit-animation-name: hvr-wobble-top;\n  animation-name: hvr-wobble-top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble Bottom */\n@-webkit-keyframes hvr-wobble-bottom {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n@keyframes hvr-wobble-bottom {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n.hvr-wobble-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n.hvr-wobble-bottom:hover, .hvr-wobble-bottom:focus, .hvr-wobble-bottom:active {\n  -webkit-animation-name: hvr-wobble-bottom;\n  animation-name: hvr-wobble-bottom;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Wobble Skew */\n@-webkit-keyframes hvr-wobble-skew {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n@keyframes hvr-wobble-skew {\n  16.65% {\n    -webkit-transform: skew(-12deg);\n    transform: skew(-12deg);\n  }\n\n  33.3% {\n    -webkit-transform: skew(10deg);\n    transform: skew(10deg);\n  }\n\n  49.95% {\n    -webkit-transform: skew(-6deg);\n    transform: skew(-6deg);\n  }\n\n  66.6% {\n    -webkit-transform: skew(4deg);\n    transform: skew(4deg);\n  }\n\n  83.25% {\n    -webkit-transform: skew(-2deg);\n    transform: skew(-2deg);\n  }\n\n  100% {\n    -webkit-transform: skew(0);\n    transform: skew(0);\n  }\n}\n\n.hvr-wobble-skew {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-wobble-skew:hover, .hvr-wobble-skew:focus, .hvr-wobble-skew:active {\n  -webkit-animation-name: hvr-wobble-skew;\n  animation-name: hvr-wobble-skew;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Buzz */\n@-webkit-keyframes hvr-buzz {\n  50% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n}\n\n@keyframes hvr-buzz {\n  50% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n}\n\n.hvr-buzz {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-buzz:hover, .hvr-buzz:focus, .hvr-buzz:active {\n  -webkit-animation-name: hvr-buzz;\n  animation-name: hvr-buzz;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n/* Buzz Out */\n@-webkit-keyframes hvr-buzz-out {\n  10% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  20% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  40% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  70% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  80% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  90% {\n    -webkit-transform: translateX(1px) rotate(0);\n    transform: translateX(1px) rotate(0);\n  }\n\n  100% {\n    -webkit-transform: translateX(-1px) rotate(0);\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n@keyframes hvr-buzz-out {\n  10% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  20% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  40% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  70% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  80% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  90% {\n    -webkit-transform: translateX(1px) rotate(0);\n    transform: translateX(1px) rotate(0);\n  }\n\n  100% {\n    -webkit-transform: translateX(-1px) rotate(0);\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n.hvr-buzz-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n}\n.hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {\n  -webkit-animation-name: hvr-buzz-out;\n  animation-name: hvr-buzz-out;\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* BACKGROUND TRANSITIONS */\n/* Fade */\n.hvr-fade {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  overflow: hidden;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: color, background-color;\n  transition-property: color, background-color;\n}\n.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {\n  background-color: #2098d1;\n  color: white;\n}\n\n/* Back Pulse */\n@-webkit-keyframes hvr-back-pulse {\n  50% {\n    background-color: rgba(32, 152, 209, 0.75);\n  }\n}\n\n@keyframes hvr-back-pulse {\n  50% {\n    background-color: rgba(32, 152, 209, 0.75);\n  }\n}\n\n.hvr-back-pulse {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  overflow: hidden;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-property: color, background-color;\n  transition-property: color, background-color;\n}\n.hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active {\n  -webkit-animation-name: hvr-back-pulse;\n  animation-name: hvr-back-pulse;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  background-color: #2098d1;\n  background-color: #2098d1;\n  color: white;\n}\n\n/* Sweep To Right */\n.hvr-sweep-to-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {\n  color: white;\n}\n.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n/* Sweep To Left */\n.hvr-sweep-to-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-left:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 100% 50%;\n  transform-origin: 100% 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-left:hover, .hvr-sweep-to-left:focus, .hvr-sweep-to-left:active {\n  color: white;\n}\n.hvr-sweep-to-left:hover:before, .hvr-sweep-to-left:focus:before, .hvr-sweep-to-left:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n/* Sweep To Bottom */\n.hvr-sweep-to-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-bottom:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-bottom:hover, .hvr-sweep-to-bottom:focus, .hvr-sweep-to-bottom:active {\n  color: white;\n}\n.hvr-sweep-to-bottom:hover:before, .hvr-sweep-to-bottom:focus:before, .hvr-sweep-to-bottom:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n}\n\n/* Sweep To Top */\n.hvr-sweep-to-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-top:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-top:hover, .hvr-sweep-to-top:focus, .hvr-sweep-to-top:active {\n  color: white;\n}\n.hvr-sweep-to-top:hover:before, .hvr-sweep-to-top:focus:before, .hvr-sweep-to-top:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n}\n\n/* Bounce To Right */\n.hvr-bounce-to-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active {\n  color: white;\n}\n.hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Bounce To Left */\n.hvr-bounce-to-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-left:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 100% 50%;\n  transform-origin: 100% 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-left:hover, .hvr-bounce-to-left:focus, .hvr-bounce-to-left:active {\n  color: white;\n}\n.hvr-bounce-to-left:hover:before, .hvr-bounce-to-left:focus:before, .hvr-bounce-to-left:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Bounce To Bottom */\n.hvr-bounce-to-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-bottom:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-bottom:hover, .hvr-bounce-to-bottom:focus, .hvr-bounce-to-bottom:active {\n  color: white;\n}\n.hvr-bounce-to-bottom:hover:before, .hvr-bounce-to-bottom:focus:before, .hvr-bounce-to-bottom:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Bounce To Top */\n.hvr-bounce-to-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-top:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active {\n  color: white;\n}\n.hvr-bounce-to-top:hover:before, .hvr-bounce-to-top:focus:before, .hvr-bounce-to-top:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Radial Out */\n.hvr-radial-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  background: #e1e1e1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-radial-out:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  border-radius: 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {\n  color: white;\n}\n.hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {\n  -webkit-transform: scale(2);\n  transform: scale(2);\n}\n\n/* Radial In */\n.hvr-radial-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n  background: #2098d1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-radial-in:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #e1e1e1;\n  border-radius: 100%;\n  -webkit-transform: scale(2);\n  transform: scale(2);\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-radial-in:hover, .hvr-radial-in:focus, .hvr-radial-in:active {\n  color: white;\n}\n.hvr-radial-in:hover:before, .hvr-radial-in:focus:before, .hvr-radial-in:active:before {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n/* Rectangle In */\n.hvr-rectangle-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #2098d1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-rectangle-in:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #e1e1e1;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active {\n  color: white;\n}\n.hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before {\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n/* Rectangle Out */\n.hvr-rectangle-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #e1e1e1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-rectangle-out:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-rectangle-out:hover, .hvr-rectangle-out:focus, .hvr-rectangle-out:active {\n  color: white;\n}\n.hvr-rectangle-out:hover:before, .hvr-rectangle-out:focus:before, .hvr-rectangle-out:active:before {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n\n/* Shutter In Horizontal */\n.hvr-shutter-in-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #2098d1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-shutter-in-horizontal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #e1e1e1;\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-in-horizontal:hover, .hvr-shutter-in-horizontal:focus, .hvr-shutter-in-horizontal:active {\n  color: white;\n}\n.hvr-shutter-in-horizontal:hover:before, .hvr-shutter-in-horizontal:focus:before, .hvr-shutter-in-horizontal:active:before {\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n}\n\n/* Shutter Out Horizontal */\n.hvr-shutter-out-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #e1e1e1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-shutter-out-horizontal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #2098d1;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {\n  color: white;\n}\n.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n/* Shutter In Vertical */\n.hvr-shutter-in-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #2098d1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-shutter-in-vertical:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #e1e1e1;\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-in-vertical:hover, .hvr-shutter-in-vertical:focus, .hvr-shutter-in-vertical:active {\n  color: white;\n}\n.hvr-shutter-in-vertical:hover:before, .hvr-shutter-in-vertical:focus:before, .hvr-shutter-in-vertical:active:before {\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n}\n\n/* Shutter Out Vertical */\n.hvr-shutter-out-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  background: #e1e1e1;\n  -webkit-transition-property: color;\n  transition-property: color;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-shutter-out-vertical:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #2098d1;\n  -webkit-transform: scaleY(0);\n  transform: scaleY(0);\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-out-vertical:hover, .hvr-shutter-out-vertical:focus, .hvr-shutter-out-vertical:active {\n  color: white;\n}\n.hvr-shutter-out-vertical:hover:before, .hvr-shutter-out-vertical:focus:before, .hvr-shutter-out-vertical:active:before {\n  -webkit-transform: scaleY(1);\n  transform: scaleY(1);\n}\n\n/* BORDER TRANSITIONS */\n/* Border Fade */\n.hvr-border-fade {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-border-fade:hover, .hvr-border-fade:focus, .hvr-border-fade:active {\n  box-shadow: inset 0 0 0 4px #2098d1, 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n\n/* Hollow */\n.hvr-hollow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: background;\n  transition-property: background;\n  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-hollow:hover, .hvr-hollow:focus, .hvr-hollow:active {\n  background: none;\n}\n\n/* Trim */\n.hvr-trim {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-trim:before {\n  content: '';\n  position: absolute;\n  border: white solid 4px;\n  top: 4px;\n  left: 4px;\n  right: 4px;\n  bottom: 4px;\n  opacity: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n}\n.hvr-trim:hover:before, .hvr-trim:focus:before, .hvr-trim:active:before {\n  opacity: 1;\n}\n\n/* Ripple Out */\n@-webkit-keyframes hvr-ripple-out {\n  100% {\n    top: -12px;\n    right: -12px;\n    bottom: -12px;\n    left: -12px;\n    opacity: 0;\n  }\n}\n\n@keyframes hvr-ripple-out {\n  100% {\n    top: -12px;\n    right: -12px;\n    bottom: -12px;\n    left: -12px;\n    opacity: 0;\n  }\n}\n\n.hvr-ripple-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-ripple-out:before {\n  content: '';\n  position: absolute;\n  border: #e1e1e1 solid 6px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n.hvr-ripple-out:hover:before, .hvr-ripple-out:focus:before, .hvr-ripple-out:active:before {\n  -webkit-animation-name: hvr-ripple-out;\n  animation-name: hvr-ripple-out;\n}\n\n/* Ripple In */\n@-webkit-keyframes hvr-ripple-in {\n  100% {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes hvr-ripple-in {\n  100% {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    opacity: 1;\n  }\n}\n\n.hvr-ripple-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-ripple-in:before {\n  content: '';\n  position: absolute;\n  border: #e1e1e1 solid 4px;\n  top: -12px;\n  right: -12px;\n  bottom: -12px;\n  left: -12px;\n  opacity: 0;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n.hvr-ripple-in:hover:before, .hvr-ripple-in:focus:before, .hvr-ripple-in:active:before {\n  -webkit-animation-name: hvr-ripple-in;\n  animation-name: hvr-ripple-in;\n}\n\n/* Outline Out */\n.hvr-outline-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-outline-out:before {\n  content: '';\n  position: absolute;\n  border: #e1e1e1 solid 4px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: top, right, bottom, left;\n  transition-property: top, right, bottom, left;\n}\n.hvr-outline-out:hover:before, .hvr-outline-out:focus:before, .hvr-outline-out:active:before {\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n  left: -8px;\n}\n\n/* Outline In */\n.hvr-outline-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-outline-in:before {\n  pointer-events: none;\n  content: '';\n  position: absolute;\n  border: #e1e1e1 solid 4px;\n  top: -16px;\n  right: -16px;\n  bottom: -16px;\n  left: -16px;\n  opacity: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: top, right, bottom, left;\n  transition-property: top, right, bottom, left;\n}\n.hvr-outline-in:hover:before, .hvr-outline-in:focus:before, .hvr-outline-in:active:before {\n  top: -8px;\n  right: -8px;\n  bottom: -8px;\n  left: -8px;\n  opacity: 1;\n}\n\n/* Round Corners */\n.hvr-round-corners {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: border-radius;\n  transition-property: border-radius;\n}\n.hvr-round-corners:hover, .hvr-round-corners:focus, .hvr-round-corners:active {\n  border-radius: 1em;\n}\n\n/* Underline From Left */\n.hvr-underline-from-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-from-left:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 100%;\n  bottom: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: right;\n  transition-property: right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {\n  right: 0;\n}\n\n/* Underline From Center */\n.hvr-underline-from-center {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-from-center:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: left, right;\n  transition-property: left, right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {\n  left: 0;\n  right: 0;\n}\n\n/* Underline From Right */\n.hvr-underline-from-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-from-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 100%;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: left;\n  transition-property: left;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-right:hover:before, .hvr-underline-from-right:focus:before, .hvr-underline-from-right:active:before {\n  left: 0;\n}\n\n/* Overline From Left */\n.hvr-overline-from-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-overline-from-left:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 100%;\n  top: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: right;\n  transition-property: right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-left:hover:before, .hvr-overline-from-left:focus:before, .hvr-overline-from-left:active:before {\n  right: 0;\n}\n\n/* Overline From Center */\n.hvr-overline-from-center {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-overline-from-center:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 50%;\n  right: 50%;\n  top: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: left, right;\n  transition-property: left, right;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\n  left: 0;\n  right: 0;\n}\n\n/* Overline From Right */\n.hvr-overline-from-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-overline-from-right:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 100%;\n  right: 0;\n  top: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transition-property: left;\n  transition-property: left;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-right:hover:before, .hvr-overline-from-right:focus:before, .hvr-overline-from-right:active:before {\n  left: 0;\n}\n\n/* Reveal */\n.hvr-reveal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-reveal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  border-color: #2098d1;\n  border-style: solid;\n  border-width: 0;\n  -webkit-transition-property: border-width;\n  transition-property: border-width;\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-reveal:hover:before, .hvr-reveal:focus:before, .hvr-reveal:active:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n  border-width: 4px;\n}\n\n/* Underline Reveal */\n.hvr-underline-reveal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-underline-reveal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transform: translateY(4px);\n  transform: translateY(4px);\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-underline-reveal:hover:before, .hvr-underline-reveal:focus:before, .hvr-underline-reveal:active:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n\n/* Overline Reveal */\n.hvr-overline-reveal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  overflow: hidden;\n}\n.hvr-overline-reveal:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: #2098d1;\n  height: 4px;\n  -webkit-transform: translateY(-4px);\n  transform: translateY(-4px);\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-overline-reveal:hover:before, .hvr-overline-reveal:focus:before, .hvr-overline-reveal:active:before {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n\n/* SHADOW/GLOW TRANSITIONS */\n/* Glow */\n.hvr-glow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n}\n.hvr-glow:hover, .hvr-glow:focus, .hvr-glow:active {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n}\n\n/* Shadow */\n.hvr-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n}\n.hvr-shadow:hover, .hvr-shadow:focus, .hvr-shadow:active {\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\n}\n\n/* Grow Shadow */\n.hvr-grow-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow, transform;\n  transition-property: box-shadow, transform;\n}\n.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n\n/* Box Shadow Outset */\n.hvr-box-shadow-outset {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n}\n.hvr-box-shadow-outset:hover, .hvr-box-shadow-outset:focus, .hvr-box-shadow-outset:active {\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);\n}\n\n/* Box Shadow Inset */\n.hvr-box-shadow-inset {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: box-shadow;\n  transition-property: box-shadow;\n  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-box-shadow-inset:hover, .hvr-box-shadow-inset:focus, .hvr-box-shadow-inset:active {\n  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n\n/* Float Shadow */\n.hvr-float-shadow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-float-shadow:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  top: 100%;\n  left: 5%;\n  height: 10px;\n  width: 90%;\n  opacity: 0;\n  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\n  /* W3C */\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform, opacity;\n  transition-property: transform, opacity;\n}\n.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {\n  -webkit-transform: translateY(-5px);\n  transform: translateY(-5px);\n  /* move the element up by 5px */\n}\n.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {\n  opacity: 1;\n  -webkit-transform: translateY(5px);\n  transform: translateY(5px);\n  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */\n}\n\n/* Shadow Radial */\n.hvr-shadow-radial {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-shadow-radial:before, .hvr-shadow-radial:after {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  left: 0;\n  width: 100%;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  height: 5px;\n  opacity: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: opacity;\n  transition-property: opacity;\n}\n.hvr-shadow-radial:before {\n  bottom: 100%;\n  background: -webkit-radial-gradient(50% 150%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n  background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n}\n.hvr-shadow-radial:after {\n  top: 100%;\n  background: -webkit-radial-gradient(50% -50%, ellipse, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n  background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n}\n.hvr-shadow-radial:hover:before, .hvr-shadow-radial:focus:before, .hvr-shadow-radial:active:before, .hvr-shadow-radial:hover:after, .hvr-shadow-radial:focus:after, .hvr-shadow-radial:active:after {\n  opacity: 1;\n}\n\n/* SPEECH BUBBLES */\n/* Bubble Top */\n.hvr-bubble-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-bubble-top:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  left: calc(50% - 10px);\n  top: 0;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #e1e1e1 transparent;\n}\n.hvr-bubble-top:hover:before, .hvr-bubble-top:focus:before, .hvr-bubble-top:active:before {\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n}\n\n/* Bubble Right */\n.hvr-bubble-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-bubble-right:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  top: calc(50% - 10px);\n  right: 0;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent #e1e1e1;\n}\n.hvr-bubble-right:hover:before, .hvr-bubble-right:focus:before, .hvr-bubble-right:active:before {\n  -webkit-transform: translateX(10px);\n  transform: translateX(10px);\n}\n\n/* Bubble Bottom */\n.hvr-bubble-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-bubble-bottom:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  left: calc(50% - 10px);\n  bottom: 0;\n  border-width: 10px 10px 0 10px;\n  border-color: #e1e1e1 transparent transparent transparent;\n}\n.hvr-bubble-bottom:hover:before, .hvr-bubble-bottom:focus:before, .hvr-bubble-bottom:active:before {\n  -webkit-transform: translateY(10px);\n  transform: translateY(10px);\n}\n\n/* Bubble Left */\n.hvr-bubble-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-bubble-left:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: '';\n  border-style: solid;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  top: calc(50% - 10px);\n  left: 0;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent #e1e1e1 transparent transparent;\n}\n.hvr-bubble-left:hover:before, .hvr-bubble-left:focus:before, .hvr-bubble-left:active:before {\n  -webkit-transform: translateX(-10px);\n  transform: translateX(-10px);\n}\n\n/* Bubble Float Top */\n.hvr-bubble-float-top {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-bubble-float-top:before {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  left: calc(50% - 10px);\n  top: 0;\n  border-style: solid;\n  border-width: 0 10px 10px 10px;\n  border-color: transparent transparent #e1e1e1 transparent;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-bubble-float-top:hover, .hvr-bubble-float-top:focus, .hvr-bubble-float-top:active {\n  -webkit-transform: translateY(10px);\n  transform: translateY(10px);\n}\n.hvr-bubble-float-top:hover:before, .hvr-bubble-float-top:focus:before, .hvr-bubble-float-top:active:before {\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n}\n\n/* Bubble Float Right */\n.hvr-bubble-float-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-bubble-float-right:before {\n  position: absolute;\n  z-index: -1;\n  top: calc(50% - 10px);\n  right: 0;\n  content: '';\n  border-style: solid;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent #e1e1e1;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-bubble-float-right:hover, .hvr-bubble-float-right:focus, .hvr-bubble-float-right:active {\n  -webkit-transform: translateX(-10px);\n  transform: translateX(-10px);\n}\n.hvr-bubble-float-right:hover:before, .hvr-bubble-float-right:focus:before, .hvr-bubble-float-right:active:before {\n  -webkit-transform: translateX(10px);\n  transform: translateX(10px);\n}\n\n/* Bubble Float Bottom */\n.hvr-bubble-float-bottom {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-bubble-float-bottom:before {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  left: calc(50% - 10px);\n  bottom: 0;\n  border-style: solid;\n  border-width: 10px 10px 0 10px;\n  border-color: #e1e1e1 transparent transparent transparent;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-bubble-float-bottom:hover, .hvr-bubble-float-bottom:focus, .hvr-bubble-float-bottom:active {\n  -webkit-transform: translateY(-10px);\n  transform: translateY(-10px);\n}\n.hvr-bubble-float-bottom:hover:before, .hvr-bubble-float-bottom:focus:before, .hvr-bubble-float-bottom:active:before {\n  -webkit-transform: translateY(10px);\n  transform: translateY(10px);\n}\n\n/* Bubble Float Left */\n.hvr-bubble-float-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-bubble-float-left:before {\n  position: absolute;\n  z-index: -1;\n  content: '';\n  top: calc(50% - 10px);\n  left: 0;\n  border-style: solid;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent #e1e1e1 transparent transparent;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n}\n.hvr-bubble-float-left:hover, .hvr-bubble-float-left:focus, .hvr-bubble-float-left:active {\n  -webkit-transform: translateX(10px);\n  transform: translateX(10px);\n}\n.hvr-bubble-float-left:hover:before, .hvr-bubble-float-left:focus:before, .hvr-bubble-float-left:active:before {\n  -webkit-transform: translateX(-10px);\n  transform: translateX(-10px);\n}\n\n/* ICONS */\n/* Icon Back */\n.hvr-icon-back {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-left: 2.2em;\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n}\n.hvr-icon-back:before {\n  content: \"\\f137\";\n  position: absolute;\n  left: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-back:hover:before, .hvr-icon-back:focus:before, .hvr-icon-back:active:before {\n  -webkit-transform: translateX(-4px);\n  transform: translateX(-4px);\n}\n\n/* Icon Forward */\n.hvr-icon-forward {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n}\n.hvr-icon-forward:before {\n  content: \"\\f138\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.1s;\n  transition-duration: 0.1s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-forward:hover:before, .hvr-icon-forward:focus:before, .hvr-icon-forward:active:before {\n  -webkit-transform: translateX(4px);\n  transform: translateX(4px);\n}\n\n/* Icon Down */\n@-webkit-keyframes hvr-icon-down {\n  0%,\n  50%,\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%,\n  75% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n@keyframes hvr-icon-down {\n  0%,\n  50%,\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%,\n  75% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n/* Icon Down */\n.hvr-icon-down {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-down:before {\n  content: \"\\f01a\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-down:hover:before, .hvr-icon-down:focus:before, .hvr-icon-down:active:before {\n  -webkit-animation-name: hvr-icon-down;\n  animation-name: hvr-icon-down;\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n/* Icon Up */\n@-webkit-keyframes hvr-icon-up {\n  0%,\n  50%,\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%,\n  75% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n@keyframes hvr-icon-up {\n  0%,\n  50%,\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n\n  25%,\n  75% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n/* Icon Up */\n.hvr-icon-up {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-up:before {\n  content: \"\\f01b\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-up:hover:before, .hvr-icon-up:focus:before, .hvr-icon-up:active:before {\n  -webkit-animation-name: hvr-icon-up;\n  animation-name: hvr-icon-up;\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n/* Icon Spin */\n.hvr-icon-spin {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-spin:before {\n  content: \"\\f021\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transition-duration: 1s;\n  transition-duration: 1s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n}\n.hvr-icon-spin:hover:before, .hvr-icon-spin:focus:before, .hvr-icon-spin:active:before {\n  -webkit-transform: rotate(360deg);\n  transform: rotate(360deg);\n}\n\n/* Icon Drop */\n@-webkit-keyframes hvr-icon-drop {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n  }\n\n  51%,\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes hvr-icon-drop {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n  }\n\n  51%,\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Icon Drop */\n.hvr-icon-drop {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-drop:before {\n  content: \"\\f041\";\n  position: absolute;\n  right: 1em;\n  opacity: 1;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-drop:hover:before, .hvr-icon-drop:focus:before, .hvr-icon-drop:active:before {\n  opacity: 0;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-animation-name: hvr-icon-drop;\n  animation-name: hvr-icon-drop;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n  animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\n\n/* Icon Fade */\n.hvr-icon-fade {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-fade:before {\n  content: \"\\f00c\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n  -webkit-transition-property: color;\n  transition-property: color;\n}\n.hvr-icon-fade:hover:before, .hvr-icon-fade:focus:before, .hvr-icon-fade:active:before {\n  color: #0F9E5E;\n}\n\n/* Icon Float Away */\n@-webkit-keyframes hvr-icon-float-away {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-1em);\n    transform: translateY(-1em);\n  }\n}\n\n@keyframes hvr-icon-float-away {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-1em);\n    transform: translateY(-1em);\n  }\n}\n\n/* Icon Float Away */\n.hvr-icon-float-away {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-float-away:before, .hvr-icon-float-away:after {\n  content: \"\\f055\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n}\n.hvr-icon-float-away:after {\n  opacity: 0;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n.hvr-icon-float-away:hover:after, .hvr-icon-float-away:focus:after, .hvr-icon-float-away:active:after {\n  -webkit-animation-name: hvr-icon-float-away;\n  animation-name: hvr-icon-float-away;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n/* Icon Sink Away */\n@-webkit-keyframes hvr-icon-sink-away {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(1em);\n    transform: translateY(1em);\n  }\n}\n\n@keyframes hvr-icon-sink-away {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(1em);\n    transform: translateY(1em);\n  }\n}\n\n/* Icon Sink Away */\n.hvr-icon-sink-away {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-sink-away:before, .hvr-icon-sink-away:after {\n  content: \"\\f056\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-sink-away:after {\n  opacity: 0;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n.hvr-icon-sink-away:hover:after, .hvr-icon-sink-away:focus:after, .hvr-icon-sink-away:active:after {\n  -webkit-animation-name: hvr-icon-sink-away;\n  animation-name: hvr-icon-sink-away;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n/* Icon Grow */\n.hvr-icon-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-grow:before {\n  content: \"\\f118\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-grow:hover:before, .hvr-icon-grow:focus:before, .hvr-icon-grow:active:before {\n  -webkit-transform: scale(1.3) translateZ(0);\n  transform: scale(1.3) translateZ(0);\n}\n\n/* Icon Shrink */\n.hvr-icon-shrink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-shrink:before {\n  content: \"\\f119\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-shrink:hover:before, .hvr-icon-shrink:focus:before, .hvr-icon-shrink:active:before {\n  -webkit-transform: scale(0.8);\n  transform: scale(0.8);\n}\n\n/* Icon Pulse */\n@-webkit-keyframes hvr-icon-pulse {\n  25% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  75% {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n}\n\n@keyframes hvr-icon-pulse {\n  25% {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n\n  75% {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n}\n\n.hvr-icon-pulse {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse:before {\n  content: \"\\f015\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse:hover:before, .hvr-icon-pulse:focus:before, .hvr-icon-pulse:active:before {\n  -webkit-animation-name: hvr-icon-pulse;\n  animation-name: hvr-icon-pulse;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n/* Icon Pulse Grow */\n@-webkit-keyframes hvr-icon-pulse-grow {\n  to {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n}\n\n@keyframes hvr-icon-pulse-grow {\n  to {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3);\n  }\n}\n\n.hvr-icon-pulse-grow {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse-grow:before {\n  content: \"\\f015\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse-grow:hover:before, .hvr-icon-pulse-grow:focus:before, .hvr-icon-pulse-grow:active:before {\n  -webkit-animation-name: hvr-icon-pulse-grow;\n  animation-name: hvr-icon-pulse-grow;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n/* Icon Pulse Shrink */\n@-webkit-keyframes hvr-icon-pulse-shrink {\n  to {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n}\n\n@keyframes hvr-icon-pulse-shrink {\n  to {\n    -webkit-transform: scale(0.8);\n    transform: scale(0.8);\n  }\n}\n\n.hvr-icon-pulse-shrink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n}\n.hvr-icon-pulse-shrink:before {\n  content: \"\\f015\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse-shrink:hover:before, .hvr-icon-pulse-shrink:focus:before, .hvr-icon-pulse-shrink:active:before {\n  -webkit-animation-name: hvr-icon-pulse-shrink;\n  animation-name: hvr-icon-pulse-shrink;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  animation-direction: alternate;\n}\n\n/* Icon Push */\n@-webkit-keyframes hvr-icon-push {\n  50% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n}\n\n@keyframes hvr-icon-push {\n  50% {\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n}\n\n.hvr-icon-push {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-push:before {\n  content: \"\\f006\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-push:hover:before, .hvr-icon-push:focus:before, .hvr-icon-push:active:before {\n  -webkit-animation-name: hvr-icon-push;\n  animation-name: hvr-icon-push;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Icon Pop */\n@-webkit-keyframes hvr-icon-pop {\n  50% {\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n}\n\n@keyframes hvr-icon-pop {\n  50% {\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5);\n  }\n}\n\n.hvr-icon-pop {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-pop:before {\n  content: \"\\f005\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pop:hover:before, .hvr-icon-pop:focus:before, .hvr-icon-pop:active:before {\n  -webkit-animation-name: hvr-icon-pop;\n  animation-name: hvr-icon-pop;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Icon Bounce */\n.hvr-icon-bounce {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-bounce:before {\n  content: \"\\f087\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-bounce:hover:before, .hvr-icon-bounce:focus:before, .hvr-icon-bounce:active:before {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\n\n/* Icon Rotate */\n.hvr-icon-rotate {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-rotate:before {\n  content: \"\\f0c6\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-rotate:hover:before, .hvr-icon-rotate:focus:before, .hvr-icon-rotate:active:before {\n  -webkit-transform: rotate(20deg);\n  transform: rotate(20deg);\n}\n\n/* Icon Grow Rotate */\n.hvr-icon-grow-rotate {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-grow-rotate:before {\n  content: \"\\f095\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-grow-rotate:hover:before, .hvr-icon-grow-rotate:focus:before, .hvr-icon-grow-rotate:active:before {\n  -webkit-transform: scale(1.5) rotate(12deg);\n  transform: scale(1.5) rotate(12deg);\n}\n\n/* Icon Float */\n.hvr-icon-float {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-float:before {\n  content: \"\\f01b\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-float:hover:before, .hvr-icon-float:focus:before, .hvr-icon-float:active:before {\n  -webkit-transform: translateY(-4px);\n  transform: translateY(-4px);\n}\n\n/* Icon Sink */\n.hvr-icon-sink {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-sink:before {\n  content: \"\\f01a\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n.hvr-icon-sink:hover:before, .hvr-icon-sink:focus:before, .hvr-icon-sink:active:before {\n  -webkit-transform: translateY(4px);\n  transform: translateY(4px);\n}\n\n/* Icon Bob */\n@-webkit-keyframes hvr-icon-bob {\n  0% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n@keyframes hvr-icon-bob {\n  0% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n\n  50% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n@-webkit-keyframes hvr-icon-bob-float {\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n@keyframes hvr-icon-bob-float {\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n.hvr-icon-bob {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-bob:before {\n  content: \"\\f077\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-bob:hover:before, .hvr-icon-bob:focus:before, .hvr-icon-bob:active:before {\n  -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;\n  animation-name: hvr-icon-bob-float, hvr-icon-bob;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n/* Icon Hang */\n@-webkit-keyframes hvr-icon-hang {\n  0% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n\n  50% {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n  }\n\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n@keyframes hvr-icon-hang {\n  0% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n\n  50% {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n  }\n\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n@-webkit-keyframes hvr-icon-hang-sink {\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n@keyframes hvr-icon-hang-sink {\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n.hvr-icon-hang {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-hang:before {\n  content: \"\\f078\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-hang:hover:before, .hvr-icon-hang:focus:before, .hvr-icon-hang:active:before {\n  -webkit-animation-name: hvr-icon-hang-sink, hvr-icon-hang;\n  animation-name: hvr-icon-hang-sink, hvr-icon-hang;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n/* Icon Wobble Horizontal */\n@-webkit-keyframes hvr-icon-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(6px);\n    transform: translateX(6px);\n  }\n\n  33.3% {\n    -webkit-transform: translateX(-5px);\n    transform: translateX(-5px);\n  }\n\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n@keyframes hvr-icon-wobble-horizontal {\n  16.65% {\n    -webkit-transform: translateX(6px);\n    transform: translateX(6px);\n  }\n\n  33.3% {\n    -webkit-transform: translateX(-5px);\n    transform: translateX(-5px);\n  }\n\n  49.95% {\n    -webkit-transform: translateX(4px);\n    transform: translateX(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateX(-2px);\n    transform: translateX(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateX(1px);\n    transform: translateX(1px);\n  }\n\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.hvr-icon-wobble-horizontal {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-wobble-horizontal:before {\n  content: \"\\f061\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-wobble-horizontal:hover:before, .hvr-icon-wobble-horizontal:focus:before, .hvr-icon-wobble-horizontal:active:before {\n  -webkit-animation-name: hvr-icon-wobble-horizontal;\n  animation-name: hvr-icon-wobble-horizontal;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Icon Wobble Vertical */\n@-webkit-keyframes hvr-icon-wobble-vertical {\n  16.65% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n\n  33.3% {\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px);\n  }\n\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@keyframes hvr-icon-wobble-vertical {\n  16.65% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n\n  33.3% {\n    -webkit-transform: translateY(-5px);\n    transform: translateY(-5px);\n  }\n\n  49.95% {\n    -webkit-transform: translateY(4px);\n    transform: translateY(4px);\n  }\n\n  66.6% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n\n  83.25% {\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px);\n  }\n\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n.hvr-icon-wobble-vertical {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-wobble-vertical:before {\n  content: \"\\f062\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-wobble-vertical:hover:before, .hvr-icon-wobble-vertical:focus:before, .hvr-icon-wobble-vertical:active:before {\n  -webkit-animation-name: hvr-icon-wobble-vertical;\n  animation-name: hvr-icon-wobble-vertical;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* Icon Buzz */\n@-webkit-keyframes hvr-icon-buzz {\n  50% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n}\n\n@keyframes hvr-icon-buzz {\n  50% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  100% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n}\n\n.hvr-icon-buzz {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-buzz:before {\n  content: \"\\f017\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-buzz:hover:before, .hvr-icon-buzz:focus:before, .hvr-icon-buzz:active:before {\n  -webkit-animation-name: hvr-icon-buzz;\n  animation-name: hvr-icon-buzz;\n  -webkit-animation-duration: 0.15s;\n  animation-duration: 0.15s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n\n/* Icon Buzz Out */\n@-webkit-keyframes hvr-icon-buzz-out {\n  10% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  20% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  40% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  70% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  80% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  90% {\n    -webkit-transform: translateX(1px) rotate(0);\n    transform: translateX(1px) rotate(0);\n  }\n\n  100% {\n    -webkit-transform: translateX(-1px) rotate(0);\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n@keyframes hvr-icon-buzz-out {\n  10% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  20% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  30% {\n    -webkit-transform: translateX(3px) rotate(2deg);\n    transform: translateX(3px) rotate(2deg);\n  }\n\n  40% {\n    -webkit-transform: translateX(-3px) rotate(-2deg);\n    transform: translateX(-3px) rotate(-2deg);\n  }\n\n  50% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  60% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  70% {\n    -webkit-transform: translateX(2px) rotate(1deg);\n    transform: translateX(2px) rotate(1deg);\n  }\n\n  80% {\n    -webkit-transform: translateX(-2px) rotate(-1deg);\n    transform: translateX(-2px) rotate(-1deg);\n  }\n\n  90% {\n    -webkit-transform: translateX(1px) rotate(0);\n    transform: translateX(1px) rotate(0);\n  }\n\n  100% {\n    -webkit-transform: translateX(-1px) rotate(0);\n    transform: translateX(-1px) rotate(0);\n  }\n}\n\n.hvr-icon-buzz-out {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n.hvr-icon-buzz-out:before {\n  content: \"\\f023\";\n  position: absolute;\n  right: 1em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n.hvr-icon-buzz-out:hover:before, .hvr-icon-buzz-out:focus:before, .hvr-icon-buzz-out:active:before {\n  -webkit-animation-name: hvr-icon-buzz-out;\n  animation-name: hvr-icon-buzz-out;\n  -webkit-animation-duration: 0.75s;\n  animation-duration: 0.75s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n\n/* CURLS */\n/* Curl Top Left */\n.hvr-curl-top-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-curl-top-left:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  top: 0;\n  left: 0;\n  background: white;\n  /* IE9 */\n  background: linear-gradient(135deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');\n  /*For IE7-8-9*/\n  z-index: 1000;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: width, height;\n  transition-property: width, height;\n}\n.hvr-curl-top-left:hover:before, .hvr-curl-top-left:focus:before, .hvr-curl-top-left:active:before {\n  width: 25px;\n  height: 25px;\n}\n\n/* Curl Top Right */\n.hvr-curl-top-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-curl-top-right:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  top: 0;\n  right: 0;\n  background: white;\n  /* IE9 */\n  background: linear-gradient(225deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: width, height;\n  transition-property: width, height;\n}\n.hvr-curl-top-right:hover:before, .hvr-curl-top-right:focus:before, .hvr-curl-top-right:active:before {\n  width: 25px;\n  height: 25px;\n}\n\n/* Curl Bottom Right */\n.hvr-curl-bottom-right {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-curl-bottom-right:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  bottom: 0;\n  right: 0;\n  background: white;\n  /* IE9 */\n  background: linear-gradient(315deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: width, height;\n  transition-property: width, height;\n}\n.hvr-curl-bottom-right:hover:before, .hvr-curl-bottom-right:focus:before, .hvr-curl-bottom-right:active:before {\n  width: 25px;\n  height: 25px;\n}\n\n/* Curl Bottom Left */\n.hvr-curl-bottom-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale;\n  position: relative;\n}\n.hvr-curl-bottom-left:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  bottom: 0;\n  left: 0;\n  background: white;\n  /* IE9 */\n  background: linear-gradient(45deg, white 45%, #aaaaaa 50%, #cccccc 56%, white 80%);\n  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.4);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: width, height;\n  transition-property: width, height;\n}\n.hvr-curl-bottom-left:hover:before, .hvr-curl-bottom-left:focus:before, .hvr-curl-bottom-left:active:before {\n  width: 25px;\n  height: 25px;\n}\n\n\n.company_name{\n  text-transform: capitalize;\n}\n\n/* custom material css start (sahil) */\n.sahil-material .form-control {\n    height: 38px;\n    padding: 7px 0;\n    font-size: 14px;\n    line-height: 1.42857143;\n    font-family: montserratregular;\n    color: #62696d;\n}\n.sahil-material .form-group label.control-label {\n    font-size: 14px;\n    line-height: 1.07142857;\n    color: #8e989f;\n    font-weight: 400;\n    margin: 16px 0 0 0;\n    font-family: montserratregular;\n}\n.sahil-material .form-group label.control-label.seo-static-label{\n    text-transform: uppercase !important;\n    font-size: 11px;\n    color: #8e989f !important;\n}\n.sahil-material .form-group.label-floating label.control-label,\n.sahil-material .form-group.label-placeholder label.control-label {\n    top: -7px;\n    font-size: 14px;\n    line-height: 18px;\n    color: #8e989f;\n}\n.sahil-material .form-group.label-floating:not(.is-empty) label.control-label {\n    top: -20px;\n    font-family: montserratregular;\n    font-size: 11px;\n    text-transform: uppercase;\n    color: #8e989f  !important;\n}\n.sahil-material .form-group.label-floating.is-focused label.control-label {\n    top: -20px;\n    font-size: 11px;\n    font-family: montserratregular;\n    color: #8e989f  !important;\n}\n.sahil-material .form-group.is-focused label,\n.sahil-material .form-group.is-focused label.control-label {\n    font-size: 11px;\n    font-family: montserratregular;\n    color: #8e989f !important;\n    text-transform: uppercase;\n}\n.sahil-material .form-control,\n.sahil-material .form-group .form-control {\n    border: 0 !important;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#009688), to(#009688)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#009688, #009688), -webkit-linear-gradient(#d7dbdd, #D2D2D2);\n    background-image: -o-linear-gradient(#009688, #009688), -o-linear-gradient(#d7dbdd, #d7dbdd);\n    background-image: linear-gradient(#009688, #009688), linear-gradient(#d7dbdd, #d7dbdd);\n}\n.sahil-material .form-group.is-focused .form-control {\n    outline: none;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fb545b), to(#fb545b)), -webkit-gradient(linear, left top, left bottom, from(#D2D2D2), to(#D2D2D2));\n    background-image: -webkit-linear-gradient(#fb545b, #fb545b), -webkit-linear-gradient(#D2D2D2, #D2D2D2);\n    background-image: -o-linear-gradient(#fb545b, #fb545b), -o-linear-gradient(#D2D2D2, #D2D2D2);\n    background-image: linear-gradient(#fb545b, #fb545b), linear-gradient(#D2D2D2, #D2D2D2);\n    -webkit-background-size: 100% 2px, 100% 1px;\n            background-size: 100% 2px, 100% 1px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    -webkit-transition-duration: 0.3s;\n        -o-transition-duration: 0.3s;\n            transition-duration: 0.3s;\n}\n\n/* custom material css end (sahil) */\n\n/* Start: Responsiveness */\n\n  .mobile-menu {\n      display: none;\n  }\n\n  .white-logo {\n      display: none !important;\n  }\n\n  .company-list,\n  .name-list {\n      width: 100%;\n      float: left;\n  }\n\n  @media (max-width: 767px) {\n      #userProfile-header .navbar-fixed-top .nav-padding {\n          padding-right: 0px;\n          padding-left: 0px;\n      }\n\n      .full-menu,\n      .dash-circle,\n      .dash-prog-outer h2 {\n          display: none;\n      }\n\n      .main-logo {\n          display: none !important;\n      }\n\n      .mobile-menu {\n          display: block;\n          float: right;\n          margin-top: 7px;\n          position: relative;\n      }\n\n      #userProfile-header .navbar-default {\n          background: #fb5f66 !important;\n          border: none;\n          margin-top: 0px;\n      }\n\n      #userProfile-header .navbar-default .mat-icon i.material-icons {\n          font-size: 24px;\n          color: #fff;\n          padding: 13px;\n      }\n\n      #userProfile-header .navbar-header h4.title {\n          color: #fff;\n          font-size: 16px;\n          text-align: center;\n          text-transform: uppercase;\n          padding-top: 7px;\n      }\n\n      .mobile-menu button {\n          border: none;\n          box-shadow: none;\n          color: #fff;\n          background: none;\n          float: right;\n          margin: 0px 5px;\n      }\n\n      .mobile-menu .btn-default:hover {\n          color: #fff;\n          background: none;\n      }\n\n      .mobile-dash {\n          padding: 0px;\n      }\n\n      .mobile-menu .dropdown-menu {\n          background: #62696d;\n          top: -11px;\n          border-radius: 0px;\n          left: -176px;\n          width: 235px;\n          font-family: montserratlight;\n          padding-bottom: 55px;\n      }\n\n      .mobile-menu .name-dropdown-border {\n          width: 100%;\n          margin: 5px 0px;\n      }\n\n      .mobile-menu .user-outr {\n          float: left;\n          width: 100%;\n          padding: 0;\n          margin: 0px;\n          display: block;\n      }\n\n      .mobile-menu .user-outr li {\n          float: right;\n          font-size: 24px;\n          font-family: montserratlight;\n          color: #fff;\n          margin-right: 24px;\n          /* margin: 10px 19px; */\n          margin-top: 8px;\n          margin-bottom: 6px;\n      }\n\n      .mobile-menu .user-outr li a {\n          margin-right: 30px;\n      }\n      \n      .user-outr li a {\n          float: left;\n          width: auto;\n          border: 2px solid #dae2e6;\n          border-radius: 50%;\n          margin-left: 5px;\n          margin-bottom: 5px;\n      }\n\n      .user-outr li a:hover {\n          border: 2px solid #f56151;\n      }\n\n      .mobile-menu .company-list li,\n      .mobile-menu .name-list li {\n          margin: 10px 0px;\n          text-align: right;\n          font-size: 16px;\n          width: 100%;\n          float: left;\n          padding-right: 20px;\n      }\n\n      .mobile-menu .company-list li a,\n      .mobile-menu .name-list li a {\n          float: right;\n          color: #fff;\n      }\n\n      .mobile-menu .company-list li a i {\n          margin-right: 20px;\n          float: left;\n      }\n\n      .mobile-menu .name-list li a i {\n          margin-left: 20px;\n          float: right;\n      }\n\n      .mobile-menu .company-list-title {\n          float: left;\n          color: #fff;\n      }\n\n      .white-logo {\n          display: block !important;\n      }\n\n      .dash-prog-outer {\n          float: left;\n          width: 100%;\n          margin-top: 10px;\n          margin-bottom: 10px;\n      }\n\n      .dash-prog-outer h5 {\n          font-size: 24px;\n          text-align: center;\n          width: 100%;\n          margin-bottom: 1px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper {\n          min-height: 35px;\n          width: 100%;\n          text-align: center;\n      }\n\n      .company-dropdown-wrapper button.btn.btn-default.dropdown-toggle {\n          margin: 0 auto;\n          float: none;\n          text-align: center;\n      }\n\n      #userProfile-header .navbar-header {\n          float: left;\n          margin-left: -5px;\n          margin-right: 0px !important;\n      }\n\n      #userProfile-header .navbar-logopadding {\n          padding-right: 0px;\n          padding-top: 0px;\n      }\n\n      #userProfile-header .navbar-default {\n          height: 50px;\n          margin: 0px;\n          padding-bottom: 0px;\n      }\n\n      .white-logo .navbar-brand img {\n          height: 53px;\n          margin-top: -20px;\n          margin: 0 auto;\n          margin-top: -20px;\n      }\n\n      .white-logo .navbar-brand {\n          float: none;\n      }\n\n      .user-outr li a.add-user {\n          width: 45px;\n          height: 45px;\n          padding-top: 9px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-toggle i {\n          top: -30px;\n          left: 17px;\n          font-size: 34px;\n          position: relative;\n          color: #f87b80;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a .company-title {\n          font-size: 16px;\n      }\n\n      .company-dropdown-wrapper .dropdown-menu > li > a .company-site {\n          width: 91%;\n          font-size: 14px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu >li > a .company-block-inner {\n          width: 35px;\n          height: 35px;\n          padding-top: 8px;\n          font-size: 14px;\n          top: 13px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a.add-new-company {\n          font-size: 14px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu > li > a i.material-icons {\n          font-size: 24px;\n      }\n\n      .company-block-content {\n          margin-left: 50px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n          left: 42px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu::before {\n          right: 34px;\n      }\n\n      .dash-prog-outer .company-dropdown-wrapper .dropdown-menu {\n          top: 8px;\n          left: -8px;\n      }\n\n  }\n\n/* End: Responsiveness */"

/***/ },

/***/ 942:
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

/***/ 943:
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

/***/ 944:
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

/***/ 945:
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

/***/ 946:
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

/***/ 947:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(4);
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
            template: __webpack_require__(1079),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(1028), __webpack_require__(1031)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _b) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b;
}());


/***/ },

/***/ 948:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_currentPlan__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_validators_email_validator__ = __webpack_require__(90);
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
            name: [this.model.name, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].pattern('^[a-zA-Z ]*$')
                ])],
            phone: [this.model.phone, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].pattern('[-+0 -9]+$'), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(5)
                ])],
            location: [this.model.location],
            timezone: [this.model.timezone]
        });
        this.emailForm = this.fb.group({
            email: [this.model.emails, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_5__shared_validators_email_validator__["a" /* EmailValidator */].format
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
        var timeZones = moment.tz.names();
        for (var timezone in timeZones) {
            this.timezones[timezone] = timeZones[timezone] + ' ' + moment.tz(timeZones[timezone]).format('Z z');
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
            template: __webpack_require__(1080),
            styles: [__webpack_require__(1029)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["i" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["i" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["g" /* CookieService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["b" /* Script */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["e" /* MembershipService */]) === 'function' && _e) || Object])
    ], BasicDetailsComponent);
    return BasicDetailsComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 949:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_index__ = __webpack_require__(4);
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
            old_password: [this.old_password, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(8)
                ])],
            new_password: [this.new_password, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(8)
                ])],
            confirm_password: [this.confirm_password, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(8)
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
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_index__["i" /* UserService */]],
            template: __webpack_require__(1081),
            styles: [__webpack_require__(1030)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["i" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["i" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["h" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_index__["h" /* LoggedInService */]) === 'function' && _d) || Object])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 950:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_component__ = __webpack_require__(947);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__account_component__["a"]; });



/***/ },

/***/ 951:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_company__ = __webpack_require__(419);
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
            companyname: [this.EditCompany.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])],
            domain: [this.EditCompany.sub_domain, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        jQuery('.modal').on('hidden.bs.modal', function () {
            jQuery('.success-message').addClass('hide');
            this.error = false;
            this.leaveComp = '';
        });
        this.createCompanyForm = this.fb.group({
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.joinCompanyForm = this.fb.group({
            searchCompany: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])]
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
        //this.EditCompany = new Company(company);
        this.EditCompany = company;
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
        var _this = this;
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
            if (curUrlDomain == self.updateCompany.sub_domain && curUrlDomain != _this.updateCompanyForm.value.domain) {
                console.log("CULPRIT 1");
                redirectDomain = _this.updateCompanyForm.value.domain + self.subdomainExtension;
                jQuery(location).attr('href', self.protocol + redirectDomain + '/settings');
            }
        }, function (error) {
            jQuery('#btnUpdateCompany').text('Update');
            jQuery('#btnUpdateCompany').attr('disabled', false);
            if (error.error.code === 'E_UNIQUE_UNIDENTIFIED_VALIDATION') {
                self.Message = "sub-domain already taken";
            }
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
            template: __webpack_require__(1082),
            styles: [__webpack_require__(1032), __webpack_require__(920)],
            inputs: ['myCompaniesList']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["a" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["i" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["i" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["h" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["h" /* LoggedInService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["g" /* CookieService */]) === 'function' && _g) || Object])
    ], UserCompaniesComponent);
    return UserCompaniesComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());


/***/ },

/***/ 952:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_company__ = __webpack_require__(419);
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
            success.forEach(function (company) {
                if (company.user_company.status != 'LEFT' && company.user_company.status != 'DELETED') {
                    self.myCompaniesList.push(new __WEBPACK_IMPORTED_MODULE_3__shared_models_company__["a" /* Company */](company));
                    if (company.user_company.active)
                        self.activeInCompanies.push(new __WEBPACK_IMPORTED_MODULE_3__shared_models_company__["a" /* Company */](company));
                    // if(company.name != 'live')
                    self.companies.push(company);
                }
            });
            self.settingsCommunicationService.updateCompanyList(self.myCompaniesList);
            // self.myCompaniesListUpdated.emit(self.myCompaniesList);
        }, function (error) {
            getCompany.unsubscribe();
        });
    };
    APIIntegrationComponent.prototype.generateApiKey = function (compId, index) {
        var _this = this;
        var self = this;
        var generateApiKey = self._companyService.generateApiKey(compId)
            .subscribe(function (success) {
            _this.clickedCompany = new __WEBPACK_IMPORTED_MODULE_3__shared_models_company__["a" /* Company */](success);
            _this.companies[index].api = _this.clickedCompany.api;
            window.toastNotification('API Key is Generated');
            jQuery('#regenerate-api-' + index).addClass('hide');
        }, function (error) {
            self.Message = error.error.message;
            window.toastNotification(self.Message);
            generateApiKey.unsubscribe();
        });
    };
    APIIntegrationComponent.prototype.copyApi = function (index) {
        clipboard.copy(jQuery('#input-api-' + index)[0].innerText);
        window.toastNotification('API Copied');
    };
    APIIntegrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-api-setting',
            template: __webpack_require__(1083),
            styles: [__webpack_require__(1033)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["a" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _c) || Object])
    ], APIIntegrationComponent);
    return APIIntegrationComponent;
    var _a, _b, _c;
}());


/***/ },

/***/ 953:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiIntegration_component__ = __webpack_require__(952);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__apiIntegration_component__["a"]; });



/***/ },

/***/ 954:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__membership_component__ = __webpack_require__(956);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__membership_component__["a"]; });



/***/ },

/***/ 955:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invoice_component__ = __webpack_require__(915);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__invoice_component__["a"]; });



/***/ },

/***/ 956:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscription_index__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_index__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_currentPlan__ = __webpack_require__(420);
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






// declare var LeadDyno: any;
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
            cardNumber1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber3: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardNumber4: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            nameOnCard: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(3)])],
            cvv: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardMonth: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])],
            cardYear: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern('^[0-9]*$')])]
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
        jQuery('#btnSetupCard').html('Please wait...').attr('disabled', true);
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
                    jQuery('#btnSetupCard').html('Submit').attr('disabled', false);
                    jQuery('#cc-modal input').val('');
                    jQuery('#btnSetupCard').html('Make Payment').attr('disabled', false);
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
                    fbq('track', 'Purchase', { value: _this.kmqTotalAmount.toString(), currency: 'USD' });
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
                        LeadDyno.recordPurchase(success.customer.email, leadDynoData);
                    }*/
                    /*=====================*/
                    window.toastNotification('Payment successfully done and plan is changed.');
                    _this.isChangePlan = false;
                    _this.changeToPlan = '';
                }, function (error) {
                    _this.error = true;
                    _this.errorMessage = 'Your card was declined.';
                    jQuery('#btnSetupCard').html('Make Payment').attr('disabled', false);
                    changeSubscription_1.unsubscribe();
                });
            }
            if (_this.isChangePlan && _this.changeToPlan != '' && !_this.changeToPlan.billing.status) {
                jQuery('#btnSetupCard span').text('Please Wait...').attr('disabled', true);
                _this.reactivate();
            }
            else {
                jQuery('#cc-modal').modal('hide');
                jQuery('#btnSetupCard').html('Submit').attr('disabled', false);
                jQuery('#cc-modal input').val('');
                window.toastNotification('Payment successfully added');
            }
            _this.errorMessage = '';
            /*---- Tracking code goes here ----*/
            fbq('track', 'AddPaymentInfo');
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'Settings Add Payment Method');
            _kmq.push(['record', 'Settings Payment Method Added']);
            /*---------------------------------*/
        }, function (error) {
            _this.error = true;
            _this.errorMessage = error.error.err_message;
            if (_this.isChangePlan)
                jQuery('#btnSetupCard').html('Make Payment').attr('disabled', false);
            else
                jQuery('#btnSetupCard').html('Submit').attr('disabled', false);
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
            template: __webpack_require__(1085),
            styles: [__webpack_require__(1035)],
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["e" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["e" /* MembershipService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_index__["g" /* CookieService */]) === 'function' && _e) || Object])
    ], MembershipComponent);
    return MembershipComponent;
    var _a, _b, _c, _d, _e;
}());


/***/ },

/***/ 957:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
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
        //BillingDetails: Customer = new Customer(null);
        this.card_status = '';
        this.BillingAddress = '';
        this.CardDetail = new __WEBPACK_IMPORTED_MODULE_2__shared_models_currentPlan__["a" /* Card */](null);
        this.error = false;
        this.errorMessage = '';
        this.CardDetailChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
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
        this.BillingDetails.card_status = this.card_status;
        this.getPaymentDeatils();
        this.billingAddressForm = this.fb.group({
            inputName: [this.BillingDetails.first_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)])],
            inputAddress: [this.BillingAddress.line1, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)])],
            inputCity: [this.BillingAddress.city, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)])],
            inputState: [this.BillingAddress.state, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)])],
            inputCountry: [this.BillingAddress.country, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required])],
            inputZipCode: [this.BillingAddress.zip, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
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
            jQuery('#BillingAddressMessage').html('Billing Address Updated succsssfully');
            /*---- Tracking code goes here ----*/
            ga('markettingteam.send', 'event', 'Settings', 'Submit', 'Settings Billing Info Edited');
            _kmq.push(['record', 'Settings Billing Info Edited']);
            /*---------------------------------*/
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
            template: __webpack_require__(1086),
            styles: [__webpack_require__(1036)],
            outputs: ['CardDetailChanged'],
            inputs: ['CardDetail', 'card_status', 'userRole', 'cardType']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["e" /* MembershipService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["e" /* MembershipService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["g" /* CookieService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["b" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["b" /* Script */]) === 'function' && _d) || Object])
    ], PaymentComponent);
    return PaymentComponent;
    var _a, _b, _c, _d;
}());


/***/ },

/***/ 958:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subscription_component__ = __webpack_require__(916);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__subscription_component__["a"]; });



/***/ },

/***/ 959:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_component__ = __webpack_require__(960);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__notification_component__["a"]; });



/***/ },

/***/ 960:
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
            template: __webpack_require__(1088),
            styles: [__webpack_require__(1038)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationComponent);
    return NotificationComponent;
}());


/***/ },

/***/ 961:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_index__ = __webpack_require__(4);
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
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
            selector: 'og-settings',
            template: __webpack_require__(1089),
            styles: [__webpack_require__(1039)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _a) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a;
}());


/***/ },

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__teamSetting_component__ = __webpack_require__(963);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__teamSetting_component__["a"]; });



/***/ },

/***/ 963:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_company__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_user__ = __webpack_require__(877);
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
            userName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[a-zA-Z ]*$')])],
            userEmail: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__shared_validators_email_validator__["a" /* EmailValidator */].format])],
            userRole: ['MANAGER', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required])]
        });
        this.createCompanyForm = this.fb.group({
            companyname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])],
            domain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[a-zA-Z0-9]*$')])]
        });
        this.joinCompanyForm = this.fb.group({
            searchCompany: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)])]
        });
        this.acceptRequestForm = this.fb.group({
            userRole: ['MANAGER', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required])]
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
            template: __webpack_require__(1090),
            styles: [__webpack_require__(920)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["a" /* CompanyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["a" /* CompanyService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["i" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["i" /* UserService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["h" /* LoggedInService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["h" /* LoggedInService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["j" /* SettingsCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["j" /* SettingsCommunicationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["g" /* CookieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["g" /* CookieService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["b" /* Script */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["b" /* Script */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["d" /* SubDomainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_index__["d" /* SubDomainService */]) === 'function' && _j) || Object])
    ], TeamSettingComponent);
    return TeamSettingComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());


/***/ }

});
//# sourceMappingURL=2.map