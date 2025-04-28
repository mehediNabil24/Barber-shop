import SeeTheWorkContent from "./SeeWorkContent";



// Define the interface for the images
interface WorkImages {
  largeImage: string;
  smallImages: string[];
}

// Define the image data with relative paths
const workImages: WorkImages = {
  largeImage: "/asset/see-main.png",
  smallImages: [
    "/asset/see-2.png",
    "/asset/see-3.png",
    '/asset/see-2.png',
    "/asset/see-4.png",
  ],
};

const SeeTheWorkPage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col gap-4 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto lg:my-[100px] my-[50px]">
      <SeeTheWorkContent largeImage={workImages.largeImage} smallImages={workImages.smallImages} />
    </div>
  );
};

export default SeeTheWorkPage;