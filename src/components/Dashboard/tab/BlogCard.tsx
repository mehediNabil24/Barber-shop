"use client";

import React from 'react';
import { motion } from 'framer-motion';

type BlogCardProps = {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, date, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      {/* Image Section */}
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      
      {/* Content Section */}
      <div className="p-4">
        <p className="text-gray-500 text-sm">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-1">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default BlogCard;
