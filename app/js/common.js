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


var headerSwiper = new Swiper('.main-header__slider', {
	spaceBetween: 40,
	slidesPerView: 2
});

var newsSwiper = new Swiper('.news-slider', {
	spaceBetween: 40,
	slidesPerView: 2,
	slidePrevClass: "news-slider-nav__prev",
	slideNextClass: "news-slider-nav__next"
})
});