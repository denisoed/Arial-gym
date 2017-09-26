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
