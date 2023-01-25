import React from 'react'
import WorkoutCard from './WorkoutCard';
import CommentCard from './CommentCard'

function WorkoutDisplay({workouts, comments}) {
    const workoutdisplay = workouts.map((workout) => {
        return <WorkoutCard workout={workout} key={workout.id} />
    })
    const commentdisplay = comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.id} />
    })
    
  return (
    <div>
        {workoutdisplay}
        {commentdisplay}
    </div>
  )
}
export default WorkoutDisplay;
