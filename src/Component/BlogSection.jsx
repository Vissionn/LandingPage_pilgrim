import React from "react";

const BlogSection = () => {
  const blogs = [
    { title: "The Significance of Pilgrimage in Hinduism", image: "blog1.jpg", link: "/blog/1" },
    { title: "How to Prepare for Hajj", image: "blog2.jpg", link: "/blog/2" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest Articles & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                <a href={blog.link} className="text-indigo-600 hover:underline mt-4 block">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
