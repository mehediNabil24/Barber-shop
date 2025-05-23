import BlogDetailPage from "@/components/BlogDetails/BlogDetails";
import Beauty from "@/components/Home/BeautyCrafted/Beauty";
import FindCityPage from "@/components/Home/FindCity/FindCityPage";
import HowWork from "@/components/Home/HowWork/HowWork";
import NewsAndBlogSection from "@/components/Home/NewsBlog/NewsBlogSection";
import PopularService from "@/components/Home/PopularService/PopularPage";
import RecentWorksClient from "@/components/Home/RecentWorksClient/RecentWorkClient";
import RecommendPage from "@/components/RecomendedService/RecommmendPage";
import { div } from "framer-motion/client";

export default function Home() {
    return (
        <div className="bg-white">
            <RecommendPage></RecommendPage>
            <HowWork></HowWork>
            <Beauty></Beauty>
            <PopularService></PopularService>
            <RecentWorksClient></RecentWorksClient>
            <FindCityPage></FindCityPage>
            <NewsAndBlogSection></NewsAndBlogSection>
        </div>
      
      
      
      
    );
  }