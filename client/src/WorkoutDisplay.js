import React from 'react'
import WorkoutCard from './WorkoutCard';

function WorkoutDisplay({workouts}) {
    const workoutdisplay = workouts.map((workout) => {
        return <WorkoutCard workout={workout} key={workout.id}/>
    })
  return (
    <div>
        {workoutdisplay}
    </div>
  )
}
export default WorkoutDisplay;
