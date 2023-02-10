import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';




const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
 
  };

const CarouselCom = ({data}) => {
  const navigate=useNavigate()
  return (
   <>
   <Box>

   <Carousel
   responsive={responsive}
//    swipeable={true}
//    draggable={true}
//    ssr={false} // means to render carousel on server-side.
//    infinite={true}
//    autoPlaySpeed={2000}
//    keyBoardControl={true}
//    customTransition="all .5"
//    transitionDuration={500}
//    containerClass="carousel-container"
//    removeArrowOnDeviceType={["desktop"]}
//    dotListClass="custom-dot-list-style"
//    itemClass="carousel-item-padding-40-px"
//    focusOnSelect={true}
//    additionalTransfrom={0}

additionalTransfrom={0}
autoPlay
autoPlaySpeed={1500}
centerMode={false}
className=""
containerClass="container-with-dots"
dotListClass=""
draggable
focusOnSelect={false}
infinite
itemClass=""
keyBoardControl
minimumTouchDrag={80}
pauseOnHover
renderArrowsWhenDisabled={false}
renderButtonGroupOutside={false}
renderDotsOutside={false}
rewind={false}
rewindWithAnimation={false}
rtl={false}
shouldResetAutoplay
showDots
sliderClass=""
slidesToSlide={1}
swipeable
removeArrowOnDeviceType={["desktop"]}
   
>
{
    data.map((item,id)=>{
        return <Image 
        key={item+id}
        w={"100%"}
        objectFit="cover"
        src={item}
 onClick={()=>id===2||id===4||id===5||id===6||id===9?navigate("/store?type=Women"):navigate("store?type=Men")}
        />
    })
}
</Carousel>

   </Box>
   
   </>
  )
}

export default CarouselCom