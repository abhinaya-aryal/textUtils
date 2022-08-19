import React from "react";
import { Link, useLocation } from "react-router-dom";
// import logo from "IMAGES/logo192.png"
function NavBar(props) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <>
      <div className={`flex h-14 transition ${props.mode} items-center`}>
        <img className="h-10 ml-2   sm:hidden" src="logo192.png" alt="Logo" />
        <div className="text-3xl hidden text-white font-semibold ml-2 sm:block">
          Text Utils
        </div>
        <Link to="/">
          <li
            className={`text-white list-none text-xl ml-5 cursor-pointer p-1 rounded ${
              props.hover
            } ${splitLocation[1] === "" ? "border-b-2 " : ""}`}
          >
            Home
          </li>
        </Link>
        <Link to="/about">
          <li
            className={`text-white list-none text-xl p-1 ml-5 cursor-pointer rounded ${
              props.hover
            } ${props.hover} ${
              splitLocation[1] === "about" ? "border-b-2" : ""
            }`}
          >
            About
          </li>
        </Link>

        {/* Toggle switch for changing dark and light theme*/}
        <label
          htmlFor="toggleB"
          className="flex items-center cursor-pointer right-2 absolute"
        >
          <div className="mr-3 text-white text-2xl">
            <i
              className={`fa-solid fa-sun ${
                props.mode === "bg-indigo-600" ? "invisible" : "visible"
              }`}
            ></i>
          </div>

          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only peer"
              onClick={props.toggleMode}
            />

            <div
              className={`block bg-indigo-400 w-12 h-7 rounded-full ${
                props.mode === "bg-slate-800" ? "bg-blue-500" : "bg-indigo-400"
              }`}
            ></div>

            <div
              className={`absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition ${
                props.mode === "bg-slate-800"
                  ? "translate-x-full"
                  : "translate-x-0"
              }`}
            ></div>
          </div>

          <div className="ml-3 text-white text-2xl">
            <i
              className={`fa-solid fa-moon ${
                props.mode === "bg-slate-800" ? "invisible" : "visible"
              } `}
            ></i>
          </div>
        </label>
      </div>
    </>
  );
}
export { NavBar };
