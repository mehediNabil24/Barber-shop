

type Props = {
    title: string;
    duration: string;
    rating: number;
    price: string;
    img: string;
  };
  
  export default function ServiceCard({ title, duration, rating, price, img }: Props) {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition w-full max-w-xs">
        <img src={img} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-base">{title}</h3>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
            <span>{duration}</span>
            <div className="flex items-center gap-1 text-yellow-500">
              <span>★</span>
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-orange-500 font-bold text-lg mt-2">{price}</p>
        </div>
      </div>
    );
  }
  