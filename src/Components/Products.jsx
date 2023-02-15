import { SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/AppReducer/Action'
import SingleProductCom from './SingleProductCom'

const Products = () => {
  const dispatch=useDispatch()
  const location=useLocation()
 const [searchParams]=useSearchParams()
 const initQuery=searchParams.get("q")

 const {Products,isLoading}=useSelector((store)=>store.AppReducer)
 useEffect(()=>{
    if(Products.length==0||location||initQuery){
      const type=searchParams.get("type")
      const category=searchParams.getAll("category")
      const brand=searchParams.getAll("brand")
      const price=searchParams.getAll("price")
      const discount=searchParams.get("discount")
      const q=searchParams.get("q")
      const getProductParams={
        params:{
          type,category,brand,price_lte:price,discount_gte:discount,q
        }

      }

    dispatch(getProducts(getProductParams))


    }



 },[Products.length,dispatch,location.search,searchParams,initQuery])



 return (
   <>
        <SimpleGrid
        columns={4} 
        spacingX='40px'
         spacingY='30px'
         w="100%"
         p="20px"
        >
 
        {
            Products?.map((el)=>{
             return <SingleProductCom key={el.id} {...el}/>
            })
          }

        </SimpleGrid>
   </>
  )
}

export default Products