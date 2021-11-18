import React from 'react'
import styled from "styled-components"

function MListings({myListing, handleLargeView}) {

    const {name, image, category, price, description} = myListing

    function onClick(myListing) {
        handleLargeView(myListing)
    }

    
    return (
    <Resize> 
        <tr className = "Listing_Container">
        <td>{name}</td>
        <td>{<img id='img' src={image} alt = {name}/>}</td>
        <td>{category}</td>  
        <td>{price}</td> 
        <td>{description}</td>
        <button onClick = {()=>onClick(myListing)}>🔍</button>
        </tr>
    </Resize>
    
    )
}

export default MListings

const Resize = styled.div`
    border: 5px solid blue;
    width: 80%;
    height: 200px;
        img{
            width: 200px;
        }


`