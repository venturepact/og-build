webpackJsonp([2],{"HJA+":function(n,e,t){"use strict";function l(n){return p._33(0,[p._25(0,_.a,[g.b]),(n()(),p._31(null,["\n    "])),(n()(),p._10(0,null,null,28,"div",[["class","responsive-menu"]],null,[[null,"mouseenter"]],function(n,e,t){var l=!0,a=n.component;return"mouseenter"===e&&(l=!1!==a.onMouseEnter()&&l),l},null,null)),(n()(),p._31(null,["\n        "])),(n()(),p._10(0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(n()(),p._31(null,["Resize Template: "])),(n()(),p._31(null,["\n        "])),(n()(),p._10(0,null,null,22,"div",[["class","icon-block"]],null,null,null,null,null)),(n()(),p._31(null,["\n            "])),(n()(),p._10(0,null,null,6,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,t){var l=!0,a=n.component;return"click"===e&&(l=!1!==a.switchView("desktop")&&l),l},null,null)),(n()(),p._31(null,["\n                "])),(n()(),p._10(0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),p._31(null,["desktop_mac"])),(n()(),p._31(null,[" "])),(n()(),p._10(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),p._31(null,["|"])),(n()(),p._31(null,["\n            "])),(n()(),p._10(0,null,null,6,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,t){var l=!0,a=n.component;return"click"===e&&(l=!1!==a.switchView("tablet")&&l),l},null,null)),(n()(),p._31(null,["\n                "])),(n()(),p._10(0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),p._31(null,["tablet_mac"])),(n()(),p._10(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),p._31(null,["|"])),(n()(),p._31(null,[" "])),(n()(),p._31(null,["\n            "])),(n()(),p._10(0,null,null,3,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,t){var l=!0,a=n.component;return"click"===e&&(l=!1!==a.switchView("mobile")&&l),l},null,null)),(n()(),p._31(null,["\n                "])),(n()(),p._10(0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),p._31(null,["smartphone"])),(n()(),p._31(null,["\n        "])),(n()(),p._31(null,["\n    "])),(n()(),p._31(null,["\n    "])),(n()(),p._10(0,null,null,7,"div",[["id","main-profile"]],null,null,null,null,null)),(n()(),p._31(null,["\n        "])),(n()(),p._10(0,null,null,4,"iframe",[["align","middle"],["id","mobile-iframe"]],[[8,"src",5]],[[null,"mouseenter"],[null,"mouseleave"]],function(n,e,t){var l=!0,a=n.component;return"mouseenter"===e&&(l=!1!==a.onMouseEnter()&&l),"mouseleave"===e&&(l=!1!==a.onMouseLeave()&&l),l},null,null)),p._8(278528,null,0,d.h,[p.s,p.t,p.l,p.F],{ngClass:[0,"ngClass"]},null),p._26({desktop:0,tablet:1,mobile:2}),p._27(1),(n()(),p._31(null,["\n        "])),(n()(),p._31(null,["\n    "]))],function(n,e){var t=e.component;n(e,35,0,n(e,36,0,"desktop"===t.className,"tablet"===t.className,"mobile"===t.className))},function(n,e){var t=e.component;n(e,9,0,"desktop"===t.className),n(e,17,0,"tablet"===t.className),n(e,25,0,"mobile"===t.className),n(e,34,0,p._32(e,34,0,n(e,37,0,p._23(e,0),t.src)))})}function a(n){return p._33(0,[(n()(),p._10(0,null,null,1,"og-preview",[],null,null,null,l,y)),p._8(4308992,null,0,m,[h.a,p.h,g.i,v.a,w.l],null,null)],function(n,e){n(e,1,0)},null)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function n(){}return n}(),i=t("BkNc"),r=t("/oeL"),u=t("4G6E"),s=t("p5Ee"),c=t("fRKB"),f=t("fc+i"),m=function(){function n(n,e,t,l,a){this.subDomainService=n,this.cdr=e,this.titleService=t,this._builderService=l,this.router=a,this.className="desktop"}return n.prototype.ngOnInit=function(){var n=this,e=localStorage.getItem("calc"),t=localStorage.getItem("project");if(e&&"New"!=t&&"/preview-demo"!=this.router.url)this._builderService.getProject({_id:e,company:this.subDomainService.subDomain.sub_domain}).subscribe(function(e){if(!jQuery.isEmptyObject(e)){var t=JSON.stringify(e);""!=JSON.parse(t).favicon&&jQuery("#favicon").attr("href",JSON.parse(t).favicon),n.titleService.setTitle(JSON.parse(t).title.replace(/(<([^>]+)>)/gi,"")),localStorage.setItem("template",t),n.src=s.a.PROTOCOL+n.subDomainService.subDomain.sub_domain+"."+s.a.APP_EXTENSION+"/preview/previewFrame"}},function(n){});else{var l=localStorage.getItem("template");if(l||this.json){var a=this.json||JSON.parse(l);a.parentApp?localStorage.setItem("calc",a.parentApp):localStorage.setItem("calc",a._id),this.src=s.a.PROTOCOL+this.subDomainService.subDomain.sub_domain+"."+s.a.APP_EXTENSION+("/preview-demo"==this.router.url?"/preview-demo/previewFrame":"/preview/previewFrame"),jQuery("meta[name=description]").attr("content",a.description),document.title=a.title,""!=a.favicon&&jQuery("#favicon").attr("href",a.favicon)}}window.Intercom("update",{hide_default_launcher:!0})},n.prototype.ngAfterViewInit=function(){var n=this;this.viewOnWindowWidthBasis(),jQuery(window).resize(function(){n.viewOnWindowWidthBasis()})},n.prototype.viewOnWindowWidthBasis=function(){var n=jQuery(window).width();this.switchView(n>775?"desktop":n<=775&&n>375?"tablet":"mobile"),this.cdr.detectChanges()},n.prototype.onMouseEnter=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeIn(600)},n.prototype.onMouseLeave=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeOut(600)},n.prototype.switchView=function(n){this.className=n,window.resizeBy(600,400),window.moveTo((screen.width-600)/2,(screen.height-400)/2)},n.ctorParameters=function(){return[{type:u.a},{type:r.h},{type:f.i},{type:c.a},{type:i.l}]},n}(),p=t("/oeL"),_=t("NQvX"),g=t("fc+i"),d=t("qbdv"),h=t("4G6E"),v=t("fRKB"),w=t("BkNc"),b=["@font-face {\n        font-family: montserratregular;\n        font-style: normal;\n        font-weight: 400;\n        src: url(../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n    }\n    .responsive-menu[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color: #fb545b;\n    }\n    .responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n        font-family: 'montserratregular';\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .desktop[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n\n    .mobile[_ngcontent-%COMP%] {\n        width: 375px;\n        height: 570px;\n        margin: 1% auto;\n        height:570px;\n        border: 1px solid #dcdddf;\n    }\n\n    .tablet[_ngcontent-%COMP%] {\n        width: 775px;\n        height: 100%;\n        margin: 0 auto;\n        border: 1px solid #dcdddf;\n    }\n        @font-face {\n        font-family: 'Material Icons';\n        font-style: normal;\n        font-weight: 400;\n        src: url(MaterialIcons-Regular.eot);\n        src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../assets/fonts/materialIcons-Regular.woff) format('woff'), url(../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n      }\n        .material-icons[_ngcontent-%COMP%] {\n        font-family: 'Material Icons';\n        font-weight: 400;\n        font-style: normal;\n        display: inline-block;\n        line-height: 1;\n        text-transform: none;\n        letter-spacing: normal;\n        word-wrap: normal;\n        white-space: nowrap;\n        direction: ltr;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        font-feature-settings: 'liga'\n      }\n      .responsive-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ font-size:24px;}"],y=p._7({encapsulation:0,styles:b,data:{}}),O=p._5("og-preview",m,a,{json:"json"},{},[]);t.d(e,"PreviewModuleNgFactory",function(){return hn});var M=t("/oeL"),P=t("Dhcz"),k=t("qbdv"),x=t("bm2B"),C=t("CPp0"),N=t("TAop"),j=t("xYmb"),I=t("BkNc"),S=t("4G6E"),E=t("4W9T"),A=t("bax3"),B=t("tuYp"),R=t("fRKB"),z=t("AbUC"),D=t("EXuL"),L=t("2fzf"),Q=t("Zz6u"),T=t("QI4c"),X=t("8ew+"),W=t("bX6v"),F=t("LHvf"),J=t("lQET"),K=t("HNPU"),V=t("CIem"),q=t("u+Yp"),G=t("yKf7"),H=t("P2MY"),Y=t("OO7e"),U=t("p3MC"),Z=t("sdIG"),$=t("baqF"),nn=t("oU75"),en=t("qh+L"),tn=t("aHoK"),ln=t("kBKr"),an=t("S5n1"),on=t("iXri"),rn=t("2XlA"),un=t("t93X"),sn=t("Ncws"),cn=t("XD9W"),fn=t("fNnG"),mn=t("RvqH"),pn=t("y8en"),_n=t("2Zaa"),gn=t("bbo3"),dn=t("yAek"),hn=M._6(o,[],function(n){return M._21([M._22(512,M.j,M._1,[[8,[O,P.b]],[3,M.j],M.y]),M._22(4608,k.l,k.k,[M.u]),M._22(4608,x.D,x.D,[]),M._22(4608,C.c,C.c,[]),M._22(4608,C.h,C.b,[]),M._22(5120,C.k,C.l,[]),M._22(4608,C.j,C.j,[C.c,C.h,C.k]),M._22(4608,C.g,C.a,[]),M._22(5120,C.e,C.m,[C.j,C.g]),M._22(4608,x.e,x.e,[]),M._22(4608,N.a,N.a,[j.a,I.l,S.a,E.a,A.a]),M._22(4608,B.a,B.a,[]),M._22(4608,R.a,R.a,[C.e]),M._22(4608,z.a,z.a,[]),M._22(4608,D.a,D.a,[R.a,z.a]),M._22(4608,L.a,L.a,[C.e,D.a]),M._22(4608,Q.a,Q.a,[C.e]),M._22(4608,T.a,T.a,[]),M._22(4608,X.a,X.a,[C.e,D.a]),M._22(4608,W.a,W.a,[D.a]),M._22(4608,F.a,F.a,[D.a,X.a,W.a]),M._22(4608,J.a,J.a,[D.a,X.a,R.a,W.a,K.a]),M._22(4608,V.a,V.a,[D.a,J.a]),M._22(4608,q.a,q.a,[D.a]),M._22(4608,G.a,G.a,[D.a]),M._22(4608,H.a,H.a,[C.e,D.a,F.a]),M._22(4608,Y.a,Y.a,[D.a,R.a,U.a]),M._22(4608,Z.a,Z.a,[C.e]),M._22(4608,$.a,$.a,[D.a]),M._22(512,k.b,k.b,[]),M._22(512,x.A,x.A,[]),M._22(512,x.k,x.k,[]),M._22(512,C.f,C.f,[]),M._22(512,x.w,x.w,[]),M._22(512,nn.a,nn.a,[]),M._22(512,I.o,I.o,[[2,I.t],[2,I.l]]),M._22(512,en.a,en.a,[]),M._22(512,tn.a,tn.a,[]),M._22(512,ln.a,ln.a,[]),M._22(512,an.a,an.a,[]),M._22(512,on.a,on.a,[]),M._22(512,rn.a,rn.a,[]),M._22(512,un.a,un.a,[]),M._22(512,sn.a,sn.a,[]),M._22(512,cn.a,cn.a,[]),M._22(512,fn.a,fn.a,[]),M._22(512,mn.a,mn.a,[]),M._22(512,pn.a,pn.a,[]),M._22(512,_n.a,_n.a,[]),M._22(512,gn.a,gn.a,[]),M._22(512,o,o,[]),M._22(1024,I.j,function(){return[[{path:"",children:[{path:"",component:m},{path:"previewFrame",component:dn.a}]}]]},[])])})}});