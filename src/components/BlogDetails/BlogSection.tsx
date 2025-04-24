import React from 'react';

const BlogSection = ({ heading, content, imageSrc }) => {
  return (
    <div className="mb-8">
      {heading && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{heading}</h2>
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={heading || 'Blog image'}
          className="w-full max-w-md mx-auto mb-4 rounded-lg"
        />
      )}
      {content && <p className="text-gray-600 leading-relaxed">{content}</p>}
    </div>
  );
};