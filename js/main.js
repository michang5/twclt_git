
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

	$win.scroll(function(){
		var _none = $menu.hasClass('none'),
		    _fixed = $menu.hasClass('fixed');
		
		if($win.scrollTop() >= _menuOffset.top){
			if(!_fixed){
				$menu.addClass('fixed').css('left', _menuOffset.left);
				$menuA.addClass('white');
//				$content.css('margin-top', _menuOuterHeight);
			}
		} else {
			if(_fixed){
				$menu.removeClass('fixed').css('left', 0);
				$menuA.removeClass('white');
//				navMain.addClass('absolute');
//				$content.css('margin-top', 0);
			}
		}
	});	
});
(function ($) {
//	$(window).load(function(){
//      $("#navigation").sticky({ topSpacing: 0 });
//    });
//	
//	//jQuery to collapse the navbar on scroll
//	$(window).scroll(function() {
//		if ($(".navbar").offset().top > 50) {
//			$(".navbar-fixed-top").addClass("top-nav-collapse");
//		} else {
//			$(".navbar-fixed-top").removeClass("top-nav-collapse");
//		}
//	});
	
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

