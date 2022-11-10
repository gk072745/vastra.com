import { Routes,Route } from "react-router-dom";
import HomeRoute from "./HomeRoute";
import LoginRoute from "./loginRoute";
import MensRoute from "./MensRoute"

export default function AllRoutes(){

 return (
    <Routes>
          <Route path="/" element={<HomeRoute/>} />
          <Route path="/login" element={<LoginRoute/>}/>
          <Route path="/men" element={<MensRoute/>}  />
    </Routes>
 )


}