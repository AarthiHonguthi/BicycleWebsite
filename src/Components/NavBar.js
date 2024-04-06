import React from "react";
import logo from "../Images/cyclelogo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const NavBar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setISLoggedIn = props.setISLoggedIn;
  return (
    <div
      className="flex  items-center w-11/12 
            max-w-[1400px] py-4 mx-auto h-16 relative border-b-2 rounded-[40px] "
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width={100}
          height={32}
          loading="lazy"
          
        />
      </Link>

      
        <nav className="absolute right-[230px]">
          <ul className=" flex gap-x-6 text-white">
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact" >Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Login-Signup-Logout-dashboard */}

        <div className="absolute flex items-center gap-x-4 right-[20px]">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-100">
                Log in
              </button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/signup">
              <button className="bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-100">
                Sign up
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => {
                  setISLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-100"
              >
                Log out
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="bg-gray-800 text-gray-100 py-[8px] px-[12px] rounded-[8px] border border-gray-700 cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-100">
                Dashboard
              </button>
            </Link>
          )}
        </div>
      
    </div>
  );
};
export default NavBar;
