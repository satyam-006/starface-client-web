import React, { useState, useEffect } from 'react';
import { useAuth } from '../Store/auth';
import servicess from '../assets/Api/Services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const { services } = useAuth();
  const [imgCount, setImgCount] = useState(0);

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

  const handleClick = () => {
    setImgCount(imgCount + 1); // Update the state
  };

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
      <h1 className="text-3xl font-bold underline h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
        Services We Offer
      </h1>

      <section className="section-services">
        <div className="container">
          {/* <h1 className="main-heading">Services</h1> */}
        </div>

        {Object.keys(groupedServices).map((category, index) => (
          <div key={index} className="category-section my-6">
            <h2 className="text-2xl font-semibold mb-4 capitalize text-center lg:text-left">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedServices[category].map((curElem, idx) => {
                const { name, description } = curElem;
                return (
                  <div
                    className={`border-solid border-2 border-indigo-600 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${
                      category === 'education'
                        ? 'bg-blue-100'
                        : category === 'entertainment'
                        ? 'bg-yellow-100'
                        : 'bg-green-100'
                    }`}
                    key={idx}
                  >
                    <div className="card-details">
                      <h3 className="text-xl font-bold mb-2 text-center sm:text-left">{name}</h3>
                      <p className="text-gray-700 text-justify">{description}</p>
                      <Link
          to={`/service/${curElem.id}`}
          className="text-blue-500 underline"
        >
          Learn More
        </Link>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Services;
