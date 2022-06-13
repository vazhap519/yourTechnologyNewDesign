
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

let LoginForm=document.querySelector(".LoginAreaUl_Content_Form")
let RegIco=document.querySelector('.LoginAreaUl_ico');
let USerContent=document.querySelector('.LoginAreaUl_Content');



function ShowHideUser(){
    if(RegIco.classList.contains('LoginAreaUl_ico_Active')){
        RegIco.classList.remove('LoginAreaUl_ico_Active')
    }else{
        RegIco.classList.add('LoginAreaUl_ico_Active')
    }
if(USerContent.classList.contains('LoginAreaUl_Content_Active')){
    USerContent.classList.remove('LoginAreaUl_Content_Active')
}else{
    USerContent.classList.add('LoginAreaUl_Content_Active')
}
}

RegIco.addEventListener('click',ShowHideUser)




let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let E_mail=document.querySelector('#email');
let PassWordCheck=document.querySelector('#password')
let Sign_in=document.querySelector('#SignIn');
Sign_in.addEventListener('click',function(){
 if(E_mail.value<=10){
     alert('შეამოწმე სიმბოლოების რაოდენობა ან ძაღლუკა ')
     filter.test(E_mail.value)
     E_mail.style.border="3px solid red"
     
 }else{
    
     E_mail.style.border="3px solid #A889F2"
 }

 if(PassWordCheck.value<=10){
    alert('შეამოწმე პაროლის სიგრძე და სისწორე ')
    PassWordCheck.style.border="3px solid red"
 }else{
    
    PassWordCheck.style.border="3px solid #A889F2"
 }
})

    







const ValidateSignInForm=(e)=>{
e.preventDefault();

}

SignIn.addEventListener('click',ValidateSignInForm)








