webpackJsonp([8,13],{1123:function(e,t,n){"use strict";var i=n(951),r=n(4),_=n(11),s=n(2),o=n(10),a=n(7),l=n(6),h=n(9),c=n(26),u=n(119),p=n(116),d=n(126),m=n(595),f=n(50),g=n(84),v=n(27),w=n(53),y=n(102),b=n(25);n.d(t,"a",function(){return P});var x=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},S=function(){function e(e,t,n,_){this._changed=!1,this.context=new i.a(e,t,n,_),this._expr_0=r.b}return e.prototype.ngOnDetach=function(e,t,n){},e.prototype.ngOnDestroy=function(){},e.prototype.check_json=function(e,t,n){(n||s.checkBinding(t,this._expr_0,e))&&(this._changed=!0,this.context.json=e,this._expr_0=e)},e.prototype.ngDoCheck=function(e,t,n){var i=this._changed;return this._changed=!1,n||0===e.numberOfChecks&&this.context.ngOnInit(),i},e.prototype.checkHost=function(e,t,n,i){},e.prototype.handleEvent=function(e,t){return!0},e.prototype.subscribe=function(e,t){this._eventHandler=t},e}(),O=s.createRenderComponentType("",0,o.b.None,[],{}),R=function(e){function t(n,i,r,_){e.call(this,t,O,a.a.HOST,n,i,r,_,l.b.CheckAlways)}return x(t,e),t.prototype.createInternal=function(e){return this._el_0=s.selectOrCreateRenderHostElement(this.renderer,"og-preview",s.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new I(this.viewUtils,this,0,this._el_0),this._PreviewComponent_0_3=new S(this.injectorGet(c.a,this.parentIndex),this.compView_0.ref,this.injectorGet(u.a,this.parentIndex),this.injectorGet(p.a,this.parentIndex)),this.compView_0.create(this._PreviewComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new h.a(0,this,this._el_0,this._PreviewComponent_0_3.context)},t.prototype.injectorGetInternal=function(e,t,n){return e===i.a&&0===t?this._PreviewComponent_0_3.context:n},t.prototype.detectChangesInternal=function(e){this._PreviewComponent_0_3.ngDoCheck(this,this._el_0,e),this.compView_0.internalDetectChanges(e),e||0===this.numberOfChecks&&this._PreviewComponent_0_3.context.ngAfterViewInit()},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t}(_.a),P=new h.b("og-preview",R,i.a),T=["@font-face {\n        font-family: montserratregular;\n        font-style: normal;\n        font-weight: 400;\n        src: url(../../../assets/fonts/montserrat-regular-webfont.eot) format(\"embedded-opentype\"), url(../../../assets/fonts/montserrat-regular-webfont.woff2) format(\"woff2\"), url(../../../assets/fonts/montserrat-regular-webfont.woff) format(\"woff\"), url(../../../assets/fonts/montserrat-regular-webfont.ttf) format(\"truetype\")\n    }\n    .responsive-menu[_ngcontent-%COMP%] {\n        background: rgba(0, 0, 0, 0.45);\n        color: #fff;\n        width: 320px;\n        text-align: center;\n        padding: 6px 6px;\n        position: absolute;\n        z-index: 999;\n        margin: 0 auto;\n        margin-left: auto;\n        margin-right: auto;\n        left: -3px;\n        right: 0;\n        top: 10px;\n        font-size: 13px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        padding: 0 5px;\n            float: left;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-top: -20px;\n        margin-left: 13px;\n        float: right;\n        margin-top: 3px;\n        color: rgba(255, 255, 255, 0.31);\n    }\n\n    iframe[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top: 0px;\n        border: none;\n    }\n    .active-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n        color: #fb545b;\n    }\n    .responsive-menu[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n        margin-right: 26px;\n        float: left;\n        margin-top: 7px;\n        margin-left: 26px;\n    }\n\n    .responsive-menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        float: left;\n        margin-top: 4px;\n    }\n\n    .desktop[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n\n    .mobile[_ngcontent-%COMP%] {\n        width: 375px;\n        height: 570px;\n        margin: 1% auto;\n        height:570px;\n        border: 1px solid #dcdddf;\n    }\n\n    .tablet[_ngcontent-%COMP%] {\n        width: 775px;\n        height: 100%;\n        margin: 0 auto;\n        border: 1px solid #dcdddf;\n    }\n        @font-face {\n        font-family: 'Material Icons';\n        font-style: normal;\n        font-weight: 400;\n        src: url(MaterialIcons-Regular.eot);\n        src: local('Material Icons'), local('materialIcons-Regular'), url(../assets/fonts/materialIcons-Regular.woff2) format('woff2'), url(../assets/fonts/materialIcons-Regular.woff) format('woff'), url(../assets/fonts/materialIcons-Regular.ttf) format('truetype')\n      }\n        .material-icons[_ngcontent-%COMP%] {\n        font-family: 'Material Icons';\n        font-weight: 400;\n        font-style: normal;\n        display: inline-block;\n        line-height: 1;\n        text-transform: none;\n        letter-spacing: normal;\n        word-wrap: normal;\n        white-space: nowrap;\n        direction: ltr;\n        -webkit-font-smoothing: antialiased;\n        text-rendering: optimizeLegibility;\n        -moz-osx-font-smoothing: grayscale;\n        font-feature-settings: 'liga'\n      }\n      .responsive-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{ font-size:24px;}"],C=s.createRenderComponentType("",0,o.b.Emulated,T,{}),I=function(e){function t(n,i,_,o){e.call(this,t,C,a.a.COMPONENT,n,i,_,o,l.b.CheckAlways),this._expr_37=r.b,this._expr_38=r.b,this._expr_39=r.b,this._expr_40=r.b,this._map_43=s.pureProxy3(function(e,t,n){return{desktop:e,tablet:t,mobile:n}})}return x(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);this._text_0=this.renderer.createText(t,"\n    ",null),this._el_1=s.createRenderElement(this.renderer,t,"div",new s.InlineArray2(2,"class","responsive-menu"),null),this._text_2=this.renderer.createText(this._el_1,"\n        ",null),this._el_3=s.createRenderElement(this.renderer,this._el_1,"span",new s.InlineArray2(2,"class","title"),null),this._text_4=this.renderer.createText(this._el_3,"Resize Template: ",null),this._text_5=this.renderer.createText(this._el_1,"\n        ",null),this._el_6=s.createRenderElement(this.renderer,this._el_1,"div",new s.InlineArray2(2,"class","icon-block"),null),this._text_7=this.renderer.createText(this._el_6,"\n            ",null),this._el_8=s.createRenderElement(this.renderer,this._el_6,"a",new s.InlineArray2(2,"href","javascript:void(0);"),null),this._text_9=this.renderer.createText(this._el_8,"\n                ",null),this._el_10=s.createRenderElement(this.renderer,this._el_8,"i",new s.InlineArray2(2,"class","material-icons"),null),this._text_11=this.renderer.createText(this._el_10,"desktop_mac",null),this._text_12=this.renderer.createText(this._el_8," ",null),this._el_13=s.createRenderElement(this.renderer,this._el_8,"span",s.EMPTY_INLINE_ARRAY,null),this._text_14=this.renderer.createText(this._el_13,"|",null),this._text_15=this.renderer.createText(this._el_6,"\n            ",null),this._el_16=s.createRenderElement(this.renderer,this._el_6,"a",new s.InlineArray2(2,"href","javascript:void(0);"),null),this._text_17=this.renderer.createText(this._el_16,"\n                ",null),this._el_18=s.createRenderElement(this.renderer,this._el_16,"i",new s.InlineArray2(2,"class","material-icons"),null),this._text_19=this.renderer.createText(this._el_18,"tablet_mac",null),this._el_20=s.createRenderElement(this.renderer,this._el_16,"span",s.EMPTY_INLINE_ARRAY,null),this._text_21=this.renderer.createText(this._el_20,"|",null),this._text_22=this.renderer.createText(this._el_16," ",null),this._text_23=this.renderer.createText(this._el_6,"\n            ",null),this._el_24=s.createRenderElement(this.renderer,this._el_6,"a",new s.InlineArray2(2,"href","javascript:void(0);"),null),this._text_25=this.renderer.createText(this._el_24,"\n                ",null),this._el_26=s.createRenderElement(this.renderer,this._el_24,"i",new s.InlineArray2(2,"class","material-icons"),null),this._text_27=this.renderer.createText(this._el_26,"smartphone",null),this._text_28=this.renderer.createText(this._el_6,"\n        ",null),this._text_29=this.renderer.createText(this._el_1,"\n    ",null),this._text_30=this.renderer.createText(t,"\n    ",null),this._el_31=s.createRenderElement(this.renderer,t,"div",new s.InlineArray2(2,"id","main-profile"),null),this._text_32=this.renderer.createText(this._el_31,"\n        ",null),this._el_33=s.createRenderElement(this.renderer,this._el_31,"iframe",new s.InlineArray4(4,"align","middle","id","mobile-iframe"),null),this._NgClass_33_3=new d.a(this.parentView.injectorGet(f.a,this.parentIndex),this.parentView.injectorGet(g.a,this.parentIndex),new v.a(this._el_33),this.renderer),this._text_34=this.renderer.createText(this._el_33,"\n        ",null),this._text_35=this.renderer.createText(this._el_31,"\n    ",null);var n=s.subscribeToRenderElement(this,this._el_1,new s.InlineArray2(2,"mouseenter",null),this.eventHandler(this.handleEvent_1)),i=s.subscribeToRenderElement(this,this._el_8,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_8)),r=s.subscribeToRenderElement(this,this._el_16,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_16)),_=s.subscribeToRenderElement(this,this._el_24,new s.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_24)),o=s.subscribeToRenderElement(this,this._el_33,new s.InlineArray4(4,"mouseenter",null,"mouseleave",null),this.eventHandler(this.handleEvent_33));return this._pipe_safeUrl_0=new m.a(this.parentView.injectorGet(w.b,this.parentIndex)),this._pipe_safeUrl_0_0=s.pureProxy1(this._pipe_safeUrl_0.transform.bind(this._pipe_safeUrl_0)),this.init(null,this.renderer.directRenderer?null:[this._text_0,this._el_1,this._text_2,this._el_3,this._text_4,this._text_5,this._el_6,this._text_7,this._el_8,this._text_9,this._el_10,this._text_11,this._text_12,this._el_13,this._text_14,this._text_15,this._el_16,this._text_17,this._el_18,this._text_19,this._el_20,this._text_21,this._text_22,this._text_23,this._el_24,this._text_25,this._el_26,this._text_27,this._text_28,this._text_29,this._text_30,this._el_31,this._text_32,this._el_33,this._text_34,this._text_35],[n,i,r,_,o]),null},t.prototype.injectorGetInternal=function(e,t,n){return e===y.a&&33<=t&&t<=34?this._NgClass_33_3.context:n},t.prototype.detectChangesInternal=function(e){var t=new r.c,n=this._map_43("desktop"===this.context.className,"tablet"===this.context.className,"mobile"===this.context.className);this._NgClass_33_3.check_ngClass(n,e,!1),this._NgClass_33_3.ngDoCheck(this,this._el_33,e);var i="desktop"===this.context.className;s.checkBinding(e,this._expr_37,i)&&(this.renderer.setElementClass(this._el_8,"active-view",i),this._expr_37=i);var _="tablet"===this.context.className;s.checkBinding(e,this._expr_38,_)&&(this.renderer.setElementClass(this._el_16,"active-view",_),this._expr_38=_);var o="mobile"===this.context.className;s.checkBinding(e,this._expr_39,o)&&(this.renderer.setElementClass(this._el_24,"active-view",o),this._expr_39=o),t.reset();var a=t.unwrap(s.castByValue(this._pipe_safeUrl_0_0,this._pipe_safeUrl_0.transform)(this.context.src));(t.hasWrappedValue||s.checkBinding(e,this._expr_40,a))&&(this.renderer.setElementProperty(this._el_33,"src",this.viewUtils.sanitizer.sanitize(b.b.RESOURCE_URL,a)),this._expr_40=a)},t.prototype.handleEvent_1=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("mouseenter"==e){n=this.context.onMouseEnter()!==!1&&n}return n},t.prototype.handleEvent_8=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("click"==e){n=this.context.switchView("desktop")!==!1&&n}return n},t.prototype.handleEvent_16=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("click"==e){n=this.context.switchView("tablet")!==!1&&n}return n},t.prototype.handleEvent_24=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("click"==e){n=this.context.switchView("mobile")!==!1&&n}return n},t.prototype.handleEvent_33=function(e,t){this.markPathToRootAsCheckOnce();var n=!0;if("mouseenter"==e){n=this.context.onMouseEnter()!==!1&&n}if("mouseleave"==e){n=this.context.onMouseLeave()!==!1&&n}return n},t}(_.a)},1157:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){function e(){}return e}()},805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(266),r=n(1157),_=n(464),s=n(466),o=n(467),a=n(468),l=n(585),h=n(268),c=n(588),u=n(591),p=n(600),d=n(601),m=n(599),f=n(598),g=n(602),v=n(171),w=n(117),y=n(229),b=n(172),x=n(267),S=n(230),O=n(74),R=n(116),P=n(5),T=n(157),C=n(231),I=n(14),M=n(51),E=n(68),j=n(62),k=n(77),N=n(98),B=n(97),A=n(173),H=n(1123),V=n(475),F=n(265),U=n(951),X=n(278),J=n(154),z=n(169),L=n(155);n.d(t,"PreviewModuleNgFactory",function(){return Q});var D=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},G=function(e){function t(t){e.call(this,t,[H.a,V.a],[])}return D(t,e),Object.defineProperty(t.prototype,"_NgLocalization_15",{get:function(){return null==this.__NgLocalization_15&&(this.__NgLocalization_15=new v.a(this.parent.get(F.a))),this.__NgLocalization_15},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RadioControlRegistry_16",{get:function(){return null==this.__RadioControlRegistry_16&&(this.__RadioControlRegistry_16=new w.a),this.__RadioControlRegistry_16},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserXhr_17",{get:function(){return null==this.__BrowserXhr_17&&(this.__BrowserXhr_17=new y.a),this.__BrowserXhr_17},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ResponseOptions_18",{get:function(){return null==this.__ResponseOptions_18&&(this.__ResponseOptions_18=new b.a),this.__ResponseOptions_18},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XSRFStrategy_19",{get:function(){return null==this.__XSRFStrategy_19&&(this.__XSRFStrategy_19=a.a()),this.__XSRFStrategy_19},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XHRBackend_20",{get:function(){return null==this.__XHRBackend_20&&(this.__XHRBackend_20=new x.a(this._BrowserXhr_17,this._ResponseOptions_18,this._XSRFStrategy_19)),this.__XHRBackend_20},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RequestOptions_21",{get:function(){return null==this.__RequestOptions_21&&(this.__RequestOptions_21=new S.a),this.__RequestOptions_21},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Http_22",{get:function(){return null==this.__Http_22&&(this.__Http_22=a.b(this._XHRBackend_20,this._RequestOptions_21)),this.__Http_22},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FormBuilder_23",{get:function(){return null==this.__FormBuilder_23&&(this.__FormBuilder_23=new O.a),this.__FormBuilder_23},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BuilderService_24",{get:function(){return null==this.__BuilderService_24&&(this.__BuilderService_24=new R.a(this._Http_22)),this.__BuilderService_24},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_JSONBuilder_25",{get:function(){return null==this.__JSONBuilder_25&&(this.__JSONBuilder_25=new P.a(this._BuilderService_24)),this.__JSONBuilder_25},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_UrlShortner_26",{get:function(){return null==this.__UrlShortner_26&&(this.__UrlShortner_26=new T.a(this._Http_22)),this.__UrlShortner_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_CustomValidator_27",{get:function(){return null==this.__CustomValidator_27&&(this.__CustomValidator_27=new C.a),this.__CustomValidator_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_AnalyticService_28",{get:function(){return null==this.__AnalyticService_28&&(this.__AnalyticService_28=new I.a(this._Http_22)),this.__AnalyticService_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ShareOutcomeService_29",{get:function(){return null==this.__ShareOutcomeService_29&&(this.__ShareOutcomeService_29=new M.a(this._JSONBuilder_25)),this.__ShareOutcomeService_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RecommendationService_30",{get:function(){return null==this.__RecommendationService_30&&(this.__RecommendationService_30=new E.a(this._JSONBuilder_25,this._AnalyticService_28,this._ShareOutcomeService_29)),this.__RecommendationService_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FormulaService_31",{get:function(){return null==this.__FormulaService_31&&(this.__FormulaService_31=new j.a(this._JSONBuilder_25,this._AnalyticService_28,this._BuilderService_24,this._ShareOutcomeService_29)),this.__FormulaService_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TemplateRendererService_32",{get:function(){return null==this.__TemplateRendererService_32&&(this.__TemplateRendererService_32=new k.a(this._JSONBuilder_25,this._FormulaService_31)),this.__TemplateRendererService_32},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TemplateValidatorService_33",{get:function(){return null==this.__TemplateValidatorService_33&&(this.__TemplateValidatorService_33=new N.a(this._JSONBuilder_25)),this.__TemplateValidatorService_33},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TemplateHttpService_34",{get:function(){return null==this.__TemplateHttpService_34&&(this.__TemplateHttpService_34=new B.a(this._Http_22)),this.__TemplateHttpService_34},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ThemingService_35",{get:function(){return null==this.__ThemingService_35&&(this.__ThemingService_35=new A.a(this._JSONBuilder_25)),this.__ThemingService_35},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ROUTES_36",{get:function(){return null==this.__ROUTES_36&&(this.__ROUTES_36=[[{path:"",children:[{path:"",component:U.a},{path:"previewFrame",component:X.a}]}]]),this.__ROUTES_36},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new _.a,this._InternalFormsSharedModule_1=new s.a,this._FormsModule_2=new o.a,this._HttpModule_3=new a.c,this._ReactiveFormsModule_4=new o.b,this._SharedModule_5=new l.a,this._RouterModule_6=new h.g(this.parent.get(h.h,null)),this._PipesModule_7=new c.a,this._ControlsModule_8=new u.a,this._OnePageSliderModule_9=new p.a,this._SoundCloudModule_10=new d.a,this._OnePageCardModule_11=new m.a,this._InlineTempModule_12=new f.a,this._TemplateModule_13=new g.a,this._PreviewModule_14=new r.a,this._PreviewModule_14},t.prototype.getInternal=function(e,t){return e===_.a?this._CommonModule_0:e===s.a?this._InternalFormsSharedModule_1:e===o.a?this._FormsModule_2:e===a.c?this._HttpModule_3:e===o.b?this._ReactiveFormsModule_4:e===l.a?this._SharedModule_5:e===h.g?this._RouterModule_6:e===c.a?this._PipesModule_7:e===u.a?this._ControlsModule_8:e===p.a?this._OnePageSliderModule_9:e===d.a?this._SoundCloudModule_10:e===m.a?this._OnePageCardModule_11:e===f.a?this._InlineTempModule_12:e===g.a?this._TemplateModule_13:e===r.a?this._PreviewModule_14:e===v.b?this._NgLocalization_15:e===w.a?this._RadioControlRegistry_16:e===y.a?this._BrowserXhr_17:e===b.b?this._ResponseOptions_18:e===J.a?this._XSRFStrategy_19:e===x.a?this._XHRBackend_20:e===S.b?this._RequestOptions_21:e===z.a?this._Http_22:e===O.a?this._FormBuilder_23:e===R.a?this._BuilderService_24:e===P.a?this._JSONBuilder_25:e===T.a?this._UrlShortner_26:e===C.a?this._CustomValidator_27:e===I.a?this._AnalyticService_28:e===M.a?this._ShareOutcomeService_29:e===E.a?this._RecommendationService_30:e===j.a?this._FormulaService_31:e===k.a?this._TemplateRendererService_32:e===N.a?this._TemplateValidatorService_33:e===B.a?this._TemplateHttpService_34:e===A.a?this._ThemingService_35:e===L.a?this._ROUTES_36:t},t.prototype.destroyInternal=function(){},t}(i.a),Q=new i.b(G,r.a)},951:function(e,t,n){"use strict";var i=n(1),r=n(26),_=n(37),s=n(116),o=n(85);n.d(t,"a",function(){return a});var a=function(){function e(e,t,n,i){this.subDomainService=e,this.cdr=t,this.titleService=n,this._builderService=i,this.className="desktop"}return e.prototype.ngOnInit=function(){var e=this,t=localStorage.getItem("calc"),n=localStorage.getItem("project");if(t&&"New"!=n)this._builderService.getProject({_id:t,company:this.subDomainService.subDomain.sub_domain}).subscribe(function(t){if(!jQuery.isEmptyObject(t)){var n=JSON.stringify(t);jQuery("#favicon").attr("href",JSON.parse(n).favicon),e.titleService.setTitle(JSON.parse(n).title.replace(/(<([^>]+)>)/gi,"")),localStorage.setItem("template",n),e.src=_.a.PROTOCOL+e.subDomainService.subDomain.sub_domain+"."+_.a.APP_EXTENSION+"/preview/previewFrame"}},function(e){});else{var i=localStorage.getItem("template");if(i||this.json){var r=this.json||JSON.parse(i);r.parentApp?localStorage.setItem("calc",r.parentApp):localStorage.setItem("calc",r._id),this.src=_.a.PROTOCOL+this.subDomainService.subDomain.sub_domain+"."+_.a.APP_EXTENSION+"/preview/previewFrame",jQuery("meta[name=description]").attr("content",r.description),document.title=r.title,jQuery("#favicon").attr("href",r.favicon)}}window.Intercom("update",{hide_default_launcher:!0})},e.prototype.ngAfterViewInit=function(){var e=this;this.viewOnWindowWidthBasis(),jQuery(window).resize(function(){e.viewOnWindowWidthBasis()})},e.prototype.viewOnWindowWidthBasis=function(){var e=jQuery(window).width();e>775?this.switchView("desktop"):e<=775&&e>375?this.switchView("tablet"):this.switchView("mobile"),this.cdr.detectChanges()},e.prototype.onMouseEnter=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeIn(600)},e.prototype.onMouseLeave=function(){"mobile"===this.className&&jQuery(".responsive-menu").fadeOut(600)},e.prototype.switchView=function(e){this.className=e;var t=600,n=400;window.resizeBy(t,n),window.moveTo((screen.width-t)/2,(screen.height-n)/2)},e.ctorParameters=function(){return[{type:r.a},{type:i.C},{type:o.c},{type:s.a}]},e}()}});