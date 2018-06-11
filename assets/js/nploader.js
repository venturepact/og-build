var og_es = '';
var og_et = '';
var og_ee = '';
var og_etf = '';
var og_etv = '';
var og_ecd = '';
var og_p = '';
var iframe_id = '';
var og_start = false;

window.createCookie = function(a, b, c, domain = null) {
    var d = "";
    if (c) {
        var e = new Date;
        e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3), d = "; expires=" + e.toUTCString()
    }
    if (domain) {
        console.log('Domain .. ', domain);
        document.cookie = a + "=" + b + d + "; path=/" + "; domain=" + domain
    }
    else 
        document.cookie = a + "=" + b + d + "; path=/";
}, window.readCookie = function(a) {
    for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
        for (var e = c[d];
            " " == e.charAt(0);) e = e.substring(1, e.length);
        if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
    }
    return null
}

function initIframe(id) {
	var og_e = document.getElementById(id);
	var og_t = og_e.getAttribute('data-text');
	var og_u = og_e.getAttribute('data-url');
	var og_a = og_e.getAttribute('data-type');
	iframe_id = id;
	og_p = og_e.getAttribute('data-prop');
	og_es = og_e.getAttribute('data-embedScheduling');
	og_et = og_e.getAttribute('data-embedTimed');
	og_ee = og_e.getAttribute('data-embedExit');
	og_etf = og_e.getAttribute('data-embedTimeFormat');
	og_etv = og_e.getAttribute('data-embedTimeValue');
	og_ecd = og_e.getAttribute('data-embedCookieDays');
	var og_b = document.getElementsByTagName("body")[0];
	var iWidth = window.innerWidth;
	if (og_e.getAttribute('data-bgcolor')) var og_bc = og_e.getAttribute('data-bgcolor');
	else var og_bc = '#fb545b';
	if (og_e.getAttribute('data-textcolor')) var og_tc = og_e.getAttribute('data-textcolor');
	else {
		if (og_a == 'outgrow-b') var og_tc = '#ffffff';
		else var og_tc = '#fb545b'
	}
	if (og_p == 'outgrow-p') {
		if (iWidth > 786) {
			og_b.setAttribute("onresize", "ogOnLoadHandler();")
		}
		og_b.setAttribute("style", "margin:0;padding:0;")
	}
	if (og_e.getAttribute('data-embedBorderRadius')) var og_br = og_e.getAttribute('data-embedBorderRadius');
	else var og_br = '0';
	if (og_e.getAttribute('data-embedFontSize')) var og_fs = og_e.getAttribute('data-embedFontSize');
	else var og_fs = '12';
	if (og_e.getAttribute('data-isLDrawer')) var og_ld = og_e.getAttribute('data-isLDrawer');
	else var og_ld = 'false';
	var og_d_float = (og_ld == 'false')?'right':'left';
	var og_d_close = (og_ld == 'false')?'51%':'48%';
	var style = document.createElement("style");
	if (iWidth > 786) {
		var node = document.createTextNode("#close-popup-"+id+" {background: url(https://cdn.filestackcontent.com/D5NFRzLOSWCX666wU7Yx);position: fixed;top: 5% !important;right: 13%;width: 29px;height: 28px;cursor: pointer;z-index: 99999 !important;}#close-drawer-"+id+" {background: url(https://cdn.filestackcontent.com/D5NFRzLOSWCX666wU7Yx);position: fixed;top: 2% !important;right: "+og_d_close+";width: 29px;height: 28px;cursor: pointer;z-index: 99999 !important;}.hide {display: none;}.outgrow-b{font-size:" + og_fs + "px; border-radius:" + og_br + "px !important; color: " + og_tc + ";background: " + og_bc + ";margin-top: 0px;transition: all 0.5s ease;white-space: normal;word-break: break-word;border-radius: 0px;border: 1px solid transparent;text-decoration: none;padding: 5px 10px;line-height: 1.5;}.outgrow-l{font-size:" + og_fs + "px; color: " + og_tc + ";margin-top: 0px;transition: all 0.5s ease;white-space: normal;word-break: break-word;border-radius: 0px;text-decoration: none;padding: 5px 10px;line-height: 1.5;}")
	} else {
		var node = document.createTextNode("#close-popup-"+id+" {background: url(https://cdn.filestackcontent.com/HuaIq7oFQwWyS5Fjni9e);position: fixed;top: 4% !important;right: 2%;width: 29px;height: 28px;cursor: pointer;z-index: 99999 !important;}#close-drawer-"+id+" {background: url(https://cdn.filestackcontent.com/HuaIq7oFQwWyS5Fjni9e);position: fixed;top: 4% !important;right: 2%;width: 29px;height: 28px;cursor: pointer;z-index: 99999 !important;}.hide {display: none;}.outgrow-b{font-size:" + og_fs + "px; border-radius:" + og_br + "px !important; color: " + og_tc + ";background: " + og_bc + ";margin-top: 0px;transition: all 0.5s ease;white-space: normal;word-break: break-word;border-radius: 0px;border: 1px solid transparent;text-decoration: none;padding: 5px 10px;line-height: 1.5;}.outgrow-l{font-size:" + og_fs + "px; color: " + og_tc + ";margin-top: 0px;transition: all 0.5s ease;white-space: normal;word-break: break-word;border-radius: 0px;text-decoration: none;padding: 5px 10px;line-height: 1.5;}")
	}
	style.appendChild(node);
	og_e.appendChild(style);
	if (og_p == 'outgrow-d') {
		var overlayDiv = document.createElement("div");
		overlayDiv.setAttribute("id", "overlay-drawer-"+id);
		overlayDiv.setAttribute("class", "hide");
		var iframeDrawer = document.createElement("iframe");
		iframeDrawer.setAttribute("id", "drawer-iframe-"+id);
		iframeDrawer.setAttribute("class", "hide");
		iframeDrawer.setAttribute("style", "height:100vh; float:"+og_d_float+";");
		iframeDrawer.setAttribute("frameBorder", "0");
		iframeDrawer.setAttribute("src", og_u);
		if (iWidth > 786) {
			overlayDiv.setAttribute("style", "position:fixed; background:rgba(0,0,0,0.5); height:100vh; width:100%; text-align:left;top: 0;left: 0;z-index: 99999 !important;");
			iframeDrawer.setAttribute("width", "50%");
		} else {
			overlayDiv.setAttribute("style", "overflow: scroll !important;-webkit-overflow-scrolling:touch !important;position:fixed; background:rgba(0,0,0,0.5); height:100vh; width:100%; text-align:left;top: 0;left: 0;z-index: 99999 !important;");
			iframeDrawer.setAttribute("width", "100%")
		}
		var drawerclosebutton = document.createElement("a");
		drawerclosebutton.setAttribute("href", "javascript:;");
		drawerclosebutton.setAttribute("id", "close-drawer-"+id);
		drawerclosebutton.setAttribute("title", "Close");
		drawerclosebutton.setAttribute("class", "hide");
		drawerclosebutton.setAttribute("onclick", "toggleDrawer('"+id+"')");
		overlayDiv.appendChild(iframeDrawer);
		overlayDiv.appendChild(drawerclosebutton);
		og_b.appendChild(overlayDiv)
	}
	if (og_p == 'outgrow-p') {
		var popupCloseButton = document.createElement("a");
		popupCloseButton.setAttribute("href", "javascript:;");
		popupCloseButton.setAttribute("id", "close-popup-"+id);
		popupCloseButton.setAttribute("title", "Close");
		popupCloseButton.setAttribute("class", "hide");
		popupCloseButton.setAttribute("onclick", "togglePopup('"+id+"')");
		var overlayDiv = document.createElement("div");
		overlayDiv.setAttribute("id", "overlay-popup-"+id);
		overlayDiv.setAttribute("class", "hide");
		var iframePopup = document.createElement("iframe");
		iframePopup.setAttribute("id", "popup-iframe-"+id);
		iframePopup.setAttribute("class", "hide");
		iframePopup.setAttribute("frameBorder", "0");
		iframePopup.setAttribute("src", og_u);
		if (iWidth > 786) {
			iframePopup.setAttribute("width", "70%");
			iframePopup.setAttribute("onload", "ogOnLoadHandler('"+id+"');");
			iframePopup.setAttribute("style", "margin-top: 4%; box-shadow: 0 10px 25px rgba(0,0,0,.5);");
			overlayDiv.setAttribute("style", "position:fixed; background:rgba(0,0,0,0.5); height:100vh; width:100%; text-align:center;top: 0;left: 0;z-index: 99999 !important;")
		} else {
			iframePopup.setAttribute("height", "100%");
			iframePopup.setAttribute("width", "100%");
			overlayDiv.setAttribute("style", "overflow: scroll !important;-webkit-overflow-scrolling:touch !important;position:fixed; background:rgba(0,0,0,0.5); height:100vh; width:100%; text-align:center;top: 0;left: 0;z-index: 99999 !important;")
		}
		overlayDiv.appendChild(iframePopup);
		overlayDiv.appendChild(popupCloseButton);
		og_b.appendChild(overlayDiv)
	}
	var anchorTag = document.createElement("a");
	if (og_p == 'outgrow-p') {
		if (og_a == 'outgrow-b') anchorTag.setAttribute("class", "outgrow-b");
		else if (og_a == 'outgrow-l') anchorTag.setAttribute("class", "outgrow-l");
		anchorTag.setAttribute("href", "javascript:void(0);");
		anchorTag.setAttribute("onclick", "togglePopup('"+id+"')");
		node = document.createTextNode(og_t);
		anchorTag.appendChild(node)
	} else {
		if (og_a == 'outgrow-b') anchorTag.setAttribute("class", "outgrow-b");
		else if (og_a == 'outgrow-l') anchorTag.setAttribute("class", "outgrow-l");
		anchorTag.setAttribute("href", "javascript:void(0);");
		anchorTag.setAttribute("onclick", "toggleDrawer('"+id+"')");
		node = document.createTextNode(og_t);
		anchorTag.appendChild(node)
	}
	og_e.appendChild(anchorTag);
	if(og_es === 'true' && og_et === 'true') {
		var embedTimeout = 2500;
		if(og_etf === '1') {
			embedTimeout = Number(og_etv)*60*1000;
		} else if(og_etf === '0') {
			embedTimeout = Number(og_etv)*1000;
		}
		if (og_p == 'outgrow-p') {
			setTimeout(function(){ toggleSchedulePopup(iframe_id); }, embedTimeout);
		}
		if (og_p == 'outgrow-d') {
			setTimeout(function(){ toggleScheduleDrawer(iframe_id); }, embedTimeout);
		}
	}
}

