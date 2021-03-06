if ('NodeList' in window && !NodeList.prototype.forEach) {
	console.info('polyfill for IE11');
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.addEventListener('DOMContentLoaded', function () {

	//Меню
	var navit = document.querySelectorAll('.js-nav-item');
	var frstsublist = document.querySelectorAll('.js-frst-sub-menu-item');
	var secsublist = document.querySelectorAll('.js-sec-sub-menu');
	var arrows = document.querySelectorAll('.js-nav-item-arrow');
	var arrowsfrstsub = document.querySelectorAll('.js-frst-sub-menu-item-arrow');
	var burger = document.querySelector('.js-menu-burger');
	var overlay = document.querySelector('.js-overlay-for-menu');
	var burger_path = document.querySelector('.js-menu-burger-path');
	var menu = document.querySelector('.js-nav-list-wrap');
	var oo = false;

	function resetAll() {
		if (frstsublist)
			frstsublist.forEach(function (el, index) {
				el.querySelector('.main-header__frst-sub-menu-item-link').classList.remove('active');
				if (el.querySelector('.js-sec-sub-menu')) {
					el.querySelector('.js-sec-sub-menu').style.display = 'none';
				}
			})
		if (navit)
			navit.forEach(function (el, index) {
				el.querySelector('.main-header__nav-item-link').classList.remove('active');
				if (el.querySelector('.main-header__frst-sub-menu')) {
					el.querySelector('.main-header__frst-sub-menu').style.display = 'none';
				}
			})
		if (arrows)
			arrows.forEach(function (el, index) {
				el.classList.remove('active');
			})
		if (arrowsfrstsub)
			arrowsfrstsub.forEach(function (el, index) {
				el.classList.remove('active');
			})
	}

	function resetScndSublist() {
		if (frstsublist)
			frstsublist.forEach(function (el, index) {
				el.querySelector('.main-header__frst-sub-menu-item-link').classList.remove('active');
				if (el.querySelector('.js-sec-sub-menu')) {
					el.querySelector('.js-sec-sub-menu').style.display = 'none';
				}
			})
		if (arrowsfrstsub)
			arrowsfrstsub.forEach(function (el, index) {
				el.classList.remove('active');
			})
	}

	if (frstsublist)
		frstsublist.forEach(function (el, index) {
			if (window.innerWidth > 991) {
				setTimeout(function () {
					if (el.querySelector('.js-sec-sub-menu')) {
						var wdth = el.querySelector('.js-sec-sub-menu').offsetWidth;
						el.querySelector('.js-sec-sub-menu').style.display = 'none';
						el.querySelector('.js-sec-sub-menu').style.right = '-' + wdth + 'px';
						el.querySelector('.js-sec-sub-menu').style.visibility = 'visible';
					}
				}, 300)
			}

			if (el.querySelector('.js-sec-sub-menu')) {
				el.addEventListener('mouseover', function () {

					if (this.querySelector('.js-sec-sub-menu')) {

						if (window.innerWidth > 991) {
							this.querySelector('.js-sec-sub-menu').style.display = 'block';
						}
					}
				})
				el.addEventListener('mouseout', function () {

					if (this.querySelector('.js-sec-sub-menu')) {
						if (window.innerWidth > 991) {
							this.querySelector('.js-sec-sub-menu').style.display = 'none';
						}
					}
				})
			}
		})
	if (navit)
		navit.forEach(function (el, index) {
			if (window.innerWidth > 991) {
				setTimeout(function () {
					if (el.querySelector('.main-header__frst-sub-menu')) {
						el.querySelector('.main-header__frst-sub-menu').style.display = 'none';
						el.querySelector('.main-header__frst-sub-menu').style.visibility = 'visible';
					}
				}, 300)
			}
			el.addEventListener('mouseover', function () {

				if (this.querySelector('.main-header__frst-sub-menu')) {
					if (window.innerWidth > 991) {
						this.querySelector('.main-header__frst-sub-menu').style.display = 'block';
						if (!this.querySelector('.main-header__nav-item-link').classList.contains('main-header__frst-sub-menu-item-link')) {
							this.querySelector('.main-header__nav-item-link').classList.add('active');
							this.querySelector('.main-header__nav-item-arrow').classList.add('active');
						}

					}
				}
			})
			el.addEventListener('mouseout', function () {
				if (this.querySelector('.main-header__frst-sub-menu')) {
					if (window.innerWidth > 991) {
						this.querySelector('.main-header__frst-sub-menu').style.display = 'none';
						this.querySelector('.main-header__nav-item-link').classList.remove('active');
						this.querySelector('.main-header__nav-item-arrow').classList.remove('active');
					}
				}
			})
		});

	if (secsublist)
		secsublist.forEach(function (el, index) {

			el.addEventListener('mouseover', function () {
				if (window.innerWidth > 991) {
					el.closest('.js-nav-item').querySelector('.main-header__frst-sub-menu-item-link').classList.add('active');
				}
			})
			el.addEventListener('mouseout', function () {
				if (window.innerWidth > 991) {
					el.closest('.js-nav-item').querySelector('.main-header__frst-sub-menu-item-link').classList.remove('active');
				}
			})
		})
	if (arrows)
		arrows.forEach(function (el, index) {
			el.addEventListener('mouseup', function () {
				var navit = this.closest('.js-nav-item');
				if (navit.querySelector('.main-header__frst-sub-menu')) {
					if (navit.querySelector('.main-header__frst-sub-menu').style.display != 'block') {
						resetAll();
						navit.querySelector('.main-header__frst-sub-menu').style.display = 'block';
						el.classList.add('active');
						if (!navit.querySelector('.main-header__nav-item-link').classList.contains('main-header__frst-sub-menu-item-link')) {
							navit.querySelector('.main-header__nav-item-link').classList.add('active');
						}
					} else {
						navit.querySelector('.main-header__frst-sub-menu').style.display = 'none';
						el.classList.remove('active');
						navit.querySelector('.main-header__nav-item-link').classList.remove('active');
					}
				}
			})
		})
	if (arrowsfrstsub)
		arrowsfrstsub.forEach(function (el, index) {
			el.addEventListener('mouseup', function () {
				var navit = this.closest('.js-nav-item');
				if (navit.querySelector('.js-sec-sub-menu')) {
					if (navit.querySelector('.js-sec-sub-menu').style.display != 'block') {
						resetScndSublist();
						navit.querySelector('.js-sec-sub-menu').style.display = 'block';
						el.classList.add('active');
						navit.querySelector('.main-header__nav-item-link').classList.add('active');
					} else {
						navit.querySelector('.js-sec-sub-menu').style.display = 'none';
						el.classList.remove('active');
						navit.querySelector('.main-header__nav-item-link').classList.remove('active');
					}

				}
			})
		})


	document.addEventListener('mouseup', function (e) {
		if (e.target == burger || e.target == burger_path) {
			overlay.style.transition = '.4s';
			overlay.style.display = 'block';
			menu.style.transition = '.4s';
			menu.style.left = '0px';
			document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
		} else if (e.target == overlay) {
			overlay.style.transition = '0s';
			overlay.style.display = 'none';
			menu.style.transition = '.1s';
			menu.style.left = '-280px';
			document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
		}
	})

	if (document.querySelectorAll('.news-slider')) {
		var newsSwiper = new Swiper('.news-slider', {
			slidesPerView: 2,
			spaceBetween: 40,
			slidesPerGroup: 2,
			loop: true,
			slidePrevClass: 'news-slide-prev',
			navigation: {
				nextEl: '.news-slider-nav__next',
				prevEl: '.news-slider-nav__prev'
			},
			breakpoints: {
				541: {
					slidesPerView: 2,
					spaceBetween: 30,
					slidesPerGroup: 2
				},
				0: {
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
			autoplay: {
				delay: 3000,
			},
			speed: 650,
			navigation: {
				nextEl: '.offers-slider-nav__next',
				prevEl: '.offers-slider-nav__prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
			on: {
				slideChange: function() {
					closePopupsMini();
					initPopupsMini();
				},

			}
		});

	}

	if (document.querySelectorAll('.main-header__slider')) {
		var headerSwiper = new Swiper('.main-header__slider', {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 3000,
			},
<<<<<<< HEAD
			speed: 550,
=======
			speed: 650,
>>>>>>> 531d5fea4e51eb51bdf6a4b7b3efcec517bf1f6f
			pagination: {
				el: '.main-header__swiper-pagination',
				type: 'fraction',
			},
			navigation: {
				nextEl: '.main-header-nav__next-wrap',
				prevEl: '.main-header-nav__prev-wrap'
			}
		})
	}

	function footerLinkCheck() {
		var link = document.querySelectorAll('.footer-menu__link');
		if (link) {
			link.forEach(function (el, index) {
				var next = el.nextElementSibling;
				if (next && window.innerWidth < 768) {
					el.style = ("font-weight: 500;");
				} else if (next != null && window.innerWidth >= 768) {
					el.style = ("font-weight: 300;");
				}
			})
		}
	};

	(function footerListCheck() {
		var list = document.querySelectorAll('.js-footer-menu__title');
		if (list) {
			list.forEach(function (el, index) {
				var next = el.nextElementSibling;
				if (next) {
					el.classList.add('footer-menu__title_angle');
					el.addEventListener('click', function () {
						if (this.nextElementSibling.style.display == "block" && window.innerWidth < 768) {
							this.nextElementSibling.style.display = "none";
						} else if (window.innerWidth < 768) {
							this.nextElementSibling.style.display = "block";
						}
					})
				}
			})
		}
	})();

	footerLinkCheck();

	var resizeWindow;
	window.addEventListener('resize', function () {
		clearTimeout(resizeWindow);
		resizeWindow = setTimeout(function () {
			var list = document.querySelectorAll('.js-footer-menu__title');
			if (list) {
				list.forEach(function (el, index) {
					var next = el.nextElementSibling;
					if (next) {
						el.classList.add('footer-menu__title_angle');
						if (next.style.display != "block" && window.innerWidth >= 768) {
							next.style.display = "block";
						} else if (next.style.display == "block" && window.innerWidth < 768) {
							next.style.display = "none";
							el.classList.add('footer-menu__title_angle');
						}
					}
				})
			}

			footerLinkCheck();

			if (window.innerWidth > 991) {
				document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
				overlay.style.display = 'none';
				menu.style.left = '-280px';
				resetAll();
				if (oo != true) {
					if (frstsublist.length > 0)
						frstsublist.forEach(function (el, index) {
							if (el.querySelector('.js-sec-sub-menu')) {
								el.querySelector('.js-sec-sub-menu').style.visibility = 'hidden';
								el.querySelector('.js-sec-sub-menu').style.display = 'block';
								setTimeout(function () {
									var wdth = el.querySelector('.js-sec-sub-menu').offsetWidth;
									el.querySelector('.js-sec-sub-menu').style.display = 'none';
									el.querySelector('.js-sec-sub-menu').style.right = '-' + wdth + 'px';
									el.querySelector('.js-sec-sub-menu').style.visibility = 'visible';
		
								}, 300)
							}
						})
					if (navit.length > 0)
						navit.forEach(function (el, index) {
							if (el.querySelector('.main-header__frst-sub-menu')) {
								el.querySelector('.main-header__frst-sub-menu').style.visibility = 'hidden';
								el.querySelector('.main-header__frst-sub-menu').style.display = 'block';
								setTimeout(function () {
									el.querySelector('.main-header__frst-sub-menu').style.display = 'none';
									el.querySelector('.main-header__frst-sub-menu').style.visibility = 'visible';
		
								}, 300)
							}
						})
					oo = true;
				}
			}
		}, 100);
	})
});



// validate 


function mask(event) {
	var matrix = this.defaultValue,
		i = 0,
		def = matrix.replace(/\D/g, ""),
		val = this.value.replace(/\D/g, "");
	def.length >= val.length && (val = def);
	matrix = matrix.replace(/[_\d]/g, function (a) {
		return val.charAt(i++) || "_"
	});
	this.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
	setCursorPosition(i, this)
}




if (document.querySelectorAll('input[name="phone"]')) {
	document.querySelectorAll('input[name="phone"]').forEach(function (e) {
		e.addEventListener("input", mask, false);
	});
}


// Popup 
(function () {
	if (document.querySelectorAll('[data-popup]')) {

	document.querySelectorAll('.popup').forEach(function (e) {
		var popup = e;
		var closeButton = popup.querySelector('.popup__close');


		closeButton.addEventListener('click', function (e) {
			popup.style.opacity = 0;
			popup.style.visibility = 'hidden';
			document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
		});
	});

	document.querySelectorAll('[data-popup]').forEach(function (e) {
		var elem = e;

			elem.addEventListener('click', function (e) {
				e.preventDefault();

				var href = elem.dataset.popup;
				var popup = document.getElementById(href);

				popup.style.opacity = 1;
				popup.style.visibility = 'visible';
				document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

			});
		});

	}
})();

// popup-mini
(function() {
	var opened = [];


	// Close
	this.closePopupsMini = function() {
		if (opened.length) {
			opened.forEach(function(popup) {
				popup.classList.remove('active');
			});

			opened = [];
		}
		
	}

	this.openPopupMini = function(e) {

		var popup = (e.target.children[0] !== undefined) ? 	e.target.children[0] : 
																												e.target.parentNode;

		

		if (popup.classList.contains('js-popup-mini') && !popup.classList.contains('active')) {
			popup.classList.add('active');
			opened.push(popup);

		} else if (popup.classList.contains('js-popup-mini') && popup.classList.contains('active')) {
			popup.classList.remove('active');
			var index = opened.indexOf(popup);
			if (index !== -1) opened.splice(index, 1);
		}
	}


	// Initialize
	this.initPopupsMini = function() {
		

		var link = document.querySelectorAll('.js-popup-mini-open');

		if (link) {
			link.forEach(function (e) {

				// e.removeEventListenter('click', function (e) {
				// 	e.preventDefault();
				

				// 	if (popup.classList.contains('js-popup-mini') && !popup.classList.contains('active')) {
				// 		popup.classList.add('active');
				// 		opened.push(popup);

				// 	} else if (popup.classList.contains('js-popup-mini') && popup.classList.contains('active')) {
				// 		popup.classList.remove('active');
				// 		var index = opened.indexOf(popup);
				// 		if (index !== -1) opened.splice(index, 1);
				// 	}
							
				// });

				e.addEventListener('click', openPopupMini);
			});
		}
	}

	initPopupsMini();
})();





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

// Validate

function checkboxSetValue() {
	if (document.querySelector('.js-call-order-checkbox').checked == true) {
		document.querySelector('.js-call-order-checkbox').checked = false;
		document.querySelector('.js-call-order-checkbox-apply').style.opacity = '0';
	} else {
		document.querySelector('.js-call-order-checkbox').checked = true;
		document.querySelector('.js-call-order-checkbox-apply').style.opacity = '1';
	}
}


function validate() {
	var form = document.querySelector('.call-form');
	var name_value = form.querySelector('[name="name"]').value;
	var name_tag = form.querySelector('.js-inp-name');
	var name_error = form.querySelector('.js-error-name');
	var phone_value = form.querySelector('[name="phone"]').value;
	var phone_tag = form.querySelector('.js-inp-phone');
	var phone_error = form.querySelector('.js-error-phone');
	var checkbox_value = document.querySelector('.js-call-order-checkbox').checked;
	var checkbox = document.querySelector('.js-call-order-imit-checkbox');
	var checkbox_error = document.querySelector('.js-error-checkbox');
	var regname = /^[a-zа-яё]+$/i;
	if ((name_value == "" || regname.exec(name_value) == null) && phone_value == "+7 (___) ___-____" && !checkbox_value) {
		name_tag.classList.add('error');
		name_error.style.display = "block";
		phone_tag.classList.add('error');
		phone_error.style.display = "block";
		checkbox.classList.add('error');
		checkbox_error.style.display = "block";
		return false;
	} else if ((name_value == "" || regname.exec(name_value) == null) && phone_value != "+7 (___) ___-____" && !checkbox_value) {
		name_tag.classList.add('error');
		name_error.style.display = "block";
		checkbox.classList.add('error');
		checkbox_error.style.display = "block";
		phone_tag.classList.remove('error');
		phone_error.style.display = "none";
		return false;
	} else if (phone_value == "+7(___)___-____" && (name_value != "" && regname.exec(name_value) != null) && !checkbox_value) {
		phone_tag.classList.add('error');
		phone_error.style.display = "block";
		checkbox.classList.add('error');
		checkbox_error.style.display = "block";
		name_tag.classList.remove('error');
		name_error.style.display = "none";
		return false;
	} else if ((name_value == "" || regname.exec(name_value) == null) && phone_value == "+7 (___) ___-____" && checkbox_value) {
		phone_tag.classList.add('error');
		phone_error.style.display = "block";
		name_tag.classList.add('error');
		name_error.style.display = "block";
		checkbox.classList.remove('error');
		checkbox_error.style.display = "none";
		return false;
	} else if ((name_value == "" || regname.exec(name_value) == null) && phone_value != "+7 (___) ___-____" && checkbox_value) {
		phone_tag.classList.remove('error');
		phone_error.style.display = "none";
		name_tag.classList.add('error');
		name_error.style.display = "block";
		checkbox.classList.remove('error');
		checkbox_error.style.display = "none";
		return false;
	} else if ((name_value != "" && regname.exec(name_value) != null) && phone_value == "+7 (___) ___-____" && checkbox_value) {
		phone_tag.classList.add('error');
		phone_error.style.display = "block";
		name_tag.classList.remove('error');
		name_error.style.display = "none";
		checkbox.classList.remove('error');
		checkbox_error.style.display = "none";
		return false;
	} else if ((name_value != "" && regname.exec(name_value) != null) && phone_value != "+7 (___) ___-____" && !checkbox_value) {
		phone_tag.classList.remove('error');
		phone_error.style.display = "none";
		name_tag.classList.remove('error');
		name_error.style.display = "none";
		checkbox.classList.add('error');
		checkbox_error.style.display = "block";
		return false;
	} else {
		name_tag.classList.remove('error');
		name_error.style.display = "none";
		phone_tag.classList.remove('error');
		phone_error.style.display = "none";
	}
}

// document.querySelector('.call-form__button').addEventListener('mouseup', function(e){

// 	var form = document.querySelector('.call-form');
// 	var name = form.querySelector('[name="name"]').value;
// 	var phone = form.querySelector('[name="phone"]').value;

// 	this.disabled = false;
// 		// return false;

// })

(function() {
	// Add event listener
	var elem = document.querySelector(".material-block");
	elem.addEventListener("mousemove", parallax);
	// Magic happens here
	function parallax(e) {
			var _w = window.innerWidth/2;
			var _h = window.innerHeight/2;
			var _mouseX = e.clientX;
			var _mouseY = e.clientY;
			var _depth1X = 50 - (_mouseX - _w) * 0.004;
			var _depth1Y = 50 - (_mouseY - _h) * 0.004;
			var _depth2X = 50 - (_mouseX - _w) * 0.008;
			var _depth2Y = 50 - (_mouseY - _h) * 0.008;
			var x = _depth1X + '% ' + _depth1Y + '%, ' + _depth2X + '% ' + _depth2Y + '%';
			elem.style.backgroundPosition = x;
	}
})();