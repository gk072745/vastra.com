import { Box, Grid, HStack ,Text} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Filter from '../Components/Filter'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'

const Store = () => {
  const {length}=useSelector((store)=>store.AppReducer.Products)

  return (
  <>
  <Navbar/>
 
  <Box>
    <HStack spacing={1} w={"98%"} m={"10px auto"}>
      <Text
      color={"#46495a"}
      fontSize={"14px"}
      >Home / </Text>
 
      <Text
      fontWeight={500}
      fontSize={"14px"}
      color="#282c3f"
      >Myntra Fashion Store</Text>
    </HStack>
  </Box>
  
   <Box>
    <HStack spacing={1} w={"98%"} m={"10px auto"}>
    
 
      <Text
      fontWeight={500}
      fontSize={"16px"}
      color="#282c3f"
      >Myntra Fashion Store
      </Text>

      <Text
      fontSize={"16px"}
      fontWeight={400}
      color={"#878b94"}
      >
      - {length} items
      </Text>

    </HStack>
  </Box>
<Box
 mb={"50px"}
>
<Grid
  gridTemplateColumns={"20% 80%"}
  >
<Box 
border={"1px solid #edf2f7"}

>

<Filter/>
</Box>
<Box>
<Products/>
</Box>
  </Grid>
</Box>
  <Footer/>
  </>
  )
}

export default Store