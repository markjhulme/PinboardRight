
chrome.contextMenus.create({"title": "&Post Link to Pinboard","contexts":["link"], "onclick": postlink});

function postlink(info, tab) {
  var q=info.linkUrl;
  var d=info.pageUrl;
  var p=info.linkUrl;
  void(open('https://pinboard.in/add?url='+encodeURIComponent(q)+'&description= Original link found at:  '+encodeURIComponent(d)+'&title='+encodeURIComponent(p),'Pinboard','toolbar=no,width=700,height=550'));
}

chrome.contextMenus.create({"title": "&Post Page to Pinboard","contexts":["page"], "onclick": postpin});

chrome.contextMenus.create({"title": "&Post Selection to Pinboard","contexts":["selection"], "onclick": postpin});

function postpin(info, tab) {
  var q=info.pageUrl;
  if(info.selectionText){
    var d=info.selectionText;
	}
	else{
	d='';
	};
  var p=tab.title;
  void(open('https://pinboard.in/add?url='+encodeURIComponent(q)+'&description='+encodeURIComponent(d)+'&title='+encodeURIComponent(p),'Pinboard','toolbar=no,width=700,height=550'));
}