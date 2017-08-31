onload = function() {

	var banner = document.getElementById("banner")
	var oBox = document.getElementById("banner_inner")
	var oList = document.getElementById("list1")
	var aLi = oList.children
	var oList1 = document.getElementById("list2")
	var aLi1 = oList1.children
	//console.log(aLi1)

	//复制第一个li

	oList.appendChild(aLi[0].cloneNode(true)) //克隆第一张图片,然后添加到ul上

	oList.style.width = aLi.length * 1200 + "px" //算出ul的长度

	var size = aLi.length; //li的数量
	var i = 0; //即将移动的图片下标
	var timer = setInterval(function() {

		i++; //图片的不停切换
		move()
	}, 2000)

	///////////////////////////////图片的切换/////////////////////////////////////////////
	function move() {
		//判断右边界
		if(i >= size) {

			oList.style.left = 0;
			i = 1;

		}
		//判断左边界
		if(i < 0) {

			oList.style.left = -1200 * (size - 1) + 'px'
			i = size - 2;
		}
		//调用动画
		animate(oList, { left: -1200 * i })
		///////////////////////////////小按钮的选中状态/////////////////////////////////////////////

		for(var j = 0; j < aLi1.length; j++) {

			if(j == i) {

				aLi1[j].className = "bgcolor"
				//console.log('oooo')
			} else {
				aLi1[j].className = ""
			}
		}
		if(i == size - 1) {
			aLi1[0].className = "bgcolor"
		}
	}
	///////////////////////////////移入小按钮的状态/////////////////////////////////////////////
	for(var j = 0; j < aLi1.length; j++) {
		aLi1[j].index = j;
		aLi1[j].onmouseenter = function() {
			clearInterval(timer)
			i = this.index;
			move();
		}
		aLi1[j].onmouseleave = function() {
			timer = setInterval(function() {

				i++; //图片的不停切换
				move()
			}, 2000)
		}
	}
}