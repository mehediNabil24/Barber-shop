// app/page.tsx

import LocationCard from "@/components/Location/LocationCard";
import AroundCard from "./AroundCard";

// Define the interface for a single location object
interface Location {
  name: string;
}

// Define the locations array with the Location interface
const locations: Location[] = [
  { name: 'Hair Salon in San Diego' },
  { name: 'Hair Salon in Dallas' },
  { name: 'Hair Salon in San Antonio' },
  { name: 'Hair Salon in Tampa' },
  { name: 'Hair Salon in Miami' },
  { name: 'Hair Salon in San Jose' },
  { name: 'Hair Salon in Chicago' },
  { name: 'Hair Salon in San Francisco' },
  { name: 'Relaxers USA' },
  { name: 'Relaxers USA' },
  { name: 'Relaxers USA' },
  { name: 'Relaxers USA' },
  { name: 'Hair Salon in Columbus' },
  { name: 'Hair Salon in Houston' },
  { name: 'Hair Salon in Philadelphia' },
  { name: 'Hair Salon in Oakland' },
];

const HairSalonsAroundYou: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800">Hair Salons - Around you</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {locations.map((location, index) => (
          <AroundCard
            key={index}
            name={location.name}
          />
        ))}
      </div>
    </div>
  );
};

export default HairSalonsAroundYou;