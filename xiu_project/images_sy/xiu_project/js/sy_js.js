//二级导航的js
$(function() {
	//二级导航的控制
	$(".nav_inner>ul>li").hover(function(){
		//console.log($(this).index())
		
		$(this).find(".nav_list").css("display","block")
		
	},
	
	function(){
				
		$(this).find(".nav_list").css("display","none")
		
	})


	//点击登录注册让跳转页面
	$(".dj").click(function() {

		window.location.href = "Login.html"
	})

	$(".nav_inner>ul>li").children().mouseenter(function() {
		$(this).parent().css("background", "#fff").css("border-right", "1px solid #D7D7D7").css("border-left", "1px solid #D7D7D7")

	})
	$(".nav_inner>ul>li").children().mouseleave(function() {
		$(this).parent().css("background", "#f7f7f7").css("border-right", "1px solid #f7f7f7").css("border-left", "1px solid #f7f7f7")

	})

	//最新活动的位移
	$(".wap_inner li").mouseenter(function() {
		$(this).children().addClass("move");
	});

	$(".wap_inner li").mouseleave(function() {
		$(this).children().removeClass("move");
	});
	
	
	//尖货推荐商品动态添加
	
	$.get("json/tp.json",function(data){
		
		var obj = data ;
		
		//console.log(data) ;
		
		$("<li><a href='javasript:;'><img src="+obj.tp11img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img src="+obj.tp12img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img src="+obj.tp13img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img src="+obj.tp14img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img src="+obj.tp15img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img src="+obj.tp16img+"></a></li>").appendTo("#tp1");
		
		$("<li><a href='javasript:;'><img src="+obj.tp21img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img src="+obj.tp22img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img src="+obj.tp23img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img src="+obj.tp24img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img src="+obj.tp25img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img src="+obj.tp26img+"></a></li>").appendTo("#tp2");
		
		$("<li><a href='javasript:;'><img src="+obj.tp31img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img src="+obj.tp32img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img src="+obj.tp33img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img src="+obj.tp34img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img src="+obj.tp35img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img src="+obj.tp36img+"></a></li>").appendTo("#tp3");
		
		$("<li><a href='javasript:;'><img src="+obj.tplast1+"></a></li>").appendTo(".tp-last");
		$("<li><a href='javasript:;'><img src="+obj.tplast2+"></a></li>").appendTo(".tp-last");
		$("<li><a href='javasript:;'><img src="+obj.tplast3+"></a></li>").appendTo(".tp-last");
		
		
		
		
	})
	

	//尖货推荐商品的动画效果
	$(".tp li ,.tp-last li").hover(function() {

		$(this).addClass("bg").siblings().removeClass("bg") ;
	});



	
	//热荐商品动态添加
	$.get("json/hotSell.json",function(data){
		
		var obj = data ;
		
		$("<li><img src="+obj.hotSell1img+" /><p><img src="+obj.hotSell11img+" /></p></li>").appendTo(".ct");
		$("<li><img src="+obj.hotSell2img+" /><p><img src="+obj.hotSell21img+" /></p></li>").appendTo(".ct");
		$("<li><img src="+obj.hotSell3img+" /><p><img src="+obj.hotSell31img+" /></p></li>").appendTo(".ct");
		$("<li><img src="+obj.hotSell4img+" /><p><img src="+obj.hotSell41img+" /></p></li>").appendTo(".ct");
		$("<li><img src="+obj.hotSell5img+" /><p><img src="+obj.hotSell51img+" /></p></li>").appendTo(".ct");
		$("<li><img src="+obj.hotSell6img+" /><p><img src="+obj.hotSell61img+" /></p></li>").appendTo(".ct");
		
	})
	
	//热荐专题商品的放大
	$(".ct li").mouseenter(function() {
		$(this).children("img").addClass("magnify")
	}).mouseleave(function() {
		$(this).children("img").removeClass("magnify");
	});
	
	
	

	//发现好货的商品边框
	
	$.get("json/merchandise.json", function(data){
		
		var add = data.els
		
		for(var j = 0; j < add.length;j++){
			
			var xq = add[j]
			
			$("<li ><a href='javascript:;'><img src="+ xq.img+" /><p></p></a></li>").appendTo(".shping") ;		
		}
		
		
	})
	
	//点击进入详情页
	
		var myArr = [] 
			
		//点击事件
		$(".shping").on("click", "li",function(){
			
			//index
			var index = $(this).index();
			console.log(index)
			
			var id =myArr[index].id;
			
			location.href = "details.html?id="+id;
		})
		$.get("json/merchandise.json",function(data){
			
			var arr = data.els
			
			myArr = arr;
			
		})




	$(".bt li").find("p").mouseenter(function() {
		$(this).css("border", "2px solid #d5d5d5");
	});

	$(".bt li").find("p").mouseleave(function() {
		$(this).css("border", "1px solid #efefef");
	});

	//登录注册   (短信登陆和  )
	$(".menu_top .pw").click(function() {
		$(this).addClass("active1");
		$(this).prev().removeClass("active1");
		$("#list1").css("display", "block");
		$(".pwd1").css("display", "none");
		$("#toset2").css("display","none")
		$("#toset1").css("display","none")

	});
	$(".menu_top .tl").click(function() {
		$(this).addClass("active1");
		$(this).next().removeClass("active1");
		$("#list1").css("display", "none");
		$(".pwd1").css("display", "block");
		

	});

	//短信登录框的效果
	$("#list").find(".tel").click(function() {

		$(this).css("border-color", "#7FBFE7");
		$(".tel_l").css("display", "block");
		$(".tel_lb").css("display", "none");
	})
	$("#list").find(".dx").click(function() {

		$(this).css("border-color", "#7FBFE7");
		$(".dx_l").css("display", "block");
		$(".dx_lb").css("display", "none");
	})
	//密码登陆框的效果
	$("#list1").find(".tel1").click(function() {

		$(this).css("border-color", "#7FBFE7");
		$(".tel_l").css("display", "block");
		$(".tel_lb").css("display", "none");
	});
	$("#list1").find(".pwd").click(function() {

		$(this).css("border-color", "#7FBFE7");
		$(".pwd_l").css("display", "block");
		$(".pwd_lb").css("display", "none");
	})
	//点击注册登录让回去短信登陆
	$(".zhuce").click(function() {

		$("#list").css("display", "block");
		$("#list1").css("display", "none");
		$(".pwd1").css("display", "block");
		$(".tl").addClass("active1")
		$(".pw").removeClass("active1")
	})

	//点击右下角的二维码让切换到扫码二维码登录
	$(".erweima").click(function() {

		$(".sm").css("display", "block");
		$(".menu").css("display", "none");
	})
	
	$(".denglu").click(function() {

		$(".sm").css("display", "block");
		$(".menu").css("display", "none");
	})
	
	$(".dn").click(function() {

		$(".sm").css("display", "none");
		$(".menu").css("display", "block");
	})
	
	$(".mdl").click(function() {

		$(".sm").css("display", "none");
		$(".menu").css("display", "block");
		$(".pw").addClass("active1");
		$(".tl").removeClass("active1");
		$("#list1").css("display", "block");
		$(".pwd1").css("display", "none");

	})
	
	//验证码框的效果
	$("#txt").click(function(){
		
		$(this).css("border-color","#7FBFE7")
		$(".yz_l").css("display", "block");
		$(".yz_lb").css("display", "none");
		
	})
	
	//点击两周内免费登录的按钮,让勾选的红色按钮显示
	$("#check1").click(function(){
		$(this).css("display","none");
		$("#check2").css("display","block")
		
	})
	$("#check2").click(function(){
		$(this).css("display","none");
		$("#check1").css("display","block")
		
	})
	$("#check3").click(function(){
		$(this).css("display","none");
		$("#check4").css("display","block")
		
	})
	$("#check4").click(function(){
		$(this).css("display","none");
		$("#check3").css("display","block")
		
	})

})