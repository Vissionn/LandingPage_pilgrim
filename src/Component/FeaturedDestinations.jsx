import React from "react";

const FeaturedDestinations = () => {
  const destinations = [
    { name: "Varanasi", description: "The spiritual capital of India.", image: "varanasi.jpg" },
    { name: "Mecca", description: "The holy city of Islam.", image: "mecca.jpg" },
    { name: "Vatican City", description: "The heart of the Catholic Church.", image: "vatican.jpg" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Pilgrimage Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={destination.image} alt={destination.name} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                <p className="text-gray-600 mt-2">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
