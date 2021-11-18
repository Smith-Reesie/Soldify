import React from 'react'
import styled from "styled-components"

function MListings({myListing, setMyListings, handleLargeView, onRemove}) {

    const {id, name, image, category, price, description} = myListing

    function onClick(myListing) {
        handleLargeView(myListing)
    }

    function handleDelete(){
        fetch(`http://localhost:3000/sold_listings/${id}`,{
        method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(()=>{onRemove(myListing)})
        }

    
    return (
        <>
        <TableRow className = "Listing_Container">
        <td>{name}</td>
        <td>{<img id='img' src={image}/>}</td>
        <td>{category}</td>  
        <td>{price}</td> 
        <td>{description}</td>
        <td><button onClick = {()=>onClick(myListing)}>🔍</button></td>
        <td><button onClick = {handleDelete}>🗑</button></td>
        </TableRow>
        </>
    )
}

export default MListings

const TableRow = styled.tr`
border: 1px soild orange;
height: 20px;
width: 10px;

`