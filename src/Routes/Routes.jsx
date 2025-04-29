import {
  createBrowserRouter,
} from "react-router";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Bookings/Booking";
import Blog from "../Pages/Blogs/Blog";
import Contact from "../Pages/Contact/Contact";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path:'/blogs',
        Component: Blog,
      },
      {
        path:'/bookings',
        Component: Booking,
      },
      {
        path:'/contact',
        Component: Contact,
      },
    ]
  },
  
]);