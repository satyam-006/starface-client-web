import react from "react";
import Collection from "../assets/Api/Collectionapi";
import {useNavigate} from 'react-router-dom';
import { IKImage } from 'imagekitio-react';


export const LayoutCollection = () => {

    const Navigate = useNavigate();
  const urlEndpoint="https://ik.imagekit.io/nx2mu5rdoc";


    return (


        <>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                <div className="text-center mb-8 sm:mb-12">
                    {/* <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">
                        Absolutely Stunning
                    </h2> */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                        LAYOUT COLLECTION
                    </h1>
                    {/* <hr className="w-24 sm:w-40 mx-auto border-2 border-rose-600 mb-4 sm:mb-6" />
                    <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed text-sm sm:text-base px-4 sm:px-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illo voluptate, 
                        eligendi eum a nihil porro minus perferendis architecto dolore? Eius, qui sequi dolor 
                        molestias quasi temporibus architecto corrupti eos consequatur officiis?
                    </p> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {Collection.map((curElem, index) => {
                        const { id, image, alt, link, discription } = curElem;
                        return (
                            <div 
                                onClick={() => Navigate(`${link}`)}
                                key={index} 
                                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                            >
                                <div className="relative">
                                    <IKImage
                                        urlEndpoint={urlEndpoint}
                                        path={`/StarFace/${image}`}
                                        transformation={[{
                                            height: 300,
                                            width: 400,
                                        }]}
                                        lqip={{ active: true, quality: 20 }}
                                        loading="lazy"
                                        className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="p-3 sm:p-4 text-base sm:text-lg font-semibold text-gray-800 border-t group-hover:text-rose-600 transition-colors duration-300 line-clamp-2">
                                    {discription}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );

};