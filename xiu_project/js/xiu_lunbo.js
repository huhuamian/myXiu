$(function(){
	
	
		
	//先获取轮播图的数据
	$.get("json/xiu_lunbo.json", function(data){
		
		//console.log(data);   
		//console.log(11); 
		
		var arr = data;
		
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i];
			
			$("<li><a href='javascript:;'><img src="+ obj.img +" ></a></li>").appendTo("#list1");
			
			var li = $("<li></li>").appendTo("#list2");  
			
			if (i==0) {
				li.addClass("bgcolor");
			}
		}
		
		//轮播
		lunbotu();
	})
	
	//jq轮播图
	function lunbotu(){
		
		//jq轮播图  
		var list1 = $("#list1");
		var list2 = $("#list2");
		var li1 = $("#list1 li");
		var li2 = $("#list2 li");
		
		
		
		//复制第一张图到最后
		li1.first().clone(true).appendTo(list1);
		
		var size = $("#list1 li").size();    
		
		//console.log(size)
		var wd = parseInt(li1.css("width"))  
		
		list1.width(wd*size);
		
		//开启定时器
		var i = 0;
		var timer = setInterval(function(){
			i++;
			move();
		}, 2000);
		
		function move(){
			
			if (i < 0) {
				list1.css("left", -wd*(size-1));
				i = size-1;
			}
			
			if (i >= size){
				list1.css("left", 0);
				i = 1;
			}
			//console.log(i);
			list1.stop().animate({left:-i*wd}, 300);
			
			li2.eq(i).addClass("bgcolor").siblings().removeClass("bgcolor");
			if (i == size-1) {
				li2.eq(0).addClass("bgcolor").siblings().removeClass("bgcolor");
			}
		}
		
		//上一页
		$("#prev").click(function(){
			i--;
			move();
		})
		
		//下一页
		$("#next").click(function(){
			i++;
			move();
		})
		
		li2.mouseenter(function(){
			i = $(this).index();
			move();
		})
		
		$("#banner_inner").hover(function(){
			clearInterval(timer);
		}, 
		function(){
			timer = setInterval(function(){
				i++;
				move();
			}, 2000);
		})
	
		
		//轮播图上一章下一张图标显示
		
		$("#banner").mouseenter(function(){
	   	
	   	$(this).find("#prev, #next").show();
	   	
	   }).mouseleave(function(){
	   	
	   	$(this).find("#prev, #next").hide();
	   	
	   });
	
	}	  
		
}); 
