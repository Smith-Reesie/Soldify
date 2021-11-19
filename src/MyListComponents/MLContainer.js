import React, {useState,Fragment} from 'react'
import MListings from './MListings'
import MLEditableRow from './MLEditableRow'

import styled from "styled-components"


function MLContainer({ key, myListings, setMyListings, onRemove, handleLargeView }) {
   
    const [editListingId, setEditListingId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: "",
        image: "",
        category: "",
        description: "",
        price: "",
    })
//ENABLES THE SAVE BUTTON
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
//COPY DATA 
        const newFormData = { ...myListings };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };
//ENABLES THE EDIT FIELD TO POPULATE 
    const handleEditClick = (event, listing) => {
        event.preventDefault();
        setEditListingId(listing.id);
    
        const formValues = {
          name: listing.name,
          image: listing.image,
          category: listing.category,
          description: listing.description,
          price: listing.price
        };
    
        setEditFormData(formValues);
      };

//ENABLES DELETE BUTTON
    function handleRemoveListing(listingGone) {
        const updatedListing = myListings.filter((listing) => {
          return listing.id !== listingGone.id
        })
        return setMyListings(updatedListing);
    }
    
    return (
    
        <TableTheme>
    <p> TABLE OF LISTINGS </p>
    
        {/* <form> */}
        <table> 
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>IMAGE</th>
                    <th>CATEGORY</th>
                    <th>PRICE</th>
                    <th>DESCRIPTION</th>
                    <th>ENLARGE</th>
                    <th>DELETE</th>
                    <th>EDIT</th>
                </tr> 
            </thead>
            <tbody>
                {myListings.map((listing) =>(
                    <Fragment>
                    {editListingId === listing.id ? 
                        <MLEditableRow   
                            myListing= {listing}
                            handleEditFormChange = {handleEditFormChange}
                            handleEditClick = {handleEditClick}
                            editFormData = {editFormData}/>
                            :
                        <MListings
                            key = {listing.id}
                            myListing= {listing}
                            handleLargeView = {handleLargeView}
                            onRemove={onRemove}
                            handleEditClick = {handleEditClick}
                            handleRemoveListing = {handleRemoveListing}/> 
                    }
                     </Fragment>
                ))}

                {/* // {myListings.map((listing) => <MListings
                //     key = {listing.id}
                //     myListing= {listing}
                //     handleLargeView = {handleLargeView}
                //     onRemove={onRemove}/> 
                
            // )} */}
            </tbody>    
        </table>
        {/* </form> */}
        </TableTheme>
      
               
            
    )
}
export default MLContainer;


const TableTheme = styled.div`
    border: 1px solid orange;
    
  
    color: orange;
        table {
            border-collapse: collapse;
            width: 100%;
        }
        p {
           text-align: center;
           font-size: 30px;
        }
        th {
            border: 1px solid green;
            text-align: center;
            padding: 8px;
            font-size: 25px;
        }
        form {
            display: flex;
            gap: 5px;
        }
`

