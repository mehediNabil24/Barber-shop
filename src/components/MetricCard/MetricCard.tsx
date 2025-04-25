import Image from "next/image";
import React from "react";
import { FaChartLine } from "react-icons/fa"; // Using an icon to represent the chart placeholder

interface MetricCardProps {
  label: string;
  value: string;
  percentageChange: string;
  isPositiveChange?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  percentageChange,
  isPositiveChange = true,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          {/* Label */}
          <img src={"/asset/vector.png"} width={18} height={10}></img>
          <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        </div>
        <div>
          <img src={"/asset/DotsThree.png"}></img>
        </div>
      </div>

      {/* Value */}
      <p className="text-2xl font-semibold text-gray-800">{value}</p>

      {/* Percentage Change and Chart Placeholder */}
      <div className="flex justify-between items-center">
        <span
          className={`text-sm font-medium ${
            isPositiveChange ? "text-[#3384C6]" : "text-[#FF434E]"
          }`}
        >
          {percentageChange}{" "}
          <span className="text-[#757D83]">from last week</span>
        </span>
        {/* Placeholder for the small line chart */}
        <div className="w-16 h-8 flex items-center justify-center">
          <Image
            src={
              isPositiveChange
                ? "/asset/Area.svg"
                : "/asset/Negative Area.svg"
            }
            alt="Trend Icon"
            width={52}
            height={20}
            className={isPositiveChange ? "text-green-500" : "text-red-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
