import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import { IKImage } from 'imagekitio-react'
import { images } from '../../assets/Api/images'

const Gallary = () => {
  const urlEndpoint = "https://ik.imagekit.io/nx2mu5rdoc"
  const [loading, setLoading] = useState(true)
  const modelImages = images && images[0] && images[0].data ? images[0].data : [];

  const breakpointColumns = {
    default: 4,
    1024: 3,
    750: 2,
    500: 1
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {modelImages.map((image) => (
          <div 
            key={image.id} 
            className="mb-4 hover:opacity-90 transition-opacity cursor-pointer relative"
          >
            <div className="relative overflow-hidden">
              {/* Skeleton loader */}
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              
              <IKImage
                urlEndpoint={urlEndpoint}
                path={`/StarFace/${image.path}`}
                transformation={[{
                  quality: 90,
                  width: "auto",
                }]}
                lqip={{ active: true, quality: 20 }}
                loading="lazy"
                className="w-full rounded-lg object-cover relative z-10 transition-opacity duration-300"
                alt={`Gallery image ${image.id}`}
                onLoad={() => setLoading(false)}
                onError={(err) => {
                  console.log("Error loading image:", err);
                  setLoading(false);
                }}
                style={{
                  opacity: loading ? 0 : 1,
                  minHeight: '100px'
                }}
              />
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default Gallary