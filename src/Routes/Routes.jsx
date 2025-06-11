import { createBrowserRouter } from "react-router";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Bookings/Booking";
import Blog from "../Pages/Blogs/Blog";
import Spinner from "../Components/Spinner";
import DoctorDetails from "../Components/DoctorDetails";
import ErrorLayout from "../Pages/Layout/ErrorLayout";
const homeLoader = async () => {
  const response = await fetch("Doctor.json");
  if (!response.ok) {
    throw new Error("error");
  }
  const data = await response.json();
  return data;
};
export let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: homeLoader,
        Component: Home,
      },
      {
        path: "/blogs",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("../../public/Blog.json"),
        Component: Blog,
      },
      {
        path: "/bookings",
        Component: Booking,
      },
      {
        path: "/details/:id",
        Component: DoctorDetails,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("../../public/Doctor.json"),
      },
      
      
    ],
  },
  {
        path: "*",
        element: <ErrorLayout></ErrorLayout>,
      },
]);
