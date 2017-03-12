function my_clock(el){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	el.innerHTML=h+":"+m+":"+s;
	setTimeout(function(){my_clock(el)},1000);

}

var clock_div=document.getElementById("clock_div");
my_clock(clock_div);
