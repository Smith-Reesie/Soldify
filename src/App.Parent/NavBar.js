import React from 'react'
import {NavLink} from 'react-router-dom'


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
    <div className='navbar'>
        <NavLink
        to="/"
        exact
        activeStyle={{
            background: "blue",
        }}
        >
        Home
        </NavLink>
        <NavLink
        to="/sell"
        exact
        activeStyle={{
            background: "darkblue",
        }}
        >
        Sell
        </NavLink>
        <NavLink
        to="/mylistings"
        exact
        activeStyle={{
            background: "darkblue",
        }}
        >
        My Listings
        </NavLink>
    </div>
    );
}

export default NavBar;

