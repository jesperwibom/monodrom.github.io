//Smooth scroll on links within pages
//found at: https://css-tricks.com/snippets/jquery/smooth-scrolling/
//created by: Karl Swedberg
//reference at: http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

$(document).ready(function(){
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 500);
					return false;
				}
			}
		});
	});
});
