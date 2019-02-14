$(document).ready(function(){
	$('#features-carousel').owlCarousel({
		items: 3,
		loop: true,
		center: true,
		margin: 10,
		navText: ["",""],
		nav: true
	});
	$('#package-carousel').owlCarousel({
		items: 3,
		loop: true,
		center: true,
		margin: 10,
		navText: ["",""],
		nav: true
	});
	$('#feedback-carousel').owlCarousel({
		items: 1,
		loop: true,
		center: true,
		margin: 10,
		navText: ["",""],
		nav: false
	});
});