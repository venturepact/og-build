function initIframe(id) {
	var og_e = document.getElementById(id);
	var og_t = og_e.getAttribute('data-text');
	var og_u = og_e.getAttribute('data-url');
	var og_a = og_e.getAttribute('data-type');
	var og_p = og_e.getAttribute('data-prop');
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
	var style = document.createElement("style");
	if (iWidth > 786) {
		var node = document.createTextNode("#close-popup-"+id+" {background: url(https://cdn.filestackcontent.com/D5NFRzLOSWCX666wU7Yx);position: fixed;top: 5% !important;right: 13%;width: 29px;height: 28px;cursor: pointer;z-index: 99999 !important;}#close-drawer-"+id+" {background: url(https://cdn.filestackcontent.com/D5NFRzLOSWCX666wU7Yx);position: fixed;top: 2% !important;right: 48%;width: 29px;height: 28px;cursor: pointer;z-index: 99999 !important;}.hide {display: none;}.outgrow-b{color: " + og_tc + ";background: " + og_bc + ";margin-top: 0px;transition: all 0.5s ease;white-space: normal;word-break: break-word;border-radius: 0px;border: 1px solid #dae2e6;text-decoration: none;padding: 5px 10px;line-height: 1.5;}.outgrow-l{color: " + og_tc + ";margin-top: 0px;transition: all 0.5s ease;white-space: normal;word-break: break-word;border-radius: 0px;text-decoration: none;padding: 5px 10px;line-height: 1.5;}")
	} else {
		var node = document.createTextNode("#close-popup-"+id+" {background: url(https://cdn.filestackcontent.com/HuaIq7oFQwWyS5Fjni9e);position: fixed;top: 4% !important;right: 2%;width: 29px;height: 28px;cursor: pointer;z-index: 99999 !important;}#close-drawer-"+id+" {background: url(https://cdn.filestackcontent.com/HuaIq7oFQwWyS5Fjni9e);position: fixed;top: 4% !important;right: 2%;width: 29px;height: 28px;cursor: pointer;z-index: 99999 !important;}.hide {display: none;}.outgrow-b{color: " + og_tc + ";background: " + og_bc + ";margin-top: 0px;transition: all 0.5s ease;white-space: normal;word-break: break-word;border-radius: 0px;border: 1px solid #dae2e6;text-decoration: none;padding: 5px 10px;line-height: 1.5;}.outgrow-l{color: " + og_tc + ";margin-top: 0px;transition: all 0.5s ease;white-space: normal;word-break: break-word;border-radius: 0px;text-decoration: none;padding: 5px 10px;line-height: 1.5;}")
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
		iframeDrawer.setAttribute("style", "height:100vh;");
		iframeDrawer.setAttribute("frameBorder", "0");
		iframeDrawer.setAttribute("src", og_u);
		if (iWidth > 786) {
			overlayDiv.setAttribute("style", "position:fixed; background:rgba(0,0,0,0.5); height:100vh; width:100%; text-align:left;top: 0;left: 0;z-index: 99999 !important;");
			iframeDrawer.setAttribute("width", "50%")
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
}

function ogOnLoadHandler(id) {
	console.log("popup-iframe-"+id);
	var screenWidth = screen.width;
	var screenHeight = screen.height;
	var aspectRatio = screenWidth/screenHeight;
	var width = document.getElementById("popup-iframe-"+id).clientWidth;
	var height = width/aspectRatio;
	document.getElementById("popup-iframe-"+id).style.height = height+'px';
}

function toggleDrawer(id) {
	if(!document.getElementById('drawer-iframe-'+id).classList.contains('hide')) document.getElementById('drawer-iframe-'+id).src=document.getElementById('drawer-iframe-'+id).src; document.getElementById("overlay-drawer-"+id).classList.toggle("hide"); document.getElementById("drawer-iframe-"+id).classList.toggle("hide");document.getElementById("close-drawer-"+id).classList.toggle("hide");
}

function togglePopup(id) {
	var iWidth = window.innerWidth;
	if(iWidth > 786){
		if(!document.getElementById('popup-iframe-'+id).classList.contains('hide')) document.getElementById('popup-iframe-'+id).src=document.getElementById('popup-iframe-'+id).src; document.getElementById("overlay-popup-"+id).classList.toggle("hide"); document.getElementById("popup-iframe-"+id).classList.toggle("hide");ogOnLoadHandler(id);document.getElementById("close-popup-"+id).classList.toggle("hide");
	} else {
		if(!document.getElementById('popup-iframe-'+id).classList.contains('hide')) document.getElementById('popup-iframe-'+id).src=document.getElementById('popup-iframe-'+id).src; document.getElementById("overlay-popup-"+id).classList.toggle("hide"); document.getElementById("popup-iframe-"+id).classList.toggle("hide");document.getElementById("close-popup-"+id).classList.toggle("hide");
	}
}