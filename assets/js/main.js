$( document ).ready(function() {
$(".user_ico").click(function(e){
    e.preventDefault
    $(".regLog_user_form").show(1000)
})

$('.search_btn').click(function(){
    $('.searhBox').show(1000)
})

$('.cart_icon').click(function(){
    $('.shopingCartArea_box').show(1000)
})

});


var topCarousellLeftBtn=document.querySelector('.carousell_area_arrows_left')
var topCarousellRighttn=document.querySelector('.carousell_area_arrows_right')
var TopCarousellContent=document.querySelectorAll('.carousell_area_box ');
var fullsite=document.querySelector("#wrapper");
var TopCarousellCounter=0;
function topCarousell(){
    for(var i=0;i<TopCarousellContent.length;i++){
        TopCarousellContent[i].style.display="none"
        
    }
}
topCarousellRighttn.addEventListener('click',TopCarousellChangeRight)
function TopCarousellChangeRight(){
    topCarousell()
    if(TopCarousellCounter < TopCarousellContent.length-1){
        TopCarousellCounter++
       
        TopCarousellContent[TopCarousellCounter].style.display="block"
        fullsite.style.backgroundColor="red";
    
    }else{
        TopCarousellCounter=0
        TopCarousellContent[TopCarousellCounter].style.display="block"
        fullsite.style.backgroundColor="yellow";
    }
  
}

