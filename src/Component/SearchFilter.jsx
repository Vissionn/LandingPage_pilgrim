import React from "react";

const SearchFilter = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Search for a Pilgrimage Destination</h2>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="Enter destination name"
            className="w-1/3 px-4 py-2 border rounded-md"
          />
          <select className="w-1/4 px-4 py-2 border rounded-md">
            <option value="">Select Type</option>
            <option value="temple">Temple</option>
            <option value="mosque">Mosque</option>
            <option value="church">Church</option>
          </select>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Search</button>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
