import { Routes,Route } from "react-router-dom";
import HomeRoute from "./HomeRoute";





export default function AllRoutes(){

 return (
    <Routes>
          <Route path="/" element={<HomeRoute/>} />
    </Routes>
 )


}