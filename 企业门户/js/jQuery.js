$(".banner1 .h4").hover(
    function(){
        $(this).css("border-left","3px solid #000");
        $(this).css("padding-left","20px")
    },
    function(){
        $(this).css("border-left","none");
        $(this).css("padding-left","0")
    }
)
$(".banner3 .banner31 .dian ul li a").click(
    function(){
        $(".banner3 .banner31 .banner3_ul li").eq($(this).index()).show().siblings().hide();
}
);
$(".banner4 .col-md-4 img").hover(
    function(){
        $(this).next().css("display","block");
    }
,function(){
        $(this).next().css("display","none");
    }
    );
function checkEmail(){
    var e=document.getElementById("email").value;
    var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(!a.test(e)){
        alert("邮箱不正确")
    }
};
$(".banner31").slide({
     titCell:".hd ul",
    mainCell:".bd ul",
    autoPage:true,
    effect:"leftLoop",
    autoPlay:false,
    trigger:"click"
});
/*$(".dianji1").click(function(){
    $(".section_3 .section_31").removeClass("hide")
});
$(".section_31 .off").click(function() {
    $(".section_3 .section_31").addClass("hide")
});
$(".dianji2").click(function(){
    $(".section_3 .section_32").removeClass("hide")
});
$(".section_32 .off").click(function() {
    $(".section_3 .section_32").addClass("hide")
});
$(".dianji3").click(function(){
    $(".section_3 .section_33").removeClass("hide")
});
$(".section_33 .off").click(function() {
    $(".section_3 .section_33").addClass("hide")
});*/










