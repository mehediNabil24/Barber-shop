
import HairServiceList from "./HairServiceList";
import ServiceContent from "./Service";


export default function ServiceLayout() {
  return (
    <div className=" bg-white flex flex-col lg:flex-row gap-6 xl:gap-8 px-10 lg:px-[40px] xl:px-[200px] mx-auto my-10 sm:my-16 lg:my-20">
      {/* Main Content */}
      <div className="flex-1 w-full">
        <ServiceContent />
      </div>

      {/* Salon Map Section */}
      <div className="w-full lg:w-[60%] xl:w-[500px]">
        <HairServiceList/>
      </div>
    </div>
  );
}