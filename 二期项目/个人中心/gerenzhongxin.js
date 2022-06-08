$(function(){
	

	

	//显示
	$(".xiugai").click(function(){
		$(".tankuang").show();
	})
	
	$(".quxiao1").click(function(){
		$(".tankuang").toggle();
	})
	
	
	
	
	let a = $(".inp").val()
	let b = $(".name")[0].innerHTML
	console.log(b);
	$(".inp").focus(function(){
		$(".inp").attr("value","")
	})
	$(".quxiao2").click(function(){
		$(".name")[0].innerHTML = $(".inp").val()
		
	})
	
	
	
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
