$(function(){
	var hwlsb = document.getElementsByClassName("hwlsb")[0];
	//接收数据
	var obj;
	    $.ajax({
	        "url":'./shopp.json',
	        dateType:"json",
	        type:"GET",
	        async:false,
	        success:function(list){
				obj = list;
				for(var i=0;i<obj.img.length;i++){
					 hwlsb.innerHTML+=`
						    <div class="box_2">
					 		<div class="box_1"><input type="checkbox" class="inp1"/><span>钱闯老师</span></div>
					 		<div class="box_3">
					 			<input type="checkbox" class="inp2"/>
					 			<img src="${obj.img[i]}">
					 			<span class="name">${obj.book[i]}</span>
					 			<span class="yong">永久有效</span>
					 			<span class="money">${obj.money[i]}</span>
					 			<div class="delect">删除</div>
					 			<hr >
					 			<span class="little">该机构小计:￥</span>
					 			<span class="mon">0.00</span>
							</div>
							</div>
						`
						set()	
				}
				
	        },
			
	    });
	
	
	
	var num = 0;
	var btn = document.getElementById("btn");
			
	btn.onclick = function(){
		for (var i = num; i < num + 1; i++) {
			hwlsb.innerHTML+=`
			<div class="box_2">
			<div class="box_1"><input type="checkbox" class="inp1"/><span>钱闯老师</span></div>
			<div class="box_3">
				<input type="checkbox" class="inp2"/>
				<img src="${obj.img[i]}">
				<span class="name">${obj.book[i]}</span>
				<span class="yong">永久有效</span>
				<span class="money">${obj.money[i]}</span>
				<div class="delect">删除</div>
				<hr >
				<span class="little">该机构小计:￥</span>
				<span class="mon">0.00</span>
			</div>
			</div>
			
			`
			set()
			
		}
		num+= 1;
		if(num == obj.img.length){
			btn.onclick = null;
		}	
	}
	var jiesuan = document.getElementsByClassName("jiesuan")[0];
	var inp1 = document.getElementsByClassName("inp1");
	var inp2 = document.getElementsByClassName("inp2");
	var inp3 = document.getElementById("inp3");
	//删除按钮
	var delect = document.getElementsByClassName("delect");
	var box_2 = document.getElementsByClassName("box_2");
	hwlsb.onclick = function(){
		//全选反选
		for(let i=0;i<inp1.length;i++){
			inp1[i].onclick = function(){
				inp2[i].checked=this.checked;
				set()
			}
		}
		for(let i=0;i<inp1.length;i++){
			inp2[i].onclick = function(){
				inp1[i].checked=this.checked;
				set()
			}
		}
		//全选
		inp3.onclick = function(){
			for(let i=0;i<inp1.length;i++){
				inp1[i].checked = this.checked
				inp2[i].checked = this.checked
			}
			set()
		}
		for(let i=0;i<delect.length;i++){
			delect[i].onclick = function(){
				box_2[i].remove()
			}
		}
		//取消反选
		for(let i=0;i<inp1.length;i++){
			inp3[i].onclick = function(){
				var flag = true;
				for(let i=0;i<inp1.length;i++){
					if(!inp1[i].checked){
						flag = false;
						break;
					}
				}
				inp3.checked = flag;
			}
		}
		
	}
	
	
	
	//选中单选小计给值 合计给值 结算变色
	function set(){
		var little = 0;
		var zong = 0;
		//价格
		
		var inp1 = document.getElementsByClassName("inp1");
		for(let i=0;i<inp1.length;i++){
			var money = document.getElementsByClassName("money")[i].innerText;
			//console.log(money)
			//小计
			var mon = document.getElementsByClassName("mon")[i];
			//console.log(mon)
			//总计
			var he2 = document.getElementsByClassName("he2")[0];
			
			//console.log(he2)
			if(inp1[i].checked){
			mon.innerText = money
				zong += parseInt(mon.innerText)
				he2.style.color = "#FF3F29";
				jiesuan.style.background = "#FF3F29";
			}else{
				mon.innerText = "0.00";
			}
			
		}
		he2.innerText = zong
	}
	
	
	
	
	
	
	
	
})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
