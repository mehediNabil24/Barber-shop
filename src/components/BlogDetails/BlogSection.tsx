import React from 'react';

const BlogSection = ({ subheading, content, imageSrc }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{subheading}</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <p className="text-gray-600 text-base flex-1">{content}</p>
        {imageSrc && (
          <img src={imageSrc} alt={subheading} className="w-full md:w-1/3 h-48 object-cover rounded-lg" />
        )}
      </div>
    </div>
  );
};

export default BlogSection;