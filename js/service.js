var first = document.getElementById("first"),
	second = document.getElementById("second"),
	third = document.getElementById("third"),
	fourth = document.getElementById("fourth"),
	last = document.getElementById("last"),
	box1 = document.getElementById("box1"),
	box2 = document.getElementById("box2"),
	box3 = document.getElementById("box3"),
	box4 = document.getElementById("box4"),
	box5 = document.getElementById("box5");
	first.onclick = function(){
		box1.className="box1 current";
		box2.className="box1";
		box3.className="box1";
		box4.className="box1";
		box5.className="box1";
		this.className="first pink";
		second.className="same";
		third.className="same";
		fourth.className="same";
		last.className="same";
	}
	second.onclick = function(){
		box1.className="box1";
		box2.className="box1 current";
		box3.className="box1";
		box4.className="box1";
		box5.className="box1";
		first.className="first";
		this.className="same pink";
		third.className="same";
		fourth.className="same";
		last.className="same";
	}
	third.onclick = function(){
		box1.className="box1";
		box2.className="box1";
		box3.className="box1 current";
		box4.className="box1";
		box5.className="box1";
		first.className="first";
		second.className="same";
		this.className="same pink";
		fourth.className="same";
		last.className="same";
	}
	fourth.onclick = function(){
		box1.className="box1";
		box2.className="box1";
		box3.className="box1";
		box4.className="box1 current";
		box5.className="box1";
		first.className="first";
		second.className="same";
		third.className="same";
		this.className="same pink";
		last.className="same";
	}
	last.onclick = function(){
		box1.className="box1 current";
		box2.className="box1";
		box3.className="box1";
		box4.className="box1";
		box5.className="box1";
		first.className="first";
		second.className="same";
		third.className="same";
		fourth.className="same";
		last.className="same pink";
	}