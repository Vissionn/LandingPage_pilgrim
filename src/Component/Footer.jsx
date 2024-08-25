import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-gray-300">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-4">
          <a href="/about" className="hover:text-white">About Us</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="px-4 py-2 rounded-md"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-indigo-700 transition duration-300">Subscribe</button>
        </div>
        <div>
          <p>&copy; 2024 Pilgrim Journey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
