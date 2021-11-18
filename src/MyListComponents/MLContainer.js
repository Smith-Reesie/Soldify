import React from 'react'
import MListings from './MListings'
import styled from "styled-components"


function MLContainer({ myListings, handleLargeView }) {
    // const [myListings, setMyListings] = useState ([])
    return (
        <TableTheme>
        <table className = "table_listing"> TABLE OF LISTINGS
            <tbody>
                <tr>
                    <th>
                        <h5>NAME</h5>
                    </th>
                    <th>
                        <h5>IMAGE URL</h5>
                    </th>
                    <th>
                        <h5>CATEGORY</h5>
                    </th>
                    <th>
                        <h5>PRICE</h5>
                    </th>
                    <th>
                        <h5>DESCRIPTION</h5>
                    </th>
                </tr>
                {myListings.map((listing) => <MListings
                    key = {listing.id}
                    myListing= {listing}
                    handleLargeView = {handleLargeView}/>
                    // handleSearch={searchListings}/>
                    // setMyListings = {setMyListings}/>
                )}
            </tbody>
        </table>
        </TableTheme>
    )
}
export default MLContainer;


const TableTheme = styled.div`
    border: 1px solid black;
    text-align: center;
        tbody {
            border : red;
        }
`