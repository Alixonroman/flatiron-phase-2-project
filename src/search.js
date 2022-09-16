import React, {useState} from "react";

function Search ({filterData}) {
  const [search, setSearch] = useState("") 
  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value)
    filterData(e.target.value)
  }
    
    return (
    <form className="searchbar" >
    <input
      type="text"
      id="search"
      placeholder="Look for stuff...  If you want..."
      value = {search}
      onChange = {handleSearch}
    />
    <button type="submit">🔍</button>
  </form>
    )
}
export default Search;