import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  useEffect(() => {
    // Select all elements to animate
    const textElements = document.querySelectorAll('.circle-item');
    const imageElements = document.querySelectorAll('.circle-image');

    // Animate text elements on scroll
    textElements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 65%',
            scrub: true,
            toggleActions: 'play none none reverse',
            markers: false, // Debugging; set to true if needed
          },
        }
      );
    });

    // Animate image elements on scroll
    imageElements.forEach((image) => {
      gsap.fromTo(
        image,
        { opacity: 0, x: 100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'bottom 65%',
            scrub: true,
            toggleActions: 'play none none reverse',
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="circle-container">
      {/* Introduction Section */}
      <div className="text-center mb-8 sm:mb-12 flex">
        <div className="flex-1 circle-item">
          <h1 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Introduction
          </h1>
          <hr className="w-24 sm:w-40 mx-auto border-2 border-rose-600 mb-4 sm:mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-base sm:text-lg px-4 sm:px-6">
            Welcome to Starface India Talent, the pinnacle of creative expression and artistic innovation. As a premier
            modeling and entertainment agency, we pride ourselves on fostering a nurturing environment where exceptional
            talent is cultivated, refined, and propelled to stardom.
          </p>
        </div>
        <div className="flex-1 mt-6">
          <img
            className="circle-image"
            src="https://th.bing.com/th?id=OIP.fDK1SlDdGSUcffwouRR9XAHaFZ&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Starface India Talent introduction"
          />
        </div>
      </div>

      {/* Overview Section */}
      <div className="text-center mb-8 sm:mb-12 flex">
        <div className="flex-1 circle-item">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Overview</h1>
          <hr className="w-24 sm:w-40 mx-auto border-2 border-rose-600 mb-4 sm:mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-base sm:text-lg px-4 sm:px-6">
            Welcome to Starface India Talent, a premier entertainment and talent management agency dedicated to
            fostering creative excellence and artistic innovation.
          </p>
        </div>
        <div className="flex-1">
          <img
            className="circle-image"
            src="https://th.bing.com/th?id=OIP.eX2L4glMWE5wXdwBCXoJ4gAAAA&w=313&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Agency overview"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="text-center mb-8 sm:mb-12 flex">
        <div className="flex-1 circle-item">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Mission</h1>
          <hr className="w-24 sm:w-40 mx-auto border-2 border-rose-600 mb-4 sm:mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-base sm:text-lg px-4 sm:px-6">
            To discover, nurture, and promote exceptional talent in the entertainment industry, providing a holistic
            platform for artists to showcase their skills and achieve success.
          </p>
        </div>
        <div className="flex-1">
          <img
            className="circle-image"
            src="https://th.bing.com/th?id=OIP.JaMhHcbJ861j7JGlhAEeWwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Our mission at Starface India Talent"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="text-center mb-8 sm:mb-12 flex">
        <div className="flex-1 circle-item">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Vision</h1>
          <hr className="w-24 sm:w-40 mx-auto border-2 border-rose-600 mb-4 sm:mb-6" />
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-base sm:text-lg px-4 sm:px-6">
            To become India's leading talent agency, renowned for launching careers, producing exceptional content, and
            pushing the boundaries of artistic expression.
          </p>
        </div>
        <div className="flex-1">
          <img
            className="circle-image"
            src="https://th.bing.com/th?id=OIP.hwETvQ43zgDcL6CmvHVluwHaEh&w=319&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Our vision for success"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
