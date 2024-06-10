'use client';

// components/BackgroundShuffler.js
import { useEffect, useState } from 'react';

const images = [
  'url(/web1.jpg)',
  'url(/web3.jpg)',
  'url(/web5.jpg)',
  'url(/web6.jpg)',
];

const BackgroundShuffler = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="absolute inset-0 bg-cover bg-center transition-all duration-1500"
    style={{ backgroundImage: images[currentIndex] }}>
    </div>
  );
};

export default BackgroundShuffler;
