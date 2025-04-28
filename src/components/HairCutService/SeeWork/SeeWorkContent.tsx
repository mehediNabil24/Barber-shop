import Image from "next/image";

type Props = {
  largeImage: string;
  smallImages: string[];
};

export default function SeeTheWorkContent({ largeImage, smallImages }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Section Title */}
      <h3 className="lg:text-[40px] text-[24px] font-bold text-black mb-[40px]">See The Work</h3>

      {/* Image Layout using CSS Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Large Image (First Column, Spans 2 Rows) */}
        <div className="sm:col-span-1 sm:row-span-2">
          <div className="relative w-full h-[400px] sm:h-[600px] rounded-lg overflow-hidden">
            <Image
              src={largeImage}
              alt="Large Work Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Small Images Grid (Second and Third Columns, 2x2 Grid) */}
        <div className="sm:col-span-2 grid grid-cols-2 gap-4">
          {smallImages.map((image, index) => (
            <div key={index} className="relative w-full h-[250px] sm:h-[290px] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`Small Work Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}