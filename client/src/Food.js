import {useState} from 'react'
import FoodCard from './FoodCard';
import {Link} from 'react-router-dom'

function Food() {
  const [foods, setFoods] = useState([])

  fetch ("/foods")
    .then(res => res.json())
    .then(data => console.log(data))

    const fooddisplay= foods.map(food => {
      return <FoodCard key={food.id} food={food}/>
    })
    
  return (
    <div>
      <Link style = {{textDecoration: 'none', color:'black'}} to='food' >
      Go back to Log New Foods
      </Link>

    </div>
  )
}
export default Food;