

//封装cookie
//添加cookie
function setCookie(name, value, expires, path){
	//name=value;expires=
	var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	
	//expires
	if (expires && expires instanceof Date){ //instanceof： 判断是否为日期对象
		cookieText += "; expires=" + expires;
	}
	
	//path
	if (path){
		cookieText += "; path=" + path;
	}
	//console.log(cookieText);
	
	//存储到浏览器， 保存cookie
	document.cookie = cookieText;
	
	return decodeURIComponent(document.cookie);
}

//获取cookie
//name1=zhangsan; name2=lisi; name3=wangwu
function getCookie(name){
	var str = decodeURIComponent(document.cookie);
	
	var arr = str.split("; "); //拆分 , arr = ['name1=zhangsan', 'name2=lisi', 'name3=wangwu']
	for (var i=0; i<arr.length; i++){
		var str1 = arr[i];  //'name2=lisi'
		var arr1 = str1.split("=");  //arr1 = ['name2', 'lisi']
		if (arr1[0] == name) {
			return arr1[1];
		}
	}
	return "";
}


//删除cookie
function removeCookie(name){
	//name2=; expires=
	document.cookie = encodeURIComponent(name) + "=; expires=" + new Date("2012-09-09");
	return decodeURIComponent(document.cookie);
}




