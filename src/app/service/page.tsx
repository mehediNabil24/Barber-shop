// app/page.tsx

import ServiceCard from "@/components/Service/ServiceCard";


const services = [
  {
    title: "Hire Cut’s Service",
    duration: "1:30 Minute",
    rating: 5.0,
    price: "$400",
    img: "./asset/hair.jpg",
  },
  {
    title: "Hire Cut’s Service",
    duration: "1:30 Minute",
    rating: 5.0,
    price: "$400",
    img: "./asset/service-2.png",
  },
  {
    title: "Hire Cut’s Service",
    duration: "1:30 Minute",
    rating: 5.0,
    price: "$400",
    img: "./asset/service-3.jpg",
  },
  {
    title: "Hire Cut’s Service",
    duration: "1:30 Minute",
    rating: 5.0,
    price: "$400",
    img: "./asset/service-3.jpg",
  },
];

export default function Home() {
  return (
    <main className=" bg-gray-100 p-6 flex flex-wrap justify-center gap-6">
      {services.map((service, i) => (
        <ServiceCard key={i} {...service} />
      ))}
    </main>
  );
}
