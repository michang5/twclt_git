
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
})(jQuery);

$(function(){  
	//Enable swiping...
	$(".carousel-inner, #navigation").swipe( {
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

$( document ).ready( function() {
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', '.tab', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', '.tab', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.tab-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.tab', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});

