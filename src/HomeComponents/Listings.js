import React from 'react'

function Listings({soldListing}) {
    const { name, image, category, description, price} = soldListing
    return (
        <div className="card">
            <img
                src={image}
                alt={name}
                className="toy-avatar"
                />
            <h2>{name}</h2>
            <h3>{category}</h3>
            <h3>{description}</h3>
            <h3>{price}</h3>
      
    </div>
    )
}

export default Listings
