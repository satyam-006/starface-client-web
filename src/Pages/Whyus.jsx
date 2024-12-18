import React from 'react'

const Whyus = () => {
  return (
    <div className="why-us-container max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Why Choose Us?</h1>
      <p className="text-lg text-center mb-6">Here are some reasons why we stand out:</p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-lg">High-quality service</li>
        <li className="text-lg">Expert team</li>
        <li className="text-lg">Customer satisfaction guaranteed</li>
        <li className="text-lg">Innovative solutions</li>
      </ul>
    </div>
  )
}

export default Whyus