'use client';

const MapButton = ({ latitude=9.964937, longitude=76.243562 }) => {
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
      mapUrl = `https://maps.app.goo.gl/1wHsX7CDt8LXJ4vn7`;
    }

    // Redirect to the map URL
    window.location.href = mapUrl;
  };

  return (
    <button
      onClick={handleClick}
      className="text-white px-4 py-2 rounded-md frosted-glass"
    >
      Get location
    </button>
  );
};

export default MapButton;
