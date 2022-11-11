import { Routes,Route } from "react-router-dom";
import ChildRoute from "./ChildRoute";
import HomeRoute from "./HomeRoute";
import LoginRoute from "./loginRoute";
import MensRoute from "./MensRoute"
import SingleProductRoute from "./singleProductRoute";
import StoreRoute from "./StoreRoute";
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
    </Routes>
 )


}