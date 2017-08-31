//密码登录
onload = function() {

	var oList1 = document.getElementById("list1");
	var aLi1 = oList1.children;
	var oTel1 = aLi1[0].children[0]; //手机号码登录框
	var oPwd = aLi1[1].children[0]
	var oBtn1 = document.getElementById("btn1") //登录按钮
	var oSh = document.getElementById("sh")

	var temp4 = false; //验证码
	var temp5 = false; //短信验证

	//获取cookie里面的用户名和密码
	var username = getCookie('username1')
	var password = getCookie('password1')

	if(username && password) {

		oTel1.value = username;
		oPwd.value = password;
	}

	//手机号码/邮箱/用户名登录
	oTel1.onblur = function() {
		if(/^((13[0-9])|(14[57])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/ || /^(\w)+(\.\w)*@(\w)+((\.\w+)+)$/ || /^[A-Za-z_]\w{5,14}$/.test(this.value)) {

			temp4 = true;
		} else {
			temp4 = false;
		}

	}

	//密码验证

	oPwd.onblur = function() {
		if(/^.{5,18}$/.test(this.value)) {

			temp5 = true;
		} else {
			temp5 = false;
		}

	}

	//登陆成功的条件

	oBtn1.onclick = function() {
        console.log("oooo")
		if(temp4 && temp5 && oSh.checked) {

			var usernames = oTel1.value;
			var passwords = oPwd.value

			var date = new Date();
			date.setDate(date.getDate() + 14);

			setCookie('username1', usernames, date);
			setCookie('password1', passwords, date);

			alert("恭喜登录成功")
			location.href = 'index.html' //跳转到首页
		} else {

			alert("登录失败")

		}

	}

}