import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ bookData }) => {

  const navigate = useNavigate();

  const VisitHandler = (user) => {
    navigate("/visitor", {
      state: user
    });
  };

  return (
    <div className="card-container1">

      <h1 className="card-title">Marvel Books</h1>

      <div className="card-container">

        {bookData.map((user) => {
          return (
            <div key={user.id} className="card">

              <img
                src={user.image}
                alt={user.title}
              />

              <h1>{user.title}</h1>

              <p>{user.author}</p>

              <button
                className="login-btn"
                onClick={() => VisitHandler(user)}
              >
                View Details
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default Card;