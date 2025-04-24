import React from 'react';

const BlogHero = ({ imageSrc }) => {
  return (
    <div className="mb-6">
      <img src={imageSrc} alt="Blog Hero" className="w-full h-64 md:h-96 object-cover rounded-lg" />
    </div>
  );
};

export default BlogHero;