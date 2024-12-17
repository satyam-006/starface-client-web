import React, { useState, useEffect } from 'react';
import { useAuth } from '../Store/auth';
import servicess from '../assets/Api/Services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi'

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const { services } = useAuth();
  const [imgCount, setImgCount] = useState(0);
  const dimensions = { width: 200, height: 200 };

  useEffect(() => {
    const sections = document.querySelectorAll('.category-section');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  // Group services by category
  const groupedServices = servicess.reduce((acc, cur) => {
    const { category } = cur;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(cur);
    return acc;
  }, {});

  return (
    <>
      <h1 className="text-3xl flex justify-center font-bold underline h-14 bg-gradient-to-r from-cyan-500 to-blue-500 sticky top-20 bg-white z-10">
        Services We Offer
      </h1>

      <section className="section-services">
        <div className="container">
          {/* <h1 className="main-heading">Services</h1> */}
        </div>

        {Object.keys(groupedServices).map((category, index) => (
          <div key={index} className="category-section my-6">
            <h2 className="text-2xl font-semibold mb-4 capitalize text-center lg:text-left">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {groupedServices[category].map((curElem, idx) => {
                const { name, description } = curElem;
               
                return (
                  <div
                    className={`border-solid border-2 border-indigo-600 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${
                      category === 'STARFACE EDUCATIONAL TALENT'
                        ? 'bg-blue-100'
                        : category === 'STARFACE INDIA TALENT'
                        ? 'bg-yellow-100'
                        : 'bg-green-100'
                    }`}
                    key={idx}
                    style={{
                      width: `${dimensions.width}px`,
                      height: `${dimensions.height}px`,
                    }}
                  >
                    <div className="card-details">
                      <h3 className="text-xl font-bold mb-2 text-center sm:text-left">{name}</h3>
                      <p className="text-gray-700 text-justify">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Learn More Button */}
            <div className="relative"> {/* Make this div relative to position the absolute child */}
              <div
                className="absolute top-[-18vh] right-[-2vw] h-[10vw] w-[10vw] rounded-full border-2 border-gray-300 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" // Centering using transform
              >
                <Link
                  to={`/services/${category}`}
                  className="bg-blue-500 text-white flex items-center justify-center h-full w-full rounded-full hover:bg-blue-600 transition duration-300"
                >
                  <BiRightArrowCircle className="h-8 w-8" />
                </Link>
                <span className="z-50 absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      View More
    </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Services;