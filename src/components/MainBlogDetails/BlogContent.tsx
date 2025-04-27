import Image from "next/image";

type BlogSection = {
  title: string;
  content: string;
  imageSrc?: string;
};

type Props = {
  sections: BlogSection[];
};

export default function BlogContent({ sections }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        {sections[0]?.title || "Blog Title"}
      </h1>
      <p className="text-sm text-gray-500">March 25th, 2024</p>

      {sections.map((section, index) => (
        <div key={index} className="flex flex-col gap-4">
          {section.imageSrc && (
            <div className="w-full h-[450px] relative rounded-lg overflow-hidden">
              <Image
                src={section.imageSrc}
                alt={section.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}
          <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
          <p className="text-sm text-gray-600 whitespace-pre-line">{section.content}</p>
        </div>
      ))}
    </div>
  );
}