/**
 * Created by lenovo on 18/1/18 018.
 */
/*var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    loop: true,
    nextButton: '.swiper-button-prev',
    onInit: function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper);
    }
});*/
var music=document.getElementById("music");
var music_bg=document.querySelector(".music_bg");
var music_tp=document.querySelector(".music_tp");
var audio=document.querySelector("audio");
var flog=1;
music.onclick=function(){
    if(flog==1){
        music_bg.style.display="none";
        music_tp.style.animation="none";
        audio.pause();
        flog=0
    }else {
        music_bg.style.display="block";
        music_tp.style.animation="mymusic 2s linear infinite";
        audio.play();
        flog=1
    }
}
