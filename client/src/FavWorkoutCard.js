import {useState} from 'react'

function FavWorkoutCard({favWorkout, updateFavWorkout}) {
    const {id, name, fav, image, reps, sets, difficulty_level} = favWorkout
    const [error, setError] = useState(false)

    console.log(favWorkout)

    function handleUnFavClick() {
        fetch(`/workouts/${id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({fav : !favWorkout.fav}),
      })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
            updateFavWorkout(data)
            // error handling 
        } else if (data.error) {
            setError(data.error)
        }
      })
      }

  return (
    <div className='fav-workout-card'>
    <div >
        <img className='fav-workout-img' src={image} alt={name}/>
        </div>
        <div className='fav-workout-card-info'>
          <h1>{name}</h1>
          <p>Reps: {reps}</p>
          <p>Sets: {sets}</p>
          <p>Difficulty Level: {difficulty_level} </p>
          <p>{error ? error : " "}</p>
          <button onClick={handleUnFavClick} id="fav-workout">
        Favorite ❤️
      </button> 
         </div>
    </div>
  )
}
export default FavWorkoutCard
