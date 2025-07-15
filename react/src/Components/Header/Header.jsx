import { useState } from "react";
import { NavLink } from "react-router";
import "./header.css";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const [menuOpen, setMenuOpen] = useState(!1);
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        HighLights
      </NavLink>

      <DarkModeToggle />
      {!menuOpen && (
        <button
          id="menuToggle"
          onClick={() => setMenuOpen(!0)}
          aria-label="Toggle mobile menu"
        >
          <span className="material-icons">menu</span>
        </button>
      )}
      <nav
        id="mobileMenu"
        className={menuOpen ? "mobileMenu open" : "mobileMenu"}
        aria-label="Mobile menu"
      >
        {menuOpen && (
          <button
            id="closeMenu"
            onClick={() => setMenuOpen(!1)}
            aria-label="Close mobile menu"
          >
            <span className="material-icons" id="closeIcon">
              close
            </span>
          </button>
        )}
        <div className="mobileNav">
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/addEvent" onClick={() => setMenuOpen(false)}>
                Add Event
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={() => setMenuOpen(false)}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/userAuthentication"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="desktopMenu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/addEvent">Add Event</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/userAuthentication">Log in</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
