// app/components/Location/LocationCard.tsx

import { FaArrowRight } from 'react-icons/fa';

type Props = {
  name: string;
};

export default function AroundCard({ name }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow-sm flex items-center justify-between">
      <p className="text-sm text-[#404040]">{name}</p>
      <img src={'/asset/fi_3114931.png'}></img>
    </div>
  );
}