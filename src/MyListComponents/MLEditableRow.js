import React from 'react'

function MLEditableRow({ id, myListings, handleEditFormChange, editFormData }) {

    // function handleListingChange() {
    //     // const updateObj = {
    //     //     image: "",
    //     //     name: "",
    //     //     description:"",
    //     //     category:"",
    //     //     price: 0
    //     };
    //     fetch(`http://localhost:3001/user_listings/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify()
    //     })
    //     .then((r) => r.json())
    //     .then(editListing);

    return (
        <tr>
            <td>
                <input
                    type = 'text'
                    placeholder = "Enter a new name ... "
                    name = "name">
                    value ={editFormData.name}
                    {/* onChange = {handleEditFormChange} */}
                    </input>
            </td>
            <td>
                <input
                    type = 'text'
                    placeholder = "Enter a new image ... "
                    name = "image">
                    value ={editFormData.image}
                    {/* onChange = {handleEditFormChange} */}
                    </input>
            </td>
            <td>
                <input
                    type = 'text'
                    placeholder = "Enter a new category ... "
                    name = "category">
                    value ={editFormData.category}
                    {/* onChange = {handleEditFormChange} */}
                    </input>
            </td>
            <td>
                <input
                    type = 'text'
                    placeholder = "Enter a new sell price ... "
                    name = "price">
                    value ={editFormData.price}
                    {/* onChange = {handleEditFormChange} */}
                    </input>
            </td>
            <td>
                <input
                    type = 'text'
                    placeholder = "Enter a new description ... "
                    name = "description">
                    value ={editFormData.description}
                    {/* onChange = {handleEditFormChange} */}
                    </input>
            </td>
            <td><button type = "submit" >🗄</button></td>
             
        </tr>
    )
}
export default MLEditableRow

                        

                    