function ogOnLoadHandler(id) {
	if(id) {
		var screenWidth = screen.width;
		var screenHeight = screen.height;
		var aspectRatio = screenWidth/screenHeight;
		var width = document.getElementById("popup-iframe-"+id).clientWidth;
		var height = width/aspectRatio;
		document.getElementById("popup-iframe-"+id).style.height = height+'px';
	}
}

function toggleDrawer(id) {
	og_start = true;
	if(!document.getElementById('drawer-iframe-'+id).classList.contains('hide')) document.getElementById('drawer-iframe-'+id).src=document.getElementById('drawer-iframe-'+id).src; document.getElementById("overlay-drawer-"+id).classList.toggle("hide"); document.getElementById("drawer-iframe-"+id).classList.toggle("hide");document.getElementById("close-drawer-"+id).classList.toggle("hide");
}

function togglePopup(id) {
	og_start = true;
	var iWidth = window.innerWidth;
	if(iWidth > 786){
		if(!document.getElementById('popup-iframe-'+id).classList.contains('hide')) document.getElementById('popup-iframe-'+id).src=document.getElementById('popup-iframe-'+id).src; document.getElementById("overlay-popup-"+id).classList.toggle("hide"); document.getElementById("popup-iframe-"+id).classList.toggle("hide");ogOnLoadHandler(id);document.getElementById("close-popup-"+id).classList.toggle("hide");
	} else {
		if(!document.getElementById('popup-iframe-'+id).classList.contains('hide')) document.getElementById('popup-iframe-'+id).src=document.getElementById('popup-iframe-'+id).src; document.getElementById("overlay-popup-"+id).classList.toggle("hide"); document.getElementById("popup-iframe-"+id).classList.toggle("hide");document.getElementById("close-popup-"+id).classList.toggle("hide");
	}
}

