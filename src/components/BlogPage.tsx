import React from 'react';
import BlogCard from './BlogCard';


const BlogPage = () => {
  // Sample blog post data
  const blogPosts = [
    {
      imageSrc: "asset/1.jpg",
      date: "January 25-2025",
      title: "Hairstylist Appreciation Day: 6 Ways to Say Thank You",
      description:
        "Your hairstylist is always there for you. After all these years, they know you almost as well as they know your hair. They know what length you prefer in the...",
    },
    {
      imageSrc: "asset/2.jpg",
      date: "January 25-2025",
      title: "Hairstylist Appreciation Day: 6 Ways to Say Thank You",
      description:
        "Your hairstylist is always there for you. After all these years, they know you almost as well as they know your hair. They know what length you prefer in the...",
    },
    {
      imageSrc: "asset/3.jpg",
      date: "January 25-2025",
      title: "Hairstylist Appreciation Day: 6 Ways to Say Thank You",
      description:
        "Your hairstylist is always there for you. After all these years, they know you almost as well as they know your hair. They know what length you prefer in the...",
    },
    {
      imageSrc: "asset/4.jpg",
      date: "January 25-2025",
      title: "Hairstylist Appreciation Day: 6 Ways to Say Thank You",
      description:
        "Your hairstylist is always there for you. After all these years, they know you almost as well as they know your hair. They know what length you prefer in the...",
    },
    {
      imageSrc: "asset/5.jpg",
      date: "January 25-2025",
      title: "Hairstylist Appreciation Day: 6 Ways to Say Thank You",
      description:
        "Your hairstylist is always there for you. After all these years, they know you almost as well as they know your hair. They know what length you prefer in the...",
    },
    {
      imageSrc: "asset/6.jpg",
      date: "January 25-2025",
      title: "Hairstylist Appreciation Day: 6 Ways to Say Thank You",
      description:
        "Your hairstylist is always there for you. After all these years, they know you almost as well as they know your hair. They know what length you prefer in the...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">BLOG</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            + Add Blog 
          </button>
        </div>
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              imageSrc={post.imageSrc}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;