import React from 'react';

interface BlogSectionProps {
  subheading: string;
  content: string;
  imageSrc?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ subheading, content, imageSrc }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{subheading}</h2>
      <div>
        <p className="text-gray-600 text-base flex-1">{content}</p>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={subheading}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default BlogSection;
