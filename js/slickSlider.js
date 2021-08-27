$(document).ready(() => {

   $('.slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      prevArrow: '<span class="prev_arrow"><img src="../img/icons/arrow-prev.svg" alt="arrow_prev"></span>',
      nextArrow: '<span class="next_arrow"><img src="../img/icons/arrow-next.svg" alt="arrow_nex"></span>',
      responsive: [
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 3,

            }
         },
         {
            breakpoint: 996,
            settings: {
               slidesToShow: 2,
               centerMode: false,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               centerMode: true,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               centerMode: false
            }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]

   });




})