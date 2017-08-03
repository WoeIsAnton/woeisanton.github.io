$(function() {

	// $(".main_head").myParallax({
	// 	"speed" : "15"
	// });

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
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});

	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".menu-toggle").removeClass('active');
		$(".top_text").css("opacity", "1");
	})

	$(".top_text img").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

});

$(window).load(function() {



}); 