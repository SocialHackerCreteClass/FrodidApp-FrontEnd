import React from "react"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"

Login.propTypes = {
  setLoggedStatus: PropTypes.func
}

function Login(props) {
  const history = useHistory()

  const { setLoggedStatus } = props

  function login() {
    setLoggedStatus(true)
    history.push("/")
  }

  function logout() {
    setLoggedStatus(false)
    history.push("/login")
  }

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
