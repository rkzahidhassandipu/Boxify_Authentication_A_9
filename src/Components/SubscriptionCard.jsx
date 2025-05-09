import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const SubscriptionCard = ({ service }) => {
  const { id, name, category, thumbnail, price, frequency, description, rating } = service;

  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        
      </div>

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-indigo-600">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${price}</span>
          <span className="text-sm text-gray-500">{frequency}</span>
        </div>
        <p className="text-gray-600 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center text-yellow-500">
            <FaStar className="h-4 w-4" />
            <span className="ml-1 text-sm">{rating}</span>
          </div>

          <Link
            to={`/service/${id}`}
            className="inline-flex items-center bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            <FaShoppingCart className="mr-2" /> View More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SubscriptionCard;
