import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">Pilgrim Journey</div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-indigo-600">Home</a>
          <a href="/destinations" className="text-gray-600 hover:text-indigo-600">Destinations</a>
          <a href="/about" className="text-gray-600 hover:text-indigo-600">About Us</a>
          <a href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
        </nav>
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
