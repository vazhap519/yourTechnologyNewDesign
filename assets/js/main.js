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

