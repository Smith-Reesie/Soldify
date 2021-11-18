import React from 'react'

function MListings({myListing, handleLargeView}) {

    const {name, image, category, price, description} = myListing

    function onClick(myListing) {
        handleLargeView(myListing)
    }

    
    return (
        <tr className = "Listing_Container">
        <td>{name}</td>
        <td>{<img id='img' src={image} alt = {name}/>}</td>
        <td>{category}</td>  
        <td>{price}</td> 
        <td>{description}</td>
        <button onClick = {()=>onClick(myListing)}>🔍</button>
        </tr>
    )
}

export default MListings