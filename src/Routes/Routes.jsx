import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Address from '../Pages/Address'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Otp from '../Pages/Otp'
import Payment from '../Pages/Payment'
import PaymentSuccess from '../Pages/PaymentSuccess'
import Signup from '../Pages/Signup'
import SingleProduct from '../Pages/SingleProduct'
import Store from '../Pages/Store'
import Wishlist from '../Pages/Wishlist'
import { PrivateRoute } from './PrivateRoutes'

export const MainRoutes = () => {
  return (
      <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/store" element={<Store/>} />
             <Route path='/single_product/:id' element={<SingleProduct/>} />
             <Route path='/signup' element={<Signup/>}  />
             <Route path='/otp' element={<Otp/>} />
             <Route path='/wishlist' element={<PrivateRoute><Wishlist/></PrivateRoute>} />
             <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
             <Route path='/address' element={<PrivateRoute><Address/></PrivateRoute>}/>
             <Route path='/payment' element={<PrivateRoute><Payment/></PrivateRoute>}/>
             <Route path='/paymentSuccess' element={<PrivateRoute><PaymentSuccess/></PrivateRoute>}/>  
      </Routes>
  )
}

