import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  useEffect(() => {
    // Animate text elements
    gsap.utils.toArray('.circle-item').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -100, y: 50 }, // Text animates from left and below
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
            toggleActions: 'play none none reverse',
            markers: false, // Debugging; enable if needed
          },
        }
      );
    });

    // Animate image elements
    gsap.utils.toArray('.circle-image').forEach((image) => {
      gsap.fromTo(
        image,
        { opacity: 0, x: 100, scale: 0.8 }, // Images animate from right
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
            toggleActions: 'play none none reverse',
            markers: false, // Debugging; enable if needed
          },
        }
      );
    });
  }, []);

  return (
    <div className="circle-container px-4 sm:px-6 lg:px-8">
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="flex-1 circle-item text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Introduction
          </h1>
          <hr className="w-16 sm:w-24 border-2 border-rose-600 mx-auto md:mx-0 mb-6" />
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
            Welcome to Starface India Talent, the pinnacle of creative expression and artistic innovation. As a premier
            modeling and entertainment agency, we pride ourselves on fostering a nurturing environment where exceptional
            talent is cultivated, refined, and propelled to stardom.
          </p>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            className="circle-image w-full h-auto max-w-sm mx-auto md:max-w-none md:mx-0"
            src="https://th.bing.com/th?id=OIP.fDK1SlDdGSUcffwouRR9XAHaFZ&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Starface India Talent introduction"
          />
        </div>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="flex-1 circle-item text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Overview</h1>
          <hr className="w-16 sm:w-24 border-2 border-rose-600 mx-auto md:mx-0 mb-6" />
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
            Welcome to Starface India Talent, a premier entertainment and talent management agency dedicated to fostering creative excellence and artistic innovation.
          </p>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            className="circle-image w-full h-auto max-w-sm mx-auto md:max-w-none md:mx-0"
            src="https://th.bing.com/th?id=OIP.eX2L4glMWE5wXdwBCXoJ4gAAAA&w=313&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Agency overview"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="flex-1 circle-item text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Mission</h1>
          <hr className="w-16 sm:w-24 border-2 border-rose-600 mx-auto md:mx-0 mb-6" />
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
            To discover, nurture, and promote exceptional talent in the entertainment industry, providing a holistic platform for artists to showcase their skills and achieve success.
          </p>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            className="circle-image w-full h-auto max-w-sm mx-auto md:max-w-none md:mx-0"
            src="https://th.bing.com/th?id=OIP.JaMhHcbJ861j7JGlhAEeWwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Our mission at Starface India Talent"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 circle-item text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Vision</h1>
          <hr className="w-16 sm:w-24 border-2 border-rose-600 mx-auto md:mx-0 mb-6" />
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
            To become India's leading talent agency, renowned for launching careers, producing exceptional content, and pushing the boundaries of artistic expression.
          </p>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            className="circle-image w-full h-auto max-w-sm mx-auto md:max-w-none md:mx-0"
            src="https://th.bing.com/th?id=OIP.hwETvQ43zgDcL6CmvHVluwHaEh&w=319&h=195&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Our vision for success"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
