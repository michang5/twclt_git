$(function () {
	function toggle() {
		$("#nav").toggleClass("toggle")
	}
	$(".btn-toggle, .btn-close").on("click", toggle);

	$("#nav").hover(function () {
		$(this).stop().removeClass("toggle")

	}, function () {
		$(this).stop().addClass("toggle")
	})
	
	$(".modal#video-content").on('hidden.bs.modal', function () {
		$("#video-content iframe").attr("src", $("#video-content iframe").attr("src"));
	});
});
