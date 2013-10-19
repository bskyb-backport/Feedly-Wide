// ==UserScript==
// @name          Feedly Wide - Glass
// @icon        http://i.imgur.com/5GV5Xy3.png
// @namespace     http://userstyles.org
// @description	  glassy, wider feeds
// @author        BskyB
// @version	2013.10.18
// @homepage      http://userstyles.org/styles/85329
// @require    http://usocheckup.dune.net/180154.js
// @downloadURL		https://userscripts.org/scripts/source/180154.user.js
// @updateURL		https://userscripts.org/scripts/source/180154.meta.js
// @include       http://feedly.com/*
// @include       https://feedly.com/*
// @include       http://*.feedly.com/*
// @include       https://*.feedly.com/*
// @run-at        document-start
// ==/UserScript==
(function() {
var css = "body {\nbackground-image:url(\"http://i.imgur.com/BOTE14z.jpg\") !important;\n    background-repeat: repeat !important;\n    background-position: center center !important;\n    background-attachment: fixed !important;\n    background-size: cover !important;\n}\n.u100Frame, #floatingBar, #aboutArea, #feedlyPageHeader {\nbackground:none repeat scroll 0% 0% rgba(16, 13, 26, 0.6) !important;\nbox-shadow: 0px 0px 2px 0px rgb(16, 13, 26), 0px 0px 8px 0px rgb(16, 13, 26) !important;\nborder:none !important;\ntransition: box-shadow 0.5s linear 0s !important;\n}\n.u100frame.selectedEntry {\nbackground:none repeat scroll 0% 0% rgba(16, 13, 26, 0.6) !important;\nbox-shadow: 0px 0px 2px 0px rgb(116, 113, 126), 0px 0px 8px 0px rgb(116, 113, 126) !important;\nborder:none !important;\n}\n.entryBody h4, .entryBody, .unread, h1, .metadata, .content p {\n    color: rgb(239, 239, 238) !important;\n}\n.area, .entryHolder {\nbackground-color: transparent !important;\n}\n#floatingBar h1 {\nborder:none !important;\n}\n.pageLayoutAction, .pageAction {\nbackground:none repeat scroll 0% 0% rgba(213, 217, 226, 0.8) !important;\nborder-top-left-radius: 50% !important;\nborder-top-right-radius: 50% !important;\nborder-bottom-right-radius: 50% !important;\nborder-bottom-left-radius: 50% !important;\n}\nh1 .hhint {\n    float: right !important;\n}\n.content br {\nmargin-top: -26px !important;\n}\n#mainArea {\nmin-width: 896px !important;\n}\n.entryHolder {\nmax-width: 900px !important;\n}\n.entryBody {\n    margin-top: -24px !important;\nmax-width: 9896px !important;\nwidth: 100% !important;\n}\n.u100Entry {\nwidth: 100% !important;\nmax-width: 9906px !important;\n    margin: 0px !important;\n}\n#feedlyFrame {\nwidth: 83% !important;\n}\n.title {\nmax-width: 9896px !important;\nwidth: 100% !important;\ntransition: color 0.5s linear 0s !important;\n}\n.infoBox, #sideArea, #systemBar, .bottomWikiWidget, .content div table, .websiteCallForAction {\ndisplay: none !important;\n}\n.u4Entry {\n    max-width: 9646px !important;\nwidth: 100% !important;\n}\n.summary {\n    font-size: 14px !important;\n}\n.u100Frame, .u100frame.selectedEntry {\n    margin-right: 10px !important;\n    margin-left: -25px !important;\n    padding: 10px !important;\n}\n#feedlyPart {\nmargin-top: -55px !important;\npadding-right: 0px !important;\nwidth:100% !important;\nfloat: none !important;\n}\n#section0_column0 {\nmargin-top: -20px !important;\nmax-width: 9896px !important;\nwidth:100% !important;\n}\n#feedlyPage {\nwidth: 100% !important;\n}\n.entryTitle {\nmax-width: 9896px !important;\nwidth: 100% !important;\n}\n#floatingBar {\nmax-width: 9896px !important;\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n    height: 24px !important;\nwidth: 82% !important;\n    margin-left: 5px !important;\n    margin-top: -10px !important;\n}\n#floatingTitleBar, .pageActionBar {\n    height: 24px !important;\n    padding-bottom: 0px !important;\n  \n}\n#feedlyPageHeader {\n    margin-top: 0px !important;\n    margin-right: 34px !important;\n}\n.bigMarkAsReadButton {\n    height: 100% !important;\n}\n    .content iframe {\nwidth: 100% !important;\n    margin-left: 0px !important;\n    margin-top: 0px !important;\n    margin: auto !important;\n    }\n.cell {\n    margin-top: 7px !important;\n}\n.content a img, .content img, .entryBody div img {\nmargin: auto !important;\nmax-width: 100% !important;\nwidth: auto !important;\nheight: auto !important;\n}\n.entryHeader a {\n    font-family: \"MuseoSans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n    font-weight: 300 !important;\n\ntext-rendering: optimizelegibility !important;\n}\n.content p {\nfont-family: Helvetica,Arial,sans-serif !important;\nfont-size: 15px !important;\nline-height: 18px !important;\n\nbottom: 0px !important;\n}\n#feedlyTabsHolder {\nleft: -10px !important;\n}\n#mainBar {\nmargin-left:130px !important;\nwidth: 99% !important;\n}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
