$(document).ready(function () {
  $('#mobile__menu').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('btn__nav__mobile__active');
  });
})