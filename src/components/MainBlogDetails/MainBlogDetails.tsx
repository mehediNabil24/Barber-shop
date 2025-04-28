import BlogContent from "./BlogContent";
import RecentPosts from "./RecentPost";


// Define the interface for a single blog section
interface BlogSection {
  title: string;
  content: string;
  imageSrc?: string;
}

// Define the interface for a recent post
interface Post {
  title: string;
}

// Define the blog sections array
const blogSections: BlogSection[] = [
  {
    title: "Discover the Top 10 Black-Owned Barber Shops in San Antonio",
    content:
      "San Antonio—a vibrant city with a rich cultural tapestry. Within the fabric of this Texan gem lies a burgeoning Black community that proudly celebrates its heritage through entrepreneurship and creativity. Among these businesses, Black-owned barber shops stand out as cultural hubs where locals exchange ideas, share laughs, and leave looking their best. For the discerning gentleman in San Antonio, the search for a barber shop that caters to your needs—and offers an inviting space—can feel like a quest.\n\nThis article aims to guide you through the top 10 Black-owned barbershops in San Antonio, places that not only provide exceptional grooming but also celebrate the culture and heritage of their patrons.",
    imageSrc: "/asset/Rectangle 62.png",
  },
  {
    title: "The Essence of a Black Barber Shop in Home Base",
    content:
      "What sets the Black barber experience apart is more than just skill—it’s an affirmation of identity and community. In such spaces, hair care transcends into a relatable art where men are both canvas and connoisseur.\n\nAfrican-American barbershops, sometimes called Home Base—and for good reason—have played an essential role in the community, often as hubs for political, social, and intellectual discourse. They also serve as foundational spaces for young Black men who visit with a trusted elder or role model. With so much at stake, a barber shop’s significance in the Black community cannot be overstated.",
    imageSrc: "/asset/Rectangle 63.png",
  },
  {
    title: "Black-Owned Barber Shop in Orlando – Diverse Services for Every Need",
    content:
      "Orlando’s Black-owned barber shops reflect the eclectic mix of services demanded by a diverse clientele. From classic haircuts and beard trims to intricate designs and innovative styling, these shops cater to the spectrum of individual expression and personal grooming.",
  },
  {
    title: "Black-Owned Barber Shops in Orlando – Craftsmanship and Accreditation",
    content:
      "Orlando’s talented barbers turn every haircut into a work of art, continuing a long tradition of skill and care. They go beyond being mere barbers; they are accomplished stylists and educators. Numerous professionals in this vibrant community hold certifications and accolades, showcasing their dedication and talent. As you explore the world of grooming, consider searching for “black barbers near me” to discover these experienced and passionate individuals who contribute to the legacy of the craft.\n\n Orlando’s talented barbers turn every haircut into a work of art, continuing a long tradition of skill and care. They go beyond being mere barbers; they are accomplished stylists and educators. Numerous professionals in this vibrant community hold certifications and accolades, showcasing their dedication and talent. As you explore the world of grooming, consider searching for “black barbers near me” to discover these experienced and passionate individuals who contribute to the legacy of the craft.\n\n Orlando’s talented barbers turn every haircut into a work of art, continuing a long tradition of skill and care. They go beyond being mere barbers; they are accomplished stylists and educators. Numerous professionals in this vibrant community hold certifications and accolades, showcasing their dedication and talent. As you explore the world of grooming, consider searching for “black barbers near me” to discover these experienced and passionate individuals who contribute to the legacy of the craft.",
      
  },

];

// Define the recent posts array
const recentPosts: Post[] = [
  { title: "Why the Split? Top Causes & Effective Solutions Hairstylist Appreciation Day: 6 Ways to Say Thank You" },
  { title: "Discover the Top 10 Black-Owned Barber Shops in San Antonio" },
  { title: "Top 10 Amazing Black-Owned Hair Salons in Orlando" },
  { title: "Top 10 Amazing Black-Owned Barber Shops in Orlando" },
  { title: "Find the best beauty salons near you!" },
];

const MainBlogDetailsPage: React.FC = () => {
  return (
    <div className=" bg-white flex flex-col lg:flex-row gap-8 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto lg:my-[20px] my-[10px]">
      {/* Main Blog Content */}
      <div className="flex-1">
        <BlogContent sections={blogSections} />
      </div>

      {/* Recent Posts Sidebar */}
      <div className="lg:w-[300px] w-full">
        <RecentPosts posts={recentPosts} />
      </div>
    </div>
  );
};

export default MainBlogDetailsPage;