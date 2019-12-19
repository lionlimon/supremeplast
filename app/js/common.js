var newsSwiper = new Swiper('.news-slider', {
	slidesPerView: 2,
	spaceBetween: 40,
	slidesPerGroup: 2,
	loop: true,
	navigation: {
		nextEl: `.news-slider-nav__next`,
		prevEl: `.news-slider-nav__prev`
	},
	breakpoints: {
		541: {
			slidesPerView: 1,
			spaceBetween: 15,
			slidesPerGroup: 1
		}
	},
});

var headerSwiper = new Swiper('.main-header__slider', {
	spaceBetween: 40,
	slidesPerView: 1
})