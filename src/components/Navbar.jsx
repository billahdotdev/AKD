"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "../assets/akd-logo.svg" // Changed import syntax
import "../styles/Navbar.module.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <NavLink to="/">
            <img src={Logo || "/placeholder.svg"} alt="Brand Logo" className="brand-logo-svg" />{" "}
            {/* Changed to img tag */}
            <span className="brand-name">AL KARIM DRESSES</span>
          </NavLink>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" activeClassName="active" end onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={() => setIsMenuOpen(false)}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active" onClick={() => setIsMenuOpen(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/bts" onClick={() => setIsMenuOpen(false)}>
              <button className="bts-button">Behind the scenes</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

