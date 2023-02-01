import {useState} from 'react'
import {Link} from 'react-router-dom'

function Signup({setUser}) {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState (false)
    const [success, setSuccess] = useState (false)

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            username,
            password,
          }),
        })
        .then((r) => r.json())
        .then(data => {
          if (data.id) {
              setUser(data)
              setSuccess(true)
              // error handling 
          } else if (data.error) {
              setError(data.error)
              
          }
        })
        

  }
  return (
    <form className="form" onSubmit={handleSubmit}>
    <h1>Sign Up Here</h1>
    <div >
      {error ? error.map((err => {
        return <div key={err.id}>
          <p>{err}</p>
        </div>
        })) : " "}
    </div>
    <div >
      {success ? `Thank you for Signing Up ${username}!` : " "}
    </div>
    <label htmlFor="email">Email: </label>
    <input
      type="text"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
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
    <button type="submit">Sign Up</button>
    <Link to='/signin' style = {{textDecoration: 'none', color:'black', padding: "10px"}}>
      Already have an Account? Click here to LogIn
    </Link>
  </form>
  
  )
}

export default Signup;
