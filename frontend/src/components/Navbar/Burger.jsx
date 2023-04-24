import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faHouse,
  faCartShopping,
  faHammer,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/Logo.png";
import "../../Style/Burger.css";

const Burger = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handelToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navBar">
      <div className="logoBurger">
        <button type="button" onClick={handelToggle}>
          <img src={logo} alt="logo" />
        </button>
        <ul className={`menuNav ${menuOpen ? " showMenu" : ""}`}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "cyan" : "white",
                };
              }}
              end
            >
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              style={({ isActive }) => {
                return {
                  color: isActive ? "cyan" : "white",
                };
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/creation"
              style={({ isActive }) => {
                return {
                  color: isActive ? "cyan" : "white",
                };
              }}
            >
              <FontAwesomeIcon icon={faHammer} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profil"
              style={({ isActive }) => {
                return {
                  color: isActive ? "cyan" : "white",
                };
              }}
            >
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Burger;
