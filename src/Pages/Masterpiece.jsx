import React, { useEffect, useRef } from 'react';
import Previous from "../assets/Api/Previous";
import { IKImage } from 'imagekitio-react';
import gsap from 'gsap';

const Masterpiece = () => {
  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc";
  const gridRef = useRef(null);

  useEffect(() => {
    // Infinite loop GSAP animation for the grid items
    const gridItems = gsap.utils.toArray('.grid-item');

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

    // GSAP animation for scrolling effect
    // gsap.to(gridRef.current, {
    //   x: '-100%', // Move to the left
    //   duration: 3,
    //   ease: 'linear',
    //   repeat: -1, // Infinite loop
    //   modifiers: {
    //     x: gsap.utils.unitize((x) => parseFloat(x) + 0.24) // Adjust for the offset
    //   }
    // });

    // Cleanup function to kill the animation on component unmount
    return () => {
      gsap.killTweensOf(gridItems);
      gsap.killTweensOf(gridRef.current);
    };
  }, []);

  return (
    <>
      <h1 className="border-2 border-red-400 text-center text-lg font-bold my-4 text-3xl font-bold sticky top-20 bg-white z-10 sm:sticky top-16 text-sm font-black bg-white z-10 lg:sticky top-26 text-3xl font-bold bg-white z-10">
        STARFACE INDIA TALENT PREVIOUS ACHIEVEMENT
      </h1>

      <div ref={gridRef} className="grid grid-flow-col auto-cols-max overflow-hidden gap-4 sm:gap-2 lg:gap-8">
        {Previous.map((curElem, index) => {
          const { image, alt } = curElem;

          return (
            <div
              key={index}
              className="grid-item group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white relative transition-transform duration-300 group-hover:scale-105"
              style={{ minWidth: '200px', maxWidth: '400px' }} // Set min and max width for items
            >
              <IKImage
                urlEndpoint={urlEndpoint}
                path={`/StarFace/${image}`}
                transformation={[{ width: 400, height: 300 }]} // Set a default transformation
                lqip={{ active: true, quality: 20 }}
                loading="lazy"
                className="w-full h-auto object-cover" // Use h-auto to maintain aspect ratio
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