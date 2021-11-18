import React from 'react'
import styled from "styled-components"
import MyListings from './MyListings';


function MLDisplay({ myListings, formState, setFormState}) {

    const {image, name, description, category, price} = myListings
    

//     function handleListingChange() {
//         fetch(`http://localhost:3001/user_listings/${name,category, description, price}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             myListings: !myListings,
//         }),
//       })
//     .then((r) => r.json())
//     .then((updatedItem) => console.log(updatedItem));
// }
    return (
        <div className= "listing image">
            
            <Listborder>  
            <div className="inline fields">
            <img src= {formState.image} alt= {name}/>
                <input type="text" name={name} placeholder="Name" value={formState.name}/>
                <input type="text" name={description} placeholder="Description" value={formState.description} />
                <input type="text" name={category} placeholder="Category" value={formState.category} />
                <input type="number" name={price} placeholder="Sell Price" value={formState.price}/>
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
