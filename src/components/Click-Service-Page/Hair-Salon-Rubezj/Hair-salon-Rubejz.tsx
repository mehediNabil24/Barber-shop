import Recommend from "@/components/RecomendedService/Recommend";




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

export default function HairSalonRubezj() {
  return (
    <main className="flex flex-col gap-4   xl:px-[200px] lg:px-[40px] px-[10px] lg:mb-[100px] mb-[50px] mx-auto">
      <h2 className="lg:text-[40px] text-[24px]  font-bold text-gray-800 mb-[40px]">Hair Salon in Ruebzj, GA Number Of Salons: (212)</h2>
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