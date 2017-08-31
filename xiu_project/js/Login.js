//密码登录
onload = function() {

	var oList1 = document.getElementById("list1");
	var aLi1 = oList1.children;
	var oTel1 = aLi1[0].children[0]; //手机号码登录框
	var oPwd = aLi1[1].children[0]
	var oBtn1 = document.getElementById("btn1") //登录按钮
	var oSh = document.getElementById("sh")

	//登陆成功的条件

	oBtn1.onclick = function() {
        //console.log("oooo");
		if(oSh.checked) {

			var username = getCookie('username1');
			var passworde = getCookie('password1');
//			username = oTel1.value;
//  		passworde = oPwd.value;
	
			oTel1.value = username ;
    		oPwd.value = passworde ;
    		
    	} 
	
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1/xiu_project/php/denglu.php", true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send("username="+oTel1.value+ "&password="+oPwd.value);
        //console.log(aInput[0].value,aInput[1].value,aInput[3].value)
		console.log("我是请求·")
        
        xhr.onreadystatechange = function(){
        	console.log(xhr.readyState,xhr.status)
            if (xhr.readyState==4 && xhr.status==200) {
                console.log(xhr.responseText);
            }
        }
        

		alert("恭喜登录成功");
		
		console.log("我是登陆")
		location.href = 'index.html' //跳转到首页
			
//		else {
//
//			alert("登录失败")
//
//		}
		
		

	}

}





