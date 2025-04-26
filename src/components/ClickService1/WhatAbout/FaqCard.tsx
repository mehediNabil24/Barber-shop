type Props = {
    title: string;
    description: string;
  };
  
  export default function FAQCard({ title, description }: Props) {
    return (
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    );
  }
  