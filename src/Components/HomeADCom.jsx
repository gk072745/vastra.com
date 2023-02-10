import { Box, Image,Heading, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeADCom = ({endpoint,spacingX=0,spacingY=0,heading,column}) => {
    const [data,setData]=useState([])
    const navigate=useNavigate()

// ................................

useEffect(()=>{
    
axios({
    url:process.env.REACT_APP_MYNTRA_API+endpoint
}).then(({data})=>{
setData(data)
})
},[])


// ................................


  return (
   <>
   <Box
   
   textAlign={"left"}>

      <Heading
      
      as={"h2"}
      m={"50px 40px"}
      fontWeight={500}
      fontSize={"30px"}
      color={"#3e4152"}
      >
{heading}

      </Heading>

      <SimpleGrid
      m={2}
          columns={column}
          spacingX={spacingX}
          spacingY={spacingY}
       onClick={()=> 
        
        endpoint==="/DayDeals"||endpoint==="/BestExclusiveBrand"||
        endpoint==="/TopPicks"?navigate("/store?type=Women"):navigate("/store?type=Men")  
    }
       >

        {
            data?.map((img,i)=> <Image key={img+i} src={img} />)
        }

      </SimpleGrid>










   </Box>

   
   </>
  )
}

export default HomeADCom