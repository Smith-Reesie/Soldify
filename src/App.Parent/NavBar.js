import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


// const linkStyles = {
//     display: "inline-block",
//     width: "10px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
// };

function NavBar() {
return (
    <> 
    
        <NavLink
        to="/" exact > Home
        </NavLink>
        <NavLink
        to="/sell" exact > Sell
        </NavLink>
        <NavLink
        to="/mylistings" exact > My Listings
        </NavLink>

    </>
    );
}

export default NavBar;



