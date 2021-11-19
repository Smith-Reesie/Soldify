import React from 'react'
import styled from "styled-components"


function MLDisplay({ myListings, formState, setFormState, editListing}) {
    const { name, description, category, price} = myListings
    


    


    return (
        <div className= "listing image">
            
            <Listborder>  
            <div className="inline fields">
            <img src= {formState.image} alt= {name}/>
                <input type="text" name={name} placeholder="Name" value={formState.name}/>

                    {/* <button className="edit" onClick={handleListingChange}>🔍</button> */}
                <input type="text" name={description} placeholder="Description" value={formState.description}/>
                    {/* <button className="edit" onClick={handleListingChange}>🔍</button> */}
                <input type="text" name={category} placeholder="Category" value={formState.category}/>
                    {/* <button className="edit" onClick={handleListingChange}>🔍</button> */}
                <input type="number" name={price} placeholder="Sell Price" value={formState.price}/>
                    {/* <button className="edit" onClick={handleListingChange}>🔍</button> */}
                            

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
      align-items: center;
      justify-content: center;
  }
  img{
      width: 100px;

      
  }

`

