
var fullsite=document.querySelector("#wrapper");
var topCarousellLeftBtn=document.querySelector('.carousell_area_arrows_left');
var topCarousellRighttn=document.querySelector('.carousell_area_arrows_right');
var TopCarousellContent=document.querySelectorAll('.carousell_area_box ')
var TopCarousellCounter=0;
if(TopCarousellContent && topCarousellLeftBtn && topCarousellRighttn && TopCarousellContent){
    function TopCarousellContentItems(){
        for(var i=0;i<TopCarousellContent.length;i++){
            TopCarousellContent[i].classList.remove('carousell_area_box_active')
             newColor=TopCarousellContent[TopCarousellCounter].getAttribute('data-bgColor');
        }
    
    }
    function topCarousellRighttn_f(){
        TopCarousellContentItems()
        TopCarousellCounter++
        if(TopCarousellCounter>TopCarousellContent.length-1){
            TopCarousellCounter=0
        
        }
        var newColor=TopCarousellContent[TopCarousellCounter].getAttribute('data-bgColor');
        fullsite.style.background=newColor;
        TopCarousellContent[TopCarousellCounter].classList.add('carousell_area_box_active')
    }
    
    function topCarousellLeftBtn_f(){
        TopCarousellContentItems()
        TopCarousellCounter--
        if(TopCarousellCounter<=TopCarousellContent.length-1){
            TopCarousellCounter=0
        }
      
        var newColor=TopCarousellContent[TopCarousellCounter].getAttribute('data-bgColor');
        fullsite.style.background=newColor;
        TopCarousellContent[TopCarousellCounter].classList.add('carousell_area_box_active')
    }
    
    
    function TopCarousellAutoplay(){
        topCarousellRighttn_f()
    }
    
    var TopAuto=setInterval(TopCarousellAutoplay,1000)

}
/*
=============================================================================================
                        End TopContent Carousel
=============================================================================================
*/


var Plus=document.querySelector('.items_numbar_calc_plus');
var Min=document.querySelector('.items_numbar_calc_min');
var num=document.querySelector('.items_numbar_calc_num');
var ParseNum=parseInt(num.textContent)
let RemoveCartItems=document.querySelectorAll('.shopingCartArea_box_item_cart_x');
let totalElementsPrice=document.getElementsByName('shopingCartArea_box_item_price')[0];
let items
Plus.addEventListener('click',function(){
    num.textContent=ParseNum++
    updateTotal()
})
Min.addEventListener('click',function(){
    if(ParseNum<=0){
        ParseNum=0
    }else{
        
    num.textContent=ParseNum-=1
    }
    updateTotal()

})

function updateTotal(event){
    console.log(event)
}



RemoveCartItems.forEach((remove)=>{
remove.addEventListener("click",RemoveCartItems_F)
})
function RemoveCartItems_F(e){
    let RemoveBtn=e.target.parentElement.parentElement.remove()
}
