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
	// $('#docs-carousel').owlCarousel({
	// 	items: 3,
	// 	loop: true,
	// 	center: true,
	// 	margin: 10,
	// 	navText: ["",""],
	// 	nav: true
	// });
});