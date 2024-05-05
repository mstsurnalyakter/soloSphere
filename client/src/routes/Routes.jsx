import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
   {
    path:'/',
    element:<Main/>,
    children:[
      {
         index:true,
         element:<Home/>
      },
      {
         path:"/login",
         element:<Login/>
      },
      {
         path:"/registration",
         element:<Registration/>
      }
    ]
   }
])


export default router;