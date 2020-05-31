import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

Login.propTypes = {}

function Login(props) {
  const loggedStatous = props.userIsLogged

  function login(loggedStatous) {
    props.setUserIsLogged(true)
  }

  function logout(loggedStatous) {
    props.setUserIsLogged(false)
  }

  useEffect(() => {
    localStorage.setItem("user is logged", loggedStatous)
  }, [loggedStatous])

  return (
    <div>
      <h1>This will be the Login page</h1>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      {loggedStatous && <h1>Welcome to our app!</h1>}
      <br />
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  )
}

export default Login
