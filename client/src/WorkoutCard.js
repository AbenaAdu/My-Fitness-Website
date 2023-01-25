import React from 'react'

function WorkoutCard({workout}) {
    const {name, image, sets, reps, difficulty_level, fav, comments, descriptions, muscle_groups} = workout

    const instruction = descriptions.map(description => {
       return <div key={description.id}>
        <ul>
        <li>{description.instruction}</li>
        </ul>
        </div> 
    })
    const com = comments.map(comment => {
        return <div key={comment.id}>
            <p>{comment.description} {comment.user_id.name}</p>
        </div>
    })
    const muscle = muscle_groups.map(group =>{
        return <div key={group.id}>
        <p>{group.name}</p>
    </div>
    })
  
  return (
    <div className='workout-card'>
    <div >
        <img className='workout-img' src={image} alt={name}/>
        </div>
        <div >
          <h1>{name}</h1>
          <h4>Target Muscles</h4>
          {muscle}
          <h4>How to Complete Workout:</h4>
          {instruction}
          <p>Reps: {reps}</p>
          <p>Sets: {sets}</p>
          <p>Difficulty Level: {difficulty_level} </p>
          <button id="fav-workout">
        Favorite ❤️
      </button>
          <button id="delete-workout">
        Delete 🗑️
      </button>
        </div>
    </div>
  )
}
export default WorkoutCard;
