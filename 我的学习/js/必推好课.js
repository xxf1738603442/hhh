$(function(){
     var obj;
     var rq = document.getElementsByClassName("rq");
     $.ajax({
         url:'必推好课.json',
         dataType:'json',
         type:'GET',
         async:false,
         success:function(list){
             obj = list;
         }
     })

   
        for(let i = 0;i<obj.src.length;i++){
            rq[i].innerHTML=
        `

         <div class="a">
                    <div class="a1">
                        <a href="">
                            <img src="${obj.src[i]}" alt="">
                            <p>${obj.p1[i]}</p>
                            <span>${obj.span[i]}</span>
                            <p>${obj.p2[i]}</p>
                            <div>${obj.div[i]}</div>
                        </a>
                    </div>
                </div> 
        `
        }


        $(".icon2").click(function(){
            location.href = "我的收益.html"
        })
        $(".icon3").click(function(){
            location.href = "个人信息.html"
        })
        
     
})