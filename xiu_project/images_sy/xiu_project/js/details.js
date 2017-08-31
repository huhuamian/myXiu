//倒时器
$(function() {

	//默认倒计时总秒数
	//86400秒=1天
	var oDay = 86400;
	var num = parseInt(oDay * 10);
	var timer = null;

	timer = setInterval(function() {

		num--

		var d = parseInt(num / 60 / 60 / 24);
		var h = parseInt(num / 60 / 60) % 24;
		var m = parseInt(num / 60) % 60;
		var s = parseInt(num % 60);

		$(".d1").html(d < 10 ? "0" + d : d);
		$(".h1").html(h < 10 ? "0" + h : h);
		$(".m1").html(m < 10 ? "0" + m : m);
		$(".s1").html(s < 10 ? "0" + s : s);

	}, 1000)
	
	
	
	//法国大境的图片
	 
	//遍历下标的图片
	$(".small_main>ul>li").each(function(index,odd){
		$(".small_main>ul>li").eq(index).on("mouseenter",function(){
			//上边显示对应的图片
			$(".big_main_img>img").attr('src','images_xq/big.' + (index + 1)+'.jpg')
			$(".hide>img").attr('src','images_xq/big.' + (index + 1)+'.jpg')
			
		})
	})
	
	
	
	
	//当移入到上边的图片是让放大镜的图片显示
	$(".big_main_img>img").mousemove(function(){
		
		$(".hide").css("display","block")
	})
})