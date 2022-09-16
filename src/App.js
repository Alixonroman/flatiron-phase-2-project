import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import ClothingContainer from "./ClothingContainer";
import AddListing from "./AddListing";
import PicC from "./PicC";
function App() {
  const [listings, setListings] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((r) => r.json())
      .then((listings) => {
        setFilteredData(listings);
        setListings(listings);
      });
  }, []);

  function filterData(searchText) {
    if (searchText === "") {
      setFilteredData(listings);
    } else {
      setFilteredData(
        listings.filter((listings) => {
          return (
            listings.title.toLowerCase().includes(searchText.toLowerCase()) ||
            listings.description
              .toLowerCase()
              .includes(searchText.toLowerCase())
          );
        })
      );
    }
  }

  function addNewListing(newListing) {
    const newListingsArray = [...listings, newListing];
    setListings(newListingsArray);
    setFilteredData(newListingsArray);
  }

  return (
    <Router>
      <Header filterData={filterData} listings={filteredData} />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">All Listing</Link>
            </li>
            <li>
              <Link to="/users">Add Listings</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/about">
            <ClothingContainer
              filterData={filterData}
              listings={filteredData}
            />
          </Route>

          {/* <About /> */}
          <Route path="/users">
            <AddListing addNewListing={addNewListing} />
            <ClothingContainer
              filterData={filterData}
              listings={filteredData}
            />
          </Route>
          {/* <Users /> */}
          <PicC/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
