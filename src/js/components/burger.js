$(function() {
  $('.dropdown-toggle').click(function(){
    $(this).next('.dropdown').toggle();

    if ($('.header').hasClass('sticky-mob')) {
      $('.nav-mobile ul').addClass('ul-sticky');
    } else {
      $('.nav-mobile ul').removeClass('ul-sticky');
    }
  });

  $(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
      $('.dropdown').hide();
    }
  });
});


