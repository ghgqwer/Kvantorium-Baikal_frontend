$(document).ready(function () {
	$('.burger__header').click(function () {
		$('.burger__header').toggleClass('open-menu');
	});
});
$(document).ready(function () {
	$('.burger__header').click(function () {
		$('.burger__header').toggleClass('open-menu');
		$('.header__block').toggleClass('open-menu');
	});
});