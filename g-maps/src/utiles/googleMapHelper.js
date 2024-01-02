// utils/googleMapHelper.js

// Fonction pour charger le script de Google Maps
export const loadGoogleMapScript = (callback) => {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAP_API_KEY&libraries=places';
    script.async = true;
    script.defer = true;
    script.onload = callback;
    document.head.appendChild(script);
  };
  
  // Fonction pour initialiser la carte Google Maps
  export const initGoogleMap = (apiKey) => {
    const mapOptions = {
      center: { lat: 0, lng: 0 }, // Centre de la carte
      zoom: 8, // Niveau de zoom
    };
  
    const map = new window.google.maps.Map(document.getElementById('google-map'), mapOptions);
  };