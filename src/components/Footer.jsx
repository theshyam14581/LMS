import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section footer-about">
          <h2 className="footer-logo">MARVEL BOOKS</h2>

          <p>
            Explore the world of Marvel through an amazing collection
            of comics, characters, stories and adventures.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/books">Books</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>

          <ul>
            <li><a href="/books">Marvel Comics</a></li>
            <li><a href="/books">Superheroes</a></li>
            <li><a href="/books">Villains</a></li>
            <li><a href="/books">Adventure</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h3>Contact</h3>

          <p>Email: marvelbooks@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">

        <p>
          © 2026 Marvel Books. All Rights Reserved.
        </p>

        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;