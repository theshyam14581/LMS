import React from 'react'

const Card = ({ booksDetails }) => {
  return (
    <div>
        {
            booksDetails.map((user) => {
                return(
                    <div key={user.id}>
                        <img src={user.image} alt={user.name} />
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                    </div>
                )
            }
        )}   
    </div>
  )
}

export default Card
