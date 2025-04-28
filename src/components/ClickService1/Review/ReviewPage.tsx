// app/page.tsx

import ReviewCard from "./ReviewCard";



// Define the interface for a single review object
interface Review {
  rating: number;
  date: string;
  text: string;
  salon: string;
  distance: string;
  address: string;
}

// Define the reviews array with the Review interface
const reviews: Review[] = [
  {
    rating: 4.5,
    date: 'Mar 26, 2025',
    text: 'I travel for work. Whenever I need a hair cut I try to find an interesting small business. If you can think it, Dawn (or her partner) can do it. You’re probably thinking how can someone who does everything also be a master at everything.',
    salon: 'Evolv Hair',
    distance: '5.7 mi',
    address: '3077 N Park Way, 105, 105, San Diego, 92104',
  },
  {
    rating: 4.5,
    date: 'Mar 26, 2025',
    text: 'I travel for work. Whenever I need a hair cut I try to find an interesting small business. If you can think it, Dawn (or her partner) can do it. You’re probably thinking how can someone who does everything also be a master at everything.',
    salon: 'Evolv Hair',
    distance: '5.7 mi',
    address: '3077 N Park Way, 105, 105, San Diego, 92104',
  },
  {
    rating: 4.5,
    date: 'Mar 26, 2025',
    text: 'I travel for work. Whenever I need a hair cut I try to find an interesting small business. If you can think it, Dawn (or her partner) can do it. You’re probably thinking how can someone who does everything also be a master at everything.',
    salon: 'Evolv Hair',
    distance: '5.7 mi',
    address: '3077 N Park Way, 105, 105, San Diego, 92104',
  },
];

const ReviewPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto lg:my-[100px] my-[50px]">
      <h2 className="lg:text-[40px] text-[24px]  font-bold text-gray-800 mb-[40px]">Hair Salons-Customer Review</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            rating={review.rating}
            date={review.date}
            text={review.text}
            salon={review.salon}
            distance={review.distance}
            address={review.address}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;