//获取对应元素的样式属性值
function getStyleAttr(obj, attr) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[attr];
	} else {
		return obj.currentStyle[attr];
	}
}

//运动函数
//let,top,width,height,opactiy, paddingLeft...

//animate(obj, {left:300, top:300, width:300}, fn)

function animate(obj, json, fn) {

	clearInterval(obj.timer); //清除旧定时器

	//开启新定时器
	obj.timer = setInterval(function() {

		var bStop = true; //是否可以停止定时器

		for(var attr in json) {
			var iTarget = json[attr];
			//iTarget: 目标值
			//attr： 属性名称

			//1, current
			var current;
			if(attr == "opacity") { //透明度
				current = parseFloat(getStyleAttr(obj, attr)) * 100;
				current = Math.round(current);
			} else { //left,top,width,height
				current = parseFloat(getStyleAttr(obj, attr));
				current = Math.round(current);
			}

			//2, speed  
			var speed = (iTarget - current) / 8;
			(400 - 393) / 8
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			//3, 临界值
			if(current != iTarget) {
				bStop = false; //当有一个属性的值未到达目标值， 则不能停止定时器
			}

			//4, 运动
			if(attr == "opacity") { //透明度
				obj.style[attr] = (current + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (current + speed) + ")";
			} else { //left,top,width,height..
				obj.style[attr] = current + speed + "px";
			}
		}

		//如果bStop为true
		if(bStop) {
			//console.log("停止运动");
			clearInterval(obj.timer); //停止运动， 清除定时器

			if(fn) {
				fn(); //在运动结束后，回调
			}
		}

	}, 30);

}

//animate(oBox, "left", 100, function(){} );
/*
function animate(obj, attr, iTarget, fn){
	
	clearInterval(obj.timer); //清除旧定时器
	
	//开启新定时器
	obj.timer = setInterval(function(){
		
		//1, current
		var current;
		if (attr == "opacity"){ //透明度
			current = parseFloat(getStyleAttr(obj, attr))*100;
			current = Math.round(current);
		}
		else { //left,top,width,height
			current = parseFloat(getStyleAttr(obj, attr));
			current = Math.round(current);
		}
		
		//2, speed  
		var speed = (iTarget-current)/8;    (400-393)/8
		speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
		
		//3, 临界值
		if (current == iTarget){
			console.log("停止运动");
			clearInterval(obj.timer); //停止运动， 清除定时器
			
			if (fn) {
				fn(); //在运动结束后，回调
			}
			
			return;
		}
		
		//4, 运动
		if (attr == "opacity"){ //透明度
			obj.style[attr] = (current+speed)/100;
			obj.style.filter = "alpha(opacity=" + (current+speed) + ")";
		}
		else { //left,top,width,height..
			obj.style[attr] = current+speed + "px";
		}
		
		
	}, 30);
	
}


*/