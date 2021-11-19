
import React, {useEffect, useState} from 'react'
import MLContainer from './MLContainer'
import MLDisplay from './MLDisplay'
import styled from "styled-components"
import MLProfile from './MLProfile'
import MLSearch from './MLSearch'


function MyListings({myListings, onRemove}) {
const [userInput, setUserInput] =useState("")
// const[qtySold, setQtySold] = useState (0);
// const[totalSold, setTotalSold] = useState(0);
const[formState, setFormState] = useState ({

    image: "",
    name: "",
    description: "",
    category: "",
    price: 0
  })

//  DRAFT-> SUM OF SOLD TOTAL - MLPROFILE 
//   function handleSumTotal(totalSold) {
//     const updatedSumTotal = myListings.price.reduce(myListing => {
//       return totalSold + myListing.price
//     });
//     return setMyListings(updatedSumTotal)
//   }


//FETCH FOR USER_LISTINGS ONLY
//   useEffect(() => {
//     fetch("http://localhost:3000/user_listings")
//     .then((response) => response.json())
//     .then((data) => {
//     setMyListings(data);
//     });
// }, []);
//UPDATE MLDISPLAY W PATCH
//   function handleUpdateListing(editListing) {
//     const updatedListing = myListings.map((listing) =>
//       listing.id === updatedListing.id ? updatedListing : listing);
//       return setMyListings(updatedListing);
//   }


//FILTER FOR SEARCH COMP

const searchListings = myListings.filter((myListing) => {
    return myListing.name.toLowerCase().includes(userInput.toLowerCase())
    });

  //FUNCTION FOR ONCLICK TO DISPLAY IN MLISTING
function handleLargeView(clickedListing){

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
<MLProfile myListings={myListings} 
    />
<MLDisplay 
    myListings={myListings} 
    formState ={formState} 
    setFormState ={setFormState}
    //   editListing = {handleUpdateListing}
/>
    </Listborder>
<MLSearch
    serInput = {userInput}
    setUserInput = {setUserInput}
    />
<MLContainer 
    myListings = {searchListings} 
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