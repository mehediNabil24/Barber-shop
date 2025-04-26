// app/page.tsx

import NewsBlogCard from "./NewsBlogCard";

// Define the interface for a single blog object
interface Blog {
  imageSrc: string;
  title: string;
  description: string;
}

// Define the blogs array with the Blog interface
const blogs: Blog[] = [
  {
    imageSrc: '/asset/news-blog-1.png',
    title: 'THE BEST MUSTACHE STYLES TO GO FOR IN 2025',
    description: 'Mustaches are gaining popularity and we’re seeing more and more men sporting the classic style. The right mustache style emphasizes your...',
  },
  {
    imageSrc: '/asset/news-blog-2.png',
    title: 'WHAT IS AN ESTHETICIAN? SHOULD I SEE ONE?',
    description: 'Recently, I’ve become super invested in skincare. I don’t want to become a skincare expert, but I do want to know products that can help...',
  },
  {
    imageSrc: '/asset/news-blog.png',
    title: 'FEMALE GROOMING STYLES: MOST POPULAR WOMEN’S PUBIC HAIR TRENDS',
    description: 'Maybe you’re going on a vacation somewhere tropical or maybe you just want smooth skin in your bikini bottom...',
  },
];

const NewsAndBlogSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800">News & Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <NewsBlogCard
            key={index}
            imageSrc={blog.imageSrc}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsAndBlogSection;