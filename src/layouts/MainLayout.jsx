import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
const MainLayout = () => {

  const location = useLocation();

  useEffect(()=>{
      if(location.pathname === '/'){
          document.title = `Foodie-Pal/home`
      }
      else{
          document.title = `Foodie-Pal ${location.pathname}`

      }
      if(location.state){
          document.title = `${location.state}`
      }
  })

  return (
    <div>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
