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
var Colors=['red','green','blue'];



var topCarousellLeftBtn=document.querySelector('.carousell_area_arrows_left')
var topCarousellRighttn=document.querySelector('.carousell_area_arrows_right')
var TopCarousellContent=document.querySelectorAll('.carousell_area_box ');

var TopCarousellCounter=0;
function TopCarousellContentItems(){
    for(var i=0;i<TopCarousellContent.length;i++){
        TopCarousellContent[i].style.display="none"
    }

    for(var i in Colors){
        fullsite.style.backgroundColor="orange"
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
    TopCarousellContent[TopCarousellCounter].style.display="block";
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
    TopCarousellContent[TopCarousellCounter].style.display="block";
})


