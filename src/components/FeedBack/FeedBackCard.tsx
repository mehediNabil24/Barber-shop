// app/components/TestimonialCard.tsx
type Props = {
    name: string;
    trip: string;
    rating: number;
    text: string;
    initials?: string;
    img?: string;
  };
  
  export default function FeedBackCard({
    name,
    trip,
    rating,
    text,
    initials,
    img,
  }: Props) {
    return (
      <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          {img ? (
            <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-sm font-bold text-blue-800">
              {initials}
            </div>
          )}
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">{trip}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          {Array(Math.floor(rating))
            .fill("★")
            .map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          {rating % 1 !== 0 && <span>½</span>}
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
        </div>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    );
  }
  