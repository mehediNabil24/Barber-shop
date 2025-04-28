import SalonDetails from "./SalonDetails";


// Define interfaces for the data
interface BusinessHour {
  day: string;
  hours: string;
}

interface SocialMedia {
  platform: string;
  icon: string;
}

interface Salon {
  mapImage: string;
  address: string;
  about: string;
  phone: string;
  businessHours: BusinessHour[];
  socialMedia: SocialMedia[];
}

const salon: Salon = {
  mapImage: "/asset/Map.png",
  address: "6755 E Palm Canyon Dr Suite F112, Cathedral City, 92234",
  about:
    "No shows or last minute cancellations will have a fee of half the service they chose to be performed. Cancellations are 24 hours prior to appointment.",
  phone: "(656)-1-5623 5562666",
  businessHours: [
    { day: "Today", hours: "07:00 AM - 07:00 PM" },
    { day: "Saturday", hours: "07:00 AM - 07:00 PM" },
    { day: "Sunday", hours: "07:00 AM - 07:00 PM" },
    { day: "Monday", hours: "11:00 AM - 08:00 PM" },
    { day: "Tuesday", hours: "OFF-DAY" },
    { day: "Wednesday", hours: "10:00 AM - 06:00 PM" },
    { day: "Thursday", hours: "07:00 AM - 07:00 PM" },
    { day: "Friday", hours: "10:00 AM - 05:00 PM" },
  ],
  socialMedia: [
    { platform: "Facebook", icon: "/asset/facebook.png" },
    { platform: "Twitter", icon: "/asset/x.png" },
    { platform: "Instagram", icon: "/asset/insta.png" },
    { platform: "YouTube", icon: "/asset/youtue.png" },
  ],
};

const SalonMapPage: React.FC = () => {
  return (
    <div className="flex flex-col    gap-4 mx-auto ">
      <SalonDetails
        mapImage={salon.mapImage}
        address={salon.address}
        about={salon.about}
        phone={salon.phone}
        businessHours={salon.businessHours}
        socialMedia={salon.socialMedia}
      />
    </div>
  );
};

export default SalonMapPage;