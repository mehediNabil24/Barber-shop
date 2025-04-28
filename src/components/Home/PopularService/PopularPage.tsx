// app/page.tsx

import ServiceCard from "@/components/Service/ServiceCard";
import PopularCard from "./PopularCard";

// Define the interface for a single service object
interface Service {
  imageSrc: string;
  title: string;
  address: string;
  rating: number;
  promoted: boolean;
}

// Define the services array with the Service interface
const services: Service[] = [
  {
    imageSrc: '/asset/popular.png',
    title: 'Krispi King 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/popular-1.png',
    title: 'Krispi King 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/popular-2.png',
    title: 'Krispi King 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/popular-3.png',
    title: 'Krispi King 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/popular-1.png',
    title: 'Krispi King 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/popular-2.png',
    title: 'Krispi King 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/popular-3.png',
    title: 'Krispi King 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/popular-4.png',
    title: 'Krispi King 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
];

const PopularService: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-6 px-[10px]  lg:px-[40px] xl:px-[200px] lg:my-[100px] my-[50px]  mx-auto">
      <h2 className="lg:text-[40px] text-[24px] font-bold text-gray-800 mb-[40px]">Popular Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <PopularCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            address={service.address}
            rating={service.rating}
            promoted={service.promoted}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularService;