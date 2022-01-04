//保存Cookie
function setCookie(cookieName, value) {
    var expires = new Date();
    //存入cookie三个月
    expires.setTime(expires.getTime() + 3 * 30 * 24 * 60 * 60 * 1000);
    var str = cookieName + '=' + value + ';expires=' + expires.toGMTString();
    document.cookie = str;
    return true;
}

//获取cookie
function getCookie(cookieName) {
    var cookieStr = unescape(document.cookie);
    var arr = cookieStr.split("; ");
    var cookieValue = null;
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i].split("=");
        if (temp[0] == cookieName) {
            cookieValue = temp[1];
            break;
        }
    }
    return cookieValue;
}

//删除cookie
function delCookie(cookieName) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    //获取cookie是否存在
    var value = getCookie(cookieName);
    if (value != null) {
        // 这里删除操作其实是将expires过期时间设置为当前时间，使cookie立即过期
        document.cookie = cookieName + "=" + value + ";expires=" + exp.toUTCString();
    }
}