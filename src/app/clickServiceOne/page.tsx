import HairSalonsAroundYou from "@/components/ClickService1/AroundYou/AroundYou";
import HairSalons from "@/components/ClickService1/HairSalon";
import TreatmentsPage from "@/components/ClickService1/PopularTreatment/PoupularTreatment";
import ReviewPage from "@/components/ClickService1/Review/ReviewPage";
import FAQPage from "@/components/ClickService1/WhatAbout/WhatAbout";


export default function Home() {
    return (

        <div className="bg-white">
            <HairSalons></HairSalons>
            <HairSalonsAroundYou></HairSalonsAroundYou>
            <ReviewPage></ReviewPage>
            <FAQPage></FAQPage>
            <TreatmentsPage></TreatmentsPage>
            
        </div>
      
      
      
    );
  }