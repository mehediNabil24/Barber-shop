
import FindCityCard from "./FindCityCard";

interface City {
  name: string;
}

const cities: City[] = [
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
  { name: "New Work City" },
];

const FindCityPage: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#FFA50033] to-[#80008033] py-[100px] lg:my-[100px] my-[50px]">
    <div className="flex flex-col gap-4 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto ">
      <h2 className="text-[40px] font-bold text-gray-800 mb-[40px] text-center">Find Your Specialist by City</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
        {cities.map((city, index) => (
          <FindCityCard key={index} name={city.name} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FindCityPage;
