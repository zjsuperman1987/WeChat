$(function(){
	$('.menu').on('click',function(eve){
		// $(eve.currentTarget).addClass('menu-flex-item-controlBorder')
		if(eve.target.nodeName.toLowerCase() == 'span') {
			$('.menu-flex-item').removeClass('menu-flex-item-controlBorder');
			$(eve.target.parentNode).addClass('menu-flex-item-controlBorder');
		}else{
			$('.menu-flex-item').removeClass('menu-flex-item-controlBorder');
			$(eve.target).addClass('menu-flex-item-controlBorder');
		}
	})
})