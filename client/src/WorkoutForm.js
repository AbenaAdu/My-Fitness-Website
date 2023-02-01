import {useState} from 'react'
import {Link} from 'react-router-dom'

function WorkoutForm({setWorkouts, workouts}) {
    const [name, setName] = useState(' ')
    const [image, setImage] = useState(' ')
    const [sets, setSets] = useState(' ')
    const [reps, setReps] = useState(' ')
    const [difficulty_level, setDifficulty] = useState(' ')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    function handleWorkoutSubmit(e) {
        e.preventDefault();
        fetch("/workouts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            image,
            sets,
            reps,
            difficulty_level,
          }),
        })
        .then((r) => r.json())
        .then(data => {
            if (data.id) {
                setWorkouts([...workouts, data])
                setSuccess(true)
                // error handling 
            } else if (data.error) {
                setError(data.error)
                
            }
          })
      }
      
  return (
    <div className="food-form">
    <h1>Log Your Workouts</h1>
    <div className="form-link">
    <Link style = {{textDecoration: 'none', color:'black'}} to='/workouts' >
      Go to Workouts
      </Link>
      </div>
    <form onSubmit={handleWorkoutSubmit}
    className="form">
       <div >
      {error ? error.map((err => {
        return <div key={err.id}>
          <p>{err}</p>
        </div>
        })) : " "}
    </div>
      <p>{success ? "Workout Logged!" : " "}</p>
      Name: <input 
      type="text" 
      name="name" 
      placeholder="Name" 
      onChange={(e)=> setName(e.target.value)} 
      value={name}
      /> 
      Image: <input 
      type="text" 
      name="image" 
      placeholder="Image" 
      onChange={(e)=> setImage(e.target.value)} 
      value={image}
      />
      Sets: <input 
      type="text" 
      name="sets" 
      placeholder="Sets" 
      onChange={(e)=> setSets(e.target.value)} 
      value={sets}
      />
      Reps: <input 
      type="text" 
      name="reps" 
      placeholder="Reps" 
      onChange={(e)=> setReps(e.target.value)} 
      value={reps}
      />
      Difficulty Level: <input 
      type="text" 
      name="difficulty-level" 
      placeholder="Difficulty-level" 
      onChange={(e)=> setDifficulty(e.target.value)} 
      value={difficulty_level}
      />
      <button type="submit">Log Workout</button>
    </form>
   
  </div>
  )
}
export default WorkoutForm
