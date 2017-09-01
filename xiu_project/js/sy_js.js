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
		
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp11img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp12img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp13img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp14img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp15img+"></a></li>").appendTo("#tp1");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp16img+"></a></li>").appendTo("#tp1");
		
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp21img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp22img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp23img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp24img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp25img+"></a></li>").appendTo("#tp2");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp26img+"></a></li>").appendTo("#tp2");
		
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp31img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp32img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp33img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp34img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp35img+"></a></li>").appendTo("#tp3");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tp36img+"></a></li>").appendTo("#tp3");
		
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tplast1+"></a></li>").appendTo(".tp-last");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tplast2+"></a></li>").appendTo(".tp-last");
		$("<li><a href='javasript:;'><img class='lazy' data-original="+obj.tplast3+"></a></li>").appendTo(".tp-last");
		
		lanJiaZai();
		
		
	})
	

	//尖货推荐商品的动画效果
	$(".tp").on("mouseenter","li", function() {
		$(this).addClass("bg");
	}).on("mouseleave","li", function() {
		$(this).removeClass("bg");
	})
 
	$(".tp-last").on("mouseenter","li", function() {
		$(this).addClass("bg");
	}).on("mouseleave","li", function() {
		$(this).removeClass("bg");
	})
 
 

	
	//热荐商品动态添加
	$.get("json/hotSell.json",function(data){
		lanJiaZai();
		var obj = data ;
		
		$("<li><img class='lazy' data-original="+obj.hotSell1img+" class='hotImg'/><p><img class='lazy' data-original="+obj.hotSell11img+" /></p></li>").appendTo(".ct");
		$("<li><img class='lazy' data-original="+obj.hotSell2img+" class='hotImg' /><p><img class='lazy' data-original="+obj.hotSell21img+" /></p></li>").appendTo(".ct");
		$("<li><img class='lazy' data-original="+obj.hotSell3img+" class='hotImg' /><p><img class='lazy' data-original="+obj.hotSell31img+" /></p></li>").appendTo(".ct");
		$("<li><img class='lazy' data-original="+obj.hotSell4img+" class='hotImg' /><p><img class='lazy' data-original="+obj.hotSell41img+" /></p></li>").appendTo(".ct");
		$("<li><img class='lazy' data-original="+obj.hotSell5img+" class='hotImg' /><p><img class='lazy' data-original="+obj.hotSell51img+" /></p></li>").appendTo(".ct");
		$("<li><img class='lazy' data-original="+obj.hotSell6img+" class='hotImg' /><p><img class='lazy' data-original="+obj.hotSell61img+" /></p></li>").appendTo(".ct");
		
		
		
	})
	
	//热荐专题商品的放大
	
	$(".ct ").on("mouseenter",".hotImg",function(){
		
		$(this).addClass("magnify") ;
		
	}).on("mouseleave",".hotImg",function(){
		
		$(this).removeClass("magnify") ;
		
	});
	

	//发现好货的商品添加
	
	$.get("json/merchandise.json", function(data){
		
		var add = data.els //获取对象中的els属性值就会得到一个由对象组成的数组
		
		for(var j = 0; j < add.length;j++){
			
			var xq = add[j]  //得到商品对象
			
			$("<li ><a href='javascript:;'><img class='lazy' data-original="+ xq.img+" /><span></span></a></li>").appendTo(".shping") ;
			
			
		}
		    
		lanJiaZai() ;
		
	})
	
	//发现好货阴影效果添加
	
//	$(".bt").on("mouseenter","li",function(){
//		
//		$(this).addClass(".hotSellBg");
//		
//	});
//	
//	$(".bt").on("mouseleave","li",function(){
//		
//		$(this).removeClass(".hotSellBg");
//		
//	});
	
	//发现好货图片移动效果
//	$(".bt").on("mouseenter","li",function(){
//		
//		$(this).position("top",-10);
//		
//	});
	
	
	
	
	//点击进入详情页
	
		var myArr = [] 
		
		$.get("json/merchandise.json",function(data){
			
			var arr = data.els
			
			myArr = arr;
			
		})
			
		//点击事件
		$(".shping").on("click", "li",function(){
			//console.log(111)
			//index
			var index = $(this).index();
			
			console.log(index);
			
			var id = myArr[index].id;
			
			location.href = "details.html?id="+id;
		})
		

		///////////////////////////侧边栏点击事件添加/////////////////////////
		
		$("#ceList li").eq(0).click(function(){
			
			//console.log("heheheh")  868
			
			$("html , body").stop().animate({"scrollTop":868},200) ;
			
		});
		
		///////////////////////////侧边栏返回顶部点击事件添加/////////////////////////
		
		$("#ceList li").eq(5).click(function(){
			
			//console.log("heheheh")  868
			
			$("html , body").stop().animate({"scrollTop":0},200) ;
			
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
		
	});
	
	/////////////////////////////////////懒加载功能添加//////////////////////////////
	
	function lanJiaZai(){
		
		$("img.lazy").lazyload({effect: "fadeIn"});
		
		$("img.lazy").lazyload({
		  placeholder : "img/grey.gif", //用图片提前占位
		    // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
		  effect: "fadeIn", // 载入使用何种效果
		    // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
		  threshold: 280, // 提前开始加载
		    // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
		  event: 'click',  // 事件触发时才加载
		    // event,值有click(点击),mouseover(鼠标划过),sporty(运动的),foobar(…).可以实现鼠标莫过或点击图片才开始加载,后两个值未测试…
		  container: $("#container"),  // 对某容器中的图片实现效果
		    // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
		  failurelimit : 10 // 图片排序混乱时
		     // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
		});
		
		
		
	}
	
	/////////////////////////////////////top 部分商品总数显示//////////////////////////////
	
	console.log($.cookie("totalNum"))
	var totalNum = $.cookie("totalNum") ? JSON.parse( $.cookie("totalNum") ) : [];
	
	$("#box .left").find("span").html(totalNum);
	
	
	
})










