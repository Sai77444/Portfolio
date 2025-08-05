import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram ,FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; 2025 Sai Borse. All rights reserved.</p>

      <div className="flex space-x-6 mt-4 md:mt-0">

        <a
          href="https://wa.me/+917666736579" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 text-2xl"
        >
          <FaWhatsapp />
        </a>

       
        <a
          href="https://www.facebook.com/share/1Ce6uVjeQ3/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-2xl"
        >
          <FaFacebookF />
        </a>

        
        <a
          href="https://www.instagram.com/mr_saiborse_2008_?igsh=NTIxamZrNnllamZv" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 text-2xl"
        >
          <FaInstagram />
        </a>
            <a href="https://github.com/Sai77444/Internship_Batch2025/tree/main/java" target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} />
      </a>
       
            <a href="https://www.linkedin.com/in/sai-borse-03a250357/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={28} className="text-blue-500 hover:text-blue-400 text-2xl" />
      </a>
      </div>
    </div>
  );
}

export default Footer;
