jQuery(function ($) {
    $.fn.moveright = function() {
        var mywidth = $(this).width() / 1.5;
        var pos = $(this).scrollLeft() + mywidth;
        $(this).animate( { scrollLeft: pos }, 600 );
    }
});

jQuery(function ($) {
    $.fn.moveleft = function() {
        var mywidth2 = $(this).width() / 1.5;
        var pos2 = $(this).scrollLeft() - mywidth2;
        $(this).animate( { scrollLeft: pos2 }, 600 );
    }
});

jQuery(function ($) {
    $.fn.myscroll = function (amount) {
        amount = amount || 90;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});

/*------- Loader -------*/
$(window).on("load", function() {
	var myloader = $('.main-loader');
	if (myloader.length){
		myloader.delay(0).fadeOut(350);
	};
});