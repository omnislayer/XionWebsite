(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    //$('.scrollspy').scrollSpy(); // SCROLLSPY PROBLEM!
    // $('.scrollspy').scrollSpy({
		// scrollOffset: $(window).height();
	// });
	// $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
	$(".lazy").lazyload(); // Lazyload
	$('.modal').modal();
  }); // end of document ready
})(jQuery); // end of jQuery name space