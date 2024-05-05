import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";

const router = createBrowserRouter([
   {
    path:'/',
    element:<Main/>,
    children:[
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