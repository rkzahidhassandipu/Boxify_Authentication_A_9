import React from "react";
import { motion } from "framer-motion";

const ServiceHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4">
      <h2
        className="text-4xl font-bold bg-gradient-to-r text-indigo-600 bg-clip-text mb-6">
        Popular Subscription Boxes
      </h2>

      <p
        className="text-lg text-gray-500 mb-12 ">
        Choose from our carefully curated selection of premium subscription
        boxes, each designed to bring excitement to your doorstep every month.
      </p>
    </div>
  );
};

export default ServiceHeader;
