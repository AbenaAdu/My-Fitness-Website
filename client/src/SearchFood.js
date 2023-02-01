import React from 'react'

function SearchFood({handleFoodSearch, searchFoods}) {
  return (
    <div className="searchbar">
    <label htmlFor="search">Search Logged Foods: </label>
    <input
      type="text"
      id="search"
      placeholder="Type a name to search..."
      onChange= {handleFoodSearch}
      value={searchFoods}
    />
  </div>
  )
}
export default SearchFood