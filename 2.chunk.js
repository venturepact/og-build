webpackJsonp([2],{"0EE0":function(n,a,t){"use strict";function e(n){return o._30(0,[o._22(0,_.a,[r.c]),(n()(),o._28(null,["\n    "])),(n()(),o._6(0,null,null,5,"div",[["id","main-profile"]],null,null,null,null,null)),(n()(),o._28(null,["\n        "])),(n()(),o._6(0,null,null,2,"iframe",[["align","middle"]],[[2,"full-page",null],[2,"small-page",null],[8,"src",5]],null,null,null,null)),o._24(1),(n()(),o._28(null,["\n        "])),(n()(),o._28(null,["\n    "]))],null,function(n,a){var t=a.component;n(a,4,0,"full-page"===t.pageType,"small-page"===t.pageType,o._29(a,4,2,n(a,5,0,o._20(a,0),t.src)))})}function l(n){return o._30(0,[(n()(),o._6(0,null,null,1,"og-sample-code",[],null,null,null,e,s)),o._4(114688,null,0,f,[u.a,c.a],null,null)],function(n,a){n(a,1,0)},null)}Object.defineProperty(a,"__esModule",{value:!0});var o=t("/oeL"),i=function(){function n(){}return n}(),_=t("NQvX"),r=t("fc+i"),u=t("4G6E"),p=t("p5Ee"),c=t("BkNc"),f=function(){function n(n,a){this.subDomainService=n,this.route=a,this.pageType="full-page"}return n.prototype.ngOnInit=function(){var n=this;this.sub=this.route.params.subscribe(function(a){var t=a.type;t&&(n.pageType=t)}),this.src=p.a.PROTOCOL+this.subDomainService.subDomain.sub_domain+"."+p.a.APP_EXTENSION+"/preview/previewFrame";var a=localStorage.getItem("template");if(a){var t=JSON.parse(a);jQuery("meta[name=description]").attr("content",t.description),window.parent.document.title=t.title,""!=t.favicon&&jQuery("#favicon").attr("href",t.favicon)}},n}(),g=[".responsive-menu[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color: #fb5f66;\n    }\n    .responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .full-page[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n\n    .small-page[_ngcontent-%COMP%] {\n        width: 375px;\n        margin: 0 auto;\n        height: 50%;\n        border: 1px solid #dcdddf;\n    }"],s=o._3({encapsulation:0,styles:g,data:{}}),m=o._1("og-sample-code",f,l,{},{},[]),d=t("qbdv"),h=t("bm2B"),v=t("CPp0"),b=t("TAop"),O=t("RAfS"),C=t("tuYp"),P=t("AbUC"),x=t("EXuL"),M=t("fRKB"),y=t("4W9T"),w=t("2fzf"),E=t("Zz6u"),j=t("QI4c"),S=t("8ew+"),T=t("bX6v"),X=t("lQET"),N=t("LHvf"),k=t("CIem"),I=t("u+Yp"),z=t("yKf7"),A=t("P2MY"),Q=t("OO7e"),B=t("p3MC"),G=t("sdIG"),K=t("baqF"),L=t("jf1K"),q=t("oU75"),D=t("qh+L"),R=t("Jbz/"),U=t("aHoK"),F=t("kBKr"),H=t("S5n1"),J=t("iXri"),W=t("2XlA"),Y=t("t93X"),Z=t("Ncws"),V=t("XD9W"),$=t("E60Q"),nn=t("fNnG"),an=t("RvqH"),tn=t("y8en"),en=t("tWUy"),ln=t("2Zaa"),on=t("AuBI"),_n=t("ESzu"),rn=t("EUrk"),un=t("bbo3");t.d(a,"SampleCodeModuleNgFactory",function(){return pn});var pn=o._2(i,[],function(n){return o._17([o._18(512,o.j,o.X,[[8,[m]],[3,o.j],o.v]),o._18(4608,d.m,d.l,[o.s]),o._18(4608,h.G,h.G,[]),o._18(4608,v.c,v.c,[]),o._18(4608,v.h,v.b,[]),o._18(5120,v.k,v.l,[]),o._18(4608,v.j,v.j,[v.c,v.h,v.k]),o._18(4608,v.g,v.a,[]),o._18(5120,v.e,v.m,[v.j,v.g]),o._18(4608,h.f,h.f,[]),o._18(4608,b.a,b.a,[v.e]),o._18(4608,O.a,O.a,[]),o._18(4608,C.a,C.a,[]),o._18(4608,P.a,P.a,[]),o._18(4608,x.a,x.a,[M.a,P.a,u.a,y.a]),o._18(4608,w.a,w.a,[v.e,x.a]),o._18(4608,E.a,E.a,[v.e]),o._18(4608,j.a,j.a,[]),o._18(4608,S.a,S.a,[v.e,x.a,y.a]),o._18(4608,T.a,T.a,[x.a,O.a]),o._18(4608,X.a,X.a,[x.a,S.a,M.a,T.a,w.a]),o._18(4608,N.a,N.a,[x.a,S.a,T.a,X.a]),o._18(4608,k.a,k.a,[x.a,X.a]),o._18(4608,I.a,I.a,[x.a,O.a]),o._18(4608,z.a,z.a,[x.a]),o._18(4608,A.a,A.a,[v.e,x.a,N.a]),o._18(4608,Q.a,Q.a,[x.a,M.a,B.a]),o._18(4608,G.a,G.a,[v.e]),o._18(4608,K.a,K.a,[x.a]),o._18(4608,L.a,L.a,[v.e,x.a]),o._18(512,d.b,d.b,[]),o._18(512,h.C,h.C,[]),o._18(512,h.m,h.m,[]),o._18(512,v.f,v.f,[]),o._18(512,h.y,h.y,[]),o._18(512,q.a,q.a,[]),o._18(512,c.o,c.o,[[2,c.t],[2,c.l]]),o._18(512,D.a,D.a,[]),o._18(512,R.a,R.a,[]),o._18(512,U.a,U.a,[]),o._18(512,F.a,F.a,[]),o._18(512,H.a,H.a,[]),o._18(512,J.a,J.a,[]),o._18(512,W.a,W.a,[]),o._18(512,Y.a,Y.a,[]),o._18(512,Z.a,Z.a,[]),o._18(512,V.a,V.a,[]),o._18(512,$.a,$.a,[]),o._18(512,nn.a,nn.a,[]),o._18(512,an.a,an.a,[]),o._18(512,tn.a,tn.a,[]),o._18(512,en.a,en.a,[]),o._18(512,ln.a,ln.a,[]),o._18(512,on.a,on.a,[]),o._18(512,_n.a,_n.a,[]),o._18(512,rn.a,rn.a,[]),o._18(512,un.a,un.a,[]),o._18(512,i,i,[]),o._18(1024,c.j,function(){return[[{path:"",children:[{path:":type",component:f}]}]]},[])])})}});