import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: -6.1667,
  lng: 39.2833
};

const MapComponent = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);

  // Map and marker options
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5',
          },
        ],
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161',
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f5f5',
          },
        ],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff',
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dadada',
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161',
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e',
          },
        ],
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5',
          },
        ],
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#c9e2f6',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e',
          },
        ],
      },
    ],
  };

  // Markers data
  const markers = [
    {
      position: { lat: -6.1667, lng: 39.2833 },
      label: 'Dodoma',
      info: {
        content: (
          <div className="p-2 bg-white rounded">
            <h3 className="font-bold">Dodoma</h3>
            <p>Dodoma Tanzania</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-gray-300">★</span>
              <span className="text-gray-300">★</span>
              <span className="ml-2">3.0</span>
              <span className="ml-2 text-blue-600 underline">Maoni 4</span>
            </div>
            <p className="mt-1 text-blue-600 underline">Angalia ramani kubwa</p>
          </div>
        )
      }
    },
    {
      position: { lat: -6.1458, lng: 39.3028 },
      label: 'Maelekezo',
      info: {
        content: (
          <div className="p-2 bg-white rounded">
            <h3 className="font-bold">Maelekezo</h3>
            <p>Location details</p>
          </div>
        )
      }
    }
  ];

  const onLoad = (map) => {
    setMapInstance(map);
  };

  const onUnmount = () => {
    setMapInstance(null);
  };

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const onCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  return (
    
<>
<div className="p-2 bg-white rounded">
            <h3 className="font-bold">Dodoma</h3>
            <p>Dodoma Tanzania</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-yellow-500">★</span>
              <span className="text-gray-300">★</span>
              <span className="text-gray-300">★</span>
              <span className="ml-2">3.0</span>
              <span className="ml-2 text-blue-600 underline">Maoni 4</span>
            </div>
            <p className="mt-1 text-blue-600 underline">Angalia ramani kubwa</p>
          </div>
          
API FOR MAP IS NEEDED HERE
</>

    // <LoadScript googleMapsApiKey="">
    //   <GoogleMap
    //     mapContainerStyle={containerStyle}
    //     center={center}
    //     zoom={10}
    //     options={options}
    //     onLoad={onLoad}
    //     onUnmount={onUnmount}
    //   >
    //     {markers.map((marker, index) => (
    //       <Marker
    //         key={index}
    //         position={marker.position}
    //         label={marker.label}
    //         onClick={() => onMarkerClick(marker)}
    //         icon={{
    //           url: '',
    //           scaledSize: new window.google.maps.Size(20, 20)
    //         }}
    //       />
    //     ))}

    //     {selectedMarker && (
    //       <InfoWindow
    //         position={selectedMarker.position}
    //         onCloseClick={onCloseInfoWindow}
    //       >
    //         {selectedMarker.info.content}
    //       </InfoWindow>
    //     )}
    //   </GoogleMap>
    // </LoadScript>
  );
};

export default MapComponent;