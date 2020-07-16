import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"

import { cx } from "emotion"
import Input from "components/Input"
import Button from "components/Button"

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

  const [formData, updateFormData] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    })
    console.log(e.target.name, e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    updateFormData(([e.target.type]: e.target.value))

    console.log(formData)
  }

  return (
    <div>
      <h1>Login page</h1>
      <form>
        <label>
          Email
          <Input name="email" type="email" />
        </label>
        <label>
          Password
          <Input name="password" type="password" />
        </label>

        <Button onClick={handleSubmit}>Submit</Button>
      </form>

      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      <hr />

      <br />
    </div>
  )
}

export default Login
