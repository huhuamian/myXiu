//注册的页面
onload = function() {

	var oList = document.getElementById("list");
	var aLi = oList.children;
	var oTel = aLi[1].children[0]; //手机号码登录框
	var oToset = document.getElementById("toset"); //请输入有效的手机号
	var oTel_l = aLi[1].children[2];
	var oToset1 = document.getElementById("toset1"); //手机号码的协议
	var oToset2 = document.getElementById("toset2"); //整个验证码的文本框
	var oChage_code = document.getElementById("chage_code") //换一换的标签
	var oAdd = document.getElementById("add") //获取验证码的文本框
	var oTxt = document.getElementById("txt") //验证码文本框
	var oCode1 = document.getElementById("code1") //验证码里面错的图片
	var oCode2 = document.getElementById("code2") //验证码里面正确的图片
	var oBtn = document.getElementById("btn") //登录按钮
	var oCheck1 = document.getElementById("check1") //两周内免费登录的check按钮
	var oSh = document.getElementById("sh")
	//定义成功登录的变量
	var temp1 = false; //手机号
	var temp2 = false; //验证码
	var temp3 = false; //短信验证

	//获取cookie里面的用户名和密码
	var username = getCookie('username1')
	var password = getCookie('password1')

	if(username && password) {

		oTel.value = username;

	}

	//手机号验证
	oTel.onblur = function() {
		if(/^((13[0-9])|(14[57])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test(this.value)) {
			oToset1.style.display = "block";
			oToset2.style.display = "block";
			oToset.style.display = "none";
			temp1 = true;
		} else {
			oToset.style.display = "block";
			temp1 = false;
		}

	}
	//验证码的获取
	oChage_code.onclick = function() {

		//验证码获取
		var arr = '';

		var str1 = [];
		for(var i = 0; i < 4; i++) {

			var str = parseInt(Math.random() * 62); //10+26+26 = 62，其中大写字母和小写出现几率为52/62,数字出现几率为10/62

			if(str >= 0 && str <= 9) {
				arr += str;
			} else if(str >= 10 && str <= 35) {
				arr += String.fromCharCode(str + 55);
			} else if(str >= 36 && str <= 62) {
				arr += String.fromCharCode(str + 61);
			}

			str1 = arr.split(',')
			console.log(arr)
		}
		oAdd.value = str1;
		console.log(add)

	}

	oTxt.onblur = function() {

		if(oAdd.value == oTxt.value) {

			oCode2.style.display = "block";
			temp2 = true;

		} else {
			oCode1.style.display = "block";
			oCode2.style.display = "none";
			temp2 = false;
		}

	}

	//注册成功的条件

	oBtn.onclick = function() {
        console.log("pppp")
		if(temp1 && temp2 && oSh.checked) {

			var usernames = oTel.value;
			var password = oTxt.value ;
			
			var date = new Date();
			date.setDate(date.getDate() + 14);

			setCookie('username1', usernames, date);
			setCookie('password1', password, date);
		
			
			
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "http://127.0.0.1/xiu_project/php/zhuce.php", true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send("username="+oTel.value+ "&password="+oTxt.value);
            //console.log(aInput[0].value,aInput[1].value,aInput[3].value)
            xhr.onreadystatechange = function(){
            	console.log(xhr.readyState,xhr.status)
                if (xhr.readyState==4 && xhr.status==200) { 
                    console.log(xhr.responseText);
                }
            }
			
			
			alert("恭喜注册成功") ;
			
			location.href = 'Login2.html' //跳转到登陆
			
		} else {

			alert("注册失败")

		}

	}

}