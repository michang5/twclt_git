
$(function(){
//	$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
//        e.stopPropagation();
//    });
	$('.carousel').carousel({
		pause: true,
		interval: false
	});
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.fix-icon a').bind('click', function(event) {
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
	$(".modal#crazyad-video").on('hidden.bs.modal', function () {
		$("#crazyad-video iframe").attr("src", $("#crazyad-video iframe").attr("src"));
	});
	
	$(".modal#video").on('hidden.bs.modal', function () {
		$("#video iframe").attr("src", $("#video iframe").attr("src"));
	});
	
	$(".carousel-indicators li").click(function () {
		$(".carousel iframe").attr("src", $(".carousel iframe").attr("src"));
	});

});
