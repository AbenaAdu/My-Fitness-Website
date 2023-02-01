import {useState} from 'react'
import {Link} from 'react-router-dom'


function Login({onLogin, setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(false)
    const [success, setSuccess] = useState(false)

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
        .then((r) => r.json())
        .then(data => {
          if (data.id) {
              onLogin(data)
              setSuccess(true)
              setErrors(false)
              // error handling 
          } else if (data.errors) {
              setErrors(data.errors)
              setSuccess(false)
          }
        })
  }


  
  return (
    <div>
    <form className="form" onSubmit={handleSubmit}>
    <h1>Login</h1>
    <p>{errors ? errors : " "}</p>
    <p>{success ? `Welcome, ${username}!` : " "}</p>
    <label htmlFor="username">Username: </label>
    <input
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <label htmlFor="password">Password: </label>
    <input
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Login</button>
  </form>
  <Link to='/signup' style = {{textDecoration: 'none', color:'black', padding: "10px"}}>
      Don't have an Account? Click here to Sign Up
    </Link>
  </div>
  )
}
export default Login;