//New Code
var addEvent = function(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
};

addEvent(document, "mouseout", function(event) {
    event = event ? event : window.event;
    var from = event.relatedTarget || event.toElement;
    if ( (!from || from.nodeName == "HTML") && event.clientY <= 100 ) {
		if(og_es === 'true' && og_ee === 'true' && !og_start && !readCookie('og_embed_visited')) {
			createCookie('og_embed_visited', true, og_ecd);
			if (og_p == 'outgrow-p') {
				togglePopup(iframe_id);
			}
			if (og_p == 'outgrow-d') {
				toggleDrawer(iframe_id);
			}
		}
    }
});

function toggleScheduleDrawer(id) {
	if(!og_start && !readCookie('og_embed_visited')) {
		createCookie('og_embed_visited', true, og_ecd);
		og_start = true;
		if(!document.getElementById('drawer-iframe-'+id).classList.contains('hide')) document.getElementById('drawer-iframe-'+id).src=document.getElementById('drawer-iframe-'+id).src; document.getElementById("overlay-drawer-"+id).classList.toggle("hide"); document.getElementById("drawer-iframe-"+id).classList.toggle("hide");document.getElementById("close-drawer-"+id).classList.toggle("hide");
	}
}

function toggleSchedulePopup(id) {
	if(!og_start && !readCookie('og_embed_visited')) {
		createCookie('og_embed_visited', true, og_ecd);
		og_start = true;
		var iWidth = window.innerWidth;
		if(iWidth > 786){
			if(!document.getElementById('popup-iframe-'+id).classList.contains('hide')) document.getElementById('popup-iframe-'+id).src=document.getElementById('popup-iframe-'+id).src; document.getElementById("overlay-popup-"+id).classList.toggle("hide"); document.getElementById("popup-iframe-"+id).classList.toggle("hide");ogOnLoadHandler(id);document.getElementById("close-popup-"+id).classList.toggle("hide");
		} else {
			if(!document.getElementById('popup-iframe-'+id).classList.contains('hide')) document.getElementById('popup-iframe-'+id).src=document.getElementById('popup-iframe-'+id).src; document.getElementById("overlay-popup-"+id).classList.toggle("hide"); document.getElementById("popup-iframe-"+id).classList.toggle("hide");document.getElementById("close-popup-"+id).classList.toggle("hide");
		}
	}
}