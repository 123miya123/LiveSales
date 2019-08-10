/**
 * Created by Lenovo on 2019-7-24.
 */
$(window).scroll(function(){
    if($(window).scrollTop() >= 10){
        $(".navbar-fixed-top").css({"background": "rgba(85, 94, 118, 0.62)"});
    } else{
        $(".navbar-fixed-top").css({"background": "rgba(85, 94, 118, 0)"});
    }
});