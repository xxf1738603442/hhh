$(function(){
    var obj;
    var mg1=document.getElementsByClassName("mg1")[0];
    var mg2=document.getElementsByClassName("mg2")[0];
    var mg3=document.getElementsByClassName("mg3")[0];
    var mg4=document.getElementsByClassName("mg4")[0];
    var mg5=document.getElementsByClassName("mg5")[0];
    var mg6=document.getElementsByClassName("mg6")[0];
    var mg7=document.getElementsByClassName("mg7")[0];
    var mg8=document.getElementsByClassName("mg8")[0];
    var mg9=document.getElementsByClassName("mg9")[0];
    var mg10=document.getElementsByClassName("mg10")[0];
    var mg11=document.getElementsByClassName("mg11")[0];
    var mg12=document.getElementsByClassName("mg12")[0];
    var mg13=document.getElementsByClassName("mg13")[0];
    var mg14=document.getElementsByClassName("mg14")[0];
    var mg15=document.getElementsByClassName("mg15")[0];
    var mg16=document.getElementsByClassName("mg16")[0];
    var mg17=document.getElementsByClassName("mg17")[0];
    var mg18=document.getElementsByClassName("mg18")[0];
    var mg19=document.getElementsByClassName("mg19")[0];
    var mg20=document.getElementsByClassName("mg20")[0];
    var mg21=document.getElementsByClassName("mg21")[0];
    var mg22=document.getElementsByClassName("mg22")[0];
    var mg23=document.getElementsByClassName("mg23")[0];
    // console.log(img1);
    $.ajax({
        url:'../JSON/wangyiyun.json',
        dataType:'json',
        type:'GET',
        async:false,
        success:function(list){
            obj=list;
        }
    })
    for(let i=0;i<2;i++){
        mg1.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=2;i<4;i++){
        mg2.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=4;i<6;i++){
        mg3.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=6;i<8;i++){
        mg4.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=8;i<10;i++){
        mg5.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=10;i<12;i++){
        mg6.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=12;i<14;i++){
        mg7.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=14;i<16;i++){
        mg8.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=16;i<18;i++){
        mg9.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=18;i<20;i++){
        mg10.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=20;i<22;i++){
        mg11.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=22;i<24;i++){
        mg12.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=24;i<26;i++){
        mg13.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=26;i<28;i++){
        mg14.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=28;i<30;i++){
        mg15.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=30;i<32;i++){
        mg16.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=32;i<34;i++){
        mg17.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=34;i<36;i++){
        mg18.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=36;i<38;i++){
        mg19.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=38;i<40;i++){
        mg20.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=40;i<42;i++){
        mg21.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=42;i<44;i++){
        mg22.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    for(let i=44;i<46;i++){
        mg23.innerHTML+=
        `
        <img src="${obj.imgyb[i]}" alt="">
        <img src="${obj.imgyb[i+1]}" alt="">
        <div class="siz">${obj.ybtxt[i]}</div>
        <div class="siz1">${obj.ybtxt[i+1]}</div>
        `
        i+=1;
    }
    
    
    
    // 下划线
    $(".swiper-slide").click(function () {
        // var index = $(this).index();
        // $("i").css({ "display": "block" })
        // $("i").stop().animate({
        //     left: $(".swiper-slide").width() * index * 1.2
        // })

        $(".swiper-slide").eq($(this).index()).css({
             "display": "block" ,
             "border-bottom":"3px solid orangered"
            }).siblings().css("border-bottom","0");
    })   

    


    $("#yc1").show();
    $(".swiper-slide").eq(0).click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    // $(".uu li").eq(0).click(function(){
        $("#yc").hide();
        $("#yc1").hide();
        $("#yc2").hide();
    // })
    
})
$(".swiper-slide").eq(1).click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $("#yc").hide();
    $("#yc1").hide();
    $("#yc2").hide();
})
$(".swiper-slide").eq(2).click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $("#yc").hide();
    $("#yc1").hide();
    $("#yc2").hide();
})
$(".swiper-slide").eq(3).click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $("#yc").hide();
    $("#yc1").hide();
    $("#yc2").hide();
})
$(".swiper-slide").eq(4).click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $("#yc").show();
    $("#yc1").hide();
    $("#yc2").hide();
})
$(".swiper-slide").eq(5).click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $("#yc").hide();
    $("#yc1").show();
    $("#yc2").hide();
})
$(".swiper-slide").eq(6).click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $("#yc").hide();
    $("#yc1").hide();
    $("#yc2").show();
})

})
