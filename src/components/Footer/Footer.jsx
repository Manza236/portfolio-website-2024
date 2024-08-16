import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="bg-primary text-secondary py-8">
      <div id='contact-section'>
      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h5 className="text-lg font-bold mb-4 text-accent">Research Organization</h5>
          <p>Leading research and innovation.</p>
          <p className="mt-2">123 Research St, Science City, Country</p>
          <p>+123-456-7890</p>
          <p>email@research.org</p>
        </div>
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h5 className="text-lg font-bold mb-4 text-accent">Quick Links</h5>
          <ul>
            <li><a href="#" className="text-secondary hover:text-gray-300 transition duration-300">Home</a></li>
            <li><a href="#" className="text-secondary hover:text-gray-300 transition duration-300">About</a></li>
            <li><a href="#" className="text-secondary hover:text-gray-300 transition duration-300">Projects</a></li>
            <li><a href="#" className="text-secondary hover:text-gray-300 transition duration-300">Contact</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0 md:w-1/4">
          <h5 className="text-lg font-bold mb-4 text-accent">Resources</h5>
          <ul>
            <li><a href="#" className="text-secondary hover:text-gray-300 transition duration-300">Blog</a></li>
            <li><a href="#" className="text-secondary hover:text-gray-300 transition duration-300">Privacy Policy</a></li>
            <li><a href="#" className="text-secondary hover:text-gray-300 transition duration-300">Terms of Service</a></li>
            <li><a href="#" className="text-secondary hover:text-gray-300 transition duration-300">Help Center</a></li>
          </ul>
        </div>
        <div className="md:w-1/4">
          <h5 className="text-lg font-bold mb-4 text-accent">Subscribe</h5>
          <form className="flex flex-col">
            <input type="email" className="p-2 mb-4 rounded-md text-primary" placeholder="Enter your email" />
            <button className="bg-accent text-secondary py-2 rounded-md hover:bg-teal-600 transition duration-300">Subscribe</button>
          </form>
          <div className="mt-4">
            <h5 className="text-lg font-bold mb-2 text-accent">Follow Us:</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-gray-300 transition duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="text-secondary hover:text-gray-300 transition duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="text-secondary hover:text-gray-300 transition duration-300"><FaDiscord size={24} /></a>
              <a href="#" className="text-secondary hover:text-gray-300 transition duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary mt-8 pt-4 text-center">
        <p className="text-secondary">&copy; 2024 Research Organization. All rights reserved.</p>
      </div>
    </div>
      </div>
    
</footer>


  );
};

export default Footer;
