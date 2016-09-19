import $ from 'jQuery';
import classie from 'desandro-classie';
import smoothScroll from 'smooth-scroll';
import './vendor/player.js.es6';

require('jquery-ui');
require('modernizr');
require('wow');

$(document).ready(() => {
  smoothScroll.init({
    //offset: 130
  });
});

$(document).ready(() => {
  new WOW().init();
  const wow = new WOW({});
});

function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 1,
      header = document.querySelector(".menu");
    if (distanceY > shrinkOn) {
      classie.add(header,"smaller");
    } else {
      if (classie.has(header,"smaller")) {
        classie.remove(header,"smaller");
      }
    }
  });
}

window.onload = init();
