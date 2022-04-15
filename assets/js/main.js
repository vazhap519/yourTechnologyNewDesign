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

var fullsite=document.querySelector("#wrapper");
var Colors=['linear-gradient(180deg, rgba(133, 51, 255, 0.85) 24.48%, rgba(96, 185, 185, 0) 100%)','blue'];



var topCarousellLeftBtn=document.querySelector('.carousell_area_arrows_left')
var topCarousellRighttn=document.querySelector('.carousell_area_arrows_right')
var TopCarousellContent=document.querySelectorAll('.carousell_area_box ');

var TopCarousellCounter=0;
function TopCarousellContentItems(){
    for(var i=0;i<TopCarousellContent.length;i++){
        TopCarousellContent[i].classList.remove('carousell_area_box_active')
    }

    for(var i in Colors){
        fullsite.style.backgroundColor='linear-gradient(180deg, rgba(133, 51, 255, 0.85) 24.48%, rgba(96, 185, 185, 0) 100%)'
    }

}
function topCarousellRighttn_f(){
    TopCarousellContentItems()
 
    TopCarousellCounter++
    if(TopCarousellCounter>TopCarousellContent.length-1){
        TopCarousellCounter=0
    }
    if(TopCarousellCounter>Colors.length-1){
        TopCarousellCounter=0
    }
    fullsite.style.backgroundColor=Colors[TopCarousellCounter];
    TopCarousellContent[TopCarousellCounter].classList.add('carousell_area_box_active')
}
topCarousellRighttn.addEventListener('click',topCarousellRighttn_f)


topCarousellLeftBtn.addEventListener('click',()=>{
    TopCarousellContentItems()
    TopCarousellCounter--
    if(TopCarousellCounter<=TopCarousellContent.length-1){
        TopCarousellCounter=0
    }

    if(TopCarousellCounter>Colors.length-1){
        TopCarousellCounter=0
    }
    fullsite.style.backgroundColor=Colors[TopCarousellCounter];
    TopCarousellContent[TopCarousellCounter].classList.add('carousell_area_box_active')
})


var TopAuto=setInterval(TopCarousellAutoplay,1000)
function TopCarousellAutoplay(){
    topCarousellRighttn_f()
}
