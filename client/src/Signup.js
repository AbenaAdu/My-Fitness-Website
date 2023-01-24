import React from 'react'

function Signup() {
    // const [email, setEmail] = useState('')
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [error, setError] = useState (false)
    // const [success, setSuccess] = useState (false)
  return (
    <form >
    <h3>Sign Up Here</h3>
    <label htmlFor="email">Email: </label>
    <input
      type="text"
      id="email"
    //   value={email}
    //   onChange={(e) => setUsername(e.target.value)}
    />
    <label htmlFor="username">Username: </label>
    <input
      type="text"
      id="username"
    //   value={username}
    //   onChange={(e) => setUsername(e.target.value)}
    />
    <label htmlFor="password">Password: </label>
    <input
      type="password"
      id="password"
    //   value={password}
    //   onChange={(e) => setUsername(e.target.value)}
    />
    <button type="submit">Sign Up</button>
  </form>
  )
}

export default Signup;
