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
