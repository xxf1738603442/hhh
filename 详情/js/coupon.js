$(function(){
    $('.son').click(function(){
        $('.aa1').eq($(this).index()).css('display','block').siblings().css('display','none')
    })
    var zhee=document.getElementsByClassName('zhee')[0]
    var m=000
    var input=document.getElementsByTagName('input')[0]
    var span=document.getElementsByTagName('span')[0]
    span.onclick=function(){
        if(input.value!=m){
            alert('请输入000进行兑换')
        }else{
            alert('兑换成功')
            zhee.style.display='block'
        }
    }

})
    

    
