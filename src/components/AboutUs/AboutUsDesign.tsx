

type Props = {
    title: string;
    content: string | string[];
  };
  
  export default function AboutSection({ title, content }: Props) {
    return (
      <div className="flex flex-col gap-2">
        <h3 className="text-[24px] font-bold text-[#101010]">{title}</h3>
        {Array.isArray(content) ? (
          <ul className="  list-disc pl-5 gap-2 text-[#404040]">
            {content.map((item, index) => (
              <li key={index} className="text-[18px] mb-2">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-[18px] text-[#404040]">{content}</p>
        )}
      </div>
    );
  }