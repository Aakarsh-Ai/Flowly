
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-mark">F</span>
          <span>lowly</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="navbar-actions">

          <Link to="/contact" className="navbar-cta">
            Let's talk <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
