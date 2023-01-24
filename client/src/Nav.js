import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='/'>
            Home 
        </Link>
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='signup'>
            Sign Up 
        </Link>
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='signin'>
            Sign In / Sign Out
        </Link>
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='workouts'>
            Workouts
        </Link>
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='food'>
            Foods I've Eaten
        </Link>
        <Link style = {{textDecoration: 'none', color:'black', padding: "10px"}} to='foodform'>
            Add New Foods
        </Link>
    </div>
  )
}
export default Nav;