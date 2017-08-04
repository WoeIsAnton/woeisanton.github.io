$(function() {

	var mixer = mixitup('#portfolio_grid', {
		load: {
				filter: '.posters'
		}
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".work_deskr").attr("id", "work_" + i);
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

	$(".mouse_wrapper").animated("fadeInUp", "fadeOutDown");
	
	$(".head_face").animated("fadeIn", "fadeOut");
	$(".header_text").animated("fadeInRight", "fadeOutLeft");
	$(".head_h1").animated("fadeIn", "fadeOut");
	$(".from_right").animated("fadeInRight", "fadeOutLeft");
	$(".from_left").animated("fadeInLeft", "fadeOutRight");
	$(".from_bottom").animated("fadeInUp", "fadeOutDown");



	$(".popup_content").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});	

	$(".mouse").click(function() {
		$("html, body").animate({
			scrollTop : $("#about").offset().top
		}, 800)
	});

	$(".s-portfolio li").click(function() {
		$(".s-portfolio li").removeClass("active");
		$(this).addClass("active");
	});

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


	$('img.img-svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			$.get(imgURL, function(data) {
					// Get the SVG tag, ignore the rest
					var $svg = jQuery(data).find('svg');

					// Add replaced image's ID to the new SVG
					if(typeof imgID !== 'undefined') {
							$svg = $svg.attr('id', imgID);
					}
					// Add replaced image's classes to the new SVG
					if(typeof imgClass !== 'undefined') {
							$svg = $svg.attr('class', imgClass+' replaced-svg');
					}

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
					if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
							$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
					}

					// Replace image with new SVG
					$img.replaceWith($svg);

			}, 'xml');

	});


});

$(document).ready(function(){ 
		setTimeout(function(){
				$('body').addClass('loaded');
		}, 2000);
});