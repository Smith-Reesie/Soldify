import React, {useState} from 'react'
import MListings from './MListings'
import styled from "styled-components"


function MLContainer({ myListings, onRemove, handleLargeView }) {
    // const [myListings, setMyListings] = useState ([])
    return (
        <TableTheme>
        <table className = "table_listing"> TABLE OF LISTINGS
            <>
            </>
            <tbody>
                <tr>
                    <th>
                        <h5>NAME</h5>
                    </th>
                    <th>
                        <h5>IMAGE</h5>
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
                    handleLargeView = {handleLargeView}
                    onRemove={onRemove}/>
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
    border: 1px solid orange;
    text-align: center;
    color: orange;
    justify-content: space-evenly;
        tbody {
            border : red;
        }
        table{
            border: 1px soild red;
        }
`
