$(document).ready(() => {
   $('.burger').click(function () {
      $(this).toggleClass('on');
      $('.menu').toggleClass('menu-toggle');
   });
   $('.anasayfa .logo').click(function (e) {
      e.preventDefault();
   })
})