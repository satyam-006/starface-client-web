import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 text-gray-800 text-left">
      <div>
        <h4 className="text-lg font-semibold mb-2">About Us</h4>
        <p>Learn more about our company and values.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Services</h4>
        <p>Explore the services we offer to our clients.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">Contact</h4>
        <p>Get in touch with us for inquiries.</p>
      </div>
      <div className="md:col-span-1 mt-6">
        <h4 className="text-lg font-semibold mb-2">Quick Access Links</h4>
        <ul className="list-disc list-inside">
          <li><a href="/home" className="text-blue-600 hover:underline">Home</a></li>
          <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
          <li><a href="/services" className="text-blue-600 hover:underline">Services</a></li>
          <li><a href="/contact" className="text-blue-600 hover:underline">Contact</a></li>
        </ul>
      </div>
      <div className="md:col-span-1 mt-6">
        <h4 className="text-lg font-semibold mb-2">FAQ</h4>
        <p>Find answers to common questions.</p>
      </div>
      <div className="md:col-span-1 mt-6">
        <h4 className="text-lg font-semibold mb-2">Terms and Conditions</h4>
        <p>Read our terms and conditions.</p>
      </div>
      <div className="md:col-span-3 mt-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer