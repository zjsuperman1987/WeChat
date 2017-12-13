//页面初始化
window.onload = function () {
        var obj = [
          {
              custId: 001,
              brandName: "杜维尔",
              secondParty: "张三",
              resource: "南坪亚太上谷",
              reminder: "未催缴",
              bill: "2039.00"
          },
          {
              custId: 002,
              brandName: "澳柯玛",
              secondParty: "李四",
              resource: "新牌坊三路-10号-1层至15层",
              reminder: "未催缴",
              bill: "2039.00"
          },
          {
              custId: 003,
              brandName: "杰克逊",
              secondParty: "王麻子",
              resource: "新牌坊三路-10号-1层至15层",
              reminder: "未催缴",
              bill: "2039.00"
          }
        ]



    var createPage = (function render(obj) {
        if (obj === null) return;
        $.each(obj, function (index) {
            var html = '<div class="grid_row bb" data-userid=' + obj[index].custId + '>' +
                   ' <div class="grid_row_tr f12">' +
                       ' <div class="fl"><span>品牌名称:</span> ' + obj[index].brandName + '</div>' +
                       ' <div class="fr specifiyFont">' + obj[index].reminder + '</div>' +
                    '</div>' +
                   ' <div class="grid_row_tr f12">' +
                        '<div class="fl">乙方:<span>' + obj[index].secondParty + '</span></div>' +
                       '<div class="fr specifiyFont">¥ +<span>' + obj[index].bill + '</span></div>' +
                    '</div>' +
                   ' <div class="grid_row_tr f12">' +
                       ' <div class="fl">资源:<span>' + obj[index].resource + '</span></div>' +
                   ' </div>' +
                    '<div class="grid_row_tr f12">' +
                       ' <div class="fl">当月账单 : <span class="specifiyFont">¥ ' + obj[index].bill + '</span></div> ' +
                       ' <div class="fr"><span class="lookDetail">查看详情</span></div>' +
                    '</div>' +
                  ' </div>'

            var $block = $(html)
            $('body').append($block)
        })
    })(obj)


    var date = PubDate.format(new Date, "yyyy-MM-dd");
    var $bottom = $('<div class="grid_row bb bg_ccc"></div>' +
           '<div class="grid_row bb">' +
            '<div class="grid_row_tr f12">' +
                '<div class="fl">当前时间 : <span>' + date + '</span></div>' +
                '<div class="fr">更多</div>' +
            '</div>' +
           '</div>')
    $('body').append($bottom);

    $('.lookDetail').on('click',function(event){
        var userId = event.target.parentNode.parentNode.parentNode.dataset.userid;
       
        window.location.href = "./BillsDetail.html?userId=" + userId
    })
}



//初始化控制
var InitControl = (function () {
    return {
        //菜单按钮显示隐藏
        InitMenu: function () {

        }
    }
})()
