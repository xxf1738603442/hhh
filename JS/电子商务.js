$(function () {
    var obj;
    $.ajax({
        "url": "../JSON/AI.json",
        dataType: "json",
        type: "GET",
        async: false,
        success: function (list) {
            obj = list;
        }
    })
    for(let i=0;i<obj.ecimg.length;i++){
        $(".ecimg").eq(i).prop("src",obj.ecimg[i])
        $(".电子商务wenzi").eq(i).html(obj.电子商务name[i])
    }
    for(let i=0;i<obj.img5.length;i++){
        $(".image5").eq(i).prop("src",obj.img5[i])
        $(".wenzi5").eq(i).html(obj.name5[i])
    }
    for(let i=0;i<obj.img6.length;i++){
        $(".image6").eq(i).prop("src",obj.img6[i])
        $(".wenzi6").eq(i).html(obj.name6[i])
    }
    for(let i=0;i<obj.img7.length;i++){
        $(".image7").eq(i).prop("src",obj.img7[i])
        $(".wenzi7").eq(i).html(obj.name7[i])
    }
    for(let i=0;i<obj.img8.length;i++){
        $(".image8").eq(i).prop("src",obj.img8[i])
        $(".wenzi8").eq(i).html(obj.name8[i])
    }
    for(let i=0;i<obj.img9.length;i++){
        $(".image9").eq(i).prop("src",obj.img9[i])
        $(".wenzi9").eq(i).html(obj.name9[i])
    }
    for(let i=0;i<obj.img10.length;i++){
        $(".image10").eq(i).prop("src",obj.img10[i])
        $(".wenzi10").eq(i).html(obj.name10[i])
    }
    for(let i=0;i<obj.img11.length;i++){
        $(".image11").eq(i).prop("src",obj.img11[i])
        $(".wenzi11").eq(i).html(obj.name11[i])
    }
    for(let i=0;i<obj.img12.length;i++){
        $(".image12").eq(i).prop("src",obj.img12[i])
        $(".wenzi12").eq(i).html(obj.name12[i])
    }


    $(".swiper-slide").click(function () {
        var index = $(this).index();
        $("i").css({ "display": "block" })
        $("i").stop().animate({
            left: $(".swiper-slide").width() * index * 1.2
        })
    })

    $(".swiper-slide").eq(0).click(function () {
        $("#boxs").hide();
        $("#IT").hide();
        $("#work").hide();
        $("#creation").hide();
    })
    $(".swiper-slide").eq(1).click(function () {
        $("#boxs").hide();
        $("#IT").hide();
        $("#work").hide();
        $("#creation").hide();
    })
    $(".swiper-slide").eq(2).click(function () {
        $("#boxs").hide();
        $("#IT").hide();
        $("#work").hide();
        $("#creation").hide();
    })
    $(".swiper-slide").eq(3).click(function () {
        $("#boxs").hide();
        $("#IT").hide();
        $("#work").hide();
        $("#creation").hide();
    })
    $(".swiper-slide").eq(4).click(function () {
        $("#boxs").hide();
        $("#IT").show();
        $("#work").hide();
        $("#creation").hide();
    })
    $(".swiper-slide").eq(5).click(function () {
        $("#boxs").hide();
        $("#IT").hide();
        $("#work").show();
        $("#creation").hide();
    })
    $(".swiper-slide").eq(6).click(function () {
        $("#boxs").hide();
        $("#IT").hide();
        $("#work").hide();
        $("#creation").show();

    })
    
})


