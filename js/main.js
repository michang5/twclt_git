
$(function(){
	var $win = $(window), 
		$htmlBody = $('html, body'), 
		$menu = $('#navigation'), 
		_menuOffset = $menu.offset(), 
		_menuHeight = $menu.height(), 
		_menuOuterHeight = $menu.outerHeight(true), 
		$menuA = $menu.find('a'),
		navMain = $("#main-nav"),
		musician = $("#musician"),
		$navCollapse = $('#nav-collapse');
//		$content = $('.section');
	
	$menuA.click(function(){
		var $this = $(this), 
			_href = $this.prop('hash');
	
		$('.selected').removeClass('selected');
		$(this).addClass('selected');

		$htmlBody.stop().animate({
			scrollTop: $(_href).offset().top - _menuHeight
		});
		
		navMain.collapse('hide');
		
		return false;
	});
});
(function ($) {
	$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
        e.stopPropagation();
    });
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.train-menu a, .fix-icon a').bind('click', function(event) {
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
	});
	$('.modal').on('hidden.bs.modal', function () {
		$('video').get(0).pause();
	})
	$('.modal').on('hidden.bs.modal', function () {
		$('audio').get(0).pause();
	})
	$('#portfolio_cindy-2').on('hidden.bs.modal', function () {
		$('#portfolio_cindy-2 audio').get(0).pause();
	})
	
})(jQuery);

$(function(){  
	//Enable swiping...
	$(".carousel-inner").swipe( {
		//Generic swipe handler for all directions
			swipeLeft:function(event, direction, distance, duration, fingerCount) {
				$(this).parent().carousel('next'); 
			},
			swipeRight: function() {
				$(this).parent().carousel('prev'); 
			},
			threshold:0
		});
	}
);

