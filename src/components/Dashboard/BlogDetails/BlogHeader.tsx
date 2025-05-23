import React from 'react';

interface BlogHeaderProps {
  title: string;
  date: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
};

export default BlogHeader;
