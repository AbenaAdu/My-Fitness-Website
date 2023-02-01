import React from 'react'

function SearchWorkout({searchWorkouts, handleWorkoutSearch}) {
  return (
    <div className="searchbar">
    <label htmlFor="search">Search Workouts: </label>
    <input
      type="text"
      id="search"
      placeholder="Type a name to search..."
      onChange= {handleWorkoutSearch}
      value={searchWorkouts}
    />
  </div>
  )
}
export default SearchWorkout
