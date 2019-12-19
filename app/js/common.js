document.addEventListener('DOMContentLoaded', function(){
	



//Сладейр под меню


//Меню
	var navit = document.querySelectorAll('.main-header__nav-item');
	var frstsublist = document.querySelectorAll('.main-header__frst-sub-menu-item');
	var secsublist = document.querySelectorAll('.main-header__sec-sub-menu');
	var arrows = document.querySelectorAll('.main-header__nav-item-arrow');
	var arrowsfrstsub = document.querySelectorAll('.main-header__frst-sub-menu-item-arrow');
	var burger = document.querySelector('.main-header__menu-burger');
	var overlay = document.querySelector('.main-header__overlay-for-menu');
	var burger_path = document.querySelector('.main-header__menu-burger-path');
	var menu = document.querySelector('.main-header__nav-list-wrap');
	var oo = false;

	function resetall(){
		frstsublist.forEach(function(el, index) {
			el.querySelector('.main-header__frst-sub-menu-item-link').classList.remove('active');
			if(el.querySelector('.main-header__sec-sub-menu')){
				el.querySelector('.main-header__sec-sub-menu').style.display = 'none';
			}
		})
		navit.forEach(function(el, index) {
			el.querySelector('.main-header__nav-item-link').classList.remove('active');
			if(el.querySelector('.main-header__frst-sub-menu')){
				el.querySelector('.main-header__frst-sub-menu').style.display = 'none';
			}
		})
		arrows.forEach(function(el, index){
			el.classList.remove('active');
		})
		arrowsfrstsub.forEach(function(el, index){
			el.classList.remove('active');
		})
	}

	function resetscndsublist(){
		frstsublist.forEach(function(el, index) {
			el.querySelector('.main-header__frst-sub-menu-item-link').classList.remove('active');
			if(el.querySelector('.main-header__sec-sub-menu')){
				el.querySelector('.main-header__sec-sub-menu').style.display = 'none';
			}
		})
		arrowsfrstsub.forEach(function(el, index){
			el.classList.remove('active');
		})
	}

	frstsublist.forEach(function(el, index) {
		if(window.innerWidth > 1199){
		setTimeout(function(){
			if(el.querySelector('.main-header__sec-sub-menu')){
				var wdth = el.querySelector('.main-header__sec-sub-menu').offsetWidth;
				el.querySelector('.main-header__sec-sub-menu').style.display = 'none';
				el.querySelector('.main-header__sec-sub-menu').style.right = '-' + wdth + 'px';
				el.querySelector('.main-header__sec-sub-menu').style.visibility = 'visible';
				}
		}, 300)
		}
			
				if(el.querySelector('.main-header__sec-sub-menu')){
				el.addEventListener('mouseover', function(){

			if(this.querySelector('.main-header__sec-sub-menu')){
				
				if(window.innerWidth > 1199){
					this.querySelector('.main-header__sec-sub-menu').style.display = 'block';
				}
			}
			})
			el.addEventListener('mouseout', function(){
				
				if(this.querySelector('.main-header__sec-sub-menu')){
					if(window.innerWidth > 1199){
					this.querySelector('.main-header__sec-sub-menu').style.display = 'none';
					}
				}
			})
				}
			})
	navit.forEach(function(el, index) {
		if(window.innerWidth > 1199){
		setTimeout(function(){
		if(el.querySelector('.main-header__frst-sub-menu')){
			el.querySelector('.main-header__frst-sub-menu').style.display = 'none';
			el.querySelector('.main-header__frst-sub-menu').style.visibility = 'visible';
		}
		}, 300)
		}
	    el.addEventListener('mouseover', function(){

			if(this.querySelector('.main-header__frst-sub-menu')){
				if(window.innerWidth > 1199){
					this.querySelector('.main-header__frst-sub-menu').style.display = 'block';
					if(!this.querySelector('.main-header__nav-item-link').classList.contains('main-header__frst-sub-menu-item-link')){
						this.querySelector('.main-header__nav-item-link').classList.add('active');
						this.querySelector('.main-header__nav-item-arrow').classList.add('active');
					}

				}
			}
		})
		el.addEventListener('mouseout', function(){
			if(this.querySelector('.main-header__frst-sub-menu')){
				if(window.innerWidth > 1199){
					this.querySelector('.main-header__frst-sub-menu').style.display = 'none';
					this.querySelector('.main-header__nav-item-link').classList.remove('active');
					this.querySelector('.main-header__nav-item-arrow').classList.remove('active');
				}
			}
		})
	});

	secsublist.forEach(function(el, index){
		
			el.addEventListener('mouseover', function(){
				if(window.innerWidth > 1199){
					el.closest('.main-header__nav-item').querySelector('.main-header__frst-sub-menu-item-link').classList.add('active');
				}
			})
			el.addEventListener('mouseout', function(){
				if(window.innerWidth > 1199){
					el.closest('.main-header__nav-item').querySelector('.main-header__frst-sub-menu-item-link').classList.remove('active');
				}
			})
	})
	arrows.forEach(function(el, index){
		el.addEventListener('mouseup', function(){
			var navit = this.closest('.main-header__nav-item');
			if(navit.querySelector('.main-header__frst-sub-menu')){
				if(navit.querySelector('.main-header__frst-sub-menu').style.display != 'block'){
					resetall();
					navit.querySelector('.main-header__frst-sub-menu').style.display = 'block';
					el.classList.add('active');
					if(!navit.querySelector('.main-header__nav-item-link').classList.contains('main-header__frst-sub-menu-item-link')){
						navit.querySelector('.main-header__nav-item-link').classList.add('active');
					}
				}else{
					navit.querySelector('.main-header__frst-sub-menu').style.display = 'none';
					el.classList.remove('active');
					navit.querySelector('.main-header__nav-item-link').classList.remove('active');
				}
			}
		})
	})
	arrowsfrstsub.forEach(function(el, index){
		el.addEventListener('mouseup', function(){
			var navit = this.closest('.main-header__nav-item');
			if(navit.querySelector('.main-header__sec-sub-menu')){
				if(navit.querySelector('.main-header__sec-sub-menu').style.display != 'block'){
					resetscndsublist();
					navit.querySelector('.main-header__sec-sub-menu').style.display = 'block';
					el.classList.add('active');
					navit.querySelector('.main-header__nav-item-link').classList.add('active');
				}else{
					navit.querySelector('.main-header__sec-sub-menu').style.display = 'none';
					el.classList.remove('active');
					navit.querySelector('.main-header__nav-item-link').classList.remove('active');
				}

			}
		})
	})


	document.addEventListener('mouseup', function(e){
		if(e.target == burger || e.target == burger_path){
			overlay.style.transition = '.4s';
			overlay.style.display = 'block';
			menu.style.transition = '.4s';
			menu.style.left = '0px';
			document.getElementsByTagName('body')[0].style.overflowY = 'hidden'; 
		} else if(e.target == overlay){
			overlay.style.transition = '0s';
			overlay.style.display = 'none';
			menu.style.transition = '.1s';
			menu.style.left = '-280px';
			document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
		}
	})
	window.onresize = function () {
		if(window.innerWidth > 1199){
			document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
			overlay.style.display = 'none';
			menu.style.left = '-280px';
			resetall();
			if(oo != true){
				frstsublist.forEach(function(el, index) {
					if(el.querySelector('.main-header__sec-sub-menu')){
						el.querySelector('.main-header__sec-sub-menu').style.visibility = 'hidden';
						el.querySelector('.main-header__sec-sub-menu').style.display = 'block';
						setTimeout(function(){
								var wdth = el.querySelector('.main-header__sec-sub-menu').offsetWidth;
								el.querySelector('.main-header__sec-sub-menu').style.display = 'none';
								el.querySelector('.main-header__sec-sub-menu').style.right = '-' + wdth + 'px';
								el.querySelector('.main-header__sec-sub-menu').style.visibility = 'visible';
								
						}, 300)
					}
				})
				navit.forEach(function(el, index) {
					if(el.querySelector('.main-header__frst-sub-menu')){
						el.querySelector('.main-header__frst-sub-menu').style.visibility = 'hidden';
						el.querySelector('.main-header__frst-sub-menu').style.display = 'block';
						setTimeout(function(){
								el.querySelector('.main-header__frst-sub-menu').style.display = 'none';
								el.querySelector('.main-header__frst-sub-menu').style.visibility = 'visible';
							
						}, 300)
					}
				})
				oo = true;
			}
		}}

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

	var list = document.querySelectorAll('.js-footer-menu__title');
	list.forEach(function(el, index) {
		var next = el.nextElementSibling;
		if (next != null) {
			el.classList.add('footer-menu__title_angle');
			el.addEventListener('click', function() {
				if (this.nextElementSibling.style.display == "block" &&  window.innerWidth < 768) {
					this.nextElementSibling.style.display = "none";
				} else if (window.innerWidth < 768) {
					this.nextElementSibling.style.display = "block";
				}
			})
		}
	})
});



