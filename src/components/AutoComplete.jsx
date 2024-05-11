import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
const AutoComplete = () => {

    const [searchContainer, setSearchContainer] = useState(null)
    useEffect(() => {
        const map = L.map("map", {
          center: [40.7259, -73.9805],
          zoom: 12,
          scrollWheelZoom: true,
          zoomControl: false,
          attributionControl: false,
        });
    
        const geocoderControlOptions = {
          bounds: false,
          markers: false,
          attribution: null,
          expanded: true,
          panToPoint: false,
          params: {
            dedupe: 1,
          }
        };
    
        const geocoderControl = new L.Control.Geocoder('pk.87f2d9fcb4fdd8da1d647b46a997c727', geocoderControlOptions).addTo(map);
    
        geocoderControl.on('select', function (e) {
          displayLatLon(e.feature.feature.display_name, e.latlng.lat, e.latlng.lng);
        });
    
        const searchBoxControl = document.getElementById("search-box");
        const geocoderContainer = geocoderControl.getContainer();
        setSearchContainer(geocoderContainer)
        searchBoxControl.innerHTML = ''
        searchBoxControl.appendChild(geocoderContainer)
    
        function displayLatLon(display_name, lat, lng) {
          const resultString = "You have selected " + display_name + "<br/>Lat: " + lat + "<br/>Lon: " + lng;
          document.getElementById("result").innerHTML = resultString;
        }
    
        return () => {
          map.remove(); // Clean up Leaflet map instance when component is unmounted
        };
      }, []); 
  

    return (
        <div>
        <div id="map"></div>
            <div id="search-box"></div>
            <div className='hidden' id="result"></div>
        </div>
    );
};

export default AutoComplete;