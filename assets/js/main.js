
var fullsite=document.querySelector("#wrapper");
var topCarousellLeftBtn=document.querySelector('.carousell_area_arrows_left');
var topCarousellRighttn=document.querySelector('.carousell_area_arrows_right');
var TopCarousellContent=document.querySelectorAll('.carousell_area_box ')
var TopCarousellCounter=0;
if(TopCarousellContent && topCarousellLeftBtn && topCarousellRighttn && TopCarousellContent){
    console.log('aris')
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

