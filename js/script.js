$(document).ready(function(){



	/******************nav**********************/

	(function(){
		$('.header_burger').on('click', function(){
			var nav = document.querySelector('.header_nav');
			this.classList.toggle('header_burger_active');
			nav.classList.toggle('header_nav_active');
			document.querySelector('body').classList.toggle('lock');
		})
	}());
	$(window).on('scroll', () => {
		if(window.scrollY>0){
			$('.header').addClass('header_down');
		}else{
			$('.header').removeClass('header_down');
		}
	})



	/******************service**********************/

	// $('.service_spr_title').on('click', function(event){
	// 	$(this).toggleClass('active').next().slideToggle(500);
	// 	if($('.service_spr').hasClass('one')){
	// 		$('.service_spr_title').not($(this)).removeCLass('active');
	// 		$('.service_spr_content').not($(this).next()).slideUp(500);
	// 	}
	// })
	$('.service_spr_title').on('click', function(){
		if($('.service_spr').hasClass('one')){
			$('.service_spr_title').not($(this).next()).removeClass('active');
			$('.service_spr_content').not($(this).next()).slideUp(300);
		};
		$(this).toggleClass('active').next().slideToggle(300);
	});



	$('.service_comments').slick({
		adaptiveHeight: true,
	});



/**********************************WORK**********************************/


	$('.work_examples_item').on('click', function(){
		$('.work_examples_item').not($(this)).removeClass('example_view');
		$(this).toggleClass('example_view');

	});

	$('.work_comments').slick({
		adaptiveHeight: true,
	})
})