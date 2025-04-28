import Image from "next/image";
import { FaPhone } from "react-icons/fa";

type BusinessHour = {
  day: string;
  hours: string;
};

type SocialMedia = {
  platform: string;
  icon: string;
};

type Props = {
  mapImage: string;
  address: string;
  about: string;
  phone: string;
  businessHours: BusinessHour[];
  socialMedia: SocialMedia[];
};

export default function SalonDetails({
  mapImage,
  address,
  about,
  phone,
  businessHours,
  socialMedia,
}: Props) {
  return (
    <div className="bg-[#FFA60014] rounded-lg shadow-sm flex flex-col gap-6 p-6">
      {/* Map Placeholder and Address */}
      <div className="relative">
        <div className="w-full h-[300px] relative rounded-lg overflow-hidden">
          <Image
            src={mapImage}
            alt="Map Placeholder"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* <div className="absolute bottom-2 left-6 bg-white p-3 rounded-lg shadow-md">

            <p className="text-[14px] font-semibold text-gray-800">Diamond Cuts</p>
            <p className="text-sm font-semibold text-gray-400">{address}</p>
          </div>
          <div className="absolute bottom-2 left-0 bg-white p-2 rounded-full shadow-md">
            <Image
              src="/asset/Ellipse 21.png"
              alt="Map Pin"
              width={24}
              height={24}
            />
          </div> */}
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800">About Us</h3>
        <p className="text-sm text-gray-600">{about}</p>
      </div>

      {/* Contact & Business Hours */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-800">Contact & Business Hours</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 my-3">
              <FaPhone className="text-gray-600" />
              <a href={`tel:${phone}`} className="text-sm text-gray-600">{phone}</a>
            </div>
            <div className="bg-[#FFA600] p-2">
              <img className="w-4" src="/asset/Tele.png" alt="na" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          {businessHours.map((hour, index) => (
            <div
              key={index}
              className={`flex justify-between text-sm my-4 ${
                hour.day === "Today" ? "border-t border-b border-gray-300 py-2" : ""
              }`}
            >
              <span className={`text-gray-800 ${hour.day === "Today" ? "font-bold" : ""}`}>
                {hour.day}
              </span>
              <span className={`text-gray-600 ${hour.hours === "OFF-DAY" ? "font-bold" : ""}`}>
                {hour.hours}
              </span>
            </div>
          ))}
          <a href="#" className="text-sm text-[#FFA600] hover:underline mb-12">
            Show Full Week
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-[16px] font-bold text-black mb-12">Social Media</h3>
        <div className="flex gap-3">
          {socialMedia.map((social, index) => (
            <a key={index} href="#" className="w-8 h-8 relative">
              <Image
                src={social.icon}
                alt={social.platform}
                layout="fill"
                objectFit="contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Privacy Link with Horizontal Borders */}
      <div className="border-t border-b border-gray-300 py-2">
        <a href="#" className="text-sm text-orange-500 hover:underline">
          Privacy
        </a>
      </div>
    </div>
  );
}