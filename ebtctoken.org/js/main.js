(function ($) {
 "use strict";
/*===== Preloader=====*/
  / Preloader /
 var win = $(window);
 win.on('load',function() {
  $('.page-loader').delay(350).fadeOut('slow');
 });
 
/* =====meanmenu===== */
 $('#mobile-menu').meanmenu({
	 meanMenuContainer: '.mobile-menu',
	 meanScreenWidth: "767"
 });

 /* =====testimonial-slider===== */

$('.testimonial-slider').owlCarousel({
    loop:true,
    nav:false,
	dots:true,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
 
/* =====Top Menu Stick===== */
 
   $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 5) {
    $(".header-middle").removeClass("scroll-header");
   }else{
    $(".header-middle").addClass("scroll-header");
   }
  });
  
/*====== counterUp ======*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});  

/*===== isotope =====*/
$('.grid').imagesLoaded( function() {
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
})
// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
 });
});
/* for active class in filter menu */
	$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

/*===== magnificPopup =====*/
$('.img-zoom').magnificPopup({
  type: 'image',
   gallery:{
    enabled:true
  }
  // other options
});

/*===== wow-js =====*/
new WOW().init();

/* =====One page nav===== */ 
    var top_offset = $('.header-area').height() -30;
    $('#nav').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
/* =====scrollUp===== */	
$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>', 
  });

  
})(jQuery);  