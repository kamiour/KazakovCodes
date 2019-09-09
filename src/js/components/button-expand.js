  $('.section-portfolio .button-expand').on('click', function () {
    if ($('.section-portfolio .col.display-toggle').hasClass('hidden')) {
      $('.section-portfolio .col.display-toggle').removeClass('hidden');
      setTimeout(function () {
          $('.section-portfolio .col.display-toggle').removeClass('visuallyhidden');
      }, 20);
    } else {
      $('.section-portfolio .col.display-toggle').addClass('visuallyhidden');
      $('.section-portfolio .col.display-toggle').one('transitionend', function(e) {
          $('.section-portfolio .col.display-toggle').addClass('hidden');
      });
    };
    $('.section-portfolio .icon-rotate').toggleClass('rotate')
  });

  $('.section-portfolio .button-expand').on('click', function(e){
    e.preventDefault();
   $('.section-portfolio .section-description.display-toggle').toggleClass('invisible');
 })