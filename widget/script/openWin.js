var $url='';

//弹出确认
function $confirm(txt,title,button,callback)
{
	if(!is_define(title))
	{
		var title="";
	}
	if(!is_define(txt))
	{
		var txt="";
	}
	api.confirm({
		title:title,
		msg:txt,
		buttons:button
	}, function(ret, err)
	{
		if(ret.buttonIndex==1)
		{
			if(is_define(callback[0]))
			{
				callback[0]();
			}
		}
		else
		{
			if(is_define(callback[1]))
			{
				callback[1]();
			}
		}
	});
}

//判断是否为空方法
function is_define(value) {
	if (value == null || value == "" || value == "undefined" || value == undefined || value == "null" || value == "(null)" || value == 'NULL' || typeof (value) == 'undefined') {
		return false;
	} else {
		value = value + "";
		value = value.replace(/\s/g, "");
		if (value == "") {
			return false;
		}
		return true;
	}
}

//打开窗口方法
function openWin(name, url, pageParam) {
	var systemType=api.systemType;
	if (is_define(pageParam)) {
		var pageParam = pageParam;
	} else {
		var pageParam = new Object();
	}
	//检查是否登陆

	api.openWin({
		name : name,
		url : url,
		pageParam : pageParam,
		vScrollBarEnabled : false,
		hScrollBarEnabled : false,
		scrollToTop : true,
		slidBackEnabled:true,
		allowEdit:false,
		useWKWebView:true,
		reload:true,
		animation : {
			type : (systemType=='ios') ? 'ripple' : 'push',
			subType : "from_right",
			duration : 150
		}
	});

}

//打开登录页面
function openPages(name, url, pageParam) {
	var systemType=api.systemType;
	if (is_define(pageParam)) {
		var pageParam = pageParam;
	} else {
		var pageParam = new Object();
	}

	api.openWin({
		name : name,
		url : url,
		pageParam : pageParam,
		vScrollBarEnabled : false,
		hScrollBarEnabled : false,
		scrollToTop : true,
		slidBackEnabled : false,
		allowEdit:false,
		useWKWebView:true,
		reload:true,
		animation : {
			type : (systemType=='ios') ? 'ripple' : 'push',
			subType : "from_right",
			duration : 180
		}
	});
}


//打开frame
function openFrame(name, url, x, y, w, h, bounces, reload, pageParam) {
	if (is_define(pageParam)) {
		var pageParam = pageParam;
	} else {
		var pageParam = new Object();
	}
	api.openFrame({
		name : name,
		url : url,
		rect : {
			x : x,
			y : y,
			w : w,
			h : h
		},
		bounces : bounces,
		reload : reload,
		pageParam : pageParam,
		vScrollBarEnabled : false,
		hScrollBarEnabled : false,
		allowEdit:true,
		useWKWebView:true

	});
}

//关闭Frame
function closeFrame(name){
	api.closeFrame({
		    name: name
		});

}

//关闭窗口
function closeWin() {
	api.closeWin();
}
//本地存储
//存入本地
function setPrefs(key,value){
	api.setPrefs({
		key:key,
		value:value
	});
}

//从本地取出
function getPrefs(key,callback){
	api.getPrefs({
	    key:key
    },function(ret,err){
    	callback(ret,err);
    });
}

//从本地删除
function rmPrefs(key){
	api.removePrefs({
	    key:key
    });
}

