import React from "react";
import "./Card.css";

const Card = ({ bookData }) => {
  return (
   <div className="card-container1">
    <h1 className="card-title">Marvel Books</h1>
     <div className="card-container">
      {bookData.map((user) => {
        return (
          <div key={user.id} className="card">
            <img  src={user.image} alt={user.title} />
            <h1>{user.title}</h1>
            <p>{user.author}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Card;