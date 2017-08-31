	//创建一个Ajax
	function CreateXHR(){
		
		if(window.XMLHttpRequest){
			
			return new XMLHttpRequest();
		}
		
		return new ActiveXObject('Micrsoft.XMLHTTP')
		
	}
	//Ajax的方法
	function Ajax(url,fn){
		
		var xhr = new CreateXHR();    //实例化对象
		
		xhr.open("get",url,true);
		
		xhr.send(null);
			
		//获取结果,异步请求会触发一个事件  onreadystatechange   （都是小写）

	    // onreadystatechange 是一个事件，只有触发的时候，才会执行
	    xhr.onreadystatechange = function () {
	
	        if(xhr.readyState == 4){
	        	
	            if(xhr.status == 200){
	            	
	                var str = xhr.responseText;
	                
	                fn(str);
	
	            }
	        }
	
	    }
		
	}
