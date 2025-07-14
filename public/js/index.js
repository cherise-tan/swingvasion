//jshint esversion:6

$(document).ready(function () {
  var startingPos = window.pageYOffset;
  var navbarHeight = $("#navigation-bar").outerHeight();

  $(window).scroll(function () {
    var currentPos = window.pageYOffset;

    if (startingPos < currentPos && currentPos > navbarHeight) {
      $("#navigation-bar").css({
        top: "-120px",
      });
    } else {
      $("#navigation-bar").css({
        top: "0px",
      });
    }

    startingPos = currentPos;
  });
});
