document.addEventListener('DOMContentLoaded', function(){
	


//Сладейр под меню
  $(".main-header__slider").owlCarousel({
  	items: 1,
  	nav: true,
  	autoplay: false,
  	autoplayTimeout: 3000,
  	loop: true,
  });

//Меню



	var navit = document.querySelectorAll('.main-header__nav-item');
	// console.log(navit);
	// navit.addEventListener('mouseover', function(){
	// 	// console.log(navit);
	// 	// var aa = this.querySelectorAll('.main-header__frst-sub-menu')[0];

	// 	console.log(this.getElementsByClassName('main-header__frst-sub-menu'));
	// })
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

	// var frstsublist = document.querySelectorAll('.main-header__frst-sub-menu-item');
	// frstsublist.forEach(function(el, index) {
	//     el.addEventListener('mouseover', function(){
	// 	// console.log(navit);
	// 	// var aa = this.querySelectorAll('.main-header__frst-sub-menu')[0];
	// 		if(this.querySelector('.main-header__sec-sub-menu')){
	// 			this.querySelector('.main-header__sec-sub-menu').style.display = 'block';
	// 			var wdth = this.querySelector('.main-header__sec-sub-menu').offsetWidth;
	// 			console.log(wdth);
	// 			// this.querySelector('.main-header__sec-sub-menu').style.right = '-' + wdth + 'px';
				
	// 		}
	// 		// console.log(this.querySelector('.main-header__frst-sub-menu'));
	// 	})
	// 	el.addEventListener('mouseout', function(){
	// 		if(this.querySelector('.main-header__sec-sub-menu')){
	// 			this.querySelector('.main-header__sec-sub-menu').style.display = 'none';
	// 		}
	// 	})
	// });


	// $('.main-header__nav-item').hover(function(){
	// 	if($(window).width() > 1199){
	// 		$(this).find('.main-header__frst-sub-menu').css('display', 'block');
	// 	}
	// }, function(){
	// 	if($(window).width() > 1199){
	// 		$(this).find('.main-header__frst-sub-menu').css('display', 'none');
	// 	}
	// })
	// var listfrstsub = document.querySelectorAll('.main-header__frst-sub-menu');
	// 	listfrstsub.forEach(function(el, index) {
	// 		var navit = el.querySelectorAll('.main-header__nav-item');
	// 		navit.forEach(function(ele, indexe) {
	// 			console.log(ele);
	// 		    ele.addEventListener('mouseover', function(){
	// 			// console.log(navit);
	// 			// var aa = this.querySelectorAll('.main-header__frst-sub-menu')[0];
	// 				if(this.querySelector('.main-header__frst-sub-menu')){
	// 					this.querySelector('.main-header__frst-sub-menu').style.display = 'block';
	// 				}
	// 				// console.log(this.querySelector('.main-header__frst-sub-menu'));
	// 			})
	// 			ele.addEventListener('mouseout', function(){
	// 				if(this.querySelector('.main-header__frst-sub-menu')){
	// 					this.querySelector('.main-header__frst-sub-menu').style.display = 'none';
	// 				}
	// 			})
	// 		})
	// });
	// $('.main-header__frst-sub-menu .main-header__nav-item').hover(function(){
	// 	if($(window).width() > 1199){
	// 		$(this).find('.main-header__frst-sub-menu-item-link').css('background-color', '#d53722');
	// 		var wsub = $(this).find('.main-header__sec-sub-menu').width();
	// 		$(this).find('.main-header__sec-sub-menu').css('right', '-' + wsub + 'px');
	// 		$(this).find('.main-header__sec-sub-menu').css('display', 'block');
	// 	}
	// }, function(){
	// 	if($(window).width() > 1199){
	// 		$(this).find('.main-header__frst-sub-menu-item-link').css('background-color', '#f33f27');
	// 		$(this).find('.main-header__sec-sub-menu').css('display', 'none');
	// 	}
	// })
	// $('.main-header__sec-sub-menu').hover(function(){
	// 	if($(window).width() > 1199){
	// 		$(this).parents('.main-header__frst-sub-menu-item').find('.main-header__frst-sub-menu-item-link').css('background-color', '#d53722');
	// 	}
	// }, function(){
	// 	if($(window).width() > 1199){
	// 		$(this).parents('.main-header__frst-sub-menu-item').find('.main-header__frst-sub-menu-item-link').css('background-color', '#f33f27');
	// 	}
	// })

	// $('body').on('click', '.main-header__nav-item-arrow', function(){
	// 	$(this).parent().find('.main-header__frst-sub-menu').slideToggle('fast');
	// })

	// $('body').on('click', '.main-header__frst-sub-menu .main-header__frst-sub-menu-item-arrow', function(){
	// 	$(this).parent().find('.main-header__sec-sub-menu').slideToggle('fast');
	// })

	// $('body').on('click', '.main-header__menu-burger', function(){
	// 	$('.main-header__overlay-for-menu').fadeIn('fast');
	// 	$(this).parent().find('.main-header__nav-list-wrap').animate({
	// 		left: '0',
	// 	}, 200)
	// })


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

});
