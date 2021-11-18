import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components'

function Header() {
    return (
        <div className='header'>
            <h1>SOLDIFY</h1>
            <NavContainer>
                <NavBar/>
            </NavContainer>
                

            
        </div>
    )
}

export default Header

const NavContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
border: none;
font-size: 10px;
height: 20px;
padding: 15px;
cursor: pointer; 
color: red;
a{
    color: red;
}
`