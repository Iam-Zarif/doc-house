import { createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Login from "../Components/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
    {path:'/login' , element:<Login></Login>}
    ]
  },
]);
export default router