(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    //$('.scrollspy').scrollSpy(); // SCROLLSPY PROBLEM!
    $('.scrollspy').scrollSpy({scrollOffset:0});
	// $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
	$(".lazy").lazyload(); // Lazyload
	$('.modal').modal();
	
	$('body').data().scrollspy.options.offset = offsetValue;
	// force scrollspy to recalculate the offsets to your targets
	$('body').data().scrollspy.process();
  }); // end of document ready
})(jQuery); // end of jQuery name space