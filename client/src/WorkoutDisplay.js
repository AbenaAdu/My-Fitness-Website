import React from 'react'
import WorkoutCard from './WorkoutCard';
import CommentCard from './CommentCard'
import SearchWorkout from './SearchWorkout';

function WorkoutDisplay({filteredWorkouts, comments, searchWorkouts, handleWorkoutSearch, updateFavWorkout, deleteWorkout}) {
    const workoutdisplay = filteredWorkouts.map((workout) => {
        return <WorkoutCard workout={workout} key={workout.id} updateFavWorkout={updateFavWorkout} deleteWorkout={deleteWorkout}/>
    })
    // const commentdisplay = comments.map((comment) => {
    //     return <CommentCard comment={comment} key={comment.id} />
    // })
    
  return (
    <div>
         <SearchWorkout searchWorkouts={searchWorkouts} handleWorkoutSearch={handleWorkoutSearch}/>
        {workoutdisplay}
        {/* {commentdisplay} */}
    </div>
  )
}
export default WorkoutDisplay;
