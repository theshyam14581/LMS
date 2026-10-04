import React, {useState} from "react";
import "./Login.css";


function Login() {

    return (
        <div className="login">
            <div className="login-container">

                <form className="login-form">

                    <div className="login-logo">
                        MARVEL
                    </div>

                    <h1>LOGIN</h1>

                    <p className="login-subtitle">
                        Welcome back, Hero
                    </p>

                    <div className="login-input-group">
                        <label className="login-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="login-input"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="login-input-group">
                        <label className="login-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="login-input"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="login-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>

                        <a href="#" className="forgot-password">
                            Forgot Password?
                        </a>
                    </div>

                    <button type="submit" className="login-btn">
                        LOGIN
                    </button>

                    <p className="signup-text">
                        Don't have an account?
                        <a href="/signup"> Create Account</a>
                    </p>

                </form>

            </div>
        </div>
    );
}

export default Login;

