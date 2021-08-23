function initMap() {
   const place = { lat: 41.108504, lng: 29.049732 };
   const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: place,
   });

   const marker = new google.maps.Marker({
      position: place,
      map: map,
   });
}