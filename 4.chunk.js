webpackJsonp([4],{Op7s:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=t("3j3K"),a=function(){},o=t("04dz"),i=t("Qbdm"),r=t("5oXY"),u=t("1u7h"),s=t("kZql"),d=t("zgve"),m=function(){function n(n,e,t,l,a){this.subDomainService=n,this.cdr=e,this.titleService=t,this._builderService=l,this.router=a,this.url=window.location.href,this.urlParts=this.url.split("/"),this.subDomain=this.urlParts[2].split(".")[0],this.src=s.a.PROTOCOL+this.subDomain+"."+s.a.APP_EXTENSION+"/preview/previewFrame",this.className="desktop"}return n.prototype.ngOnInit=function(){var n=this,e=localStorage.getItem("calc"),t=localStorage.getItem("project");if(e&&"New"!=t&&"/preview-demo"!=this.router.url)this._builderService.getProject({_id:e,company:this.subDomainService.subDomain.sub_domain}).subscribe(function(e){if(!jQuery.isEmptyObject(e)){var t=e;""!=t.favicon&&jQuery("#favicon").attr("href",t.favicon),n.titleService.setTitle(t.title.replace(/(<([^>]+)>)/gi,"")),t=JSON.stringify(t),localStorage.setItem("template",t),n.src=s.a.PROTOCOL+n.subDomainService.subDomain.sub_domain+"."+s.a.APP_EXTENSION+"/preview/previewFrame"}},function(n){});else{var l=localStorage.getItem("template");if(l||this.json){var a=this.json||JSON.parse(l);a.parentApp?localStorage.setItem("calc",a.parentApp):localStorage.setItem("calc",a._id),this.src=s.a.PROTOCOL+this.subDomainService.subDomain.sub_domain+"."+s.a.APP_EXTENSION+("/preview-demo"==this.router.url?"/preview-demo/previewFrame":"/preview/previewFrame"),jQuery("meta[name=description]").attr("content",a.description),document.title=a.title,""!=a.favicon&&jQuery("#favicon").attr("href",a.favicon)}}},n.prototype.ngAfterViewInit=function(){var n=this;this.viewOnWindowWidthBasis(),jQuery(window).resize(function(){n.viewOnWindowWidthBasis()});var e=setInterval(function(){window.Intercom&&(window.Intercom("update",{app_current_page:"preview"}),window.Intercom("update",{app_current_page_url:window.location.href}),clearInterval(e))},1e3)},n.prototype.viewOnWindowWidthBasis=function(){var n=jQuery(window).width();this.switchView(n>775?"desktop":n<=775&&n>375?"tablet":"mobile"),this.cdr.detectChanges()},n.prototype.onMouseEnter=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeIn(600)},n.prototype.onMouseLeave=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeOut(600)},n.prototype.switchView=function(n){this.className=n,window.resizeBy(600,400),window.moveTo((screen.width-600)/2,(screen.height-400)/2)},n}(),c=t("2Je8"),p=l["\u0275crt"]({encapsulation:0,styles:["@font-face {\n        font-family: montserratregular;\n        font-style: normal;\n        font-weight: 400;\n        src: url(../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n    }\n    .responsive-menu[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color: #fb5f66;\n    }\n    .responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n        font-family: 'montserratregular';\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .desktop[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n\n    .mobile[_ngcontent-%COMP%] {\n        width: 375px;\n        height: 570px;\n        margin: 1% auto;\n        height:570px;\n        border: 1px solid #dcdddf;\n    }\n\n    .tablet[_ngcontent-%COMP%] {\n        width: 775px;\n        height: 100%;\n        margin: 0 auto;\n        border: 1px solid #dcdddf;\n    }\n        @font-face {\n        font-family: 'Material Icons';\n        font-style: normal;\n        font-weight: 400;\n        src: url(MaterialIcons-Regular.eot);\n        src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../assets/fonts/materialIcons-Regular.woff) format('woff'), url(../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n      }\n        .material-icons[_ngcontent-%COMP%] {\n        font-family: 'Material Icons';\n        font-weight: 400;\n        font-style: normal;\n        display: inline-block;\n        line-height: 1;\n        text-transform: none;\n        letter-spacing: normal;\n        word-wrap: normal;\n        white-space: nowrap;\n        direction: ltr;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        font-feature-settings: 'liga'\n      }\n      .responsive-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ font-size:24px;}"],data:{}});function f(n){return l["\u0275vid"](0,[l["\u0275pid"](0,o.a,[i.c]),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275eld"](2,0,null,null,28,"div",[["class","responsive-menu"]],null,[[null,"mouseenter"]],function(n,e,t){var l=!0;return"mouseenter"===e&&(l=!1!==n.component.onMouseEnter()&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275eld"](4,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Resize Template: "])),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275eld"](7,0,null,null,22,"div",[["class","icon-block"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](9,0,null,null,6,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.switchView("desktop")&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["\n                "])),(n()(),l["\u0275eld"](11,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["desktop_mac"])),(n()(),l["\u0275ted"](-1,null,[" "])),(n()(),l["\u0275eld"](14,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["|"])),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](17,0,null,null,6,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.switchView("tablet")&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["\n                "])),(n()(),l["\u0275eld"](19,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["tablet_mac"])),(n()(),l["\u0275eld"](21,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["|"])),(n()(),l["\u0275ted"](-1,null,[" "])),(n()(),l["\u0275ted"](-1,null,["\n            "])),(n()(),l["\u0275eld"](25,0,null,null,3,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.switchView("mobile")&&l),l},null,null)),(n()(),l["\u0275ted"](-1,null,["\n                "])),(n()(),l["\u0275eld"](27,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["smartphone"])),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275ted"](-1,null,["\n    "])),(n()(),l["\u0275eld"](32,0,null,null,7,"div",[["id","main-profile"]],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275eld"](34,0,null,null,4,"iframe",[["align","middle"],["id","mobile-iframe"]],[[8,"src",5]],[[null,"mouseenter"],[null,"mouseleave"]],function(n,e,t){var l=!0,a=n.component;return"mouseenter"===e&&(l=!1!==a.onMouseEnter()&&l),"mouseleave"===e&&(l=!1!==a.onMouseLeave()&&l),l},null,null)),l["\u0275did"](35,278528,null,0,c.j,[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer],{ngClass:[0,"ngClass"]},null),l["\u0275pod"](36,{desktop:0,tablet:1,mobile:2}),l["\u0275ppd"](37,1),(n()(),l["\u0275ted"](-1,null,["\n        "])),(n()(),l["\u0275ted"](-1,null,["\n    "]))],function(n,e){var t=e.component;n(e,35,0,n(e,36,0,"desktop"===t.className,"tablet"===t.className,"mobile"===t.className))},function(n,e){var t=e.component;n(e,9,0,"desktop"===t.className),n(e,17,0,"tablet"===t.className),n(e,25,0,"mobile"===t.className),n(e,34,0,l["\u0275unv"](e,34,0,n(e,37,0,l["\u0275nov"](e,0),t.src)))})}var g=l["\u0275ccf"]("og-preview",m,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"og-preview",[],null,null,null,f,p)),l["\u0275did"](1,4308992,null,0,m,[u.a,l.ChangeDetectorRef,i.j,d.a,r.l],null,null)],function(n,e){n(e,1,0)},null)},{json:"json"},{},[]),v=t("VWtn"),h=t("NVOs"),w=t("Sxe4"),b=t("KdFd"),O=t("3Hiw"),y=t("ZKJB"),M=t("1Pvm"),_=t("GWqO"),P=t("0cFa"),C=t("eVuS"),x=t("ggBP"),I=t("mNdO"),N=t("AMM9"),j=t("S4ru"),R=t("DLM9"),S=t("+rT7"),k=t("ZoyP"),F=t("dvzT"),D=t("Nq0u"),z=t("8T+X"),E=t("mdAO"),L=t("DJ4y"),T=t("wpKH"),V=t("Iwv/"),B=t("kYuW"),W=t("yZq5"),Q=t("PFzn"),X=t("IFCm"),A=t("8j6V"),K=t("m9+S"),J=t("37y0"),q=t("W/Fx"),Z=t("8jRX"),H=t("KNOL"),Y=t("bn6p"),U=t("qtYN"),G=t("BEnR"),$=t("XVuX"),nn=t("qXlo"),en=t("jdON"),tn=t("LzcR"),ln=t("crrv"),an=t("M3dY"),on=t("eUJh"),rn=t("1KVD"),un=t("dlhZ"),sn=t("FBHK"),dn=t("Q1Hx"),mn=t("pB35"),cn=t("6aku"),pn=t("cRIM"),fn=t("9TL8"),gn=t("7WP3"),vn=t("DXR4"),hn=t("UL5M");t.d(e,"PreviewModuleNgFactory",function(){return wn});var wn=l["\u0275cmf"](a,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[g,v.b]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,c.n,c.m,[l.LOCALE_ID]),l["\u0275mpd"](4608,h["\u0275i"],h["\u0275i"],[]),l["\u0275mpd"](4608,h.FormBuilder,h.FormBuilder,[]),l["\u0275mpd"](4608,w.a,w.a,[b.c,O.a,y.a]),l["\u0275mpd"](4608,M.a,M.a,[]),l["\u0275mpd"](4608,_.a,_.a,[]),l["\u0275mpd"](4608,d.a,d.a,[b.c,O.a]),l["\u0275mpd"](4608,P.a,P.a,[]),l["\u0275mpd"](4608,C.a,C.a,[d.a,P.a,M.a,u.a,O.a]),l["\u0275mpd"](4608,x.a,x.a,[b.c,C.a]),l["\u0275mpd"](4608,I.a,I.a,[b.c]),l["\u0275mpd"](4608,N.a,N.a,[]),l["\u0275mpd"](4608,j.a,j.a,[b.c,C.a,O.a]),l["\u0275mpd"](4608,R.a,R.a,[C.a,M.a]),l["\u0275mpd"](4608,S.a,S.a,[C.a,j.a,d.a,R.a,x.a]),l["\u0275mpd"](4608,k.a,k.a,[C.a,j.a,R.a,S.a]),l["\u0275mpd"](4608,F.a,F.a,[C.a,S.a]),l["\u0275mpd"](4608,D.a,D.a,[C.a,M.a]),l["\u0275mpd"](4608,z.a,z.a,[C.a]),l["\u0275mpd"](4608,E.a,E.a,[b.c,C.a,j.a]),l["\u0275mpd"](4608,L.a,L.a,[b.c,C.a,k.a,j.a]),l["\u0275mpd"](4608,T.a,T.a,[C.a]),l["\u0275mpd"](4608,V.a,V.a,[C.a,d.a,B.a]),l["\u0275mpd"](4608,W.a,W.a,[b.c]),l["\u0275mpd"](4608,Q.a,Q.a,[C.a]),l["\u0275mpd"](4608,X.a,X.a,[b.c,C.a]),l["\u0275mpd"](512,c.b,c.b,[]),l["\u0275mpd"](512,h["\u0275ba"],h["\u0275ba"],[]),l["\u0275mpd"](512,h.FormsModule,h.FormsModule,[]),l["\u0275mpd"](512,h.ReactiveFormsModule,h.ReactiveFormsModule,[]),l["\u0275mpd"](512,A.a,A.a,[]),l["\u0275mpd"](512,r.o,r.o,[[2,r.t],[2,r.l]]),l["\u0275mpd"](512,K.a,K.a,[]),l["\u0275mpd"](512,J.a,J.a,[]),l["\u0275mpd"](512,q.a,q.a,[]),l["\u0275mpd"](512,Z.a,Z.a,[]),l["\u0275mpd"](512,H.a,H.a,[]),l["\u0275mpd"](512,Y.a,Y.a,[]),l["\u0275mpd"](512,U.a,U.a,[]),l["\u0275mpd"](512,G.a,G.a,[]),l["\u0275mpd"](512,$.a,$.a,[]),l["\u0275mpd"](512,nn.a,nn.a,[]),l["\u0275mpd"](512,en.a,en.a,[]),l["\u0275mpd"](512,tn.a,tn.a,[]),l["\u0275mpd"](512,ln.a,ln.a,[]),l["\u0275mpd"](512,an.a,an.a,[]),l["\u0275mpd"](512,on.a,on.a,[]),l["\u0275mpd"](512,rn.a,rn.a,[]),l["\u0275mpd"](512,un.a,un.a,[]),l["\u0275mpd"](512,sn.a,sn.a,[]),l["\u0275mpd"](512,dn.a,dn.a,[]),l["\u0275mpd"](512,mn.a,mn.a,[]),l["\u0275mpd"](512,cn.a,cn.a,[]),l["\u0275mpd"](512,pn.a,pn.a,[]),l["\u0275mpd"](512,fn.a,fn.a,[]),l["\u0275mpd"](512,gn.a,gn.a,[]),l["\u0275mpd"](512,vn.a,vn.a,[]),l["\u0275mpd"](512,a,a,[]),l["\u0275mpd"](1024,r.j,function(){return[[{path:"",children:[{path:"",component:m},{path:"previewFrame",component:hn.a}]}]]},[])])})}});