$(function() {

	$(".mouse").click(function() {
		$("html, body").animate({
			scrollTop : $("#about").offset().top
		}, 800)
	});

	$(".top_mnu a"). mPageScroll2id({ 
		scrollSpeed: 500,
		scrollEasing: "swing",
		highlightClass:"highlighted-menu-item"
	});

	$('.menu-toggle').click(function(){
		$(".menu-toggle").toggleClass('active');
		return false;
	});

	$(".menu-toggle").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".menu-toggle").removeClass('active');
		$(".top_text").css("opacity", "1");
	})

	$("body").on('click', ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow")
	});

	$("body").append('<div class="top hidden-xs hidden-sm"><i class="fa fa-angle-double-up">');

	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});

	$(".top_text img").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".menu-toggle").animated("fadeInRight", "fadeOutLeft");
	$(".logo").animated("fadeInLeft", "fadeOutRight");
	$(".mouse_wrapper").animated("fadeInUp", "fadeOutDown");

	$(".from_right").animated("fadeInRight", "fadeOutLeft");
	$(".from_left").animated("fadeInLeft", "fadeOutRight");
	$(".from_bottom").animated("fadeInUp", "fadeOutDown");
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		navClass: ["fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],в
		nav:true,
		responsive:{
				320:{
						items:1,
				},
				480:{
						items:2,
				},
				768:{
						items:2,
				},
				992:{
						items:2,
				},
				1200:{
						items:2,
				}
		}
	})
	

});

$(window).on('load', function() {
	$('.preloader').delay(1500).fadeOut('slow');
})