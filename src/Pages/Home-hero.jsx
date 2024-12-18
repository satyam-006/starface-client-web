import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Styles/styles.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Apps = () => {
  // Define images for different screen sizes
  const images = {
    large: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-2.jpg",
      "https://swiperjs.com/demos/images/nature-3.jpg",
      "https://swiperjs.com/demos/images/nature-4.jpg",
    ],
    medium: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://th.bing.com/th?id=OIP.Pqp-L2hXuZU5axLp1G1ZPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    ],
    small: [
      "https://th.bing.com/th?id=OIP.Pqp-L2hXuZU5axLp1G1ZPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.Pqp-L2hXuZU5axLp1G1ZPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.Pqp-L2hXuZU5axLp1G1ZPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.Pqp-L2hXuZU5axLp1G1ZPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    ],
  };

  const [currentImages, setCurrentImages] = useState(images.large);
  const [swiperHeight, setSwiperHeight] = useState('460px'); // Default height

  const updateImages = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCurrentImages(images.small);
      // setSwiperHeight('200px'); // Set height for small devices
    } else if (width < 768) {
      setCurrentImages(images.medium);
      // setSwiperHeight('300px'); // Set height for medium devices
    } else {
      setCurrentImages(images.large);
      // setSwiperHeight('400px'); // Set height for large devices
    }
  };

  useEffect(() => {
    updateImages(); // Set initial images based on current window size
    window.addEventListener('resize', updateImages); // Update images on resize

    return () => {
      window.removeEventListener('resize', updateImages); // Cleanup event listener
    };
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
        style={{ height: swiperHeight }} // Set dynamic height
      >
        {currentImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image} alt={`Slide ${index + 1}`} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Make images responsive
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Apps;