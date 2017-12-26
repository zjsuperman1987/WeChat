//页面初始化
window.onload = function () {
    //切换Tab
    InitControl.ChangeTab();
}


//初始化控制
var InitControl = (function () {
    return {
        //菜单按钮显示隐藏
        InitMenu: function () {

        },
        //切换Tab
        ChangeTab: function () {
            $("#AgentTop ul li").click(function () {
                var num = $("#AgentTop ul li").index(this);
                $("#AgentTop ul li").eq(num).addClass("bbc").siblings().removeClass("bbc");
                $("#AgentCenter .AgentInfo").eq(num).show().siblings().hide();

                // 切换content
                $('.brand_content_wrap>li').css('display', 'none').eq(num).css('display', 'block');
            });
        }
    }
})();
