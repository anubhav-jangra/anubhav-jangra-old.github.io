var info = $(".info");
var navbar = $('.navbar');
var sticky = navbar.scrollHeight;

$('.home-link').on('click', function() {
	$('#home').collapse('show');
	$('#research').collapse('hide');
	$('#proj').collapse('hide');
	$('#cont').collapse('hide');
});

$('.research-link').on('click', function() {
	$('#home').collapse('hide');
	$('#research').collapse('show');
	$('#proj').collapse('hide');
	$('#cont').collapse('hide');
});

$('.project-link').on('click', function() {
	$('#home').collapse('hide');
	$('#research').collapse('hide');
	$('#proj').collapse('show');
	$('#cont').collapse('hide');
});
$('.contact-link').on('click', function() {
	$('#home').collapse('hide');
	$('#research').collapse('hide');
	$('#proj').collapse('hide');
	$('#cont').collapse('show');
});

