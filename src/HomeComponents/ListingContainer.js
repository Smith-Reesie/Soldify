import React from 'react'
import Listings from './Listings'


function ListingContainer({soldListings}) {

    return (
        <>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>    
                    <th>Sold</th>            
                </tr>
            
            <div id = "sold-history">
                {soldListings.map((soldListing) => {
                    return (
                    <Listings
                        key = {soldListing.id}
                        soldListing = {soldListing}/>
                    );
                })}
            </div>
            </table>
        </>
    );
}

export default ListingContainer
