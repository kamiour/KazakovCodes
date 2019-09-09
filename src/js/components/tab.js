$('.button-hardskills').on('click', function () {
  if ($('.col.skill').not('hidden')) {
    $('.col.skill').addClass('visuallyhidden');
    $('.col.skill').addClass('hidden');
  }

  $('.col.skill.hard-skill').removeClass('hidden');
    setTimeout(function () {
        $('.col.skill.hard-skill').removeClass('visuallyhidden');
    }, 20);
});

$('.button-softskills').on('click', function () {
  if ($('.col.skill').not('hidden')) {
    $('.col.skill').addClass('visuallyhidden');
    $('.col.skill').addClass('hidden');
  }
  $('.col.skill.soft-skill').removeClass('hidden');
    setTimeout(function () {
        $('.col.skill.soft-skill').removeClass('visuallyhidden');
    }, 20);
});

$('.button-approaches').on('click', function () {
  if ($('.col.skill').not('hidden')) {
    $('.col.skill').addClass('visuallyhidden');
    $('.col.skill').addClass('hidden');
  }
  $('.col.skill.approach').removeClass('hidden');
    setTimeout(function () {
        $('.col.skill.approach').removeClass('visuallyhidden');
    }, 20);
});

$('.button-tools').on('click', function () {
  if ($('.col.skill').not('hidden')) {
    $('.col.skill').addClass('visuallyhidden');
    $('.col.skill').addClass('hidden');
  }
  $('.col.skill.tool').removeClass('hidden');
    setTimeout(function () {
        $('.col.skill.tool').removeClass('visuallyhidden');
    }, 20);
});

$('.button-all').on('click', function () {
  if ($('.col.skill').hasClass('hidden')) {
    $('.col.skill').removeClass('hidden');
    setTimeout(function () {
        $('.col.skill').removeClass('visuallyhidden');
    }, 20);
  }
});



var skillsList = document.getElementsByClassName("button-tab");
var p;

function createSkillCallback(p) {
  return function () {
    $('.button-tab').removeClass('active');
    $(skillsList[p]).addClass('active');
  }
}

for (p = 0; p < skillsList.length; p++) {
  $(skillsList[p]).on('click', createSkillCallback(p));
}


$('.button-hardskills').click();