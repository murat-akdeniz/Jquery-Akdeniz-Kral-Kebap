const images = document.querySelectorAll('[data-lazy]');
console.log('images', images.length);

function preloadImage(img) {
   const src = img.getAttribute('data-lazy');
   if (!src) {
      return;
   }
   img.src = src;
}
const imgOptions = {
   threshold: 1,
   rootMargin: "-150px 0px 0px 0px"
};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) {
         return;
      } else {
         preloadImage(entry.target);
         imgObserver.unobserve(entry.target)
      }
   });
}, imgOptions);

images.forEach(image => {
   imgObserver.observe(image);
})