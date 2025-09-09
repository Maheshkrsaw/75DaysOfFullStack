import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-5 ">
        <h1 className="font-bold text-2xl">Mahesh</h1>
        <div className="flex gap-10 font-semibold">
          <NavLink
            to="/"
            style={(e) => ({
              color: e.isActive ? "#FFA2A2" : "black",
              fontWeight: e.isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>

          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "tomato" : "",
                fontWeight: e.isActive ? "bold" : "",
              };
            }}
            to="/users"
          >
            Users
          </NavLink>
          <NavLink
            className={(e) => {
              return [
                e.isActive ? "text-red-300" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ");
            }}
            to="/about"
          >
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;
