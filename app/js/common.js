$(function () {


	// $(".main-header__slider").owlCarousel({
	// 	items: 1,
	// 	nav: true,
	// 	autoplay: true,
	// 	autoplayTimeout: 3000,
	// 	loop: true,
	// });

	// $(".news-owl").owlCarousel({
	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 			slideBy: 1,
	// 			margin: 30
	// 		},
	// 		541: {
	// 			items: 2,
	// 			slideBy: 2,
	// 			margin: 30
	// 		},
	// 		1367: {
	// 			items: 2,
	// 			slideBy: 2,
	// 			margin: 40
	// 		},
	// 	},
	// 	nav: true,
	// 	loop: true,
	// 	navContainerClass: "news-slider-nav",
	// 	navClass: ["news-slider-nav__prev", "news-slider-nav__next"],
	// });

});
var newsSwiper = new Swiper('.news-slider', {
	spaceBetween: 40,
	slidesPerView: 2,
	navigation: {
		nextEl: `.news-slider-nav__next`,
		prevEl: `.news-slider-nav__prev`
	}
})
var headerSwiper = new Swiper('.main-header__slider', {
	spaceBetween: 40,
	slidesPerView: 1
})