// validate 


function mask(event) {
    var matrix = this.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}




if (document.querySelectorAll('input[name="phone"]').length) {
	document.querySelectorAll('input[name="phone"]').forEach(function(e) {
		e.addEventListener("input", mask, false);
	});
}


// Popup 
if (document.querySelectorAll('[data-popup]').length) {
	
	document.querySelectorAll('.popup').forEach(function(e) {
		var popup = e;
		var closeButton = popup.querySelector('.popup__close');


		closeButton.addEventListener('click', function(e) {
			popup.style.opacity = 0;
			popup.style.visibility = 'hidden';
			document.body.classList.remove('no-scroll');
		});
	});

	document.querySelectorAll('[data-popup]').forEach(function(e) {
		var elem = e;

		elem.addEventListener('click', function(e) {
			e.preventDefault();

			var href = elem.dataset.popup;
			var popup = document.getElementById(href);

			popup.style.opacity = 1;
			popup.style.visibility = 'visible';
			document.body.classList.add('no-scroll');
			
		});
	});

}

// Phone mask
function setCursorPosition(pos, elem) {

    elem.focus();

    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);

    else if (elem.createTextRange) {

        var range = elem.createTextRange();

        range.collapse(true);

        range.moveEnd("character", pos);

        range.moveStart("character", pos);

        range.select()

    }

}



