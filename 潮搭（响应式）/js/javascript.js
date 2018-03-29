/**
 * Created by Administrator on 2018/1/24.
 */
//定义全局变量和定时器
var i = 0 ;
var timer;

$(document).ready(function(){
    //用jquery方法设置第一张图片显示，其余隐藏
    $('.slider-main-img').eq(0).show().siblings('.slider-main-img').hide();

    //调用showTime()函数（轮播函数）
    showTime();

    //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    $('.slider-tu-img').hover(function(){
        //获取当前i的值，并显示，同时还要清除定时器
        i = $(this).index();
        Show();
        clearInterval(timer);
    },function(){
        //
        showTime();
    });

    //鼠标点击左侧的箭头
    $('.slider-ctrl-prev').click(function(){
        clearInterval(timer);
        if(i == 0){
            i = 5;//注意此时i的值
        }
        i--;
        Show();
        showTime();
    });

    //鼠标点击右侧的箭头
    $('.slider-ctrl-next').click(function(){
        clearInterval(timer);
        if(i == 4){
            i = -1;//注意此时i的值
        }
        i++;
        Show();
        showTime();
    });

});


//创建一个showTime函数
function showTime(){
    //定时器
    timer = setInterval(function(){
        //调用一个Show()函数
        Show();
        i++;
        //当图片是最后一张的后面时，设置图片为第一张
        if(i==5){
            i=0;
        }
    },2000);
}


//创建一个Show函数
function Show(){
    //在这里可以用其他jquery的动画
    $('.slider-main-img').eq(i).fadeIn(300).siblings('.slider-main-img').fadeOut(300);

    //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
    $('.slider-tu-img').eq(i).addClass('md').siblings('.slider-tu-img').removeClass('md');

    /*
     * css中添加的代码：
     * .bg{ background-color: #f00; }
     * */
}
