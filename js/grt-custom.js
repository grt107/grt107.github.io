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