import {useState} from 'react'
import {Link} from 'react-router-dom'

function Home({setUser}) {
  const [signout,setSignout] = useState(false)

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => r.json())
    .then((data) => {
        setUser(null)
        setSignout(data.message)
    })
    
  }
  return (
    <div id="home">
      <h1>Welcome to Fitapp!</h1>
      <div id="home-text">
      <p>This is a community space where you can share workouts as well as log your foods. Stay tuned for more features!</p>
      <p>{signout ? signout : " "}</p>
    
    </div>
    <div id="home-additional">
    <Link to='/signup' style = {{textDecoration: 'none', color:'black', padding: "10px"}}>
      Don't have an Account? Click here to Sign Up
    </Link>
    <p>Click here to Logout:</p>
    <button id="logout" onClick={handleLogout} type="submit">Logout</button>
    </div>
    </div>
  )
}
export default Home;
