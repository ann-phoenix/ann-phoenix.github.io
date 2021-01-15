
$(function () {


	$('.burger').on('click', function () {
		$(this).toggleClass('open');
		$('.nav').toggleClass('open');
		$('body').toggleClass('no-scroll');
	});


	
	$('.nav .nav__link').on('click', function () {
		$('.burger').removeClass('open');
		$('.nav').removeClass('open');
		$('body').removeClass('no-scroll');

	});

	$('nav a[href*="#"]').on('click', function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 60
		}, 1500);
	});

	AOS.init({
		easing:'ease',
		duration: 800,
		once: true,
		disable: 'phone',
	});

});