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

var swiperdevcontrols = new Swiper('.swiperdev-controls', {
  spaceBetween: 0,
  slidesPerView: 4,
  loop: false,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var swiperdevmain = new Swiper('.swiperdev-main', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  autoHeight: false,
  autoplay: {
    delay: 4500,
  },
  roundLengths: true,
  slidesPerView: 1,
  spaceBetween: 10,
  loop:false,
  thumbs: {
    swiper: swiperdevcontrols,
  },
});