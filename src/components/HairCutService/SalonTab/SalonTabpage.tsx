"use client"; // Mark as client component since we're using useState

import { useState } from "react";
import SalonTabs from "./SalonTabs";


// Define interfaces for the data
interface Review {
  rating: number;
  title: string;
  author: string;
  date: string;
  description: string;
  images: string[];
}

interface SalonData {
  details: {
    title: string;
    description: string;
    connex:string; 
    connexInfo: string;
  };
  rating: {
    average: number;
    totalRatings: number;
    starDistribution: { stars: number; count: number }[];
    reviews: Review[];
  };
}

// Define the salon data
const salonData: SalonData = {
  details: {
    title: "Hair Salon in Ruebzj",
    description:
      "I had a great experience at the hair salon in Ruebzj. The staff were friendly, welcoming, and very professional throughout my visit. My stylist took the time to understand exactly what I wanted and delivered results that exceeded my expectations. The haircut and styling turned out perfect, and I felt completely refreshed.\n\nThe salon itself was clean, modern, and had a calming atmosphere that made the whole experience even better. They used high-quality hair products that left my hair feeling soft and healthy. Booking an appointment was simple and hassle-free. Overall, I’m very satisfied and will definitely return—I’d recommend this place to anyone!\n\nWant it more casual, more formal, adjusted to a specific service like coloring or treatment?",
    connex: "Connecx",
    connexInfo:
      "Connex guarantees that reviews with the “Verified Connex user” tag have been added by registered Connex users who have an appointment with the provider. A registered Connex user has the opportunity to add a review only after the service has been provided to them.",
  },
  rating: {
    average: 3.7,
    totalRatings: 80,
    starDistribution: [
      { stars: 5, count: 80 },
      { stars: 4, count: 70 },
      { stars: 3, count: 50 },
      { stars: 2, count: 30 },
      { stars: 1, count: 10 },
    ],
    reviews: [
      {
        rating: 4.5,
        title: "Hair Cut",
        author: "Dawn Harian",
        date: "Mar 26, 2025",
        description: "AMAZING! Great hair cut, reasonable prices, and super personable!",
        images: [
          "/asset/Rectangle 48.png",
          "/asset/Rectangle 48.png",
          "/asset/Rectangle 48.png",
          "/asset/Rectangle 48.png",
          
        ],
      },
      {
        rating: 4.5,
        title: "Hair Cut",
        author: "Dawn Harian",
        date: "Mar 26, 2025",
        description: "AMAZING! Great hair cut, reasonable prices, and super personable!",
        images: [
          "/asset/Rectangle 48.png",
          "/asset/Rectangle 48.png",
          "/asset/Rectangle 48.png",
          "/asset/Rectangle 48.png",
         
        ],
      },
    ],
  },
};

const SalonTabsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Details" | "Rating">("Details");

  return (
    <div className="bg-white flex flex-col gap-4 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto lg:py-[100px] py-[50px]">
      <SalonTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        details={salonData.details}
        rating={salonData.rating}
      />
    </div>
  );
};

export default SalonTabsPage;