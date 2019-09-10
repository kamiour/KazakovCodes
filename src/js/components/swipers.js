var swiperhero = new Swiper('.swiper-hero', {
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
autoplay: {
  delay: 3500,
},
loop: true,
roundLengths: true,
autoHeight: false,
slidesPerView: 1,
spaceBetween: 0,
});

var swiper1bottom = new Swiper('.swiper1-bottom', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  var swiper1top = new Swiper('.swiper1-top', {
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    autoHeight: false,
    autoplay: {
      delay: 4000,
    },
    roundLengths: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    loopedSlides: 5, //looped slides should be the same
    thumbs: {
      swiper: swiper1bottom,
    },
  });

  var swiper3bottom = new Swiper('.swiper3-controls', {
    spaceBetween: 0,
    slidesPerView: 5,
    loop: false,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  var swiper1top = new Swiper('.swiper3-main', {
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    autoHeight: false,
    autoplay: {
      delay: 3500,
    },
    roundLengths: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop:false,
    thumbs: {
      swiper: swiper3bottom,
    },
  });
  
  var swiper2 = new Swiper('.swiper2', {
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 3500,
    },
    autoHeight: false,
    roundLengths: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    breakpointsInverse: true,
      breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 24
      },
    }
  });