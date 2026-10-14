
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Visitor.css";
import { useLocation, useNavigate } from "react-router-dom";

const Visitor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const book = location.state;

  if (!book) {
    return (
      <div className="visitor-page">
        <Navbar />

        <main className="visit-container no-book">
          <h1>No Book Selected</h1>
          <p>Please select a book to view its details.</p>

          <button
            className="back-btn"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="visitor-page">
      <Navbar />

      <main className="visit-container">
        <div className="book-layout">

          <section className="book-info">
            <p className="book-label">BOOK DETAILS</p>

            <h1 className="title-book">
              {book.title}
            </h1>

            <div className="book-divider"></div>

            <p className="book-meta">
              <span>Author</span>
              {book.author}
            </p>

            <p className="book-meta">
              <span>Genre</span>
              {book.genre}
            </p>

            <p className="book-meta">
              <span>Publication Year</span>
              {book.year}
            </p>

            <div className="book-price-box">
              <span>Book Price</span>
              <h2 className="book-prize">
                {book.price}
              </h2>
            </div>

            <button
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              ← Back to Books
            </button>
          </section>

          <section className="book-visual">
            <div className="book-cover-frame">
              <img
                className="book-image"
                src={book.image}
                alt={book.title || "Book cover"}
              />
            </div>
          </section>

        </div>

        {book.wepons && (
          <section className="extra-images">
            <div className="extra-heading">
              <h2>Book Artwork</h2>
              <p>Explore the artwork associated with this book.</p>
            </div>

            <div className="extra-image-grid">
              {Array.isArray(book.wepons) ? (
                book.wepons.map((image, index) => (
                  <div className="extra-image-card" key={index}>
                    <img
                      className="wepons-img"
                      src={image}
                      alt={`Book artwork ${index + 1}`}
                    />
                  </div>
                ))
              ) : (
                <div className="extra-image-card">
                  <img
                    className="wepons-img"
                    src={book.wepons}
                    alt="Book artwork"
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Visitor;
