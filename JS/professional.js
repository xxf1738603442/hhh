$(function(){
    var obj;
    // var box22=document.getElementsByClassName("box22")[0];
    var box2 = document.getElementsByClassName("box2")[0];
    var box3 = document.getElementsByClassName("box3")[0];
    var box4 = document.getElementsByClassName("box4")[0];
    var box6 = document.getElementsByClassName("box6")[0];
    var box7 = document.getElementsByClassName("box7")[0];
    var box8 = document.getElementsByClassName("box8")[0];
    var box9 = document.getElementsByClassName("box9")[0];
    var box10 = document.getElementsByClassName("box10")[0];
    var tp=document.getElementById("tp");


    $.ajax({
        url: '../JSON/professional.json',
        dataType: 'json',
        type: 'GET',
        async: false,
        success: function (list) {
            obj = list;
        }
})
    for(let i=0;i<5;i++){
        box2.innerHTML+=`
        <div class="box22">
                    <img src="${obj.tupian[i]}" alt="" srcset="" />
                    <br />
                    <span>${obj.mz[i]}</span>
                </div>
        `
    }
    for(let i=5;i<8;i++){
        box3.innerHTML+=`
            <div class="boxa">
                <img src="${obj.tupian[i]}" alt="" srcset="" />
                <div class="boxaa">
                    <p class="wb5">${obj.mz[i]}</p>
                    <p class="wb6">${obj.mz[i+1]}</p>
                </div>
            </div>
        `

    }
    for(let i=8;i<14;i++){
        box4.innerHTML+=`
        <div class="box44">
        <div><img src="${obj.tupian[i]}" alt="" srcset="" /></div>
        <div class="box444">
            <p class="wb7">${obj.mz[i]}</p>
            <p class="wb8">${obj.mz[i+1]}</p>
        </div>
    </div>
        `
    }
    for(let i=14;i<18;i++){
        box6.innerHTML+=`
        <div class="box66">
                    <img src="${obj.tupian[i]}" alt="" srcset="" />
                    <div class="boxiu">
                        <h2>${obj.mz[i]}</h2>
                        <h3>${obj.mz[i+1]}</h3>
                        <span>${obj.mz[i+2]}</span>
                    </div>
                </div>
        `
    }
    for(let i=18;i<20;i++){
        box7.innerHTML+=`
        <div class="box66">
                    <img src="${obj.tupian[i]}" alt="" srcset="" />
                    <div class="boxiu">
                        <h2>${obj.mz[i]}</h2>
                        <h3>${obj.mz[i+1]}</h3>
                        <span>${obj.mz[i+2]}</span>
                    </div>
                </div>
        `
    }

    for(let i=20;i<23;i++){
        box8.innerHTML+=`
        <div class="box66">
                    <img src="${obj.tupian[i]}" alt="" srcset="" />
                    <div class="boxiu">
                        <h2>${obj.mz[i]}</h2>
                        <h3>${obj.mz[i+1]}</h3>
                        <span>${obj.mz[i+2]}</span>
                    </div>
                </div>
        `
    }

    for(let i=23;i<24;i++){
        box9.innerHTML+=`
        <div class="box66">
                    <img src="${obj.tupian[i]}" alt="" srcset="" />
                    <div class="boxiu">
                        <h2>${obj.mz[i]}</h2>
                        <h3>${obj.mz[i+1]}</h3>
                        <span>${obj.mz[i+2]}</span>
                    </div>
                </div>
        `
    }

    for(let i=23;i<25;i++){
        box10.innerHTML+=`
        <div class="box66">
                    <img src="${obj.tupian[i]}" alt="" srcset="" />
                    <div class="boxiu">
                        <h2>${obj.mz[i]}</h2>
                        <h3>${obj.mz[i+1]}</h3>
                        <span>${obj.mz[i+2]}</span>
                    </div>
                </div>
        `
    }
    

   

    


})