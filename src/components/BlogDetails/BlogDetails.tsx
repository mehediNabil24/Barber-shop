import React from 'react';
import BlogHeader from './BlogHeader';
import BlogHero from './BlogHero';
import BlogSection from './BlogSection';

interface BlogSectionData {
  subheading: string;
  content: string;
  imageSrc?: string | null;
}

interface BlogData {
  title: string;
  date: string;
  heroImage: string;
  introduction: string;
  sections: BlogSectionData[];
}

const BlogDetailPage: React.FC = () => {
  const blogData: BlogData = {
    title: "Discover the Top 10 Black-Owned Barber Shops in San Antonio",
    date: "March 20, 2024",
    heroImage: "./asset/blog-details-1.jpg",
    introduction:
      "San Antonio is a city with a rich cultural history, where the fabric of its community is woven through the local barber shops that serve as more than just grooming centers. Central to the Black community, these barber shops are cultural hubs where the community gathers to exchange stories, share laughter, and build bonds. This article explores the top 10 Black-owned barber shops in San Antonio, places that not only provide exceptional grooming services but also celebrate the culture and heritage of their patrons.",
    sections: [
      {
        subheading: "The Essence of a Black Barber Shop in Home Base",
        content:
          "A Black barber shop is more than just a place to get a haircut – it’s a cultural institution, a sanctuary of identity and community. In San Antonio, these barber shops have been common spaces for connection and camaraderie for decades. Beyond the haircuts, they’re hubs for mentorship, cultural dialogue, and social connection within the community. Whether it’s political debates, sports discussions, or simply catching up with friends, these spaces are integral to the community’s fabric. In this section, we’ll explore how these barber shops in San Antonio maintain the traditions of the Black community while also serving as welcoming spaces for all.",
        imageSrc: "./asset/blog-details-2.jpg",
      },
      {
        subheading: "Black-Owned Barber Shop in Orlando – Diverse Services for Every Need",
        content:
          "Orlando’s Black-owned barber shops offer a wide range of services tailored to the specific needs of a diverse clientele. From classic haircuts and beard trims to intricate designs and modern styling, these shops cater to all. Many of these establishments also provide personalized services, ensuring every client leaves feeling confident and refreshed. In this section, we’ll dive into the variety of services offered by Black-owned barber shops in Orlando and how they cater to the needs of their diverse clientele.",
        imageSrc: null,
      },
      {
        subheading: "Black-Owned Barber Shops in Orlando – Craftsmanship and Accreditation",
        content:
          "Orlando is home to several Black-owned barber shops that take pride in their craftsmanship and professional accreditations. Many of these shops employ barbers who have trained at some of the best barbering schools in the country. They bring a level of expertise and artistry that sets them apart. From precision fades to detailed beard sculpting, these barbers showcase their skills with every client. In this section, we’ll highlight some of the top Black-owned barber shops in Orlando known for their exceptional craftsmanship and professional standards.",
        imageSrc: null,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="px-[10px]  lg:px-[40px] xl:px-[200px] lg:mt-[100px] mt-[50px]  mx-auto">
        {/* Blog Header */}
        <BlogHeader title={blogData.title} date={blogData.date} />
        {/* Hero Image */}
        <BlogHero imageSrc={blogData.heroImage} />
        {/* Introduction */}
        <p className="text-gray-600 text-base mb-8">{blogData.introduction}</p>
        {/* Sections */}
        {blogData.sections.map((section, index) => (
          <BlogSection
            key={index}
            subheading={section.subheading}
            content={section.content}
            imageSrc={section.imageSrc || undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogDetailPage;
