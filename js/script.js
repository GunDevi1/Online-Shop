new Swiper('.mySwiper', {
	spaceBetween: 30,

	loopedSlides: 0,

	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},

	slidesPerView: 4,
	loop: true,
	autoplay: {
		delay: 3000,
	},

	speed: 800,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})
