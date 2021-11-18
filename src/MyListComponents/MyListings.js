import React, {useState} from 'react'
import MLContainer from './MLContainer'
import MLDisplay from './MLDisplay'
import styled from "styled-components"


function MyListings({myListings, onRemove}) {
//const [myListings, setMyListings] = useState ([])
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
 //DRAFT FOR MLPROFILE FUNCTION
//   const handleSumTotal = myListings.price.reduce((totalSum, myListing) => {
//     return totalSum + myListing.price, 0
//   });
//   console.log(handleSumTotal)
//   console.log(hello)
//   // const handleQtyTotal =

//FETCH FOR USER_LISTINGS ONLY

// useEffect(() => {
//     fetch("http://localhost:3000/user_listings")
//     .then((response) => response.json())
//     .then((data) => {
//     setMyListings(data);
//     });
// }, []);

//FILTER FOR SEARCH COMP

const searchListings = myListings.filter((myListing) => {
    return myListing.name.toLowerCase().includes(userInput.toLowerCase())
    });

  //FUNCTION FOR ONCLICK TO DISPLAY IN MLISTING
function handleLargeView(clickedListing){
    // myListings.find((listing) => listing.id === clickedListing.id);
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
    
    <MLDisplay 
            myListings={myListings} 
            formState ={formState} 
            setFormState ={setFormState} 
            />
    </Listborder>
    <MLContainer 
        myListings = {searchListings} 
        searchListings ={searchListings} 
        userInput = {userInput} 
        setUserInput= {setUserInput}
        handleLargeView = {handleLargeView}
        onRemove={onRemove}/>
    </>
    )
}
export default MyListings

const Listborder = styled.div`
  border: 1px solid red;
  display:flex;
  justify-content: space-around
;
`