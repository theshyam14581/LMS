import React from "react";

const Card = ({ bookData }) => {
  return (
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
  );
};

export default Card;