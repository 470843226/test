var btnL = document.getElementById("btnL"),
	btnR = document.getElementById("btnR"),
	div = document.getElementById("div"),
	count = 0;
	/*267*/
	btnL.onclick=function(){
		count < 4? count++ : count;
		div.style = "transform:translateX("+ -271*count +"px);"
	}
	btnR.onclick=function(){
		count > 0? count-- : count;
		div.style = "transform:translateX("+ -271*count +"px);"
	}

//JSON格式数据
			var data = [
				{
					name : "banner1",
					anchorHref : "",
					imageUrl : "./image/banner.png"
				},
				{
					name : "banner2",
					anchorHref : "",
					imageUrl : "./image/banner2.jpg"
				},
				{
					name : "banner3",
					anchorHref : "",
					imageUrl : "./image/banner3.jpg"
				}
			];
			//创建一个轮播图组件
			Banner({
				element : ".banner", //必需, 轮播图插入的页面位置 (选择器字符串)
				keywords : { //必需, 字段名称 (参照以上data格式, 与data配置数据共同作用)
					title : "name", //必需, 图片标题字段名称
					href : "anchorHref", //必需, 图片链接字段名称
					url : "imageUrl" //必需, 图片地址字段名称
				},
				data : data, //必需, 数据 (参照以上data格式, 与keywords配置字段名称共同作用)
				theme : 1, //非必需, 轮播主题 (默认0:切换, 1:淡入淡出, 2:滑动)
				controller : 1, //非必需, 是否启用前后翻页控制 (默认0:不启用, 1:启用)
				indicator : 2, //非必需, 指针主题 (默认0:不启用, 1:方块, 2:圆点, 3:宽矩形)
				duration : 4 //非必需, 轮播秒数间隔 (默认2)
			});