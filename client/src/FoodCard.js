import React from 'react'

function FoodCard({food}) {
  const{calories, name, time} = food

  return (
    <div id="food-card">
      <h2>{name}</h2>
      <p>Calories: {calories}</p>
      <p>Time Logged: {time}</p>

    </div>
  )
}
export default FoodCard;
