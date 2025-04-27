import HairCutContent from "@/components/HairCutService/HairCutContent";
import HairCutPage from "@/components/HairCutService/HairCutContent";
import HairLayOut from "@/components/HairCutService/HairLayout";
import SalonTabsPage from "@/components/HairCutService/SalonTab/SalonTabpage";
import SeeTheWorkPage from "@/components/HairCutService/SeeWork/SeeWork";




export default function Home() {
    return (

       <div>
      <HairLayOut></HairLayOut>
      <SeeTheWorkPage></SeeTheWorkPage>
      <SalonTabsPage></SalonTabsPage>
      </div>
      
      
    );
  }