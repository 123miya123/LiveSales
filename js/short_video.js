/**
 * Created by Lenovo on 2019-7-30.
 */
$(document).ready(function(){
    $('.box .box1').mouseover(function(){
        $(this).stop().animate({"top":"-514px"}, 200);
    })
    $('.box .box1').mouseout(function(){
        $(this).stop().animate({"top":"0"}, 200);
    })
});