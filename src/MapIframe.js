import React from 'react';

const MapIframe = () => {
  return (
    <div
      style={{
        width: '95%',
        height: '1000px',
        padding: '5%', // Adjust the padding as needed
        margin: 'auto', // Center the map horizontally
        display: 'flex',
        justifyContent: 'center', // Center the map vertically
        alignItems: 'center',
      }}
    >
      
      <iframe
        src="https://storage.googleapis.com/maps-solutions-huqgidsjmy/locator-plus/wm4k/locator-plus.html"
        title="Google Maps Locator Plus"
        width="80%"
        height="100%"
        style={{ border: '0' }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapIframe;
