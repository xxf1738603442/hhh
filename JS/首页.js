$(function(){
    var obj;
    var box3 = document.getElementById("box3");
    var mg1=document.getElementsByClassName("mg1")[0];
    var mg2=document.getElementsByClassName("mg2")[0];
    var mg3=document.getElementsByClassName("mg3")[0];
    var zj=document.getElementsByClassName("zj")[0];
    var mg4=document.getElementsByClassName("mg4")[0];
    var mg5=document.getElementsByClassName("mg5")[0];
    var mg6=document.getElementsByClassName("mg6")[0];
    var zj1=document.getElementsByClassName("zj")[1];
    var mg7=document.getElementsByClassName("mg7")[0];
    var mg8=document.getElementsByClassName("mg8")[0];
    var zj2=document.getElementsByClassName("zj")[2];
    var mg9=document.getElementsByClassName("mg9")[0];
    var mg10=document.getElementsByClassName("mg10")[0];
    var zj3=document.getElementsByClassName("zj")[3];
    var mg11=document.getElementsByClassName("mg11")[0];
    var mg12=document.getElementsByClassName("mg12")[0];
    var mg13=document.getElementsByClassName("mg13")[0];
    var mg14=document.getElementsByClassName("mg14")[0];
    var mg15=document.getElementsByClassName("mg15")[0];
    var mg16=document.getElementsByClassName("mg16")[0];
    var mg17=document.getElementsByClassName("mg17")[0];
    var mg18=document.getElementsByClassName("mg18")[0];


    $.ajax({
        url: '../JSON/home.json',
        dataType: 'json',
        type: 'GET',
        async: false,
        success: function (list) {
            obj = list;
        }
})

    for(let i=0;i<8;i++){
        box3.innerHTML+=`
        <div class="box33">
        <a href="#" class="ccc"><img src="${obj.name[i]}" alt="" class="xt" srcset=""></a>
        <div class="wzy">${obj.yl[i]}</div>
    </div>
        `

    }

    for(let i=8;i<10;i++){
        mg1.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=10;i<12;i++){
        mg2.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=12;i<14;i++){
        mg3.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=14;i<17;i++){
        zj.innerHTML+=`
            <div><img src="${obj.name[i]}" alt=""></div>
            <div><img src="${obj.name[i+1]}" alt=""></div>
            <div><img src="${obj.name[i+2]}" alt=""></div>
        `
        i+=3;
    }

    for(let i=17;i<19;i++){
        mg4.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=19;i<21;i++){
        mg5.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=21;i<23;i++){
        mg6.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=21;i<22;i++){
        zj1.innerHTML+=`
        <a href="">办公效率</a>
            <div><img src="./img3/yl53.jpg" alt=""></div>
            <p>我懂个P</p>
            <span>￥299</span>
        `
        i+=1;
    }

    for(let i=21;i<23;i++){
        mg7.innerHTML+=`
            <img src="${obj.name[i]}" alt="">
            <img src="${obj.name[i+1]}" alt="">
            <div class="siz">学习方式很重要</div>
            <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=23;i<25;i++){
        mg8.innerHTML+=`
            <img src="${obj.name[i]}" alt="">
            <img src="${obj.name[i+1]}" alt="">
            <div class="siz">${obj.yl[i]}</div>
            <div class="siz1">外汇的投资技巧</div>
        `
        i+=1;
    }

    for(let i=25;i<26;i++){
        zj2.innerHTML+=`
        <a href="">语言留学</a>
        <div><img src="${obj.name[i]}" alt=""></div>
        <p>${obj.yl[i+1]}</p>
        <div class="kb"></div>
        <div class="ko"></div>
        `
        i+=1;
    }

    for(let i=26;i<28;i++){
        mg9.innerHTML+=`
            <img src="${obj.name[i]}" alt="">
            <img src="${obj.name[i+1]}" alt="">
            <div class="siz">从零开始通识阅读</div>
            <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=28;i<30;i++){
        mg10.innerHTML+=`
            <img src="${obj.name[i]}" alt="">
            <img src="${obj.name[i+1]}" alt="">
            <div class="siz">${obj.yl[i]}</div>
            <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=30;i<31;i++){
        zj3.innerHTML+=`
        <a href="">个人理财</a>
        <div><img src="${obj.name[i]}" alt=""></div>
        <p>${obj.yl[i+1]}</p>
        <div class="kb"></div>
        <div class="ko"></div>
        `
        i+=1;
    }

    for(let i=31;i<33;i++){
        mg11.innerHTML+=`
            <img src="${obj.name[i]}" alt="">
            <img src="${obj.name[i+1]}" alt="">
            <div class="siz">${obj.yl[i]}</div>
            <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=33;i<35;i++){
        mg12.innerHTML+=`
            <img src="${obj.name[i]}" alt="">
            <img src="${obj.name[i+1]}" alt="">
            <div class="siz">${obj.yl[i]}</div>
            <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=35;i<37;i++){
        mg13.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=37;i<39;i++){
        mg14.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=39;i<41;i++){
        mg15.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=41;i<43;i++){
        mg16.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=43;i<45;i++){
        mg17.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }

    for(let i=45;i<47;i++){
        mg18.innerHTML+=`
        <img src="${obj.name[i]}" alt="">
        <img src="${obj.name[i+1]}" alt="">
        <div class="siz">${obj.yl[i]}</div>
        <div class="siz1">${obj.yl[i+1]}</div>
        `
        i+=1;
    }


    $(".xt").eq(0).click(function(){
        location.href="./HTML/professional.html";
    })
    $(".xt").eq(1).click(function(){
        location.href="./HTML/职场提升.html";
    })
    $(".xt").eq(2).click(function(){
        location.href="./HTML/编程开发.html";
    })
    $(".xt").eq(3).click(function(){
        location.href="./HTML/AI.html";
    })
    $(".xt").eq(4).click(function(){
        location.href="./HTML/产品与运营.html";
    })
    $(".xt").eq(5).click(function(){
        location.href="./语言设计/designOriginality.html";
    })
    $(".xt").eq(6).click(function(){
        location.href="./HTML/电子商务.html";
    })
    $(".xt").eq(7).click(function(){
        location.href="./语言设计/languageStudy.html";
    })

    let tz=document.querySelectorAll(".box9 img");
    // console.log(tz);
    for(let i=0;i<tz.length;i++){
        tz[i].onclick=function(){
            location.href="./网易云课堂.mp4/wangyiyb.html"
        }
    }
    $()
    $("li img").eq(2).click(function(){
        location.href="./详情/account.html";
    })
    $("li img").eq(1).click(function(){
        location.href="./我的学习1/my scuty.html";
    })
})