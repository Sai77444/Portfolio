import React from 'react';

function Homepage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-white to-violet-100 p-10">

      <div className="text-center md:text-left text-4xl font-serif text-gray-800 space-y-4 md:ml-10">
        <h1>
          Hello, I am <span className="text-violet-600 font-bold">Sai Borse.</span>
        </h1>
        <p className="text-xl font-light text-gray-600">From K.K. Wagh Polytechnic</p>
        <p className="text-md text-gray-500 max-w-md">
          A passionate learner stepping into the world of development. I enjoy crafting clean and modern interfaces.
        </p>
      </div>

      
      <div className="mt-10 md:mt-0 md:ml-20">
        <div className="w-70 h-70 rounded-full overflow-hidden border-4 border-violet-500 shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="../WhatsApp Image 2025-07-31 at 15.58.54_6dbdd66b.jpg"
            alt="Sai Borse"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
