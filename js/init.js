(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    // $('.scrollspy').scrollSpy({
		// scrollOffset: $(window).height();
	// });
	// $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});

  }); // end of document ready
})(jQuery); // end of jQuery name space