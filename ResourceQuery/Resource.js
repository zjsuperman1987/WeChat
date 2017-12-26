$(function(){
	// ====================================选项卡切换====================================
	// $('.menu').on('click',function(eve){
	// 	if(eve.target.nodeName.toLowerCase() == 'span') {
	// 		$('.menu-flex-item').removeClass('menu-flex-item-controlBorder');
	// 		$(eve.target.parentNode).addClass('menu-flex-item-controlBorder');
	// 	}else if (eve.target.nodeName.toLowerCase() == 'i') {
	// 		$('.menu-flex-item').removeClass('menu-flex-item-controlBorder');
	// 		$(eve.target.parentNode).addClass('menu-flex-item-controlBorder');
	// 	}else {
	// 		$('.menu-flex-item').removeClass('menu-flex-item-controlBorder');
	// 		$(eve.target).addClass('menu-flex-item-controlBorder');
	// 	}
	// });

	$('.menu .menu-flex-item').on('click', function(event){
		var index = $(this).index();
		if(index == 2) {
			$(this).addClass("menu-flex-item-controlBorder").siblings().removeClass("menu-flex-item-controlBorder");
			$('.MainWrap>div').eq(index).css('display', 'block');
			$('.menu').css('position', 'fixed');
		}else {
			$(this).addClass("menu-flex-item-controlBorder").siblings().removeClass("menu-flex-item-controlBorder");
			$('.MainWrap>div').eq(index).css('display','block').siblings().css('display','none');
		}
		
	})
	// ==================================楼层点击=====================================
	$('.buildingWrap>div').on('click',function(){
		$(this).addClass('grid_row_background').siblings().removeClass('grid_row_background');
		$(this.parentNode).css('display','none');

		$($('.menu-flex-item')[0]).removeClass("menu-flex-item-controlBorder");
		$($('.menu-flex-item')[1]).addClass("menu-flex-item-controlBorder");
		$('.floorContentWrap').css('display','block');
	});

	$('.resourceContent .resourceStyle').on("click", function(){
		$(this).addClass("btn_style").siblings().removeClass('btn_style');
	})
	$('.resourceOfType .resourceStyle').on("click", function(){
		$(this).addClass("btn_style").siblings().removeClass('btn_style');
	})

	$('.leaseState .resourceStyle').on("click", function(){
		$(this).addClass("btn_style").siblings().removeClass('btn_style');
	})

	$('.rentandsendState .resourceStyle').on("click", function(){
		$(this).addClass("btn_style").siblings().removeClass('btn_style');
	})

	$('.btn_bottom div').on('click', function(){
		$('.fiftrateContentWrap').css('display','none');
	})

	$('.floorContentWrap .borderAndPadding').on('click',function(){

	})

	// 楼层跳转
	$('.floorContentWrap .grid_row_tr').on('click',function() {
		$(this).addClass('grid_row_background').siblings().removeClass('grid_row_background')
		$('.floorsDetails').css('display','block');
	})

	// $('.floorsDetails_section').on('click',function(){
	// 	$('.floorLast').css('display', 'block')
	// })

	$('.floorsDetails_section').on('click',function(){
		window.location = "./test2.html"
	})
})