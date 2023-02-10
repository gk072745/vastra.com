import './App.css';
import Signup from './Pages/Signup';
import Otp from './Pages/Otp';
import SingleProduct from './Pages/SingleProduct';
import { Route, Routes } from 'react-router-dom';
import Wishlist from './Pages/Wishlist';
import { MainRoutes } from './Routes/Routes';
import "./App.css"

function App() {
  return (
    <div className="App">
      <MainRoutes/>
    </div>
  );
}

export default App;
