$(document).ready(() => {
   $('.burger').click(function () {
      $(this).toggleClass('on');
      $('.menu').toggleClass('menu-toggle');
   });
   $('.menu a ,.my-logo').click(function (e) {
      e.preventDefault();
   })
})