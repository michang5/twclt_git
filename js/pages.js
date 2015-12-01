$(function () {
	var $win = $(window),
		$menu = $('#menu'),
		_menuOffset = $menu.offset(),
		$menuA = $menu.find('a'),
		$content = $('#content');

	$menuA.click(function () {
		var $this = $(this),
			_href = $this.prop('hash');

		$('.selected').removeClass('selected');
		$(this).addClass('selected');

		$('html, body').stop().animate({
			scrollTop: $(_href).offset().top - 60
		});

		return false;
	});



	$win.scroll(function () {
		var _fixed = $menu.hasClass('fixed');
		if ($win.scrollTop() >= _menuOffset.top) {
			if (!_fixed) {
				$menu.addClass('fixed');
				$content.css('margin-top', '80px');
			}
		} else {
			if (_fixed) {
				$menu.removeClass('fixed');
				$content.css('margin-top', '0');
			}
		}
	});

	$win.scroll(function () {
		var _scrollTop = $win.scrollTop() + 60;

		for (var i = 0; i < $menuA.length; i++) {
			var $a = $menuA.eq(i),
				_href = $a.prop('hash'),
				$tmp = $(_href),
				_tmpOffsetTop = $tmp.offset().top,
				_tmpHeight = $tmp.outerHeight(true);

			if (_scrollTop >= _tmpOffsetTop && _scrollTop <= _tmpOffsetTop + _tmpHeight) {
				$('.selected').removeClass('selected');
				$a.addClass('selected');
				return;
			}
		}

		$('.selected').removeClass('selected');
	});
});


$('.collapse-heading').click(function () {
	$('.collapse-body').slideUp();
	$('.collapse-controls').removeClass('open');
	if ($(this).next('.collapse-body').css('display') == 'block') {
		$('.collapse-body').slideUp('open');
	} else {
		$(this).next('.collapse-body').slideDown();
		$(this).children('.collapse-controls').addClass('open');
	}
});