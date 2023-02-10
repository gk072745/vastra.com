import './App.css';
import { MainRoutes } from './Routes/Routes';
import "./App.css"
import ScrollToTop from 'react-scroll-up';
import { RiArrowUpCircleFill } from "react-icons/ri";
import { Icon } from '@chakra-ui/react';
function App() {
 


  return (
    <div className="App">
      <MainRoutes/>
      <ScrollToTop showUnder={200} style={
        {
          position: 'fixed',
          bottom: 50,
          right: 30,
          cursor: 'pointer',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'linear',
          transitionDelay: '0s'
        }
      }>
        <Icon fontSize={"36px"}  borderRadius={"full"}  bgColor="pink" as={RiArrowUpCircleFill} />
       </ScrollToTop>
    </div>
  
  )
}

export default App;
