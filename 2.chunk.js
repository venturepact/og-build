webpackJsonp([2],{nDQH:function(n,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("3j3K"),p=function(){},o=e("04dz"),l=e("Qbdm"),d=e("1u7h"),i=e("kZql"),m=e("5oXY"),r=function(){function n(n,a){this.subDomainService=n,this.route=a,this.pageType="full-page"}return n.prototype.ngOnInit=function(){var n=this;this.sub=this.route.params.subscribe(function(a){var e=a.type;e&&(n.pageType=e)}),this.src=i.a.PROTOCOL+this.subDomainService.subDomain.sub_domain+"."+i.a.APP_EXTENSION+"/preview/previewFrame";var a=localStorage.getItem("template");if(a){var e=JSON.parse(a);jQuery("meta[name=description]").attr("content",e.description),window.parent.document.title=e.title,""!=e.favicon&&jQuery("#favicon").attr("href",e.favicon)}},n.prototype.ngAfterViewInit=function(){var n=setInterval(function(){window.Intercom&&(window.Intercom("update",{app_current_page:"builder"}),window.Intercom("update",{app_current_page_url:window.location.href}),clearInterval(n))},1e3)},n}(),u=t["\u0275crt"]({encapsulation:0,styles:[".responsive-menu[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color: #fb5f66;\n    }\n    .responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .full-page[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n\n    .small-page[_ngcontent-%COMP%] {\n        width: 375px;\n        margin: 0 auto;\n        height: 50%;\n        border: 1px solid #dcdddf;\n    }"],data:{}});function c(n){return t["\u0275vid"](0,[t["\u0275pid"](0,o.a,[l.c]),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](2,0,null,null,5,"div",[["id","main-profile"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](4,0,null,null,2,"iframe",[["align","middle"]],[[2,"full-page",null],[2,"small-page",null],[8,"src",5]],null,null,null,null)),t["\u0275ppd"](5,1),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n    "]))],null,function(n,a){var e=a.component;n(a,4,0,"full-page"===e.pageType,"small-page"===e.pageType,t["\u0275unv"](a,4,2,n(a,5,0,t["\u0275nov"](a,0),e.src)))})}var g=t["\u0275ccf"]("og-sample-code",r,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"og-sample-code",[],null,null,null,c,u)),t["\u0275did"](1,4308992,null,0,r,[d.a,m.a],null,null)],function(n,a){n(a,1,0)},null)},{},{},[]),s=e("2Je8"),f=e("NVOs"),v=e("Sxe4"),h=e("KdFd"),O=e("3Hiw"),M=e("ZKJB"),_=e("1Pvm"),b=e("GWqO"),P=e("0cFa"),C=e("eVuS"),w=e("zgve"),x=e("ggBP"),y=e("mNdO"),F=e("AMM9"),I=e("S4ru"),R=e("DLM9"),N=e("+rT7"),S=e("ZoyP"),T=e("dvzT"),D=e("Nq0u"),j=e("8T+X"),X=e("mdAO"),z=e("DJ4y"),B=e("wpKH"),K=e("Iwv/"),L=e("kYuW"),k=e("yZq5"),q=e("PFzn"),A=e("IFCm"),J=e("SklM"),V=e("8j6V"),H=e("m9+S"),Q=e("37y0"),Z=e("W/Fx"),E=e("8jRX"),W=e("KNOL"),Y=e("bn6p"),G=e("qtYN"),U=e("BEnR"),$=e("XVuX"),nn=e("qXlo"),an=e("jdON"),en=e("LzcR"),tn=e("crrv"),pn=e("M3dY"),on=e("eUJh"),ln=e("1KVD"),dn=e("dlhZ"),mn=e("FBHK"),rn=e("Q1Hx"),un=e("pB35"),cn=e("6aku"),gn=e("cRIM"),sn=e("9TL8"),fn=e("7WP3"),vn=e("DXR4");e.d(a,"SampleCodeModuleNgFactory",function(){return hn});var hn=t["\u0275cmf"](p,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[g]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.n,s.m,[t.LOCALE_ID]),t["\u0275mpd"](4608,f["\u0275i"],f["\u0275i"],[]),t["\u0275mpd"](4608,f.FormBuilder,f.FormBuilder,[]),t["\u0275mpd"](4608,v.a,v.a,[h.c,O.a,M.a]),t["\u0275mpd"](4608,_.a,_.a,[]),t["\u0275mpd"](4608,b.a,b.a,[]),t["\u0275mpd"](4608,P.a,P.a,[]),t["\u0275mpd"](4608,C.a,C.a,[w.a,P.a,_.a,d.a,O.a]),t["\u0275mpd"](4608,x.a,x.a,[h.c,C.a]),t["\u0275mpd"](4608,y.a,y.a,[h.c]),t["\u0275mpd"](4608,F.a,F.a,[]),t["\u0275mpd"](4608,I.a,I.a,[h.c,C.a,O.a]),t["\u0275mpd"](4608,R.a,R.a,[C.a,_.a]),t["\u0275mpd"](4608,N.a,N.a,[C.a,I.a,w.a,R.a,x.a]),t["\u0275mpd"](4608,S.a,S.a,[C.a,I.a,R.a,N.a]),t["\u0275mpd"](4608,T.a,T.a,[C.a,N.a]),t["\u0275mpd"](4608,D.a,D.a,[C.a,_.a]),t["\u0275mpd"](4608,j.a,j.a,[C.a]),t["\u0275mpd"](4608,X.a,X.a,[h.c,C.a,I.a]),t["\u0275mpd"](4608,z.a,z.a,[h.c,C.a,S.a,I.a]),t["\u0275mpd"](4608,B.a,B.a,[C.a,t.ApplicationRef,N.a]),t["\u0275mpd"](4608,K.a,K.a,[C.a,w.a,L.a]),t["\u0275mpd"](4608,k.a,k.a,[h.c]),t["\u0275mpd"](4608,q.a,q.a,[C.a]),t["\u0275mpd"](4608,A.a,A.a,[h.c,C.a]),t["\u0275mpd"](4608,J.a,J.a,[C.a,I.a]),t["\u0275mpd"](512,s.b,s.b,[]),t["\u0275mpd"](512,f["\u0275ba"],f["\u0275ba"],[]),t["\u0275mpd"](512,f.FormsModule,f.FormsModule,[]),t["\u0275mpd"](512,f.ReactiveFormsModule,f.ReactiveFormsModule,[]),t["\u0275mpd"](512,V.a,V.a,[]),t["\u0275mpd"](512,m.o,m.o,[[2,m.t],[2,m.l]]),t["\u0275mpd"](512,H.a,H.a,[]),t["\u0275mpd"](512,Q.a,Q.a,[]),t["\u0275mpd"](512,Z.a,Z.a,[]),t["\u0275mpd"](512,E.a,E.a,[]),t["\u0275mpd"](512,W.a,W.a,[]),t["\u0275mpd"](512,Y.a,Y.a,[]),t["\u0275mpd"](512,G.a,G.a,[]),t["\u0275mpd"](512,U.a,U.a,[]),t["\u0275mpd"](512,$.a,$.a,[]),t["\u0275mpd"](512,nn.a,nn.a,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,en.a,en.a,[]),t["\u0275mpd"](512,tn.a,tn.a,[]),t["\u0275mpd"](512,pn.a,pn.a,[]),t["\u0275mpd"](512,on.a,on.a,[]),t["\u0275mpd"](512,ln.a,ln.a,[]),t["\u0275mpd"](512,dn.a,dn.a,[]),t["\u0275mpd"](512,mn.a,mn.a,[]),t["\u0275mpd"](512,rn.a,rn.a,[]),t["\u0275mpd"](512,un.a,un.a,[]),t["\u0275mpd"](512,cn.a,cn.a,[]),t["\u0275mpd"](512,gn.a,gn.a,[]),t["\u0275mpd"](512,sn.a,sn.a,[]),t["\u0275mpd"](512,fn.a,fn.a,[]),t["\u0275mpd"](512,vn.a,vn.a,[]),t["\u0275mpd"](512,p,p,[]),t["\u0275mpd"](1024,m.j,function(){return[[{path:"",children:[{path:":type",component:r}]}]]},[])])})}});