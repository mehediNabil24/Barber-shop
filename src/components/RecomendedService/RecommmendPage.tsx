// app/page.tsx 
import img1 from '@/assets/Rectangle 4.png'
import img2 from '@/assets/Rectangle 4 (1).png'
import img3 from '@/assets/Rectangle 4 (2).png'
import img4 from '@/assets/Rectangle 4 (3).png'

import Recommend from "./Recommend";



const services = [
  {
    imageSrc: img1,
    title: 'REFLECTION BARBER & BEAUTY SALON',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: img2,
    title: 'HOLLY WOODSoul SALON',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: img3,
    title: 'NIKKI BABE',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: img4,
    title: 'KRISPI KING 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
];

export default function RecommendPage() {
  return (
    <main className="flex flex-col gap-4   xl:px-[200px] lg:px-[40px] px-[10px] lg:mb-[100px] mb-[50px] mx-auto">
      <h2 className="text-[40px] font-bold text-gray-800 mb-[40px]">Recommended Service</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto">
        {services.map((service, index) => (
          <Recommend
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            address={service.address}
            rating={service.rating}
            promoted={service.promoted}
          />
        ))}
      </div>
    </main>
  );
}