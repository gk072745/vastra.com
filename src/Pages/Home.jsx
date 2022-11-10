import SwiperA from "../Components/swiper";

import "../Components/styles.css"
import DayDeal from "../Components/DayDeal";
import ExlusiveB from "../Components/Exclu";
import TopPicks from "../Components/TopPicks";
import CatToBag from "../Components/CatToBag";
import TopB from "../Components/TopB";
import Slashed from "../Components/slashed";
import BestBuy from "../Components/bestbuy";
import Luxe from "../Components/Luxe";
import Gifting from "../Components/Gifting";
import Summer from "../Components/Summer";
import StyleCast from "../Components/StyleCast";
import TrendsHer from "../Components/TrendHer";
import TrendsHim from "../Components/TrendHim";
import Beauty from "../Components/beauty";
import CSeason from "../Components/ClrSeason";
import Footer from "./Footer";


export default function Home(){

    return <>
  <SwiperA/>
  <DayDeal/>
  <ExlusiveB/>
  <TopPicks/>
  <CatToBag/>
  <TopB/>
  <Slashed/>
  <BestBuy/>
  <Luxe/>
  <Gifting/>
  <Summer/>
  <StyleCast/>
  <TrendsHer/>
  <TrendsHim/>
  <Beauty/>
  <CSeason/>
  <Footer/>
    </>
}