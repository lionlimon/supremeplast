$(function () {


	$(".main-header__slider").owlCarousel({
		items: 1,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
	});

	$(".news-owl").owlCarousel({
		responsive: {
			0: {
				items: 1,
				slideBy: 1,
				margin: 30
			},
			541: {
				items: 2,
				slideBy: 2,
				margin: 30
			},
			1367: {
				items: 2,
				slideBy: 2,
				margin: 40
			},
		},
		nav: true,
		loop: true,
		navContainerClass: "news-slider-nav",
		navClass: ["news-slider-nav__prev", "news-slider-nav__next"],
		navText: [`<svg class="news-slider-nav__icon" xmlns="http://www.w3.org/2000/svg" width="36.09" height="29.21" viewBox="0 0 36.09 29.21">
								<metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
								<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        ">
									<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
											<rdf:Description rdf:about=""/>
									</rdf:RDF>
								</x:xmpmeta>
								<?xpacket end="w"?></metadata>
								<defs>
									<style>
										.cls-1 {
											fill-rule: evenodd;
										}
									</style>
								</defs>
								<path id="Влево" class="cls-1" d="M1698,2814h36v1h-36v-1Zm-0.11.5,14.61-14.61,0.71,0.71-14.61,14.6Zm0,0,0.71-.71,14.61,14.61-0.71.7Z" transform="translate(-1697.91 -2799.88)"/>
							</svg>`,
			`<svg class="news-slider-nav__icon" xmlns="http://www.w3.org/2000/svg" width="36" height="29.03" viewBox="0 0 36 29.03">
								<metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
								<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c142 79.160924, 2017/07/13-01:06:39        ">
									<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
											<rdf:Description rdf:about=""/>
									</rdf:RDF>
								</x:xmpmeta>
								<?xpacket end="w"?></metadata>
								<defs>
									<style>
										.cls-1 {
											fill-rule: evenodd;
										}
									</style>
								</defs>
								<path id="Вправо" class="cls-1" d="M1799.91,2814.99H1764V2814h35.91v0.99Zm0.1-.49-14.56,14.51-0.71-.7,14.57-14.51Zm0,0-0.7.69-14.57-14.51,0.71-.7Z" transform="translate(-1764 -2799.97)"/>
							</svg>`],
	});

});
var newsSwiper = new Swiper('.news-slider', {
	spaceBetween: 40,
	slidesPerView: 2,
	slidePrevClass: "news-slider-nav__prev",
	slideNextClass: "news-slider-nav__next"
})