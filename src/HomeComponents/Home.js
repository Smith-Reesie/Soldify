import React, { useEffect, useState }  from 'react'
import ListingContainer from './ListingContainer'
import Search from './Search'

function Home() {
    const[soldListings, setSoldListings]=  useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/sold_listings")
        .then((response) => response.json())
        .then((data) => {
          setSoldListings(data);
          // console.log(data)
        });
      }, []);
    return (
        <div>
            <Search/>
            <ListingContainer soldListings={soldListings}/>
        </div>
    )
}

export default Home

//search bar 
//listing cards 