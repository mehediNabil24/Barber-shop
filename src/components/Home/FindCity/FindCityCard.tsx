import { FaChevronRight } from "react-icons/fa";

type Props = {
  name: string;
};

export default function FindCityCard({ name }: Props) {
  return (
    <div className="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer">
      <FaChevronRight size={14} />
      <span className="text-sm">{name}</span>
    </div>
  );
}
