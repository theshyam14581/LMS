
import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ bookData = [] }) => {
  const navigate = useNavigate();

  const VisitHandler = (book) => {
    navigate("/visitor", {
      state: book,
    });
  };

  return (
    <section className="card-container1">

      <div className="card-header">
        <p className="card-subtitle">EXPLORE OUR COLLECTION</p>

        <h1 className="card-title">
          Marvel <span>Books</span>
        </h1>

        <p className="card-description">
          Discover your favorite heroes, stories and adventures.
        </p>

        <div className="card-heading-line"></div>
      </div>

      <div className="card-container">

        {bookData.length > 0 ? (
          bookData.map((book) => (
            <article
              key={book.id}
              className="card"
            >
              <div className="card-image-box">
                <img
                  className="card-book-image"
                  src={book.image}
                  alt={book.title || "Marvel book"}
                  loading="lazy"
                />
              </div>

              <div className="card-content">
                <h2 className="card-book-title">
                  {book.title}
                </h2>

                <p className="card-author">
                  {book.author
                    ? `By ${book.author}`
                    : "Marvel Collection"}
                </p>

                <div className="card-bottom">
                  <span className="card-price">
                    {book.price != null
                      ? `₹${book.price}`
                      : "Explore Book"}
                  </span>

                  <button
                    type="button"
                    className="login-btn"
                    onClick={() => VisitHandler(book)}
                  >
                    View Details
                    <span aria-hidden="true"> →</span>
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="card-empty">
            <h2>No Books Available</h2>
            <p>Please check back later for the collection.</p>
          </div>
        )}

      </div>

    </section>
  );
};

export default Card;
