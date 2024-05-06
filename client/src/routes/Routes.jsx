import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import AddJob from "../pages/AddJob/AddJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`),
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/my-posted-job",
        element:<MyPostedJobs/>
      },
    ],
  },
]);


export default router;