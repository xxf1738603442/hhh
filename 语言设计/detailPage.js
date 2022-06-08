window.onload = function(){

// var selectxz1=document.


var obj;
    var selectxzbox=document.getElementById("selectxzbox");
    var selectxznr=document.getElementById("selectxznr");

      // jQuery的ajax格式
      $.ajax({
          'url':'./detailPage.json',
          dataType:'json',
          type:'GET',
          async:false,
          success:function(list){
              obj=list;
          }
      })
          console.log(obj);


          // load 加载
          for(var i=0;i<30;i++){
            selectxznr.innerHTML+=
          // pictures  头像
          // screenname  网名
          //  evaluate 评价 
          // pjpentagram 五角星
          // pjdate 日期
          // 免费内容
              `
              <div class="evaluate">
                <img class="picture" src="${obj.picture[i]}"></img>
                <p class="screenname">${obj.screenname[i]}</p>
                <p class="pjname">${obj.pjname[i]}</p>

                <p class="pjpentagram">${obj.pjpentagram[i]}</p>
                <p class="pjdate">${obj.pjdate[i]}</p>

                <p class="pjnametext">${obj.pjnametext[i]}

              </div>
              

`
      }




      var catalogue_bt1=document.getElementById("catalogue_bt1");
      var catalogue_bt2=document.getElementById("catalogue_bt2");
      var catalogue_bt3=document.getElementById("catalogue_bt3");
      var catalogue_bt4=document.getElementById("catalogue_bt4");
 

     // 开学第一天  
       for(var i=0;i<6;i++){
         catalogue_bt1.innerHTML+=
       // catalogue 目录

           `
           <div class="catalogue catalogue_box">
               <div class="cataloguetw">图文</div>
               <div class="cataloguenr catalogue_nr1">${obj.cataloguenr1[i]}</div>

           </div>
`
   }

   // 单词本该这样记
   for(var i=0;i<8;i++){
         catalogue_bt2.innerHTML+=
           `
           <div class="catalogue catalogue_box">
               <div class="cataloguetw">图文</div>
               <div class="cataloguenr cataloguenr2">${obj.cataloguenr2[i]}</div>
           </div>
`
   }
   // 破解单词的构造密码
   for(var i=0;i<16;i++){
         catalogue_bt3.innerHTML+=
           `
           <div class="catalogue catalogue_box">
               <div class="cataloguetw">图文</div>
               <div class="cataloguenr cataloguenr3">${obj.cataloguenr3[i]}</div>
           </div>
`
   }
   // 像学数学一样记单词
   for(var i=0;i<14;i++){
         catalogue_bt4.innerHTML+=
           `
           <div class="catalogue catalogue_box">
               <div class="cataloguetw">图文</div>
               <div class="cataloguenr cataloguenr4">${obj.cataloguenr4[i]}</div>
           </div>
`
   }



    $('.selectxz').click(function(){
        $('.kcqb').eq($(this).index()).css('display','block').siblings().css('display','none');
        
    })
    $('.selectxz').eq(0).css('border-bottom','5px solid red').siblings().css('border-bottom','none');
    $('.selectxz').click(function(){
      $('.selectxz').eq($(this).index()).css('border-bottom','5px solid red').siblings().css('border-bottom','none');
    })



}