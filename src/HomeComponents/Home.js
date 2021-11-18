import React  from 'react'
import ListingContainer from './ListingContainer'
import Search from './Search'

function Home({listings, search, setSearch, onRemove}) {
    return (
        <div>
            <Search search={search}
                    setSearch={setSearch}/>
            <ListingContainer onRemove={onRemove} listings={listings} />
        </div>
    )
}

export default Home

//search bar 
//listing cards 