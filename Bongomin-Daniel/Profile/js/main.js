
/* Flexslider it controls the shape of the first interface with the footer */
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
