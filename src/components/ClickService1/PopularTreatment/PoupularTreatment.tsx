
import PopularTreatmentsCard from "./PopularTreatmentCard";

// Define the interface for a single treatment object
interface Treatment {
  name: string;
}

// Define the treatments array with the Treatment interface
const treatments: Treatment[] = [
  { name: "Hair Care" },
  { name: "Facial & Skin Care" },
  { name: "Highlights" },
  { name: "Nail Care" },
  { name: "Hair Extensions" },
  { name: "Makeup" },
  { name: "Massage" },
  { name: "Wellness & Spa" },
  { name: "Wigs" },
  { name: "Kie's Hair Cut" },
  { name: "Hair Tone" },
  { name: "Olaplex" },
  { name: "Relaxers" },
  { name: "Natural Hair Stylists" },
];

const TreatmentsPage: React.FC = () => {
  return (
    <div className="flex flex-col  gap-4 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto lg:my-[100px] my-[50px]">
      <div className="max-w-3xl">
      <h2 className="text-[24px] font-bold text-gray-800 mb-[20px]">Popular treatments</h2>
      <div className="flex flex-wrap gap-3">
        {treatments.map((treatment, index) => (
          <PopularTreatmentsCard
            key={index}
            name={treatment.name}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default TreatmentsPage;