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
	
	
	
	
	
	
	
	//获取主页传过来的get传值:id
	
	var params = location.search ;
	
	//console.log(params);
	var id = getParams(params,"id")
	//console.log(id) ;
	
	
	//得到指定的某个参数
    
    function getParams(params,id){
    	
    	params = params.substring(1) ; //get传值去掉问号
    	
    	var arr = params.split("&");
    	
    	for(var i = 0 ; i < arr.length ; i++){
    		
    		var str = arr[i] ;
    		var arr2 = str.split("=") ;
    		if(arr2[0] == id){
    			
    			return arr2[1] ;
    			
    		}
    		
    	}
    	
    	return "" ;
    	
    }
	
	
	//获取得id值之后再次请求json数据
	$.get("json/merchandise.json", function(data){
		
		var add = data.els //获取对象中的els属性值就会得到一个由对象组成的数组
		
		for(var j = 0; j < add.length;j++){
			
			var obj = add[j]  //得到商品对象
			
			if( obj.id == id ){
				
				//console.log(JSON.stringify(obj));
				createEle(obj);
				
				
			}
			
		}
		    
		
	})
	
	
	//在页面中动态添加相关节点
	
	function createEle(obj){
		
		//添加详情分类导航
		$("#xq_nave").append("<a href='#'>"+obj.max_from+"</a>  >") ;
		$("#xq_nave").append("<a href='#'>"+obj.from+"</a>  >") ;
		$("#xq_nave").append("<a href='#'>"+obj.type+"</a>  >") ;
		$("#xq_nave").append("<span>"+obj.titer+"</span>") ;
		
		
		/////////////////////////////////详情放大镜部分////////////////////////////////
	
	
		
		//添加放大镜小图
		var minImgArr = obj.imagmin ;
		//console.log(minImgArr);
		//console.log(typeof minImgArr);
		
		for(var k = 0 ; k < minImgArr.length ; k++){
			//console.log(222)
			//console.log(minImgArr[k])
			var ul = $(".small_main ul") ;  
			$("<li><a href='#'><img src="+minImgArr[k]+" /></a></li>").appendTo(ul);     
			
		}
		
		//中图、大图区域默认显示图
			var middleImgArr = obj.imagmidle ;
			//console.log(middleImgArr)
			
			$(".big_main_img").css("background-image","url("+middleImgArr[0]+")") ;
			
			var bigImgArr = obj.imgmax ;
			$("#bigImg").css("background-image","url("+bigImgArr[0]+")") ;
		
		
		//给放大镜小图添加鼠标移入事件并获取对应图片下标
		
		$(".small_main").on("mouseenter","li",function(){
			
			var index = $(this).index();
			//console.log(index) ;
			
			//中图区域添加对应图片
			
			var middleImgArr = obj.imagmidle ;
			//console.log(middleImgArr)
			
			$(".big_main_img").css("background-image","url("+middleImgArr[index]+")") ;
			
			//大图区域添加对应图片
			var bigImgArr = obj.imgmax ;
			$("#bigImg").css("background-image","url("+bigImgArr[index]+")") ;
			
			
			
		});
		
		
		/////////////////////////////////详情页标题////////////////////////////////
		
		$(".top_title").prepend("<h4>"+obj.titer+" <span style='color:#F08B16'>[ 限时9折 ]</span></h4>") ;
		
		
		/////////////////////////////////详情页商品品牌和商品编号////////////////////////////////
		
		$("#goodsIfo").append(" <a href='#' style='border-bottom: 1px solid #646464;color:#646464'>"+obj.brand+"</a> ");
		$("#goodsIfo").append("<a href='#' style='color:#005BA1;margin-left:10px;border-bottom: 1px solid #005BA1;'>已有17061人评论</a>");
		$("#goodsIfo").append(" <i style='float:right;color:#646464;font-size:12px;font-style: normal;'>商品编号："+obj.serial_number+"</i> ");
		
		/////////////////////////////////详情页商品价格////////////////////////////////
		
		$(".coll").append("<span>"+obj.unit+obj.zxPrice+"</span>") ;
		
		if(obj.originalPrice){
			$(".zx").append("<i>走秀价:</i><i style='text-decoration：line-through'>"+obj.unit+obj.originalPrice+"</i>") ; 
		}else{
			$(".zx").append("<i style='text-decoration：line-through'></i>") ;
		}
		
		
		
		
		/////////////////////////////////详情页发货地信息////////////////////////////////
		
		$(".place").append("<span>"+obj.site+"</span>") ;
		$(".place").append("<span>"+obj.delivery_time+"</span>") ;

		/////////////////////////////////详情页商品颜色信息添加////////////////////////////////

		var colorArr = obj.color ;
		//console.log(colorArr);
		
		for(var a = 0 ; a < colorArr.length ; a++){
			
			$("#xq_color").append("<li><a href='javascript:;' class='goodColor' >"+colorArr[a]+"</a></li>") ;
			
		}
		
		//鼠标移入事件添加
		$("#xq_color a").eq(0).addClass("xqcolor checkBg");
		
		$("#xq_color").on("click","a",function(){ 
			
			$(this).addClass("xqcolor checkBg").parent().siblings().find(".goodColor").removeClass("xqcolor checkBg") ;
		
		});
		
		
		//鼠标点击事件添加
		
			var chooseColor = obj.color[0] ;
			
			//console.log(typeof chooseColor) ;
			
			obj.myChooseColor = chooseColor ;

		
		
		$("#xq_color").on("click","a",function(){
			//console.log($(this));
			var colorIndex = $(this).index("#xq_color a");
			//console.log(colorIndex)
			//console.log( obj.color[colorIndex])
			
			$(this).addClass("checkBg").parent().siblings().find("a").removeClass("checkBg") ;
			
			chooseColor = obj.color[colorIndex] ;
			
			//console.log(typeof chooseColor) ;
			
			obj.myChooseColor = chooseColor ;
			//obj.myChooseColor = "111" ;
			
			//console.log(obj.myChooseColor) ;
			
			
			
		});
			
		

		/////////////////////////////////详情页商品尺寸信息添加////////////////////////////////
		
		var sizeArr = obj.size ;
		
		
		
		for(var b = 0 ; b < sizeArr.length ; b++){
			
			$("#xq_size").append("<li><a href='javascript:;' class='goodColor'>"+sizeArr[b]+"</a></li>");
			
			
			$("#xq_size a").eq(0).addClass("xqcolor checkBg") ;
			
			//点击事件
			
			var chooseSize = obj.size[0] ;
			
			obj.myChooseSize = chooseSize ;
			
			
			$("#xq_size").on("click","a",function(){
				
				$(this).addClass("xqcolor checkBg").parent().siblings().find("a").removeClass("xqcolor checkBg");
				
				var sizeIndex = $(this).index("#xq_size a");
				
				chooseSize = obj.size[sizeIndex] ;
				
				obj.myChooseSize = chooseSize ;
				
				console.log(obj);
				
				
//				localStorage.myChooseSize = JSON.stringify({"sizeCheck":chooseSize}) ;
//				
//				console.log( JSON.parse( localStorage.myChooseSize ).sizeCheck );
			
				
			})
			
			
			
		/////////////////////////////////吸顶效果价格添加////////////////////////////////
			
			$(".show").find("span").html(obj.zxPrice);
			
			
			//鼠标点击事件添加
			
			$("#xq_size a").eq(0).addClass("checkBg"); //第一个添加默认样式
			
			$("#xq_size").on("click","a",function(){
				//console.log($(this));
				
				$(this).addClass("checkBg ,xqcolor").parent().siblings().find("a").removeClass("checkBg ,xqcolor") ;
				
			});
			
			
			bagNum();  
			
		}
		
		
		//给加入购物车按钮添加点击事件
		
		//$(".buy").on("click","#buy_btn2",function(){
		$(".buy #buy_btn2 , .show a").click(function(){
			
		
			//将当前商品对象添加到cookie 购物车
			
			console.log(obj);
			var goodsArr = localStorage.cart ? JSON.parse( localStorage.cart ) : [] ;
			
			var isExst = false ; //表示购物车中不存在相同商品
			for(var g = 0 ; g < goodsArr.length ; g++){
				
				if(goodsArr[g].id == obj.id){
					
					goodsArr[g].num++ ; //数量加1
					isExst = true ;//存在相同的
					
				}
				
			}
			
			if(isExst == false){
				
				obj.num = 1 ;
				obj.checked = true ; //表示默认选中
				
//				checkSize = 0 ;
//				checkColor = 0 ;
				goodsArr.push(obj);
			
			}
			
			
			
			//获取cookie数据 ；
			//$.cookie("cart", JSON.stringify( goodsArr ), {expires:30});
			localStorage.cart = JSON.stringify(goodsArr)
			
			//console.log( $.cookie("cart") ) ;
			
			bagNum();
			
			
//			//购物袋背景动画效果
			
			$("#ceList #goodBag").stop().animate({"backgroundPositionX":"-70" },600).animate({"backgroundPositionX":"0" }) ;
			
		});
		
		
		
		//////////////////////////////点击添加购物车产生飞特效////////////////////		
		
		var offset = $("#goodBag span").offset();  //结束的地方的元素
		$("#buy_btn2 , .show a").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
			var addcar = $(".small_main");
			var img = addcar.find('img').eq(0).attr('src');
			
			var flyer = $('<img class="u-flyer" src="'+img+'">');
			flyer.fly({
				//开始位置
				start: {
					left: event.clientX,
					top: event.clientY
				},
				//结束位置
				end: {
					left: offset.left,
					top: offset.top,
					width: 0,
					height: 0
				},
				//结束后
				onEnd: function(){
					console.log("结束");
					flyer.remove();
				}
			});
		});
			
		
		
		
		
		
		//立即购买按钮点击事件添加
		
		$("#buy_btn1").click(function(){
			
			location.href = "myCart.html" ;
			
			
		});
		
		
		function bagNum(){
			
			//购物袋商品数量显示
			//var bagNumArr = JSON.parse($.cookie("cart")) ;
			var bagNumArr = localStorage.cart ? JSON.parse(localStorage.cart) : [] ;
			
			var bagNum = 0 ;
			for(var l =0 ; l < bagNumArr.length ; l++){
				
				bagNum += bagNumArr[l].num ;
				
			}
				//显示商品总数量
			$("#ceList").find("span").html( bagNum ) ;
			
			$("#box .left ").find("span").html(bagNum) ;
			
			$.cookie("totalNum",JSON.stringify(bagNum),{expires:30}) ;
			
		}
		//console.log($.cookie("totalNum"))
		
		
		
	}
	
	
	///////////////////////////////////放大镜特效///////////////////////////////////
	
	//1.等比公式
	//中区域width / 中图width = 大区域width / 大图width
	$("#middleArea").width( $(".hide").width() / $("#bigImg").width() * $(".big_main_img").width()   ) ;
	$("#middleArea").height( $(".hide").height() / $("#bigImg").height() * $(".big_main_img").height()   ) ;
	//console.log(aawidth)
	//2.放大倍数
	//scale = 大图width / 中图width
	var scale = $("#bigImg").width() / $(".big_main_img").width() ;
	
	//在中图中移动
	$("#middleArea ").hide();
	$(".big_main_img").mousemove(function(e){
		
		$("#middleArea , .hide").show();
		
		var x = e.pageX - $(".big_main_img").offset().left - $("#middleArea").width()/2 ;
		var y = e.pageY - $(".big_main_img").offset().top - $("#middleArea").height()/2 ;
		
		//移动边界判定
		if(x < 0 ){
			
			x = 0 ;
			
		}else if( x > $(".big_main_img").width() - $("#middleArea").width() ){
			
			x = $(".big_main_img").width() - $("#middleArea").width() ;
			
		}
		
		if(y < 0 ){
			
			y = 0 ;
			
		}else if( y > $(".big_main_img").height() - $("#middleArea").height() ){
			
			y = $(".big_main_img").height() - $("#middleArea").height() ;
			
		}
		
		
		//中区域移动
		$("#middleArea").css({left:x , top:y}) ;
		
		//大区域移动
		$("#bigImg").css({left:-scale*x , top:-scale*y});
		
		
	}).mouseleave(function(){
		
		$("#middleArea , .hide").hide();
		
	})
	
	

	///////////////////////侧边栏关闭按钮功能添加///////////////////////
	
	$("#close").click(function(){
		
		$("#ceNav").hide();		
		
	});
	
	
	
	//////////////////////////////////////////吸顶效果////////////////////////////////////////////////////
	
	

	
	var wapTop = $("#wap").offset().top ;
	
	$(window).scroll(function(){
		
		var scrolltop = $(window).scrollTop();
		
		//console.log(scrolltop)
		
		if(scrolltop >= wapTop){
			
			$("#wap").css({position:"fixed",top:0});
			
		}else{
			
			$("#wap").css({position:"static"});
			
		}
		
		
		//二维码显示隐藏
			$("#erweima").hide();
		if( scrolltop >= 638){
			$("#erweima").show();
		}else{
			$("#erweima").hide();
		}
		
		
		
	});
	
	////////////////////////////////////////吸顶效果区域选项卡切换/////////////////////////
	
	$(".lib").find("li").mouseenter(function(){  
		
		var index = $(this).index();
		//console.log(index);
		$(this).find("a").addClass("active11").parent().siblings().find("a").removeClass("active11");
		
		$(".img_box ").find("img").eq(index).addClass("boxImg").siblings().removeClass("boxImg");  
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})