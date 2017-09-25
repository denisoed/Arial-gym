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
