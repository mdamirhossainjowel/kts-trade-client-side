import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../_firebase.init";
import menuicon from "../../Utilities/Images/menu-icon.png";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
            to="/home"
          >
            KTS Trade
          </Link>
          <button
            className="text-black  cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <img src={menuicon} alt="" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          {!user ? (
            <div className="nav-item flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/home"
              >
                Home
              </Link>

              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/inventory"
              >
                Inventory
              </Link>
              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/login"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="nav-item flex flex-col lg:flex-row list-none lg:ml-auto">
              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/home"
              >
                Home
              </Link>

              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/inventory"
              >
                Inventory
              </Link>
              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/additems"
              >
                Add Items
              </Link>
              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/myitem"
              >
                My Items
              </Link>
              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/blogs"
              >
                Blogs
              </Link>

              <Link
                className="px-3 py-2 ml-2 flex items-center text-xl  font-bold text-black hover:text-orange-600"
                to="/login"
                onClick={() => signOut(auth)}
              >
                Signout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
