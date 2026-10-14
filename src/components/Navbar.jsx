
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">M</span>
        <h1 className="heading1">
          MARVEL <span>LMS</span>
        </h1>
      </Link>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/cart" className="nav-link">
          Books
        </Link>

        
        <Link to="/about" className="nav-link">
            About
        </Link>


        <Link to="/login" className="nav-button">
          Login
        </Link>

        <Link to="/signup" className="nav-button nav-signup">
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
