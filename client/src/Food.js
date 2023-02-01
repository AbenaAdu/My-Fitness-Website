import {useState} from 'react'
import FoodCard from './FoodCard';
import {Link} from 'react-router-dom'
import SearchFood from './SearchFood';

function Food({foods}) {
  const [searchFoods, setSearchFoods] = useState('')
console.log(foods)

  const filteredFoods = foods.filter(filterFoods => {
      return filterFoods.name.toLowerCase().includes(searchFoods.toLowerCase())
    })

    function handleFoodSearch(e){
      setSearchFoods(e.target.value)
    }

    const fooddisplay= filteredFoods.map(food => {
      return <FoodCard key={food.id} food={food}/>
    })

  return (
    <div>
      <Link style = {{textDecoration: 'none', color:'black'}} to='/foodform' >
      Go back to Log New Foods
      </Link>
      <SearchFood searchFoods={searchFoods} handleFoodSearch={handleFoodSearch}/>
      {fooddisplay}

    </div>
  )
}
export default Food;