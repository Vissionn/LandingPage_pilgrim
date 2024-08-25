import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", text: "A life-changing experience at Varanasi!" },
    { name: "Jane Smith", text: "The pilgrimage to Mecca was profound and unforgettable." },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">What Our Pilgrims Say</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <h4 className="text-gray-800 font-semibold mt-4">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
