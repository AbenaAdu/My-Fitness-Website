import {useState} from 'react'
import {Link} from 'react-router-dom'

function FoodForm({setFoods, foods}) {
  const [name, setName] = useState('')
  const [calories, setCalories] = useState('')
  const [time, setTime] = useState('')
  const [error, setError] = useState (false)
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        calories,
        time,
      }),
    })
    .then((r) => r.json())
    .then(data => {
      if (data.id) {
          setFoods([...foods, data])
          setSuccess(true)
          // error handling 
      } else if (data.error) {
          setError(data.error)
      }
    })
  }



  return (
    <div className="food-form">
    <h1>Log Your Foods Here</h1>
    <div className="form-link">
    <Link style = {{textDecoration: 'none', color:'black'}} to='/food' >
      Go to Food History
      </Link>
      </div>
      <div >
      {error ? error.map((err => {
        return <div key={err.id}>
          <p>{err}</p>
        </div>
        })) : " "}
    </div>
    <form onSubmit={handleSubmit}
    className="form">
      <p>{success ? "Food Logged!" : " "}</p>
      <input 
      type="text" 
      name="name" 
      placeholder="Name" 
      onChange={(e)=> setName(e.target.value)} 
      value={name}
      /> 
      <input 
      type="number" 
      name="calories" 
      placeholder="Calories" 
      onChange={(e)=> setCalories(e.target.value)} 
      value={calories}
      />
      <input 
      type="text" 
      name="time" 
      placeholder="Time" 
      onChange={(e)=> setTime(e.target.value)} 
      value={time}
      />
      <button type="submit">Log Food</button>
    </form>
   
  </div>
  )
}
export default FoodForm;
