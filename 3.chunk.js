webpackJsonp([3],{lJfQ:function(e,l,n){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=n("3j3K"),i=n("kZql"),o=n("WZkM"),u=n("5oXY"),a=function(){function e(e,l,n,t){this._featureAuthService=e,this.cdr=l,this._router=n,this._activateRoute=t,this.src="http://singh.outgrow.in/singh-1",this.className="desktop",this.urlPreview=!0,this.calcUrl="",this.templates={"one-page-card-new":"The Chicago","sound-cloud-v3":"The Londoner","template-seven":"The Seattle","inline-temp-new":"The Greek",experian:"The Tokyo","template-five":"The Madrid","template-six":"The Stockholm","template-eight":"The Venice","template-nine":"The New York"};var i=window.location.href.split("/");this.previewConfig=localStorage.getItem("previewConfig"),this.previewConfig=this.previewConfig?JSON.parse(this.previewConfig):null,this.subdomain=i[2].split(".")[0],"layoutPreview"==i[i.length-2]?(this.calcUrl=i[i.length-1],this.src=this.getCalUrl(this.calcUrl)):(this.urlPreview=!1,this.previewConfig?(this.previewType=this.previewConfig.new?"new":"duplicate",this.src=this.previewConfig[this.previewType].url,this.selector=this.previewConfig[this.previewType].name):this._router.navigate(["/dashboard"]))}return e.prototype.getCalUrl=function(e){var l=window.location.href;return this.selector=this._activateRoute.snapshot.data.calc_details.template,l.includes(".rely.co")?"http://livec.rely.co/"+e:l.includes(".outgrow.co")?"https://live.outgrow.us/"+e:l.includes(".outgrow.local")?"http://livec.outgrow.local/"+e:l.includes(".outgrow.in")?"http://livec.outgrow.in/"+e:void 0},e.prototype.getFeatureaccess=function(){if(this.selector){var e=this.selector.split("-").join("_");return this._featureAuthService.features.templates[e]}return!0},e.prototype.useTemplate=function(){var e=this.selector;if("new"===this.previewType)this._featureAuthService.features.templates[e.split("-").join("_")]?(localStorage.setItem("temp_name",e),localStorage.getItem("changeTemplate")||localStorage.setItem("project","New"),window.location.href=i.a.PROTOCOL+this.subdomain+"."+i.a.APP_EXTENSION+"/builder/"):this.upgradePopup(e,"templates");else if(this.previewConfig[this.previewType].selectCalc.active){localStorage.setItem("project","Duplicate"),localStorage.setItem("DuplicateId",this.previewConfig[this.previewType].selectCalc.liveApp.app);var l=this.previewConfig[this.previewType].selectCalc.liveApp.url.split("/");localStorage.setItem("DuplicateURL",l[l.length-1]),localStorage.setItem("temp_name",e),window.location.href=i.a.PROTOCOL+this.subdomain+"."+i.a.APP_EXTENSION+"/builder/"}else this.upgradePopup(e,"pre-madeTemplates")},e.prototype.useUrlPreviewTemplate=function(){this._featureAuthService.features.templates[this._activateRoute.snapshot.data.calc_details.template.split("-").join("_")]?(localStorage.setItem("project","Duplicate"),localStorage.setItem("DuplicateURL",this.calcUrl),window.location.href=i.a.PROTOCOL+this.subdomain+"."+i.a.APP_EXTENSION+"/builder/"):this.upgradePopup(this._activateRoute.snapshot.data.calc_details.template,"templates")},e.prototype.upgradePopup=function(e,l){var n=e.split("-");"new"!==n[n.length-1]&&"v3"!==n[n.length-1]||n.pop(),n=n.join("_"),this._featureAuthService.setSelectedFeature(l,n),jQuery(".templates").addClass("activegreen limited-label"),jQuery("#premiumModal").modal("show"),jQuery(".modal-backdrop").insertAfter("#premiumModal")},e.prototype.ngAfterViewInit=function(){var e=this;this.viewOnWindowWidthBasis(),jQuery(window).resize(function(){e.viewOnWindowWidthBasis()});var l=setInterval(function(){window.Intercom&&(window.Intercom("update",{app_current_page:"preview"}),window.Intercom("update",{app_current_page_url:window.location.href}),clearInterval(l))},1e3)},e.prototype.viewOnWindowWidthBasis=function(){var e=jQuery(window).width();this.switchView(e>775?"desktop":e<=775&&e>375?"tablet":"mobile"),this.cdr.detectChanges()},e.prototype.onMouseEnter=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeIn(600)},e.prototype.onMouseLeave=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeOut(600)},e.prototype.switchView=function(e){this.className=e,window.resizeBy(600,400),window.moveTo((screen.width-600)/2,(screen.height-400)/2)},e}(),r=function(){},s=n("2Je8"),c=n("04dz"),p=n("Qbdm"),d=n("G6Z6"),m=n("ZtbI"),h=n("3Hiw"),f=n("1u7h"),g=n("beQZ"),v=t["\u0275crt"]({encapsulation:0,styles:[[".responsive-menu[_ngcontent-%COMP%]{background:#fff;width:100%;float:left;text-align:center;padding:6px 25px;position:absolute;z-index:999;font-size:13px;border-bottom:1px solid #c7c7c7;color:#666;-webkit-box-shadow:0 3px 15px 5px rgba(0,0,0,.18);box-shadow:0 3px 15px 5px rgba(0,0,0,.18);display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;opacity:1!important}.responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 5px;float:left}.responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:15px;float:right;margin-top:3px;color:rgba(0,0,0,.31)}iframe[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;margin-left:auto;margin-right:auto;left:0;right:0;top:0;border:none}.responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%]{margin-right:26px;float:left;margin-top:7px;margin-left:26px;font-family:montserratregular}.responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{float:left}.desktop[_ngcontent-%COMP%]{width:100%;height:100%}.mobile[_ngcontent-%COMP%]{width:375px;margin:1% auto;height:570px;border:1px solid #dcdddf}.tablet[_ngcontent-%COMP%]{width:775px;height:100%;margin:0 auto;border:1px solid #dcdddf}.responsive-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:22px;color:#62676b}.responsive-menu[_ngcontent-%COMP%]   a.active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#1483b7!important}span.preview-temp-type[_ngcontent-%COMP%]{font-size:16px;font-family:montserratregular}span.preview-temp-type[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:montserratlight;padding-left:5px}.useTemplate[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:0;color:#fff;background:#fb5f66;font-size:11px;font-family:montserratbold;text-transform:uppercase;padding:5px 20px;line-height:18px;-webkit-transition:.5s;transition:.5s}.useTemplate[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#fdb6b9!important;color:#fb5f66!important}#main-profile[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:calc(100% - 43px);top:43px;margin:0 auto}#main-profile[_ngcontent-%COMP%]   iframe.mobile[_ngcontent-%COMP%]{height:580px!important}"]],data:{}});function w(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["lock_outline"]))],null,null)}function b(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","useTemplate"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["\n    "])),(e()(),t["\u0275eld"](2,0,null,null,4,"button",[["class","btn btn-red btn-hover rs-hide"],["type","button"]],null,[[null,"click"]],function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.useTemplate()&&t),t},null,null)),(e()(),t["\u0275ted"](-1,null,["\n      "])),(e()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](5,16384,null,0,s.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275ted"](-1,null,[" Use Layout"])),(e()(),t["\u0275ted"](-1,null,["\n  "]))],function(e,l){e(l,5,0,!l.component.getFeatureaccess())},null)}function C(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["lock_outline"]))],null,null)}function _(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","useTemplate"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["\n    "])),(e()(),t["\u0275eld"](2,0,null,null,4,"button",[["class","btn btn-red btn-hover rs-hide"],["type","button"]],null,[[null,"click"]],function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.useUrlPreviewTemplate()&&t),t},null,null)),(e()(),t["\u0275ted"](-1,null,["\n      "])),(e()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](5,16384,null,0,s.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275ted"](-1,null,[" \n      Use Layout"])),(e()(),t["\u0275ted"](-1,null,["\n  "]))],function(e,l){e(l,5,0,!l.component.getFeatureaccess())},null)}function y(e){return t["\u0275vid"](0,[t["\u0275pid"](0,c.a,[p.c]),(e()(),t["\u0275eld"](1,0,null,null,1,"og-premium-modal",[],null,null,null,d.b,d.a)),t["\u0275did"](2,4440064,null,0,m.a,[h.a,f.a,g.a,o.a,p.c],null,null),(e()(),t["\u0275ted"](-1,null,["\n"])),(e()(),t["\u0275eld"](4,0,null,null,40,"div",[["class","responsive-menu"]],null,[[null,"mouseenter"]],function(e,l,n){var t=!0;return"mouseenter"===l&&(t=!1!==e.component.onMouseEnter()&&t),t},null,null)),(e()(),t["\u0275ted"](-1,null,["\n  "])),(e()(),t["\u0275eld"](6,0,null,null,3,"span",[["class","preview-temp-type"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["Preview: "])),(e()(),t["\u0275eld"](8,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),t["\u0275ted"](9,null,["",""])),(e()(),t["\u0275ted"](-1,null,["\n  "])),(e()(),t["\u0275ted"](-1,null,["\n  "])),(e()(),t["\u0275eld"](12,0,null,null,25,"div",[["class","icon-block"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["\n    "])),(e()(),t["\u0275eld"](14,0,null,null,7,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.switchView("desktop")&&t),t},null,null)),(e()(),t["\u0275ted"](-1,null,["\n      "])),(e()(),t["\u0275eld"](16,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["desktop_mac"])),(e()(),t["\u0275ted"](-1,null,["\n      "])),(e()(),t["\u0275eld"](19,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["|"])),(e()(),t["\u0275ted"](-1,null,["\n    "])),(e()(),t["\u0275ted"](-1,null,["\n    "])),(e()(),t["\u0275eld"](23,0,null,null,7,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.switchView("tablet")&&t),t},null,null)),(e()(),t["\u0275ted"](-1,null,["\n      "])),(e()(),t["\u0275eld"](25,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["tablet_mac"])),(e()(),t["\u0275ted"](-1,null,["\n      "])),(e()(),t["\u0275eld"](28,0,null,null,1,"span",[],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["|"])),(e()(),t["\u0275ted"](-1,null,["\n    "])),(e()(),t["\u0275ted"](-1,null,["\n    "])),(e()(),t["\u0275eld"](32,0,null,null,4,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(e,l,n){var t=!0;return"click"===l&&(t=!1!==e.component.switchView("mobile")&&t),t},null,null)),(e()(),t["\u0275ted"](-1,null,["\n      "])),(e()(),t["\u0275eld"](34,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["smartphone"])),(e()(),t["\u0275ted"](-1,null,["\n    "])),(e()(),t["\u0275ted"](-1,null,["\n  "])),(e()(),t["\u0275ted"](-1,null,["\n  "])),(e()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](40,16384,null,0,s.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275ted"](-1,null,["\n\n  "])),(e()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](43,16384,null,0,s.l,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),t["\u0275ted"](-1,null,["\n  \n"])),(e()(),t["\u0275ted"](-1,null,["\n"])),(e()(),t["\u0275eld"](46,0,null,null,7,"div",[["id","main-profile"]],null,null,null,null,null)),(e()(),t["\u0275ted"](-1,null,["\n  "])),(e()(),t["\u0275eld"](48,0,null,null,4,"iframe",[["align","middle"],["id","mobile-iframe"]],[[8,"src",5]],[[null,"mouseenter"],[null,"mouseleave"]],function(e,l,n){var t=!0,i=e.component;return"mouseenter"===l&&(t=!1!==i.onMouseEnter()&&t),"mouseleave"===l&&(t=!1!==i.onMouseLeave()&&t),t},null,null)),t["\u0275did"](49,278528,null,0,s.j,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](50,{desktop:0,tablet:1,mobile:2}),t["\u0275ppd"](51,1),(e()(),t["\u0275ted"](-1,null,["\n  "])),(e()(),t["\u0275ted"](-1,null,["\n"])),(e()(),t["\u0275ted"](-1,null,["\n"]))],function(e,l){var n=l.component;e(l,2,0),e(l,40,0,!n.urlPreview),e(l,43,0,n.urlPreview),e(l,49,0,e(l,50,0,"desktop"===n.className,"tablet"===n.className,"mobile"===n.className))},function(e,l){var n=l.component;e(l,9,0,n.templates[n.selector]),e(l,14,0,"desktop"===n.className),e(l,23,0,"tablet"===n.className),e(l,32,0,"mobile"===n.className),e(l,48,0,t["\u0275unv"](l,48,0,e(l,51,0,t["\u0275nov"](l,0),n.src)))})}var P=t["\u0275ccf"]("og-layout-preview",a,function(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"og-layout-preview",[],null,null,null,y,v)),t["\u0275did"](1,4243456,null,0,a,[o.a,t.ChangeDetectorRef,u.l,u.a],null,null)],null,null)},{},{},[]),O=n("NVOs"),M=n("ZKJB"),x=n("KdFd"),k=n("Sxe4"),T=n("1Pvm"),I=n("6mD7"),j=n("zgve"),R=n("8j6V"),S=n("m9+S"),N=n("rOsZ"),F=n("HcGy"),V=n("vJ/N"),A=n("53jb");n.d(l,"LayoutPreviewModuleNgFactory",function(){return L});var L=t["\u0275cmf"](r,[],function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[P]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.n,s.m,[t.LOCALE_ID]),t["\u0275mpd"](4608,O["\u0275i"],O["\u0275i"],[]),t["\u0275mpd"](4608,O.FormBuilder,O.FormBuilder,[]),t["\u0275mpd"](4608,M.a,M.a,[x.c,f.a]),t["\u0275mpd"](4608,k.a,k.a,[x.c,h.a,M.a]),t["\u0275mpd"](4608,T.a,T.a,[]),t["\u0275mpd"](4608,I.a,I.a,[x.c]),t["\u0275mpd"](4608,j.a,j.a,[x.c,h.a]),t["\u0275mpd"](512,s.b,s.b,[]),t["\u0275mpd"](512,O["\u0275ba"],O["\u0275ba"],[]),t["\u0275mpd"](512,O.FormsModule,O.FormsModule,[]),t["\u0275mpd"](512,O.ReactiveFormsModule,O.ReactiveFormsModule,[]),t["\u0275mpd"](512,R.a,R.a,[]),t["\u0275mpd"](512,u.o,u.o,[[2,u.t],[2,u.l]]),t["\u0275mpd"](512,S.a,S.a,[]),t["\u0275mpd"](512,N.a,N.a,[]),t["\u0275mpd"](512,F.a,F.a,[]),t["\u0275mpd"](512,V.a,V.a,[]),t["\u0275mpd"](512,A.a,A.a,[]),t["\u0275mpd"](512,r,r,[]),t["\u0275mpd"](1024,u.j,function(){return[[{path:"",children:[{path:"",component:a}]}]]},[])])})}});