$(function(){
	
		var button = document.getElementById("button_1");
		var box_one = document.getElementsByClassName("box_one")
		var box_one_aj = document.getElementById("box_one_aj");
		var box = document.getElementsByClassName("box");
		//获取数据
		var obj;
		    $.ajax({
		        "url":'./dingdan.json',
		        dateType:"json",
		        type:"GET",
		        async:false,
		        success:function(list){
					obj = list;
					for(var i=0;i<obj.book.lengths;i++){
						 box_one_aj.innerHTML+=`
						 <div class="box_one_aj1">
						<div class="one"><span>${abc.time[i]}</span></div>
						<div class="two"><span>${abc.dingdanhao[i]}</span></div>
						<div class="three"><span>${obj.book[i]}</span></div>
						<div class="for"><span>${obj.yongjiu[i]}</span></div>
						<div class="five"><span>${obj.money[i]}</span></div>
						<div class="hrr"><hr ></div>
						<div class="six"><span>${obj.shixiao[i]}</span></div>
						<button type="button"  class="button_1">${obj.delect[i]}</button>
						</div>
						
							`
					}
					console.log(obj);
		        }
		    });
			
			
			
			
			var num = 0;
			var btn = document.getElementById("btn");
		
			btn.onclick = function(){
				for (var i = num; i < num + 1; i++) {
					box_one_aj.innerHTML+=`
					<div class ="box_one_aj1">
					<div class="one"><span>${obj.time[i]}</span></div>
					<div class="two"><span>${obj.dingdanhao[i]}</span></div>
					<div class="three"><span>${obj.book[i]}</span></div>
					<div class="for"><span>${obj.yongjiu[i]}</span></div>
					<div class="five"><span>${obj.money[i]}</span></div>
					<div class="hrr"><hr ></div>
					<div class="six"><span>${obj.shixiao[i]}</span></div>
					<button type="button" class="button_1">${obj.delect[i]}</button>
					<div class="kongge"></div>
					</div>
					
					`
					set()
				}
				num+= 1;
				if(num == obj.time.length){
					btn.onclick = null;
				}	
			}
		set();
		// $("#box_one_aj").attr("class","aaa");	
		//js部分
		function set(){
			var button = document.getElementsByClassName('button_1');
			console.log(button.length)
			//当我点击删除按钮，让div删除		
			console.log(button);
			for(let i = 0;i<button.length;i++){
				button[i].onclick = function(){
					console.log(i);
					console.log($(".box_one_aj1"))
					$(".box_one_aj1").eq(i-1).remove()
					// $("button").eq(i).css("display","none")
				}
			}
		}
		
	
})
