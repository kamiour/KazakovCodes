/*
 * Third party
 */

$(document).ready(function(){
  //= components/swipers.js
  //= components/burger.js
  //= components/button-expand.js
  //= components/nav-item.js
  //= components/button-scroll.js
  //= components/tab.js
  //= components/sticky-header.js
  //= components/rellax.js
})

/*
 * Custom
 */
//= components/swiper.min.js

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js').then(function(registration) {
    console.log('ServiceWorker registration successful!');
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}