import {useState} from 'react'

function WorkoutCard({workout, updateFavWorkout, deleteWorkout}) {
    
 const [error, setError] = useState(false)
 
    const {id, name, image, sets, reps, difficulty_level, fav, comments, descriptions, muscle_groups} = workout

    const instruction = descriptions.map(description => {
       return <div key={description.id}>
        <ul>
        <li>{description.instruction}</li>
        </ul>
        </div> 
    })
    const com = comments.map(comment => {
        return <div key={comment.id}>
            <p>{comment.description}</p>
        </div>
    })
    const muscle = muscle_groups.map(group =>{
        return <div key={group.id}>
        <p>{group.name}</p>
    </div>
    })

  function handleFavClick() {
    fetch(`/workouts/${id}`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({fav : !workout.fav}),
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
  
  function handleDelete() {
    fetch(`/workouts/${id}`, {
          method: "DELETE",
        })
        .then(response => response.json())
        .then(() => {
            deleteWorkout(id)
          })
}
  return (
    <div className='workout-card'>
    <div >
        <img className='workout-img' src={image} alt={name}/>
        </div>
        <div className='workout-card-info'>
          <h1>{name}</h1>
          <h4>Target Muscles</h4>
          {muscle}
          <h4>How to Complete Workout:</h4>
          {instruction}
          <p>Reps: {reps}</p>
          <p>Sets: {sets}</p>
          <p>Difficulty Level: {difficulty_level} </p>
          <h4>Users' Comments</h4>
          {com}
          <p>{error ? error : " "}</p>
          <button onClick={handleFavClick} id="fav-workout">
        {fav ? "Favorite ❤️" : "Favorite ♡ "}
      </button>
          <button onClick={handleDelete} id="delete-workout">
        Delete 🗑️
      </button>
        </div>
    </div>
  )
}

export default WorkoutCard
