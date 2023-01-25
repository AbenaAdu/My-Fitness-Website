import {useState} from 'react'


function Login({onLogin, setUser}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [signout,setSignout] = useState(false)

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
              setError(false)
              setSuccess(true)
              // error handling 
          } else if (data.errors) {
              setError(data.errors)
          }
        })
  }

  return (
    <form onSubmit={handleSubmit}>
    <h3>Login</h3>
    {error ? error : " "}
    {success ? `Welcome, ${username}!` : " "}
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
  )
}
export default Login;
