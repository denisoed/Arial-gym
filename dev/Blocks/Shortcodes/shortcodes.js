// Preloader
var preloader = document.getElementById("preloader");

function fadeOutnojquery(el){
  el.style.opacity = 1;
  var interpreloader = setInterval(function(){
    el.style.opacity = el.style.opacity - 0.05;

    if (el.style.opacity <=0.05){
      clearInterval(interpreloader);
      preloader.style.display = "none";
    }
  },16);
}

window.onload = function(){
  setTimeout(function(){
    fadeOutnojquery(preloader);
  },1000);
};

// Parallax
function parallaxIt() {
  var $fwindow = $(window);

  $('[data-type="content"]').each(function (index, e) {
    var scrollTop = $fwindow.scrollTop();
    var $contentObj = $(this);

    $fwindow.on('scroll resize', function (){
      scrollTop = $fwindow.scrollTop();

      $contentObj.css('top', ($contentObj.height() * index) - scrollTop);
    });
  });

  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);

    $fwindow.on('scroll resize', function() {
      var yPos = - ($fwindow.scrollTop() / $backgroundObj.data('speed'));
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $backgroundObj.css({ backgroundPosition: coords });
    });
  });

  $fwindow.trigger('scroll');
};

parallaxIt();
