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