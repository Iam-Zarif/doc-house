import { createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
        {path:"/" ,element: <Home></Home>},
    {path:'/login' , element:<Login></Login>}
    ]
  },
]);
export default router