'use client';

const MapButton = ({ latitude=69, longitude=69 }) => {
  const handleClick = () => {
    const userAgent = window.navigator.userAgent;
    let mapUrl = '';

    // Detect Android devices
    if (/android/i.test(userAgent)) {
      mapUrl = `geo:${latitude},${longitude}`;
    } 
    // Detect iOS devices (iPhone, iPad, iPod) and ensure it's not an old IE or old Edge
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream && !/Edge\/\d./i.test(userAgent)) {
      mapUrl = `maps://maps.apple.com/?q=${latitude},${longitude}`;
    } 
    // Default to Google Maps for other cases
    else {
      mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    }

    // Redirect to the map URL
    window.location.href = mapUrl;
  };

  return (
    <button
      onClick={handleClick}
      className="text-white px-4 py-2 rounded-md frosted-glass"
    >
      Open Map
    </button>
  );
};

export default MapButton;
