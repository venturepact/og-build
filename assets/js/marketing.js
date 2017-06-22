_linkedin_data_partner_id = "35384";
(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();

//Hotjar Tracking Code for https:outgrow.co
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:326902,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');



// Webengage
// var webengage; !function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="feedback survey notification".split(z),c="options render clear abort".split(z),p="Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i<l.length;i++)o(r,[l[i]]);for(i=0;i<a.length;i++){for(r[a[i]]={},s=0;s<c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s<p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i<u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");

// Inrobar
// var _intro_bar = window._intro_bar || {};(function() {var i,e;i=document.createElement("script"), i.type='text/javascript';i.async=1, i.src="//cdn.introbar.com/js/v1.js", e=document.getElementsByTagName("script")[0], e.parentNode.insertBefore(i,e);})();

// var opti = document.createElement('script');
// opti.setAttribute('src', 'https://cdn.optimizely.com/js/7042601109.js');
// document.getElementsByTagName('body')[0].append(opti);

urla = window.location.href;
if (urla.toLowerCase().indexOf("outgrow.co") < 0) { //For .us and local
	//console.log('Got in if');
	var trackerProp = {
		'ga':"UA-82638968-1",
		'kissmetrics':"41ec14671b03954fde573bdbeb2ec11956b53ce7",
		'mixpanel':"b8eb7ea3ffaf8755389d0ddd034c0db4"
	};
}

if (
	urla.toLowerCase().indexOf("outgrow.co") >= 0
) { //For .co
	//console.log('Got in else');
	var trackerProp = {
		'ga':"UA-85018378-1",
		'kissmetrics':"0a75a54b2fbeb2fefd728e55b0dc6bff06580cb8",
		'mixpanel':"4e92645e14d7116f935f2e594d52fcd5",
		'leaddyno':"41c6592b3fbd4a29945c14f3e766a12a1d796246",
		'webengage':"~15ba1d98c",
		'pixel': "1616934098622761",
		'introbar': "58200c9b25e70",
		'quora': '4985afc6bd6c447d8ceb3b1d6051f981'
	};
	var fbNoScript = document.createElement('noscript');
	var fbImgPixel = document.createElement('img');
	fbImgPixel.setAttribute('height', 1);
	fbImgPixel.setAttribute('width', 1);
	fbImgPixel.setAttribute('style', 'display:none');
	fbImgPixel.setAttribute('src', 'https://www.facebook.com/tr?id=1616934098622761&ev=PageView&noscript=1');
	fbNoScript.appendChild(fbImgPixel);
	document.getElementsByTagName('body')[0].append(fbNoScript);

	if (!window.fbq) {
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', trackerProp.pixel);
	}
	fbq('track', 'PageView');
	fbq('track', 'ViewContent');
	//_intro_bar.account_id = trackerProp.introbar;.

	if (!window.qp) {
		!function(q,e,v,n,t,s){if(q.qp) return; n=q.qp=function(){n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);}; n.queue=[];t=document.createElement(e);t.async=!0;t.src=v; s=document.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);}(window, 'script', 'https://a.quora.com/qevents.js');
		qp('init', trackerProp.quora);
	}
	qp('track', 'ViewContent');
}

// Mixpanel
//
// (function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments,0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);mixpanel.init(trackerProp.mixpanel);
//
// var _kmq = _kmq || [];
// var _kmk = _kmk || trackerProp.kissmetrics;
// function _kms(u){
//   setTimeout(function(){
// 	var d = document, f = d.getElementsByTagName('script')[0],
// 	s = d.createElement('script');
// 	s.type = 'text/javascript'; s.async = true; s.src = u;
// 	f.parentNode.insertBefore(s, f);
//   }, 1);
// }
// _kms('//i.kissmetrics.com/i.js');
// _kms('//scripts.kissmetrics.com/' + _kmk + '.2.js');
