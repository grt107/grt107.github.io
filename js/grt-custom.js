
// Move Right
jQuery(function ($) {
    $.fn.moveright = function() {
        var mywidth = $(this).width() / 1.5;
        var pos = $(this).scrollLeft() + mywidth;
        $(this).stop().animate( { scrollLeft: pos }, 600 );
    }
});

// Move Left
jQuery(function ($) {
    $.fn.moveleft = function() {
        var mywidth2 = $(this).width() / 1.5;
        var pos2 = $(this).scrollLeft() - mywidth2;
        $(this).stop().animate( { scrollLeft: pos2 }, 600 );
    }
});

/*------- Menu -------*/
$('.grt-mobile-button').on('click', function(){
	$(this).toggleClass("grt-mobile-button-open");
	$("ul.grt-menu").toggleClass("open-grt-menu ");
	$("html, body").toggleClass("body-overflow");
});

/*------- Loader -------*/
$(window).on("load", function() {
	var myloader = $('.main-loader');
	if (myloader.length){
		myloader.delay(0).fadeOut(350);
	};
});