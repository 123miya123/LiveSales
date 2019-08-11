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

/*导航栏移动下划线*/

/*(function () {
    $(".js-nav > li").hover(function () {
        var t = $(".js-nav").parent().offset().left,
            i = 15,
            n = $(this),
            e = n.offset().left - t + i;
        $(".js-menu-act").css({
            left: e,
            width: n.width() - 2 * i,
            opacity: 1
        })
    }, function () {
        $(".js-menu-act").css({
            opacity: 0
        })
    })
})()*/
(function () {
    $(".js-nav > li").hover(function () {
        var t = $(".js-nav").parent().offset().left,
            i = 15,
            n = $(this),
            e = n.offset().left + i;
        $(".js-menu-act").css({
            left: e,
            width: n.width() - 2 * i,
            opacity: 1
        })
    }, function () {
        $(".js-menu-act").css({
            opacity: 0
        })
    })
})()
