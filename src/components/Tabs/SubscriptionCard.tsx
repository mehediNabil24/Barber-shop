import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

// Define the props interface
interface SubscriptionCardProps {
  planName: string;
  description: string;
  features: string[];
  price: string;
  discount?: string;
  total: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  planName,
  description,
  features,
  price,
  discount,
  total,
}) => {
  const [discountCode, setDiscountCode] = useState('');

  return (
    <div className="bg-white mt-10 px-[120px] py-[40px] rounded-xl shadow-sm flex flex-col gap-4 max-w-2xl mx-auto">
      {/* Plan Name */}
      
      <h2 className="text-xl font-semibold text-gray-800">{planName}</h2>
      <hr className="border-t border-gray-300 my-2" />
      

      {/* Discount Code Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Discount Code (Option)"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <div className='flex items-center gap-2'>
        <button className="flex items-center gap-1 bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-300">
          Apply
          
        </button>
        <FaQuestionCircle className="text-gray-500" />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">{description}</p>

      {/* Features List */}
      <ul className="flex flex-col gap-4 text-sm text-gray-800">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-gray-500">✓</span> {feature}
          </li>
        ))}
      </ul>
      <hr className="border-t border-gray-300 my-2" />

      {/* Pricing */}
      <div className="flex flex-col gap-1">
      
        <p className=" text-gray-600">
          Price for account owner <span className='text-lg font-semibold'>{price}</span> 
        </p>
        {discount && (
          <p className="text-sm text-gray-600">
            Discount {discount}
          </p>
        )}
        <hr className="border-t border-gray-300 my-2" />
        
        
      </div>
      <div className='flex  items-center justify-between'>

      <p className="text-lg font-semibold text-gray-800">
          Total {total}
        </p>

      {/* Subscribe Button */}
      <button className="bg-[#FFA600] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-yellow-500">
        Subscribe
      </button>
      </div>
    </div>
    
  );
};

export default SubscriptionCard;