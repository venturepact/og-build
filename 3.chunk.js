webpackJsonp([3],{"HJA+":function(n,e,l){"use strict";function t(n){return a._29(0,[a._21(0,i.a,[r.b]),(n()(),a._27(-1,null,["\n    "])),(n()(),a._6(2,0,null,null,28,"div",[["class","responsive-menu"]],null,[[null,"mouseenter"]],function(n,e,l){var t=!0;return"mouseenter"===e&&(t=!1!==n.component.onMouseEnter()&&t),t},null,null)),(n()(),a._27(-1,null,["\n        "])),(n()(),a._6(4,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(n()(),a._27(-1,null,["Resize Template: "])),(n()(),a._27(-1,null,["\n        "])),(n()(),a._6(7,0,null,null,22,"div",[["class","icon-block"]],null,null,null,null,null)),(n()(),a._27(-1,null,["\n            "])),(n()(),a._6(9,0,null,null,6,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.switchView("desktop")&&t),t},null,null)),(n()(),a._27(-1,null,["\n                "])),(n()(),a._6(11,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),a._27(-1,null,["desktop_mac"])),(n()(),a._27(-1,null,[" "])),(n()(),a._6(14,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a._27(-1,null,["|"])),(n()(),a._27(-1,null,["\n            "])),(n()(),a._6(17,0,null,null,6,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.switchView("tablet")&&t),t},null,null)),(n()(),a._27(-1,null,["\n                "])),(n()(),a._6(19,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),a._27(-1,null,["tablet_mac"])),(n()(),a._6(21,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),a._27(-1,null,["|"])),(n()(),a._27(-1,null,[" "])),(n()(),a._27(-1,null,["\n            "])),(n()(),a._6(25,0,null,null,3,"a",[["href","javascript:void(0);"]],[[2,"active-view",null]],[[null,"click"]],function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.switchView("mobile")&&t),t},null,null)),(n()(),a._27(-1,null,["\n                "])),(n()(),a._6(27,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),a._27(-1,null,["smartphone"])),(n()(),a._27(-1,null,["\n        "])),(n()(),a._27(-1,null,["\n    "])),(n()(),a._27(-1,null,["\n    "])),(n()(),a._6(32,0,null,null,7,"div",[["id","main-profile"]],null,null,null,null,null)),(n()(),a._27(-1,null,["\n        "])),(n()(),a._6(34,0,null,null,4,"iframe",[["align","middle"],["id","mobile-iframe"]],[[8,"src",5]],[[null,"mouseenter"],[null,"mouseleave"]],function(n,e,l){var t=!0,a=n.component;return"mouseenter"===e&&(t=!1!==a.onMouseEnter()&&t),"mouseleave"===e&&(t=!1!==a.onMouseLeave()&&t),t},null,null)),a._4(35,278528,null,0,m.h,[a.q,a.r,a.k,a.B],{ngClass:[0,"ngClass"]},null),a._22(36,{desktop:0,tablet:1,mobile:2}),a._23(37,1),(n()(),a._27(-1,null,["\n        "])),(n()(),a._27(-1,null,["\n    "]))],function(n,e){var l=e.component;n(e,35,0,n(e,36,0,"desktop"===l.className,"tablet"===l.className,"mobile"===l.className))},function(n,e){var l=e.component;n(e,9,0,"desktop"===l.className),n(e,17,0,"tablet"===l.className),n(e,25,0,"mobile"===l.className),n(e,34,0,a._28(e,34,0,n(e,37,0,a._19(e,0),l.src)))})}Object.defineProperty(e,"__esModule",{value:!0});var a=l("/oeL"),o=function(){},i=l("NQvX"),r=l("fc+i"),u=l("BkNc"),s=l("4G6E"),c=l("p5Ee"),f=l("fRKB"),_=function(){function n(n,e,l,t,a){this.subDomainService=n,this.cdr=e,this.titleService=l,this._builderService=t,this.router=a,this.className="desktop"}return n.prototype.ngOnInit=function(){var n=this,e=localStorage.getItem("calc"),l=localStorage.getItem("project");if(e&&"New"!=l&&"/preview-demo"!=this.router.url)this._builderService.getProject({_id:e,company:this.subDomainService.subDomain.sub_domain}).subscribe(function(e){if(!jQuery.isEmptyObject(e)){var l=JSON.stringify(e);""!=JSON.parse(l).favicon&&jQuery("#favicon").attr("href",JSON.parse(l).favicon),n.titleService.setTitle(JSON.parse(l).title.replace(/(<([^>]+)>)/gi,"")),localStorage.setItem("template",l),n.src=c.a.PROTOCOL+n.subDomainService.subDomain.sub_domain+"."+c.a.APP_EXTENSION+"/preview/previewFrame"}},function(n){});else{var t=localStorage.getItem("template");if(t||this.json){var a=this.json||JSON.parse(t);a.parentApp?localStorage.setItem("calc",a.parentApp):localStorage.setItem("calc",a._id),this.src=c.a.PROTOCOL+this.subDomainService.subDomain.sub_domain+"."+c.a.APP_EXTENSION+("/preview-demo"==this.router.url?"/preview-demo/previewFrame":"/preview/previewFrame"),jQuery("meta[name=description]").attr("content",a.description),document.title=a.title,""!=a.favicon&&jQuery("#favicon").attr("href",a.favicon)}}},n.prototype.ngAfterViewInit=function(){var n=this;this.viewOnWindowWidthBasis(),jQuery(window).resize(function(){n.viewOnWindowWidthBasis()})},n.prototype.viewOnWindowWidthBasis=function(){var n=jQuery(window).width();this.switchView(n>775?"desktop":n<=775&&n>375?"tablet":"mobile"),this.cdr.detectChanges()},n.prototype.onMouseEnter=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeIn(600)},n.prototype.onMouseLeave=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeOut(600)},n.prototype.switchView=function(n){this.className=n,window.resizeBy(600,400),window.moveTo((screen.width-600)/2,(screen.height-400)/2)},n}(),m=l("qbdv"),p=a._3({encapsulation:0,styles:["@font-face {\n        font-family: montserratregular;\n        font-style: normal;\n        font-weight: 400;\n        src: url(../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n    }\n    .responsive-menu[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color: #fb545b;\n    }\n    .responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n        font-family: 'montserratregular';\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .desktop[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n\n    .mobile[_ngcontent-%COMP%] {\n        width: 375px;\n        height: 570px;\n        margin: 1% auto;\n        height:570px;\n        border: 1px solid #dcdddf;\n    }\n\n    .tablet[_ngcontent-%COMP%] {\n        width: 775px;\n        height: 100%;\n        margin: 0 auto;\n        border: 1px solid #dcdddf;\n    }\n        @font-face {\n        font-family: 'Material Icons';\n        font-style: normal;\n        font-weight: 400;\n        src: url(MaterialIcons-Regular.eot);\n        src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../assets/fonts/materialIcons-Regular.woff) format('woff'), url(../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n      }\n        .material-icons[_ngcontent-%COMP%] {\n        font-family: 'Material Icons';\n        font-weight: 400;\n        font-style: normal;\n        display: inline-block;\n        line-height: 1;\n        text-transform: none;\n        letter-spacing: normal;\n        word-wrap: normal;\n        white-space: nowrap;\n        direction: ltr;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        font-feature-settings: 'liga'\n      }\n      .responsive-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ font-size:24px;}"],data:{}}),g=a._1("og-preview",_,function(n){return a._29(0,[(n()(),a._6(0,0,null,null,1,"og-preview",[],null,null,null,t,p)),a._4(1,4308992,null,0,_,[s.a,a.h,r.i,f.a,u.l],null,null)],function(n,e){n(e,1,0)},null)},{json:"json"},{},[]),d=l("Dhcz"),v=l("bm2B"),h=l("CPp0"),w=l("TAop"),b=l("xYmb"),O=l("4W9T"),y=l("bax3"),M=l("tuYp"),P=l("AbUC"),k=l("EXuL"),x=l("2fzf"),C=l("Zz6u"),j=l("QI4c"),N=l("8ew+"),S=l("bX6v"),I=l("lQET"),E=l("LHvf"),z=l("CIem"),A=l("u+Yp"),Q=l("yKf7"),R=l("P2MY"),T=l("OO7e"),X=l("p3MC"),B=l("sdIG"),D=l("baqF"),L=l("jf1K"),W=l("oU75"),J=l("qh+L"),F=l("Jbz/"),V=l("aHoK"),q=l("kBKr"),K=l("S5n1"),H=l("iXri"),U=l("2XlA"),Y=l("t93X"),G=l("Ncws"),Z=l("XD9W"),$=l("E60Q"),nn=l("fNnG"),en=l("RvqH"),ln=l("y8en"),tn=l("tWUy"),an=l("2Zaa"),on=l("ESzu"),rn=l("EUrk"),un=l("bbo3"),sn=l("yAek");l.d(e,"PreviewModuleNgFactory",function(){return cn});var cn=a._2(o,[],function(n){return a._17([a._18(512,a.j,a.X,[[8,[g,d.b]],[3,a.j],a.v]),a._18(4608,m.l,m.k,[a.s]),a._18(4608,v.E,v.E,[]),a._18(4608,h.c,h.c,[]),a._18(4608,h.h,h.b,[]),a._18(5120,h.k,h.l,[]),a._18(4608,h.j,h.j,[h.c,h.h,h.k]),a._18(4608,h.g,h.a,[]),a._18(5120,h.e,h.m,[h.j,h.g]),a._18(4608,v.e,v.e,[]),a._18(4608,w.a,w.a,[b.a,u.l,s.a,O.a,y.a]),a._18(4608,M.a,M.a,[]),a._18(4608,f.a,f.a,[h.e]),a._18(4608,P.a,P.a,[]),a._18(4608,k.a,k.a,[f.a,P.a,s.a]),a._18(4608,x.a,x.a,[h.e,k.a]),a._18(4608,C.a,C.a,[h.e]),a._18(4608,j.a,j.a,[]),a._18(4608,N.a,N.a,[h.e,k.a,O.a]),a._18(4608,S.a,S.a,[k.a]),a._18(4608,I.a,I.a,[k.a,N.a,f.a,S.a,x.a]),a._18(4608,E.a,E.a,[k.a,N.a,S.a,I.a]),a._18(4608,z.a,z.a,[k.a,I.a]),a._18(4608,A.a,A.a,[k.a]),a._18(4608,Q.a,Q.a,[k.a]),a._18(4608,R.a,R.a,[h.e,k.a,E.a]),a._18(4608,T.a,T.a,[k.a,f.a,X.a]),a._18(4608,B.a,B.a,[h.e]),a._18(4608,D.a,D.a,[k.a]),a._18(4608,L.a,L.a,[h.e,k.a]),a._18(512,m.b,m.b,[]),a._18(512,v.A,v.A,[]),a._18(512,v.k,v.k,[]),a._18(512,h.f,h.f,[]),a._18(512,v.w,v.w,[]),a._18(512,W.a,W.a,[]),a._18(512,u.o,u.o,[[2,u.t],[2,u.l]]),a._18(512,J.a,J.a,[]),a._18(512,F.a,F.a,[]),a._18(512,V.a,V.a,[]),a._18(512,q.a,q.a,[]),a._18(512,K.a,K.a,[]),a._18(512,H.a,H.a,[]),a._18(512,U.a,U.a,[]),a._18(512,Y.a,Y.a,[]),a._18(512,G.a,G.a,[]),a._18(512,Z.a,Z.a,[]),a._18(512,$.a,$.a,[]),a._18(512,nn.a,nn.a,[]),a._18(512,en.a,en.a,[]),a._18(512,ln.a,ln.a,[]),a._18(512,tn.a,tn.a,[]),a._18(512,an.a,an.a,[]),a._18(512,on.a,on.a,[]),a._18(512,rn.a,rn.a,[]),a._18(512,un.a,un.a,[]),a._18(512,o,o,[]),a._18(1024,u.j,function(){return[[{path:"",children:[{path:"",component:_},{path:"previewFrame",component:sn.a}]}]]},[])])})}});