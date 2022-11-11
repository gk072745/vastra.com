import ChildComponentMaker from "../Components/ChildComponetMaker";
import SwiperC from "../Components/swiperC";


let arr=[
    {data:"favBrandC",
    heading:"FAVOURITE BRANDS" 
    },
    
    {data:"iconicBC",
    heading:"ICONIC BRANDS" 
    },
    {data:"fsnC",
    heading:"FASHION & ESSENTIALS" 
    },
    {data:"ExpMoreC",
    heading:"EXPLORE MORE" 
    },
    {data:"KidSpc",
    heading:"THE KIDS SPACE" 
    },
    {data:"BgtBuyC",
    heading:"BUDGET BUY" 
    },
    {data:"MoreBrndC",
    heading:"SHOP MORE BRANDS" 
    },
]

export default function Child(){

    return <>
     <SwiperC/>
  {
    arr.map((data,id)=>{
 return    <ChildComponentMaker data={data} id={id} />

    })
  }
   <div style={{margin:"50px"}}></div>
    </>
}