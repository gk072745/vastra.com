import { HStack ,Box, Image,Divider, Text} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../Assets/logo.png"

const OtherNavbar = () => {
  const navigate=useNavigate()
  return (
   <>
   <Box
   w="full"
   >
    
   <HStack 
   width={"full"}
   justify="space-between"
   px={"80px"}
   py={3}
   borderBottom={"1px solid #f7f7f8"}
   >
              <Box onClick={()=>navigate("/")}>

                         <Image
    w="100px"
     alt="logo"
     fallbackSrc={logo}
     cursor="pointer"
      src={logo}
                         ></Image>

              </Box>


              <Box width={"340px"}>
                <HStack
               
                >
<Box>
<Text 
fontFamily={"Helvetica, Arial, sans-serif"}
fontWeight={600}
color="#20bd99"
borderBottom={"3px solid"}
letterSpacing="3px"
fontSize={"13px"}
>BAG</Text>
</Box>
<Divider orientation='horizontal' border="1px dashed !important"/>

<Box>
<Text
fontFamily={"Helvetica, Arial, sans-serif"}
fontWeight={600}
color="#696b79"
letterSpacing="3px"
fontSize={"13px"}
>ADDRESS</Text>
</Box>
<Divider orientation='horizontal' border="1px dashed !important"/>

<Box>
<Text
fontFamily={"Helvetica, Arial, sans-serif"}
fontWeight={600}
color="#696b79"
letterSpacing="3px"
fontSize={"13px"}
>PAYMENT</Text>
</Box>

                </HStack>
</Box>
            
            

              <Box>
                <HStack>
                        
                        <Image boxSize='30px' src='https://constant.myntassets.com/checkout/assets/img/sprite-secure.png' />
                        <Text
fontFamily={"Helvetica, Arial, sans-serif"}
fontWeight={600}
color="#696b79"
letterSpacing="3px"
fontSize={"13px"}
>100% SECURE</Text>

                </HStack>
              </Box>

   </HStack>   
   </Box>
  
   </>
  )
}

export default OtherNavbar