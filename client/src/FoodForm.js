import {useState} from 'react'
import {Link} from 'react-router-dom'

function FoodForm() {
  const [name, setName] = useState('')
  const [calories, setCalories] = useState('')
  const [time, setTime] = useState('')

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
    .then(data => console.log(data))
  }


  return (
    <div className="food-form">
    <h2>Log Your Foods Here</h2>
    <div className="form-link">
    <Link style = {{textDecoration: 'none', color:'black'}} to='food' >
      Go to Food History
      </Link>
      </div>
    <form onSubmit={handleSubmit}
    className="form">
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
