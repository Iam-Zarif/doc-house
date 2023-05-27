import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar/Navbar";


const Main = () => {
     const location = useLocation();
     const noHeaderFooter =
       location.pathname.includes("login") ||
       location.pathname.includes("signUp");
    return (
      <div>
        {noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
      </div>
    );
};

export default Main;