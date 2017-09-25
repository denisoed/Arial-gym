
// Open Responsive main menu
$('.btn-menu').on('click', function(){
  if( $('.main-menu_navbar').is(':hidden') == true ){

    $('.main-menu_navbar').show('slow');
    $('.main-menu_navbar').css('display', 'flex');

  }else{

    $('.main-menu_navbar').hide('slow');

  }

  $('.btn-menu').toggleClass('btn-menu-active');
});

// Fixed main menu
(function() {

    if ($(window).width() > 992) {
        $(".main-menu").sticky({ zIndex: 10 });
    }

})();


$('.home-slider__box').owlCarousel({
  loop:true,
  autoplay: true,
  smartSpeed: 900,
  autoplaySpeed: 1000,
  // margin:10,
  nav:false,
  items:1
});

var filterList = {

init: function () {
  $('.img-gallery-images').mixItUp({
    selectors: {
      target: '.mix',
      filter: '.img-gallery-filter__btn'
    },
    load: {
      filter: '.all'
    }
  });
}
};
filterList.init();

// Init Color box
$(".colorbox").colorbox({
  rel:'colorbox',
  maxWidth:'95%',
  maxHeight:'95%'
});




