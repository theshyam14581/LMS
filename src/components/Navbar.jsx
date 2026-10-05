import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        
            
        <nav className="navbar">

            
            <h1 className="heading1"> Marvel LMS</h1>
            <div className="navbar">
                <Link to="/login">
                <button className="login-btn">
                    Login
                </button>
            </Link>
            <Link to="/signup">
                <button className="login-btn">
                    Signup
                </button>
            </Link>
            <Link to="/cart">
                <button className="login-btn">
                    Cart
                </button>
            </Link>
            </div>

        </nav>
        
    );
}

export default Navbar;