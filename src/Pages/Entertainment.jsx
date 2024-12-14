import React from 'react';
import { useParams } from 'react-router-dom';
import servicess from '../assets/Api/Services';

const Entertainment = () => {

  const { id } = useParams();

  // Mock API data fetch for simplicity
  const service = servicess.find((service) => service.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  const { name, description, category } = service;


  return (
   <>
       <div className="p-4">
      <h1 className="text-3xl font-bold">{name}</h1>
      <h2 className="text-xl text-gray-600 capitalize mt-2">{category}</h2>
      <p className="text-gray-700 mt-4">{description}</p>
    </div>

   </>
  )
}

export default Entertainment