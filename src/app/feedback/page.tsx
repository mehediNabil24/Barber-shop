// app/page.tsx

import FeedBackCard from "@/components/FeedBack/FeedBackCard";



const testimonials = [
  {
    name: "Camellia Swan",
    trip: "Venice Dreams",
    rating: 4.5,
    text: "Amazing experience! The barber understood exactly what I wanted and delivered a perfect cut. Highly recommend!",
    initials: "CS",
  },
  {
    name: "Raphael Goodman",
    trip: "Safari Adventure",
    rating: 5,
    text: "Super friendly staff and a relaxing atmosphere! I left feeling refreshed, confident, and ready to take on the day.",
    img: "./asset/card-1.png",
  },
  {
    name: "Ludwig Contessa",
    trip: "Alpine Escape",
    rating: 4,
    text: "Best fade I’ve ever had—clean, sharp, and on point! Definitely making this my go-to barber from now on.",
    img: "/asset/card-2.png",
  },
  {
    name: "James Dunn",
    trip: "Parisian Romance",
    rating: 5,
    text: "Loved the haircut and the styling tips they gave me! Great experience from start to finish—highly recommend!",
    img: "/asset/card-3.png",
  },
  {
    name: "Sophia Lee",
    trip: "Tokyo Cultural Adventure",
    rating: 4.5,
    text: "Booked an appointment, got seated right away, and left with a flawless haircut! No long waits, just professional service with a smile.",
    img: "/asset/card-4.png",
  },
  {
    name: "Michael Smith",
    trip: "Greek Island Hopping",
    rating: 4,
    text: "Finally found a barber who listens and delivers exactly what I want! Great vibes, skilled professionals, and top-notch service!",
    initials: "MS",
  },
];

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <FeedBackCard key={i} {...t} />
      ))}
    </main>
  );
}
