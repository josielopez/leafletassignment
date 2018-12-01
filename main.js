var huntingtonmap = L.map('huntingtonmap').setView([40.894, -73.418], 12);

  L.tileLayer('https://api.mapbox.com/styles/v1/josielopez/cjp4h3s6o3z2o2sqob8c7kjty/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9zaWVsb3BleiIsImEiOiJjanA0Z3J3MTIwaDh4M2pwN2Z3Zm9wOTU4In0.Tv1T8Xb_M50SLAvtJXaCgg', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
  }).addTo(huntingtonmap);

// <script src="main.js"></script>
