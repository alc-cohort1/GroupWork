
/* Flexslider */
$(window).load(function() {
  "use strict";
	$('.flexslider').flexslider({
		animation: "fade",
		start: function(slider) {
			$('.np-controls a.next').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("next"));
			});
			$('.np-controls a.previous').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("previous"));
			});
		}
	});
});

/* Mixitup Portfolio */
jQuery(document).ready(function($) {
  "use strict";
	$('#portfolio').mixitup({
		targetSelector: '.item',
		transitionSpeed: 450
	});
});

/* Nivo - Lightbox */
jQuery(document).ready(function($) {
  "use strict";
    $('.nivo-lbox').nivoLightbox({ effect: 'fade' });
});

/* Skills  loading bar*/
jQuery(document).ready(function($) {
	"use strict";
	$('.skills-info').appear(function() {
	$('.skill1').css('width', '71%');
	$('.skill2').css('width', '85%');
	$('.skill3').css('width', '76%');
	$('.skill4').css('width', '53%');
	$('.skill5').css('width', '69%');
	},{accX: 0, accY: -150});
});
