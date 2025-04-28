import FAQCard from "./FaqCard";


interface FAQ {
  title: string;
  description: string;
}

const faqs: FAQ[] = [
  {
    title: "What Services Do Hair Salons Provide?",
    description:
      "Hair salons offer a wide range of services for women, men, and children, with the most common being haircuts. However, the services go far beyond just trims and fades. At a professional salon, you can expect treatments like deep conditioning, hair coloring, styling, and even specialty services like keratin treatments or scalp therapy. Some salons also offer add-ons such as blowouts, updos, and even basic manicures or product sales. With Connexx, you can browse local salons and easily compare their service menus and specialties to find the perfect match for your needs.",
  },
  {
    title: "How Do You Prepare for a Hair Salon Appointment?",
    description:
      "Before heading to the salon, it's helpful to have a general idea of what you want. Bringing photos for reference can make communication easier with your stylist. It's also smart to arrive with clean, dry hair unless otherwise instructed. Booking ahead through Connexx allows you to secure your spot at your preferred time, so you won't have to worry about long waits or walk-in uncertainty. A little prep goes a long way in making your salon visit smooth and enjoyable.",
  },
  {
    title: "How to Find the Best Hair Salon",
    description:
      "Using Connexx is one of the easiest ways to locate top-rated salons in your area. Whether you're looking for something nearby or open on specific days (like Sunday to Thursday), Connexx lets you filter your search effortlessly. You can view pricing, available time slots, service lists, and verified customer reviews all in one place. This helps you make informed decisions and ensures you’re booking with trusted professionals who match your style and budget.",
  },
  {
    title: "How Do I Know Which Hairstyle to Get?",
    description:
      "Not sure what style you want? No problem—Connexx gives you access to salons that specialize in various looks. Whether you want a bold transformation or a simple touch-up, browsing through stylist profiles and customer photos can help spark inspiration. Some salons even showcase their work online, so you can get a feel for what they're great at. Connexx makes it easy to explore your options and find the look that suits you best.",
  },
  {
    title: "How Do I Make an Appointment With a Hair Salon?",
    description:
      "Making an appointment through Connecx is quick and simple. Once you’ve selected a salon, you’ll see available times and can instantly secure a booking with just a few clicks. Choose the service you need, your preferred stylist (if any), and lock in the date and time that works best for you. With real-time updates and confirmation, there's no guesswork involved—just a smooth, easy process from start to finish.",
  },
  {
    title: "How Much Will I Pay for a Visit to a Hair Salon?",
    description:
      "Pricing can vary depending on the salon, stylist experience, and the service type. With Connecx, you can easily compare prices before booking. Haircuts and basic styling might range from $25 to $75, while advanced treatments like balayage or keratin services could cost anywhere from $100 to $300 or more. Connecx gives you full transparency, so you know exactly what to expect—no surprises, just great service that fits your budget.",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col gap-6 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto my-[50px] bg-white">
      <img
        src="/asset/Rectangle 102.png"
        alt="Hair Salon"
        className="rounded object-cover shadow-md w-full h-auto mb-10"
      />

      {faqs.map((faq, index) => (
        <FAQCard key={index} title={faq.title} description={faq.description} />
      ))}
    </div>
  );
}
