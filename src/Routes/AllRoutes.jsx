import { Routes,Route } from "react-router-dom";
import CheckoutRoute from "./checkoutRoute";
import ChildRoute from "./ChildRoute";
import CraditRoute from "./CraditRoute";
import HomeRoute from "./HomeRoute";
import LoginRoute from "./loginRoute";
import MensRoute from "./MensRoute"
import OtpRoute from "./OtpRoute";
import PrivateRoute from "./PrivateRoute";
import SingleProductRoute from "./singleProductRoute";
import StoreRoute from "./StoreRoute";
import WishlistRoute from "./WishlistRoute";
import WomenRoute from "./WomenRoute";

export default function AllRoutes(){

 return (
    <Routes>
          <Route path="/" element={<HomeRoute/>} />
          <Route path="/login" element={<LoginRoute/>}/>
          <Route path="/men" element={<MensRoute/>}  />
          <Route path="/women" element={<WomenRoute/>}  />
          <Route path="/kids" element={<ChildRoute/>} />
          <Route path="/:type" element={<StoreRoute/>} />
          <Route path="/single/:id"   element={<SingleProductRoute/>}/>
          <Route path="/checkout/cart" element={
            <PrivateRoute>
                  <CheckoutRoute/>
            </PrivateRoute>
          }/>
          <Route path="/wishlist" element={
            <PrivateRoute>
                  <WishlistRoute/>
            </PrivateRoute>
          }/>
          <Route path="/otp" element={<OtpRoute/>} />
          <Route path="/cradit" element={
<PrivateRoute>
<CraditRoute/>
</PrivateRoute>

          } />
    </Routes>
 )


}