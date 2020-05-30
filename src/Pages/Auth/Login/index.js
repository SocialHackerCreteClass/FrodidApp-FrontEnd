import React, { useState } from "react"

Login.propTypes = {}

function Login() {
  const [userIsLogged, setUserIsLogged] = useState(false)
  console.log(userIsLogged)

  function login() {
    setUserIsLogged(true)
    console.log(userIsLogged)
  }

  function logout() {
    setUserIsLogged(false)
    console.log(userIsLogged)
  }

  return (
    <div>
      <h1>This will be the Login page</h1>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      {userIsLogged && <h1>Welcome to our app!</h1>}
    </div>
  )
}

export default Login
