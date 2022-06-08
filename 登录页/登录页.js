window.onload = function(){
	var wei = document.querySelector(".wei")
	var shou = document.querySelector(".shou")
	var weixin = document.querySelector(".weixin")
	var fanhui = document.querySelector(".fanhui")
	var fanhui1 = document.querySelector(".fanhui1")
	var box = document.querySelector(".box")
	var sj = document.querySelector(".sj")
	
	
	
	let mxc = true
	wei.onclick = function () {
	   if (!mxc) {
	     return;
	   }
	   mxc = false;
	   setTimeout(function () {
	     mxc = true;
	     box.style.transform = "rotateY(180eg)";
	     weixin.style.transform = "rotateY(0deg)";
	   }, 320);
	 };
	 
	 
	 
	 fanhui.onclick = function () {
	   weixin.style.transform = "rotateY(-180deg)";
	   box.style.transform = "rotateY(0deg)";
	 }
	 
	 //手机
	 shou.onclick = function () {
	    if (!mxc) {
	      return;
	    }
	    // mxc = false;
	    setTimeout(function () {
	      mxc = true;
	      box.style.transform = "rotateY(180eg)";
	      sj.style.transform = "rotateY(0deg)";
	    }, 320);
	  };
	  
	  
	  
	  fanhui1.onclick = function () {
	    sj.style.transform = "rotateY(-180deg)";
	    box.style.transform = "rotateY(0deg)";
	  }
	  
	  
	  //点击使用验证码验证码框出来
	  var sj_img = document.querySelector(".sj_img")
	  var sj_img1 = document.querySelector(".sj_img1")
	  var yan = document.querySelector(".yan")
	  var duan = document.querySelector(".duan")
	  var huo = document.querySelector(".huo")
	  var yanz = document.querySelector(".yanz")
	  
	  
	  sj_img.onclick = function(){
		  yan.style.display = "block";
		  duan.style.display = "none";
		  
	  }
	  sj_img1.onclick = function(){
	  		  yan.style.display = "none";
	  		  duan.style.display = "block";
	  		  
	  }
	  //倒计时
	  // let timer = 10;
	  // 	setInterval(()=>{
	  // 		timer--;
	  // 		document.getElementsByClassName('yanz').innerText = timer;
	  // 		if(timer==0){
	  // 			location.href = 'https://www.bilibili.com/video/BV1ca4y1i7Lz?p=1';
	  // 		}
	  // 	},1000);
	  
	  yanz.onclick = function(){
		  let timer = 60;
		   
		  var clear = setInterval(function(){
			  timer--;
			  huo.innerHTML = timer;
			  if(timer ==0){
				  clearInterval(clear)
				  huo.innerHTML = "获取验证码";
			  }
		  },1000);
		  
	  }
	  
	  //判断input
	  // var inp3 = document.getElementsByClassName("inp3")
	  // var inp4 = document.getElementsByClassName("inp4")
	  // var deng = document.getElementsByClassName("deng")
	  // deng.onclick = function(){
		 //  var a = inp3.value;
		 //  console.log(a);
	  //  }
	  $(".deng").click(function(){
		 var a = $(".inp3").val();
		 var b = $(".inp4").val();
		 if(a ==0){
			$(".qing").show("qish");
		 }else{
			 $(".qing").hide();
		 }
		  
		 if(b==0){
			 $(".qing").text("请输入密码").show("qshuru");
		 }else{
			 $(".qing").hide("");
		 }
		 
		 
		 var aa = 111;
		 var bb = 111;
		 if(a==aa&&b==bb){
			location.href = "../../首页.html"
		 }
		 
	  })
	  
}
	
	
	
 