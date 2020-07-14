import React from "react"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import { form, input } from "./styles"
import { cx } from "emotion"

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

  function handleSubmit(e) {
    console.log(e.target.value)
  }

  return (
    <div>
      <h1>This will be the Login page</h1>
      <form className={form}>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      <hr />

      <br />
    </div>
  )
}

export default Login
