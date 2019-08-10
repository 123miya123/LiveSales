/**
 * Created by Lenovo on 2019-7-24.
 */
/*����*/
function slideIn(obj,top){
    var targetHeight = obj.offset().top;
    var scrollTop = $(this).scrollTop();
    if(scrollTop>targetHeight-600){
        obj.animate({top:top+'px',opacity:1,filter:'Alpha(opacity=90)'},800);
    }
}

$(function(){
    var targetHeight = $(".zhichi_fuxian").offset().top;
    $(window).scroll(function(){
        slideIn($(".zhichi_fuxian"),0);
    });
});
$(function(){
    var targetHeight = $(".fun").offset().top;
    $(window).scroll(function(){
        slideIn($(".fun"),0);
    });
});
$(function(){
    var targetHeight = $(".dibu_fuxian").offset().top;
    $(window).scroll(function(){
        slideIn($(".dibu_fuxian"),0);
    });
});
$(function(){
    var targetHeight = $(".gongneng_zuoyou").offset().top;
    $(window).scroll(function(){
        slideIn($(".gongneng_title"),0);
    });
});


/*����*/
function slideIn2(obj,left){
    var targetHeight = obj.offset().top;
    var scrollTop = $(this).scrollTop();
    if(scrollTop>targetHeight-650){
        obj.animate({left:left+'px',opacity:1,filter:'Alpha(opacity=90)'},700);
    }
}
/*�ҵ���*/
function slideIn3(obj,left){
    var targetHeight = obj.offset().top;
    var scrollTop = $(this).scrollTop();
    if(scrollTop>targetHeight-650){
        obj.animate({left:left+'px',opacity:1,filter:'Alpha(opacity=90)'},700);
    }
}

$(function(){
    var targetHeight = $(".gongneng_zuoyou").offset().top;
    $(window).scroll(function(){
        slideIn2($(".youdanru"),100);
    });
    $(window).scroll(function(){
        slideIn3($(".zuodanru"),50);
    });
});
