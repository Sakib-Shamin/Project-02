$(document).ready(function() {
	var link = $('.modal-window iframe').attr('src');
	if($(window).width() < 768)
	{
		$('.modal-window iframe').attr('width', '250');
		$('.modal-window iframe').attr('height', '150');
	}
	
	else if($(window).width() >= 768 && $(window).width() < 992)
	{
		$('.modal-window iframe').attr('width', '400');
		$('.modal-window iframe').attr('height', '250');
	}

	else
	{
		$('.modal-window iframe').attr('width', '560');
		$('.modal-window iframe').attr('height', '315');
	}
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
