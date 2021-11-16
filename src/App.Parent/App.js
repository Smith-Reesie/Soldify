import Home from '../HomeComponents/Home'
import Sell from '../SellComponents/SellForm'
import MyListings from '../MyListComponents/MyListings';
import {Route, Switch} from 'react-router-dom'
import NavBAr from './NavBar'
import Header from './Header';



function App() {

//    const [listings, SetListings] = useState([1,2,3,4,5,6,7])
//    const [myListings, SetMyListings] = useState([])

// set new listings functions
// function handleNewLisiting(newListing){
//     setListings([...Listings, newListing])
// }

//  function handleMyListings(myNewListing){
//     setMyListings([...myListings, myNewListing])
// }


return (
<>
    <Header/>
    <NavBAr/>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/sell'>
                <Sell/>
            </Route>
            <Route exact path='/mylistings'>
                <MyListings/>
            </Route>
        </Switch>
</>
);
}

export default App;
