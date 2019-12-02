var navItemList = document.getElementsByClassName("nav-item");
var i;
var navItemMobList = document.getElementsByClassName("nav-item-mob");
var j;
var scrollElems = $('.nav-element');

for (i = 0; i < navItemList.length; i++) {
  $(navItemList[i]).on('click', createCallback(i));
}

for (j = 0; j < navItemMobList.length; j++) {
  $(navItemMobList[j]).on('click', createCallbackMob(j));
}

document.addEventListener("scroll", function(event) {
  for (i = 0; i < navItemList.length; i++) {
    $('.nav-item').removeClass('isactive');
    $(navItemList[currentPosStrict()-1]).addClass('isactive');
  }

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    $('.nav-item').removeClass('isactive');
    $(navItemList[navItemList.length-1]).addClass('isactive');
  }
});

function currentPosStrict() {
  let found = false;
  for (let i = 0; i < scrollElems.length-1; i++) {
    if (i < scrollElems.length-2) {
      if ((window.scrollY) >= scrollElems[i].offsetTop && (window.scrollY) < scrollElems[i+1].offsetTop) {
        found = true;
        return i;
      }
    } else if (!found) {
      return i;
    }    
  }
}

function createCallback(i) {
  return function () {
    $('.nav-item').removeClass('isactive');
    $(navItemList[i]).addClass('isactive');
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  }
}

function createCallbackMob(j) {
  return function () {
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  }
}
