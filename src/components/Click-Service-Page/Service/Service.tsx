import Haircomponent from "./HairComponent";


const serviceData = [
  {
    salonName: "Reflection Barber & Beauty Salon",
    rating: 4.5,
    ratingCount: 15,
    location: "7010 university ave, la Mesa, 91942",
    distance: "4.3 mi",
    promoted: true,
    images: [
      "/asset/Rectangle 41.png",
      "/asset/Rectangle 43.png",
      "/asset/Rectangle 44.png",
      "/asset/Rectangle 44.png",
      "/asset/Rectangle 44.png",
     
    ],
    services: [
      {
        title: "Man's Hair Cut",
        description: "Lowest price in 30 days, before discount: $75.00",
        price: "100$",
        duration: "1h",
      },
      {
        title: "Beard Shave",
        description: "Lowest price in 30 days, before discount: $50.00",
        price: "100$",
        duration: "1h",
      },
      {
        title: "Specialty Haircut",
        description: "Lowest price in 30 days, before discount: $30.00",
        price: "100$",
        duration: "1h",
      },
    ],
  },
  {
    salonName: "HollywoodSoul Salon",
    rating: 4.5,
    ratingCount: 12,
    location: "ArmStrong St., San Diego, 92111",
    distance: "5.3 mi",
    promoted: true,
    images: [
      "/asset/family plays.png",
      "/asset/Rectangle 43.png",
      "/asset/Rectangle 44.png",
      "/asset/Rectangle 44.png",
      "/asset/Rectangle 44.png",
    ],
    services: [
      {
        title: "Box Braids/ Knotless/ Twists",
        description: "I offer ouchless braids... I don't braid tight! No pulling.",
        price: "100$",
        duration: "1h",
      },
      {
        title: "Corn Rows",
        description: "I offer ouchless braids... No pulling around edges.",
        price: "100$",
        duration: "1h",
      },
      {
        title: "Sew In",
        description: "I offer ouchless braids... No pulling around edges.",
        price: "80$",
        duration: "30min",
      },
    ],
  },
];

export default function Service() {
  return (
    <div className=" space-y-12">
      <h1 className="text-3xl font-bold">Services</h1>

      {serviceData.map((service, idx) => (
        <Haircomponent key={idx} {...service} />
      ))}
    </div>
  );
}