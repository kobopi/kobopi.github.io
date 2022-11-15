// 浏览器标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '再多看一眼啦！（；´д｀）ゞ';
        clearTimeout(titleTime);
    }
    else {
        document.title = '好耶！（＾∀＾●）ﾉｼ';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
