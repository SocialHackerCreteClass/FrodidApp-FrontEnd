import React, { useState } from "react"

Login.propTypes = {}

function Login(props) {
  let { userIsLogged } = props

  const [loggedStatous, setLoggedStatous] = useState(userIsLogged)

  function login(loggedStatous) {
    setLoggedStatous(true)
  }

  function logout(loggedStatous) {
    setLoggedStatous(false)
  }

  return (
    <div>
      <h1>This will be the Login page</h1>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      {loggedStatous && <h1>Welcome to our app!</h1>}
    </div>
  )
}

export default Login
