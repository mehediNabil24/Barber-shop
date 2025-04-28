import AboutHeader from "./AboutHeader";
import AboutSection from "./AboutUsDesign";


// Define the interface for a single section object
interface Section {
  title: string;
  content: string | string[];
}

// Define the sections array with the Section interface
const sections: Section[] = [
  {
    title: "Our Story",
    content: "Having run our own businesses, we know the struggle of managing appointments manually. That’s why we created Connex—to make scheduling effortless.",
  },
  {
    title: "Our Mission",
    content: "We help beauty professionals succeed by reducing cancellations, keeping schedules on track, and making bookings hassle-free. Our goal is to simplify operations so they can focus on delivering exceptional services.",
  },
  {
    title: "Meet Our Team",
    content: "Our barbers are more than just professionals—they’re artists. Each member of our team brings years of experience, expertise, and a keen eye for detail. We take pride in staying updated with the latest trends while honoring traditional barbering techniques.",
  },
  {
    title: "Why Choose Us?",
    content: [
      "Experienced Barbers – Highly skilled professionals with a passion for grooming.",
      "Personalized Services – Every haircut and beard trim tailored to fit your style.",
      "Relaxing Atmosphere – Enjoy a stress-free, comfortable grooming session.",
      "Easy Online Booking – Schedule your appointment with just a few clicks.",
    ],
  },
  {
    title: "Our Commitment to You",
    content: "Imagine your appointments with ease and eliminate the stress of scheduling. Our smart system keeps you organized, so you never miss a booking. Focus on delivering exceptional services while we handle the details. With seamless automation, cancellations and no-shows become less of a worry. Enjoy a smoother, more efficient way to run your business.",
  },
];

const AboutPage: React.FC = () => {
  // Define the image source (assuming the image is in the public folder)
  const imageSrc = "/about-image.jpg";

  return (
    <div className=" bg-white flex flex-col gap-8 xl:px-[200px] lg:px-[40px] px-[10px] mx-auto lg:pt-[100px] pt-[50px] pb-[100px]">
      {/* Pass the image source as a prop to AboutHeader */}
      <AboutHeader imageSrc={imageSrc} />

      {/* Sections */}
      {sections.map((section, index) => (
        <AboutSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
};

export default AboutPage;