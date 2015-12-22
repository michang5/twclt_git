$(function(){
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
	
	$(".modal#card-content").on('hidden.bs.modal', function () {
		$("#card-content iframe").attr("src", $("#card-content iframe").attr("src"));
	});
	
	$(".carousel-indicators li").click(function () {
		$("#video1 iframe").attr("src", $("#video1 iframe").attr("src"));
	});
	
	$(".carousel-indicators li").click(function () {
		$("#video2 iframe").attr("src", $("#video2 iframe").attr("src"));
	});
	
	$(".carousel-indicators li").click(function () {
		$("#video3 iframe").attr("src", $("#video3 iframe").attr("src"));
	});
});
$(function () {
	$(document).ready(function () {

		$(".carousel").swiperight(function () {
			$(this).carousel('prev');
		});
		$(".carousel").swipeleft(function () {
			$(this).carousel('next');
		});

	});
});