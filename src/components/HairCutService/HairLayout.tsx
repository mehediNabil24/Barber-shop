import HairCutContent from "./HairCutContent";
import SalonMapPage from "./MapSalon/MapSalon";

export default function HairLayOut() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 px-10 lg:px-[40px] xl:px-[200px] mx-auto my-10 sm:my-16 lg:my-20">
      {/* Main Content */}
      <div className="flex-1 w-full">
        <HairCutContent />
      </div>

      {/* Salon Map Section */}
      <div className="w-full lg:w-[400px] xl:w-[500px]">
        <SalonMapPage />
      </div>
    </div>
  );
}