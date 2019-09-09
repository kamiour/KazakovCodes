var navItemList = document.getElementsByClassName("nav-item");
var i;

function createCallback(i) {
  return function () {
    $('.nav-item').removeClass('isactive');
    $(navItemList[i]).addClass('isactive');
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  }
}

for (i = 0; i < navItemList.length; i++) {
  $(navItemList[i]).on('click', createCallback(i));
}


var navItemMobList = document.getElementsByClassName("nav-item-mob");
var j;

function createCallbackMob(j) {
  return function () {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  }
}

for (j = 0; j < navItemMobList.length; j++) {
  $(navItemMobList[j]).on('click', createCallbackMob(j));
}
