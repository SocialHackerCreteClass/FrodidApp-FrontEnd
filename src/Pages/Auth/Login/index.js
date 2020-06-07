import React, { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { exact } from "prop-types"

Login.propTypes = {}

function Login(props) {
  console.log("login rendered ")

  let history = useHistory()

  const [loggedStatus, setLoggedStatus] = useState(
    localStorage.getItem("user is logged")
  )

  function login(userIsLogged) {
    setLoggedStatus(true)
    window.location.reload(false)
  }

  function logout(userIsLogged) {
    setLoggedStatus(false)
    window.location.reload(false)
  }

  useEffect(() => {
    localStorage.setItem("user is logged", loggedStatus)
  }, [loggedStatus])

  return (
    <div>
      <h1>This will be the Login page</h1>

      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>

      <br />
    </div>
  )
}

export default Login
