
import HairSalonRubezj from "@/components/Click-Service-Page/Hair-Salon-Rubezj/Hair-salon-Rubejz";
import ServiceLayout from "@/components/Click-Service-Page/Service/ServiceLayout";
import HairSalonsAroundYou from "@/components/ClickService1/AroundYou/AroundYou";


export default function Home() {
    return (
      <div className="bg-white ">
        <HairSalonRubezj></HairSalonRubezj>
        <ServiceLayout></ServiceLayout>
        <HairSalonsAroundYou></HairSalonsAroundYou>
      </div>
      
      
    );
  }