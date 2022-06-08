$(function(){
    // 全部
    $(".sjall").click(function() {
        $(".sjalltext").slideToggle();
        // 箭头
        $(".sjalljt").slideToggle();})
        
        // 最热
        $(".sjsort").click(function() {
        $(".sjsorttext").slideToggle();
        // 箭头
        $(".sjsortjt").slideToggle();})


    // 全部 更改文字
        $(".sjallmf").click(function(){
            $(".sjqb").html("免费");
            $(".sjamount").html("109");
            
            // 内容
            $(".sjmf").show();
            $(".sjsf").hide();
            $(".sjhy").hide();

        })
        $(".sjallsf").click(function(){
            $(".sjqb").html("收费");
            $(".sjamount").html("247");


                // 内容
            $(".sjsf").show();
            $(".sjmf").hide();
            $(".sjhy").hide();

        })
        $(".sjallvip").click(function(){
            $(".sjqb").html("VIP");
            $(".sjamount").html("368");

                // 内容
            $(".sjhy").show();
            $(".sjsf").hide();
            $(".sjmf").hide();

        })
        $(".sjallqb").click(function(){
            $(".sjqb").html("全部");
            $(".sjamount").html("725");

                // 内容
            $(".sjmf").show();
            $(".sjsf").show();
            $(".sjhy").show();

        })

            //  排序 更改文字
        $(".sjsortzr").click(function(){
            $(".sjzr").html("最热");

                // 内容
            $(".sjmf").show();
            $(".sjsf").show();
            $(".sjhy").hide();

        })
        $(".sjsortzx").click(function(){
            $(".sjzr").html("最新");

                // 内容
            $(".sjmf").show();
            $(".sjsf").hide();
            $(".sjhy").show();

        })
        $(".sjsortxh").click(function(){
            $(".sjzr").html("喜欢");

                // 内容
            $(".sjmf").show();
            $(".sjsf").hide();
            $(".sjhy").hide();

        })

        
})
