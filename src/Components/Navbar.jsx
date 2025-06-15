import React from "react";
import { Link, NavLink } from "react-router";
import logo from '/public/logo.png'
const Navbar = () => {
  const links = (
    <>
      <li className="font-bold">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-indigo-600 underline" : "")}>Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/bookings" className={({ isActive }) => (isActive ? "text-indigo-600 underline" : "")}>My-Bookings</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/blogs" className={({ isActive }) => (isActive ? "text-indigo-600 underline" : "")}>Blogs</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-indigo-600 underline" : "")}>Contact</NavLink>
      </li>
    
    </>
  );
  return (
    <div className="navbar bg-[rgb(239,239,239)] w-10/12 mx-auto py-4 rounded-sm">
      <div className="navbar-start">
        <div className="dropdown px-0 ml-0">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            
            {links}
            
          </ul>
        </div>
        <Link className="hidden md:block" to='/'>
        <div className="flex gap-2 items-center justify-center cursor-pointer">
        <img src={logo} alt="" />
        <p className="font-bold ml-2 text-xl">Prescription Point</p>
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-active btn-primary rounded-2xl text-white">Emergency</button>

      </div>
    </div>
  );
};

export default Navbar;
