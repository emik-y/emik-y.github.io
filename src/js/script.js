window.addEventListener('load', function(e) {
	$('.slider1 .owl-carousel').owlCarousel({
		items: 3,
		loop: true,
		autoplayHoverPause: true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			1200:{
				items:2,
			},
			1400:{
				items:3,
			}
		}
	});$('.slider2 .owl-carousel').owlCarousel({
		items: 2,
		loop: true,
		autoplayHoverPause: true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			1200:{
				items:2,
			}
		}
	});
});