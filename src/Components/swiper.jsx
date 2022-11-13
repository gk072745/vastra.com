import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function SwiperA(){
  const [data,setData]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
  axios({
    method:"get",
    url:"https://pacific-plains-94481.herokuapp.com/api/slideshow"
  }).then((res)=>setData(res.data))
  },[])

  
    return (
        <>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            autoplay={true}
            spaceBetween={30}
            pagination={{clickable:true}}
        >
     {data.map((slide,i)=>{
      return <SwiperSlide  onClick={()=>{i==0?navigate("/women"):navigate("/men")}} key={slide+Math.random(20)}> <img src={slide} alt="" /> </SwiperSlide>
     })}
          </Swiper>
        </>
      );
  
}