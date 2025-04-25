import React from 'react';

interface BlogHeroProps {
  imageSrc: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ imageSrc }) => {
  return (
    <div className="mb-6">
      <img
        src={imageSrc}
        alt="Blog Hero"
        className="w-full h-64 md:h-96 object-cover rounded-lg cursor-pointer"
      />
    </div>
  );
};

export default BlogHero;
