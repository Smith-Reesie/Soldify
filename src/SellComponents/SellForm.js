import React, {useState} from 'react'
import styled from 'styled-components'

function Sell({addNewListing, addNewMyListing}) {

    const [formState, setFormState ] = useState({
        name:'',
        image:'',
        category:'',
        description:'',
        price: 0
})

function handelFormChange(e){
    setFormState({
    ...formState, 
    [e.target.name]: e.target.value
    })
}


function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3000/sold_listings',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
    },
    body: JSON.stringify(formState)
})
.then(resp => resp.json())
.then(newListing => {addNewListing(newListing)})
.then(()=>{ fetch('http://localhost:3000/user_listings',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
    },
    body: JSON.stringify(formState)
})
.then(resp => resp.json())
.then(newMyListing => {addNewMyListing(newMyListing)})})
    
}





return (
    
        <form onSubmit={handleSubmit}>
            <label> New Listing:</label>
            <FormContainer>
                <input onChange={handelFormChange} type='text' name='name' placeholder='Name' value={formState.name}></input>
                <input onChange={handelFormChange} type='text' name='image' placeholder='image' value={formState.image}></input>
                <select onChange={handelFormChange} type='text' name='category' placeholder='category' >
                    <option value={formState.category}>Clothes</option>
                    <option value={formState.category}>Home</option>
                    <option value={formState.category}>Technology</option>
                </select>
                <input onChange={handelFormChange} type='number' name='price' placeholder='price'step='0.01' value={formState.price}></input>
                <textarea onChange={handelFormChange} type='text-box' name='description' placeholder='describe your item' value={formState.description}></textarea>
                <button type='submit'>List</button>
                </FormContainer>
        </form>

)
}


const FormContainer = styled.div`
border: 2px soild orangered;
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;
padding: 60px;

input, option, select, button{
    justify-content: center;
    height: 20px;
    width: 200px;
    vertical-align: middle;
    text-decoration: orangered
}

button{
    border: 1px ridge orangered;
    background-color: orange;
}



`

export default Sell


//product info container 
//Info 