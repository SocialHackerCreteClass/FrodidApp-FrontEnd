import React, { useEffect, useState } from "react"
import {
  Link,
  useHistory,
  useParams,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom"
import { exact } from "prop-types"

Login.propTypes = {}

function Login(props) {
  let history = useHistory()

  const { loggedStatus, setLoggedStatus } = props

  function login(userIsLogged) {
    setLoggedStatus(true)

    history.goBack()
  }

  function logout(userIsLogged) {
    setLoggedStatus(false)

    history.goBack()
  }

  useEffect(() => {
    localStorage.setItem("user is logged", loggedStatus)
  }, [loggedStatus])

  return (
    <div>
      <h1>This will be the Login page</h1>

      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      <hr />

      <br />
    </div>
  )
}

export default Login
