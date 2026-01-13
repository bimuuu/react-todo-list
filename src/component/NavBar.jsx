import React from "react";
import reactLogo from "../assets/react.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const activeLink = ({ isActive }) => {
    return isActive
      ? "bg-blue-400 bg-opacity-60 rounded px-3 py-2 font-semibold"
      : "hover:bg-blue-400 hover:bg-opacity-60 rounded px-3 py-2";
  };

  return (
    <header>
      <div className="flex mr-auto gap-x-2 font-semibold text-2xl">
        <Link to="/">
          <img src={reactLogo} alt="react logo" />
        </Link>
        <span>React ToDo-List</span>
      </div>
      <ul className="hidden md:flex gap-x-6">
        <li>
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={activeLink}>
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
