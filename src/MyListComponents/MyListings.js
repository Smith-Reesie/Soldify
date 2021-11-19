import React, {useState} from 'react'
import MLContainer from './MLContainer'
import MLDisplay from './MLDisplay'
import styled from "styled-components"
import MLProfile from './MLProfile'
import MLSearch from './MLSearch'


function MyListings({myListings, setMyListings}) {

  const [userInput, setUserInput] =useState("")
  const [formState, setFormState] = useState ({
    image: "",
    name: "",
    description: "",
    category: "",
    price: 0
  })
//SUM OF SOLD TOTAL - MLPROFILE 
  function handleSumTotal(myListings) {
    let totalPrice = 0;
    for (const listing of myListings) {
      totalPrice += listing.price;
    };
    return totalPrice;
  }
  
//ENABLES SEARCH BAR
  const searchListings = myListings.filter((myListing) => {
    return myListing.name.toLowerCase().includes(userInput.toLowerCase())
    });

//FUNCTION FOR LARGE VIEW EVENT --> DISPLAYS IN MLISTING
  function handleLargeView(clickedListing ){
      // e.preventDefault()
        setFormState({
        image: clickedListing.image,
        name: clickedListing.name,
        description: clickedListing.description,
        category: clickedListing.category,
        price: clickedListing.price
        })
    }

  return (
  <>
    <Listborder>
    <MLProfile
      myListings={myListings}
      handleSumTotal= {handleSumTotal}/>
    <MLDisplay 
      myListings={myListings} 
      formState ={formState} 
      setFormState ={setFormState}/>
      {/* // editListing = {handleUpdateListing}/> */}
    </Listborder>
    <MLSearch
      userInput = {userInput}
      setUserInput = {setUserInput}/>
    <MLContainer 
      myListings = {searchListings}
      setMyListings = {setMyListings} 
      searchListings ={searchListings} 
      userInput = {userInput} 
      setUserInput= {setUserInput}
      handleLargeView = {handleLargeView}/>

  </>
  );
}
export default MyListings

const Listborder = styled.div`
  border: 1px solid red;
  display:flex;
  justify-content: space-around;
`