import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "../Pages/Layout/Layout";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
  },
]);