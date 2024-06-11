$(document).ready(function(){

	/* scroll */
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    //модель в форму
    $('.catalog li .button-m').on('click', function(){
        var prodName = $(this).siblings('h4').text();
        $("input[name='comment']").val(prodName);
    });

});
