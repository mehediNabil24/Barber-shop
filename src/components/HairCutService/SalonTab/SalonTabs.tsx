import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Review = {
  rating: number;
  title: string;
  author: string;
  date: string;
  description: string;
  images: string[];
};

type Details = {
  title: string;
  description: string;
  connex: string;
  connexInfo: string;
};

type Rating = {
  average: number;
  totalRatings: number;
  starDistribution: { stars: number; count: number }[];
  reviews: Review[];
};

type Props = {
  activeTab: "Details" | "Rating";
  setActiveTab: (tab: "Details" | "Rating") => void;
  details: Details;
  rating: Rating;
};

export default function SalonTabs({ activeTab, setActiveTab, details, rating }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex gap-4 bg-gray-100 rounded-lg p-2">
        <button
          onClick={() => setActiveTab("Details")}
          className={`flex-1 py-3 text-sm font-medium rounded-md ${
            activeTab === "Details" ? "bg-[#FFA600] text-white" : "text-gray-600"
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab("Rating")}
          className={`flex-1 py-3 text-sm font-medium rounded-md ${
            activeTab === "Rating" ? "bg-[#FFA600] text-white" : "text-gray-600"
          }`}
        >
          Rating
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "Details" ? (
        <div className="flex flex-col gap-4">
          {/* Details Content */}
          <h3 className="text-lg font-bold text-gray-800">{details.title}</h3>
          <p className="text-sm text-gray-600 whitespace-pre-line">{details.description}</p>
          <p className="text-gray-800">{details.connex}</p>
          <p className="text-sm text-gray-600">{details.connexInfo}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Rating Summary */}
          <div className="flex flex-col max-w-[450px] gap-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-800">{rating.average}/5</span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < Math.floor(rating.average) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{rating.totalRatings} Ratings</span>
            </div>
            {/* Star Distribution */}
            <div className="flex flex-col gap-1">
              {rating.starDistribution.map((dist, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{dist.stars}</span>
                  <div className="flex items-center gap-1">
                    {[...Array(dist.stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-yellow-400 rounded"
                      style={{ width: `${(dist.count / rating.totalRatings) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600">{dist.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="flex flex-col gap-6">
            {rating.reviews.map((review, index) => (
              <div key={index} className="flex flex-col gap-2 border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < Math.floor(review.rating) ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                    <span className="text-sm text-gray-600">({review.rating} ratings)</span>
                  </div>
                  <span className="text-sm text-gray-600">{review.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-gray-800">{review.title}</h4>
                <p className="text-sm text-gray-600">By {review.author}</p>
                <p className="text-sm text-gray-600">{review.description}</p>
                <div className="flex gap-2">
                  {review.images.map((image, i) => (
                    <div key={i} className="relative w-[60px] h-[60px] rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`Review Image ${i + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}