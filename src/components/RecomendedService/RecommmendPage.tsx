// app/page.tsx

import Recommend from "./Recommend";



const services = [
  {
    imageSrc: '/asset/Rectangle 4.png',
    title: 'REFLECTION BARBER & BEAUTY SALON',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/Rectangle 4 (1).png',
    title: 'HOLLY WOODSoul SALON',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/Rectangle 4 (2).png',
    title: 'NIKKI BABE',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
  {
    imageSrc: '/asset/Rectangle 4 (3).png',
    title: 'KRISPI KING 1',
    address: '11786 East Colonial Dr, © Premier Suites, Orlando, 32817',
    rating: 4.5,
    promoted: true,
  },
];

export default function RecommendPage() {
  return (
    <main className="flex flex-col gap-4 p-6  max-w-7xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800">Recommended Service</h2>
      <div className="flex gap-4 overflow-x-auto">
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