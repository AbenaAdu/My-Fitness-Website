import React from 'react'
import FavWorkoutCard from './FavWorkoutCard'

function FavWorkout({favWorkouts, updateFavWorkout}) {
    const favworkoutdisplay = favWorkouts.map(favWorkout => {
        return <FavWorkoutCard favWorkout={favWorkout} key={favWorkout.id} updateFavWorkout={updateFavWorkout}/>
    })
  return (
    <div>{favworkoutdisplay}</div>
  )
}
export default FavWorkout