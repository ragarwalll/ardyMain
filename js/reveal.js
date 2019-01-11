$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    if(scroll > 80){
        $(".main-header").addClass("header-reveal");
    }
    if(scroll < 100){
        $(".main-header").removeClass("header-reveal");
    }
});