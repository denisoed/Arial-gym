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
