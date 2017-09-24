$(document).ready(function() {
	var link = $('.modal-window iframe').attr('src');
	$('#playVideo').click(function() {
		link += '?autoplay=1';
		$('.modal-window iframe').attr('src', link);
		$('.modal-shade').show();
		$('.modal-window').show();
	});

	$('.modal-shade').click(function () {
		$('.modal-window iframe').attr('src', '');
		$(this).hide();
		$('.modal-window').hide();
	})
});