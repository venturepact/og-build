webpackJsonp([7],{"0EE0":function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("/oeL"),o=t("QfbG"),i=t("uEcE"),l=t("qbdv"),r=t("bm2B"),u=t("CPp0"),d=t("tuYp"),c=t("AbUC"),p=t("EXuL"),g=t("fRKB"),f=t("2fzf"),s=t("Zz6u"),m=t("QI4c"),b=t("8ew+"),_=t("bX6v"),v=t("LHvf"),h=t("lQET"),O=t("CIem"),P=t("u+Yp"),x=t("yKf7"),C=t("P2MY"),M=t("OO7e"),y=t("p3MC"),E=t("sdIG"),w=t("baqF"),N=t("oU75"),k=t("BkNc"),X=t("qh+L"),Q=t("aHoK"),T=t("kBKr"),B=t("iXri"),G=t("2XlA"),H=t("t93X"),I=t("Ncws"),L=t("XD9W"),S=t("fNnG"),Y=t("RvqH"),J=t("y8en"),j=t("bbo3"),q=t("HgYJ");t.d(a,"SampleCodeModuleNgFactory",function(){return z});var z=e.b(o.a,[],function(n){return e.c([e.d(512,e.e,e.f,[[8,[i.a]],[3,e.e],e.g]),e.d(4608,l.a,l.b,[e.h]),e.d(4608,r.a,r.a,[]),e.d(4608,u.b,u.b,[]),e.d(4608,u.c,u.d,[]),e.d(5120,u.e,u.f,[]),e.d(4608,u.g,u.g,[u.b,u.c,u.e]),e.d(4608,u.h,u.i,[]),e.d(5120,u.a,u.j,[u.g,u.h]),e.d(4608,r.b,r.b,[]),e.d(4608,d.a,d.a,[]),e.d(4608,c.a,c.a,[]),e.d(4608,p.a,p.a,[g.a,c.a]),e.d(4608,f.a,f.a,[u.a,p.a]),e.d(4608,s.a,s.a,[u.a]),e.d(4608,m.a,m.a,[]),e.d(4608,b.a,b.a,[u.a,p.a]),e.d(4608,_.a,_.a,[p.a]),e.d(4608,v.a,v.a,[p.a,b.a,_.a]),e.d(4608,h.a,h.a,[p.a,b.a,g.a,_.a]),e.d(4608,O.a,O.a,[p.a,h.a]),e.d(4608,P.a,P.a,[p.a]),e.d(4608,x.a,x.a,[p.a]),e.d(4608,C.a,C.a,[u.a,p.a,v.a]),e.d(4608,M.a,M.a,[p.a,g.a,y.a]),e.d(4608,E.a,E.a,[u.a]),e.d(4608,w.a,w.a,[p.a]),e.d(512,l.g,l.g,[]),e.d(512,r.c,r.c,[]),e.d(512,r.d,r.d,[]),e.d(512,u.k,u.k,[]),e.d(512,r.e,r.e,[]),e.d(512,N.a,N.a,[]),e.d(512,k.x,k.x,[[2,k.k],[2,k.c]]),e.d(512,X.a,X.a,[]),e.d(512,Q.a,Q.a,[]),e.d(512,T.a,T.a,[]),e.d(512,B.a,B.a,[]),e.d(512,G.a,G.a,[]),e.d(512,H.a,H.a,[]),e.d(512,I.a,I.a,[]),e.d(512,L.a,L.a,[]),e.d(512,S.a,S.a,[]),e.d(512,Y.a,Y.a,[]),e.d(512,J.a,J.a,[]),e.d(512,j.a,j.a,[]),e.d(512,o.a,o.a,[]),e.d(1024,k.t,function(){return[[{path:"",children:[{path:":type",component:q.a}]}]]},[])])})},HgYJ:function(n,a,t){"use strict";var e=t("4G6E"),o=t("p5Ee"),i=t("BkNc");t.d(a,"a",function(){return l});var l=function(){function n(n,a){this.subDomainService=n,this.route=a,this.pageType="full-page"}return n.prototype.ngOnInit=function(){var n=this;this.sub=this.route.params.subscribe(function(a){var t=a.type;t&&(n.pageType=t)}),this.src=o.a.PROTOCOL+this.subDomainService.subDomain.sub_domain+"."+o.a.APP_EXTENSION+"/preview/previewFrame";var a=localStorage.getItem("template");if(a){var t=JSON.parse(a);jQuery("meta[name=description]").attr("content",t.description),window.parent.document.title=t.title,""!=t.favicon&&jQuery("#favicon").attr("href",t.favicon)}},n.ctorParameters=function(){return[{type:e.a},{type:i.a}]},n}()},QfbG:function(n,a,t){"use strict";t.d(a,"a",function(){return e});var e=function(){function n(){}return n}()},uEcE:function(n,a,t){"use strict";function e(n){return i._20(0,[i._38(0,l.a,[r.b]),(n()(),i._23(null,["\n    "])),(n()(),i._21(0,null,null,5,"div",[["id","main-profile"]],null,null,null,null,null)),(n()(),i._23(null,["\n        "])),(n()(),i._21(0,null,null,2,"iframe",[["align","middle"]],[[2,"full-page",null],[2,"small-page",null],[8,"src",5]],null,null,null,null)),i._36(1),(n()(),i._23(null,["\n        "])),(n()(),i._23(null,["\n    "]))],null,function(n,a){var t=a.component;n(a,4,0,"full-page"===t.pageType,"small-page"===t.pageType,i._37(a,4,2,n(a,5,0,i._26(a,0),t.src)))})}function o(n){return i._20(0,[(n()(),i._21(0,null,null,1,"og-sample-code",[],null,null,null,e,g)),i._22(114688,null,0,u.a,[d.a,c.a],null,null)],function(n,a){n(a,1,0)},null)}var i=t("/oeL"),l=t("NQvX"),r=t("fc+i"),u=t("HgYJ"),d=t("4G6E"),c=t("BkNc");t.d(a,"a",function(){return f});var p=[".responsive-menu[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color: #fb545b;\n    }\n    .responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .full-page[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n\n    .small-page[_ngcontent-%COMP%] {\n        width: 375px;\n        margin: 0 auto;\n        height: 50%;\n        border: 1px solid #dcdddf;\n    }"],g=i._19({encapsulation:0,styles:p,data:{}}),f=i._28("og-sample-code",u.a,o,{},{},[])}});