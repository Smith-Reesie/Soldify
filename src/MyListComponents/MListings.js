import React from 'react'
import styled from "styled-components"

function MListings({ myListing, setMyListings, handleLargeView, onRemove, handleEditClick, handleRemoveListing}) {

    const {id, name, image, category, price, description} = myListing


    function onClick( myListing) {
        // e.prevent.Default();
        handleLargeView(myListing);
    }


    function handleDelete(){
        fetch(`http://localhost:3000/user_listings/${id}`,{
        method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(()=>{
            handleRemoveListing(myListing)
        });
        }



    return (
        <TableRow className = "Listing_Container">
        
        {/* <table> */}
            {/* <tr> */}
                <td>{name}</td>
                <td>{<img id='img' src={image} alt = {name}/>}</td>
                <td>{category}</td>  
                <td>{price}</td> 
                <td>{description}</td>
                <td><button onClick = {()=>onClick(myListing)} alt= "large view">🔍</button></td>
                <td><button onClick = {handleDelete}>🗑</button></td>
                <td><button onClick = {(event) => handleEditClick(event, myListing)}>💅🏻</button></td>
            {/* </tr>  */}
        {/* </table> */}
        
        </TableRow>

    )
}

export default MListings
const TableRow = styled.tr`
justify-content: space-evenly;

    tr{
        border: 3px solid white;
        width: 100px;

    }
    
    td {
        border: 1px solid blue;
        text-align: center;
        padding: 8px;
        font-size: 15px;
        width: 400px;
        justify-content: space-evenly;
    }
    img {
        width: 50px;
        height: 100%;
    }
`

                        

                    