import React from 'react'
import styled from 'styled-components'

function Search({search, setSearch}) {

    return (
        <div className='search'> 
            <label>Search Listings:</label>
            <SearchBar type='text'
                    id='search'
                    value={search}
                    placeholder='Search Listings...'
                    onChange={(e) => setSearch(e.target.value)}></SearchBar>
        
        </div>
    )
}

export default Search

const SearchBar = styled.input`
margin:auto;
border: 2px rgba(25, 207, 35, 0.39);
background-color: #566d96;
padding: 2px 20px;
width:200px ;
height: 20px;
border-radius: 20px;
`