import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">Who We Are</h1>
          <p className="text-gray-700 text-lg mb-6">
            We’re a passionate team of developers, creatives, and strategists committed to building meaningful digital experiences.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Our Vision</h2>
          <p className="text-gray-600 mb-4">
            To empower businesses and individuals by creating technology solutions that are simple, scalable, and impactful.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Transparency & Trust</li>
            <li>Innovation & Simplicity</li>
            <li>Customer-first mindset</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src="\WhatsApp Image 2025-07-31 at 15.58.54_6dbdd66b.jpg" 
            alt="Our Team" 
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
