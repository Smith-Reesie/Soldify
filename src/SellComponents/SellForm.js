import React from 'react'

function Sell() {
    return (
        <div className='form'>
            <form>
                <label> New Listing:</label>
                    <input type='text' name='name' placeholder='Name'></input>
                    <input type='text' name='image' placeholder='image' ></input>
                    <input type='text' name='category' placeholder='category'></input>
                    <input type='number' name='price' step='0.01'></input>
                    <button type='submit'>Submit</button>
                
            </form>
        </div>
    )
}

export default Sell


//product info container 
//Info 