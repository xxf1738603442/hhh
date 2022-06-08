$(function(){
    // var sjcontent=document.getElementById("sjcontent");
    

    // 全部
    $(".all").click(function() {
        $(".alltext").slideToggle()
        // 箭头
        $(".alljt").slideToggle();})

    // 最热
    $(".sort").click(function() {
        $(".sorttext").slideToggle()
        // 箭头
        $(".sortjt").slideToggle();})


    // 全部 更改文字
        $(".allmf").click(function(){
            $(".qb").html("免费");
            $(".amount").html("261");
            // 内容
            $(".mf").show();
            $(".sf").hide();
            $(".hy").hide();

            // window.onscroll=function(){

            //     var a= document.documentElement.scrollTop;
            //     document.title=a;//在标题显示和顶部有多少距离
             
            //      if(a>=1000){
            //          div.style.display="block";
            //      }else{
            //          div.style.display="none";
 
            //      }
            //  }



        })
        $(".allsf").click(function(){
            $(".qb").html("收费");
            $(".amount").html("187");


                // 内容
            $(".sf").show();
            $(".mf").hide();
            $(".hy").hide();

        })
        $(".allvip").click(function(){
            $(".qb").html("VIP");
            $(".amount").html("456");


                // 内容
            $(".hy").show();
            $(".sf").hide();
            $(".mf").hide();

        })
        $(".allqb").click(function(){
            $(".qb").html("全部");
            $(".amount").html("904");


                // 内容
            $(".mf").show();
            $(".sf").show();
            $(".hy").show();

        })

            //  排序 更改文字
        $(".sortzr").click(function(){
            $(".zr").html("最热");


                // 内容
            $(".mf").show();
            $(".sf").show();
            $(".hy").hide();

        })
        $(".sortzx").click(function(){
            $(".zr").html("最新");


                // 内容
            $(".mf").show();
            $(".sf").hide();
            $(".hy").show();

        })
        $(".sortxh").click(function(){
            $(".zr").html("喜欢");

            // 内容
            $(".mf").show();
            $(".sf").hide();
            $(".hy").hide();

        })
})
