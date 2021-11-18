import React from 'react'
import Listings from './Listings'
import styled from 'styled-components'


function ListingContainer({listings, onRemove}) {
    
    
    return (

        

        <ListContanier>
        
            {listings.map((listing) => <Listings key={listing.lid} listing={listing} onRemove={onRemove} />)}
        
        </ListContanier>
    
    
    )
}

const ListContanier = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
div:hover {
    width: 200px;
    height: 250px;
    background-color: rgb(87, 113, 143);
    box-shadow: 5px -2px 5px 4px #777777; 
    border-top-left-radius: 5px ;
    border-bottom-right-radius: 5px;
    
}
`

export default ListingContainer
