import HairSalonsAroundYou from "@/components/ClickService1/AroundYou/AroundYou";
import HairSalons from "@/components/ClickService1/HairSalon";
import ReviewPage from "@/components/ClickService1/Review/ReviewPage";


export default function Home() {
    return (

        <div className="bg-white">
            <HairSalons></HairSalons>
            <HairSalonsAroundYou></HairSalonsAroundYou>
            <ReviewPage></ReviewPage>
            
        </div>
      
      
      
    );
  }