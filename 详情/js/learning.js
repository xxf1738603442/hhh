window.onload=function(){
    var son=document.getElementsByClassName('son');
    console.log(son)
    for(let i=0;i<son.length;i++){
        son[i].onclick=function(){
            for(let j=0;j<son.length;j++){
                son[j].style.color='black'
                son[j].style.borderBottom='none'
            }
            this.style.color='red'
            this.style.borderBottom='1px solid red'
        }
       
    }
    var input=document.getElementsByTagName('input')[0]
    var span=document.getElementById('span')
    var ma=123456;
    
    span.onclick=function(){
        if(input.value!=ma){
             alert('请输入123456进行兑换')
        }else if(input.value==ma){
                alert('兑换成功')
            }else{
                alert('请输入123456进行兑换')
            } 
        
    }
}