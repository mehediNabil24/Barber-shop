// app/components/BlogPage.tsx
import React from 'react';

type BlogSectionProps = {
  subheading: string;
  content: string;
  imageSrc?: string;
};

type BlogPageProps = {
  title: string;
  date: string;
  heroImage: string;
  sections: BlogSectionProps[];
};

const BlogPage: React.FC<BlogPageProps> = ({ title, date, heroImage, sections }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>

      {/* Hero Image */}
      <div className="mb-6">
        <img
          src={heroImage}
          alt="Blog Hero"
          className="w-full h-64 md:h-96 object-cover rounded-lg cursor-pointer"
        />
      </div>

      {/* Content Sections */}
      {sections.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.subheading}</h2>
          <p className="text-gray-600 text-base mb-4">{section.content}</p>
          {section.imageSrc && (
            <img
              src={section.imageSrc}
              alt={section.subheading}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
