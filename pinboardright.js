
var pinlink = chrome.contextMenus.create({"title": "&Post Link to Pinboard","contexts":["link"], "onclick": postpinlink});
function postpinlink(info, tab) {
  var u=info.pageUrl
  var l=info.linkUrl
//  var p=l(document.title)
//  var q=anchor.getAttribute(l)
  var t=info.linkUrl
//  if(t>0){t=info.selectionText;}else{t=info.linkUrl;}
  var posturl="https://pinboard.in/add?url=URLTEXT+&description=Original link found at:  FOUNDAT+&title=TTLTEXT";
  chrome.windows.create({"url":posturl.
     replace("URLTEXT", encodeURIComponent(l)).
     replace("FOUNDAT", encodeURIComponent(u)).
	 replace("TTLTEXT", encodeURIComponent(t)), "type":"popup", "height":350,"width":700});	 
}


var pinpage = chrome.contextMenus.create({"title": "&Post Page to Pinboard","contexts":["page"], "onclick": postpinpage});
function postpinpage(info, tab) {
  var u=info.pageUrl
  var t=tab.title
  var posturl="https://pinboard.in/add?url=URLTEXT+&title=TTLTEXT";
    chrome.windows.create({"url":posturl.
     replace("URLTEXT", encodeURIComponent(u)).
     replace("TTLTEXT", encodeURIComponent(t)), "type":"popup", "height":350,"width":700});
}


var pintext = chrome.contextMenus.create({"title": "&Post Selection to Pinboard","contexts":["selection"], "onclick": postpintext});
function postpintext(info, tab) {
  var u=info.pageUrl
  var t=tab.title
  var s=info.selectionText
  var posturl="https://pinboard.in/add?url=URLTEXT+&description=SELTEXT+&title=TTLTEXT";
  chrome.windows.create({"url":posturl.
     replace("URLTEXT", encodeURIComponent(u)).
     replace("TTLTEXT", encodeURIComponent(t)).
     replace("SELTEXT", encodeURIComponent(s)), "type":"popup", "height":350,"width":700});
}






//var readpage = chrome.contextMenus.create({"title": "&Read Later on Pinboard", "contexts":["page"], "onclick": postreadpage});
//function postreadpage(info, tab) {
//  var u=info.pageUrl
//  var t=tab.title
//  var posturl="https://pinboard.in/add?later=yes&noui=yes&jump=close&url=URLTEXT+&title=TTLTEXT";
//    chrome.windows.create({"url":posturl.
//     replace("URLTEXT", encodeURIComponent(u)).
//     replace("TTLTEXT", encodeURIComponent(t)), "type":"popup", "height":100,"width":100});
//}