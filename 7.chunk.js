webpackJsonp([7],{HX4E:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("3j3K"),t=u("3Hiw"),a=u("6mD7"),i=u("5oXY"),d=u("1Pvm"),c=u("WZkM"),o=u("1u7h"),s=u("/4yg"),r=u("Qbdm"),m=u("beQZ"),p=u("zCpm"),f=u("xZr/"),v=function(){function l(l,n,u,e,t,a,i,d,c,o){var s=this;this.companyService=l,this._router=n,this._script=u,this._marketingService=e,this.titleService=t,this._featureAuthService=a,this._subDomainService=i,this._membershipService=d,this.countdownPromoService=c,this._cookieService=o,this.live_calculators=[],this.analytic_component="",this.hellobarMessage="",this.titleService.setTitle("Outgrow Home"),this.company_id=i.subDomain.company_id,this._marketingService.initGTM().then(function(l){return s._marketingService.identifyUser()}).catch(function(l){return console.log(l)})}return l.prototype.ngAfterViewInit=function(){var l=this;this._script.load("highcharts","gCharts","jqueryUI","slimScroll","raphael","morrisCharts","datatables","daterangepicker","moment").then(function(n){window.loadGoogleCharts(),l.analytic_component="overview"}).catch(function(l){});var n=setInterval(function(){window.Intercom&&(window.Intercom("update",{app_current_page:"analytics"}),window.Intercom("update",{app_current_page_url:window.location.href}),clearInterval(n))},1e3)},l.prototype.ngOnInit=function(){var l=this;this.hellobarMessage=this._cookieService.readCookie("hellobar")?JSON.parse(this._cookieService.readCookie("hellobar")):null;var n=this;this.companyService.getLiveCompanyProjects(this.company_id).subscribe(function(u){u.length?(n.calculator=u[0],l.live_calculators=u,l.calc_id=u[0]._id,l.calc_name=u[0].name,l.activeSince=moment(u[0].createdAt).fromNow().replace("ago","").trim(),l.isActive="PUBLIC"==u[0].mode,setTimeout(function(){return l._featureAuthService.reInitUserDetails.next(!0)},500)):(l.calc_id="null",jQuery("body").addClass("hnjjkads"))},function(l){console.log(l)});var u=this._cookieService.readCookie("storage"),e=null!=u?JSON.parse(u):"";e&&e.token&&this._membershipService.getPlanSubscription().subscribe(function(n){var u=new p.c(n.currentplan.subscription);switch(u.status){case"in_trial":l.countdownPromoService.subscription=u;var e=moment.unix(n.currentplan.subscription.trial_end);l.countdownPromoService.setCountdownTimer(e),l.countdownPromoService.trialEnd&&moment.duration(l.countdownPromoService.trialEnd.diff(moment(new Date)))}}),this._featureAuthService.getFeatures().subscribe(function(n){console.log("Innn Analytics",n,l._featureAuthService.features)})},l.prototype.onAnalyticTypeSelect=function(l){"funnel"==l&&this._featureAuthService.features.analytics.funnel||"overview"==l||"details"==l||"traffic"==l&&this._featureAuthService.features.analytics.traffic_details?this.analytic_component=l:(this._featureAuthService.setSelectedFeature("analytics","funnel"==l?"funnel":"traffic_details"),jQuery(".analytics").addClass("activegreen limited-label"),jQuery("#premiumModal").modal("show"),jQuery(".modal-backdrop").insertAfter("#premiumModal"))},l.prototype.onCalcSelect=function(l){var n=this;this.calculator=l,this.calc_id=l._id,this.calc_name=l.name,this.activeSince=moment(l.createdAt).fromNow().replace("ago","").trim(),this.isActive="PUBLIC"==l.mode,jQuery(".company-dropdown-wrapper").removeClass(".open"),setTimeout(function(){return n._featureAuthService.reInitUserDetails.next(!0)},500)},l.prototype.ngOnDestroy=function(){jQuery(".modal-backdrop.fade.in").addClass("hide"),jQuery("body").removeClass("hnjjkads modal-open")},l}(),h=function(){},y=u("1oFj"),g=u("d23A"),b=u("n1nu"),w=u("adwv"),_=u("DCRr"),S=u("/LhX"),I=u("U546"),C=u("zgve"),k=u("xZJw"),A=u("Igh4"),R=u("2Je8"),j=u("JII+"),T=u("PaHP"),x=u("3Gu2"),F=u("ZKJB"),V=u("5ZR2"),M=e["\u0275crt"]({encapsulation:2,styles:[y.a,g.a],data:{}});function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","preloader"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](2,0,null,null,1,"div",[["class","status"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xa0"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],null,null)}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["keyboard_arrow_down"]))],null,null)}function G(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,19,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](2,0,null,null,16,"a",[["class","hvr-sweep-to-right"],["href","javascript:void(0);"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onCalcSelect(l.context.$implicit)&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](4,0,null,null,4,"div",[["class","company-block"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](6,0,null,null,1,"span",[["class","company-block-inner"]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](10,0,null,null,7,"div",[["class","company-block-content"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](12,0,null,null,1,"span",[["class","company-title ellipsis"]],null,null,null,null,null)),(l()(),e["\u0275ted"](13,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](15,0,null,null,1,"span",[["class","company-site ellipsis hide"]],null,null,null,null,null)),(l()(),e["\u0275ted"](16,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275ted"](-1,null,["\n                "]))],null,function(l,n){l(n,7,0,n.context.$implicit.name.charAt(0)),l(n,13,0,n.context.$implicit.name),l(n,16,0,n.context.$implicit.url)})}function O(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"span",[["class","active-outer hide"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](2,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["check_circle"])),(l()(),e["\u0275ted"](4,null,["\n                Active (since ",")\n            "]))],null,function(l,n){l(n,4,0,n.component.activeSince)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"span",[["class","active-outer hide"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](2,0,null,null,1,"i",[["class","material-icons"],["style","color:red;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["check_circle"])),(l()(),e["\u0275ted"](-1,null,["\n                Not Active\n            "]))],null,null)}function Q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"i",[["class","material-icons lock-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["lock_outline"]))],null,null)}function U(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"og-overview",[],null,null,null,b.b,b.a)),e["\u0275did"](1,4964352,null,0,w.a,[_.a,c.a],{calc:[0,"calc"],fromGlobalAnalytics:[1,"fromGlobalAnalytics"]},null)],function(l,n){l(n,1,0,n.component.calculator,!0)},null)}function J(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"og-user-details",[],null,null,null,S.b,S.a)),e["\u0275did"](1,4964352,null,0,I.a,[_.a,c.a,t.a,e.ChangeDetectorRef,o.a,C.a,i.l],{calc:[0,"calc"],fromGlobalAnalytics:[1,"fromGlobalAnalytics"]},null)],function(l,n){l(n,1,0,n.component.calculator,!0)},null)}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"og-funnel-view",[],null,null,null,k.b,k.a)),e["\u0275did"](1,4964352,null,0,A.a,[_.a,c.a,o.a],{calc:[0,"calc"],fromGlobalAnalytics:[1,"fromGlobalAnalytics"]},null)],function(l,n){l(n,1,0,n.component.calculator,!0)},null)}function Z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,114,"section",[["class","wrapper"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](2,0,null,null,111,"div",[["class","col-md-12 col-sm-12 col-xs-12 np"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](5,0,null,null,77,"div",[["class","left-sidebar analytics-left-side col-md-3 col-sm-3 col-xs-3 np"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](7,0,null,null,74,"div",[["class","tabbable tabs-left"],["id",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](9,0,null,null,71,"ul",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](11,0,null,null,19,"li",[["class","active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](13,0,null,null,16,"a",[["data-toggle","tab"],["href","#overview"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onAnalyticTypeSelect("overview")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\n                                "])),(l()(),e["\u0275eld"](15,0,null,null,4,"span",[["class","left-sidebar-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                                    "])),(l()(),e["\u0275eld"](17,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["dialpad"])),(l()(),e["\u0275ted"](-1,null,["\n                                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](21,0,null,null,7,"div",[["class","left-sidebar-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](23,0,null,null,1,"h6",[["class","tab-overview"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Overview"])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](26,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Get an overview of your visitors and conversions."])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](32,0,null,null,19,"li",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](34,0,null,null,16,"a",[["data-toggle","tab"],["href","#person"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onAnalyticTypeSelect("details")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\n                                "])),(l()(),e["\u0275eld"](36,0,null,null,4,"span",[["class","left-sidebar-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                                    "])),(l()(),e["\u0275eld"](38,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["person"])),(l()(),e["\u0275ted"](-1,null,["\n                                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](42,0,null,null,7,"div",[["class","left-sidebar-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](44,0,null,null,1,"h6",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["User Details"])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](47,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["See detailed analytics and user responses."])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](54,0,null,null,25,"li",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](56,0,null,null,22,"a",[["data-toggle","tab"],["href","#traffic"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onAnalyticTypeSelect("funnel")&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](58,0,null,null,4,"span",[["class","left-sidebar-icon noti-icon"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](60,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["filter_list"])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](64,0,null,null,13,"div",[["class","left-sidebar-title"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                   "])),(l()(),e["\u0275eld"](66,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["User Funnels"])),(l()(),e["\u0275ted"](-1,null,["\n                   "])),(l()(),e["\u0275eld"](69,0,null,null,4,"span",[["class","main"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275and"](16777216,null,null,1,null,Q)),e["\u0275did"](72,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275ted"](-1,null,["\n                   "])),(l()(),e["\u0275eld"](75,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Get detailed metrics on user flows."])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](86,0,null,null,25,"div",[["class","wrapper-content col-md-9 col-sm-9 col-xs-9 analytics-mt0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](88,0,null,null,22,"div",[["class","col-md-12 col-sm-12 col-xs-12 np"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](90,0,null,null,19,"div",[["class","tab-content tabs-wrapper col-md-12 col-sm-12 col-xs-12 np analytics-page"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,U)),e["\u0275did"](94,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,J)),e["\u0275did"](99,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](107,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,72,0,!u._featureAuthService.features.analytics.funnel),l(n,94,0,"overview"===u.analytic_component),l(n,99,0,"details"===u.analytic_component),l(n,107,0,"funnel"===u.analytic_component)},null)}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,52,"div",[],[[2,"builder-parent2",null]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](3,0,null,null,43,"div",[["class","analytics-top-outer"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](5,0,null,null,30,"div",[["class","col-md-12 col-sm-12 col-xs-12 analytics-top-inner"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](7,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Showing analytics for "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](10,0,null,null,24,"h4",[],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"span",[["class","mob-width-set"]],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](14,0,null,null,19,"div",[["class","btn-group company-dropdown-wrapper"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](16,0,null,null,4,"button",[["aria-expanded","false"],["aria-haspopup","true"],["class","btn btn-default dropdown-toggle"],["data-toggle","dropdown"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](19,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](22,0,null,null,10,"ul",[["class","dropdown-menu "]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](24,0,null,null,7,"div",[["class","company-dropdown-main"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](26,0,null,null,4,"div",[["class","company-dropdown-list"]],[[2,"scrollbar",null]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275and"](16777216,null,null,1,null,G)),e["\u0275did"](29,802816,null,0,R.k,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](37,0,null,null,8,"div",[["class","col-md-12 col-sm-12 col-xs-12 analytics-mid-inner"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](40,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275and"](16777216,null,null,1,null,N)),e["\u0275did"](43,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275and"](16777216,null,null,1,null,Z)),e["\u0275did"](50,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,19,0,u.live_calculators.length>1),l(n,29,0,u.live_calculators),l(n,40,0,u.isActive),l(n,43,0,!u.isActive),l(n,50,0,u.calc_id)},function(l,n){var u=n.component;l(n,0,0,u.hellobarMessage),l(n,12,0,u.calc_name),l(n,26,0,u.live_calculators.length>5)})}function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,23,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](2,0,null,null,8,"div",[["class","analytics-top-outer"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](4,0,null,null,5,"div",[["class","col-md-12 col-sm-12 col-xs-12 analytics-top-inner"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["No Live Calculator"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](12,0,null,null,10,"div",[["class","col-xs-12 analytics-bottom-dummy"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](14,0,null,null,7,"div",[["class","col-xs-12 col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](16,0,null,null,4,"div",[["class","analytics-bottom-popup"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](18,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["grid_off"])),(l()(),e["\u0275ted"](-1,null,["\n        Since you haven't published anything, there is no data just yet.\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"]))],null,null)}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"sd-toolbar",[],null,null,null,j.b,j.a)),e["\u0275did"](1,4308992,null,0,T.a,[o.a,x.a,F.a,a.a,c.a,V.a,t.a,i.l,d.a,m.a,f.a],{page:[0,"page"]},null),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](4,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275and"](16777216,null,null,1,null,B)),e["\u0275did"](7,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275and"](16777216,null,null,1,null,H)),e["\u0275did"](10,16384,null,0,R.l,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,1,0,"analytics"),l(n,4,0,!u.calc_id),l(n,7,0,"null"!=u.calc_id),l(n,10,0,"null"==u.calc_id)},null)}var K=e["\u0275ccf"]("og-analytics",v,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"og-analytics",[],null,null,null,E,M)),e["\u0275did"](1,4440064,null,0,v,[a.a,i.l,d.a,s.a,r.j,c.a,o.a,m.a,f.a,t.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),$=u("NVOs"),X=u("Sxe4"),z=u("KdFd"),Y=u("QCYs"),q=u("8j6V"),W=u("5ypo"),ll=u("m9+S"),nl=u("lK8T"),ul=u("rOsZ"),el=u("HcGy"),tl=u("vJ/N"),al=u("53jb");u.d(n,"AnalyticsModuleNgFactory",function(){return il});var il=e["\u0275cmf"](h,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[K]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,R.n,R.m,[e.LOCALE_ID]),e["\u0275mpd"](4608,$["\u0275i"],$["\u0275i"],[]),e["\u0275mpd"](4608,$.FormBuilder,$.FormBuilder,[]),e["\u0275mpd"](4608,X.a,X.a,[z.c]),e["\u0275mpd"](4608,d.a,d.a,[]),e["\u0275mpd"](4608,_.a,_.a,[z.c,C.a]),e["\u0275mpd"](4608,Y.a,Y.a,[]),e["\u0275mpd"](4608,F.a,F.a,[z.c,o.a]),e["\u0275mpd"](4608,a.a,a.a,[z.c]),e["\u0275mpd"](512,R.b,R.b,[]),e["\u0275mpd"](512,$["\u0275ba"],$["\u0275ba"],[]),e["\u0275mpd"](512,$.FormsModule,$.FormsModule,[]),e["\u0275mpd"](512,$.ReactiveFormsModule,$.ReactiveFormsModule,[]),e["\u0275mpd"](512,q.a,q.a,[]),e["\u0275mpd"](512,i.o,i.o,[[2,i.t],[2,i.l]]),e["\u0275mpd"](512,W.a,W.a,[]),e["\u0275mpd"](512,ll.a,ll.a,[]),e["\u0275mpd"](512,nl.a,nl.a,[]),e["\u0275mpd"](512,ul.a,ul.a,[]),e["\u0275mpd"](512,el.a,el.a,[]),e["\u0275mpd"](512,tl.a,tl.a,[]),e["\u0275mpd"](512,al.a,al.a,[]),e["\u0275mpd"](512,h,h,[]),e["\u0275mpd"](1024,i.j,function(){return[[{path:"",component:v}]]},[])])})}});