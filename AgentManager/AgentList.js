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
        // 取得内容数组
        ChangeTab: function () {
            var arrayContent = $('.mainPage .gridList, .notice, .category, .history');
            $("#AgentTop ul li").click(function () {
                var num = $("#AgentTop ul li").index(this);
                $("#AgentTop ul li").eq(num).addClass("bbc").siblings().removeClass("bbc");
                // console.log($(arrayContent[$(this).index()]));
                arrayContent.css('display', 'none').eq(num).css('display','block');
            });
        },

        //所有按钮点击事件
        ButtonsClick: function (type) {
            switch (type) {
                case "意向书审批":
                    window.location.href = "./OrderDetails.htm?userId=" + userId;
                    break;
                case "合同结算审批":
                    window.location.href = "./ContractClearDetails.htm?userId=" + userId;
                    break;
                case "合同审批":
                    window.location.href = "./ContractDetails.htm?userId=" + userId;
                    break;
                case "合同变更审批":
                    window.location.href = "./ContractAlterDetails.htm?userId=" + userId;
                    break;
                case "实测面积变更审批":
                    window.location.href = "./ContractScAlterDetails.htm?userId=" + userId;
                    break;
                case "业务请示审批":
                    window.location.href = "./OtherDetails.htm?userId=" + userId;
                    break;
                case "政策规划审批":
                    window.location.href = "./FeeAlterDetails.htm?userId=" + userId;
                    break;
                case "应收调整":
                    window.location.href = "./RoomPolicyDetails.htm?userId=" + userId;
                    break;
                case "资源变更":
                    window.location.href = "./RoomAlterDetails.htm?userId=" + userId;
                    break;
                default:
                    break;
            }
        }
    }
})();



<div class="AgentTop bg_ddd" id="AgentTop">
        <ul class="menu f14" style="background-color: inherit;">
            <li class="fl tc mt10 bbc">业务数据</li>
            <li class="fl tc mt10">审批记录</li>
            <li class="fl tc mt10">流程步骤</li>
        </ul>
    </div>