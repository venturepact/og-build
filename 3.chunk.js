webpackJsonp([3],{"0EE0":function(n,a,t){"use strict";function e(n){return o._29(0,[o._21(0,_.a,[r.b]),(n()(),o._27(null,["\n    "])),(n()(),o._6(0,null,null,5,"div",[["id","main-profile"]],null,null,null,null,null)),(n()(),o._27(null,["\n        "])),(n()(),o._6(0,null,null,2,"iframe",[["align","middle"]],[[2,"full-page",null],[2,"small-page",null],[8,"src",5]],null,null,null,null)),o._23(1),(n()(),o._27(null,["\n        "])),(n()(),o._27(null,["\n    "]))],null,function(n,a){var t=a.component;n(a,4,0,"full-page"===t.pageType,"small-page"===t.pageType,o._28(a,4,2,n(a,5,0,o._19(a,0),t.src)))})}function l(n){return o._29(0,[(n()(),o._6(0,null,null,1,"og-sample-code",[],null,null,null,e,s)),o._4(114688,null,0,g,[u.a,c.a],null,null)],function(n,a){n(a,1,0)},null)}Object.defineProperty(a,"__esModule",{value:!0});var o=t("/oeL"),i=function(){function n(){}return n}(),_=t("NQvX"),r=t("fc+i"),u=t("4G6E"),p=t("p5Ee"),c=t("BkNc"),g=function(){function n(n,a){this.subDomainService=n,this.route=a,this.pageType="full-page"}return n.prototype.ngOnInit=function(){var n=this;this.sub=this.route.params.subscribe(function(a){var t=a.type;t&&(n.pageType=t)}),this.src=p.a.PROTOCOL+this.subDomainService.subDomain.sub_domain+"."+p.a.APP_EXTENSION+"/preview/previewFrame";var a=localStorage.getItem("template");if(a){var t=JSON.parse(a);jQuery("meta[name=description]").attr("content",t.description),window.parent.document.title=t.title,""!=t.favicon&&jQuery("#favicon").attr("href",t.favicon)}},n}(),f=[".responsive-menu[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color: #fb545b;\n    }\n    .responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .full-page[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n\n    .small-page[_ngcontent-%COMP%] {\n        width: 375px;\n        margin: 0 auto;\n        height: 50%;\n        border: 1px solid #dcdddf;\n    }"],s=o._3({encapsulation:0,styles:f,data:{}}),m=o._1("og-sample-code",g,l,{},{},[]),d=t("qbdv"),b=t("bm2B"),h=t("CPp0"),v=t("TAop"),O=t("xYmb"),x=t("4W9T"),C=t("bax3"),P=t("tuYp"),M=t("AbUC"),y=t("EXuL"),w=t("fRKB"),E=t("2fzf"),j=t("Zz6u"),k=t("QI4c"),T=t("8ew+"),X=t("bX6v"),N=t("lQET"),S=t("LHvf"),z=t("CIem"),A=t("u+Yp"),I=t("yKf7"),Q=t("P2MY"),K=t("OO7e"),L=t("p3MC"),q=t("sdIG"),B=t("baqF"),D=t("jf1K"),U=t("oU75"),Y=t("qh+L"),F=t("Jbz/"),G=t("aHoK"),H=t("kBKr"),J=t("S5n1"),R=t("iXri"),W=t("2XlA"),Z=t("t93X"),V=t("Ncws"),$=t("XD9W"),nn=t("E60Q"),an=t("fNnG"),tn=t("RvqH"),en=t("y8en"),ln=t("tWUy"),on=t("2Zaa"),_n=t("ESzu"),rn=t("EUrk"),un=t("bbo3");t.d(a,"SampleCodeModuleNgFactory",function(){return pn});var pn=o._2(i,[],function(n){return o._17([o._18(512,o.j,o.X,[[8,[m]],[3,o.j],o.v]),o._18(4608,d.l,d.k,[o.s]),o._18(4608,b.E,b.E,[]),o._18(4608,h.c,h.c,[]),o._18(4608,h.h,h.b,[]),o._18(5120,h.k,h.l,[]),o._18(4608,h.j,h.j,[h.c,h.h,h.k]),o._18(4608,h.g,h.a,[]),o._18(5120,h.e,h.m,[h.j,h.g]),o._18(4608,b.e,b.e,[]),o._18(4608,v.a,v.a,[O.a,c.l,u.a,x.a,C.a]),o._18(4608,P.a,P.a,[]),o._18(4608,M.a,M.a,[]),o._18(4608,y.a,y.a,[w.a,M.a,u.a]),o._18(4608,E.a,E.a,[h.e,y.a]),o._18(4608,j.a,j.a,[h.e]),o._18(4608,k.a,k.a,[]),o._18(4608,T.a,T.a,[h.e,y.a,x.a]),o._18(4608,X.a,X.a,[y.a]),o._18(4608,N.a,N.a,[y.a,T.a,w.a,X.a,E.a]),o._18(4608,S.a,S.a,[y.a,T.a,X.a,N.a]),o._18(4608,z.a,z.a,[y.a,N.a]),o._18(4608,A.a,A.a,[y.a]),o._18(4608,I.a,I.a,[y.a]),o._18(4608,Q.a,Q.a,[h.e,y.a,S.a]),o._18(4608,K.a,K.a,[y.a,w.a,L.a]),o._18(4608,q.a,q.a,[h.e]),o._18(4608,B.a,B.a,[y.a]),o._18(4608,D.a,D.a,[h.e,y.a]),o._18(512,d.b,d.b,[]),o._18(512,b.A,b.A,[]),o._18(512,b.k,b.k,[]),o._18(512,h.f,h.f,[]),o._18(512,b.w,b.w,[]),o._18(512,U.a,U.a,[]),o._18(512,c.o,c.o,[[2,c.t],[2,c.l]]),o._18(512,Y.a,Y.a,[]),o._18(512,F.a,F.a,[]),o._18(512,G.a,G.a,[]),o._18(512,H.a,H.a,[]),o._18(512,J.a,J.a,[]),o._18(512,R.a,R.a,[]),o._18(512,W.a,W.a,[]),o._18(512,Z.a,Z.a,[]),o._18(512,V.a,V.a,[]),o._18(512,$.a,$.a,[]),o._18(512,nn.a,nn.a,[]),o._18(512,an.a,an.a,[]),o._18(512,tn.a,tn.a,[]),o._18(512,en.a,en.a,[]),o._18(512,ln.a,ln.a,[]),o._18(512,on.a,on.a,[]),o._18(512,_n.a,_n.a,[]),o._18(512,rn.a,rn.a,[]),o._18(512,un.a,un.a,[]),o._18(512,i,i,[]),o._18(1024,c.j,function(){return[[{path:"",children:[{path:":type",component:g}]}]]},[])])})}});