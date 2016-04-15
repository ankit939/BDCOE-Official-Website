/*GLOBAL jQuery*/
var fixed_menu = true;
window.jQuery = window.$ = jQuery;


/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function () {
	//Preloader
	setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
	setTimeout("jQuery('.preloader_hide, .selector_open').animate({'opacity' : '1'},500)",800);
	setTimeout("jQuery('footer').animate({'opacity' : '1'},500)",2000);

});

/*Dashboard Sidebar*/
$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
});

		$(function () {

			var links = $('.sidebar-links > a');

			links.on('click', function () {

				links.removeClass('selected');
				$(this).addClass('selected');

			})
		});

	 	setTimeout(function () {
	 $('.bdlogo').show().addClass('animated tada');}, 1200
	 	);

	 	setTimeout(function () {
	 $('.corouselimg').show().addClass('animated fadeInLeft');}, 800
	 	);

	 	setTimeout(function () {
	 $('.corouseldiv').show().addClass('animated fadeInLeft');}, 800
	 	);

	 	setTimeout(function () {
	 $('.corousel2img').show().addClass('animated fadeInLeft');}, 800
	 	);

	 	setTimeout(function () {
	 $('.corousel2div').show().addClass('animated fadeInLeft');}, 800
	 	);


var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();