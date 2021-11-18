import React from 'react'
import styled from "styled-components"



function MLDisplay({ myListings, formState, setFormState, editListing}) {
    const {id, name, description, category, price} = myListings
    

    function handleListingChange() {
        // const updateObj = {
        //     image: "",
        //     name: "",
        //     description:"",
        //     category:"",
        //     price: 0
        };
        fetch(`http://localhost:3001/user_listings/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify()
        })
        .then((r) => r.json())
        .then(editListing);
    

    return (
        <div className= "listing image">
            
            <Listborder>  
            <div className="inline fields">
            <img src= {formState.image} alt= {name}/>
                <input type="text" name={name} placeholder="Name" value={formState.name}/>
                    <button className="edit" onClick={handleListingChange}>🔍</button>
                <input type="text" name={description} placeholder="Description" value={formState.description}/>
                    <button className="edit" onClick={handleListingChange}>🔍</button>
                <input type="text" name={category} placeholder="Category" value={formState.category}/>
                    <button className="edit" onClick={handleListingChange}>🔍</button>
                <input type="number" name={price} placeholder="Sell Price" value={formState.price}/>
                    <button className="edit" onClick={handleListingChange}>🔍</button>
                            
            </div>
        </Listborder>
        </div>
    );
}
export default MLDisplay
const Listborder = styled.div`
  border: 1px solid red;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  input{
      justify-content: first baseline;
  }
  img{
      width: 100px;
  }
`