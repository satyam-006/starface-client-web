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
      <div className="flex-1 mt-6 md:mt-0">
          <img
            className="circle-image w-full h-auto max-w-sm mx-auto md:max-w-none md:mx-0"
            src="https://th.bing.com/th?id=OIP.fDK1SlDdGSUcffwouRR9XAHaFZ&w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Starface India Talent introduction"
          />
        </div>
        <div className="flex-1 circle-item text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Welcome to Starface India Talent
          </h1>
          <hr className="w-16 sm:w-24 border-2 border-rose-600 mx-auto md:mx-0 mb-6" />
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
            "Starface India Talent, the pinnacle of creative expression and artistic innovation. As a premier modelling and entertainment agency, we pride ourselves on fostering a nurturing environment where exceptional talent is cultivated, refined, and propelled to stardom.
            Our mission is to bridge the gap between emerging artists and leading industry players, delivering personalized support, expert guidance, and unparalleled opportunities. We strive to empower our talent with the skills, confidence, and networks necessary to succeed in the dynamic world of entertainment.
            At Starface India Talent, we celebrate artistic excellence, diversity, and individuality. Our holistic platform encompasses modelling, acting, and all facets of the entertainment industry, providing a launchpad for aspiring models, actors, and industry professionals to realize their dreams.
            Join us as we redefine success, push creative boundaries, and shape the future of entertainment. Whether you're seeking representation, guidance, or a platform to showcase your talent, Starface India Talent is your gateway to unlocking your full potential.
            Explore our services, submit your portfolio, or schedule a consultation today and discover how Starface India Talent can help you shine."

          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Introduction;
