import react, { useState } from 'react'
import { useAuth } from '../Store/auth';


function Services() {

  const { services } = useAuth();
  const [imgcount, setimgCount] = useState(0);
  console.log("hello");
  const handleClick = () => {
    setimgCount(imgcount + 1); // Update the state
  };

  return (
    <>
      <h1 className="text-3xl font-bold underlineh-14 bg-gradient-to-r from-cyan-500 to-blue-500">Services</h1>

      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">
            service

          </h1>
        </div>
        <div className="flex flex-wrap">
          {
            services.map((curElem, index) => {
              const { price, description, provider, service } = curElem;
              return (
                <div className="border-solid border-2 border-indigo-600 ... m-4" key={index}>
                  <div className="card-img">
                    <img src="" alt={imgcount} onClick={handleClick} width={500} />
                  </div>
                  <div className="card-details">
                    <div className="grid grid-two-cols">
                      <p>{provider}</p>
                      <p>{price}</p>
                    </div>
                    <h2>{service}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}

        </div>
      </section>

    </>
  );
};
export default Services
