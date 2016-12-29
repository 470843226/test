var data = [
	{	
		name: "生化危机7",
		src: "./image/p1.jpg",
		platform: "PS4  XB1",
		content: "查看详情",
		hot : 0,
		isNew : 1,
		isChinese : 0
	},
	{
		name: "新弹丸论破V3：互相残杀的新学期",
		src: "./image/p2.jpg",
		platform: "PS4",
		content: "查看详情",
		hot : 0,
		isNew : 0,
		isChinese : 0
	},
	{
		name: "最终幻想15",
		src: "./image/p3.jpg",
		platform: "PS4  XB1",
		content: "查看详情",
		hot : 1,
		isNew : 1,
		isChinese : 1
	},
	{
		name: "最后的守护者",
		src: "./image/p4.jpg",
		platform: "PS4",
		content: "查看详情",
		hot : 0,
		isNew : 0,
		isChinese : 1
	},
	{
		name: "合金装备V：幻痛",
		src: "./image/p5.jpg",
		platform: "PS4  XB1",
		content: "查看详情",
		hot : 1,
		isNew : 0,
		isChinese : 0
	},
	{
		name: "菲莉丝的工作室：不思议之旅的炼金术士",
		src: "./image/p6.jpg",
		platform: "PS4",
		content: "查看详情",
		hot : 0,
		isNew : 1,
		isChinese : 0
	},
	{
		name: "如龙6：生命诗篇。",
		src: "./image/p7.jpg",
		platform: "PS4",
		content: "查看详情",
		hot : 1,
		isNew : 1,
		isChinese : 1
	},
	{
		name: "赛车计划",
		src: "./image/p8.jpg",
		platform: "PS4 XB1",
		content: "查看详情",
		hot : 0,
		isNew : 0,
		isChinese : 0
	},
	{
		name: "战争机器2",
		src: "./image/p9.jpg",
		platform: "XB1",
		content: "查看详情",
		hot : 0,
		isNew : 1,
		isChinese : 0
	},
	{
		name: "最后生还者",
		src: "./image/p10.jpg",
		platform: "PS4",
		content: "查看详情",
		hot : 0,
		isNew : 0,
		isChinese : 1
	},
	{
		name: "黑暗之魂3",
		src: "./image/p11.jpg",
		platform: "PS4 XB1",
		content: "查看详情",
		hot : 1,
		isNew : 0,
		isChinese : 1
	},
	{
		name: "光环战争2",
		src: "./image/p12.jpg",
		platform: "XB1",
		content: "查看详情",
		hot : 1,
		isNew : 1,
		isChinese : 0
	}
	
]

function createLi(option){
	var Li = document.createElement("li"),
		img = document.createElement("img"),
		p = document.createElement("p"),
		span = document.createElement("span"),
		div = document.createElement("div");
	img.src = option.src;
	p.innerText = option.name;
	span.innerText = option.platform;
	div.innerText = option.content;
	Li.appendChild(img);
	Li.appendChild(div);
	Li.appendChild(p);
	Li.appendChild(span);
	return Li;
}
var ul = document.getElementById("picture");
data.forEach(function(item){
	ul.appendChild(createLi(item));
})
var all = document.getElementById("all"),
	hot = document.getElementById("hot"),
	chinese = document.getElementById("chinese"),
	ps4 = document.getElementById("ps4"),
	xb1 = document.getElementById("xb1"),
	isNew = document.getElementById("new");
	
	all.onclick = function(){
		all.className = "orange";
		hot.className = chinese.className = ps4.className = xb1.className = isNew.className = "";
		ul.innerText = "";
		data.forEach(function(item){
			ul.appendChild(createLi(item));
		})
	}
	hot.onclick = function(){
		hot.className = "orange";
		all.className = chinese.className = ps4.className = xb1.className = isNew.className = ""; 
		ul.innerText = "";
		data.forEach(function(item){
			item.hot === 1 && ul.appendChild(createLi(item));
		})
	}
	chinese.onclick = function(){
		chinese.className = "orange";
		all.className = hot.className = ps4.className = xb1.className = isNew.className = ""; 
		ul.innerText = "";
		data.forEach(function(item){
			item.isChinese === 1 && ul.appendChild(createLi(item));
		})
	}
	ps4.onclick = function(){
		ps4.className = "orange";
		all.className = hot.className = chinese.className = xb1.className = isNew.className = ""; 
		ul.innerText = "";
		data.forEach(function(item){
			item.platform !== "XB1" && ul.appendChild(createLi(item));
		})
	}
	xb1.onclick = function(){
		xb1.className = "orange";
		all.className = hot.className = chinese.className = ps4.className = isNew.className = ""; 
		ul.innerText = "";
		data.forEach(function(item){
			item.platform !== "PS4" && ul.appendChild(createLi(item));
		})
	}
	isNew.onclick = function(){
		isNew.className = "orange";
		all.className = hot.className = ps4.className = xb1.className = chinese.className = ""; 
		ul.innerText = "";
		data.forEach(function(item){
			item.isNew === 1 && ul.appendChild(createLi(item));
		})
	}