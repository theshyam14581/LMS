import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <h2>Marvel LMS</h2>

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

        </nav>
    );
}

export default Navbar;