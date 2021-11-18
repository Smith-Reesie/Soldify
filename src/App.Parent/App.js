import React  from "react";
import Home from '../HomeComponents/Home'
import Sell from '../SellComponents/SellForm'
import MyListings from '../MyListComponents/MyListings';
import {Route, Switch} from 'react-router-dom'
import Header from './Header';
import {useState, useEffect} from 'react'
import styled from 'styled-components'

function App() {

const [listings, setListings] = useState([])
const [myListings, setMyListings] = useState ([])
const [search, setSearch] = useState('')

useEffect(()=>{
    fetch('http://localhost:3000/sold_listings')
    .then(resp => resp.json())
    .then(listings => setListings(listings))
},[])

useEffect(() => {
    fetch("http://localhost:3000/user_listings")
    .then((response) => response.json())
    .then((data) => {
    setMyListings(data);
    });
}, []);


function addNewListing(newListing){
    setListings([...listings, newListing])
}

function addNewMyListing(newListing){
    setMyListings([...myListings, newListing])
}

function removeMyListing(removed){
    const newML = myListings.filter((myListing) => myListing.id !== removed.id)
    setMyListings(newML)
    }


// function removeListing(deletedListing){
// const newListings = listings.filter((listing) => listing.id !== deletedListing.id)
// setListings(newListings)
// }



//  function handleMyListings(myNewListing){
//     setMyListings([...myListings, myNewListing])
// }

const visibleListings = listings.filter((listing) => listing.name.toLowerCase().includes(search.toLowerCase()))


return (
<>
    <Header/>
        <Switch>
            <Route exact path='/'>
                <Home 
                    listings={visibleListings} 
                    search={search}
                    setSearch={setSearch}
                    // onRemove={removeListing}
                    />
            </Route>
            <Route exact path='/sell'>
                <Sell addNewListing={addNewListing}
                    addNewMyListing={addNewMyListing}/>
            </Route>
            <Route exact path='/mylistings'>
                <MyListings 
                myListings={myListings} 
                onRemove={removeMyListing}/>
            </Route>
        </Switch>
</>
);
}



export default App;

