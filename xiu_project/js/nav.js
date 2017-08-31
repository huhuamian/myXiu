//二级导航的获取方式
$(function() {

	//获取节点
	var oNav = $(".nav_list") //第一个二级导航
	var oNav_lt = $(".nav_lt") //第一个二级导航的商品名称------左边
	var oNav_rt = $(".nav_rt") //第一个二级导航的商品名称------右边
	var oNav_lt1 = $(".nav_lt1") //第二个二级导航的商品名称------左上边
	var oNav_rt1 = $(".nav_rt1") //第二个二级导航的商品名称------右上边
	var oNav_lt_b = $(".nav_lt_b") //第二个二级导航的商品名称------左下边
	var oNav_rt_b = $(".nav_rt_b") //第二个二级导航的商品名称------右下边
	var oNav_lt3 = $(".nav_lt3") //第三个二级导航的商品名称------左上边
	var oNav_lt3_b = $(".nav_lt3_b") //第三个二级导航的商品名称------左下边
	var oNav_rt3 = $(".nav_rt3") //第三个二级导航的商品名称------右边
	var oNav_lt4 = $(".nav_lt4") //第四个二级导航的商品名称------左上边
	var oNav_lt4_b = $(".nav_lt4_b") //第四个二级导航的商品名称------左下边
	var oNav_rt4 = $(".nav_rt4") //第四个二级导航的商品名称------右边
	var oNav_lt5 = $(".nav_lt5") //第五个二级导航的商品名称------左边
	var oNav_rt5 = $(".nav_rt5") //第五个二级导航的商品名称------右边
	var oNav_lt6 = $(".nav_lt6") //第五个二级导航的商品名称------左边
	var oNav_rt6 = $(".nav_rt6") //第五个二级导航的商品名称------右边
	var oNav_lt7 = $(".nav_lt7") //第七个二级导航的商品名称------左边
	var oNav_rt7 = $(".nav_rt7") //第七个二级导航的商品名称------右边
	var oNav_lt8 = $(".nav_lt8") //第八个二级导航的商品名称------左边
	var oNav_rt8 = $(".nav_rt8") //第八个二级导航的商品名称------右边
	var oNav_lt9 = $(".nav_lt9") //第九个二级导航的商品名称------左边
	var oNav_rt9 = $(".nav_rt9") //第九个二级导航的商品名称------右边

	//请求的第一个二级导航的商品名称------左边
	$.ajax({
		type: "get",
		url: "json/nav.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt.append(oDl)

			}

		}
	});
	//请求的第一个二级导航的商品名称------右边
	$.ajax({
		type: "get",
		url: "json/nav1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt.append(oDl)

			}

		}
	});

	//请求的第二个二级导航的商品名称------左上边
	$.ajax({
		type: "get",
		url: "json/nav2_1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt1.append(oDl)

			}

		}
	});
	//请求的第二个二级导航的商品名称------右上边
	$.ajax({
		type: "get",
		url: "json/nav2_2.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt1.append(oDl)

			}

		}
	});
	
			
	//请求的第二个二级导航的商品名称------左下边
	$.ajax({
		type: "get",
		url: "json/nav2_3.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt_b.append(oDl)

			}

		}
	});
	//请求的第二个二级导航的商品名称------右下边
	$.ajax({
		type: "get",
		url: "json/nav2_4.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt_b.append(oDl)

			}

		}
	});

	//第三个左上
	$.ajax({
		type: "get",
		url: "json/nav3_1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt3.append(oDl)

			}

		}
	});
	//第三个的右边
	$.ajax({
		type: "get",
		url: "json/nav3_3.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt3.append(oDl)

			}

		}
	});
	//第三个左下边
	//第四个左上
	$.ajax({
		type: "get",
		url: "json/nav3_2.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt3_b.append(oDl)

			}

		}
	});
	//第四个左上
	$.ajax({
		type: "get",
		url: "json/nav4_1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt4.append(oDl)

			}

		}
	});
	//第四个的右边
	$.ajax({
		type: "get",
		url: "json/nav4_2.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt4.append(oDl)

			}

		}
	});
	//第四个左下边

	$.ajax({
		type: "get",
		url: "json/nav4_3.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt4_b.append(oDl)

			}

		}
	});
	//请求的第五个二级导航的商品名称------左边
	$.ajax({
		type: "get",
		url: "json/nav5_1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt5.append(oDl)

			}

		}
	});
	//请求的第一个五级导航的商品名称------右边
	$.ajax({
		type: "get",
		url: "json/nav5_2.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(',')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt5.append(oDl)

			}

		}
	});
	//请求的第六个二级导航的商品名称------左边
	$.ajax({
		type: "get",
		url: "json/nav6_1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt6.append(oDl)

			}

		}
	});
	//请求的第一个六级导航的商品名称------右边
	$.ajax({
		type: "get",
		url: "json/nav6_2.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(',')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt6.append(oDl)

			}

		}
	});
	//请求的第七个二级导航的商品名称------左边
	$.ajax({
		type: "get",
		url: "json/nav7_1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt7.append(oDl)

			}

		}
	});
	//请求的第一个七级导航的商品名称------右边
	$.ajax({
		type: "get",
		url: "json/nav7_2.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(',')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt7.append(oDl)

			}

		}
	});
	//请求的第八个二级导航的商品名称------左边
	$.ajax({
		type: "get",
		url: "json/nav8_1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt8.append(oDl)

			}

		}
	});
	//请求的第一个八级导航的商品名称------右边
	$.ajax({
		type: "get",
		url: "json/nav8_2.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(',')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt8.append(oDl)

			}

		}
	});
	//请求的第九个二级导航的商品名称------左边
	$.ajax({
		type: "get",
		url: "json/nav9_1.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(' ')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_lt9.append(oDl)

			}

		}
	});
	//请求的第一个七级导航的商品名称------右边
	$.ajax({
		type: "get",
		url: "json/nav9_2.json",
		async: true,
		success: function(result) {
			//console.log(result)
			for(var i = 0; i < result.length; i++) {
				var oDl = $("<dl></dl>")
				for(var n in result[i]) {

					//console.log(result[i])
					//console.log(result[i][n])
					var oDt = $("<dt></dt>")
					oDt.html(n)
					oDl.append(oDt)
					var str = result[i][n]
					var arr = str.split(',')
					for(var j = 0; j < arr.length; j++) {
						var oDd = $("<dd></dd>")
						var oA = $('<a href="#"></a>')
						oDd.append(oA)
						oA.html(arr[j])
						oDl.append(oDd)

					}

				}

				oNav_rt9.append(oDl)

			}

		}
	});

})