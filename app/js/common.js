document.addEventListener('DOMContentLoaded', function(){
	



//Сладейр под меню


//Меню
	var navit = document.querySelectorAll('.main-header__nav-item');
	var frstsublist = document.querySelectorAll('.main-header__frst-sub-menu-item');
	frstsublist.forEach(function(el, index) {
		setTimeout(function(){
			if(el.querySelector('.main-header__sec-sub-menu')){
				var wdth = el.querySelector('.main-header__sec-sub-menu').offsetWidth;
				el.querySelector('.main-header__sec-sub-menu').style.display = 'none';
				el.querySelector('.main-header__sec-sub-menu').style.right = '-' + wdth + 'px';
				el.querySelector('.main-header__sec-sub-menu').style.visibility = 'visible';
				// this.querySelector('.main-header__sec-sub-menu').style.right = '-' + wdth + 'px';
				}
		}, 300)
			
				if(el.querySelector('.main-header__sec-sub-menu')){
				el.addEventListener('mouseover', function(){

			if(this.querySelector('.main-header__sec-sub-menu')){
				
				if(document.body.clientWidth > 1199){
					this.querySelector('.main-header__sec-sub-menu').style.display = 'block';
				}
			}
			})
			el.addEventListener('mouseout', function(){
				if(this.querySelector('.main-header__sec-sub-menu')){
					this.querySelector('.main-header__sec-sub-menu').style.display = 'none';
				}
			})
				}
				// console.log(this.querySelector('.main-header__frst-sub-menu'));
			})
	navit.forEach(function(el, index) {
		setTimeout(function(){
		if(el.querySelector('.main-header__frst-sub-menu')){
			el.querySelector('.main-header__frst-sub-menu').style.display = 'none';
			el.querySelector('.main-header__frst-sub-menu').style.visibility = 'visible';
		}
		}, 300)
			el.addEventListener('mouseover', function(){
		// console.log(navit);
		// var aa = this.querySelectorAll('.main-header__frst-sub-menu')[0];
			if(this.querySelector('.main-header__frst-sub-menu')){
				if(document.body.clientWidth > 1199){
					this.querySelector('.main-header__frst-sub-menu').style.display = 'block';
				}
			}
			// console.log(this.querySelector('.main-header__frst-sub-menu'));
		})
		el.addEventListener('mouseout', function(){
			if(this.querySelector('.main-header__frst-sub-menu')){
				this.querySelector('.main-header__frst-sub-menu').style.display = 'none';
			}
		})
	});



	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".main-header__nav-list-wrap"); // тут указываем ID элемента
		if($(".main-header__nav-list-wrap").css('left') == '0px'){
			console.log($(".main-header__nav-list-wrap").css('left'));
			if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.css('left', '-280px'); // скрываем его
				$('.main-header__overlay-for-menu').hide();
			}
		}
});




if (document.getElementsByClassName('news-slider').length > 0) {
	var newsSwiper = new Swiper('.news-slider', {
		slidesPerView: 2,
		spaceBetween: 40,
		slidesPerGroup: 2,
		loop: true,
		slidePrevClass: 'news-slide-prev',
		navigation: {
			nextEl: `.news-slider-nav__next`,
			prevEl: `.news-slider-nav__prev`
		},
		breakpoints: {
			1366: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerGroup: 2
			},
			541: {
				slidesPerView: 1,
				spaceBetween: 15,
				slidesPerGroup: 1
			}
		},
	});

}

if (document.getElementsByClassName('offers-slider')) {
	var offersSwiper = new Swiper('.offers-slider', {
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: `.offers-slider-nav__next`,
			prevEl: `.offers-slider-nav__prev`
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		// breakpoints: {
		// 	541: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 15,
		// 		slidesPerGroup: 1
		// 	}
		// },
	});

}

var headerSwiper = new Swiper('.main-header__slider', {
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.main-header__swiper-pagination',
		type: 'fraction',
	},
	navigation: {
			nextEl: '.main-header-nav__next',
			prevEl: '.main-header-nav__prev'
		}
})

document.querySelector('.main-header-nav__next-arrow').addEventListener('click', function(){
	headerSwiper.slideNext();
})

document.querySelector('.main-header-nav__prev-arrow').addEventListener('click', function(){
	headerSwiper.slidePrev();
})


});
