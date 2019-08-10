/**
 * Created by Lenovo on 2019-7-25.
 */
window.onload = function() {
    var swiper = new Swiper('.swiper-container',{
        autoplay:3000,
        speed:1000,
        autoplayDisableOnInteraction : false,
        loop:true,
        centeredSlides : true,
        slidesPerView:2,
        pagination : '.swiper-pagination',
        paginationClickable:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        onInit:function(swiper){
            swiper.slides[2].className="swiper-slide swiper-slide-active";//��һ�δ򿪲�Ҫ����
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        }
    });
}