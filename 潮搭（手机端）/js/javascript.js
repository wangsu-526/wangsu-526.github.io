/**
 * Created by lenovo on 18/3/12 012.
 */
    /*登录页验证码js代码*/
/*var code ; //在全局 定义验证码
function createCode() {
    code = "";
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("checkCode");
    var selectCode = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);//所有候选组成验证码的字符，当然也可以用中文的

    for (var i = 0; i < codeLength; i++) {


        var charIndex = Math.floor(Math.random() * 10);  //输出0～10之间的随机整数
        code += selectCode[charIndex];


    }
    if(checkCode)
    {
        checkCode.className="code";
        checkCode.value = code;
    }

}*/

/*倒计时*/
var countdown=60;
function settime(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value = "免费获取验证码";
        countdown = 60;
    } else {
        val.setAttribute("disabled", true);
        val.value = "重新发送(" + countdown + ")";
        countdown--;
        setTimeout(function () {
            settime(val)
        }, 1000)
    }
}
    /*购物车加减*/
/*
var btn=document.getElementById('content');
var number=parseInt(btn.value);
function reduce(){
    if (number==1)return;
    number--;
    btn.value=number
}
function add(){
    if(number>=100)return;
    number++;
    btn.value=number
}
*/

var wenzi1=document.getElementById("shopping-wenzi").innerHTML;
var wenzi=parseFloat(wenzi1);
var btn=document.getElementById('content');
var number=parseInt(btn.value);
function reduce(){
    if (number==1)return;
    number--;
    btn.value=number;
    wenzi1=wenzi/number
}
function add(){
    if(number>=100)return;
    number++;
    btn.value=number;
    wenzi1=162*number
}


