$(document).ready(function(){
	var touch = $('#touch-menu');
	var menu = $('.nav');
	
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});


//mobile menu
function openNav(){
	document.getElementById('nav').style.width = "100%";
	document.getElementById('open-btn-nav').style.opacity = "0";
}
function closeNav(){
	document.getElementById('nav').style.width = "0%";
	document.getElementById('open-btn-nav').style.opacity = "1";
}

// $('.hero-carousel').slick();