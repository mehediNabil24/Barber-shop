import Image from "next/image";

type Props = {
  imageSrc: string;
};

export default function AboutHeader({ imageSrc }: Props) {
  return (
    <div className="w-full h-[500px] relative rounded-lg overflow-hidden">
      <Image
        src={'/asset/AboutUs.png'}
        alt="About Us Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}





