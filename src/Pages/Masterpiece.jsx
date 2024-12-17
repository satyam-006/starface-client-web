import React, { useEffect } from 'react';
import Previous from "../assets/Api/Previous";
import { useNavigate } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import gsap from 'gsap';

const Masterpiece = () => {
  const navigate = useNavigate();
  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc";

  useEffect(() => {
    // Infinite loop GSAP animation for the grid items
    const gridItems = gsap.utils.toArray('.grid-item');
    const totalItems = gridItems.length;

    // Animate the grid items
    gsap.fromTo(
      gridItems,
      { opacity: 0, y: 50 }, // Initial state (invisible and from below)
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1, // Staggered start for each grid item
        ease: "power2.out",
        repeat: -1, // Infinite loop
        yoyo: true, // To animate back and forth
        repeatDelay: 1, // Delay before starting the next loop
      }
    );

    // Cleanup function to kill the animation on component unmount
    return () => {
      gsap.killTweensOf(gridItems);
    };
  }, []);

  return (
    <>
      <h1 className="border-2 border-red-400 text-center text-lg font-bold my-4 sticky top-20 bg-white z-10">
        STARFACE INDIA TALENT PREVIOUS ACHIEVEMENT
      </h1>

      <div className="flex flex-row items-center sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {Previous.map((curElem, index) => {
          const { id, image, alt, link, discription } = curElem;

          // Logic to determine dimensions
          const dimensions =
            index === Math.floor(Previous.length / 2)
              ? { width: 400, height: 400 } // Center image
              : index % 2 === 1
              ? { width: 400, height: 350 } // Even index
              : { width: 400, height: 300 }; // Odd index

          return (
            
              <div key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white relative transition-transform duration-300 group-hover:scale-105"
                style={{
                  width: `${dimensions.width}px`,
                  height: `${dimensions.height}px`,
                }}
              >
                <IKImage
                  urlEndpoint={urlEndpoint}
                  path={`/StarFace/${image}`}
                  transformation={[dimensions]}
                  lqip={{ active: true, quality: 20 }}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  alt={alt}
                />
              </div>
            
          );
        })}
      </div>
    </>
  );
};

export default Masterpiece;