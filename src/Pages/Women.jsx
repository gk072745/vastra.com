import BigDealW from "../Components/bigDealW";
import Swiperw from "../Components/swiperW";
import WomensComponentMaker from "../Components/WomenComponetMaker";

let arr=[
  {
    data:"catToBagW",
    heading:"CATEGORIES TO BAG"
  },
  {
data:"ExpToBW",
heading:"EXPLORE TOP BRANDS"
  },
  {
    data:"trendWestW",
    heading:"TRENDING IN WESTERN WEAR"
  },  {
    data:"trendIndW",
    heading:"TRENDING IN INDIAN WEAR"
  },  {
    data:"sportW",
    heading:"TRENDING IN SPORTS WEAR"
  },  {
    data:"footW",
    heading:"TRENDING IN FOOTWEAR"
  },  {
    data:"accesW",
    heading:"TRENDING IN ACCESSORIES"
  }, 
]

export default function Women(){

    return <>
  <Swiperw/>    
   <BigDealW/>
   {arr.map((data)=>{
        return <WomensComponentMaker data={data}/>
    })}
    <div style={{margin:"100px"}}></div> 
    
    </>
}