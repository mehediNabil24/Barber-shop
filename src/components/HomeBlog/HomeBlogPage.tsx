// app/page.tsx


import HomeBlogCard from "./HomeBlogCard";

// Define the interface for a single blog object
interface Blog {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
}

// Define the blogs array with the Blog interface
const blogs: Blog[] = [
  {
    imageSrc: '/asset/Rectangle 61.png',
    date: 'January 25, 2025',
    title: 'HAIRSTYLIST APPRECIATION DAY: 6 WAYS TO SAY THANK YOU',
    description: 'Your hairstylist is always there for you. After all these years, they know what length you prefer in the...',
  },
  {
    imageSrc: '/asset/Rectangle 61(2).png',
    date: 'January 25, 2025',
    title: 'HAIRSTYLIST APPRECIATION DAY: 6 WAYS TO SAY THANK YOU',
    description: 'Your hairstylist is always there for you. After all these years, they know what length you prefer in the...',
  },
  {
    imageSrc: '/asset/Rectangle 61 (1).png',
    date: 'January 25, 2025',
    title: 'HAIRSTYLIST APPRECIATION DAY: 6 WAYS TO SAY THANK YOU',
    description: 'Your hairstylist is always there for you. After all these years, they know what length you prefer in the...',
  },
  {
    imageSrc: '/asset/Rectangle 61.png',
    date: 'January 25, 2025',
    title: 'HAIRSTYLIST APPRECIATION DAY: 6 WAYS TO SAY THANK YOU',
    description: 'Your hairstylist is always there for you. After all these years, they know what length you prefer in the...',
  },
  {
    imageSrc: '/asset/Rectangle 61.png',
    date: 'January 25, 2025',
    title: 'HAIRSTYLIST APPRECIATION DAY: 6 WAYS TO SAY THANK YOU',
    description: 'Your hairstylist is always there for you. After all these years, they know what length you prefer in the...',
  },
  {
    imageSrc: '/asset/Rectangle 61.png',
    date: 'January 25, 2025',
    title: 'HAIRSTYLIST APPRECIATION DAY: 6 WAYS TO SAY THANK YOU',
    description: 'Your hairstylist is always there for you. After all these years, they know what length you prefer in the...',
  },
];

const HomeBlogPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-7xl bg-[#F6F6F6] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <HomeBlogCard
            key={index}
            imageSrc={blog.imageSrc}
            date={blog.date}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBlogPage;