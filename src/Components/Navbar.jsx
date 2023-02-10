import { 
  Box,
  HStack,
  Image,
  Text,
  Badge,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  VStack,
  Icon,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Tag,

 } from '@chakra-ui/react'
import React, { useRef} from 'react'
import logo from "../Assets/logo.png"
import { SearchIcon } from '@chakra-ui/icons'
import {CiUser,CiHeart} from "react-icons/ci"
import {BsHandbag} from "react-icons/bs"
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/AuthReducer/Action'


export const Navbar = () => {
     const { isOpen, onOpen, onClose } = useDisclosure()
     const navigate=useNavigate() 
     const dispatch=useDispatch()
     const [searchParams]=useSearchParams()
     const {isAuth}=useSelector((store)=>store.AuthReducer)
     const searchRef=useRef()

  // ...........................
  
  const initType=searchParams.get("type")

  // ...........................
 
  const initCategory=searchParams.getAll("category")

  // ...........................

  const initBrand=searchParams.getAll("brand")

  // ............................

  const initPrice=searchParams.getAll("price")

  // ............................
  const initDiscount=searchParams.get("discount")

  // ............................



 const handleLogOut=()=>{
  dispatch(login("logout"))
 }


 const handleKeyDown=(e)=>{
  if(e.key==="Enter"&&searchRef.current.value){

  

  const params={}
  navigate(`/store`)
  initType&&(params.type=initType)
  initCategory&&(params.category=initCategory)
  initBrand&&(params.brand=initBrand)
  initPrice&&(params.price=initPrice)
  initDiscount&&(params.discount=initDiscount)
  searchRef.current.value&&(params.q=searchRef.current.value)
  navigate({ pathname:"/store", search: `?${createSearchParams(params)}` });
  }
 }



 return (
<>

<Box 
w={"100%"}
boxShadow={"md"}
>
<HStack
 w={"95%"}
 m={"auto"}
 justifyContent="space-between"
 >
<HStack spacing={"50px"}>

{/* logo....................... */}
    <Box w="100px"
    onClick={()=>navigate("/")}
    >
     <Image
     src={logo}
     w="100px"
     alt="logo"
     fallbackSrc={"https://vastra-com.netlify.app/static/media/logo.907393fa26947a42ac8a.png"}
     cursor="pointer"nnetlify deploy
     />
    </Box>

{/* box2.............category */}
    <Box>
        
    
        <HStack 
        spacing={"20px"}
        >
             <Box 
               _hover={{
                borderBottom:"5px solid #ec008b",
               }}
               borderBottom="5px solid rgba(0,0,0,0.0)"
            
             cursor="pointer">
          <Text fontWeight={"500"}
          fontSize="14px"
          color={"#282c3f"}
          p="20px 0px"
          onClick={()=>navigate("/store?type=Men")}
           
          >    MEN</Text>
             </Box>

             <Box 
                _hover={{
                  borderBottom:"5px solid #ec008b"
                 }}
                 borderBottom="5px solid rgba(0,0,0,0.0)"
             cursor="pointer">
              <Text fontWeight={"500"}
              fontSize="14px"
              color={"#282c3f"}
          p="20px 0px"
              onClick={()=>navigate("/store?type=Women")}
              >WOMEN</Text>
      

             </Box>

             <Box 
                _hover={{
                  borderBottom:"5px solid #ec008b"
                 }}
                 borderBottom="5px solid rgba(0,0,0,0.0)"
             cursor="pointer">
              <Text fontWeight={"500"}
              fontSize="14px"
              color={"#282c3f"}
              onClick={()=>navigate("/store?type=Kids")}
              p="20px 0px"

              >KIDS</Text>
             </Box >

             <Box 
                _hover={{
                  borderBottom:"5px solid #ec008b"
                 }}
                 borderBottom="5px solid rgba(0,0,0,0.0)"
             cursor="pointer">
              <Text fontWeight={"500"}
              fontSize="14px"
              color={"#282c3f"}
          p="20px 0px"

              >HOME & LIVING</Text>
             </Box>

             <Box 
                _hover={{
                  borderBottom:"5px solid #ec008b"
                 }}
                 borderBottom="5px solid rgba(0,0,0,0.0)"
             cursor="pointer">
              <Text fontWeight={"500"}
              fontSize="14px"
              color={"#282c3f"}
          p="20px 0px"

              >BEAUTY</Text>
             </Box>

             <Box 
                _hover={{
                  borderBottom:"5px solid #ec008b"
                 }}
                 borderBottom="5px solid rgba(0,0,0,0.0)"
             cursor="pointer">
               <Text fontWeight={"500"}
               fontSize="14px"
               color={"#282c3f"}
          p="20px 0px"

               >STUDIO <sup>
                 <Badge
                  variant={"subtle"} 
                  colorScheme="pink"
                  fontSize={".8em"}
                  ml="0px"
                  padding="0px"
                 >NEW
                 </Badge>
                 </sup></Text>
             </Box>
        </HStack>
    </Box>

</HStack>


   <HStack>

   <Box>
       <HStack>
       <Stack spacing="4">
        
        <InputGroup variant="filled"
         fontWeight={"400"}
          fontSize="14px"
          color={"#696e79"}>
         <InputLeftElement
         fontWeight={"500"}
         fontSize="14px"
         color={"#696e79"}
           children={<SearchIcon 
           />}
         />

<Input
fontWeight={"400"}
fontSize="14px"
color={"#696e79"}
type={"text"}
 w="400px" 
 textColor="#696e79" 
 focusBorderColor="grey"
  border={"1px solid"}
   ref={searchRef} onKeyDown={handleKeyDown} 
   placeholder='Search for products and more'    />


        </InputGroup>

       </Stack>
       <Box>

       </Box>

       </HStack>
    </Box>


    <Box>

  <HStack spacing={"30px"}>


     <VStack spacing={"0px"}>
     <Menu isOpen={isOpen}>
            <MenuButton
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
      <VStack spacing={"3px"}>
      <Icon as={CiUser} fontSize="lg" />
      <Text
      fontSize={"12px"}
      fontWeight={"500"}  
      color={"#282c3f"}
      >Profile
      </Text>
      </VStack>
               
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>
                
                <VStack spacing={2} alignItems="flex-start">
          <Text
          fontSize={"14px"}
          color="#333333"
          fontWeight={"500"}
          >Welcome</Text>
          <Text
          fontSize={"14px"}
          color="#333333"
          >{isAuth?"To remove account access":"To access account and manage orders"}</Text>
         <Tag
         variant={"outline"}
         colorScheme="pink"
          size={"md"}
         fontSize={"14px"}
         onClick={()=>{isAuth?handleLogOut():navigate("/signup")}}
         >
        {isAuth?"LOGOUT":" LOGIN/SIGNUP"}
         </Tag>
        


                </VStack>
                
                </MenuItem>
                <hr />
                <MenuItem
          fontSize={"13px"}
                
                >Orders</MenuItem>
                <MenuItem
          fontSize={"13px"}
          onClick={()=>navigate("/wishlist")}
                >Wishlist</MenuItem>
                <MenuItem
          fontSize={"13px"}
                
                >Gift Cards</MenuItem>
                <MenuItem
          fontSize={"13px"}
                
                >Contact Us</MenuItem>
                <MenuItem>
                <HStack
          fontSize={"14px"}
          fontWeight="bold"      
                >
             <Text>Myntra Insider</Text>
             <Badge colorScheme="pink" >NEW</Badge>
                </HStack>
                </MenuItem>

            </MenuList>
            
        </Menu>
     

     </VStack>



     <VStack spacing={"3px"} onClick={()=>navigate("/wishlist")}>

     <Icon  onClick={()=>navigate("/wishlist")} as={CiHeart} fontSize="xl" />
      <Text
      fontSize={"12px"}
      fontWeight={"500"}  
      color={"#282c3f"}
      onClick={()=>navigate("/wishlist")}
      >Wishlist
      </Text>
     </VStack>



     <VStack spacing={"3px"}  onClick={()=>navigate("/cart")} >

     <Icon as={BsHandbag} fontSize="lg"  onClick={()=>navigate("/cart")} />
      <Text
      fontSize={"12px"}
      fontWeight={"500"}  
      color={"#282c3f"}
      onClick={()=>navigate("/cart")}
      >Bag
      </Text>
     </VStack>

  </HStack>

    </Box>
   </HStack>
    
   


</HStack>
</Box>


</>
  )
}

export default Navbar