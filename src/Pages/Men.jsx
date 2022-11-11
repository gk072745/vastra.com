import BigDealM from "../Components/bigDealM";
import MenComponetMaker from "../Components/menComponetMaker";
import SwiperM from "../Components/swiperM";
import Footer from "./Footer";
let arr=[
    {data:"catToBagM",heading:"CATEGORIES TO BAG"},
    {data:"expToBM",heading:"EXPLORE TOP BRANDS"},
    {data:"luxeM",heading:"MYNTRA LUXE"},
    {data:"indM",heading:"TRENDING IN INDIAN WEAR"},
    {data:"sportsM",heading:"TRENDING IN SPORTS WEAR"},
    {data:"footwearM",heading:"TRENDING IN FOOTWEAR"},
    {data:"accesM",heading:"TRENDING IN ACCESSORIES"},
]


export default function Men(){
    return <>
    <SwiperM/>
    <BigDealM/>
    
    {arr.map((data)=>{
        return <MenComponetMaker key={data.heading} data={data}/>
    })}
    <div style={{margin:"100px"}}></div>
    <Footer/>
    </>
}