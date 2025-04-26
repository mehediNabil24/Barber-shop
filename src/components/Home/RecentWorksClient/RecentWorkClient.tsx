'use client';

import Image from 'next/image';

export default function RecentWorks() {
  return (
    <section className="py-12 md:max-w-7xl mx-auto px-4 sm:px-8 md:px-12 ">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Recent Works Client
      </h2>

      {/* Main Grid */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="relative w-full h-100">
            <Image
              src="/asset/Recen-1.png"
              alt="Work 1"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-60">
            <Image
              src="/asset/Recen-2.png"
              alt="Work 4"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="relative w-full h-60">
            <Image
              src="/asset/Recen-3.png"
              alt="Work 2"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-100">
            <Image
              src="/asset/Recen-4.png"
              alt="Work 5"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6 flex-1">
          <div className="relative w-full h-100">
            <Image
              src="/asset/Recent-5.png"
              alt="Work 3"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-60">
            <Image
              src="/asset/Recent-6.png"
              alt="Work 6"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
