import React from "react";
import styled from "styled-components"

function MLSearch({userInput, setUserInput}) {
    

    return (
        <SearchBarTheme>
        <div className="mlsearch">
            <input
                type="text"
                id="search"
                placeholder="Your Listings"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}> 
            </input>
            <button 
                type="submit">🔍</button>
        </div>
        </SearchBarTheme>
    );
}

export default MLSearch;

const SearchBarTheme = styled.div`
    border: 1px solid red;
        input, button{
            justify-content: first baseline;
    }
`