/// <reference path="../typings/globals/jquery/index.d.ts" />
$(document).ready(function () {

   $('.form-giris').focusin(function () {

      let $check = $(this).next().hasClass('click-tooltip');
      if (!$check) {
         $('.my-tooltip').removeClass('click-tooltip');
         $('.form-giris').css({ 'background-color': '#ee4c52 ', 'border': '2px solid #ebebeb' })
         $(this).next().addClass('click-tooltip');
         $(this).css({ 'background-color': '#d1242a', 'border': '2px solid #95080e' });
      }
   })
   $('.form-giris').focusout(function () {
      $('.my-tooltip').removeClass('click-tooltip');
      $('.form-giris').css({ 'background-color': '#ee4c52 ', 'border': '2px solid #ebebeb' })
   })

   let $registerForm = $('#registration');
   $.validator.addMethod('noSpace', function (value, element) {
      return value == '' || value.trim().length != 0
   }, "Boşluk karakterine izin verilmiyor!");
   if ($registerForm.length) {
      $registerForm.validate({
         rules: {
            username: {
               required: true,
               noSpace: true
            },
            email: {
               required: true,
               email: true,
               noSpace: true
            },
            phone: {
               required: true,
               noSpace: true,
               number: true,
               maxlength: 10,
               minlength: 10

            },
            message: {
               required: true,
               noSpace: true
            }
         },
         messages: {
            username: {
               required: 'Lütfen Adınızı ve Soyadınızı yazınız!'
            },
            email: {
               required: 'Lütfen E-Postanızı yazınız!',
               email: 'Lütfen E-Posta adresinizi kontrol edinizi!'
            },
            phone: {
               required: 'Lütfen telefon numaranızı yazınız!',
               range: 'Lütfen telefon numarasını 10 haneli olarak giriniz!',
               number: 'Lütfen sayı giriniz!',
               maxlength: 'Lütfen 10 haneli olarak giriniz',
               minlength: 'Lütfen 10 haneli olarak giriniz'
            },
            message: {
               required: 'Lütfen mesajınızı yazınız!'
            }
         }
      })
   }
})