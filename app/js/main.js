
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



var filterList = {

init: function () {
  $('.blog-list-items').mixItUp({
    selectors: {
      target: '.mix',
      filter: '.blog-list-filter__btn'
    },
    load: {
      filter: '.all'
    }
  });
}
};
filterList.init();

function initMap() {

    var uluru = { lat: 40.674, lng: -73.945 };
    // Styles a map in night mode.

    //Style for elements on map
    var style = [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#c8c03a'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]

    // Options map
    var map = new google.maps.Map(document.getElementById('google-map'), {
        center: uluru,
        scrollwheel: false,
        zoom: 15,
        styles: style
    });

    // Set marker on map
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$('.question__title').on('click', (e)=> {
  let target = e.target;
  $('.fa-minus').attr('class', 'fa fa-plus');

  if( $(target).parent().next().is(':hidden') == true ){
    $('.question__text').hide('fast');
    $(target).parent().next().show('fast');
    $(target).prev().attr('class', 'fa fa-minus');

  }else{

    $(target).parent().next().hide('fast');
    $(target).prev().attr('class', 'fa fa-plus');

  }

})

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

$('.home-slider__box').owlCarousel({
  loop:true,
  autoplay: true,
  smartSpeed: 900,
  autoplaySpeed: 1000,
  // margin:10,
  nav:false,
  items:1
});



