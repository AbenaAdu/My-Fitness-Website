import React from 'react'

function WorkoutCard({workout}) {
    const {name, image, sets, reps, difficulty_level, fav, comments, descriptions} = workout

    const instruction = descriptions.map(description => {
       return <p>{description}</p>
    })
    console.log(comments)
  return (
    <div>
        <h1>{name}</h1>
        <p>{reps}</p>
        <p>{sets}</p>
        {instruction}
    </div>
  )
}
export default WorkoutCard;
