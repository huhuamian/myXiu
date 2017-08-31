$(function(){
	
	refresh();
	
	function refresh(){
		
		//获取cookie中的数据
		//var arr = localStorage.cart ;
		var arr = localStorage.cart;
		if(arr){
			//刚进购物车有数据，或者进来后删除数据而无数据
			arr = JSON.parse(arr);
							
			//因为这里是局不刷新，所以在增加节点之前先清空旧节点
			$("#tbd").empty();

			//计算总价
			var total = 0 ;
			var totalNum = 0 ;
			
			if(arr.length > 0){
				//如果购物车中有商品则添加节点
				
				//添加节点
				for(var i=0 ; i< arr.length; i++){
					
					var obj = arr[i] ; //得到cookie当中的对象  
					
					//创建节点
					var tr = $("<tr></tr>").appendTo("#tbd");
					
					if(obj.checked){
						
						tr.append("<td><lable><input type='checkbox' checked='checked' class='check1' /></lable></td>") ;
						
					}else{
						
						tr.append("<td><lable><input type='checkbox' class='check1' /></lable></td>") ;
						
					}
					
					tr.append("<td><img src='"+obj.imagmin[0]+"' /><p class='tdTextLeft'>"+obj.brand+"<br>"+obj.titer+"<br>颜色 :牛仔色 尺码 : 28</p></td>") ;
					
					if(obj.originalPrice){
						
						tr.append("<td><span>"+obj.unit+obj.zxPrice+"</span><span >"+obj.unit+obj.originalPrice+"</span></td>") ;
					}else{
						tr.append("<td><span>"+obj.unit+obj.zxPrice+"</span><span ></span></td>") ;
					}
					
					
					var subtotal = obj.zxPrice*obj.num ;
					
					tr.append("<td><span>"+subtotal+"</span></td>") ;
					tr.append("<td id='goodsNum'><input class='sub' type='button' value='-' /><input class='num' type='text' value='"+obj.num+"' /><input class='sup' type='button' value='+' /></td>") ;
					tr.append("<td><a href='javascript:;'>移至收藏夹</a><br /><a href='javascript:;' class='delete'>删除</a></td>") ;
				
					//计算总价
					//如果选中则计算入总价
					if(obj.checked){
						
						total += obj.num * obj.zxPrice ;
						totalNum += obj.num ;
					}
				}
				

				//checked='checked'
				//$("#tbd").prepend("<tr><th><lable><input type='checkbox' checked='checked' id='allChecked' /> 全选</lable></th><th>商品</th><th>购买价(元)</th><th>小计(元)</th><th>数量</th><th>操作</th></tr>") ;
				//创建总价节点并显示总价
				var trLast = $("<tr id='lastTr' ></tr>").appendTo("#tbd") ;
				$("<td colspan='3' style='text-align: left;background: #e3e3e3;font-size:16px' class='total'>总价："+total+"</td>").appendTo(trLast);
				$("<td colspan='3' style='text-align: left;background: #e3e3e3;font-size:16px' '><a id='delectSelect'>删除选中</a></td>").appendTo(trLast);
				
				//购物袋商品数量显示
				
			}else{
			console.log("购物车中商品已删除完");
			$(".total").html(0) ;
			}
			
			
			
		}else{
			//刚进购物车没有数据
			console.log("购物车中无商品");
		}
		
		
		
	}
	
	
	
	
	
	//删除：点击删除删除该行商品
	$("#tbd").on("click",".delete",function(){
		
		var index = $(this).index("#tbd .delete") ;
		//console.log(index);
		
		//删除cookie中对应的商品
		//1.先获取cookie当中的数据
		//var arr = $.cookie("cart") ;
		var arr = localStorage.cart ;
		arr = JSON.parse(arr); //解析得到正常可用的数组
		arr.splice(index,1)//删除数组中对应的第index个元素
		
		//更改cookie当中的数据之后还要将数据存储到cookie当中
		
		//$.cookie("cart",JSON.stringify(arr),{expires:30}) ;
		localStorage.cart = JSON.stringify(arr) ;
		
		isAllChecked();
		refresh();
		
	});
	
	
	//商品增加 +
	$("#tbd").on("click",".sup",function(){
		
		//console.log("+") ;
		var index = $(this).index("#tbd .sup") ;
		
		var arr = localStorage.cart ;
		arr = JSON.parse(arr);
		var obj = arr[index] ;
		
		obj.num++ ;
		
		localStorage.cart = JSON.stringify(arr) ;
		refresh();
	})
	
	//商品减少 -
	$("#tbd").on("click",".sub",function(){
		
		//console.log("+") ;
		var index = $(this).index("#tbd .sub") ;
		
		var arr = localStorage.cart ;
		arr = JSON.parse(arr);
		var obj = arr[index] ;
		
		//判断数值范围
		if(obj.num > 1){
			obj.num -- ;
		}else{
			obj.num == 1 ;
		}
		
		localStorage.cart = JSON.stringify(arr) ;
		refresh();
		
	});
	
	
	//单行商品选中状态设定
	$("#tbd").on("click",".check1",function(){
		console.log("选中状态")
		
		var index = $(this).index("#tbd .check1");
		console.log(index)
		var arr = localStorage.cart ;
		arr = JSON.parse(arr) ;
		var obj = arr[index] ;
		
		console.log(obj )
		
		
		obj.checked = !obj.checked ;
		
		//$.cookie("cart",JSON.stringify(arr),{expires:30}) ;
		localStorage.cart = JSON.stringify(arr) ;
		
		isAllChecked();//判断是否全选
		
		refresh();//局部刷新
		
	});
	

	//全选功能
	$(".firstTr").on("click","#allChecked",function(){
		
		console.log($(this).prop("checked")) ;
		
		var arr =JSON.parse( localStorage.cart ) ;
		
		for(var i= 0; i<arr.length;i++){
			
			if( $(this).prop("checked") ){   
				arr[i].checked = true ;
				
			}else{  
				arr[i].checked = false ;
				
			}
			
		}
		
		//$.cookie("cart",JSON.stringify(arr),{expirse:30}) ; 
		localStorage.cart = JSON.stringify(arr) ;
		
		refresh();//局部刷新
		
	});
	
	isAllChecked();
	//封装一个检测是否全选的函数
	function isAllChecked(){
		
		//var arr = $.cookie("cart") ;
		var arr = localStorage.cart ;
		
		arr = JSON.parse(arr) ;
		
		var sum = 0 ;  
		for(var i = 0 ; i < arr.length ; i++){
			
			sum += arr[i].checked ; //如果选中则为true ， true则为1
			
		}
		
		if(sum == arr.length && arr.length != 0){
			
			//说明全选
			$("#allChecked").prop("checked",true);
			//console.log("是否全选")
		}else{
			//说明未全选
			$("#allChecked").prop("checked",false);
			
		}
		
		
	}
	
	
	//删除选中
	
	$("#tbd").on("click","#delectSelect",function(){
		
		var arr = JSON.parse(localStorage.cart) ;
		
		var newArr = [] ;
		for(var i = 0 ; i < arr.length ; i++){
			
			if(arr[i].checked == false){
				
				newArr.push( arr[i] ) ;
				
			}
			
		}
		
		//$.cookie("cart",JSON.stringify(newArr),{expirse:30}) ;
		localStorage.cart = JSON.stringify(newArr) ;
		
		refresh();
		
	});
	
	
	//
	
	
	
	
	
});
