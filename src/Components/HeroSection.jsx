import React from "react";
import PageTitle from "./PageTitle";

const HeroSection = () => {
  return (
    <div className="bg-white rounded-2xl p-8 mt-8 mx-auto w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Find Interesting Services and Buy Anything Now.
          </h1>
          <p className="text-gray-600 mb-6">
            Succinct Suspendisse Consectetur Tortor Purus Sed Sodales Vitae Dignissim Enim. Nunc Purus Aliquam Integer Habitant Non Nunc Our Ultrices.
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="border border-gray-400 text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              View More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://i.postimg.cc/25hCJ0pZ/photo-1607706189992-eae578626c86.jpg"
            alt="Service visual"
            className="rounded-xl w-full h-full object-cover mt-8 md:mt-0"
          />
        </div>
      </div>
  );
};

export default HeroSection;
