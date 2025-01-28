import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Previous from "../assets/Api/Previous";

import { IKImage } from 'imagekitio-react';
gsap.registerPlugin(ScrollTrigger);

const Masterpiece = () => {

  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc";

  useEffect(()=>{
    gsap.fromTo(".contain",
      {
        y:0,
      },
      {
        y:-60,
        scrollTrigger: {
          trigger: ".contain",
          start: '990% 28%', // Start when the image is 60% from the top of the viewport
          end: '1020% 16%',   // End when the top of the image reaches 20% from the top
          scrub: true,
          // pin :true,
          markers: false,
        },
        
      }
    );
  })

  return (
    <>
<h1 className="contain text-center text-lg font-bold my-4 p-2 text-3xl font-bold sticky top-20 bg-[#EEEEEE] z-10 sm:top-16 md:top-20 lg:top-26 text-sm md:text-2xl lg:text-3xl font-black bg-[#EEEEEE]">
STARFACE INDIA TALENT PREVIOUS ACHIEVEMENT
      </h1>

      <div className="grid grid-flow-col auto-cols-max overflow-hidden gap-4 sm:gap-2 lg:gap-8">
        {Previous.map((curElem, index) => {
          const { image, alt } = curElem;

          return (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white relative"
              style={{ minWidth: '200px', maxWidth: '400px' }}
            >
              <IKImage
                urlEndpoint={urlEndpoint}
                path={`/StarFace/${image}`}
                transformation={[{ width: 400, height: 300 }]}
                lqip={{ active: true, quality: 20 }}
                loading="lazy"
                className="w-full h-auto object-cover"
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
