//封装一个文本框获得焦点事件的函数
function inputOnfocus(element,elementInfo,message){
	if(element.value === ""){
		elementInfo.className = "text-muted";
		elementInfo.innerHTML = message;
	}
}
//封装一个文本框失去焦点事件的函数
function inputOnblur(element,elementInfo,regExp,message1,message2,message3){
	if(element.value === "") {
        elementInfo.className = "text-danger";
        elementInfo.innerHTML = message1;
        return false;
	}else if(regExp) {
        elementInfo.className = "text-danger";
        elementInfo.innerHTML = message2;
        return false;
    }else{
        elementInfo.className = "text-success";
        elementInfo.innerHTML = message3;
        return true;
    }
}


/*用户名*/
var username = document.getElementById("username");
var usernameInfo = document.getElementById("usernameInfo");
//中文、字母、英文、数字、并且2-18位
var usernameReg = /^[\u4e00-\u9fa5_0-9a-zA-Z]{2,18}$/; 
//用户名获得焦点的时候
username.onfocus = function(){
	/*if(username.value === ""){
		usernameInfo.className = "text-muted";
		usernameInfo.innerHTML = "支持中文、字母、数字的2-18个字符";
	}*/
	inputOnfocus(username,usernameInfo,"支持中文、字母、_、数字的2-18个字符");
};
//用户名失去焦点的时候
username.onblur = function(){
	/*if(username.value === "") {
        usernameInfo.className = "text-danger";
        usernameInfo.innerHTML = "请输入用户名";
        return false;
   }else if(usernameReg.test(username.value) != true) {
        usernameInfo.className = "text-danger";
        usernameInfo.innerHTML = "格式错误，仅支持中文、字母、数字2-18个字符";
        return false;
    }
    else{
        usernameInfo.className = "text-success";
        usernameInfo.innerHTML = "对了";
        return true;
    }*/
   /*var regExp = usernameReg.test(username.value) != true;
   inputOnblur(username,usernameInfo,regExp,"请输入用户名","格式错误，仅支持中文、字母、数字2-18个字符","对了");*/
	usernameOnblur();
};
function usernameOnblur(){
	var regExp = usernameReg.test(username.value) != true;
    return inputOnblur(username,usernameInfo,regExp,"请输入用户名","格式错误，仅支持中文、字母、数字2-18个字符","对了");
}


/*密码1*/
var password = document.getElementById("password");
var passwordInfo = document.getElementById("passwordInfo");
//字母数字并且6-18
var passwordReg = /^[0-9a-zA-Z]{6,18}$/;
//密码1获得焦点的时候
password.onfocus = function(){
	/*if(password.value === ""){
		passwordInfo.className = "text-muted";
		passwordInfo.innerHTML = "支持字母、数字的6-18个字符";
	}*/
	inputOnfocus(password,passwordInfo,"建议使用字母、数字两种组合的长度为6-18个字符");
};
//密码1失去焦点的时候
password.onblur = function(){
	/*var regExp = passwordReg.test(password.value) != true;
    inputOnblur(password,passwordInfo,regExp,"请输入密码","格式错误，仅支持字母、数字6-18个字符","对了");
	*/
	passwordOnblur();
};
function passwordOnblur(){
	var regExp = passwordReg.test(password.value) != true;
    return inputOnblur(password,passwordInfo,regExp,"请输入密码","格式错误，仅支持字母、数字6-18个字符","对了");

}
//密码1释放键盘的时候
password.onkeyup = function(){ //某个键盘按键被松开。
    var i = password.value.length;
    if (i < 6){
        password.style.borderColor = "#a94442";
        return false;
    }else if (i > 18){
        password.style.borderColor = "#a94442";
        return false;
    }else{
        password.style.borderColor = "#3c763d";
        return true;
    }
};



/*密码2*/
var password2 = document.getElementById("password2");
var password2Info = document.getElementById("password2Info");
//密码2获得焦点的时候
password2.onfocus = function(){
	inputOnfocus(password2,password2Info,"请再次输入密码");
};
//密码2失去焦点的时候
password2.onblur = function(){
	/*var regExp = password.value != password2.value;
    inputOnblur(password2,password2Info,regExp,"请再次输入密码","密码不一致","密码一致");
	*/
	password2Onblur();
};
function password2Onblur(){
	var regExp = password.value != password2.value;
    return inputOnblur(password2,password2Info,regExp,"请再次输入密码","密码不一致","密码一致");
}


/*手机号*/
var tel = document.getElementById("tel");
var telInfor = document.getElementById("telInfo");
var telReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
//手机号获得焦点的时候
tel.onfocus = function(){
	inputOnfocus(tel,telInfo,"请输入手机号码");
};
//手机号失去焦点的时候
tel.onblur = function(){
	/*var regExp = telReg.test(tel.value) != true;
    inputOnblur(tel,telInfo,regExp,"请输入手机号码","请填写正确的手机号码","对了");
	*/
	telOnblur();
};
function telOnblur(){
	var regExp = telReg.test(tel.value) != true;
    return inputOnblur(tel,telInfo,regExp,"请输入手机号码","请填写正确的手机号码","对了");
}

/*验证码*/
var code = document.getElementById("code");
var codeInfo = document.getElementById("codeInfo");
//验证码获得焦点的时候
code.onfocus = function(){
	inputOnfocus(code,codeInfo,"请输入验证码");
};
//获取验证码按钮
var num;
var getCode = document.querySelector("#getCode");
getCode.onclick = function () {
    num = Math.floor(Math.random() * 9000) + 1000; //随机输出一个四位数的验证码
    alert("验证码为：" + num);
    var time = 5;
    var t;
    getCode.className += " codeHide";
    getCode.innerHTML = time--;
    getCode.disabled = "disabled";
    t = setInterval(function () {
        if (time > 0) {
            getCode.className += " codeHide";
            getCode.innerHTML = time--;
            getCode.disabled = "disabled";
        } else {
            clearInterval(t);
            getCode.className = "getCode";
            getCode.innerHTML = "获取验证码";
            getCode.disabled = "";
        }
    }, 1000);
};
//验证码失去焦点的时候
code.onblur = function(){
	/*var regExp = code.value != num;
    inputOnblur(code,codeInfo,regExp,"请输入验证码","您输入的验证码不正确，请重新输入","通过");
	*/
	codeOnblur();
};
function codeOnblur(){
	var regExp = code.value != num;
    return inputOnblur(code,codeInfo,regExp,"请输入验证码","您输入的验证码不正确，请重新输入","通过");
}

//阅读接受协议
var check = document.querySelector("#check");
//如果勾选了，返回true，否则返回false
function xyCheck() {
    if(check.checked){
        return true;
    }else{
        return false;
    }
}

function tijiao(){ //提交
    if(usernameOnblur() && passwordOnblur() && password2Onblur() && telOnblur() && codeOnblur()){
        alert("验证通过");
        return true;
    }else if(!xyCheck()) {
        alert("请勾选用户协议");
        return false;
    }else{
        alert("请确认信息是否完整");
        return false;
    }
}