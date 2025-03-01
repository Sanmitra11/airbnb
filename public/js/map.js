
  
  mapboxgl.accessToken = mapToken;

  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: "mapbox://styles/mapbox/streets-v12",
      center: [ 73.856285, 18.515669], // Ensure this is an array [lng, lat]
      zoom: 9
  });
     
  // Add a marker at the listing location
  new mapboxgl.Marker()
      .setLngLat(coordinates) // coordinates must be an array [lng, lat]
      .addTo(map);