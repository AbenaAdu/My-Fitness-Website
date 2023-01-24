import React from 'react'

function Login({handleLogin, setUser}) {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [error, setError] = useState(false)
    // const [success, setSuccess] = useState(false)
    // const [signout,setSignout] = useState(false)

  return (
    <form >
    <h3>Login With Username</h3>
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
    <button type="submit">Login</button>
  </form>
  )
}
export default Login;
