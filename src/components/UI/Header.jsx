import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          {/* Logo */}
          <div className="Logo">
            <NavLink to="/">
              <h1 className="flex items-center">
                <img src="./public/images/Logo.svg" alt="logo" />
                <span className="!text-cyan-500 text-5xl !font-extrabold">
                  World
                </span>
                <span className="!text-green-500 text-5xl !font-extrabold">
                  Atlas
                </span>
              </h1>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <nav className="menu-web">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            
          </nav>

          {/* Hamburger button */}
          <div className="ham-menu">
            <button onClick={() => setShow(!show)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>

        {/* Mobile Menu (inside container, so it stays visible) */}
        {show && (
          <nav className="menu-mobile">
            <ul>
              <li>
                <NavLink to="/" onClick={() => setShow(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setShow(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" onClick={() => setShow(false)}>
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setShow(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
