import React from 'react'
import styled from 'styled-components'

function Listings({listing, onRemove}) {

    const {id, name, image, description, category, price} = listing

    // function handleDelete(){
    //     fetch(`http://localhost:3000/sold_listings/${id}`,{
    //     method: 'DELETE',
    //     })
    //     .then(resp => resp.json())
    //     .then(()=>{onRemove(listing)})
    //     }

        

    return (
<ListingCard>
    
    <img src={image} alt={name} />
        <h6>{name}</h6>
        <p>{category}</p>
        <p>{description}</p>
        <p>Price: ${price}.00</p>
        {/* <button onClick={handleDelete}>☆</button> */}
            </ListingCard>
        
    )
}

const ListingCard = styled.div` 
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: left;
border: 3px groove orange;
padding: 10px;
border-radius: 10px;
/* border-top-left-radius: 5px ;
border-bottom-right-radius: 5px; */
height: 200px;
width: 155px;
margin: 1rem;
/* box-shadow: 5px px 5px 4px #777777 ; */
background-color: rgba(217, 153, 4, .8);

img{
    width: 40px;
    height: 45px;
    align-items: center;
}
img:hover{
    width: 50%;
    height: 50%;
}
p{  
    font-size: 10px;
    text-align: left 
}
h6 {
    font: 10px ;
}
button{
    justify-content: flex-end;
    border: none;
    background: none;
}
    
`

export default Listings



