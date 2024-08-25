import React from "react";
import Header from "../Component/Header";
import HeroSection from "../Component/HeroSection";
import SearchFilter from "../Component/SearchFilter";
import FeaturedDestinations from "../Component/FeaturedDestinations";
import Testimonials from "../Component/Testimonials";
import BlogSection from "../Component/BlogSection";
import Footer from "../Component/Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Component */}
      <Header/>

      {/* Hero Section Component */}
      <HeroSection />

      {/* Search and Filter Component */}
      <SearchFilter />

      {/* Featured Destinations Component */}
      <FeaturedDestinations />

      {/* Testimonials Component */}
      <Testimonials />

      {/* Blog Section Component */}
      <BlogSection />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;
