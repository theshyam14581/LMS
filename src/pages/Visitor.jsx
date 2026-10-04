import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './Visitor.css'
import { useLocation, useNavigate } from "react-router-dom";

const Visitor = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const book = location.state;

  if (!book) {
    return (
      <div className="visit-container">
        <Navbar />

        <h1>No Book Selected</h1>

        <button onClick={() => navigate("/")}>
          Go Back
        </button>

        <Footer />
      </div>
    );
  }

  return (
    <div>

      <Navbar />

      <div className="visit-container">

        <img className="book-image"
          src={book.image}
          alt={book.title}
        />


        <h1 className="title-book">{book.title}</h1>

        <h2 className="title-book">Author: {book.author}</h2>

        <p className="book-desc">{book.genre}</p>

        <p className="book-prize">Price: {book.price}</p>

        <p className="book-cate">Year: {book.year}</p>

      </div>


      <Footer />

    </div>
  );
};

export default Visitor;