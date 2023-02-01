import React from 'react'
import {Link} from 'react-router-dom'

function Nav({}) {
  return (
    <div className='infoBar'>
        <ul>
        <li className="nav-button">
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='/'>
            Home/Logout
        </Link>
        </li>
        <li className="nav-button">
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='signup'>
            Sign Up 
        </Link>
        </li>
        <li className="nav-button">
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='signin'>
            LogIn 
        </Link>
        </li>
        <li className="nav-button">
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='workouts'>
            Workouts
        </Link>
        </li>
        <li className="nav-button">
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='food'>
            Food History
        </Link>
        </li>
        <li className="nav-button">
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='foodform'>
            Log New Foods
        </Link>
        </li>
        <li className="nav-button">
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='favworkout'>
            My Workouts
        </Link>
        </li>
        <li className="nav-button">
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='workoutform'>
            Log New Workout
        </Link>
        </li>
        </ul>
    </div>
  )
}
export default Nav;