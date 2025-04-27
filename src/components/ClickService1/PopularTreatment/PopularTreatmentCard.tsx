type Props = {
    name: string;
  };
  
  export default function PopularTreatmentsCard({ name }: Props) {
    return (
      <button className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
        {name}
      </button>
    );
  }